/* Pulmonary figure renderer, part 2: course-style P–V diagram with muscle curves and more teaching graphs.
   Registers extra types on window.FIG (load after fig.js). */
(function(){
const INK='#1d1d1f',MUTE='#6b6b70',GRID='#ececea',AX='#9a9a9a';
const PAL=['#1d5c7a','#c2410c','#15803d','#7c3aed','#b42318','#0e7490'];
const GREEN='#16a34a',ORANGE='#ea6a0c',NAVY='#163a63',RED='#e11d1d';
const f1=n=>(+n).toFixed(1);
function frame(o){
  const {W,H,L,R,T,B}=o;
  const sx=v=>{const t=(v-o.xr[0])/(o.xr[1]-o.xr[0]);return L+(o.flipX?1-t:t)*(W-L-R)};
  const sy=v=>H-B-(v-o.yr[0])/(o.yr[1]-o.yr[0])*(H-T-B);
  let s='';
  (o.yt||[]).forEach(v=>{s+=`<line x1="${L}" x2="${W-R}" y1="${f1(sy(v))}" y2="${f1(sy(v))}" stroke="${GRID}"/>`+
    `<text x="${L-6}" y="${f1(sy(v)+4)}" font-size="11" text-anchor="end" fill="${MUTE}">${o.yfmt?o.yfmt(v):v}</text>`});
  (o.xt||[]).forEach(v=>{s+=`<text x="${f1(sx(v))}" y="${H-B+15}" font-size="11" text-anchor="middle" fill="${MUTE}">${o.xfmt?o.xfmt(v):v}</text>`});
  if(!o.noAxes)s+=`<line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="${AX}"/><line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" stroke="${AX}"/>`;
  if(o.xl)s+=`<text x="${(L+W-R)/2}" y="${H-4}" font-size="12" text-anchor="middle" fill="#444">${o.xl}</text>`;
  if(o.yl)s+=`<text x="13" y="${(T+H-B)/2}" font-size="12" text-anchor="middle" fill="#444" transform="rotate(-90 13 ${(T+H-B)/2})">${o.yl}</text>`;
  return {sx,sy,s};
}
const path=(pts,sx,sy)=>pts.map((p,i)=>(i?'L':'M')+f1(sx(p[0]))+' '+f1(sy(p[1]))).join('');
const svg=(W,H,body,label,max)=>`<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${max||560}px" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;
const dot=(x,y,c,r)=>`<circle cx="${f1(x)}" cy="${f1(y)}" r="${r||4.5}" fill="${c||INK}"/>`;
const lbl=(x,y,t,o={})=>{const a=`x="${f1(x)}" y="${f1(y)}" font-size="${o.fs||14}" font-weight="${o.fw||700}" text-anchor="${o.a||'middle'}"`;return `<text ${a} fill="#fff" stroke="#fff" stroke-width="4" stroke-linejoin="round">${t}</text><text ${a} fill="${o.c||INK}">${t}</text>`};
function legend(items,x,y,box){
  let s='';if(box){const w=box;s+=`<rect x="${x-8}" y="${y-12}" width="${w}" height="${items.length*17+8}" rx="6" fill="#fff" stroke="#e3e3e0"/>`}
  return s+items.map((it,i)=>`<line x1="${x}" x2="${x+26}" y1="${y+i*17}" y2="${y+i*17}" stroke="${it.c}" stroke-width="${it.w||2.4}" ${it.dash?`stroke-dasharray="${it.dash}"`:''} ${it.op?`opacity="${it.op}"`:''}/>`+
    `<text x="${x+32}" y="${y+i*17+4}" font-size="11.5" fill="#333">${it.t}</text>`).join('');
}
const curveV=(fn,a,b,st)=>{const p=[];for(let V=a;V<=b+1e-9;V+=(st||0.5))p.push([fn(V),V]);return p};
const root=(fn,a,b)=>{let fa=fn(a);for(let i=0;i<70;i++){const m=(a+b)/2,fm=fn(m);if(fa*fm<=0)b=m;else{a=m;fa=fm}}return (a+b)/2};

/* ---------- P–V diagram with respiratory muscle curves (course style) ----------
 spec: {type:"pvm", variant:"normal|weakness|fibrosis|emphysema|obesity", compare:true (draw normal faded),
        labels:true|false, marks:{"A":"TLC","B":"CW","C":"FRC","D":"RV"} (which letters to draw and where),
        hide:["lung","cw","rs","muscles"], vc:true (bracket TLC–RV) } */
function pvmModel(variant){
  const Pl=V=>V<10?0:0.1*(V-10)+28*Math.pow((V-10)/90,5);
  const PlF=V=>V<8?0:0.42*(V-8)+28*Math.pow(Math.max(0,(V-8)/58),4);
  const PlE=V=>V<14?0:0.05*(V-14)+20*Math.pow(Math.max(0,(V-14)/110),6);
  const Pcw=V=>V>=65?0.3*(V-65)+0.004*Math.pow(V-65,2.2):0.16*(V-65)-22*Math.pow((65-V)/45,5);
  const PcwOb=V=>Pcw(V)+(V>20?10*Math.min(1,(V-20)/45):0);
  const m={lung:Pl,cw:Pcw,vmin:10,vmax:100,iShift:0,eShift:0};
  if(variant==='fibrosis'){m.lung=PlF;m.vmin=8}
  if(variant==='emphysema'){m.lung=PlE;m.vmin=14}
  if(variant==='obesity'){m.cw=PcwOb}
  if(variant==='weakness'){m.iShift=-26;m.eShift=17}
  m.rs=V=>m.lung(V)+m.cw(V);
  // muscle lines fixed from the NORMAL system: inspiratory line meets normal RS at 100% TLC, expiratory line meets it at 20%
  const rsN=V=>Pl(V)+Pcw(V), Mi=rsN(100)+m.iShift, Me=rsN(20)+m.eShift;
  m.ins=V=>Mi-0.5*(V-100); m.exp=V=>Me-0.2*(V-20);
  m.tlc=root(V=>m.rs(V)-m.ins(V),40,135);
  m.rv=root(V=>m.rs(V)-m.exp(V),5,45);
  if(variant==='emphysema'){m.rvMuscle=m.rv;m.rv=34;m.trap=true} // RV set by early airway closure (air trapping), above the muscle limit
  m.frc=root(m.rs,m.rv+1,m.tlc-1);
  m.cwrest=root(m.cw,20,100);
  return m;
}
function pvm(f){
  const W=600,H=420,L=36,R=16,T=18,B=46;
  const F=frame({W,H,L,R,T,B,xr:[-45,80],yr:[0,128],xt:[],yt:[],noAxes:true,xl:''});
  const hide=new Set(f.hide||[]),variant=f.variant||'normal',M=pvmModel(variant),N=pvmModel('normal');
  let s='';
  const x0=F.sx(0);
  s+=`<line x1="${L}" x2="${W-R}" y1="${f1(F.sy(0))}" y2="${f1(F.sy(0))}" stroke="${NAVY}" stroke-width="3"/>`+
     `<line x1="${f1(x0)}" x2="${f1(x0)}" y1="${T}" y2="${f1(F.sy(0))}" stroke="${NAVY}" stroke-width="3"/>`+
     `<text x="${f1(x0)}" y="${H-24}" font-size="13" text-anchor="middle" fill="${NAVY}">−   Pressure (cm H₂O)   +</text>`+
     `<text x="${f1(x0)}" y="${H-8}" font-size="11" text-anchor="middle" fill="${MUTE}">(compression)                                   (expansion)</text>`+
     `<text x="${f1(x0+8)}" y="${T+10}" font-size="12" fill="${NAVY}">Volume</text>`;
  const draw=(m,op,thin)=>{let g='';const w=thin?1.8:2.6;
    if(!hide.has('lung'))g+=`<path d="M${f1(F.sx(-40))} ${f1(F.sy(m.vmin))} L${f1(x0)} ${f1(F.sy(m.vmin))} ${path(curveV(m.lung,m.vmin,m.tlc+(variant==='emphysema'?4:3)),F.sx,F.sy).replace(/^M/,'L')}" fill="none" stroke="${ORANGE}" stroke-width="${w}"/>`;
    if(!hide.has('cw'))g+=`<path d="${path(curveV(m.cw,m.rv-1,Math.min(m.tlc+12,122)),F.sx,F.sy)}" fill="none" stroke="${GREEN}" stroke-width="${w}"/>`;
    if(!hide.has('rs'))g+=`<path d="${path(curveV(m.rs,m.rv-1,m.tlc+2),F.sx,F.sy)}" fill="none" stroke="${NAVY}" stroke-width="${w-0.2}" stroke-dasharray="9 4 2 4"/>`;
    if(!hide.has('muscles')){
      g+=`<path d="${path(curveV(m.ins,m.tlc-14,m.tlc+12),F.sx,F.sy)}" fill="none" stroke="${RED}" stroke-width="${thin?3:4.5}" stroke-dasharray="10 6"/>`+
         `<path d="${path(curveV(m.exp,m.rv-3,m.rv+30),F.sx,F.sy)}" fill="none" stroke="${RED}" stroke-width="${thin?3:4.5}" stroke-dasharray="10 6"/>`}
    return op<1?`<g opacity="${op}">${g}</g>`:g};
  if(f.compare&&variant!=='normal')s+=draw(N,0.28,true);
  s+=draw(M,1,false);
  if(f.labels!==false){
    const marks=f.marks||{A:'TLC',B:'CW',C:'FRC',D:'RV'};
    const vol={TLC:M.tlc,CW:M.cwrest,FRC:M.frc,RV:M.rv};
    const src={TLC:[M.rs(M.tlc),M.tlc],RV:[M.rs(M.rv),M.rv]};
    const items=Object.entries(marks).map(([L1,k])=>({L1,k,v:vol[k]})).filter(o=>o.v!=null).sort((a,b)=>b.v-a.v);
    let prev=-1e9;items.forEach(o=>{o.y=F.sy(o.v);o.ly=Math.max(o.y,prev+15);prev=o.ly});
    items.forEach(({L1,k,y,ly})=>{
      if(src[k])s+=`<line x1="${f1(F.sx(src[k][0]))}" x2="${f1(x0)}" y1="${f1(y)}" y2="${f1(y)}" stroke="#333" stroke-dasharray="3 3"/>`;
      s+=`<line x1="${f1(x0-6)}" x2="${f1(x0+6)}" y1="${f1(y)}" y2="${f1(y)}" stroke="#111" stroke-width="3"/>`+lbl(x0-16,ly+5,L1,{fs:15})});
  }
  if(M.trap&&f.labels!==false){const y=F.sy(M.rv);s+=`<text x="${f1(F.sx(-43))}" y="${f1(F.sy(4))}" font-size="11" fill="#b42318">D: RV raised by early airway closure (air trapping)</text>`}
  if(f.vc){const y1=F.sy(M.tlc),y2=F.sy(M.rv),x=F.sx(-36);s+=`<path d="M${x+6} ${f1(y1)} H${x} V${f1(y2)} H${x+6}" fill="none" stroke="#333" stroke-width="1.5"/>`+lbl(x-4,(y1+y2)/2,'VC',{fs:12,a:'end',fw:600})}
  s+=legend([{c:GREEN,t:'Chest wall'},{c:ORANGE,t:'Lung'},{c:NAVY,dash:'9 4 2 4',t:'Respiratory system'},{c:RED,dash:'10 6',w:3.5,t:'Respiratory muscles (max effort)'}].filter((it,i)=>!hide.has(['cw','lung','rs','muscles'][i])),F.sx(28),F.sy(36),210);
  if(f.compare&&variant!=='normal')s+=`<text x="${f1(F.sx(28)-8)}" y="${f1(F.sy(36)+78)}" font-size="11" fill="${MUTE}">Faded lines = normal</text>`;
  return svg(W,H,s,'Pressure–volume curves of chest wall, lung and respiratory system with respiratory muscle curves',600);
}

/* ---------- single-alveolus model ---------- spec {type:"alveolus", values:{PA:"0",Ppl:"−5",Pel:"",Ptp:""}} */
function alveolus(f){
  const W=420,H=340,v=f.values||{};
  const t=(k,lab)=>v[k]!=null&&v[k]!==''?`${lab} = ${v[k]}`:lab;
  let s=`<path d="M20 330 L20 140 L130 40 L180 40 L180 120 L240 120 L240 40 L290 40 L400 140 L400 330 Z" fill="#bcdcf5" stroke="#163a63" stroke-width="2"/>`+
    `<rect x="180" y="0" width="60" height="140" fill="#fff"/><line x1="180" y1="0" x2="180" y2="128" stroke="#163a63" stroke-width="6"/><line x1="240" y1="0" x2="240" y2="128" stroke="#163a63" stroke-width="6"/>`+
    `<ellipse cx="210" cy="215" rx="115" ry="95" fill="#fff" stroke="#163a63" stroke-width="7"/><rect x="183" y="110" width="54" height="22" fill="#fff"/>`+
    `<text x="165" y="225" font-size="26" fill="#163a63">P<tspan font-size="17" dy="6">A</tspan>${v.PA!=null&&v.PA!==''?'<tspan dy="-6" font-size="20"> = '+v.PA+'</tspan>':''}</text>`;
  s+=`<line x1="318" y1="215" x2="246" y2="215" stroke="#ea6a0c" stroke-width="5"/><path d="M236 215 L250 207 L250 223 Z" fill="#ea6a0c"/>`+
     `<text x="262" y="196" font-size="24" fill="#ea6a0c">P<tspan font-size="15" dy="6">el</tspan>${v.Pel!=null&&v.Pel!==''?'<tspan dy="-6" font-size="18"> '+v.Pel+'</tspan>':''}</text>`+
     `<line x1="300" y1="238" x2="368" y2="238" stroke="#15803d" stroke-width="4"/><path d="M292 238 L304 231 L304 245 Z" fill="#15803d"/><path d="M376 238 L364 231 L364 245 Z" fill="#15803d"/>`+
     `<text x="330" y="272" font-size="22" fill="#15803d">P<tspan font-size="14" dy="6">tp</tspan>${v.Ptp!=null&&v.Ptp!==''?'<tspan dy="-6" font-size="16"> '+v.Ptp+'</tspan>':''}</text>`+
     `<text x="335" y="312" font-size="22" fill="#163a63">P<tspan font-size="14" dy="6">pl</tspan>${v.Ppl!=null&&v.Ppl!==''?'<tspan dy="-6" font-size="16"> '+v.Ppl+'</tspan>':''}</text>`+
     `<text x="248" y="22" font-size="12" fill="${MUTE}">to mouth (P<tspan font-size="9" dy="3">atm</tspan><tspan dy="-3"> = 0)</tspan></text>`;
  return svg(W,H,s,'Single-alveolus model in the thorax',380);
}

/* ---------- two-alveolus model ----------
 spec {type:"twoalv", units:[{state:"normal|narrow|blocked|noflow", label:"Left", po2:"100", pco2:"40", sat:"97%"}, {...}],
       venous:{po2:"40",sat:"75%"}, arterial:{po2:"?",sat:"?"}, fio2:"0.21"} */
function twoalv(f){
  const W=600,H=380,u=f.units||[{},{}];let s='';
  const val=x=>x==null||x===''?'':String(x);
  // trachea
  s+=`<path d="M285 10 L285 70 L170 120 M315 10 L315 70 L430 120" fill="none" stroke="#163a63" stroke-width="3"/>`+
     `<path d="M300 75 L190 125 M300 75 L410 125" fill="none" stroke="#163a63" stroke-width="0"/>`+
     (f.fio2?`<text x="325" y="22" font-size="12" fill="${MUTE}">FiO₂ ${f.fio2}</text>`:'');
  [0,1].forEach(i=>{const U=u[i]||{},cx=i?440:160,st=U.state||'normal';
    // airway
    const ax=i?430:170;
    const narrow=st==='narrow',blocked=st==='blocked';
    s+=`<line x1="${ax}" y1="118" x2="${cx}" y2="150" stroke="#163a63" stroke-width="${narrow?3:14}" stroke-linecap="round" opacity="${narrow?1:.85}"/>`;
    if(narrow)s+=`<text x="${cx+(i?28:-28)}" y="140" font-size="11" text-anchor="middle" fill="#b42318">narrowed</text>`;
    // alveolus
    s+=`<circle cx="${cx}" cy="205" r="62" fill="${blocked?'#f3e3c3':'#e9f3fb'}" stroke="#163a63" stroke-width="3"/>`;
    if(blocked){for(let k=0;k<14;k++){const a=k*2.4,r=12+((k*37)%40);s+=`<circle cx="${f1(cx+r*Math.cos(a))}" cy="${f1(205+r*Math.sin(a))}" r="6" fill="#d9b56c" opacity=".8"/>`}
      s+=`<text x="${cx}" y="262" font-size="11" text-anchor="middle" fill="#8a5a00">filled (pus/fluid)</text>`}
    const t1=val(U.po2),t2=val(U.pco2);
    if(t1||t2)s+=`<rect x="${cx-48}" y="${t2?180:192}" width="96" height="${t2?48:26}" rx="6" fill="#fff" opacity=".85"/>`;
    if(t1)s+=`<text x="${cx}" y="${t2?199:210}" font-size="14" text-anchor="middle" fill="${INK}">PAO₂ ${t1}</text>`;
    if(t2)s+=`<text x="${cx}" y="220" font-size="14" text-anchor="middle" fill="${INK}">PACO₂ ${t2}</text>`;
    if(U.label)s+=`<text x="${cx}" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#444" dx="${i?60:-60}">${U.label}</text>`;
    // capillary
    const noflow=st==='noflow';
    s+=`<path d="M${cx-90} 300 Q${cx} 250 ${cx+90} 300" fill="none" stroke="${noflow?'#cfcfcf':'#b42318'}" stroke-width="${noflow?4:9}" ${noflow?'stroke-dasharray="6 5"':''} opacity=".85"/>`;
    if(noflow)s+=`<text x="${cx}" y="326" font-size="11" text-anchor="middle" fill="#666">no blood flow</text>`;
    const sat=val(U.sat);if(sat&&!noflow)s+=`<text x="${cx}" y="326" font-size="13" text-anchor="middle" fill="#7a1f1f">end-capillary SaO₂ ${sat}</text>`;
  });
  // venous in / arterial out
  const v=f.venous||{},a=f.arterial||{};
  s+=`<path d="M20 300 L70 300" stroke="#5b4bb7" stroke-width="9"/><path d="M70 292 L84 300 L70 308 Z" fill="#5b4bb7"/>`+
     `<text x="12" y="350" font-size="12.5" fill="#3d2f99">Mixed venous${val(v.po2)?' PO₂ '+val(v.po2):''}${val(v.sat)?' · Sat '+val(v.sat):''}</text>`+
     `<path d="M530 300 L575 300" stroke="#b42318" stroke-width="9"/><path d="M575 292 L590 300 L575 308 Z" fill="#b42318"/>`+
     `<text x="588" y="350" font-size="12.5" text-anchor="end" fill="#7a1f1f">Arterial (mixed)${val(a.po2)?' PO₂ '+val(a.po2):''}${val(a.sat)?' · Sat '+val(a.sat):''}</text>`+
     `<path d="M70 300 Q160 345 300 340 Q440 345 530 300" fill="none" stroke="#ddd" stroke-width="2" stroke-dasharray="3 4"/>`;
  return svg(W,H+4,s,'Two-alveolus model',600);
}

/* ---------- capillary transit (PO2 along the capillary) ----------
 spec {type:"transit", curves:[{kind:"normal",label:"1"}], mode:"o2"|"gases", marks:[0.25], alveolar:100}
 kinds (o2): normal, fibrosis, severe, altitude, exercise(normal curve, mark 0.25s) ; (gases): n2o, o2, co */
function transit(f){
  const W=560,H=340,gases=f.mode==='gases';
  const F=frame({W,H,L:52,R:20,T:16,B:42,xr:[0,.75],yr:gases?[0,1.05]:[0,110],xt:[0,.25,.5,.75],yt:gases?[0,.25,.5,.75,1]:[0,20,40,60,80,100],
    xfmt:v=>v+' s',yfmt:gases?(v=>Math.round(v*100)+'%'):null,xl:'Time in pulmonary capillary (s)',yl:gases?'Capillary partial pressure (% of alveolar)':'Capillary PO₂ (mm Hg)'});
  const K={normal:{PA:100,Pv:40,tau:.055},fibrosis:{PA:100,Pv:40,tau:.2},severe:{PA:100,Pv:40,tau:.5},altitude:{PA:50,Pv:25,tau:.16},
    n2o:{PA:1,Pv:0,tau:.012},o2:{PA:1,Pv:0,tau:.07},co:{PA:1,Pv:0,lin:.06}};
  let s=F.s;const curves=f.curves||[{kind:gases?'o2':'normal'}];
  const alvs=new Set();curves.forEach(c=>{const k=K[c.kind]||K.normal;alvs.add(gases?1:(c.alveolar||k.PA))});
  alvs.forEach(PA=>{s+=`<line x1="52" x2="${W-20}" y1="${f1(F.sy(PA))}" y2="${f1(F.sy(PA))}" stroke="#777" stroke-dasharray="6 4"/>`+lbl(58,F.sy(PA)-6,gases?'alveolar':'Alveolar PO₂ '+PA,{fs:11,a:'start',fw:600,c:MUTE})});
  curves.forEach((c,i)=>{const k=K[c.kind]||K.normal,PA=gases?1:(c.alveolar||k.PA),Pv=gases?0:(c.venous||k.Pv),p=[];
    for(let t=0;t<=.75+1e-9;t+=.005)p.push([t,k.lin!=null?k.lin*t/.75:PA-(PA-Pv)*Math.exp(-t/k.tau)]);
    const col=PAL[i%PAL.length];s+=`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${col}" stroke-width="2.6"/>`;
    const lt=c.labelAt||(.62),y=k.lin!=null?k.lin*lt/.75:PA-(PA-Pv)*Math.exp(-lt/k.tau);
    s+=lbl(F.sx(lt),F.sy(y)+(i%2?16:-8),c.label||String(i+1),{c:col,fs:13})});
  (f.marks||[]).forEach(t=>{s+=`<line x1="${f1(F.sx(t))}" x2="${f1(F.sx(t))}" y1="16" y2="${H-42}" stroke="#999" stroke-dasharray="3 3"/>`});
  return svg(W,H,s,'Gas uptake along the pulmonary capillary');
}

/* ---------- O2 content vs PO2 ---------- spec {type:"o2content", curves:[{hb:15,label:"Normal"},{hb:9,label:"Anemia"},{hb:15,max:.5,p50:19,label:"CO"}]} */
function o2content(f){
  const W=560,H=350,F=frame({W,H,L:50,R:16,T:16,B:42,xr:[0,120],yr:[0,28],xt:[0,20,40,60,80,100,120],yt:[0,5,10,15,20,25],xl:'PO₂ (mm Hg)',yl:'O₂ content (mL O₂/dL)'});
  const S=(P,c)=>{const n=2.7,p50=c.p50||27;return (c.max||1)*Math.pow(P,n)/(Math.pow(P,n)+Math.pow(p50,n))};
  let s=F.s;const curves=f.curves||[{hb:15,label:'Normal'}],leg=[],dashes=['','7 4','3 3','10 4 2 4','2 5'];
  curves.forEach((c,i)=>{const col=PAL[i%PAL.length],p=[];for(let P=0;P<=120;P++)p.push([P,1.39*(c.hb||15)*S(P,c)+0.003*P]);
    s+=`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${col}" stroke-width="2.5" ${dashes[i%5]?`stroke-dasharray="${dashes[i%5]}"`:''}/>`;leg.push({c:col,dash:dashes[i%5],t:c.label})});
  s+=legend(leg,F.sx(72),F.sy(5.2),170);
  return svg(W,H,s,'Blood O₂ content vs PO₂');
}

/* ---------- ventilatory response to CO2 ---------- spec {type:"co2resp", lines:[{kind:"normal",label:"A"},{kind:"hypoxia"},{kind:"copd"},{kind:"opioid"},{kind:"acidosis"}]} */
function co2resp(f){
  const W=560,H=350,F=frame({W,H,L:50,R:16,T:16,B:42,xr:[30,70],yr:[0,60],xt:[30,35,40,45,50,55,60,65,70],yt:[0,10,20,30,40,50,60],xl:'Arterial PCO₂ (mm Hg)',yl:'Minute ventilation (L/min)'});
  const K={normal:{x0:36,sl:2.2,base:4},hypoxia:{x0:34,sl:4.2,base:6},copd:{x0:44,sl:0.8,base:4},opioid:{x0:44,sl:1.0,base:3},acidosis:{x0:31,sl:2.2,base:6}};
  let s=F.s;const lines=f.lines||[{kind:'normal'}];
  lines.forEach((l,i)=>{const k=K[l.kind]||K.normal,col=PAL[i%PAL.length],p=[];for(let x=30;x<=70;x+=.5){const v=k.base+Math.max(0,x-k.x0)*k.sl;if(v<=60)p.push([x,v])}
    s+=`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${col}" stroke-width="2.6"/>`;const e=p[p.length-1];s+=lbl(F.sx(e[0])-4,F.sy(e[1])-8,l.label||String(i+1),{c:col,fs:13,a:'end'})});
  if(f.note)s+=`<text x="60" y="34" font-size="11.5" fill="${MUTE}">${f.note}</text>`;
  return svg(W,H,s,'Ventilatory response to CO₂');
}

/* ---------- regional ventilation & perfusion in the upright lung ---------- spec {type:"vqheight", labels:true} */
function vqheight(f){
  const W=560,H=350,F=frame({W,H,L:52,R:52,T:16,B:42,xr:[0,10],yr:[0,1.6],xt:[],yt:[0,.5,1,1.5],xl:'Base of lung  →  Apex',yl:'Flow (L/min per % lung volume)'});
  const Q=x=>1.35-0.12*x, Vt=x=>0.82-0.04*x, VQ=x=>Vt(x)/Math.max(.08,Q(x));
  const sy2=v=>F.sy(0)-(v/3.5)*(F.sy(0)-F.sy(1.6));
  let s=F.s;const P=fn=>{const p=[];for(let x=0;x<=10;x+=.1)p.push([x,fn(x)]);return p};
  for(let v=0;v<=3;v+=1)s+=`<text x="${W-46}" y="${f1(sy2(v)+4)}" font-size="11" fill="${MUTE}">${v}</text>`;
  s+=`<line x1="${W-52}" y1="16" x2="${W-52}" y2="${H-42}" stroke="${AX}"/><text x="${W-12}" y="${(16+H-42)/2}" font-size="12" text-anchor="middle" fill="#444" transform="rotate(90 ${W-12} ${(16+H-42)/2})">V̇/Q̇ ratio</text>`;
  s+=`<path d="${path(P(Q),F.sx,F.sy)}" fill="none" stroke="${PAL[4]}" stroke-width="2.6"/>`+
     `<path d="${path(P(Vt),F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.6" stroke-dasharray="7 4"/>`+
     `<path d="${P(VQ).map((p,i)=>(i?'L':'M')+f1(F.sx(p[0]))+' '+f1(sy2(p[1]))).join('')}" fill="none" stroke="${PAL[2]}" stroke-width="2.6" stroke-dasharray="2 3"/>`;
  s+=legend([{c:PAL[4],t:'Blood flow (Q̇)'},{c:PAL[0],dash:'7 4',t:'Ventilation (V̇)'},{c:PAL[2],dash:'2 3',t:'V̇/Q̇ (right axis)'}],F.sx(.4),30,150);
  if(f.labels){[['X',.5],['Y',9.5]].forEach(([n,x])=>{s+=`<line x1="${f1(F.sx(x))}" x2="${f1(F.sx(x))}" y1="16" y2="${H-42}" stroke="#bbb" stroke-dasharray="3 4"/>`+lbl(F.sx(x),H-28,n,{fs:14})})}
  return svg(W,H,s,'Regional ventilation and perfusion in the upright lung');
}

/* ---------- Fowler single-breath N2 washout ---------- spec {type:"fowler", deadspace:150, labels:true} */
function fowler(f){
  const W=560,H=320,VD=f.deadspace||150,F=frame({W,H,L:50,R:16,T:16,B:42,xr:[0,700],yr:[0,90],xt:[0,100,200,300,400,500,600,700],yt:[0,20,40,60,80],xl:'Volume expired after a breath of 100% O₂ (mL)',yl:'Expired N₂ (%)'});
  const N=v=>{const z=(v-VD)/28;return 60/(1+Math.exp(-z))+(v>VD?0.012*(v-VD):0)};
  let s=F.s;const p=[];for(let v=0;v<=700;v+=4)p.push([v,N(v)]);
  s+=`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.6"/>`;
  if(f.labels!==false){s+=`<line x1="${f1(F.sx(VD))}" x2="${f1(F.sx(VD))}" y1="16" y2="${H-42}" stroke="#999" stroke-dasharray="4 4"/>`+
    lbl(F.sx(VD/2),F.sy(12),'I',{fs:13})+lbl(F.sx(VD),F.sy(40)-10,'II',{fs:13,a:'start'})+lbl(F.sx(450),F.sy(N(450))-10,'III',{fs:13})}
  return svg(W,H,s,'Single-breath nitrogen washout');
}

/* ---------- breathing patterns ---------- spec {type:"pattern", panels:["normal","cheyne","apneustic","ataxic","kussmaul"]} labeled A–E */
function pattern(f){
  const panels=f.panels||['normal'],pw=560,ph=70,H=panels.length*ph+18,W=pw;let s='';
  const gen={normal:t=>.5*Math.sin(2*Math.PI*t/4),
    cheyne:t=>{const c=(t%20)/20,env=c<.7?Math.sin(Math.PI*c/.7):0;return .95*env*Math.sin(2*Math.PI*t/2.6)},
    apneustic:t=>{const c=t%8;return c<1.2?c/1.2:c<5.5?1:c<6.6?1-(c-5.5)/1.1:0},
    ataxic:t=>{const seed=Math.floor(t/3.3);const a=[.4,.9,.2,.7,0,0,.55,.3,1,.15,.65][seed%11];return a*Math.sin(2*Math.PI*t/3.3)},
    kussmaul:t=>1.0*Math.sin(2*Math.PI*t/3.2)};
  panels.forEach((k,i)=>{const y0=i*ph,mid=y0+ph/2,fn=gen[k]||gen.normal;let d='';
    for(let t=0;t<=40;t+=.05){const x=40+t/40*(pw-60),y=mid-fn(t)*ph*.38;d+=(t?'L':'M')+f1(x)+' '+f1(y)}
    s+=`<rect x="2" y="${y0+3}" width="${pw-4}" height="${ph-6}" rx="7" fill="#fff" stroke="#e3e3e0"/><line x1="40" x2="${pw-20}" y1="${mid}" y2="${mid}" stroke="#eee"/><path d="${d}" fill="none" stroke="${PAL[0]}" stroke-width="2"/>`+lbl(20,mid+5,String.fromCharCode(65+i),{fs:15})});
  s+=`<text x="40" y="${H-4}" font-size="11" fill="${MUTE}">Each trace: lung volume vs time (≈40 s); upward = inspiration.</text>`;
  return svg(W,H,s,'Breathing pattern traces',560);
}

/* ---------- pulmonary vascular resistance ---------- spec {type:"pvr", mode:"volume"|"pressure", labels:true} */
function pvr(f){
  const W=560,H=330;
  if(f.mode==='pressure'){
    const F=frame({W,H,L:52,R:16,T:16,B:42,xr:[10,40],yr:[0,4],xt:[10,15,20,25,30,35,40],yt:[0,1,2,3,4],xl:'Mean pulmonary artery pressure (mm Hg)',yl:'PVR (Wood units)'});
    const p=[];for(let x=10;x<=40;x+=.5)p.push([x,0.9+2.6*Math.exp(-(x-10)/5.5)]);
    return svg(W,H,F.s+`<path d="${path(p,F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.6"/>`+`<text x="${f1(F.sx(24))}" y="${f1(F.sy(2.4))}" font-size="12" fill="${MUTE}">recruitment + distension</text>`,'PVR vs pulmonary artery pressure');
  }
  const F=frame({W,H,L:52,R:16,T:16,B:42,xr:[0,100],yr:[0,3],xt:[],yt:[],xl:'Lung volume (RV → TLC)',yl:'Vascular resistance'});
  const ext=v=>2.6*Math.exp(-v/22)+.15, alv=v=>.15+2.3*Math.pow(v/100,3), tot=v=>ext(v)+alv(v);
  const P=fn=>{const p=[];for(let v=0;v<=100;v++)p.push([v,fn(v)]);return p};
  let s=F.s+`<path d="${path(P(ext),F.sx,F.sy)}" fill="none" stroke="${PAL[1]}" stroke-width="2.2" stroke-dasharray="7 4"/>`+
    `<path d="${path(P(alv),F.sx,F.sy)}" fill="none" stroke="${PAL[2]}" stroke-width="2.2" stroke-dasharray="2 3"/>`+
    `<path d="${path(P(tot),F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.8"/>`;
  if(f.labels!==false)[['RV',0],['FRC',38],['TLC',100]].forEach(([n,v])=>{s+=`<text x="${f1(F.sx(v))}" y="${H-26}" font-size="11.5" text-anchor="middle" fill="#444">${n}</text>`});
  s+=legend([{c:PAL[0],t:'Total PVR'},{c:PAL[1],dash:'7 4',t:'Extra-alveolar vessels'},{c:PAL[2],dash:'2 3',t:'Alveolar (capillary) vessels'}],F.sx(30),30,180);
  return svg(W,H,s,'Pulmonary vascular resistance vs lung volume');
}

/* ---------- surfactant: air- vs saline-filled lung P–V ---------- spec {type:"hysteresis", names:["Air-filled","Saline-filled"]} */
function hysteresis(f){
  const W=560,H=330,F=frame({W,H,L:52,R:16,T:16,B:42,xr:[0,30],yr:[0,200],xt:[0,5,10,15,20,25,30],yt:[0,50,100,150,200],xl:'Transpulmonary pressure (cm H₂O)',yl:'Lung volume (mL)'});
  const nm=f.names||['Air-filled','Saline-filled'];
  const sat=(p,p0,k)=>p<p0?0:180*(1-Math.exp(-(p-p0)/k));
  const inf=[],def=[],sal=[];for(let p=0;p<=30;p+=.25){inf.push([p,sat(p,8,5)]);def.push([p,185*(1-Math.exp(-p/4))]);sal.push([p,Math.min(190,190*(1-Math.exp(-p/2.4)))])}
  let s=F.s+`<path d="${path(inf,F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.6"/><path d="${path(def,F.sx,F.sy)}" fill="none" stroke="${PAL[0]}" stroke-width="2.6" stroke-dasharray="7 4"/>`+
    `<path d="${path(sal,F.sx,F.sy)}" fill="none" stroke="${PAL[1]}" stroke-width="2.6"/>`;
  s+=lbl(F.sx(16),F.sy(115),nm[0]+' (inflation)',{fs:11.5,a:'start',c:PAL[0],fw:600})+lbl(F.sx(3.2),F.sy(160),nm[0]+' (deflation)',{fs:11.5,a:'start',c:PAL[0],fw:600})+lbl(F.sx(1.2),F.sy(196),nm[1],{fs:11.5,a:'start',c:PAL[1],fw:600});
  return svg(W,H,s,'Pressure–volume curves of air- and saline-filled lungs');
}

/* ---------- CO2 dissociation (Haldane) ---------- spec {type:"co2diss", points:true} */
function co2diss(f){
  const W=560,H=330,F=frame({W,H,L:52,R:16,T:16,B:42,xr:[0,80],yr:[0,70],xt:[0,20,40,60,80],yt:[0,10,20,30,40,50,60,70],xl:'PCO₂ (mm Hg)',yl:'CO₂ content (mL/dL)'});
  const C=(p,deoxy)=>(deoxy?52:50)*Math.pow(p/46,.30)*(p>0?1:0);
  const P=d=>{const a=[];for(let p=1;p<=80;p++)a.push([p,C(p,d)]);return a};
  let s=F.s+`<path d="${path(P(false),F.sx,F.sy)}" fill="none" stroke="${PAL[4]}" stroke-width="2.6"/><path d="${path(P(true),F.sx,F.sy)}" fill="none" stroke="${PAL[3]}" stroke-width="2.6" stroke-dasharray="7 4"/>`;
  if(f.points!==false){const a=[40,C(40,false)],v=[46,C(46,true)];s+=dot(F.sx(a[0]),F.sy(a[1]))+lbl(F.sx(a[0])+8,F.sy(a[1])+18,'a',{a:'start'})+dot(F.sx(v[0]),F.sy(v[1]))+lbl(F.sx(v[0])-6,F.sy(v[1])-10,'v',{a:'end'})}
  s+=legend([{c:PAL[4],t:'Oxygenated blood (SaO₂ ~97%)'},{c:PAL[3],dash:'7 4',t:'Deoxygenated blood (SvO₂ ~75% and below)'}],F.sx(30),F.sy(14),260);
  return svg(W,H,s,'CO₂ dissociation curves');
}

const extra={pvm,alveolus,twoalv,transit,o2content,co2resp,vqheight,fowler,pattern,pvr,hysteresis,co2diss};
const base=window.FIG&&window.FIG.render;
window.FIG={render(f){try{if(extra[f.type])return extra[f.type](f);return base?base(f):''}catch(e){console.error(e);return ''}}};
window.FIG_PVM=pvmModel;
})();
