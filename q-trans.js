window.QBANK=(window.QBANK||[]).concat([
{
 "id": "tr-01",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "O₂ content & delivery",
 "difficulty": 2,
 "stem": "A 72-year-old woman with heart failure has a hemoglobin of 12 g/dL, SaO₂ 94%, PaO₂ 70 mm Hg, and a cardiac output of 4.5 L/min. Use 1.39 mL O₂/g Hb and 0.003 mL O₂/dL/mm Hg.\n\nWhich of the following is closest to her systemic O₂ delivery?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "72 mL O₂/min",
  "540 mL O₂/min",
  "715 mL O₂/min",
  "1,000 mL O₂/min",
  "3,150 mL O₂/min"
 ],
 "answer": 2,
 "explanation": "CaO₂ = 1.39 × 12 × 0.94 + 0.003 × 70 = 15.68 + 0.21 ≈ 15.9 mL O₂/dL. O₂ delivery = CO × CaO₂ = 4.5 L/min × 15.9 mL/dL. Since 1 L = 10 dL, that is 45 dL/min × 15.9 mL/dL ≈ 715 mL O₂/min. Normal delivery is about 1,000 mL/min (5 L/min × 20 mL/dL), roughly four times resting consumption of 250 mL/min; her lower Hb, saturation and cardiac output have eaten into that reserve.",
 "whyWrong": [
  "This multiplies 15.9 by 4.5 without converting liters to deciliters. Content is per dL, so cardiac output must be 45 dL/min.",
  "This multiplies hemoglobin by cardiac output in dL (12 × 45), leaving out the 1.39 and the saturation.",
  "",
  "This is normal resting O₂ delivery (5 L/min × 20 mL/dL). Her content and cardiac output are both lower.",
  "This multiplies PaO₂ by cardiac output (70 × 45). PO₂ enters content only through the small dissolved term."
 ],
 "objective": "Calculate arterial O₂ content and systemic O₂ delivery.",
 "source": "O₂ and CO₂ Transport (Beiser): O₂ content and delivery; SG2/SG3 equations"
},
{
 "id": "tr-02",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "O₂ content & delivery",
 "difficulty": 2,
 "stem": "A 40-year-old man with hemoglobin 15 g/dL breathes 100% O₂ during surgery. His PaO₂ is 600 mm Hg and his hemoglobin is 100% saturated. Use 1.39 mL O₂/g Hb and 0.003 mL O₂/dL/mm Hg.\n\nApproximately what percentage of his arterial O₂ content is carried dissolved in plasma?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "1.5%",
  "8%",
  "15%",
  "30%",
  "50%"
 ],
 "answer": 1,
 "explanation": "Hb-bound O₂ = 1.39 × 15 × 1.0 = 20.9 mL/dL. Dissolved O₂ = 0.003 × 600 = 1.8 mL/dL. Total ≈ 22.7 mL/dL, of which 1.8 (about 8%) is dissolved. Even at six times the normal PaO₂, dissolved O₂ is a small share; at a normal PaO₂ of 100 it is only 0.3 mL/dL (about 1.5%). Henry's law and the low solubility of O₂ explain why the body depends on hemoglobin.",
 "whyWrong": [
  "This is the dissolved share at a normal PaO₂ of 100 mm Hg (0.3 of ~21 mL/dL). His PaO₂ is 600.",
  "",
  "This would need about 3.7 mL/dL dissolved, a PaO₂ near 1,200 mm Hg.",
  "This would need about 9 mL/dL dissolved, a PaO₂ near 3,000 mm Hg.",
  "Dissolved O₂ would equal Hb-bound O₂ only at a PaO₂ near 7,000 mm Hg."
 ],
 "objective": "Compare dissolved and hemoglobin-bound O₂ and explain why dissolved O₂ alone cannot meet demand.",
 "source": "O₂ and CO₂ Transport (Beiser): Henry's law and dissolved O₂"
},
{
 "id": "tr-03",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 2,
 "stem": "A 28-year-old man with a ruptured spleen receives 12 units of packed red cells that had been stored for 5 weeks. Immediately afterward, a sample of his blood is used to construct an O₂–hemoglobin dissociation curve. Refer to the figure, which shows a normal curve and two others.\n\nWhich of the following best describes his curve and its cause?",
 "figure": {
  "type": "hb",
  "curves": [
   {
    "p50": 27,
    "label": "Normal"
   },
   {
    "p50": 34,
    "label": "X"
   },
   {
    "p50": 20,
    "label": "Y"
   }
  ]
 },
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Curve Y, because stored red cells are depleted of 2,3-DPG",
  "Curve X, because stored red cells accumulate 2,3-DPG",
  "Curve X, because the acidic storage solution lowers blood pH",
  "The normal curve, because 2,3-DPG affects only fetal hemoglobin",
  "Curve Y, because transfusion raises the hemoglobin concentration"
 ],
 "answer": 0,
 "explanation": "2,3-DPG binds deoxyhemoglobin and lowers its O₂ affinity, shifting the curve right. During storage, red cells lose 2,3-DPG, so transfused blood has a lower P50 and its curve shifts left (curve Y). That blood loads O₂ well in the lung but holds it more tightly and releases less to tissues until 2,3-DPG is regenerated over hours to days.",
 "whyWrong": [
  "",
  "2,3-DPG falls, not rises, during storage, so the curve shifts left.",
  "Acidosis would shift the curve right, but the dominant effect of prolonged storage is loss of 2,3-DPG and a left shift.",
  "2,3-DPG affects adult hemoglobin. Fetal hemoglobin binds it poorly, which is why HbF has high affinity.",
  "Hemoglobin concentration changes O₂ content but not the shape or position of the saturation curve."
 ],
 "objective": "Predict the HbO₂ curve shift caused by 2,3-DPG depletion in stored blood.",
 "source": "O₂ and CO₂ Transport (Beiser): factors shifting the HbO₂ curve; stored blood"
},
{
 "id": "tr-04",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 2,
 "stem": "Two patients' PaO₂ values fall by 30 mm Hg over a day. Patient 1 goes from 100 to 70 mm Hg. Patient 2, who has COPD, goes from 60 to 30 mm Hg. Both have a normal HbO₂ dissociation curve (figure; points P, Q, R and S mark PO₂ 100, 70, 60 and 30 mm Hg).\n\nWhich of the following best describes the change in arterial O₂ saturation?",
 "figure": {
  "type": "hb",
  "curves": [
   {
    "p50": 27,
    "label": "Normal"
   }
  ],
  "points": [
   {
    "po2": 100,
    "label": "P"
   },
   {
    "po2": 70,
    "label": "Q"
   },
   {
    "po2": 60,
    "label": "R"
   },
   {
    "po2": 30,
    "label": "S"
   }
  ]
 },
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Patient 2's saturation falls far more, because 60 mm Hg is the knee where the curve becomes steep",
  "Both fall by about the same amount, because both PaO₂ values fell by 30 mm Hg",
  "Patient 1's saturation falls more, because the fall started from a higher PaO₂",
  "Neither changes meaningfully, because saturation stays above 90% down to a PaO₂ of 30 mm Hg",
  "Patient 2's saturation falls less, because hypoxemia shifts the curve to the left"
 ],
 "answer": 0,
 "explanation": "Above about 60 mm Hg the curve is flat: going from 100 to 70 mm Hg lowers saturation only from about 97% to 93% (P to Q). Below 60 mm Hg it is steep: going from 60 to 30 mm Hg drops saturation from about 90% to 57% (R to S). The plateau protects arterial content against modest falls in PaO₂, but a patient already near the knee loses large amounts of O₂ content for small further falls.",
 "whyWrong": [
  "",
  "Saturation is not linear in PO₂. The same 30 mm Hg change causes a small fall on the plateau and a large fall on the steep part.",
  "Starting high puts patient 1 on the flat part, where a fall in PO₂ changes saturation least.",
  "Saturation is about 90% at 60 mm Hg and about 57% at 30 mm Hg; it is well below 90% at 30.",
  "Hypoxemia itself does not shift the curve left; chronic hypoxia raises 2,3-DPG, which shifts it right."
 ],
 "objective": "Use the sigmoidal shape and anchor points of the HbO₂ curve to predict saturation changes.",
 "source": "O₂ and CO₂ Transport (Beiser): HbO₂ curve anchor points"
},
{
 "id": "tr-05",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 3,
 "stem": "A climber at 8,000 m has an arterial blood gas of pH 7.53, PaCO₂ 14 mm Hg, PaO₂ 33 mm Hg. His measured SaO₂ is 72%. On a standard HbO₂ curve (pH 7.40, 37°C) a PO₂ of 33 mm Hg corresponds to a saturation of about 63%.\n\nWhich of the following best explains why his saturation is higher than predicted from the standard curve?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Respiratory alkalosis has shifted his HbO₂ curve to the left",
  "Increased 2,3-DPG has shifted his HbO₂ curve to the left",
  "Polycythemia has raised the percentage of hemoglobin that is saturated",
  "A rise in body temperature from exertion has shifted the curve to the right",
  "Dissolved O₂ adds to the measured saturation at low PaO₂"
 ],
 "answer": 0,
 "explanation": "Hyperventilation lowers PaCO₂ and raises pH. Low PCO₂ and high pH increase hemoglobin's O₂ affinity (the reverse of the Bohr effect), shifting the curve left. At the same PaO₂ of 33 mm Hg, his hemoglobin is therefore more saturated than the standard curve predicts. At extreme altitude this left shift helps loading in the lung, where PO₂ is the main problem.",
 "whyWrong": [
  "",
  "2,3-DPG rises at altitude and shifts the curve right, which would lower saturation at a given PO₂.",
  "Saturation is the percentage of hemoglobin carrying O₂. More hemoglobin raises content, not the saturation at a given PO₂.",
  "A higher temperature shifts the curve right and would lower his saturation further.",
  "Saturation describes hemoglobin only; dissolved O₂ is part of content, not saturation."
 ],
 "objective": "Predict how respiratory alkalosis shifts the HbO₂ curve and changes saturation at a given PO₂.",
 "source": "SG2 (Everest case) and O₂ and CO₂ Transport (Beiser): left-shifting factors"
},
{
 "id": "tr-06",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Fick principle & SvO₂",
 "difficulty": 2,
 "stem": "A 55-year-old man in the cardiac catheterization laboratory has an O₂ consumption of 300 mL/min. Arterial O₂ content is 19 mL O₂/dL and mixed venous (pulmonary artery) O₂ content is 13 mL O₂/dL.\n\nWhich of the following is closest to his cardiac output?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "0.5 L/min",
  "1.6 L/min",
  "2.3 L/min",
  "5.0 L/min",
  "50 L/min"
 ],
 "answer": 3,
 "explanation": "Fick principle: V̇O₂ = CO × (CaO₂ − CvO₂), so CO = V̇O₂/(CaO₂ − CvO₂) = 300 mL/min ÷ 6 mL/dL = 50 dL/min = 5.0 L/min. The a–v O₂ difference tells you how much O₂ each deciliter of blood gives up; dividing consumption by it gives the blood flow needed to supply that O₂.",
 "whyWrong": [
  "This divides 50 dL/min by 100 instead of 10. There are 10 dL in a liter.",
  "This divides V̇O₂ by arterial content (300/19) instead of the a–v difference.",
  "This divides V̇O₂ by venous content (300/13) instead of the a–v difference.",
  "",
  "This leaves the answer in dL/min (50 dL/min) without converting to L/min."
 ],
 "objective": "Use the Fick principle to calculate cardiac output.",
 "source": "O₂ and CO₂ Transport (Beiser): Fick principle"
},
{
 "id": "tr-07",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Fick principle & SvO₂",
 "difficulty": 3,
 "stem": "A 68-year-old man has cardiogenic shock after a large anterior myocardial infarction. His cardiac output is 2.5 L/min, hemoglobin 14 g/dL, SaO₂ 97%, and PaO₂ 100 mm Hg. His O₂ consumption is 250 mL/min.\n\nWhich of the following is closest to his mixed venous O₂ saturation?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "25%",
  "47%",
  "62%",
  "75%",
  "97%"
 ],
 "answer": 1,
 "explanation": "CaO₂ = 1.39 × 14 × 0.97 + 0.003 × 100 ≈ 19.2 mL/dL. From the Fick principle, CaO₂ − CvO₂ = V̇O₂/CO = 250 mL/min ÷ 25 dL/min = 10 mL/dL, so CvO₂ ≈ 9.2 mL/dL. Dividing by the capacity (1.39 × 14 = 19.5 mL/dL) gives SvO₂ ≈ 47%. When delivery falls but consumption does not, tissues extract a larger fraction of each deciliter, and the blood returns to the lungs less saturated (normal is about 75%).",
 "whyWrong": [
  "This would need an a–v difference of about 14 mL/dL, a cardiac output near 1.8 L/min.",
  "",
  "This corresponds to an a–v difference of about 7 mL/dL, which would need a cardiac output near 3.5 L/min.",
  "This is the normal mixed venous saturation at a cardiac output of 5 L/min. His output is half that.",
  "This is his arterial saturation. Mixed venous blood has already given up O₂ to the tissues."
 ],
 "objective": "Predict mixed venous saturation from O₂ consumption, cardiac output, and arterial content.",
 "source": "O₂ and CO₂ Transport (Beiser): Fick principle; SG3 venous admixture"
},
{
 "id": "tr-08",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Carbon monoxide",
 "difficulty": 2,
 "stem": "A 54-year-old man is found in a closed garage with a running car. He is confused and has a headache. On room air, arterial blood gas shows PaO₂ 98 mm Hg and PaCO₂ 36 mm Hg; co-oximetry shows that only 50% of his hemoglobin is carrying O₂. Refer to the figure, which shows a normal HbO₂ curve and four others.\n\nWhich curve best represents O₂ binding in his blood?",
 "figure": {
  "type": "hb",
  "curves": [
   {
    "p50": 27,
    "label": "Normal"
   },
   {
    "p50": 35,
    "label": "A"
   },
   {
    "p50": 19,
    "label": "B"
   },
   {
    "p50": 27,
    "max": 0.5,
    "label": "C"
   },
   {
    "p50": 19,
    "max": 0.5,
    "label": "D"
   }
  ]
 },
 "table": null,
 "fixedOrder": true,
 "choices": [
  "Curve A",
  "Curve B",
  "Curve C",
  "Curve D",
  "The normal curve"
 ],
 "answer": 3,
 "explanation": "Carbon monoxide binds hemoglobin with more than 200 times the affinity of O₂, so it occupies about half of his heme sites and caps the maximum O₂ saturation near 50% even though PaO₂ is normal. CO bound to some subunits also raises the O₂ affinity of the remaining sites, shifting the curve left. Curve D shows both effects: a low plateau and a left shift. Content and unloading are both reduced, so tissue hypoxia is worse than the 50% loss of carrying capacity alone.",
 "whyWrong": [
  "Curve A is shifted right with a normal maximum. CO does not lower affinity, and it lowers the maximum saturation.",
  "Curve B is shifted left but reaches full saturation. It ignores the hemoglobin occupied by CO.",
  "Curve C has the reduced maximum but normal affinity. It leaves out the left shift CO causes in the remaining hemoglobin.",
  "",
  "A normal curve would give an SaO₂ near 97% at a PaO₂ of 98. Half of his hemoglobin is not carrying O₂."
 ],
 "objective": "Describe how carbon monoxide caps O₂ saturation and shifts the remaining HbO₂ curve left.",
 "source": "SG2 (carbon monoxide case) and O₂ and CO₂ Transport (Beiser): carbon monoxide"
},
{
 "id": "tr-09",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Carbon monoxide",
 "difficulty": 3,
 "stem": "A 60-year-old woman with carbon monoxide poisoning has a hemoglobin of 14 g/dL, of which 60% is carrying O₂ (40% carboxyhemoglobin). She is placed in a hyperbaric chamber at 1,900 mm Hg breathing 100% O₂; her PaCO₂ is 40 mm Hg and R is 0.8. Assume PaO₂ ≈ PAO₂ and that, at the moment of measurement, the fraction of hemoglobin carrying O₂ is still 60%.\n\nWhich of the following is closest to her arterial O₂ content at that moment?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "11.7 mL/dL",
  "12.0 mL/dL",
  "13.6 mL/dL",
  "17.1 mL/dL",
  "24.9 mL/dL"
 ],
 "answer": 3,
 "explanation": "PAO₂ = 1.0 × (1,900 − 47) − 40/0.8 = 1,853 − 50 = 1,803 mm Hg. Hb-bound O₂ = 1.39 × 14 × 0.60 = 11.7 mL/dL. Dissolved O₂ = 0.003 × 1,803 = 5.4 mL/dL. Total ≈ 17.1 mL/dL. Usually the dissolved term is negligible, but at very high PaO₂ it adds meaningful content. Hyperbaric O₂ also speeds displacement of CO from hemoglobin (shorter carboxyhemoglobin half-life), which later raises the bound term too.",
 "whyWrong": [
  "This is the hemoglobin-bound O₂ alone, leaving out dissolved O₂.",
  "This is her content on room air in Chicago (PaO₂ ≈ 97): 11.7 + 0.3.",
  "This is her content on 100% O₂ at normal Chicago pressure (PaO₂ ≈ 650): 11.7 + 2.0.",
  "",
  "This assumes all hemoglobin is carrying O₂ (1.39 × 14 + 5.4). Before CO is displaced, 40% of her hemoglobin is still bound to CO."
 ],
 "objective": "Calculate O₂ content in carbon monoxide poisoning with 100% and hyperbaric O₂.",
 "source": "SG2 (carbon monoxide case): 100% O₂ and hyperbaric oxygen"
},
{
 "id": "tr-10",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Anemia & polycythemia",
 "difficulty": 3,
 "stem": "A 45-year-old man has a hemoglobin of 15 g/dL, SaO₂ 98%, PaO₂ 100 mm Hg, cardiac output 5 L/min, O₂ consumption 250 mL/min, and mixed venous saturation 75%. After massive hemodilution with crystalloid during surgery, his hemoglobin is 10 g/dL. SaO₂, PaO₂, cardiac output and O₂ consumption are unchanged.\n\nWhich of the following is closest to his new mixed venous O₂ saturation?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "50%",
  "63%",
  "75%",
  "85%",
  "98%"
 ],
 "answer": 1,
 "explanation": "New CaO₂ = 1.39 × 10 × 0.98 + 0.3 ≈ 13.9 mL/dL. Fick: CaO₂ − CvO₂ = V̇O₂/CO = 250/50 dL/min = 5 mL/dL, so CvO₂ ≈ 8.9 mL/dL. Dividing by the O₂ capacity (1.39 × 10 = 13.9) gives SvO₂ ≈ 63%. Each deciliter must still give up 5 mL of O₂, but it now carries less, so a larger fraction is extracted. Anemia leaves PaO₂ and SaO₂ normal but lowers content and delivery, and the venous saturation falls.",
 "whyWrong": [
  "This would need an a–v difference of about 7 mL/dL, more than his unchanged consumption and output require (5 mL/dL).",
  "",
  "This keeps his original saturation. With less hemoglobin, the same 5 mL/dL extraction removes a larger fraction of content.",
  "Venous saturation rises only when extraction falls relative to delivery; here delivery fell.",
  "This is his arterial saturation, which anemia does not change."
 ],
 "objective": "Predict how anemia changes O₂ content and mixed venous saturation with unchanged SaO₂.",
 "source": "O₂ and CO₂ Transport (Beiser): O₂ content and Fick principle"
},
{
 "id": "tr-11",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Anemia & polycythemia",
 "difficulty": 2,
 "stem": "A 35-year-old man has lived his whole life at 4,300 m. His arterial blood gas shows PaO₂ 50 mm Hg and SaO₂ 85%; his hemoglobin is 19 g/dL. A healthy sea-level resident has PaO₂ 95 mm Hg, SaO₂ 97% and hemoglobin 15 g/dL.\n\nCompared with the sea-level resident, which of the following best describes his arterial O₂ content?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "About 10% higher, because his extra hemoglobin more than offsets his lower saturation",
  "About 15% lower, because his saturation is 12 points lower",
  "About the same, because saturation and hemoglobin changes cancel exactly",
  "Lower, because his dissolved O₂ is about half as large",
  "Higher, mainly because hyperventilation raises dissolved O₂"
 ],
 "answer": 0,
 "explanation": "His CaO₂ = 1.39 × 19 × 0.85 + 0.003 × 50 ≈ 22.4 + 0.15 ≈ 22.6 mL/dL. The sea-level resident's CaO₂ = 1.39 × 15 × 0.97 + 0.003 × 95 ≈ 20.2 + 0.3 ≈ 20.5 mL/dL. His content is about 10% higher. Hypoxemia stimulates erythropoietin, and polycythemia raises content even though it cannot change saturation, which is set by PO₂. This preserves O₂ delivery at altitude.",
 "whyWrong": [
  "",
  "Saturation alone does not set content. Content is 1.39 × Hb × SaO₂, and his Hb is 27% higher.",
  "The two changes do not cancel; 19 × 0.85 = 16.2 is larger than 15 × 0.97 = 14.6.",
  "His dissolved O₂ is lower (0.15 vs 0.29 mL/dL), but the dissolved term is too small to decide content.",
  "Dissolved O₂ depends on PaO₂, which is lower, not higher, at altitude. The extra content comes from hemoglobin."
 ],
 "objective": "Compare O₂ content in chronic altitude polycythemia with normal, and explain why saturation is not content.",
 "source": "SG2 (Everest case): polycythemia and O₂ content"
},
{
 "id": "tr-12",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "CO₂ transport & Haldane",
 "difficulty": 2,
 "stem": "Red blood cells pass through the capillaries of exercising skeletal muscle, where CO₂ enters them from the tissues.\n\nWhich of the following happens inside these red cells as CO₂ is loaded?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Carbonic anhydrase forms H₂CO₃, HCO₃⁻ leaves the cell in exchange for Cl⁻, and deoxyhemoglobin buffers the H⁺",
  "Most of the CO₂ stays dissolved, because CO₂ is 20 times more soluble than O₂",
  "Carbamino compounds carry most of the CO₂, because CO₂ binds the heme iron",
  "HCO₃⁻ enters the cell from plasma in exchange for Cl⁻, which leaves",
  "Oxyhemoglobin binds the H⁺ produced, which raises its affinity for O₂"
 ],
 "answer": 0,
 "explanation": "Of the CO₂ added in the tissues (and given off in the lung), about 60% is carried as bicarbonate, 30% as carbamino compounds, and 10% dissolved. In the red cell, carbonic anhydrase speeds CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. HCO₃⁻ moves out to the plasma in exchange for Cl⁻ (the chloride shift), and the H⁺ is buffered by deoxyhemoglobin, which is a better buffer than oxyhemoglobin. Removing products keeps the reaction moving toward bicarbonate.",
 "whyWrong": [
  "",
  "Dissolved CO₂ accounts for only about 10% of the CO₂ exchanged (about 5% of total content). The high solubility explains its fast diffusion, not its main transport form.",
  "Carbamino compounds account for about 30% of the CO₂ exchanged, and CO₂ binds amine groups of the globin chains, not the heme iron.",
  "The chloride shift runs the other way in the tissues: HCO₃⁻ leaves the red cell and Cl⁻ enters.",
  "H⁺ binding lowers hemoglobin's O₂ affinity (Bohr effect), and deoxyhemoglobin, not oxyhemoglobin, is the better buffer."
 ],
 "objective": "Describe how CO₂ is converted to bicarbonate in red cells, including the chloride shift.",
 "source": "O₂ and CO₂ Transport (Beiser): CO₂ transport and buffering"
},
{
 "id": "tr-13",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "CO₂ transport & Haldane",
 "difficulty": 2,
 "stem": "In a laboratory, two samples of the same blood are equilibrated at a PCO₂ of 46 mm Hg. Sample 1 is equilibrated at a PO₂ of 40 mm Hg and sample 2 at a PO₂ of 100 mm Hg. Total CO₂ content is then measured in each.\n\nWhich of the following best describes sample 1 compared with sample 2?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Higher CO₂ content, because deoxyhemoglobin buffers H⁺ better and forms more carbamino compounds",
  "Lower CO₂ content, because deoxygenated blood has a lower pH",
  "The same CO₂ content, because PCO₂ alone determines CO₂ content",
  "Higher CO₂ content, because O₂ competes with CO₂ for binding to heme iron",
  "Lower CO₂ content, because the Bohr effect releases CO₂ from hemoglobin"
 ],
 "answer": 0,
 "explanation": "This is the Haldane effect. At the same PCO₂, deoxygenated blood carries more CO₂: deoxyhemoglobin binds H⁺ more readily, which pulls the carbonic acid reaction toward HCO₃⁻, and it forms more carbamino compounds. In the tissues, unloading of O₂ therefore helps blood pick up CO₂; in the lung, oxygenation helps it release CO₂. On a CO₂ dissociation plot, the venous curve lies above the arterial curve.",
 "whyWrong": [
  "",
  "Deoxyhemoglobin binds H⁺, which tends to raise pH and lets more CO₂ be carried as bicarbonate.",
  "CO₂ content depends on PCO₂ and on the oxygenation state of hemoglobin; that dependence is the Haldane effect.",
  "CO₂ binds the amine groups of globin, not the heme iron, so it does not compete directly with O₂ for heme.",
  "The Bohr effect describes CO₂ and H⁺ lowering O₂ affinity. The effect of O₂ on CO₂ carriage is the Haldane effect."
 ],
 "objective": "Explain the Haldane effect on CO₂ content at a given PCO₂.",
 "source": "O₂ and CO₂ Transport (Beiser): Haldane effect and CO₂ dissociation curve"
},
{
 "id": "tr-14",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "CO₂ transport & Haldane",
 "difficulty": 3,
 "stem": "A 30-year-old woman has a moderate asthma exacerbation with patchy bronchoconstriction. Some lung units are underventilated and others are overventilated relative to their perfusion. Arterial blood gas on room air shows PaO₂ 62 mm Hg and PaCO₂ 36 mm Hg.\n\nWhich of the following best explains why her overventilated units can correct her CO₂ but not her O₂?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "The CO₂ content curve is nearly linear, but hemoglobin leaving well-ventilated units is already near full saturation",
  "CO₂ diffuses 20 times faster than O₂, so underventilated units still eliminate CO₂ normally",
  "Hypoxic vasoconstriction diverts all blood away from the underventilated units",
  "The Haldane effect raises the PO₂ of blood leaving the overventilated units",
  "Overventilated units have a higher R, so they add extra O₂ to the blood"
 ],
 "answer": 0,
 "explanation": "Blood from all units mixes in the pulmonary veins, so what matters is content. The CO₂ content curve is nearly linear in the physiologic range, so the extra CO₂ blown off by overventilated units lowers their content enough to offset the excess retained by underventilated units, and PaCO₂ stays normal or low as total ventilation rises. The HbO₂ curve is flat above about 60 mm Hg: raising PAO₂ in overventilated units adds almost no O₂ because their hemoglobin is already about 97% saturated. The desaturated blood from underventilated units therefore lowers PaO₂.",
 "whyWrong": [
  "",
  "Underventilated units do retain CO₂; the problem is ventilation, not diffusion. It is the overventilated units that make up the difference.",
  "Hypoxic vasoconstriction reduces but does not abolish flow to poorly ventilated units, so mismatch and hypoxemia remain.",
  "The Haldane effect concerns CO₂ release when hemoglobin is oxygenated. It does not raise PO₂ beyond what alveolar gas provides.",
  "High-V/Q units do have a higher local R, but that reflects extra CO₂ removal, not extra O₂ uptake. Hemoglobin leaving them is already nearly saturated and cannot take on more O₂."
 ],
 "objective": "Contrast the linear CO₂ content curve with the flat top of the HbO₂ curve to explain hypoxemia without hypercapnia in V/Q mismatch.",
 "source": "O₂ and CO₂ Transport (Beiser): CO₂ dissociation curve; SG3 asthma two-alveolus model"
}
]);
