/* Pulmonary physiology figure renderer: returns SVG strings for question figures. */
(function(){
const INK='#1d1d1f',MUTE='#6b6b70',GRID='#ececea',AX='#9a9a9a';
const PAL=['#1d5c7a','#c2410c','#15803d','#7c3aed','#b42318','#0e7490'];
const f1=n=>(+n).toFixed(1);

function frame(o){
  // o: {W,H,L,R,T,B,xr:[a,b],yr:[a,b],xt:[..],yt:[..],xl,yl,xfmt,yfmt,flipX}
  const {W,H,L,R,T,B}=o;
  const sx=v=>{const t=(v-o.xr[0])/(o.xr[1]-o.xr[0]);return L+(o.flipX?1-t:t)*(W-L-R)};
  const sy=v=>H-B-(v-o.yr[0])/(o.yr[1]-o.yr[0])*(H-T-B);
  let s='';
  (o.yt||[]).forEach(v=>{s+=`<line x1="${L}" x2="${W-R}" y1="${f1(sy(v))}" y2="${f1(sy(v))}" stroke="${GRID}"/>`+
    `<text x="${L-6}" y="${f1(sy(v)+4)}" font-size="11" text-anchor="end" fill="${MUTE}">${o.yfmt?o.yfmt(v):v}</text>`});
  (o.xt||[]).forEach(v=>{s+=`<text x="${f1(sx(v))}" y="${H-B+15}" font-size="11" text-anchor="middle" fill="${MUTE}">${o.xfmt?o.xfmt(v):v}</text>`});
  s+=`<line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="${AX}"/><line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" stroke="${AX}"/>`;
  if(o.xl)s+=`<text x="${(L+W-R)/2}" y="${H-4}" font-size="12" text-anchor="middle" fill="#444">${o.xl}</text>`;
  if(o.yl)s+=`<text x="13" y="${(T+H-B)/2}" font-size="12" text-anchor="middle" fill="#444" transform="rotate(-90 13 ${(T+H-B)/2})">${o.yl}</text>`;
  return {sx,sy,s};
}
const path=(pts,sx,sy)=>pts.map((p,i)=>(i?'L':'M')+f1(sx(p[0]))+' '+f1(sy(p[1]))).join('');
const svg=(W,H,body,label,max)=>`<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${max||560}px" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;
const dot=(x,y,c)=>`<circle cx="${f1(x)}" cy="${f1(y)}" r="4.5" fill="${c||INK}"/>`;
const lbl=(x,y,t,o={})=>{const a=`x="${f1(x)}" y="${f1(y)}" font-size="${o.fs||14}" font-weight="${o.fw||700}" text-anchor="${o.a||'middle'}"`;return `<text ${a} fill="#fff" stroke="#fff" stroke-width="4" stroke-linejoin="round">${t}</text><text ${a} fill="${o.c||INK}">${t}</text>`};
function legend(items,x,y){ // items [{c,dash,t}]
  return items.map((it,i)=>`<line x1="${x}" x2="${x+26}" y1="${y+i*17}" y2="${y+i*17}" stroke="${it.c}" stroke-width="2.4" ${it.dash?`stroke-dasharray="${it.dash}"`:''} ${it.op?`opacity="${it.op}"`:''}/>`+
    `<text x="${x+32}" y="${y+i*17+4}" font-size="11.5" fill="#333">${it.t}</text>`).join('');
}

/* ---------- 1. Static pressure–volume curves ---------- */
function pv(f){
  const W=560,H=380;
  const F=frame({W,H,L:52,R:18,T:16,B:42,xr:[-40,50],yr:[0,120],xt:[-40,-30,-20,-10,0,10,20,30,40,50],yt:[0,20,40,60,80,100,120],
    xl:'Pressure (cm H₂O)',yl:'Volume (% predicted TLC)'});
  const Pl=V=>2+0.12*(V-20)+25*Math.pow(Math.max(0,(V-20)/80),6);
  const Pcw=V=>V>=65?0.35*(V-65):0.2*(V-65)-20*Math.pow((65-V)/45,6);
  const Ple=V=>1+0.06*(V-30)+22*Math.pow(Math.max(0,(V-30)/85),6);
  const Plf=V=>4+0.35*(V-12)+30*Math.pow(Math.max(0,(V-12)/58),4);
  const curve=(fn,a,b)=>{const p=[];for(let V=a;V<=b+1e-9;V+=0.5)p.push([fn(V),V]);return p};
  const root=(fn,a,b)=>{for(let i=0;i<60;i++){const m=(a+b)/2;(fn(a)*fn(m)<=0)?b=m:a=m}return (a+b)/2};
  const ov=f.overlay, fade=ov?0.3:1;
  let s=F.s+`<line x1="${f1(F.sx(0))}" x2="${f1(F.sx(0))}" y1="16" y2="${H-42}" stroke="#bbb" stroke-dasharray="3 3"/>`;
  const C0=PAL[0];
  s+=`<g opacity="${fade}"><path d="${path(curve(Pl,20,100),F.sx,F.sy)}" fill="none" stroke="${C0}" stroke-width="2.4"/>`+
     `<path d="${path(curve(Pcw,20,100),F.sx,F.sy)}" fill="none" stroke="${C0}" stroke-width="2.2" stroke-dasharray="7 5"/>`+
     `<path d="${path(curve(V=>Pl(V)+Pcw(V),20,100),F.sx,F.sy)}" fill="none" stroke="${C0}" stroke-width="2.2" stroke-dasharray="9 4 2 4"/></g>`;
  const frc=root(V=>Pl(V)+Pcw(V),25,64);
  let leg=[{c:C0,t:'Lung'},{c:C0,dash:'7 5',t:'Chest wall'},{c:C0,dash:'9 4 2 4',t:'Respiratory system'}];
  if(ov){
    const C1=PAL[1];let fn,a,b,name;
    if(ov==='emphysema'){fn=Ple;a=30;b=115;name='Emphysema'}else{fn=Plf;a=17;b=66;name='Fibrosis'}
    s+=`<path d="${path(curve(fn,a,b),F.sx,F.sy)}" fill="none" stroke="${C1}" stroke-width="2.6"/>`+
       `<path d="${path(curve(V=>fn(V)+Pcw(V),a,b),F.sx,F.sy)}" fill="none" stroke="${C1}" stroke-width="2.4" stroke-dasharray="9 4 2 4"/>`;
    leg=[{c:C0,op:.35,t:'Normal lung / chest wall / resp. system (faded)'},{c:C1,t:name+' lung'},{c:C1,dash:'9 4 2 4',t:name+' respiratory system'}];
  }
  if(f.labels!==false&&!ov){
    const P=[['A',Pl(100)+Pcw(100),100,-14,4],['B',0,65,-12,-6],['C',0,frc,-12,-6],['D',Pl(20)+Pcw(20),20,-14,4]];
    P.forEach(([n,p,v,dx,dy])=>{s+=dot(F.sx(p),F.sy(v))+lbl(F.sx(p)+dx,F.sy(v)+dy,n)});
  }
  s+=legend(leg,F.sx(-38),F.sy(112)+28);
  return svg(W,H,s,'Static pressure–volume curves of lung, chest wall and respiratory system');
}

/* ---------- 2. Flow–volume loops ---------- */
const FV={
  normal:{tlc:6,rv:1.5,pef:9,pif:6,k:1,u0:.12},
  obstructive:{tlc:6.8,rv:3.0,pef:5.2,pif:5,k:2.3,u0:.08},
  severe:{tlc:7.3,rv:4.3,pef:3,pif:4,k:3,u0:.06},
  restrictive:{tlc:4.0,rv:1.1,pef:7.2,pif:4.6,k:.85,u0:.12},
  fixed:{tlc:6,rv:1.5,pef:9,pif:6,k:1,u0:.12,ecap:3.4,icap:3.2},
  varextra:{tlc:6,rv:1.5,pef:9,pif:6,k:1,u0:.12,icap:2.4},
  varintra:{tlc:6,rv:1.5,pef:9,pif:6,k:1,u0:.12,ecap:3.4},
  weakness:{tlc:4.6,rv:2.3,pef:4.6,pif:3,k:1,u0:.28},
  mainstem:{tlc:5.6,rv:1.7,pef:7.5,pif:5,k:1,u0:.12,bi:true}
};
function fvPts(kind){
  const p=FV[kind]||FV.normal,pts=[],N=120,span=p.tlc-p.rv;
  for(let i=0;i<=N;i++){const u=i/N,v=p.tlc-u*span;
    let fl=u<p.u0?p.pef*Math.sin(Math.PI/2*u/p.u0):p.pef*Math.pow((1-u)/(1-p.u0),p.k);
    if(p.ecap)fl=Math.min(fl,p.ecap);if(p.bi&&u>.55)fl=Math.min(fl,1.1*Math.pow((1-u)/.45,.6));pts.push([v,fl])}
  for(let i=N;i>=0;i--){const u=i/N,v=p.tlc-u*span;let fl=-p.pif*Math.sin(Math.PI*u);if(p.icap)fl=Math.max(fl,-p.icap);if(p.bi&&u<.45)fl=-Math.min(-fl,1.6*Math.sin(Math.PI*u/.9));pts.push([v,fl])}
  return pts;
}
function fvAxes(W,H,L,R,T,B,small){
  return frame({W,H,L,R,T,B,xr:[0,8],yr:[-7,10],flipX:true,xt:small?[]:[8,7,6,5,4,3,2,1,0],yt:small?[]:[-6,-3,0,3,6,9],
    xl:small?'':'Lung volume (L)  — TLC to the left',yl:small?'':'Flow (L/s)'});
}
function fv(f){
  const W=560,H=360,F=fvAxes(W,H,48,16,16,40);
  let s=F.s+`<line x1="48" x2="${W-16}" y1="${f1(F.sy(0))}" y2="${f1(F.sy(0))}" stroke="#bbb"/>`;
  s+=`<text x="${W-20}" y="${f1(F.sy(8.6))}" font-size="11" text-anchor="end" fill="${MUTE}">Expiration ↑</text><text x="${W-20}" y="${f1(F.sy(-6.2))}" font-size="11" text-anchor="end" fill="${MUTE}">Inspiration ↓</text>`;
  const loops=f.loops||['normal'],names=f.names||loops,leg=[];
  loops.forEach((k,i)=>{const c=i===0&&loops.length>1?'#8a8a8a':PAL[i%PAL.length];const dash=i===0&&loops.length>1?'6 4':'';
    s+=`<path d="${path(fvPts(k),F.sx,F.sy)}Z" fill="none" stroke="${c}" stroke-width="${i===0&&loops.length>1?2:2.6}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
    leg.push({c,dash,t:names[i]})});
  s+=legend(leg,60,30);
  return svg(W,H,s,'Flow–volume loops');
}
function fvgrid(f){
  const loops=f.loops||[],n=loops.length,cols=n<=4?2:3,rows=Math.ceil(n/cols),pw=190,ph=150,W=cols*pw,H=rows*ph+22;
  let s='';
  loops.forEach((k,i)=>{const cx=(i%cols)*pw,cy=Math.floor(i/cols)*ph;
    const F=fvAxes(pw,ph,10,10,10,12,true);
    s+=`<g transform="translate(${cx},${cy})"><rect x="3" y="3" width="${pw-6}" height="${ph-6}" rx="8" fill="#fff" stroke="#e3e3e0"/>${F.s}`+
      `<line x1="10" x2="${pw-10}" y1="${f1(F.sy(0))}" y2="${f1(F.sy(0))}" stroke="#ccc"/>`+
      `<path d="${path(fvPts('normal'),F.sx,F.sy)}Z" fill="none" stroke="#9a9a9a" stroke-width="1.4" stroke-dasharray="4 3"/>`+
      `<path d="${path(fvPts(k),F.sx,F.sy)}Z" fill="none" stroke="${PAL[0]}" stroke-width="2.4"/>`+
      lbl(24,26,String.fromCharCode(65+i),{fs:16})+`</g>`});
  s+=`<text x="8" y="${H-6}" font-size="11" fill="${MUTE}">Each panel: flow (up = expiration) vs lung volume (TLC at left). Dashed = normal reference.</text>`;
  return svg(W,H,s,'Flow–volume loop panels',cols*200);
}

/* ---------- 3. HbO2 dissociation ---------- */
function hb(f){
  const W=560,H=360,F=frame({W,H,L:50,R:16,T:16,B:42,xr:[0,120],yr:[0,100],xt:[0,20,40,60,80,100,120],yt:[0,25,50,75,100],xl:'PO₂ (mm Hg)',yl:'Hemoglobin O₂ saturation (%)'});
  const S=(P,c)=>{const n=2.7;return 100*(c.max||1)*Math.pow(P,n)/(Math.pow(P,n)+Math.pow(c.p50,n))};
  let s=F.s;const curves=f.curves||[{p50:27,label:'Normal'}],leg=[];
  const dashes=['','7 4','3 3','10 4 2 4','2 5','12 6'];
  curves.forEach((c,i)=>{const col=PAL[i%PAL.length],pts=[];for(let P=0;P<=120;P+=1)pts.push([P,S(P,c)]);
    s+=`<path d="${path(pts,F.sx,F.sy)}" fill="none" stroke="${col}" stroke-width="2.4" ${dashes[i%6]?`stroke-dasharray="${dashes[i%6]}"`:''}/>`;
    leg.push({c:col,dash:dashes[i%6],t:c.label})});
  (f.points||[]).forEach(p=>{const c=curves[0],y=S(p.po2,c);s+=dot(F.sx(p.po2),F.sy(y),INK)+lbl(F.sx(p.po2)+9,F.sy(y)+16,p.label,{a:'start'})});
  if(curves.length>1)s+=`<rect x="${f1(F.sx(74)-8)}" y="${f1(F.sy(40)-12)}" width="150" height="${leg.length*17+8}" fill="#fff" stroke="#e3e3e0" rx="6"/>`+legend(leg,F.sx(74),F.sy(40));
  return svg(W,H,s,'Oxyhemoglobin dissociation curve');
}

/* ---------- 4. Spirogram ---------- */
function spiro(f){
  const W=600,H=340,RV=1.5,FRC=3,TV=.5,TLC=6;
  const F=frame({W,H,L:50,R:200,T:14,B:36,xr:[0,24],yr:[0,6.6],xt:[],yt:[0,1,2,3,4,5,6],xl:'Time',yl:'Lung volume (L)'});
  const pts=[];const add=(t,v)=>pts.push([t,v]);
  for(let t=0;t<=6;t+=.05)add(t,FRC+TV*(1-Math.cos(2*Math.PI*t/3))/2);
  for(let t=0;t<=2;t+=.05)add(6+t,FRC+(TLC-FRC)*(1-Math.cos(Math.PI*t/2))/2);
  for(let t=0;t<=4;t+=.05)add(8+t,TLC-(TLC-RV)*(1-Math.cos(Math.PI*t/4))/2);
  for(let t=0;t<=2;t+=.05)add(12+t,RV+(FRC-RV)*(1-Math.cos(Math.PI*t/2))/2);
  for(let t=0;t<=9;t+=.05)add(14+t,FRC+TV*(1-Math.cos(2*Math.PI*t/3))/2);
  let s=F.s+`<rect x="50" y="${f1(F.sy(RV))}" width="${W-250}" height="${f1(F.sy(0)-F.sy(RV))}" fill="#f2f2ef"/>`+
    `<text x="${f1(F.sx(4))}" y="${f1(F.sy(.7))}" font-size="11" fill="${MUTE}">not exhaled (not seen by spirometer)</text>`;
  [RV,FRC,FRC+TV,TLC].forEach(v=>s+=`<line x1="50" x2="${W-195}" y1="${f1(F.sy(v))}" y2="${f1(F.sy(v))}" stroke="#c9c9c6" stroke-dasharray="3 3"/>`);
  s+=`<path d="${path(pts,F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.4"/>`;
  const R={TV:[FRC,FRC+TV],IRV:[FRC+TV,TLC],ERV:[RV,FRC],RV:[0,RV],IC:[FRC,TLC],FRC:[0,FRC],VC:[RV,TLC],TLC:[0,TLC]};
  Object.entries(f.marks||{}).forEach(([L,name],i)=>{const r=R[name];if(!r)return;const x=W-190+i*36,y1=F.sy(r[1]),y2=F.sy(r[0]);
    s+=`<path d="M${x-5} ${f1(y1)} H${x} V${f1(y2)} H${x-5}" fill="none" stroke="${INK}" stroke-width="1.6"/>`+lbl(x+12,(y1+y2)/2+5,L)});
  return svg(W,H,s,'Spirogram with labeled volumes',600);
}

/* ---------- 5. CPET ---------- */
function cpet(f){
  const W=600,H=400,L=50,R=52,T=16;
  const top=frame({W,H:300,L,R,T,B:28,xr:[0,16],yr:[0,5],xt:[],yt:[0,1,2,3,4,5],yl:'V̇O₂, V̇CO₂ (L/min)'});
  const VO2=t=>.35+.19*t, VCO2=t=>VO2(t)*(.8+.012*t)+(t>8?.06*Math.pow(t-8,1.5):0);
  const VE=t=>24*VCO2(t)+(t>12?3.2*Math.pow(t-12,1.7):0);
  const veMax=160,sy2=v=>300-28-v/veMax*(300-T-28);
  let s=top.s;
  for(let v=0;v<=160;v+=40)s+=`<text x="${W-R+6}" y="${f1(sy2(v)+4)}" font-size="11" fill="${MUTE}">${v}</text>`;
  s+=`<line x1="${W-R}" y1="${T}" x2="${W-R}" y2="272" stroke="${AX}"/><text x="${W-12}" y="${(T+272)/2}" font-size="12" text-anchor="middle" fill="#444" transform="rotate(90 ${W-12} ${(T+272)/2})">V̇E (L/min)</text>`;
  const P=fn=>{const p=[];for(let t=0;t<=16;t+=.1)p.push([t,fn(t)]);return p};
  s+=`<path d="${path(P(VO2),top.sx,top.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.4"/>`+
     `<path d="${path(P(VCO2),top.sx,top.sy)}" fill="none" stroke="${PAL[1]}" stroke-width="2.4" stroke-dasharray="7 4"/>`+
     `<path d="${P(VE).map((p,i)=>(i?'L':'M')+f1(top.sx(p[0]))+' '+f1(sy2(p[1]))).join('')}" fill="none" stroke="${PAL[2]}" stroke-width="2.4" stroke-dasharray="2 3"/>`;
  [['A',0],['B',8],['C',12],['D',16]].forEach(([n,t])=>{const x=top.sx(t);s+=`<line x1="${f1(x)}" x2="${f1(x)}" y1="${T}" y2="372" stroke="#b9b9b6" stroke-dasharray="3 4"/>`+lbl(x,290,n,{fs:15})});
  // workload staircase
  const wy=w=>392-w/300*70;let wp=`M${L} ${wy(0)}`;for(let k=0;k<8;k++){const t0=k*2,w=40+k*35;wp+=` L${f1(top.sx(t0))} ${f1(wy(w))} L${f1(top.sx(t0+2))} ${f1(wy(w))}`}
  s+=`<path d="${wp}" fill="none" stroke="#555" stroke-width="1.8"/><text x="${L+4}" y="318" font-size="11" fill="${MUTE}">Workload (W), stepped every 2 min</text>`+
     `<text x="${(L+W-R)/2}" y="${H-2}" font-size="12" text-anchor="middle" fill="#444">Time (min)</text>`;
  s+=legend([{c:PAL[0],t:'V̇O₂'},{c:PAL[1],dash:'7 4',t:'V̇CO₂'},{c:PAL[2],dash:'2 3',t:'V̇E (right axis)'}],L+14,T+16);
  return svg(W,H+4,s,'Incremental exercise test',600);
}

/* ---------- 6. Tidal breath ---------- */
function breath(f){
  const W=600,H=430,L=60,R=16,Ti=2,Te=2.4,TT=Ti+Te,Rw=.5;
  const V=t=>t<=Ti?.5*(1-Math.cos(Math.PI*t/Ti))/2:.5*(1+Math.cos(Math.PI*(t-Ti)/Te))/2;
  const Pa=t=>t<=Ti?-Rw*Math.sin(Math.PI*t/Ti):Rw*Math.sin(Math.PI*(t-Ti)/Te);
  const Pp=t=>Pa(t)-(5+6*V(t));
  const tD=Ti+Te/2, marks=[['A',0],['B',Ti/2],['C',Ti],['D',tD],['E',TT]];
  const panel=(y0,h,yr,yt,yl,fn,col)=>{const F=frame({W,H:y0+h,L,R,T:y0+8,B:8,xr:[-.2,TT+.2],yr,xt:[],yt,yl:''});
    const p=[];for(let t=0;t<=TT+1e-9;t+=.02)p.push([t,fn(t)]);
    return F.s+`<text x="${L+6}" y="${y0+20}" font-size="12" font-weight="600" fill="#444">${yl}</text><path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${col}" stroke-width="2.4"/>`;};
  let s=panel(0,130,[0,.6],[0,.25,.5],'Lung volume above FRC (L)',V,PAL[0])+
        panel(135,130,[-.8,.8],[-.5,0,.5],'Alveolar pressure (cm H₂O)',Pa,PAL[1])+
        panel(270,130,[-9,-4],[-9,-8,-7,-6,-5,-4],'Pleural pressure (cm H₂O)',Pp,PAL[2]);
  const sx=t=>L+(t+.2)/(TT+.4)*(W-L-R);
  s+=`<line x1="${L}" x2="${W-R}" y1="${f1(135+8+(.5)*(130-16))}" y2="${f1(135+8+(.5)*(130-16))}" stroke="#bbb"/>`;
  marks.forEach(([n,t])=>{const x=sx(t);s+=`<line x1="${f1(x)}" x2="${f1(x)}" y1="4" y2="402" stroke="#b9b9b6" stroke-dasharray="3 4"/>`+lbl(x,420,n,{fs:15})});
  s+=`<text x="${f1(sx(Ti/2))}" y="${H-1}" font-size="11" fill="${MUTE}" text-anchor="middle"></text>`;
  return svg(W,H,s,'Volume, alveolar and pleural pressure during a tidal breath',600);
}

/* ---------- 7. Forced expiratory volume–time ---------- */
function fevt(f){
  const W=560,H=340,F=frame({W,H,L:50,R:40,T:16,B:40,xr:[0,6],yr:[0,6],xt:[0,1,2,3,4,5,6],yt:[0,1,2,3,4,5,6],xl:'Time from start of forced expiration (s)',yl:'Volume exhaled (L)'});
  const D={normal:{fvc:5,r:.8},obstructive:{fvc:3.6,r:.5},restrictive:{fvc:3,r:.9},severe:{fvc:2.8,r:.38}};
  let s=F.s+`<line x1="${f1(F.sx(1))}" x2="${f1(F.sx(1))}" y1="16" y2="${H-40}" stroke="#999" stroke-dasharray="5 4"/>`+lbl(F.sx(1)+4,30,'1 s',{fs:12,a:'start',fw:600,c:MUTE});
  const curves=f.curves||['normal'],names=f.names||curves.map((_,i)=>String(i+1));
  curves.forEach((k,i)=>{const d=D[k]||D.normal,tau=-1/Math.log(1-d.r),p=[];for(let t=0;t<=6;t+=.05)p.push([t,d.fvc*(1-Math.exp(-t/tau))]);
    const c=PAL[i%PAL.length];s+=`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${c}" stroke-width="2.6"/>`+lbl(F.sx(6)+10,F.sy(p[p.length-1][1])+5,names[i],{c,fs:14})});
  return svg(W,H,s,'Forced expiratory volume–time curves');
}

window.FIG={render(f){try{return ({pv,fv,fvgrid,hb,spiro,cpet,breath,fevt}[f.type]||(()=>''))(f)}catch(e){console.error(e);return ''}}};
})();
