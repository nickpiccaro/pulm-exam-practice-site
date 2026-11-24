window.QBANK=(window.QBANK||[]).concat([
{
 "id": "st-01",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Volumes & capacities",
 "difficulty": 1,
 "stem": "A 23-year-old medical student performs spirometry. She takes several quiet tidal breaths, then inhales maximally and exhales as completely as she can. Her tracing is shown, with five volumes marked by letters.\n\nAt the end of a normal quiet expiration she is asked to breathe in as deeply as possible. The volume she inhales during this maneuver corresponds to which labeled bracket?",
 "figure": {
  "type": "spiro",
  "marks": {
   "A": "TV",
   "B": "IRV",
   "C": "ERV",
   "D": "RV",
   "E": "IC"
  }
 },
 "fixedOrder": true,
 "choices": [
  "A",
  "B",
  "C",
  "D",
  "E"
 ],
 "answer": 4,
 "explanation": "The maneuver starts at the end of a quiet expiration, which is FRC, and ends at TLC. The volume moved from FRC up to TLC is the inspiratory capacity, which is the tidal volume plus the inspiratory reserve volume (IC = TV + IRV). On the tracing that is bracket E. Because it involves only air that moves in and out of the mouth, IC can be measured directly by spirometry, unlike FRC, RV and TLC.",
 "whyWrong": [
  "A is the tidal volume, only the first ~500 mL of the deep breath. A maximal inspiration from FRC continues past the end of a normal tidal breath.",
  "B is the inspiratory reserve volume, measured from the end of a normal tidal inspiration. Starting from the end of expiration adds the tidal volume to it.",
  "C is the expiratory reserve volume, the extra air that can be breathed out below FRC. It is exhaled, not inhaled.",
  "D is the residual volume, which stays in the lung even after maximal expiration and is never moved by the subject.",
  ""
 ],
 "objective": "Identify inspiratory capacity as the volume inhaled from FRC to TLC (TV + IRV) on a spirogram.",
 "source": "Respiratory Statics (Poston) / Pulm Small Group 1: lung volumes and capacities",
 "table": null
},
{
 "id": "st-02",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Volumes & capacities",
 "difficulty": 2,
 "stem": "A 47-year-old man undergoes full pulmonary function testing. Spirometry shows an inspiratory capacity of 3.5 L and an expiratory reserve volume of 1.2 L. Body plethysmography gives a total lung capacity of 6.0 L.\n\nWhich of the following is closest to his residual volume?",
 "fixedOrder": true,
 "choices": [
  "1.2 L",
  "1.3 L",
  "2.5 L",
  "3.5 L",
  "4.8 L"
 ],
 "answer": 1,
 "explanation": "TLC = IC + FRC, so FRC = 6.0 − 3.5 = 2.5 L. FRC is the ERV plus the RV that remains after a maximal exhalation, so RV = FRC − ERV = 2.5 − 1.2 = 1.3 L. Equivalently RV = TLC − IC − ERV = TLC − VC, where VC = IC + ERV = 4.7 L. This is why a gas-dilution or plethysmographic measurement is needed: spirometry alone gives IC and ERV but no anchor for the absolute volume left in the lung.",
 "whyWrong": [
  "1.2 L is the ERV, the part of FRC that can be exhaled. RV is what is left after the ERV is blown out.",
  "",
  "2.5 L is the FRC (TLC − IC). FRC still contains the 1.2 L ERV.",
  "3.5 L is the inspiratory capacity given in the stem, the volume from FRC up to TLC.",
  "4.8 L is TLC − ERV, which subtracts only one of the two volumes above RV."
 ],
 "objective": "Calculate RV from TLC, IC and ERV using the relationships among lung volumes and capacities.",
 "source": "Respiratory Statics (Poston): volumes, capacities and TLC = IC + FRC",
 "figure": null,
 "table": null
},
{
 "id": "st-03",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Measuring lung volumes",
 "difficulty": 2,
 "stem": "A 66-year-old woman with severe emphysema has lung volumes measured two ways on the same day. Total lung capacity by single-breath helium dilution (10-second breath hold) is 5.1 L. Total lung capacity by body plethysmography is 7.4 L.\n\nWhich of the following best explains the difference between the two measurements?",
 "choices": [
  "Helium is absorbed into pulmonary capillary blood during the breath hold, lowering its final concentration",
  "Helium does not reach poorly ventilated, air-trapped regions during the breath hold, so the diluting volume is underestimated",
  "Body plethysmography measures only the anatomic dead space in addition to the alveolar volume",
  "Body plethysmography overestimates volume because Boyle's law does not apply to gas at body temperature",
  "Helium dilution counts the anatomic dead space, which plethysmography excludes"
 ],
 "answer": 1,
 "explanation": "Helium dilution uses a mass balance, [He]₁ × inspired volume = [He]₂ × TLC, and assumes the tracer mixes evenly with all the gas in the lung within the breath hold. In obstruction, slowly emptying and air-trapped units communicate poorly with the airways, so helium never reaches them in 10 seconds and the calculated volume reflects only the well-ventilated lung. Plethysmography uses Boyle's law (P₁V₁ = P₂V₂) and compresses all gas in the thorax, ventilated or not, so it gives the larger, truer value. The gap between the two is itself a marker of trapped gas.",
 "whyWrong": [
  "Helium is chosen because it is inert and nearly insoluble, so it is not taken up by blood. If it were, the final concentration would fall and TLC would be overestimated, not underestimated.",
  "",
  "Plethysmography measures all compressible gas in the thorax, not just dead space. It is the helium method that misses gas.",
  "Boyle's law holds at constant temperature, and the test is brief and isothermal. It is the standard method, not a source of error.",
  "Both methods include the gas in the conducting airways, and counting extra volume would make the helium value larger, not smaller."
 ],
 "objective": "Explain why gas dilution underestimates lung volume when air trapping prevents tracer equilibration.",
 "source": "Respiratory Statics (Poston): single-breath dilution assumptions vs body plethysmography",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-04",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Measuring lung volumes",
 "difficulty": 3,
 "stem": "A patient sits in a sealed body plethysmograph. At the end of a quiet expiration a shutter closes his mouthpiece, and he makes a brief expiratory effort against the closed shutter, as if trying to exhale.\n\nWhich of the following changes occurs during this effort?",
 "choices": [
  "Mouth pressure falls, thoracic gas volume rises, and box pressure rises",
  "Mouth pressure rises, thoracic gas volume falls, and box pressure falls",
  "Mouth pressure rises, thoracic gas volume rises, and box pressure rises",
  "Mouth pressure falls, thoracic gas volume falls, and box pressure falls",
  "Mouth pressure rises, thoracic gas volume is unchanged, and box pressure is unchanged"
 ],
 "answer": 1,
 "explanation": "With the shutter closed no air leaves, so the expiratory effort squeezes the gas trapped in the thorax: its pressure (measured at the mouth) rises and, by Boyle's law, its volume falls. The patient's body therefore gets slightly smaller, the gas in the sealed box has more room, and box pressure falls. The box change gives ΔV and the mouth gives ΔP, and FRC = −(ΔV/ΔP) × Patm. Because every bit of gas in the chest is compressed, communicating or not, the method also counts air-trapped regions.",
 "whyWrong": [
  "This is the pattern for an inspiratory effort, which lowers pressure in the lung, expands the thoracic gas and compresses the box gas.",
  "",
  "Compressing a fixed amount of gas cannot raise both its pressure and its volume (P × V is constant).",
  "If mouth pressure fell the thoracic gas would expand, not shrink. Both falling is not possible for a closed gas at constant temperature.",
  "The effort does change thoracic gas volume slightly, and that small ΔV, read from the box, is exactly what the calculation needs."
 ],
 "objective": "Apply Boyle's law to predict mouth and box pressure changes during plethysmographic measurement of FRC.",
 "source": "Respiratory Statics (Poston): body box plethysmography",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-05",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Pressure–volume curves & FRC",
 "difficulty": 2,
 "stem": "Refer to the figure, which shows the static pressure–volume curves of the lung, the chest wall and the respiratory system of a healthy adult measured with the respiratory muscles relaxed.\n\nAt which labeled volume do both the lung and the chest wall recoil inward, so that, with the muscles relaxed, both act to make the respiratory system smaller?",
 "figure": {
  "type": "pv"
 },
 "fixedOrder": true,
 "choices": [
  "A",
  "B",
  "C",
  "D",
  "Between C and D"
 ],
 "answer": 0,
 "explanation": "The lung recoils inward at every volume above its minimal volume (\"the lung wants to be small\"). The chest wall recoils outward below its own resting volume, point B (about 65% of TLC), and inward only above it. So above B both structures push the system toward a smaller volume, and only at A (TLC) are they both recoiling inward; inspiratory muscles must work against both there. At B the chest wall is neutral, at C (FRC) the two recoils are equal and opposite, and at D the chest wall recoils strongly outward.",
 "whyWrong": [
  "",
  "B is where the chest wall is at its resting volume, so it exerts no recoil at all. Only the lung recoils inward there.",
  "C is FRC, where the inward lung recoil is exactly balanced by outward chest wall recoil, so the two act in opposite directions.",
  "D is RV. The chest wall is far below its resting volume and recoils strongly outward, opposing the expiratory muscles.",
  "Between FRC and RV the chest wall pulls outward more than the lung pulls inward. The two still oppose each other."
 ],
 "objective": "Use the lung and chest wall pressure–volume curves to predict the direction of each structure's recoil at different volumes.",
 "source": "Respiratory Statics (Poston): \"chest wall wants to be big, lungs want to be small\"",
 "table": null
},
{
 "id": "st-06",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Pressure–volume curves & FRC",
 "difficulty": 2,
 "stem": "A 64-year-old man has 2 years of progressive exertional dyspnea and a dry cough. On examination there are fine bibasilar inspiratory crackles. Esophageal-balloon measurements are used to construct his static pressure–volume curves (dark lines in the figure), shown against normal curves (faded).\n\nWhich of the following best describes his lung volumes and their mechanism?",
 "figure": {
  "type": "pv",
  "overlay": "fibrosis",
  "labels": false
 },
 "choices": [
  "Increased TLC, FRC and RV because loss of elastic recoil lets the chest wall pull the lung outward",
  "Decreased TLC, FRC and RV because increased lung elastic recoil pulls the system toward smaller volumes",
  "Decreased TLC and increased RV with a normal FRC because the respiratory muscles are weak",
  "Decreased TLC and FRC with a normal lung curve because the chest wall has become stiffer",
  "Increased TLC and decreased RV because the lung requires more pressure to inflate"
 ],
 "answer": 1,
 "explanation": "His lung curve is flattened and shifted right: at every volume more transpulmonary pressure is needed, meaning lower compliance and higher elastic recoil, as in pulmonary fibrosis. The stiffer lung wins the tug-of-war with the chest wall at a lower volume, so FRC falls. TLC falls because the inspiratory muscles reach their limit at a smaller volume against the higher recoil, and RV falls too. This is intrinsic (parenchymal) restriction: all lung volumes are reduced.",
 "whyWrong": [
  "This is emphysema, where the lung curve is steeper (more compliant) and volumes rise. His lung curve is flatter.",
  "",
  "Muscle weakness gives a step-up pattern with a preserved FRC, because the passive curves are unchanged. His lung curve itself has changed.",
  "The figure shows the lung curve shifted while the chest wall curve is unchanged. A chest wall cause such as obesity would alter the chest wall curve.",
  "A lung that needs more pressure to inflate reaches its maximal volume earlier, so TLC falls rather than rises."
 ],
 "objective": "Predict how increased lung elastic recoil in fibrosis changes TLC, FRC and RV on pressure–volume curves.",
 "source": "Respiratory Statics (Poston) / Pulm Small Group 1: ILD compliance curves",
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-07",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Pressure–volume curves & FRC",
 "difficulty": 1,
 "stem": "A 25-year-old man is brought to the emergency department after a stab wound to the left lateral chest. The wound creates an open communication between the left pleural space and the atmosphere.\n\nWhich of the following changes in the left hemithorax is most likely?",
 "choices": [
  "The lung and the chest wall both collapse inward to a smaller volume",
  "The lung and the chest wall both expand to a larger volume",
  "The lung collapses to a smaller volume and the chest wall springs outward",
  "The lung expands to fill the hemithorax and the chest wall moves inward",
  "Neither changes, because pleural pressure remains below atmospheric"
 ],
 "answer": 2,
 "explanation": "At FRC the lung recoils inward and the chest wall recoils outward, and the thin fluid-filled pleural space couples them, giving a pleural pressure of about −5 cm H₂O. Opening the pleural space to air lets pleural pressure rise to atmospheric (0), uncoupling the two. Freed from each other, each moves toward its own resting volume: the lung collapses because it \"wants to be small,\" and the chest wall springs outward toward its larger resting volume (\"the chest wall wants to be big\").",
 "whyWrong": [
  "The chest wall's resting volume is larger than FRC, so once uncoupled it moves outward, not inward.",
  "The lung's resting volume is near zero, so once pleural pressure is atmospheric it recoils inward.",
  "",
  "This reverses the direction of both recoils.",
  "Air entering through the wound raises pleural pressure to atmospheric. Without a negative pleural pressure there is nothing holding the lung open."
 ],
 "objective": "Predict lung and chest wall movement when the pleural coupling is lost (open pneumothorax).",
 "source": "Respiratory Statics (Poston): pleural space links lung and chest wall",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-08",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Compliance",
 "difficulty": 2,
 "stem": "A healthy 30-year-old man breathes quietly while seated upright. Xenon ventilation scanning shows that alveoli at the lung bases receive more ventilation per unit of alveolar volume than alveoli at the apices.\n\nWhich of the following best explains this regional difference?",
 "choices": [
  "Pleural pressure is more negative at the bases, so basal alveoli are more distended",
  "Basal alveoli start each breath at a smaller volume, on a steeper part of the pressure–volume curve",
  "Basal airways have lower resistance because they are under greater radial traction",
  "Basal alveoli contain more surfactant, which lowers their surface tension and increases their compliance",
  "Apical alveoli are more compliant because they are larger at the start of each breath"
 ],
 "answer": 1,
 "explanation": "Gravity makes pleural pressure more negative at the apex than at the base. The apex therefore has a larger transpulmonary pressure, so apical alveoli are already well inflated at FRC and sit on the flat, upper part of the pressure–volume curve. Basal alveoli, under less distending pressure, start smaller on the steep part of the curve. For the same breath-to-breath change in pleural pressure, a basal alveolus increases its volume much more, so ventilation per unit volume is greatest at the base. Perfusion is also greatest at the base, which helps V/Q matching.",
 "whyWrong": [
  "The gradient runs the other way: pleural pressure is most negative at the apex, which is why apical alveoli are the more distended ones.",
  "",
  "At FRC the basal alveoli and their airways are less expanded, so radial traction is lower at the base, not higher.",
  "Surfactant is distributed throughout the lung and does not create a gravitational gradient; the regional difference comes from pleural pressure setting each alveolus's starting volume on the pressure–volume curve.",
  "Larger alveoli at the apex sit on the flatter part of the curve, so they are less compliant, not more."
 ],
 "objective": "Explain regional differences in ventilation using gravity-dependent pleural pressure and the shape of the lung pressure–volume curve.",
 "source": "Respiratory Dynamics I (Szafran): regional differences in alveolar expansion",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-09",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Compliance",
 "difficulty": 2,
 "stem": "A 59-year-old woman with interstitial lung disease has an esophageal balloon placed to estimate pleural pressure. At the end of a quiet expiration (no airflow) pleural pressure is −6 cm H₂O. After a 500-mL tidal inspiration, held with the glottis open and no airflow, pleural pressure is −16 cm H₂O.\n\nWhich of the following is closest to her lung compliance?",
 "fixedOrder": true,
 "choices": [
  "0.031 L/cm H₂O",
  "0.05 L/cm H₂O",
  "0.083 L/cm H₂O",
  "0.20 L/cm H₂O",
  "20 L/cm H₂O"
 ],
 "answer": 1,
 "explanation": "Compliance is ΔV/ΔP, where the relevant pressure for the lung is transpulmonary pressure, Ptp = Palv − Ppl. At both no-flow points Palv = 0, so Ptp = 6 at end expiration and 16 at end inspiration, a change of 10 cm H₂O. Compliance = 0.5 L / 10 cm H₂O = 0.05 L/cm H₂O, about a quarter of the normal ~0.2 L/cm H₂O. A stiff lung needs a much larger pressure swing for each breath, so her work of breathing (pressure × volume) is increased.",
 "whyWrong": [
  "This divides the tidal volume by the end-inspiratory pressure (0.5/16). Compliance uses the change in pressure, not its absolute value.",
  "",
  "This divides by the end-expiratory pressure alone (0.5/6) instead of the change between the two points.",
  "0.2 L/cm H₂O is a normal lung compliance, which would need only a 2.5 cm H₂O swing for 500 mL.",
  "20 is ΔP/ΔV (10 cm H₂O per 0.5 L), which is elastance in cm H₂O/L, the inverse of compliance."
 ],
 "objective": "Calculate lung compliance from tidal volume and the change in transpulmonary pressure between no-flow points.",
 "source": "Respiratory Statics (Poston): compliance = ΔV/ΔP and work of breathing",
 "figure": null,
 "table": null
},
{
 "id": "st-10",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Compliance",
 "difficulty": 3,
 "stem": "A 70-year-old man with a 60-pack-year smoking history has static pressure–volume curves measured (dark lines in the figure), plotted against normal curves (faded). At every lung volume, the transpulmonary pressure needed to hold his lung at that volume is lower than normal.\n\nThis abnormality best explains which of the following features of his disease?",
 "figure": {
  "type": "pv",
  "overlay": "emphysema",
  "labels": false
 },
 "choices": [
  "A lower FRC because the chest wall is pulled inward",
  "A higher FEV₁/FVC because expiration is driven by greater recoil",
  "Greater inspiratory work because the lung is harder to inflate",
  "Early airway collapse during expiration because the lung exerts less radial traction and driving pressure",
  "A smaller TLC because the inspiratory muscles reach their limit sooner"
 ],
 "answer": 3,
 "explanation": "A steeper, left-shifted lung curve means high compliance and low elastic recoil, the result of alveolar wall destruction in emphysema. Low recoil has two expiratory consequences. It lowers alveolar pressure during expiration (Palv = Ppl + Pel), so pressure falls to pleural pressure closer to the alveoli and the equal-pressure point moves into small, collapsible airways. It also weakens the radial traction that tethers airways open. Airways close early, flow is limited and gas is trapped, raising RV, FRC and TLC.",
 "whyWrong": [
  "With less inward lung recoil, the chest wall pulls the system to a higher FRC, not a lower one.",
  "Low recoil reduces the driving pressure for expiration, so FEV₁ falls more than FVC and the ratio falls.",
  "A more compliant lung is easier to inflate. His extra work of breathing comes from obstruction and hyperinflation, not from a stiff lung.",
  "",
  "Loss of recoil lets the system reach a larger volume before the muscles are maximally opposed, so TLC rises."
 ],
 "objective": "Link the high compliance and low elastic recoil of emphysema to dynamic airway collapse and air trapping.",
 "source": "Respiratory Statics (Poston) / Respiratory Dynamics II (Szafran): loss of elastic recoil in emphysema",
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-11",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Surface tension & surfactant",
 "difficulty": 2,
 "stem": "In a model of the lung, two alveoli of different size are connected to the same airway. Alveolus X has a radius of 50 µm and alveolus Y a radius of 100 µm. Their lining fluid has no surfactant, so surface tension is the same in both.\n\nWhich of the following is most likely to happen?",
 "choices": [
  "Y empties into X because the pressure inside Y is twice that in X",
  "X empties into Y because the pressure inside X is twice that in Y",
  "X empties into Y because the pressure inside X is four times that in Y",
  "Neither changes because surface tension is the same in both alveoli",
  "Y empties into X because the larger alveolus has more surface area pulling inward"
 ],
 "answer": 1,
 "explanation": "By the law of Laplace for a sphere, P = 2T/r. With equal surface tension, the pressure needed to keep an alveolus open is inversely proportional to its radius, so X (r = 50 µm) has twice the pressure of Y (r = 100 µm). Gas flows from higher to lower pressure, so the small alveolus empties into the large one and collapses. Surfactant prevents this: as an alveolus shrinks its surfactant molecules crowd together, lowering T more in small alveoli and equalizing pressures, which stabilizes alveoli of different sizes and lowers the work of inflation.",
 "whyWrong": [
  "The pressure is higher in the smaller alveolus, not the larger one, because P is inversely proportional to r.",
  "",
  "Pressure scales with 1/r, not 1/r², so halving the radius doubles the pressure.",
  "Equal surface tension does not mean equal pressure: the different radii produce different pressures.",
  "Laplace pressure depends on curvature (radius), not total surface area, and curvature is greater in the small alveolus."
 ],
 "objective": "Apply the law of Laplace to explain alveolar instability without surfactant.",
 "source": "Respiratory Statics (Poston): surface tension, law of Laplace and surfactant",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "st-12",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Surface tension & surfactant",
 "difficulty": 1,
 "stem": "In a classic experiment, an excised animal lung is inflated first with air and then, after degassing, with saline. Saline inflation reaches the same volume at less than half the transpulmonary pressure required with air.\n\nWhich of the following best explains this result?",
 "choices": [
  "Saline is more viscous than air and spreads the alveolar walls apart",
  "Saline dissolves elastin and collagen fibers in the alveolar walls",
  "Saline abolishes the air–liquid interface, removing the surface tension component of elastic recoil",
  "Saline increases surfactant secretion by type II alveolar cells",
  "Air is compressible, so part of the pressure applied with air is lost compressing the gas"
 ],
 "answer": 2,
 "explanation": "Lung elastic recoil has two components: tissue forces from elastin and collagen, and surface tension at the air–liquid interface lining the alveoli. Filling the lung with saline removes that interface, so only tissue forces remain and much less pressure is needed for the same volume; the difference between the two curves is the surface-tension contribution. This is why loss or inactivation of surfactant, as in neonatal respiratory distress syndrome or the surfactant washout of ARDS, sharply lowers compliance.",
 "whyWrong": [
  "Viscosity affects resistance to flow, not the static pressure needed to hold a volume, and the curves are static.",
  "Brief saline inflation does not dissolve structural proteins, and the lung returns to its air curve when re-aerated.",
  "",
  "Excised lung is not secreting surfactant on this timescale, and the effect is explained by removing the interface entirely.",
  "At these small pressures gas compression is trivial, and static pressures are measured with no flow."
 ],
 "objective": "Explain the contribution of surface tension to lung elastic recoil using air- vs saline-filled pressure–volume curves.",
 "source": "Respiratory Statics (Poston): air vs saline pressure–volume curves; ARDS surfactant washout",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-01",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Pressures during a tidal breath",
 "difficulty": 2,
 "stem": "Refer to the figure, which shows lung volume, alveolar pressure and pleural pressure during one quiet tidal breath in a healthy adult.\n\nAt which labeled time point is transpulmonary pressure greatest?",
 "figure": {
  "type": "breath"
 },
 "fixedOrder": true,
 "choices": [
  "A",
  "B",
  "C",
  "D",
  "E"
 ],
 "answer": 2,
 "explanation": "Transpulmonary pressure is Ptp = Palv − Ppl, the distending pressure across the lung. At C, the end of inspiration, airflow has stopped so Palv = 0, and pleural pressure is at its most negative value (about −8 cm H₂O), giving Ptp ≈ 8 cm H₂O, which is matched by the lung's elastic recoil at its largest tidal volume. At A and E (FRC) Ptp is about 5. During inspiration (B) and expiration (D), Ptp is less than at C because lung volume, and therefore the recoil it balances, is smaller.",
 "whyWrong": [
  "A is FRC: Palv 0 and Ppl about −5, so Ptp is about 5 cm H₂O, its lowest value in the cycle.",
  "At B Palv is at its most negative (about −0.5 cm H₂O) and Ppl is only partway to its minimum (about −7), so Ptp is about 6.5 cm H₂O, below its end-inspiratory value.",
  "",
  "At D Palv is positive, but Ppl is less negative than at C and volume is falling, so Ptp is lower than at C.",
  "E is the return to FRC, the same pressures as A."
 ],
 "objective": "Track transpulmonary pressure through a tidal breath using Ptp = Palv − Ppl.",
 "source": "Respiratory Dynamics I (Szafran): single-alveolus model through a tidal breath",
 "table": null
},
{
 "id": "dy-02",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Pressures during a tidal breath",
 "difficulty": 2,
 "stem": "During a quiet inspiration in a healthy adult, at a moment when the lung has not yet fully expanded, pleural pressure is −7.5 cm H₂O and the lung's elastic recoil pressure at its current volume is 6.5 cm H₂O.\n\nWhich of the following best describes alveolar pressure and airflow at this moment?",
 "choices": [
  "−1 cm H₂O; air flows into the lung",
  "+1 cm H₂O; air flows out of the lung",
  "−14 cm H₂O; air flows into the lung",
  "+14 cm H₂O; air flows out of the lung",
  "0 cm H₂O; there is no airflow"
 ],
 "answer": 0,
 "explanation": "Alveolar pressure is the sum of the pressure surrounding the alveolus and its own recoil: Palv = Ppl + Pel = −7.5 + 6.5 = −1 cm H₂O. Equivalently, the transpulmonary pressure needed to hold the current volume is 6.5, but the muscles have made the distending pressure larger than that, so the alveolus expands and its pressure drops below atmospheric. With Palv below the 0 at the mouth, air flows in. If pleural pressure were held at −7.5, flow would stop once the lung had expanded enough for Pel to reach 7.5 and Palv to return to 0; in a normal breath Ppl keeps falling to about −8, so inflow continues until end inspiration.",
 "whyWrong": [
  "",
  "Palv is positive only when recoil exceeds the distending pressure, which happens during expiration.",
  "This adds the magnitudes (−7.5 − 6.5). Elastic recoil acts opposite to the distending pull, so the two partly cancel.",
  "Pressures of this size occur only with forced efforts, and the sign is wrong for inspiration.",
  "Palv is 0 only when Ptp equals Pel, at the no-flow points at FRC and end inspiration."
 ],
 "objective": "Calculate alveolar pressure from pleural and elastic recoil pressures and predict the direction of airflow.",
 "source": "Respiratory Dynamics I (Szafran) / Respiratory Statics (Poston): Palv = Pel − Ptp",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-03",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Pressures during a tidal breath",
 "difficulty": 1,
 "stem": "A healthy 35-year-old woman is breathing quietly. At the end of a tidal inspiration there is no airflow, alveolar pressure is 0 cm H₂O, and pleural pressure is −8 cm H₂O. Her diaphragm then relaxes.\n\nWhich of the following initiates expiratory airflow?",
 "choices": [
  "Abdominal muscles contract and make pleural pressure positive",
  "Lung elastic recoil decreases as the diaphragm relaxes",
  "Pleural pressure becomes less negative, so elastic recoil exceeds transpulmonary pressure and alveolar pressure becomes positive",
  "Alveolar pressure becomes negative and draws air out of the airways",
  "Airway resistance falls as the diaphragm relaxes, allowing air to escape"
 ],
 "answer": 2,
 "explanation": "Quiet expiration is passive. When the diaphragm relaxes, pleural pressure rises toward −5 cm H₂O, so the transpulmonary pressure holding the lung open falls. The lung is still at its end-inspiratory volume, so its elastic recoil (about 8 cm H₂O) now exceeds the distending pressure. The lung recoils, alveolar gas is compressed slightly, alveolar pressure becomes positive (about +1), and air flows out until the lung returns to FRC, where Ptp and Pel are equal again.",
 "whyWrong": [
  "Abdominal and internal intercostal muscles are recruited only for forced expiration. Quiet expiration needs no muscle effort.",
  "Elastic recoil depends on lung volume, and the volume has not yet changed when the diaphragm relaxes. It is the recoil that drives expiration.",
  "",
  "Air flows out only when alveolar pressure is above atmospheric. A negative alveolar pressure would draw air in.",
  "Resistance determines how much pressure a given flow needs, but it does not create the pressure gradient that starts flow."
 ],
 "objective": "Explain why quiet expiration is passive, driven by lung elastic recoil once pleural pressure rises.",
 "source": "Respiratory Dynamics I (Szafran): inspiration active, expiration passive",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-04",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Airway resistance & branching",
 "difficulty": 2,
 "stem": "In an isolated segment of bronchus perfused with air under laminar flow, a methacholine challenge contracts airway smooth muscle and reduces the internal radius by 30%. Airway length and gas properties do not change.\n\nTo maintain the original airflow, the driving pressure across the segment must increase by approximately what factor?",
 "fixedOrder": true,
 "choices": [
  "1.4-fold",
  "2.0-fold",
  "2.9-fold",
  "4.2-fold",
  "8.5-fold"
 ],
 "answer": 3,
 "explanation": "For laminar flow, Poiseuille's law gives R = 8ηl/(πr⁴), so resistance is proportional to 1/r⁴. A 30% fall in radius leaves r at 0.7 of baseline, and 0.7⁴ ≈ 0.24, so resistance rises by 1/0.24 ≈ 4.2-fold. Because ΔP = flow × R, the same flow needs about 4.2 times the driving pressure. This fourth-power dependence is why bronchospasm, mucosal edema and mucus, which all narrow the lumen, raise airway resistance and the work of breathing so steeply.",
 "whyWrong": [
  "1/0.7 ≈ 1.4 treats resistance as proportional to 1/r.",
  "1/0.7² ≈ 2.0 treats resistance as proportional to 1/r², as if it depended on cross-sectional area alone.",
  "1/0.7³ ≈ 2.9 uses the third power of the radius.",
  "",
  "1/0.7⁶ ≈ 8.5 overestimates the dependence on radius. Laminar resistance scales with r⁻⁴."
 ],
 "objective": "Apply Poiseuille's law (R ∝ 1/r⁴) to predict the pressure needed to maintain flow after airway narrowing.",
 "source": "Respiratory Dynamics II (Szafran): anatomic determinants of airway resistance",
 "figure": null,
 "table": null
},
{
 "id": "dy-05",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Airway resistance & branching",
 "difficulty": 2,
 "stem": "A 45-year-old smoker with a mild cough has a lung biopsy that shows inflammation narrowing many bronchioles less than 2 mm in diameter. His total airway resistance measured by body plethysmography is normal.\n\nWhich of the following best explains why his measured airway resistance is normal?",
 "choices": [
  "Flow in the small airways is turbulent, which lowers their resistance",
  "Small bronchioles are supported by cartilage, which keeps their lumens open during testing",
  "Small airways are so numerous and arranged in parallel that together they contribute little to total resistance",
  "Small airways are in series with the trachea, whose resistance is fixed and dominates the total",
  "Gas in the small airways has a lower viscosity than gas in the trachea"
 ],
 "answer": 2,
 "explanation": "Each bronchiole is narrow and individually has a high resistance, but there are tens of thousands of them in parallel. Parallel resistances add as reciprocals (1/R_T = 1/R₁ + 1/R₂ + …), so their combined resistance is small, and the very large total cross-sectional area also slows flow and keeps it laminar. Most airway resistance sits in the medium-sized bronchi. Disease in the small airways can therefore become extensive before total resistance rises, which is why they are called the lung's \"quiet zone.\"",
 "whyWrong": [
  "Flow in small airways is laminar because velocity is low. Turbulence would raise, not lower, resistance.",
  "Bronchioles lack cartilage, which is why they collapse in dynamic compression.",
  "",
  "All generations are in series, but the trachea is short and wide and contributes only a small share. The point is that the small airways' combined resistance is low.",
  "Viscosity of the gas does not change along the airway tree."
 ],
 "objective": "Explain why small airways contribute little to total airway resistance despite their small individual radius.",
 "source": "Respiratory Dynamics II (Szafran): resistances in series and parallel; medium bronchi as main site of Raw",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-06",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Laminar vs turbulent flow",
 "difficulty": 2,
 "stem": "A 30-year-old woman with a tracheal narrowing from a benign tumor is in respiratory distress with loud stridor. While awaiting surgery she is given a mixture of 70% helium and 30% oxygen (heliox) instead of 30% oxygen in nitrogen, and her work of breathing falls.\n\nWhich of the following best explains this improvement?",
 "choices": [
  "Helium relaxes tracheal smooth muscle and widens the airway",
  "Helium raises the density of the inspired gas, which damps turbulent eddies",
  "Helium diffuses across the alveolar membrane faster than nitrogen, improving oxygenation",
  "The lower density of heliox lowers the Reynolds number, so flow through the narrowed trachea is less turbulent",
  "Heliox increases airflow velocity through the trachea, which lowers resistance"
 ],
 "answer": 3,
 "explanation": "Flow through the trachea and a central narrowing is fast and turbulent. The Reynolds number, Re = Dvρ/η, rises with gas density, and turbulent flow needs a driving pressure that rises with flow squared, so turbulent resistance depends strongly on density. Helium is far less dense than nitrogen, so heliox lowers Re, makes flow more laminar, and lowers the pressure the patient must generate for the same flow. Heliox does not change the radius; it buys time until the obstruction is removed.",
 "whyWrong": [
  "Helium is inert and has no pharmacologic effect on airway smooth muscle.",
  "Helium is much less dense than nitrogen, not more. Higher density would raise the Reynolds number and promote turbulence.",
  "Her problem is resistance to bulk flow in a central airway, not alveolar gas exchange, and inert-gas diffusion would not lower her work of breathing.",
  "",
  "Higher velocity raises the Reynolds number and promotes turbulence. Lower density, not higher velocity, is the benefit."
 ],
 "objective": "Use the Reynolds number to explain how a low-density gas (heliox) reduces turbulent airway resistance.",
 "source": "Respiratory Dynamics II (Szafran): laminar vs turbulent flow, Reynolds number and heliox",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-07",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Laminar vs turbulent flow",
 "difficulty": 1,
 "stem": "A healthy 22-year-old runner's minute ventilation rises from 8 L/min at rest to 90 L/min during a sprint. Loud breath sounds are heard over his trachea, reflecting turbulent tracheal flow.\n\nWhich of the following changes is mainly responsible for the onset of turbulent flow in his trachea?",
 "choices": [
  "A decrease in tracheal diameter",
  "A rise in linear gas velocity, raising the Reynolds number",
  "A rise in gas viscosity",
  "A fall in gas density",
  "An increase in the total cross-sectional area of the airways"
 ],
 "answer": 1,
 "explanation": "The Reynolds number, Re = Dvρ/η, predicts the flow regime: below about 2000 flow is laminar, above it turbulent. The trachea's diameter and the gas's density and viscosity do not change during exercise, but with ten times the volume flow through the same single tube, linear velocity (v = V̇/A) rises tenfold. Re rises with it and the tracheal flow becomes turbulent and noisy. Turbulence makes the pressure needed for flow rise more steeply than flow, so resistance is higher at high flows.",
 "whyWrong": [
  "The trachea is cartilaginous and its diameter does not change meaningfully during exercise. (At a fixed volume flow a narrower tube would actually raise velocity and the Reynolds number, as at a stenosis, but nothing has narrowed here.)",
  "",
  "Viscosity is in the denominator of Re, so a higher viscosity would favor laminar flow, and it does not change with exercise.",
  "Lower density lowers Re and favors laminar flow, which is the principle behind heliox.",
  "The airway tree's total cross-sectional area is fixed by its anatomy, and a larger area would slow flow."
 ],
 "objective": "Identify linear velocity as the variable that drives the Reynolds number above the turbulent threshold in the trachea.",
 "source": "Respiratory Dynamics II (Szafran): Reynolds number and continuity (V̇ = v × A)",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-08",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Lung volume & resistance",
 "difficulty": 2,
 "stem": "A 26-year-old woman with an acute asthma exacerbation is breathing at an end-expiratory lung volume well above her usual FRC. Her chest is hyperresonant, and accessory muscles are active.\n\nWhich of the following is a mechanical benefit of breathing at this higher lung volume?",
 "choices": [
  "Lung compliance is greater at higher lung volumes, so each breath takes less pressure",
  "Greater radial traction from the surrounding expanded lung widens the airways and lowers resistance",
  "The diaphragm is flatter at higher lung volumes, so it generates more inspiratory force",
  "The chest wall recoils outward more strongly at higher volumes, assisting inspiration",
  "Dead space decreases at higher lung volumes, raising alveolar ventilation"
 ],
 "answer": 1,
 "explanation": "Airways are embedded in lung parenchyma, and alveolar walls attached to them pull outward as the lung inflates (mechanical interdependence, or tethering). At higher lung volumes this radial traction widens the airways, and because resistance scales with 1/r⁴, airway resistance falls steeply; near RV it rises sharply. Breathing at a higher volume therefore partly offsets bronchoconstriction. The cost is that she breathes on the flatter, less compliant part of the pressure–volume curve with shortened inspiratory muscles, which raises the elastic work of each breath.",
 "whyWrong": [
  "Lung compliance falls as volume rises (the curve flattens near TLC), which is the main cost of hyperinflation.",
  "",
  "A flattened diaphragm is shortened and works at a mechanical disadvantage, so it generates less force; this is one of the costs of hyperinflation, not a benefit.",
  "Above about 65% of TLC the chest wall recoils inward, and near FRC its outward recoil decreases as volume rises; it does not assist inspiration more.",
  "Anatomic dead space actually increases slightly at higher volumes because the airways are wider and longer."
 ],
 "objective": "Explain how lung volume affects airway resistance through radial traction (tethering).",
 "source": "Respiratory Dynamics II (Szafran): effect of lung volume on Raw",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-09",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Lung volume & resistance",
 "difficulty": 3,
 "stem": "A 61-year-old man with idiopathic pulmonary fibrosis has a total lung capacity of 62% of predicted. On his flow–volume loop, maximal expiratory flow measured at any given absolute lung volume is higher than predicted for that volume, and FEV₁/FVC is 0.91.\n\nWhich of the following best explains his high flows at a given lung volume?",
 "choices": [
  "Increased elastic recoil raises the driving pressure for expiration and increases radial traction on the airways",
  "Fibrosis stiffens the airway walls with cartilage, preventing dynamic compression",
  "Reduced lung volume shortens the airways, lowering their resistance",
  "Flow in fibrotic lungs is turbulent, which increases expiratory flow",
  "The reduced number of alveoli lowers the total cross-sectional area of the airways"
 ],
 "answer": 0,
 "explanation": "Fibrosis makes the lung stiff, so at any given volume its elastic recoil is higher than normal. During forced expiration, alveolar pressure equals pleural pressure plus elastic recoil, so higher recoil gives a larger driving pressure and moves the equal-pressure point toward the larger, stable airways. The same recoil, transmitted through tethering, pulls the airways wider and lowers their resistance. Flows at a given volume are therefore normal or high, most of the small vital capacity is exhaled in the first second, and FEV₁/FVC is preserved or increased.",
 "whyWrong": [
  "",
  "Fibrosis affects the parenchyma and does not add cartilage to small airways. Its effect on airways works through recoil and tethering.",
  "Airway length changes little, and lung volume is lower, which by itself would narrow the airways and raise resistance.",
  "Turbulent flow raises resistance and would lower flow at a given driving pressure.",
  "Fibrosis does not remove airways from the conducting tree, and a smaller total area would raise resistance."
 ],
 "objective": "Explain why expiratory flows are normal or high at a given volume in pulmonary fibrosis.",
 "source": "Respiratory Dynamics II (Szafran) / Pulm Small Group 1: fibrosis flow pattern and FEV₁/FVC",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-10",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Dynamic compression & flow limitation",
 "difficulty": 2,
 "stem": "A healthy 28-year-old man performs three forced expiratory maneuvers from TLC, each with greater effort than the last. Peak expiratory flow rises with each effort, but expiratory flow measured at 50% and at 25% of vital capacity is identical on all three attempts.\n\nWhich of the following best explains why flow at the lower lung volumes does not increase with effort?",
 "choices": [
  "Expiratory muscles fatigue after peak flow, so effort is no longer maximal",
  "Turbulent flow in the small airways prevents further increases in flow",
  "Lung elastic recoil increases with greater effort, slowing expiration",
  "Greater effort raises pleural pressure, which compresses the airways downstream of the equal-pressure point and limits flow",
  "Alveolar pressure does not increase with greater expiratory effort"
 ],
 "answer": 3,
 "explanation": "During forced expiration pleural pressure becomes positive and alveolar pressure equals pleural pressure plus elastic recoil. Pressure falls along the airway toward the mouth, and where it equals pleural pressure (the equal-pressure point) the transmural pressure beyond it becomes negative, so the airway is squeezed. Extra effort raises pleural and alveolar pressure equally, but it also compresses that downstream segment harder, so flow stays the same: flow becomes effort-independent and is set by elastic recoil and airway properties. At high volumes recoil is high and the EPP sits in cartilaginous airways, which is why peak flow still depends on effort.",
 "whyWrong": [
  "The maneuvers are brief and flows are reproducible at each volume, which is not the pattern of fatigue.",
  "Flow in the small airways is laminar; flow limitation comes from compression of airways, not from turbulence there.",
  "Elastic recoil depends on lung volume, not effort, and it drives rather than slows expiration.",
  "",
  "Alveolar pressure rises with effort along with pleural pressure. The added pressure is offset by greater airway compression."
 ],
 "objective": "Explain effort-independent expiratory flow at low lung volumes by dynamic airway compression beyond the equal-pressure point.",
 "source": "Respiratory Dynamics II (Szafran): expiratory flow limitation and the equal-pressure point",
 "figure": null,
 "table": null,
 "fixedOrder": false
},
{
 "id": "dy-11",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Dynamic compression & flow limitation",
 "difficulty": 3,
 "stem": "During a forced expiration at mid-lung volume, pleural pressure is +20 cm H₂O and lung elastic recoil pressure is 10 cm H₂O, so alveolar pressure is +30 cm H₂O. Because of resistance, pressure falls along the airway; at a point in a segmental bronchus the intraluminal pressure is +14 cm H₂O.\n\nWhich of the following best describes the transmural pressure across the wall of the bronchus at this point and its effect?",
 "fixedOrder": true,
 "choices": [
  "−16 cm H₂O; the airway tends to be compressed",
  "−6 cm H₂O; the airway tends to be compressed",
  "+6 cm H₂O; the airway is held open",
  "+10 cm H₂O; the airway is held open",
  "+34 cm H₂O; the airway is held open"
 ],
 "answer": 1,
 "explanation": "Transmural pressure is inside minus outside: Ptm = Paw − Ppl = 14 − 20 = −6 cm H₂O. The pressure outside the airway is pleural pressure, which is higher than the pressure inside at this point, so the bronchus is downstream of the equal-pressure point (where Paw = Ppl = +20) and tends to be squeezed. In cartilaginous bronchi the wall resists, but in small, non-cartilaginous airways the same negative transmural pressure causes narrowing or collapse, limiting flow and producing expiratory wheeze.",
 "whyWrong": [
  "This subtracts alveolar pressure (14 − 30). The pressure acting on the outside of the airway wall is pleural pressure, not alveolar pressure.",
  "",
  "This is Ppl − Paw, outside minus inside, which reverses the sign of transmural pressure.",
  "10 cm H₂O is the elastic recoil (Palv − Ppl), the transpulmonary pressure across the alveolar wall, not across this airway.",
  "This adds pleural pressure to airway pressure instead of subtracting it."
 ],
 "objective": "Calculate airway transmural pressure during forced expiration and predict compression beyond the equal-pressure point.",
 "source": "Respiratory Dynamics II (Szafran): pressure relationships during forced expiration",
 "figure": null,
 "table": null
},
{
 "id": "dy-12",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Dynamic compression & flow limitation",
 "difficulty": 2,
 "stem": "A 68-year-old man with severe emphysema breathes out slowly through pursed lips. He says this eases his breathlessness, and his end-expiratory lung volume falls when he does it.\n\nWhich of the following best explains how pursed-lip breathing reduces air trapping?",
 "choices": [
  "It increases lung elastic recoil, raising alveolar pressure",
  "It makes pleural pressure more negative during expiration",
  "It creates back-pressure that raises intraluminal airway pressure and moves the equal-pressure point toward the larger, cartilaginous airways",
  "It increases expiratory gas velocity, raising the Reynolds number",
  "It reduces anatomic dead space, increasing alveolar ventilation"
 ],
 "answer": 2,
 "explanation": "In emphysema the lung's low elastic recoil means pressure inside the airways falls to pleural pressure close to the alveoli, so the equal-pressure point lies in small, floppy bronchioles that collapse early and trap gas. Pursing the lips adds a resistance at the mouth, which keeps pressure higher all along the airway (a self-applied PEEP). The point where airway pressure equals pleural pressure moves toward the mouth into cartilaginous airways, so the small airways stay open longer and more gas leaves before closure. Positive-pressure ventilation stents the airways open by the same mechanism.",
 "whyWrong": [
  "Elastic recoil is a property of the lung tissue at a given volume. Pursing the lips changes airway pressure, not recoil.",
  "Expiration with pursed lips involves positive, not more negative, pleural pressure; the benefit comes from raising airway pressure.",
  "",
  "Higher velocity and turbulence would raise resistance and do nothing to keep small airways open.",
  "Pursed lips do not shorten the conducting airways; any rise in tidal volume is a consequence of less trapping, not the mechanism."
 ],
 "objective": "Explain how pursed-lip breathing (and positive airway pressure) moves the equal-pressure point and limits dynamic airway collapse.",
 "source": "Respiratory Dynamics II (Szafran): equal-pressure point, emphysema and positive-pressure ventilation",
 "figure": null,
 "table": null,
 "fixedOrder": false
}
]);
