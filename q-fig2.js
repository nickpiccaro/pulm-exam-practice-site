window.QBANK=(window.QBANK||[]).concat([
{
 "id": "vq-g01",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Low V/Q",
 "difficulty": 2,
 "stem": "A 40-year-old woman with asthma comes to the emergency department with wheezing after a viral illness. Her SpO₂ is 92% on room air. Her lungs are represented by the two-alveolus model in the figure: unit 2 is supplied by a bronchospastic, narrowed airway, and both units receive equal blood flow.\n\nShe is given O₂ by nasal cannula (FiO₂ about 0.30). Which of the following best describes the expected effect on her arterial O₂ saturation?",
 "figure": {
  "type": "twoalv",
  "fio2": "0.21",
  "units": [
   {
    "state": "normal",
    "label": "Unit 1",
    "po2": "105",
    "pco2": "33",
    "sat": "98%"
   },
   {
    "state": "narrow",
    "label": "Unit 2",
    "po2": "55",
    "pco2": "45",
    "sat": "87%"
   }
  ],
  "venous": {
   "po2": "40",
   "sat": "75%"
  },
  "arterial": {
   "po2": "68",
   "sat": "92%"
  }
 },
 "choices": [
  "It rises toward normal, because unit 2 still receives some fresh gas, so raising FiO₂ raises its alveolar PO₂ and saturates its blood",
  "It barely changes, because blood leaving unit 2 never contacts alveolar gas",
  "It rises, mainly because the extra O₂ increases the O₂ content of blood leaving unit 1",
  "It falls, because supplemental O₂ releases hypoxic vasoconstriction around unit 2",
  "It rises, because supplemental O₂ relaxes the bronchospasm in unit 2"
 ],
 "answer": 0,
 "explanation": "Unit 2 is a low V/Q unit: its airway is narrowed, not closed, so it still receives some ventilation. Its alveolar gas has drifted toward mixed venous values (PAO₂ 55, PACO₂ 45), and blood leaving it is only about 87% saturated. When FiO₂ is raised to about 0.30 (PIO₂ ≈ 210 mm Hg), the small amount of gas that does reach unit 2 is much richer in O₂, so its PAO₂ rises to roughly 70 mm Hg. That moves its end-capillary blood up past the knee of the HbO₂ curve (about 93%), unit 1 rises to nearly 100%, and the mixed arterial saturation rises to about 95–96%. This O₂ responsiveness is what separates low V/Q from shunt, the asthma case in small group 3.",
 "whyWrong": [
  "",
  "That describes shunt (a completely blocked or fluid-filled unit). Unit 2's airway is narrowed, so some fresh gas still reaches it.",
  "Blood leaving unit 1 is already 98% saturated. Raising its PAO₂ adds only a little dissolved O₂; the gain comes from unit 2.",
  "Releasing hypoxic vasoconstriction can slightly worsen V/Q matching, but the rise in unit 2's PAO₂ far outweighs it, so saturation rises.",
  "O₂ is not a bronchodilator; a β₂-agonist such as albuterol relaxes airway smooth muscle. The improvement comes from enriching the gas that still reaches unit 2."
 ],
 "objective": "Use the two-alveolus model to explain why hypoxemia from low V/Q units responds to supplemental O₂.",
 "source": "Small Group 3 (Hypoxia 2): asthma two-alveolus model; V/Q I & II (Wolfe)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "vq-g02",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Shunt",
 "difficulty": 2,
 "fixedOrder": true,
 "stem": "A 75-year-old woman has left lower lobe pneumonia. Her lung is represented by the two-alveolus model in the figure. Unit 2 is completely filled with pus. Assume each unit receives half of the pulmonary blood flow, there is no hypoxic vasoconstriction, and (as in small group) the arterial saturation can be estimated by averaging the saturations of blood leaving the two units. On room air her SaO₂ is about 86%.\n\nShe is then placed on 100% O₂ by non-rebreather mask. Which of the following is closest to her new arterial O₂ saturation?",
 "figure": {
  "type": "twoalv",
  "units": [
   {
    "state": "normal",
    "label": "Unit 1",
    "po2": "100",
    "pco2": "40",
    "sat": "97%"
   },
   {
    "state": "blocked",
    "label": "Unit 2",
    "sat": "75%"
   }
  ],
  "venous": {
   "po2": "40",
   "sat": "75%"
  },
  "arterial": {
   "po2": "?",
   "sat": "?"
  }
 },
 "choices": [
  "75%",
  "81%",
  "About 87%",
  "97%",
  "100%"
 ],
 "answer": 2,
 "explanation": "Blood through unit 2 meets no alveolar gas, so it leaves at the mixed venous saturation of 75% whatever the FiO₂. On room air the mixture is (97 + 75)/2 = 86%. On 100% O₂, unit 1's blood rises only from 97% to 100%, because its hemoglobin was already nearly saturated, so the mixture becomes (100 + 75)/2 ≈ 87–88%. Shunt (V/Q = 0) barely responds to supplemental O₂. (Averaging saturations is the small-group simplification. Strictly, contents mix: at a PAO₂ near 650 mm Hg, unit 1's blood also carries about 2 mL/dL of dissolved O₂, which lifts the true mixed SaO₂ to about 91%. That is still far below 100%, which is the point.)",
 "whyWrong": [
  "75% is the saturation of blood leaving the shunted unit only; it ignores the half of the blood that passes unit 1.",
  "81% would mean supplemental O₂ made her worse, for example by releasing hypoxic vasoconstriction. The stem excludes hypoxic vasoconstriction, and unit 1's blood can only gain O₂.",
  "",
  "97% is the saturation leaving unit 1 on room air. It ignores the desaturated blood mixing in from unit 2.",
  "100% assumes the O₂ reaches all of the blood. The shunted half never contacts alveolar gas."
 ],
 "objective": "Use the two-alveolus model to show why hypoxemia from shunt responds poorly to 100% O₂.",
 "source": "Small Group 3 (Hypoxia 2): pneumonia two-alveolus model; V/Q I & II (Wolfe): shunt",
 "table": null,
 "set": "original"
},
{
 "id": "vq-g03",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Dead space (high V/Q)",
 "difficulty": 2,
 "fixedOrder": true,
 "stem": "A 45-year-old man in Chicago has a large pulmonary embolus that stops blood flow to unit 2 in the two-alveolus model shown; both units are still ventilated equally. His PaCO₂ is 40 mm Hg. Assume that gas from the two units empties together during expiration.\n\nWhich of the following is closest to his end-tidal (mixed alveolar) PCO₂?",
 "figure": {
  "type": "twoalv",
  "units": [
   {
    "state": "normal",
    "label": "Unit 1",
    "po2": "100",
    "pco2": "40",
    "sat": "97%"
   },
   {
    "state": "noflow",
    "label": "Unit 2",
    "po2": "147",
    "pco2": "0"
   }
  ],
  "venous": {
   "po2": "40",
   "sat": "75%"
  },
  "arterial": {
   "po2": "",
   "sat": ""
  }
 },
 "choices": [
  "0 mm Hg",
  "20 mm Hg",
  "40 mm Hg",
  "46 mm Hg",
  "80 mm Hg"
 ],
 "answer": 1,
 "explanation": "Arterial blood comes only from perfused unit 1, so PaCO₂ reflects its PACO₂ of 40. Unit 2 is ventilated but unperfused: no blood brings CO₂ to it, so its gas stays close to inspired air (PACO₂ ≈ 0, PAO₂ ≈ 0.21 × (747 − 47) = 147). On expiration the two units mix equally, so end-tidal PCO₂ ≈ (40 + 0)/2 = 20 mm Hg. The gap between PaCO₂ (40) and expired PCO₂ (20) is the signature of alveolar dead space, which is what the Bohr equation quantifies: here half of the alveolar ventilation is wasted, so he must raise total ventilation to keep PaCO₂ at 40.",
 "whyWrong": [
  "0 mm Hg is the PCO₂ of unit 2 alone. Exhaled gas also contains gas from perfused unit 1.",
  "",
  "40 mm Hg would be the end-tidal value if all ventilated units were perfused. Dilution by unit 2's CO₂-free gas lowers it.",
  "46 mm Hg is mixed venous PCO₂. Unit 2 receives no venous blood, so it never approaches venous gas values.",
  "Without perfusion, CO₂ cannot be delivered to unit 2, so it cannot accumulate there."
 ],
 "objective": "Explain how alveolar dead space from pulmonary embolism lowers end-tidal PCO₂ below PaCO₂.",
 "source": "V/Q I & II (Wolfe): dead space, Bohr method and PE; Small Group 4 two-alveolus review",
 "table": null,
 "set": "original"
},
{
 "id": "vq-g04",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Venous admixture",
 "difficulty": 3,
 "fixedOrder": true,
 "stem": "A 75-year-old woman with left lower lobe pneumonia is represented by the two-alveolus model in the figure (unit 2 pus-filled, half of blood flow through each unit, no hypoxic vasoconstriction). On admission her SaO₂ was 86% when her mixed venous saturation was 75%. In the ICU she develops septic shock with fever and a low cardiac output, and her mixed venous saturation falls to 50%, as shown in the figure. The pneumonia itself has not changed, and unit 1 still saturates its blood to 97%.\n\nEstimating arterial saturation by averaging the two units, which of the following is closest to her arterial O₂ saturation now?",
 "figure": {
  "type": "twoalv",
  "units": [
   {
    "state": "normal",
    "label": "Unit 1",
    "po2": "100",
    "pco2": "40",
    "sat": "97%"
   },
   {
    "state": "blocked",
    "label": "Unit 2",
    "sat": ""
   }
  ],
  "venous": {
   "po2": "27",
   "sat": "50%"
  },
  "arterial": {
   "po2": "?",
   "sat": "?"
  }
 },
 "choices": [
  "50%",
  "62%",
  "About 74%",
  "86%",
  "97%"
 ],
 "answer": 2,
 "explanation": "Blood through the shunt leaves at whatever saturation it arrived with. When delivery falls (low cardiac output) and consumption rises (fever, work of breathing), tissues extract more O₂ and mixed venous saturation falls from 75% to 50%. Now the shunted half contributes 50% blood: (97 + 50)/2 ≈ 74%. The lung lesion is the same, but arterial saturation has dropped by 12 points. This is venous admixture: a low SvO₂ magnifies the hypoxemia caused by shunt, which is why raising cardiac output, transfusing, treating fever, or sedating can improve PaO₂ in these patients.",
 "whyWrong": [
  "50% is the saturation of the shunted blood only; unit 1 still adds fully saturated blood.",
  "62% averages the old and new venous saturations (75 and 50). The mixture is between unit 1's blood (97%) and the shunted blood (50%).",
  "",
  "86% was her value when SvO₂ was 75%. It ignores the fall in mixed venous saturation that the shunt passes straight through.",
  "97% is the saturation leaving unit 1 only."
 ],
 "objective": "Calculate how a fall in mixed venous saturation worsens arterial saturation in a fixed shunt.",
 "source": "Small Group 3 (Hypoxia 2): septic shock and venous admixture; V/Q I & II (Wolfe)",
 "table": null,
 "set": "original"
},
{
 "id": "vq-g05",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Low V/Q",
 "difficulty": 3,
 "stem": "In the two-alveolus model shown, unit 1 is overventilated (PAO₂ 103, PACO₂ 35) and unit 2 is underventilated (PAO₂ 50, PACO₂ 45); mixed venous blood has a PO₂ of 40 and a PCO₂ of 46 mm Hg. Each unit receives half of the pulmonary blood flow, and blood leaving each unit has equilibrated with its alveolar gas. Over the physiologic range the CO₂ content curve is nearly linear; the HbO₂ curve is sigmoidal.\n\nWhich of the following arterial values is most likely?",
 "figure": {
  "type": "twoalv",
  "units": [
   {
    "state": "normal",
    "label": "Unit 1",
    "po2": "103",
    "pco2": "35",
    "sat": "97%"
   },
   {
    "state": "narrow",
    "label": "Unit 2",
    "po2": "50",
    "pco2": "45",
    "sat": "84%"
   }
  ],
  "venous": {
   "po2": "40",
   "sat": "75%"
  },
  "arterial": {
   "po2": "?",
   "sat": "?"
  }
 },
 "choices": [
  "PaCO₂ about 40 mm Hg and PaO₂ about 63 mm Hg",
  "PaCO₂ about 40 mm Hg and PaO₂ about 77 mm Hg",
  "PaCO₂ about 45 mm Hg and PaO₂ about 50 mm Hg",
  "PaCO₂ about 35 mm Hg and PaO₂ about 103 mm Hg",
  "PaCO₂ about 45 mm Hg and PaO₂ about 77 mm Hg"
 ],
 "answer": 0,
 "explanation": "Blood mixes by content, not by partial pressure. For CO₂ the content curve is nearly linear, so averaging contents is about the same as averaging pressures: PaCO₂ ≈ (35 + 45)/2 = 40. For O₂ it is different. Blood from unit 1 is 97% saturated and blood from unit 2 is 84% saturated, so the mixture is about 91% saturated, which on the HbO₂ curve corresponds to a PO₂ of only about 63 mm Hg, not the 77 you would get by averaging 103 and 50. The overventilated unit cannot add much O₂ because its hemoglobin is already on the flat part of the curve. This is why V/Q mismatch lowers PaO₂ while PaCO₂ stays normal.",
 "whyWrong": [
  "",
  "77 mm Hg averages the two PO₂ values. O₂ mixes by content, and the flat top of the HbO₂ curve means unit 1 contributes little extra O₂, so PaO₂ is lower.",
  "These are unit 2's values alone; half of the arterial blood comes from unit 1.",
  "These are unit 1's values alone; half of the arterial blood comes from unit 2.",
  "Because the CO₂ content curve is nearly linear, the overventilated unit offsets the underventilated one, so PaCO₂ is near 40, and PaO₂ is not the arithmetic mean."
 ],
 "objective": "Predict mixed arterial PaO₂ and PaCO₂ from two units with different V/Q using the shapes of the O₂ and CO₂ curves.",
 "source": "V/Q I & II (Wolfe): two-alveolus model; O₂ & CO₂ Transport (Beiser): HbO₂ vs CO₂ curves",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "di-g01",
 "topic": "Diffusion",
 "subtopic": "Exercise & altitude",
 "difficulty": 2,
 "stem": "A 63-year-old man with idiopathic pulmonary fibrosis has an SpO₂ of 95% at rest but desaturates when he walks. The figure shows capillary PO₂ along the pulmonary capillary for a normal lung and for his lung, starting from a mixed venous PO₂ of 40 mm Hg. At rest, red cells spend about 0.75 s in the capillary; the dashed vertical line marks the transit time during his exercise.\n\nWhich of the following is closest to his end-capillary PO₂ during exercise, and why?",
 "figure": {
  "type": "transit",
  "curves": [
   {
    "kind": "normal",
    "label": "Normal"
   },
   {
    "kind": "fibrosis",
    "label": "Patient"
   }
  ],
  "marks": [
   0.25
  ]
 },
 "choices": [
  "About 83 mm Hg, because blood leaves the capillary before O₂ equilibrates across the thickened barrier",
  "About 98 mm Hg, because the thickened barrier slows uptake but transit is still long enough",
  "About 100 mm Hg, because O₂ transfer remains perfusion limited",
  "About 60 mm Hg, because blood passes through fibrotic alveoli that are not ventilated",
  "About 40 mm Hg, because no O₂ can cross the barrier in 0.25 s"
 ],
 "answer": 0,
 "explanation": "By Fick's law, transfer is proportional to area × diffusion constant / thickness. Fibrosis thickens the barrier, so his capillary PO₂ rises slowly. At rest (0.75 s) it still nearly reaches the alveolar value (~98 mm Hg), so his resting saturation is normal. During exercise, cardiac output rises and transit falls to about 0.25 s. Reading his curve at the dashed line, end-capillary PO₂ is only about 83 mm Hg: O₂ transfer has become diffusion limited, the A–a gradient widens and he desaturates. (In real exercise his mixed venous PO₂ also falls below 40, which makes this worse.) The normal lung equilibrates by 0.25 s and still has reserve.",
 "whyWrong": [
  "",
  "About 98 mm Hg is his value at the resting transit time of 0.75 s. Exercise shortens transit to about 0.25 s.",
  "Normal lungs are perfusion limited for O₂, but his thickened barrier makes transfer diffusion limited when transit is short.",
  "Fibrosis impairs diffusion; it is not a shunt of unventilated alveoli, and his curve does rise toward alveolar PO₂.",
  "His curve shows that O₂ does cross, just slowly; capillary PO₂ has risen well above 40 by 0.25 s."
 ],
 "objective": "Read a capillary transit curve to explain exercise-induced desaturation in interstitial lung disease.",
 "source": "Diffusion (Beiser): diffusion limitation, fibrosis and exercise; Think Like a Respiratory Consultant (Poston)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "di-g02",
 "topic": "Diffusion",
 "subtopic": "Exercise & altitude",
 "difficulty": 2,
 "stem": "A healthy 30-year-old climber exercises at 4,300 m, where his alveolar PO₂ is about 50 mm Hg and his mixed venous PO₂ about 25 mm Hg. The figure compares capillary PO₂ along the pulmonary capillary at sea level and at altitude; the dashed vertical line marks his transit time during exercise (0.25 s). His saturation falls from 84% at rest to about 80% during exercise.\n\nWhich of the following interventions would most improve equilibration of alveolar gas and capillary blood during his exercise?",
 "figure": {
  "type": "transit",
  "curves": [
   {
    "kind": "normal",
    "label": "Sea level"
   },
   {
    "kind": "altitude",
    "label": "Altitude"
   }
  ],
  "marks": [
   0.25
  ]
 },
 "choices": [
  "Breathing supplemental O₂, which raises alveolar PO₂ and the gradient driving O₂ into the blood",
  "Exercising harder to raise cardiac output and pulmonary blood flow",
  "Holding his breath at end-inspiration to lengthen contact time with alveolar gas",
  "Breathing faster with smaller tidal volumes at the same minute ventilation",
  "Breathing heliox to lower airway resistance"
 ],
 "answer": 0,
 "explanation": "At altitude the driving gradient (PAO₂ − capillary PO₂) is small from the start, so O₂ enters the blood slowly and capillary PO₂ rises slowly. At rest the 0.75 s transit is still enough, but at 0.25 s his capillary PO₂ reaches only about 45 mm Hg against an alveolar 50 (figure), so even a healthy lung becomes diffusion limited. Supplemental O₂ raises PAO₂, which steepens the gradient (Fick's law: V̇ = D_L × (PA − Pc)), speeds equilibration and raises end-capillary PO₂ and saturation.",
 "whyWrong": [
  "",
  "More cardiac output shortens transit time further, which worsens incomplete equilibration.",
  "Breath-holding lets O₂ be consumed from alveolar gas while CO₂ accumulates, so PAO₂ falls and the gradient shrinks.",
  "At the same minute ventilation, smaller breaths waste more of each breath on dead space, so alveolar ventilation falls, PACO₂ rises and PAO₂ falls, shrinking the gradient further.",
  "Heliox lowers turbulent airway resistance; it does not change the alveolar–capillary gradient or diffusion."
 ],
 "objective": "Explain why healthy lungs become diffusion limited during exercise at altitude and how raising PAO₂ helps.",
 "source": "Diffusion (Beiser): altitude and exercise as stress tests of diffusion reserve",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "di-g03",
 "topic": "Diffusion",
 "subtopic": "DLCO",
 "difficulty": 2,
 "stem": "In an experiment, a volunteer inhales trace amounts of three gases. The figure shows each gas's partial pressure in pulmonary capillary blood, as a percentage of its alveolar partial pressure, along the capillary.\n\nWhich gas would be used to measure the diffusing capacity of the lung, and why?",
 "figure": {
  "type": "transit",
  "mode": "gases",
  "curves": [
   {
    "kind": "n2o",
    "label": "X"
   },
   {
    "kind": "o2",
    "label": "Y"
   },
   {
    "kind": "co",
    "label": "Z"
   }
  ]
 },
 "choices": [
  "Gas Z, because its partial pressure in blood stays near zero, so its uptake is limited only by diffusion across the barrier",
  "Gas X, because it equilibrates fastest and therefore crosses the membrane most easily",
  "Gas Y, because its uptake reflects only membrane properties and not blood flow",
  "Gas Z, because it does not bind to hemoglobin and stays dissolved in plasma",
  "Gas X, because its uptake is limited by diffusion rather than by blood flow"
 ],
 "answer": 0,
 "explanation": "Gas X behaves like N₂O: it does not bind hemoglobin, so blood partial pressure equals alveolar almost immediately and further uptake depends only on how much blood flows through (perfusion limited). Gas Y behaves like O₂ in a normal lung: it equilibrates by about 0.25 s, so at rest it is also perfusion limited. Gas Z behaves like CO: it binds hemoglobin so avidly that its partial pressure in plasma barely rises, the alveolar–capillary gradient stays large along the whole capillary, and uptake is set by the barrier and blood factors (D_L). That is why the DLCO test uses CO; there is essentially no back-pressure.",
 "whyWrong": [
  "",
  "Fast equilibration means uptake stops early and depends on blood flow (perfusion limited), so it cannot measure diffusing capacity.",
  "O₂ normally equilibrates by about a third of the way along the capillary, so its uptake depends on blood flow, and its back-pressure (venous PO₂ 40) complicates measurement.",
  "Gas Z (CO) is the right gas, but for the opposite reason: it binds hemoglobin avidly, which keeps its plasma partial pressure near zero.",
  "Gas X equilibrates almost instantly, which is the hallmark of perfusion limitation, not diffusion limitation."
 ],
 "objective": "Distinguish perfusion-limited from diffusion-limited gas transfer and explain why CO is used to measure DLCO.",
 "source": "Diffusion (Beiser): N₂O, O₂ and CO uptake along the capillary; DLCO",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "tr-g01",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Anemia & polycythemia",
 "difficulty": 1,
 "stem": "A 34-year-old woman with heavy menstrual bleeding has a hemoglobin of 9 g/dL. Her arterial PO₂ is 95 mm Hg. The figure shows O₂ content versus PO₂ for blood with a normal hemoglobin (15 g/dL) and for blood with her hemoglobin.\n\nCompared with a person with normal hemoglobin at the same PaO₂, which of the following best describes her arterial blood?",
 "figure": {
  "type": "o2content",
  "curves": [
   {
    "hb": 15,
    "label": "Hb 15 g/dL"
   },
   {
    "hb": 9,
    "label": "Hb 9 g/dL"
   }
  ]
 },
 "choices": [
  "SaO₂ about 97% and O₂ content about 12 mL/dL",
  "SaO₂ about 58% and O₂ content about 12 mL/dL",
  "SaO₂ about 97% and O₂ content about 20 mL/dL, because her PaO₂ is normal",
  "SaO₂ about 97% and O₂ content about 6 mL/dL",
  "SaO₂ about 85% and O₂ content about 15 mL/dL"
 ],
 "answer": 0,
 "explanation": "Saturation is the fraction of hemoglobin carrying O₂ and depends on PO₂, not on how much hemoglobin there is. At a PaO₂ of 95 her SaO₂ is about 97%, the same as normal. Content is what falls: CaO₂ = 1.39 × 9 × 0.97 + 0.003 × 95 ≈ 12.4 mL/dL, where her curve flattens in the figure, versus about 20.5 mL/dL with Hb 15. Pulse oximetry and the ABG look normal even though O₂ delivery is reduced by about 40% unless cardiac output rises.",
 "whyWrong": [
  "",
  "58% is 9/15 of normal saturation. Hemoglobin concentration changes content, not the percentage of each hemoglobin that is saturated.",
  "A normal PaO₂ gives a normal saturation, but content scales with hemoglobin: 1.39 × 9 × 0.97 ≈ 12, not 20.",
  "About 6 mL/dL is her content at a PO₂ of 27 mm Hg, the P50 (1.39 × 9 × 0.50 ≈ 6.3), not at 95.",
  "Her saturation is not reduced at a PaO₂ of 95, and content with Hb 9 cannot reach 15 mL/dL."
 ],
 "objective": "Use O₂ content curves to show that anemia lowers content but not PaO₂ or SaO₂.",
 "source": "O₂ & CO₂ Transport (Beiser): O₂ content; Small Group 2 (Hypoxia 1): content curves",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "tr-g02",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Carbon monoxide",
 "difficulty": 3,
 "stem": "Two patients have nearly the same arterial O₂ content (about 10.5 mL/dL) at a PaO₂ of 100 mm Hg. Patient 1 is anemic (Hb 7.5 g/dL). Patient 2 has Hb 15 g/dL with 50% carboxyhemoglobin after a house fire. The figure shows O₂ content versus PO₂ for each, with a normal curve for reference. Patient 2 is far more confused and acidotic.\n\nWhich of the following best explains why tissue hypoxia is worse in patient 2?",
 "figure": {
  "type": "o2content",
  "curves": [
   {
    "hb": 15,
    "label": "Normal (Hb 15)"
   },
   {
    "hb": 7.5,
    "label": "Patient 1: anemia (Hb 7.5)"
   },
   {
    "hb": 15,
    "max": 0.5,
    "p50": 19,
    "label": "Patient 2: 50% COHb"
   }
  ]
 },
 "choices": [
  "Patient 2's remaining hemoglobin binds O₂ more tightly, so much less O₂ is released as blood falls to tissue PO₂",
  "Patient 2's arterial PO₂ is lower, which reduces the gradient for O₂ to diffuse into tissue",
  "Patient 2 has less dissolved O₂ in plasma at the same PaO₂",
  "Patient 2's arterial O₂ content is much lower than patient 1's",
  "Carbon monoxide blocks O₂ diffusion across the alveolar–capillary membrane"
 ],
 "answer": 0,
 "explanation": "Carbon monoxide does two things. It occupies heme sites, capping O₂ capacity (patient 2's curve plateaus near half of normal, like the anemic curve), and it raises the O₂ affinity of the remaining sites, shifting the curve left. Because of the left shift, patient 2's content falls only from about 10.6 to 9.3 mL/dL as PO₂ falls from 100 to 40 (about 1.3 mL/dL released), while the anemic patient's falls from about 10.4 to 7.9 (about 2.6 mL/dL). For the same delivery, tissues must drop to a much lower PO₂ to extract O₂ in CO poisoning, so cellular hypoxia and lactic acidosis are worse.",
 "whyWrong": [
  "",
  "PaO₂ is 100 mm Hg in both patients; CO poisoning does not lower PaO₂ or the alveolar gas.",
  "Dissolved O₂ is 0.003 × PaO₂, which is the same at the same PaO₂.",
  "Their arterial contents are nearly equal (about 10.5 mL/dL), as the figure shows at PO₂ 100.",
  "CO crosses the membrane and binds hemoglobin; it does not block O₂ diffusion, and PaO₂ is normal."
 ],
 "objective": "Compare CO poisoning with anemia of equal O₂ content using O₂ content curves to show impaired unloading from the left shift.",
 "source": "Small Group 2 (Hypoxia 1): carbon monoxide case; O₂ & CO₂ Transport (Beiser)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "tr-g03",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "Anemia & polycythemia",
 "difficulty": 3,
 "stem": "Two patients have the same arterial O₂ content, about 15.6 mL/dL. Patient 1 has chronic hypoxemia (Hb 15 g/dL, PaO₂ 40 mm Hg). Patient 2 is anemic (Hb 11.3 g/dL, PaO₂ 100 mm Hg). Their cardiac outputs and O₂ consumption are equal, so each extracts 5 mL O₂/dL. The figure shows O₂ content curves for each hemoglobin concentration.\n\nWhich of the following best describes their mixed venous blood?",
 "figure": {
  "type": "o2content",
  "curves": [
   {
    "hb": 15,
    "label": "Hb 15 g/dL (patient 1)"
   },
   {
    "hb": 11.3,
    "label": "Hb 11.3 g/dL (patient 2)"
   }
  ]
 },
 "choices": [
  "Patient 2 has the higher mixed venous PO₂, about 35 vs 27 mm Hg",
  "Both have the same mixed venous PO₂, because their contents and extraction are equal",
  "Patient 1 has the higher mixed venous PO₂, because more hemoglobin buffers the fall in PO₂",
  "Patient 1 has the higher mixed venous saturation, because he has more hemoglobin",
  "Both have a mixed venous PO₂ of about 40 mm Hg, because tissues extract O₂ until PO₂ reaches 40"
 ],
 "answer": 0,
 "explanation": "Both venous contents are about 15.6 − 5 = 10.6 mL/dL, but the same content sits at different PO₂ values on the two curves. On the Hb 15 curve, 10.6 mL/dL corresponds to a PO₂ of about 27 mm Hg (SvO₂ ~50%): patient 1 starts at 40 mm Hg, already on the steep part. On the Hb 11.3 curve, 10.6 mL/dL corresponds to about 35 mm Hg (SvO₂ ~67%). Capillary PO₂ is what drives O₂ diffusion from blood into the mitochondria, so equal content does not mean equal tissue oxygenation; the hypoxemic patient's tissues work at a lower PO₂.",
 "whyWrong": [
  "",
  "Equal content and extraction give equal venous content, but the content curves differ, so the same content corresponds to different PO₂ values.",
  "On the figure, patient 1's venous content of about 10.6 mL/dL sits at a PO₂ of about 27 mm Hg, lower than patient 2's ~35.",
  "Patient 1's venous blood is only about 50% saturated versus about 67% for patient 2, because patient 1 started at a saturation of 74%.",
  "Mixed venous PO₂ is about 40 mm Hg only in a normal person at rest. It depends on arterial content, hemoglobin and extraction."
 ],
 "objective": "Use O₂ content curves to show that equal O₂ content can give different capillary and venous PO₂ in hypoxemia versus anemia.",
 "source": "O₂ & CO₂ Transport (Beiser): O₂ content and Fick principle; Small Group 2 (Hypoxia 1)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "vq-g06",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Regional V/Q & West zones",
 "difficulty": 1,
 "stem": "The figure shows blood flow, ventilation and the V/Q ratio from the base to the apex of the lung in a healthy person standing upright.\n\nWhich of the following best explains why the V/Q ratio is highest at the apex?",
 "figure": {
  "type": "vqheight",
  "labels": false
 },
 "choices": [
  "Both ventilation and blood flow fall from base to apex, but blood flow falls much more steeply",
  "Ventilation increases from base to apex while blood flow decreases",
  "Apical alveoli are the most compliant, so they receive the most ventilation",
  "Hypoxic pulmonary vasoconstriction is strongest at the apex",
  "Ventilation and blood flow fall equally, but anatomic dead space is largest at the apex"
 ],
 "answer": 0,
 "explanation": "Gravity acts on both. The low-pressure pulmonary circulation has little pressure left to perfuse the apex, so blood flow falls steeply from base to apex. Ventilation also falls toward the apex: pleural pressure is more negative there, so apical alveoli start larger, on the flatter, less compliant part of the P–V curve, and expand less with each breath. Because perfusion falls more than ventilation, V/Q rises from about 0.6 at the base to about 3 at the apex. Lying supine, the gradient runs front to back and is much smaller.",
 "whyWrong": [
  "",
  "The figure shows ventilation falling, not rising, toward the apex; only V/Q rises.",
  "Apical alveoli are larger and sit on the flatter part of the compliance curve, so they are less compliant and less ventilated.",
  "Hypoxic vasoconstriction responds to low alveolar PO₂. Apical PAO₂ is the highest in the lung.",
  "Anatomic dead space is in the conducting airways and is not distributed by lung height; the figure shows perfusion falling more than ventilation."
 ],
 "objective": "Explain the regional gradient in V/Q in the upright lung from the different gravitational effects on perfusion and ventilation.",
 "source": "V/Q I & II (Wolfe): physiologic variation in ventilation and perfusion; Respiratory Dynamics I (Szafran): regional ventilation",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "vq-g07",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Regional V/Q & West zones",
 "difficulty": 2,
 "stem": "A 58-year-old man has reactivation pulmonary tuberculosis, with a cavity in the apex of the right upper lobe. The figure shows blood flow, ventilation and V/Q from base (X) to apex (Y) in the upright lung.\n\nWhich of the following best explains why reactivation tuberculosis favors region Y?",
 "figure": {
  "type": "vqheight",
  "labels": true
 },
 "choices": [
  "Region Y has the highest V/Q, so its alveolar PO₂ is the highest in the lung, favoring an obligate aerobe",
  "Region Y receives the highest blood flow, delivering the most bacilli",
  "Region X has the highest ventilation, so inhaled organisms deposit there",
  "Region Y has the highest alveolar PCO₂, which favors bacterial growth",
  "Region Y has the lowest V/Q, so its alveolar PO₂ is the lowest in the lung"
 ],
 "answer": 0,
 "explanation": "Where ventilation is high relative to blood flow, alveolar gas moves toward inspired gas: PAO₂ rises and PACO₂ falls. At the apex (region Y), V/Q is highest, so PAO₂ is roughly 130 mm Hg and PACO₂ about 28 (West's classic values), versus about 89 and 42 at the base. Mycobacterium tuberculosis is an obligate aerobe, so the O₂-rich apex is where reactivation disease classically appears. Primary infection, in contrast, tends to involve the better-ventilated lower and middle zones.",
 "whyWrong": [
  "",
  "The figure shows blood flow is lowest at Y; that low perfusion is what makes V/Q high there.",
  "Region X does receive the most ventilation, which is relevant to where inhaled particles land in primary infection, but reactivation disease favors the apex.",
  "High V/Q units have the lowest PACO₂; CO₂ is washed out relative to the little blood that brings it.",
  "V/Q is highest, not lowest, at the apex (right axis of the figure)."
 ],
 "objective": "Predict alveolar gas composition at the lung apex from regional V/Q and relate it to apical disease.",
 "source": "V/Q I & II (Wolfe): regional V/Q in the upright lung (West)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "vq-g08",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Pulmonary vascular resistance & HPV",
 "difficulty": 2,
 "stem": "A patient with ARDS is ventilated with high PEEP, raising his end-expiratory lung volume from FRC toward TLC. His pulmonary vascular resistance rises. The figure shows how total pulmonary vascular resistance and its two components change with lung volume.\n\nWhich of the following best explains the rise in PVR as lung volume increases above FRC?",
 "figure": {
  "type": "pvr"
 },
 "choices": [
  "Expanding alveoli stretch and compress the capillaries in the alveolar walls",
  "Extra-alveolar vessels collapse as radial traction from surrounding lung falls",
  "Hypoxic vasoconstriction intensifies at high lung volumes",
  "Cardiac output rises, so fewer capillaries remain open",
  "Pulmonary arterioles constrict in response to sympathetic stimulation from PEEP"
 ],
 "answer": 0,
 "explanation": "Lung volume affects the two groups of pulmonary vessels in opposite directions. Alveolar vessels (capillaries in the alveolar walls) are stretched thin and squeezed as alveoli inflate, so their resistance rises steeply toward TLC. Extra-alveolar vessels (larger arteries and veins in the interstitium) are pulled open by radial traction as the lung expands, so their resistance falls with volume and rises at low volumes. The sum is U-shaped, lowest near FRC. High PEEP pushes the lung up the right side of the curve, raising PVR and RV afterload.",
 "whyWrong": [
  "",
  "Extra-alveolar vessels are pulled open, not collapsed, at high lung volumes; their resistance rises at low volumes (e.g., atelectasis).",
  "Hypoxic vasoconstriction depends on alveolar PO₂, not lung volume, and PEEP usually improves alveolar oxygenation.",
  "A rise in cardiac output recruits and distends vessels, lowering PVR; PEEP, if anything, lowers venous return.",
  "The pulmonary circulation has little sympathetic tone; the volume effect is mechanical, as the figure shows."
 ],
 "objective": "Explain the U-shaped relationship between lung volume and PVR from the opposing effects on alveolar and extra-alveolar vessels.",
 "source": "Pulmonary Circulation (Szafran): lung volume and PVR",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "vq-g09",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Pulmonary vascular resistance & HPV",
 "difficulty": 3,
 "stem": "The figure shows how pulmonary vascular resistance changes as mean pulmonary artery pressure rises in a healthy lung, as happens when cardiac output increases during exercise. A 60-year-old man had a right pneumonectomy for lung cancer one year ago. At rest his mean pulmonary artery pressure is near normal.\n\nCompared with a healthy person, which of the following best describes his response to exercise?",
 "figure": {
  "type": "pvr",
  "mode": "pressure"
 },
 "choices": [
  "His pulmonary artery pressure rises more steeply, because much of the remaining lung's recruitable vascular reserve is already in use at rest",
  "His pulmonary artery pressure rises less, because doubling the flow per vessel distends vessels more",
  "His PVR stays constant, because recruitment occurs only when both lungs are perfused",
  "His pulmonary artery pressure falls, because PVR falls faster than cardiac output rises",
  "His pulmonary artery pressure is unchanged, because the bronchial circulation takes the extra flow"
 ],
 "answer": 0,
 "explanation": "In a healthy lung, rising flow opens previously closed capillaries (recruitment, mainly in the upper zones) and widens open ones (distension), so PVR falls (figure) and pressure rises only a little as cardiac output climbs. After pneumonectomy the remaining lung already carries the whole cardiac output at rest, so many of its vessels are already recruited and distended; it sits further along this curve. With exercise there is little left to lower PVR, so ΔP = Q × PVR rises more steeply, and exercise pulmonary hypertension and RV strain can result.",
 "whyWrong": [
  "",
  "Distension is already partly used up at rest in the single lung, so it cannot keep pressure from rising; the reserve is smaller, not larger.",
  "Recruitment and distension occur in any lung, but the remaining lung has less unused capacity left.",
  "Pressure equals flow × resistance; PVR cannot fall enough to offset a several-fold rise in flow, even in healthy lungs.",
  "The bronchial circulation receives only about 2% of cardiac output and does not carry the right heart's output."
 ],
 "objective": "Use the recruitment–distension relationship to predict the pulmonary pressure response to exercise when the vascular bed is reduced.",
 "source": "Pulmonary Circulation (Szafran): passive regulation of PVR and exercise; Physiology of Exercise (Poston)",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "tr-g04",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "CO₂ transport & Haldane",
 "difficulty": 3,
 "stem": "The figure shows CO₂ content versus PCO₂ for oxygenated and deoxygenated blood. Point a is arterial blood (PCO₂ 40 mm Hg, SaO₂ ~97%) and point v is mixed venous blood (PCO₂ 46 mm Hg, SvO₂ ~75%). Blood picks up about 4 mL CO₂/dL in passing from a to v.\n\nIf hemoglobin somehow stayed fully oxygenated as blood passed through the tissues, which of the following would happen at the same venous PCO₂ of 46 mm Hg?",
 "figure": {
  "type": "co2diss"
 },
 "choices": [
  "The blood would pick up only about half as much CO₂, because deoxygenated hemoglobin binds more CO₂ and H⁺",
  "The blood would pick up the same amount of CO₂, because CO₂ content depends only on PCO₂",
  "The blood would pick up more CO₂, because oxyhemoglobin is the better buffer for H⁺",
  "The blood could not carry any CO₂ as bicarbonate",
  "The blood would pick up about twice as much CO₂, because the oxygenated curve is steeper"
 ],
 "answer": 0,
 "explanation": "Read along the lower (oxygenated) curve from PCO₂ 40 to 46: content rises only about 2 mL/dL. Real venous blood is partly deoxygenated, which moves it to the upper curve, so at PCO₂ 46 it carries about 4 mL/dL more than arterial blood. That extra is the Haldane effect: deoxyhemoglobin binds CO₂ as carbamino compounds and buffers H⁺ better, which pulls the CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ reaction toward bicarbonate. In the lung the reverse happens: oxygenation releases CO₂. So O₂ unloading in tissues roughly doubles CO₂ loading for the same PCO₂ change.",
 "whyWrong": [
  "",
  "CO₂ content also depends on hemoglobin's oxygenation state; that is why there are two curves.",
  "Deoxyhemoglobin, not oxyhemoglobin, is the better H⁺ buffer.",
  "Carbonic anhydrase still forms bicarbonate in oxygenated blood; deoxygenation only increases how much can be carried.",
  "The two curves are roughly parallel; oxygenated blood holds less CO₂ at every PCO₂, so it would pick up less."
 ],
 "objective": "Use CO₂ dissociation curves to show how deoxygenation (Haldane effect) increases CO₂ loading in tissues.",
 "source": "O₂ & CO₂ Transport (Beiser): CO₂ dissociation curve and Haldane effect",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "tr-g05",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 3,
 "fixedOrder": true,
 "stem": "During heavy exercise, blood is saturated in the lungs on the normal HbO₂ curve (PO₂ 100 mm Hg, pH 7.40, 37 °C). In the capillaries of the working muscle, PO₂ falls to 20 mm Hg, and the local rise in PCO₂, H⁺ and temperature shifts the curve to the right, as shown in the figure. Hemoglobin is 15 g/dL.\n\nCompared with unloading on the unshifted curve, about how much additional O₂ per dL of blood does the right shift release in the muscle?",
 "figure": {
  "type": "hb",
  "curves": [
   {
    "p50": 27,
    "label": "Normal (lung)"
   },
   {
    "p50": 34,
    "label": "Exercising muscle"
   }
  ]
 },
 "choices": [
  "About 0.5 mL/dL",
  "About 2.4 mL/dL",
  "About 11.5 mL/dL",
  "About 13.8 mL/dL",
  "About 16.2 mL/dL"
 ],
 "answer": 1,
 "explanation": "Blood leaves the lung about 97% saturated. On the normal curve, at a tissue PO₂ of 20 mm Hg saturation would fall to about 31%; on the right-shifted muscle curve it falls to about 19%. The shift therefore unloads about 11.5 more percentage points of the hemoglobin: 1.39 × 15 × 0.115 ≈ 2.4 mL O₂/dL. That is the Bohr effect at work: the shift occurs where it helps (in the tissues) and costs little in the lung, where the curve is flat.",
 "whyWrong": [
  "About 0.5 mL/dL is how much less O₂ would load in the lung if the right shift also applied at PO₂ 100 (97% vs 95%). The question asks about unloading in muscle.",
  "",
  "11.5 is the difference in saturation in percentage points, not mL/dL; it must be multiplied by 1.39 × 15.",
  "About 13.8 mL/dL is the total O₂ unloaded on the unshifted curve (97% → 31%), not the extra from the shift.",
  "About 16.2 mL/dL is the total O₂ unloaded with the shift (97% → 19%), not the additional amount."
 ],
 "objective": "Quantify the extra O₂ unloaded in exercising muscle from a right shift of the HbO₂ curve.",
 "source": "O₂ & CO₂ Transport (Beiser): Bohr shift in exercise; Physiology of Exercise (Poston): O₂ extraction",
 "table": null,
 "set": "original"
},
{
 "id": "tr-g06",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 2,
 "stem": "The figure shows HbO₂ dissociation curves for maternal blood and for fetal blood, labeled A and B. In the placenta, maternal and fetal blood exchange O₂ at a PO₂ of roughly 30 mm Hg.\n\nWhich curve belongs to fetal blood, and what is the main reason for its position?",
 "figure": {
  "type": "hb",
  "curves": [
   {
    "p50": 19,
    "label": "A"
   },
   {
    "p50": 27,
    "label": "B"
   }
  ]
 },
 "choices": [
  "Curve A, because fetal hemoglobin binds 2,3-DPG poorly and so has a higher O₂ affinity",
  "Curve B, because fetal red cells contain more 2,3-DPG",
  "Curve A, because fetal blood has a higher PCO₂ and lower pH",
  "Curve B, because fetal hemoglobin has a lower O₂ affinity that helps unloading in fetal tissues",
  "Curve A, because fetal blood has more hemoglobin per dL"
 ],
 "answer": 0,
 "explanation": "Fetal hemoglobin (α₂γ₂) binds 2,3-DPG less avidly than adult hemoglobin, so it has a higher O₂ affinity and a lower P50 (about 19 vs 27 mm Hg): curve A, shifted left. At the placental PO₂ of about 30 mm Hg, fetal blood is about 77% saturated while maternal blood is about 57% (figure), so O₂ moves from mother to fetus. HbF is one of the left-shifting factors on the course list, along with alkalemia, cold, low 2,3-DPG and CO.",
 "whyWrong": [
  "",
  "Fetal hemoglobin is the left-shifted curve (A), and its affinity comes from weak 2,3-DPG binding, not more 2,3-DPG.",
  "Higher PCO₂ and lower pH shift curves to the right (Bohr effect), which would lower, not raise, fetal affinity.",
  "A lower affinity would make the fetus worse at taking O₂ from maternal blood; fetal hemoglobin has the higher affinity.",
  "Hemoglobin concentration changes content, not saturation, so it cannot shift a saturation curve."
 ],
 "objective": "Identify the left-shifted fetal HbO₂ curve and explain its higher O₂ affinity.",
 "source": "O₂ & CO₂ Transport (Beiser): factors that shift the HbO₂ curve",
 "table": null,
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "ve-g01",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Altitude",
 "difficulty": 2,
 "stem": "A 25-year-old man travels from Chicago to a research station at 4,300 m (barometric pressure 460 mm Hg). His blood gases on room air are shown in the table; his A–a gradient is about 5 mm Hg on both days at altitude, and R is 0.8. The figure marks his arterial PO₂ on day 1 and day 7 on a normal HbO₂ curve.\n\nWhich of the following best explains why his PaO₂ is higher on day 7 than on day 1?",
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
    "po2": 42,
    "label": "Day 1"
   },
   {
    "po2": 49,
    "label": "Day 7"
   }
  ]
 },
 "table": {
  "head": [
   "",
   "Chicago",
   "Day 1 at 4,300 m",
   "Day 7 at 4,300 m"
  ],
  "rows": [
   [
    "pH",
    "7.40",
    "7.50",
    "7.49"
   ],
   [
    "PaCO₂ (mm Hg)",
    "40",
    "32",
    "26"
   ],
   [
    "PaO₂ (mm Hg)",
    "92",
    "42",
    "49"
   ],
   [
    "HCO₃⁻ (mEq/L)",
    "24",
    "24",
    "19"
   ],
   [
    "Hemoglobin (g/dL)",
    "15",
    "15",
    "15.8"
   ]
  ]
 },
 "choices": [
  "Further hyperventilation lowered his PaCO₂ from 32 to 26 mm Hg, which raised his alveolar PO₂ by about 7 mm Hg",
  "Polycythemia increased the O₂ carried by hemoglobin, which raised his PaO₂",
  "A rise in 2,3-DPG shifted his HbO₂ curve to the right, which raised his PaO₂",
  "The fall in plasma bicarbonate reduced CO₂ carriage, leaving more room for dissolved O₂",
  "A fall in his respiratory exchange ratio raised his alveolar PO₂"
 ],
 "answer": 0,
 "explanation": "Inspired PO₂ at 460 mm Hg is 0.21 × (460 − 47) ≈ 87 mm Hg on both days, so the change must come from the CO₂ term of the alveolar gas equation. Day 1: PAO₂ ≈ 87 − 32/0.8 ≈ 47, PaO₂ ≈ 42. Day 7: PAO₂ ≈ 87 − 26/0.8 ≈ 54, PaO₂ ≈ 49. Over days, ventilation keeps rising (ventilatory acclimatization: the carotid bodies become more sensitive, and renal HCO₃⁻ excretion removes the alkalemic brake on breathing), PaCO₂ falls further and PAO₂ rises. On the curve this lifts saturation from about 77% to 83%.",
 "whyWrong": [
  "",
  "More hemoglobin raises O₂ content, not PaO₂; PaO₂ is set by alveolar PO₂ and the A–a gradient.",
  "A right shift changes the saturation at a given PO₂; it does not raise PO₂ itself, and alkalemia pushes the curve left.",
  "Bicarbonate does not compete with O₂ in alveolar gas or plasma; PaO₂ follows PAO₂.",
  "A lower R would make the PaCO₂/R term larger and lower PAO₂, not raise it."
 ],
 "objective": "Use the alveolar gas equation to explain ventilatory acclimatization to altitude.",
 "source": "Ventilation (Beiser): ventilation at altitude; Small Group 2 (Hypoxia 1): Everest climber",
 "fixedOrder": false,
 "set": "original"
},
{
 "id": "cx-g01",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Exercise: delivery & extraction",
 "difficulty": 3,
 "stem": "A 66-year-old man with severe COPD performs an incremental cycle exercise test. The figure shows a typical test from a healthy subject for reference; his peak results are in the table.\n\nWhich of the following most likely limited his exercise?",
 "figure": {
  "type": "cpet"
 },
 "table": {
  "head": [
   "Measurement at peak exercise",
   "Result"
  ],
  "rows": [
   [
    "Peak V̇O₂",
    "1.1 L/min (45% predicted)"
   ],
   [
    "Peak heart rate",
    "102/min (66% of predicted maximum of 154)"
   ],
   [
    "Peak minute ventilation (V̇E)",
    "38 L/min"
   ],
   [
    "Maximal voluntary ventilation (MVV)",
    "40 L/min"
   ],
   [
    "SpO₂ at rest → peak",
    "94% → 87%"
   ],
   [
    "Anaerobic threshold",
    "Not reached"
   ]
  ]
 },
 "choices": [
  "Ventilatory limitation: his peak minute ventilation nearly equaled his maximal voluntary ventilation",
  "Cardiac limitation: cardiac output reached its maximum, as in healthy people",
  "Poor effort: he stopped before reaching any physiologic limit",
  "Deconditioning: early lactic acidosis drove ventilation above what he could sustain",
  "Anemia: low O₂ content limited delivery to working muscle"
 ],
 "answer": 0,
 "explanation": "In healthy people V̇O₂max is limited by cardiac output: heart rate approaches its predicted maximum, the anaerobic threshold (B in the figure) is passed, and there is ample breathing reserve, so PaO₂ and saturation hold. His test looks different. His peak V̇E of 38 L/min almost equals his MVV of 40 L/min (breathing reserve only ~5%), his heart rate reached only 66% of predicted, he never reached the anaerobic threshold, and he desaturated. With severe airflow obstruction, his ventilatory capacity ran out before his heart's did. That is a pulmonary (ventilatory) limitation, which CPET can separate from cardiac and metabolic causes.",
 "whyWrong": [
  "",
  "His heart rate peaked at only 66% of predicted and he did not reach the anaerobic threshold, so cardiac output was not the limit.",
  "Using 95% of his maximal voluntary ventilation is a physiologic limit, not poor effort.",
  "Deconditioning lowers the anaerobic threshold so lactate appears early, but he never reached the threshold at all.",
  "Nothing in the data suggests anemia; his desaturation points to the lung, and anemia would not exhaust his ventilatory capacity."
 ],
 "objective": "Interpret CPET results to distinguish ventilatory limitation in COPD from the cardiac limitation of healthy exercise.",
 "source": "Physiology of Exercise (Poston): CPET and cardiopulmonary limitations",
 "fixedOrder": false,
 "set": "original"
}
]);
