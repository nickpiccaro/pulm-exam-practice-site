window.QBANK=(window.QBANK||[]).concat([
{
 "id": "ve-01",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Partial pressures & inspired gas",
 "difficulty": 1,
 "stem": "A 30-year-old woman who lives in Denver (barometric pressure 630 mm Hg) breathes room air (FiO₂ 0.21) at rest. Her body temperature is 37°C.\n\nWhich of the following is closest to the PO₂ of the inspired gas once it has been warmed and fully humidified in her trachea?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "72 mm Hg",
  "85 mm Hg",
  "122 mm Hg",
  "132 mm Hg",
  "150 mm Hg"
 ],
 "answer": 2,
 "explanation": "Inspired PO₂ = (PB − PH₂O) × FiO₂ = (630 − 47) × 0.21 ≈ 122 mm Hg. Water vapor is added in the upper airway until the gas is saturated at body temperature, and at 37°C that vapor always exerts 47 mm Hg. By Dalton's law the remaining 583 mm Hg is shared by the dry gases, and O₂ is 21% of it. No CO₂ has been added yet, so this is inspired, not alveolar, gas.",
 "whyWrong": [
  "This is the alveolar PO₂ (122 − 40/0.8). The question asks about gas in the trachea, before CO₂ from capillary blood has been added.",
  "This subtracts water vapor after multiplying by FiO₂ (630 × 0.21 − 47). Water vapor dilutes the whole gas mixture, so it must be subtracted from barometric pressure first.",
  "",
  "This is ambient (dry) PO₂, 630 × 0.21. It ignores the dilution by water vapor that happens in the upper airway.",
  "This is the inspired PO₂ at sea level, (760 − 47) × 0.21. Denver's lower barometric pressure lowers every partial pressure."
 ],
 "objective": "Calculate inspired PO₂ from barometric pressure, water vapor pressure, and FiO₂.",
 "source": "Ventilation (Beiser): Dalton's law and humidification of inspired air"
},
{
 "id": "ve-02",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Partial pressures & inspired gas",
 "difficulty": 2,
 "stem": "A mountaineer at a camp where barometric pressure is 280 mm Hg has a core temperature of 37°C. A physiologist calculates his inspired PO₂ and compares the effect of humidification with that at sea level.\n\nWhich of the following best describes the water vapor pressure in his trachea and its effect on inspired PO₂?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "It is 47 mm Hg, so it removes a larger fraction of the total pressure available to O₂ than at sea level",
  "It is about 17 mm Hg, because water vapor pressure falls in proportion to barometric pressure",
  "It is 47 mm Hg, so it removes the same fraction of the total pressure as at sea level",
  "It is near 0 mm Hg, because cold, dry mountain air cannot be humidified",
  "It is higher than 47 mm Hg, because hyperventilation adds more water vapor per minute"
 ],
 "answer": 0,
 "explanation": "Water vapor pressure depends only on temperature. Airway gas is saturated at 37°C, so PH₂O is 47 mm Hg at any altitude. At sea level, 47 is about 6% of 760; at 280 mm Hg it is about 17% of the total. Inspired PO₂ = (280 − 47) × 0.21 ≈ 49 mm Hg, compared with 280 × 0.21 ≈ 59 mm Hg of dry ambient air. The fixed 47 mm Hg takes a proportionally bigger bite out of the available pressure as barometric pressure falls.",
 "whyWrong": [
  "",
  "Water vapor pressure is set by temperature, not barometric pressure. Saturated gas at 37°C always has PH₂O 47 mm Hg.",
  "The absolute value is the same, so the fraction is larger: 47/280 ≈ 17% compared with 47/760 ≈ 6%.",
  "The upper airway warms and saturates inspired gas regardless of how cold or dry the ambient air is.",
  "Higher ventilation increases water loss per minute but does not change the saturation vapor pressure, which is fixed at 47 mm Hg at 37°C."
 ],
 "objective": "Explain why water vapor pressure is fixed at body temperature and why it matters more at altitude.",
 "source": "Ventilation (Beiser): humidification of inspired air; SG2 altitude case"
},
{
 "id": "ve-03",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Alveolar gas equation",
 "difficulty": 2,
 "stem": "A 64-year-old man with pneumonia in Chicago (barometric pressure 747 mm Hg) is receiving O₂ by face mask at an FiO₂ of 0.35. Arterial blood gas shows PaO₂ 85 mm Hg and PaCO₂ 48 mm Hg. Assume R = 0.8 and PH₂O = 47 mm Hg.\n\nWhich of the following is closest to his A–a gradient?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "100 mm Hg",
  "112 mm Hg",
  "116 mm Hg",
  "160 mm Hg",
  "185 mm Hg"
 ],
 "answer": 0,
 "explanation": "PAO₂ = FiO₂ × (PB − PH₂O) − PaCO₂/R = 0.35 × 700 − 48/0.8 = 245 − 60 = 185 mm Hg. A–a gradient = PAO₂ − PaO₂ = 185 − 85 = 100 mm Hg. A gradient this large, far above the normal ≤10–15 mm Hg, shows that O₂ is reaching the alveoli but not the arterial blood, which points to a problem in the lung itself (V/Q mismatch and shunt from the pneumonia).",
 "whyWrong": [
  "",
  "This divides PaCO₂ by 1.0 instead of 0.8 (245 − 48 − 85). With R = 0.8 the CO₂ term is 60 mm Hg.",
  "This forgets to subtract water vapor (0.35 × 747 − 60 − 85). Inspired gas is saturated, so 47 mm Hg must come off barometric pressure first.",
  "This leaves out the CO₂ term (245 − 85). CO₂ entering the alveoli lowers PAO₂ by PaCO₂/R.",
  "This is PAO₂ itself. The A–a gradient subtracts the measured PaO₂ from it."
 ],
 "objective": "Calculate PAO₂ and the A–a gradient for a patient on supplemental O₂.",
 "source": "Ventilation (Beiser) and V/Q (Wolfe): alveolar gas equation and A–a gradient"
},
{
 "id": "ve-04",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Alveolar gas equation",
 "difficulty": 2,
 "stem": "A 25-year-old man is brought to the emergency department in Chicago (barometric pressure 747 mm Hg) after taking an unknown quantity of oxycodone. His respiratory rate is 6/min. His chest x-ray is normal. Arterial blood gas on room air shows PaCO₂ 80 mm Hg. Assume R = 0.8.\n\nWhich of the following is closest to the highest PaO₂ he could have while breathing room air, even if his lungs exchange gas perfectly?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "47 mm Hg",
  "67 mm Hg",
  "80 mm Hg",
  "97 mm Hg",
  "147 mm Hg"
 ],
 "answer": 0,
 "explanation": "With perfect gas exchange, PaO₂ can at most equal PAO₂. PAO₂ = 0.21 × (747 − 47) − 80/0.8 = 147 − 100 = 47 mm Hg. Hypoventilation lets CO₂ accumulate in the alveoli, and because the alveolus holds a fixed total pressure, every rise in PACO₂ displaces O₂: ↓V̇A → ↑PACO₂ → ↓PAO₂ → ↓PaO₂. His A–a gradient would be normal, and supplemental O₂ (or reversing the opioid) would correct the hypoxemia.",
 "whyWrong": [
  "",
  "This divides PaCO₂ by 1.0 instead of 0.8 (147 − 80). The CO₂ term is PaCO₂/R = 100 mm Hg.",
  "This is his PaCO₂. Arterial PO₂ is limited by the PAO₂ from the alveolar gas equation, not equal to PaCO₂.",
  "This is the normal PAO₂ in Chicago with a PaCO₂ of 40. His doubled PaCO₂ lowers PAO₂ by an extra 50 mm Hg.",
  "This is inspired PO₂, before any CO₂ is added in the alveoli."
 ],
 "objective": "Use the alveolar gas equation to show how hypoventilation alone lowers PAO₂ and limits PaO₂.",
 "source": "Acid–Base (Szafran) & V/Q (Wolfe): opioid hypoventilation case"
},
{
 "id": "ve-05",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Dead space & alveolar ventilation",
 "difficulty": 2,
 "stem": "A 58-year-old man with three fractured ribs breathes rapidly and shallowly because deep breaths are painful. His tidal volume is 250 mL and his respiratory rate is 32/min. His anatomic dead space is 150 mL.\n\nWhich of the following is closest to his alveolar ventilation?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "3.2 L/min",
  "4.8 L/min",
  "5.3 L/min",
  "8.0 L/min",
  "12.8 L/min"
 ],
 "answer": 0,
 "explanation": "Alveolar ventilation = (VT − VD) × RR = (250 − 150) mL × 32/min = 3.2 L/min. His minute ventilation is 250 × 32 = 8.0 L/min, more than the normal 7.5 L/min, but 60% of each breath (150/250) only fills the conducting airways. Each breath pays a fixed dead-space 'fee', so rapid shallow breathing wastes ventilation; his V̇A is lower than the normal 5.25 L/min and his PaCO₂ will tend to rise.",
 "whyWrong": [
  "",
  "This is his dead-space ventilation (150 mL × 32). Alveolar ventilation is the remainder of minute ventilation.",
  "This is the normal alveolar ventilation, (500 − 150) × 15. His shallow breaths leave much less for the alveoli.",
  "This is minute ventilation (VT × RR). It includes the volume that never reaches the alveoli.",
  "This adds dead space to tidal volume instead of subtracting it ((250 + 150) × 32)."
 ],
 "objective": "Calculate alveolar ventilation and explain why rapid shallow breathing is inefficient.",
 "source": "Ventilation (Beiser) and V/Q (Wolfe): minute, dead-space and alveolar ventilation"
},
{
 "id": "ve-06",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Dead space & alveolar ventilation",
 "difficulty": 3,
 "stem": "A 47-year-old woman has a large pulmonary embolism. Her tidal volume is 500 mL. A single-breath N₂ washout (Fowler method) measures her anatomic dead space at 150 mL. Simultaneously, her PaCO₂ is 40 mm Hg and her mixed expired PCO₂ is 20 mm Hg.\n\nWhich of the following is closest to her alveolar dead space per breath?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "50 mL",
  "100 mL",
  "150 mL",
  "250 mL",
  "350 mL"
 ],
 "answer": 1,
 "explanation": "The Bohr method gives physiologic dead space: VD/VT = (PaCO₂ − PECO₂)/PaCO₂ = (40 − 20)/40 = 0.5, so physiologic VD = 0.5 × 500 = 250 mL. The Fowler method measures only the conducting airways (150 mL). Physiologic dead space = anatomic + alveolar, so alveolar dead space = 250 − 150 = 100 mL. These are alveoli that are ventilated but no longer perfused because the clot blocks their blood supply; they add no CO₂ and dilute the expired gas.",
 "whyWrong": [
  "This would be the value if physiologic dead space were 200 mL (VD/VT 0.4). Her PECO₂ of 20 gives VD/VT 0.5.",
  "",
  "This is her anatomic dead space from the Fowler method. The embolism does not change the conducting airways.",
  "This is her total physiologic dead space from the Bohr equation. It still includes the 150 mL of anatomic dead space.",
  "This is the volume that does take part in gas exchange (500 − 150), not dead space."
 ],
 "objective": "Distinguish anatomic (Fowler) from physiologic (Bohr) dead space and calculate alveolar dead space.",
 "source": "V/Q (Wolfe): Fowler and Bohr methods; pulmonary embolism"
},
{
 "id": "ve-07",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "PaCO₂ & alveolar ventilation",
 "difficulty": 3,
 "stem": "A 70-year-old man is mechanically ventilated with a tidal volume of 400 mL at 15 breaths/min. His dead space is 150 mL and his PaCO₂ is 60 mm Hg. The team wants a PaCO₂ of 40 mm Hg, keeping the rate at 15/min. Assume CO₂ production and dead space do not change.\n\nWhich tidal volume is closest to what is needed?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "267 mL",
  "450 mL",
  "525 mL",
  "600 mL",
  "800 mL"
 ],
 "answer": 2,
 "explanation": "PaCO₂ ∝ V̇CO₂/V̇A, so lowering PaCO₂ from 60 to 40 at constant V̇CO₂ needs V̇A to rise by 60/40 = 1.5×. Current V̇A = (400 − 150) × 15 = 3.75 L/min, so the target is 5.6 L/min, or 375 mL of alveolar gas per breath at 15/min. Adding back the 150 mL dead space gives VT = 525 mL. Increasing VT by only 125 mL raises alveolar ventilation by 50%, because the whole increase goes to the alveoli.",
 "whyWrong": [
  "This divides VT by 1.5 instead of multiplying. Lowering PaCO₂ requires more alveolar ventilation, not less.",
  "This raises alveolar volume per breath only to 300 mL (V̇A 4.5 L/min), which would give a PaCO₂ of 50 mm Hg.",
  "",
  "This scales the whole tidal volume by 1.5 (400 × 1.5). Only the alveolar portion has to rise by 1.5×; the dead space stays 150 mL.",
  "This doubles tidal volume. V̇A would be 9.75 L/min and PaCO₂ would fall to about 23 mm Hg."
 ],
 "objective": "Use PaCO₂ ∝ V̇CO₂/V̇A to choose a ventilator change, accounting for dead space.",
 "source": "Ventilation (Beiser): alveolar ventilation equation"
},
{
 "id": "ve-08",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "PaCO₂ & alveolar ventilation",
 "difficulty": 2,
 "stem": "A 52-year-old woman is sedated, paralyzed, and mechanically ventilated at fixed settings; her PaCO₂ is 40 mm Hg. Overnight she develops a fever of 39.8°C, and indirect calorimetry shows her CO₂ production has risen from 200 to 260 mL/min. Ventilator settings and dead space are unchanged.\n\nWhich of the following PaCO₂ values is most likely at the new steady state?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "31 mm Hg",
  "40 mm Hg",
  "46 mm Hg",
  "52 mm Hg",
  "80 mm Hg"
 ],
 "answer": 3,
 "explanation": "PaCO₂ = K × V̇CO₂/V̇A. With alveolar ventilation fixed by the ventilator and paralysis, PaCO₂ rises in proportion to CO₂ production: 40 × 260/200 = 52 mm Hg. In a spontaneously breathing person the chemoreceptors would raise V̇A to hold PaCO₂ near 40, but she cannot. Fever is a 'metabolic load' on the ventilatory system, and by the alveolar gas equation her higher PaCO₂ also lowers PAO₂.",
 "whyWrong": [
  "This divides by the rise in CO₂ production (40 × 200/260). PaCO₂ varies directly with V̇CO₂, not inversely.",
  "Unchanged PaCO₂ would need alveolar ventilation to rise with V̇CO₂. Her ventilation is fixed.",
  "This is only half of the expected 30% rise. At constant V̇A, PaCO₂ rises in exact proportion to V̇CO₂.",
  "",
  "This assumes PaCO₂ doubles. CO₂ production rose by 30%, not 100%."
 ],
 "objective": "Predict PaCO₂ when CO₂ production changes at fixed alveolar ventilation.",
 "source": "Ventilation (Beiser): PaCO₂ ∝ V̇CO₂/V̇A; Acid–Base (Szafran): metabolic load"
},
{
 "id": "ve-09",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Respiratory exchange ratio",
 "difficulty": 2,
 "stem": "A 66-year-old man with severe COPD has a PaCO₂ of 48 mm Hg on a mixed diet (R = 0.8, O₂ consumption 250 mL/min). He cannot increase his alveolar ventilation. He is started on parenteral nutrition supplying the same calories almost entirely as glucose, so his R rises to 1.0. O₂ consumption is unchanged.\n\nWhich of the following PaCO₂ values is most likely at the new steady state?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "38 mm Hg",
  "48 mm Hg",
  "60 mm Hg",
  "72 mm Hg",
  "96 mm Hg"
 ],
 "answer": 2,
 "explanation": "V̇CO₂ = R × V̇O₂. On the mixed diet V̇CO₂ = 0.8 × 250 = 200 mL/min; on glucose it is 1.0 × 250 = 250 mL/min, 25% more. With alveolar ventilation fixed, PaCO₂ rises in proportion: 48 × 1.25 = 60 mm Hg. Carbohydrate produces one CO₂ per O₂ consumed, while fat produces about 0.7, so a high-carbohydrate load adds to the CO₂ that a patient with limited ventilatory reserve must clear.",
 "whyWrong": [
  "This multiplies PaCO₂ by 0.8. A higher R means more CO₂ produced per O₂, so PaCO₂ rises.",
  "Unchanged calories and O₂ consumption do not mean unchanged CO₂ production; V̇CO₂ = R × V̇O₂ rises with R.",
  "",
  "This assumes a 50% rise in CO₂ production. R went from 0.8 to 1.0, a 25% rise.",
  "This doubles PaCO₂. That would need V̇CO₂ to double or V̇A to halve."
 ],
 "objective": "Relate R to CO₂ production and predict PaCO₂ when the fuel mix changes.",
 "source": "Ventilation (Beiser) & Exercise (Poston): R = V̇CO₂/V̇O₂ by substrate"
},
{
 "id": "ve-10",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Respiratory exchange ratio",
 "difficulty": 3,
 "stem": "A 29-year-old woman on a strict ketogenic diet has been oxidizing almost entirely fat for weeks; her measured R is 0.7. In Chicago (barometric pressure 747 mm Hg) on room air her PaCO₂ is 40 mm Hg. Assume PH₂O 47 mm Hg.\n\nWhich of the following is closest to her alveolar PO₂?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "90 mm Hg",
  "97 mm Hg",
  "107 mm Hg",
  "119 mm Hg",
  "147 mm Hg"
 ],
 "answer": 0,
 "explanation": "PAO₂ = 0.21 × (747 − 47) − PaCO₂/R = 147 − 40/0.7 = 147 − 57 ≈ 90 mm Hg. When R is below 1, more O₂ leaves the alveolus than CO₂ enters it, so PAO₂ falls by more than PaCO₂. The lower the R, the larger the CO₂ term. Using the default R of 0.8 would overestimate her PAO₂ by about 7 mm Hg and overestimate her A–a gradient by the same amount.",
 "whyWrong": [
  "",
  "This uses the default R of 0.8 (147 − 50). Her measured R is 0.7.",
  "This uses R = 1.0 (147 − 40), the value for pure carbohydrate oxidation.",
  "This multiplies PaCO₂ by R (147 − 28). The CO₂ term is PaCO₂ divided by R.",
  "This is inspired PO₂, before the CO₂ term is subtracted."
 ],
 "objective": "Calculate PAO₂ with a non-standard respiratory exchange ratio.",
 "source": "Ventilation (Beiser): alveolar gas equation and R"
},
{
 "id": "ve-11",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Altitude",
 "difficulty": 2,
 "stem": "A climber ascends to 5,500 m, where barometric pressure is 380 mm Hg. If she kept a PaCO₂ of 40 mm Hg, her alveolar PO₂ would be about 20 mm Hg. Instead she hyperventilates and her PaCO₂ falls to 24 mm Hg. Assume FiO₂ 0.21, PH₂O 47 mm Hg, and R = 0.8.\n\nWhich of the following is closest to her alveolar PO₂ after hyperventilating?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "20 mm Hg",
  "40 mm Hg",
  "46 mm Hg",
  "50 mm Hg",
  "70 mm Hg"
 ],
 "answer": 1,
 "explanation": "PIO₂ = 0.21 × (380 − 47) ≈ 70 mm Hg. PAO₂ = 70 − 24/0.8 = 70 − 30 = 40 mm Hg. By blowing off CO₂ she shrinks the CO₂ term from 50 to 30 mm Hg, which 'makes room' for 20 mm Hg more O₂ in the alveolus. This is how climbers survive at extreme altitude without supplemental O₂, at the price of respiratory alkalosis.",
 "whyWrong": [
  "This is her PAO₂ if PaCO₂ stayed at 40 mm Hg. Hyperventilation lowers the CO₂ term.",
  "",
  "This uses R = 1.0 (70 − 24). With R = 0.8 the CO₂ term is 30 mm Hg.",
  "This forgets to subtract water vapor (0.21 × 380 − 30). Humidification still takes 47 mm Hg at altitude.",
  "This is inspired PO₂. Some CO₂ must always be present in alveolar gas."
 ],
 "objective": "Explain with the alveolar gas equation how hyperventilation raises PAO₂ at altitude.",
 "source": "Ventilation (Beiser): ventilation at altitude; SG2 Everest case"
},
{
 "id": "ve-12",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Altitude",
 "difficulty": 2,
 "stem": "A 24-year-old man flies from Chicago to a research station at 4,300 m. On day 1 his arterial blood gas shows pH 7.52, PaCO₂ 29 mm Hg, HCO₃⁻ 23 mEq/L. On day 7 it shows pH 7.45, PaCO₂ 28 mm Hg, HCO₃⁻ 19 mEq/L. His ventilation remains elevated.\n\nWhich of the following best explains the change in pH between day 1 and day 7?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Renal excretion of bicarbonate in response to the respiratory alkalosis",
  "Lactic acid accumulation from anaerobic metabolism in hypoxic tissues",
  "A fall in alveolar ventilation as the carotid bodies adapt",
  "A rise in 2,3-DPG that releases H⁺ from hemoglobin",
  "Polycythemia that increases the buffering capacity of blood"
 ],
 "answer": 0,
 "explanation": "Hypoxemia at altitude stimulates the carotid bodies → ↑V̇A → ↓PaCO₂ → respiratory alkalosis (day 1). The kidneys compensate over days by excreting HCO₃⁻, so by day 7 HCO₃⁻ has fallen from 23 to 19 mEq/L and pH has moved back toward normal even though PaCO₂ is still low. Compensation never fully normalizes pH, and his pH of 7.45 is still on the alkalemic side.",
 "whyWrong": [
  "",
  "Lactic acidosis would lower HCO₃⁻, but healthy people at rest at 4,300 m do not develop it, and his steady, low PaCO₂ with slowly falling HCO₃⁻ fits renal compensation.",
  "His PaCO₂ is still 28 mm Hg, so his alveolar ventilation has not fallen.",
  "2,3-DPG rises at altitude and shifts the HbO₂ curve right, but it is not a mechanism for correcting blood pH.",
  "More hemoglobin over weeks adds some buffer, but it does not lower plasma HCO₃⁻ or explain a change within 7 days."
 ],
 "objective": "Describe renal compensation for the respiratory alkalosis of altitude.",
 "source": "Ventilation (Beiser): altitude and metabolic compensation; Acid–Base (Szafran)"
},
{
 "id": "ve-13",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Altitude",
 "difficulty": 3,
 "stem": "A 70-year-old man with COPD lives in Chicago (barometric pressure 747 mm Hg). On room air his PaO₂ is 68 mm Hg and PaCO₂ is 40 mm Hg. He plans a flight on which cabin pressure will be 586 mm Hg. Assume R = 0.8, PH₂O 47 mm Hg, and that his PaCO₂ and A–a gradient stay the same in flight.\n\nWhich of the following is closest to his expected PaO₂ during the flight?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "34 mm Hg",
  "53 mm Hg",
  "63 mm Hg",
  "68 mm Hg",
  "97 mm Hg"
 ],
 "answer": 0,
 "explanation": "On the ground PAO₂ = 0.21 × 700 − 40/0.8 = 147 − 50 = 97 mm Hg, so his A–a gradient is 97 − 68 = 29 mm Hg. In the cabin PAO₂ = 0.21 × (586 − 47) − 50 ≈ 113 − 50 = 63 mm Hg. Subtracting the same 29 mm Hg gradient gives PaO₂ ≈ 34 mm Hg. Because his gradient is fixed in mm Hg, the fall in barometric pressure costs him the full drop in PAO₂, and he lands on the steep part of the HbO₂ curve. He would need supplemental O₂ in flight.",
 "whyWrong": [
  "",
  "This scales PaO₂ in proportion to barometric pressure (68 × 586/747). The A–a gradient is a fixed difference, not a ratio.",
  "This is his in-flight PAO₂. His diseased lungs still keep PaO₂ about 29 mm Hg below it.",
  "This assumes cabin pressure has no effect. Lower barometric pressure lowers PIO₂, PAO₂ and PaO₂.",
  "This is his PAO₂ on the ground in Chicago."
 ],
 "objective": "Predict PaO₂ at altitude by combining the alveolar gas equation with a fixed A–a gradient.",
 "source": "Ventilation (Beiser): airplane cabin example; V/Q (Wolfe): A–a gradient"
},
{
 "id": "di-01",
 "topic": "Diffusion",
 "subtopic": "Fick's law & the barrier",
 "difficulty": 2,
 "stem": "A 61-year-old woman undergoes resection of the right lung, which removes about half of her alveolar–capillary surface area. Months later she develops interstitial edema that increases the thickness of the remaining blood–gas barrier by 25%. Assume the diffusion constant and the PO₂ gradient across the barrier are unchanged.\n\nAccording to Fick's law, O₂ transfer across the barrier is now closest to what percentage of her original value?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "25%",
  "40%",
  "50%",
  "63%",
  "80%"
 ],
 "answer": 1,
 "explanation": "Fick's law: V̇gas = (A × D/T) × (P₁ − P₂). Transfer is proportional to area and inversely proportional to thickness. Halving A gives 0.5×, and raising T by 25% divides by 1.25, so V̇gas = 0.5/1.25 = 0.40 of the original at the same gradient. Surgical resection reduces area, and edema, fibrosis and pneumonia increase thickness; both lower diffusing capacity.",
 "whyWrong": [
  "This treats each change as halving transfer (0.5 × 0.5). A 25% increase in thickness divides by 1.25, not 2.",
  "",
  "This accounts for the lost area but ignores the thicker barrier.",
  "This multiplies by 1.25 (0.5 × 1.25), as if a thicker barrier sped diffusion. Transfer is inversely proportional to thickness.",
  "This accounts for the thicker barrier (1/1.25) but ignores the halving of surface area."
 ],
 "objective": "Apply Fick's law to predict how surface area and barrier thickness change gas transfer.",
 "source": "Diffusion (Beiser): Fick's law of diffusion"
},
{
 "id": "di-02",
 "topic": "Diffusion",
 "subtopic": "Fick's law & the barrier",
 "difficulty": 3,
 "stem": "In a laboratory model of the blood–gas barrier, gas X has 4 times the molecular weight of gas Y and twice the solubility in the barrier. Area, thickness and partial pressure gradient are identical for both gases.\n\nCompared with gas Y, the diffusion rate of gas X across the barrier is which of the following?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "One-quarter",
  "One-half",
  "The same",
  "Twice",
  "Eight times"
 ],
 "answer": 2,
 "explanation": "The diffusion constant D ∝ solubility/√(molecular weight). For gas X, solubility is 2× and √MW is √4 = 2×, so D_X/D_Y = 2/2 = 1. With A, T and ΔP identical, Fick's law gives the same transfer rate. Solubility helps in direct proportion, but molecular weight hurts only by its square root.",
 "whyWrong": [
  "This divides by the full molecular weight ratio and ignores solubility. D depends on the square root of MW and rises with solubility.",
  "This accounts for molecular weight (÷2) but ignores the doubled solubility.",
  "",
  "This accounts for the doubled solubility but ignores the heavier molecule.",
  "This multiplies solubility by the molecular weight ratio. A heavier gas diffuses more slowly, not faster."
 ],
 "objective": "Use D ∝ solubility/√MW to compare diffusion of two gases.",
 "source": "Diffusion (Beiser): determinants of the diffusion constant"
},
{
 "id": "di-03",
 "topic": "Diffusion",
 "subtopic": "O₂ vs CO₂ diffusion",
 "difficulty": 3,
 "stem": "CO₂ (molecular weight 44) is about 24 times as soluble as O₂ (molecular weight 32) in the alveolar–capillary barrier, and it diffuses about 20 times faster. A student wonders how much of this difference comes from molecular weight alone.\n\nIf CO₂ had the same solubility as O₂, its diffusion constant relative to O₂ would be closest to which of the following?",
 "figure": null,
 "table": null,
 "fixedOrder": true,
 "choices": [
  "0.73",
  "0.85",
  "1.0",
  "1.17",
  "20"
 ],
 "answer": 1,
 "explanation": "D ∝ solubility/√MW. With equal solubility, D_CO₂/D_O₂ = √(32/44) = √0.73 ≈ 0.85. So molecular weight alone makes CO₂ diffuse slightly slower than O₂. The whole ~20-fold advantage of CO₂ comes from its much higher solubility: 24 × 0.85 ≈ 20. This is why CO₂ almost never becomes diffusion limited.",
 "whyWrong": [
  "This uses the ratio of molecular weights (32/44) without the square root.",
  "",
  "This assumes molecular weight has no effect. D depends on 1/√MW, and CO₂ is heavier.",
  "This inverts the ratio (√(44/32)). A heavier molecule diffuses more slowly.",
  "This is the real ratio, which includes CO₂'s much higher solubility. The question removes the solubility difference."
 ],
 "objective": "Show that CO₂'s faster diffusion comes from solubility, not molecular weight.",
 "source": "Diffusion (Beiser): why CO₂ diffuses ~20× faster than O₂"
},
{
 "id": "di-04",
 "topic": "Diffusion",
 "subtopic": "O₂ vs CO₂ diffusion",
 "difficulty": 2,
 "stem": "A 66-year-old man with idiopathic pulmonary fibrosis has a thickened blood–gas barrier. Arterial blood gas on room air shows PaO₂ 58 mm Hg and PaCO₂ 34 mm Hg. His DLCO is 45% of predicted.\n\nWhich of the following best explains why his thickened barrier impairs O₂ uptake but not CO₂ elimination?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "CO₂ diffuses about 20 times faster than O₂ because of its much higher solubility",
  "CO₂ has a much larger partial pressure gradient across the barrier than O₂",
  "CO₂ has a smaller molecular weight than O₂ and so crosses thick membranes faster",
  "CO₂ leaves the blood as bicarbonate, which does not need to cross the barrier",
  "CO₂ elimination depends on hemoglobin binding, which fibrosis does not affect"
 ],
 "answer": 0,
 "explanation": "Both gases cross the same thickened barrier, but CO₂'s diffusion constant is about 20 times that of O₂ because it is about 24 times more soluble. Even with a thick barrier, CO₂ equilibrates within the capillary transit time, while O₂ does not. His low PaCO₂ reflects hyperventilation driven by hypoxemia; when PaCO₂ is high, the cause is almost always hypoventilation rather than diffusion impairment.",
 "whyWrong": [
  "",
  "The CO₂ gradient (about 46 → 40 mm Hg, ~6 mm Hg) is much smaller than the O₂ gradient (about 40 → 100 mm Hg). Its advantage is diffusibility, not gradient.",
  "CO₂ (MW 44) is heavier than O₂ (MW 32), which slightly slows its diffusion.",
  "Bicarbonate in the blood is converted back to CO₂, and that gas must still cross the barrier into the alveolus.",
  "Most CO₂ is carried as bicarbonate rather than on hemoglobin, and whatever the carrier, the CO₂ released in the capillary must still cross the thickened barrier."
 ],
 "objective": "Explain why diffusion impairment causes hypoxemia but rarely hypercapnia.",
 "source": "Diffusion (Beiser): CO₂ diffusion; Think Like a Consultant (Poston)"
},
{
 "id": "di-05",
 "topic": "Diffusion",
 "subtopic": "Perfusion vs diffusion limitation",
 "difficulty": 2,
 "stem": "In an experiment, a subject inhales a low concentration of a test gas. The gas does not bind hemoglobin or any plasma protein. Its partial pressure in pulmonary capillary blood reaches the alveolar value within the first tenth of the capillary length. Doubling pulmonary blood flow doubles its uptake.\n\nWhich of the following gases best fits this behavior?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Carbon monoxide",
  "Nitrous oxide",
  "O₂ in a patient with pulmonary fibrosis",
  "O₂ during maximal exercise at high altitude",
  "O₂ in a patient with interstitial edema during exercise"
 ],
 "answer": 1,
 "explanation": "Nitrous oxide is the classic perfusion-limited gas. It does not bind hemoglobin, so the little that dissolves quickly raises capillary partial pressure to the alveolar value early in the capillary. After that there is no gradient, and the only way to take up more is to bring more blood: uptake rises with blood flow. Carbon monoxide is the opposite (diffusion limited). O₂ is normally perfusion limited at rest but becomes diffusion limited with a thick barrier, low alveolar PO₂, or a short transit time.",
 "whyWrong": [
  "CO binds hemoglobin so avidly that its capillary partial pressure stays near zero along the whole capillary, so uptake is diffusion limited and barely changes with blood flow.",
  "",
  "A thickened barrier slows O₂ equilibration so that it may not be complete at the end of the capillary. That is diffusion limitation.",
  "Low alveolar PO₂ and short transit time make O₂ transfer diffusion limited, and capillary PO₂ may never reach alveolar PO₂.",
  "Edema thickens the barrier and exercise shortens transit time, so O₂ fails to equilibrate. That is diffusion limitation."
 ],
 "objective": "Distinguish a perfusion-limited gas (N₂O) from diffusion-limited transfer (CO, O₂ in disease).",
 "source": "Diffusion (Beiser): perfusion- vs diffusion-limited transfer"
},
{
 "id": "di-06",
 "topic": "Diffusion",
 "subtopic": "Perfusion vs diffusion limitation",
 "difficulty": 2,
 "stem": "A healthy 25-year-old man is studied at rest at sea level. His pulmonary capillary PO₂ reaches alveolar PO₂ about one-third of the way along the capillary. Assume mixed venous PO₂ and alveolar PO₂ stay constant.\n\nWhich of the following changes would most increase the amount of O₂ taken up by his lungs per minute?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Doubling the alveolar–capillary surface area",
  "Halving the thickness of the blood–gas barrier",
  "Increasing pulmonary capillary blood flow",
  "Lengthening capillary transit time",
  "Increasing the reaction rate of O₂ with hemoglobin"
 ],
 "answer": 2,
 "explanation": "At rest in a healthy lung, O₂ equilibrates by about 0.25 s of a 0.75 s transit, so the last two-thirds of the capillary has no gradient and adds no O₂. Transfer is perfusion limited: the amount taken up per minute is set by how much blood (and how much deoxygenated hemoglobin) passes through. Increasing blood flow brings more unloaded red cells into contact with alveolar gas, and uptake rises. Improving the membrane or binding only makes equilibration happen sooner, which does not add O₂ because equilibration is already complete.",
 "whyWrong": [
  "More area raises diffusing capacity, but equilibration is already complete, so the blood leaving the capillary cannot carry more O₂.",
  "A thinner barrier speeds equilibration, but the blood already equilibrates early. Faster diffusion does not add O₂ once the gradient is gone.",
  "",
  "Blood already equilibrates in the first third of the capillary, so extra time adds nothing; if transit lengthens because flow slows, uptake falls.",
  "Faster binding shortens the time to equilibrate, which is already short. It does not increase the O₂ content of blood leaving the lung."
 ],
 "objective": "Predict how a perfusion-limited process responds to changes in blood flow versus diffusing capacity.",
 "source": "Diffusion (Beiser): perfusion limitation of O₂ in the normal lung"
},
{
 "id": "di-07",
 "topic": "Diffusion",
 "subtopic": "DLCO",
 "difficulty": 2,
 "stem": "A 45-year-old man who has lived for 20 years at 3,800 m is tested in a pulmonary function laboratory. His lungs are normal on imaging and spirometry. His hemoglobin is 20 g/dL, and his DLCO is 125% of predicted.\n\nWhich of the following best explains his high DLCO?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "More hemoglobin in the capillaries takes up more CO, increasing the blood component of diffusing capacity",
  "A thinner blood–gas barrier from chronic exposure to hypoxia",
  "Reduced capillary blood volume from hypoxic pulmonary vasoconstriction",
  "Increased back-pressure of CO in plasma from carboxyhemoglobin",
  "Reduced CO solubility in the barrier at high hemoglobin concentrations"
 ],
 "answer": 0,
 "explanation": "DLCO measures how fast inhaled CO leaves the alveolus. CO binds hemoglobin so avidly that its plasma partial pressure stays near zero, so uptake depends on the barrier and on the capacity of capillary blood to bind it: 1/DL = 1/DM + 1/(θ·Vc). Polycythemia increases the amount of hemoglobin in the capillary blood, raising the blood term and therefore DLCO. This is why DLCO is adjusted for hemoglobin, and why anemia lowers it.",
 "whyWrong": [
  "",
  "Chronic hypoxia does not thin the barrier, and his normal imaging gives no evidence of membrane change. The rise comes from the blood term.",
  "Less capillary blood volume would shrink the blood term (θ·Vc) and lower DLCO, not raise it.",
  "Back-pressure from carboxyhemoglobin would reduce the gradient and lower measured DLCO, not raise it.",
  "Solubility of CO in the barrier is a physical property that does not depend on hemoglobin concentration."
 ],
 "objective": "Explain how the blood component of diffusing capacity makes DLCO rise with polycythemia.",
 "source": "Diffusion (Beiser): DLCO, 1/DL = 1/DM + 1/θVc; SG4 DLCO table"
},
{
 "id": "di-08",
 "topic": "Diffusion",
 "subtopic": "DLCO",
 "difficulty": 2,
 "stem": "A 34-year-old woman with heavy menstrual bleeding has a hemoglobin of 7 g/dL. She has no lung disease, and her spirometry and lung volumes are normal. Her uncorrected DLCO is 68% of predicted.\n\nWhich component of diffusing capacity is most likely reduced?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "The uptake capacity of capillary blood (θ × capillary blood volume)",
  "Membrane diffusing capacity from a thickened barrier",
  "Alveolar surface area available for gas exchange",
  "The diffusion constant of CO in the alveolar wall",
  "Alveolar ventilation during the breath-hold"
 ],
 "answer": 0,
 "explanation": "Total resistance to diffusion has two parts in series: 1/DL = 1/DM + 1/(θ·Vc). The membrane part (DM) reflects area and thickness; the blood part reflects how fast hemoglobin binds the gas (θ) and how much capillary blood is present (Vc). With half the normal hemoglobin, each mL of capillary blood can bind less CO, so the blood term falls and DLCO falls even though her lungs are normal. That is why DLCO is corrected for hemoglobin before it is interpreted.",
 "whyWrong": [
  "",
  "Nothing in her history thickens the barrier; her lungs and lung volumes are normal.",
  "Loss of surface area (as in emphysema or resection) lowers DM, but she has no lung disease.",
  "The diffusion constant is a physical property of CO (solubility and molecular weight) and does not change with anemia.",
  "DLCO is measured during a breath-hold and is a property of the barrier and blood, not of ventilation."
 ],
 "objective": "Identify the blood component of DLCO and explain why anemia lowers it.",
 "source": "Diffusion (Beiser) & Think Like a Consultant (Poston): DLCO and anemia"
},
{
 "id": "di-09",
 "topic": "Diffusion",
 "subtopic": "Exercise & altitude",
 "difficulty": 2,
 "stem": "A 63-year-old woman with interstitial lung disease has an SpO₂ of 95% at rest. During a 6-minute walk at sea level her SpO₂ falls to 84%. Her cardiac output roughly doubles during the walk.\n\nWhich of the following best explains why she desaturates with exertion but not at rest?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "Shorter capillary transit time leaves too little time for O₂ to equilibrate across the thickened barrier",
  "Hypoventilation during exercise raises PaCO₂ and lowers PAO₂",
  "A fall in alveolar PO₂ from the higher O₂ consumption of exercise",
  "Exercise-induced right shift of the HbO₂ curve that lowers SaO₂ at the same PaO₂",
  "Opening of new capillaries that act as a shunt"
 ],
 "answer": 0,
 "explanation": "At rest, red cells spend about 0.75 s in the capillary, and even a thick barrier lets O₂ equilibrate before the end. Exercise raises cardiac output and shortens transit time toward 0.25 s. Healthy lungs still equilibrate in that time, but with a thickened barrier O₂ needs longer, so end-capillary PO₂ stays below alveolar PO₂. This diffusion limitation widens the A–a gradient, and exercise-induced desaturation is typical of interstitial lung disease.",
 "whyWrong": [
  "",
  "People with ILD usually raise their ventilation during exercise; PaCO₂ does not rise in this setting.",
  "Alveolar PO₂ is set by inspired gas and ventilation, which rises with exercise, so PAO₂ does not fall.",
  "A right shift helps unloading in the tissues and has little effect on loading at a normal alveolar PO₂. It does not explain an 11-point fall in SpO₂.",
  "Recruited capillaries are still exposed to alveolar gas; recruitment increases surface area and does not create shunt."
 ],
 "objective": "Explain exercise-induced hypoxemia in interstitial lung disease as diffusion limitation from short transit time.",
 "source": "Diffusion (Beiser): effects of exercise on diffusion"
},
{
 "id": "di-10",
 "topic": "Diffusion",
 "subtopic": "Exercise & altitude",
 "difficulty": 3,
 "stem": "A healthy 30-year-old man hikes to 4,100 m (barometric pressure about 460 mm Hg). At rest his SpO₂ is 88%. While climbing a steep slope his SpO₂ falls to 78%, although his ventilation increases. He has no cough or crackles.\n\nWhich of the following best explains the fall in saturation with exertion?",
 "figure": null,
 "table": null,
 "fixedOrder": false,
 "choices": [
  "A small alveolar–capillary PO₂ gradient combined with shorter transit time makes O₂ transfer diffusion limited",
  "High-altitude pulmonary edema thickening the barrier",
  "Hypoventilation from fatigue of the respiratory muscles",
  "A left shift of the HbO₂ curve from respiratory alkalosis",
  "Increased shunt through unventilated alveoli"
 ],
 "answer": 0,
 "explanation": "Fick's law makes the rate of O₂ transfer proportional to the alveolar–capillary PO₂ gradient. At altitude alveolar PO₂ is low (roughly 50 mm Hg), so O₂ enters the blood more slowly and capillary PO₂ rises more slowly. At rest the 0.75 s transit is still long enough, but during exertion cardiac output rises and transit time shortens, so blood leaves before equilibrating. Even healthy lungs become diffusion limited when a low alveolar PO₂ is combined with a short transit time.",
 "whyWrong": [
  "",
  "The stem gives no signs of edema (no cough or crackles), and the desaturation is explained without any change in the barrier.",
  "His ventilation rose, which would raise, not lower, alveolar PO₂.",
  "Alkalosis shifts the curve left, which raises saturation at a given PO₂ in the lung. It would not cause desaturation.",
  "Nothing in the stem suggests unventilated alveoli in this healthy man, and shunt does not appear with exertion in normal lungs. His low resting SpO₂ is explained by the low inspired PO₂ alone."
 ],
 "objective": "Explain why healthy people at altitude desaturate during exercise (diffusion limitation from a low PO₂ gradient).",
 "source": "Diffusion (Beiser): effects of altitude on diffusion"
}
]);
