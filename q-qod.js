window.QBANK=(window.QBANK||[]).concat([
{
 "id": "qod-01",
 "set": "qod",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Volumes & capacities",
 "difficulty": 1,
 "stem": "Refer to the spirogram: quiet tidal breathing, then a maximal inspiration and a maximal expiration. Brackets 1, 2, 3 and 6 mark volumes or capacities.\n\nWhich option correctly identifies brackets 2, 3 and 6?",
 "figure": {
  "type": "spiro",
  "marks": {
   "1": "TV",
   "2": "IC",
   "3": "FRC",
   "6": "VC"
  }
 },
 "fixedOrder": true,
 "choices": [
  "2 = inspiratory capacity, 3 = functional residual capacity, 6 = vital capacity",
  "2 = inspiratory reserve volume, 3 = residual volume, 6 = total lung capacity",
  "2 = inspiratory capacity, 3 = expiratory reserve volume, 6 = vital capacity",
  "2 = tidal volume, 3 = functional residual capacity, 6 = inspiratory capacity",
  "2 = inspiratory reserve volume, 3 = functional residual capacity, 6 = vital capacity"
 ],
 "answer": 0,
 "explanation": "Bracket 2 runs from the end of a quiet expiration (FRC) up to the maximal inspiration (TLC): that is the inspiratory capacity, TV + IRV. Bracket 3 runs from zero up to the end of a quiet expiration: the functional residual capacity, ERV + RV. Bracket 6 runs from the maximal expiration (RV) up to the maximal inspiration (TLC): the vital capacity, IRV + TV + ERV. Volumes stand alone; capacities are sums of two or more volumes.",
 "whyWrong": [
  "",
  "Bracket 2 starts at the end of a quiet expiration, not the top of a tidal breath, so it includes the tidal volume (IC, not IRV). Bracket 3 reaches up to FRC, so it includes ERV as well as RV, and bracket 6 starts at RV, so it excludes RV (VC, not TLC).",
  "Bracket 3 starts at zero volume, so it contains the residual volume as well as the ERV; ERV alone starts at RV.",
  "Bracket 2 extends to the maximal inspiration, far above a single tidal breath, and bracket 6 extends down to RV, below FRC, so it is not the inspiratory capacity.",
  "Bracket 2 starts at FRC (end of a quiet expiration), so it includes the tidal volume; IRV starts at the top of a tidal breath."
 ],
 "objective": "Identify lung volumes and capacities on a spirogram.",
 "source": "Pulm QOD 11/9/2026, Q1 (matching, part 1)"
},
{
 "id": "qod-02",
 "set": "qod",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Volumes & capacities",
 "difficulty": 1,
 "stem": "Refer to the spirogram: quiet tidal breathing, then a maximal inspiration and a maximal expiration. Brackets 1, 4, 5 and 7 mark volumes or capacities.\n\nWhich option correctly identifies brackets 1, 4, 5 and 7?",
 "figure": {
  "type": "spiro",
  "marks": {
   "1": "TV",
   "4": "ERV",
   "5": "RV",
   "7": "TLC"
  }
 },
 "fixedOrder": true,
 "choices": [
  "1 = tidal volume, 4 = expiratory reserve volume, 5 = residual volume, 7 = total lung capacity",
  "1 = tidal volume, 4 = residual volume, 5 = expiratory reserve volume, 7 = vital capacity",
  "1 = inspiratory reserve volume, 4 = expiratory reserve volume, 5 = residual volume, 7 = total lung capacity",
  "1 = tidal volume, 4 = functional residual capacity, 5 = residual volume, 7 = total lung capacity",
  "1 = tidal volume, 4 = expiratory reserve volume, 5 = residual volume, 7 = vital capacity"
 ],
 "answer": 0,
 "explanation": "Bracket 1 spans a single quiet breath (tidal volume). Bracket 4 spans the extra volume forced out below the end of a quiet expiration, from FRC down to RV (expiratory reserve volume). Bracket 5 is what remains after a maximal expiration (residual volume), which the spirometer never sees. Bracket 7 runs from zero to maximal inspiration (total lung capacity = VC + RV).",
 "whyWrong": [
  "",
  "Bracket 5 is the volume left below the maximal expiration, so it is RV; bracket 4 lies above it, between RV and FRC (ERV). Bracket 7 starts at zero, so it includes RV (TLC, not VC).",
  "Bracket 1 spans one quiet breath; the inspiratory reserve volume lies above the top of a tidal breath.",
  "Bracket 4 starts at RV, not at zero, so it does not include the residual volume; FRC = ERV + RV.",
  "Bracket 7 starts at zero lung volume, so it includes RV; vital capacity starts at RV."
 ],
 "objective": "Identify lung volumes and capacities on a spirogram.",
 "source": "Pulm QOD 11/9/2026, Q1 (matching, part 2)"
},
{
 "id": "qod-03",
 "set": "qod",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Measuring lung volumes",
 "difficulty": 1,
 "stem": "A 25-year-old medical student participates in a respiratory physiology experiment. Spirometry is started, and the student's tidal volume is measured at 500 mL. The student is then taken through the remainder of the spirometry exam: after maximal inspiration, the student exhales as much air as possible.\n\nWhich of the following lung volumes or capacities cannot be measured directly by spirometry?",
 "choices": [
  "Functional residual capacity",
  "Vital capacity",
  "Inspiratory capacity",
  "Expiratory reserve volume"
 ],
 "answer": 0,
 "explanation": "Spirometry can measure every volume that involves air moving into or out of the lungs, but it cannot measure anything that includes the residual volume, because RV cannot be exhaled. FRC = ERV + RV contains RV, so it needs helium dilution or body plethysmography. (TLC also contains RV, but it is not among the choices.)",
 "whyWrong": [
  "",
  "Vital capacity (IRV + TV + ERV) is the volume moved from maximal inspiration to maximal expiration, so the spirometer records it directly.",
  "Inspiratory capacity (TV + IRV) is inhaled from FRC to TLC, so it is measured directly.",
  "ERV is the extra volume exhaled from FRC down to RV, so it is measured directly."
 ],
 "objective": "Identify which lung volumes spirometry cannot measure because they contain residual volume.",
 "source": "Pulm QOD 11/9/2026, Q2"
},
{
 "id": "qod-04",
 "set": "qod",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Pressure–volume curves & FRC",
 "difficulty": 2,
 "stem": "The figure shows a single alveolus at rest (no airflow into or out of the alveolus). At rest PA = 0 cm H₂O, and an esophageal (pleural) catheter shows Ppl = −5 cm H₂O.\n\nWhich of the following pressures counteracts the transpulmonary pressure and prevents the alveolus from expanding?",
 "figure": {
  "type": "alveolus",
  "values": {
   "PA": "0",
   "Ppl": "−5"
  }
 },
 "choices": [
  "Alveolar pressure (PA)",
  "Elastic recoil pressure (Pel)",
  "Transpulmonary pressure (Ptp)",
  "Atmospheric pressure (Patm)"
 ],
 "answer": 1,
 "explanation": "Elastic recoil pressure reflects the lung \"wanting\" to be small (tissue elastic fibers plus surface tension). Alveolar pressure is 0 because there is no airflow. Transpulmonary pressure Ptp = PA − Ppl = 0 − (−5) = 5 cm H₂O distends the alveolus. Because nothing is moving, an equal and opposite pressure must balance it, and that is the elastic recoil pressure: Pel = Ptp = 5 cm H₂O at FRC.",
 "whyWrong": [
  "Alveolar pressure is 0 at rest; it is part of the transpulmonary pressure calculation, not a force pushing back against distension.",
  "",
  "Ptp is the distending pressure itself; it cannot be the pressure that opposes itself.",
  "Atmospheric pressure is the reference (0) and equals alveolar pressure when there is no flow; it does not oppose expansion of the alveolus."
 ],
 "objective": "Explain the balance of transpulmonary and elastic recoil pressure at FRC in the single-alveolus model.",
 "source": "Pulm QOD 11/9/2026, Q3"
},
{
 "id": "qod-05",
 "set": "qod",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Pressures during a tidal breath",
 "difficulty": 1,
 "stem": "A healthy 28-year-old man takes a normal, tidal breath while sitting upright.\n\nWhich of the following is the immediate mechanical event that initiates airflow into the lung after the inspiratory muscles contract?",
 "choices": [
  "Transpulmonary pressure (Ptp) becomes equal to alveolar pressure (PA), causing flow cessation",
  "Alveolar pressure (PA) becomes positive, generating a pressure gradient",
  "Pleural pressure (Ppl) becomes more negative, increasing transpulmonary pressure (Ptp)",
  "The decrease in elastic recoil pressure (Pel) creates a greater gradient for air movement"
 ],
 "answer": 2,
 "explanation": "Inspiratory muscle contraction makes pleural pressure more negative. Because Ptp = PA − Ppl, the fall in Ppl raises the transpulmonary pressure. The higher Ptp overcomes the lung's elastic recoil (Pel), the alveoli expand, and alveolar pressure falls below atmospheric (taken as 0), which draws air in.",
 "whyWrong": [
  "This describes no step in inspiration; flow stops when Ptp again equals Pel and PA returns to 0 at end inspiration.",
  "A positive alveolar pressure pushes air out; that happens during expiration.",
  "",
  "Elastic recoil pressure rises, not falls, as the lung inflates; inspiration occurs because Ptp transiently exceeds Pel."
 ],
 "objective": "Sequence the pressure changes that start inspiration in the single-alveolus model.",
 "source": "Pulm QOD 11/10/2026, Q1"
},
{
 "id": "qod-06",
 "set": "qod",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Dynamic compression & flow limitation",
 "difficulty": 2,
 "stem": "A 52-year-old man with a 40-pack-year smoking history presents with progressive shortness of breath and a chronic productive cough. Pulmonary function testing reveals an increased total lung capacity and decreased expiratory flow rates. Wheezing is auscultated during forced exhalation.\n\nWhich of the following best explains why wheezing occurs mainly during expiration in this patient?",
 "choices": [
  "Loss of airway smooth muscle tone during exhalation",
  "Dynamic airway compression due to increased intrathoracic pressure",
  "Increased airway resistance from turbulent flow in the upper airway",
  "Closure of alveoli due to surfactant deficiency",
  "Collapse of large cartilaginous bronchi"
 ],
 "answer": 1,
 "explanation": "During exhalation, positive intrathoracic pressure compresses small, non-cartilaginous airways, especially as air rushing through them lowers the luminal pressure. Past the equal-pressure point the transmural pressure is negative, the airway narrows or collapses, expiratory flow is limited and the fluttering airway wheezes. During inspiration the negative pleural pressure pulls airways open, so resistance and wheeze fall.",
 "whyWrong": [
  "Losing smooth muscle tone would dilate airways and lower resistance, the opposite of what produces wheeze.",
  "",
  "Upper-airway turbulence produces noise in both phases or inspiratory stridor; it does not explain wheeze that is mainly expiratory with obstructive PFTs.",
  "Surfactant deficiency causes alveolar collapse and low compliance (as in neonatal RDS), not expiratory wheeze with a high TLC.",
  "Cartilage holds the large bronchi open; the collapse happens in small, non-cartilaginous airways."
 ],
 "objective": "Explain expiratory wheeze by dynamic airway compression downstream of the equal-pressure point.",
 "source": "Pulm QOD 11/10/2026, Q2"
},
{
 "id": "qod-07",
 "set": "qod",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Lung volume & resistance",
 "difficulty": 1,
 "stem": "A healthy 25-year-old man inspires deeply from functional residual capacity (FRC) to total lung capacity (TLC).\n\nWhich of the following best describes how airway resistance (Raw) changes during this maneuver?",
 "choices": [
  "Remains constant because airway caliber is independent of lung volume",
  "Decreases because airway smooth muscle relaxes during inspiration",
  "Increases because the airways elongate and become narrower",
  "Increases because airway smooth muscle contracts at high lung volumes",
  "Decreases because tethering forces from alveolar expansion widen small airways"
 ],
 "answer": 4,
 "explanation": "As lung volume increases, the surrounding alveoli expand and pull radially on the small airways (tethering, mechanical interdependence), widening them and lowering Raw. At low lung volumes this traction is lost and Raw rises, which is one reason obstruction is worse during exhalation.",
 "whyWrong": [
  "Airway caliber depends strongly on lung volume through radial traction; Raw at TLC can be less than half of its FRC value.",
  "The fall in resistance is mechanical (traction), not a change in smooth muscle tone with each breath.",
  "Airways do lengthen a little, but the widening from traction dominates, so resistance falls.",
  "Smooth muscle does not contract at high lung volumes; resistance is lowest near TLC.",
  ""
 ],
 "objective": "Explain why airway resistance falls as lung volume rises.",
 "source": "Pulm QOD 11/10/2026, Q3"
},
{
 "id": "qod-08",
 "set": "qod",
 "topic": "Respiratory Dynamics & Airway Resistance",
 "subtopic": "Airway resistance & branching",
 "difficulty": 2,
 "stem": "Several factors influence the total resistance of the airways.\n\nWhich combination of factors is associated with decreased airway resistance?",
 "choices": [
  "Laminar flow, airways arranged in parallel, high lung volumes",
  "Turbulent flow, airways arranged in parallel, high lung volumes",
  "Laminar flow, airways arranged in series, high lung volumes",
  "Laminar flow, airways arranged in parallel, low lung volumes",
  "Turbulent flow, airways arranged in series, low lung volumes"
 ],
 "answer": 0,
 "explanation": "At high lung volumes airway radius is larger (tethering), which lowers resistance by Poiseuille's law. Parallel resistances add as reciprocals, so many small airways in parallel have a low total resistance. In the distal airways the low velocity gives a low Reynolds number and laminar flow, which needs less driving pressure than turbulent flow. Together these explain why resistance in the distal airways is lower than in the proximal airways even though each proximal airway is wider.",
 "whyWrong": [
  "",
  "Turbulent flow raises resistance because driving pressure rises more steeply than flow.",
  "Resistances in series add directly, so a series arrangement raises total resistance.",
  "Low lung volumes narrow the airways (less radial traction), raising resistance.",
  "Every element here raises resistance: turbulence, series arrangement and low lung volume."
 ],
 "objective": "Identify the factors that lower airway resistance.",
 "source": "Pulm QOD 11/10/2026, Q4 (multiple-answer, converted)"
},
{
 "id": "qod-09",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Flow–volume loops",
 "difficulty": 1,
 "stem": "Refer to the figure, which shows a normal flow–volume loop (dashed) and a patient's loop with lower flows (solid).\n\nWhat pattern of pathology is reflected in the patient's flow–volume loop?",
 "figure": {
  "type": "fv",
  "loops": [
   "normal",
   "obstructive"
  ],
  "names": [
   "Normal",
   "Patient"
  ]
 },
 "choices": [
  "Obstructive",
  "Restrictive",
  "None; normal"
 ],
 "answer": 0,
 "explanation": "In obstructive lung disease expiratory flow is limited, so on the expiratory limb (positive flow) flow rates are lower than normal at each volume. The concave, scooped shape comes from airways collapsing earlier than in a normal lung. Air trapping also shifts the loop toward higher lung volumes (RV higher).",
 "whyWrong": [
  "",
  "Restriction gives a narrow loop shifted toward low volumes with a preserved or tall, steep expiratory limb, not a scooped one.",
  "The patient's peak flow is reduced and the expiratory limb is scooped, so the loop is not normal."
 ],
 "objective": "Recognize the scooped expiratory limb of obstruction on a flow–volume loop.",
 "source": "Pulm QOD 11/10/2026, Q5"
},
{
 "id": "qod-10",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Obstruction vs restriction",
 "difficulty": 2,
 "stem": "A 43-year-old woman presents with a 2-month history of a nonproductive cough. Her symptoms worsen during weekdays, improve over the weekend, and resolve completely by Sunday evening. Three months ago, she began working in a bakery. She denies any recent fever or weight loss, takes no medications, and denies any substance use. She is examined at the end of a workday while her symptoms are present. Vital signs are within normal limits. An end-expiratory wheeze is heard at both lung bases, and percussion is mildly hyper-resonant. The remainder of the examination is normal.\n\nWhich of the following changes are most likely seen on pulmonary function testing (↓ decreased, ↑ increased, ↔ unchanged)?",
 "fixedOrder": true,
 "choices": [
  "FEV₁/FVC ↓, peak expiratory flow ↓",
  "FEV₁/FVC ↓, peak expiratory flow ↑",
  "FEV₁/FVC ↓, peak expiratory flow ↔",
  "FEV₁/FVC ↑, peak expiratory flow ↓",
  "FEV₁/FVC ↑, peak expiratory flow ↑",
  "FEV₁/FVC ↑, peak expiratory flow ↔",
  "FEV₁/FVC ↔, peak expiratory flow ↔"
 ],
 "answer": 0,
 "explanation": "This pattern suggests work-related asthma: reversible bronchial obstruction from airway hyperreactivity and inflammation, with flour dust a recognized trigger. Smooth muscle contraction, mucosal swelling and mucus narrow the airways, which resist airflow especially during expiration. FEV₁ falls proportionally more than FVC, so FEV₁/FVC falls, and with comparable effort the narrowed airways reach a lower peak expiratory flow. Testing during symptoms matters: asthma can give normal spirometry between episodes.",
 "whyWrong": [
  "",
  "Narrowed airways cannot generate a higher peak expiratory flow; peak flow falls with obstruction.",
  "With comparable effort, narrowed airways lower the peak flow as well as the FEV₁/FVC ratio.",
  "A rising FEV₁/FVC with low peak flow fits restriction with reduced effort or weakness, not obstruction.",
  "A high FEV₁/FVC points to restriction (a stiff lung with increased recoil), not obstruction, and narrowed asthmatic airways cannot generate a higher peak flow.",
  "A rising FEV₁/FVC is the opposite of obstruction; asthma lowers the ratio.",
  "Spirometry can be normal between asthma episodes, but she was tested while symptomatic with wheeze, so obstruction should be present."
 ],
 "objective": "Predict spirometry changes (FEV₁/FVC and peak flow) in symptomatic asthma.",
 "source": "Pulm QOD 11/10/2026, Q6"
},
{
 "id": "qod-11",
 "set": "qod",
 "topic": "Lung Volumes, Statics & Surfactant",
 "subtopic": "Surface tension & surfactant",
 "difficulty": 2,
 "stem": "A newborn delivered at 28 weeks of gestation develops severe respiratory distress soon after birth. The infant has rapid breathing, nasal flaring, and inward movement of the chest wall between the ribs during inspiration. The immature lungs have difficulty remaining expanded and exchanging gases effectively.\n\nWhich of the following is most likely to be increased?",
 "choices": [
  "Lung elastic recoil pressure",
  "Surface area of aerated alveoli available for gas exchange",
  "Functional residual capacity",
  "Surfactant secretion",
  "Lung compliance"
 ],
 "answer": 0,
 "explanation": "This infant most likely has neonatal respiratory distress syndrome from insufficient surfactant. Type II cells make surfactant, which lowers surface tension at the alveolar air–liquid interface. Without enough of it, the inward pull of surface tension rises, so at the same lung volume a greater distending pressure is needed: lung elastic recoil pressure is increased (here from surface tension, not more elastic fibers). Compliance falls, alveoli collapse, and the strong inspiratory efforts pull the compliant neonatal chest wall inward (retractions).",
 "whyWrong": [
  "",
  "Collapsed, poorly aerated alveoli reduce the surface area available for gas exchange.",
  "Higher lung recoil pulls the respiratory system to a smaller resting volume, so FRC falls.",
  "Premature type II cells produce too little surfactant; that deficiency is the cause of the disease.",
  "With higher surface tension the same pressure change produces a smaller volume change, so compliance falls."
 ],
 "objective": "Explain how surfactant deficiency raises lung elastic recoil and lowers compliance in neonatal RDS.",
 "source": "Pulm QOD 11/10/2026, Q7"
},
{
 "id": "qod-12",
 "set": "qod",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Alveolar gas equation",
 "difficulty": 1,
 "stem": "The alveolar gas equation is PAO₂ = FiO₂ × (Patm − PH₂O) − PaCO₂/R. The first term is the inspired PO₂; the second term is the CO₂ added to alveolar gas.\n\nWhich combination of factors would each lead to a LOW alveolar PO₂?",
 "choices": [
  "Hypoventilation, low FiO₂, high altitude",
  "Hyperventilation, low FiO₂, high altitude",
  "Hypoventilation, high FiO₂, high altitude",
  "Hypoventilation, low FiO₂, low altitude",
  "Hyperventilation, high FiO₂, low altitude"
 ],
 "answer": 0,
 "explanation": "PAO₂ falls when the inspired term falls or the CO₂ term grows. High altitude lowers Patm and low FiO₂ lowers the fraction of O₂, both shrinking the inspired PO₂. Hypoventilation lets CO₂ accumulate between breaths, raising PaCO₂ and therefore the PaCO₂/R term that is subtracted.",
 "whyWrong": [
  "",
  "Hyperventilation lowers PaCO₂ and shrinks the CO₂ term, which raises PAO₂ (the altitude climber's compensation).",
  "A high FiO₂ raises the inspired PO₂ and PAO₂.",
  "Low altitude means a higher Patm, which raises inspired and alveolar PO₂.",
  "All three of these raise PAO₂."
 ],
 "objective": "Use the terms of the alveolar gas equation to predict causes of a low PAO₂.",
 "source": "Pulm QOD 11/11/2026, Q1 (multiple-answer, converted)"
},
{
 "id": "qod-13",
 "set": "qod",
 "topic": "Ventilation & Alveolar Gas",
 "subtopic": "Altitude",
 "difficulty": 1,
 "stem": "A medical student travels from sea level to a mountain resort where the barometric pressure (PB) is 600 mm Hg. The student is ventilating normally with an arterial PCO₂ (PaCO₂) of 40 mm Hg and has a respiratory quotient (R) of 0.8. Assume an FiO₂ of 0.21 and a PH₂O of 47 mm Hg.\n\nWhat is the student's calculated alveolar PO₂ (PAO₂)?",
 "fixedOrder": true,
 "choices": [
  "48 mm Hg",
  "66 mm Hg",
  "100 mm Hg",
  "116 mm Hg"
 ],
 "answer": 1,
 "explanation": "PAO₂ = (PB − PH₂O) × FiO₂ − PaCO₂/R = (600 − 47) × 0.21 − 40/0.8 = 116.1 − 50 = 66 mm Hg. The lower barometric pressure at altitude directly lowers the inspired PO₂ and therefore PAO₂, a cause of hypoxemia with a normal A–a gradient.",
 "whyWrong": [
  "This subtracts far more than 50 mm Hg for CO₂ (as if R were about 0.6 or PaCO₂ much higher); with PaCO₂ 40 and R 0.8 the CO₂ term is 50.",
  "",
  "This is roughly the sea-level PAO₂; it ignores the lower barometric pressure.",
  "This is the inspired PO₂, (600 − 47) × 0.21; it forgets to subtract the CO₂ term."
 ],
 "objective": "Calculate PAO₂ at altitude with the alveolar gas equation.",
 "source": "Pulm QOD 11/11/2026, Q2"
},
{
 "id": "qod-14",
 "set": "qod",
 "topic": "Diffusion",
 "subtopic": "O₂ vs CO₂ diffusion",
 "difficulty": 1,
 "stem": "Carbon dioxide (CO₂) is transported across the alveolar–capillary membrane about 20 times faster than oxygen (O₂). Here D refers to the diffusion constant for a gas, which is separate from the diffusing capacity of the lung (DL = area × D/thickness).\n\nBased on the factors that determine the diffusion constant, which property primarily accounts for this difference?",
 "choices": [
  "The higher solubility of CO₂ in the blood and tissue fluid compared with O₂",
  "The greater partial pressure gradient for CO₂ across the membrane",
  "The smaller molecular weight of CO₂ compared with O₂, leading to faster movement across the barrier",
  "The binding rate of O₂ to hemoglobin in the capillary blood, which limits its uptake"
 ],
 "answer": 0,
 "explanation": "The diffusion constant is proportional to solubility divided by the square root of molecular weight. CO₂ is about 24 times more soluble than O₂, which dominates and explains why its diffusivity is roughly 20 times that of O₂.",
 "whyWrong": [
  "",
  "The partial pressure gradient for CO₂ (about 46 → 40 mm Hg) is much smaller than for O₂ (40 → 100), and the gradient is not part of the diffusion constant anyway.",
  "CO₂ (MW 44) is heavier than O₂ (MW 32), which slightly slows it; its advantage comes from solubility.",
  "Hemoglobin binding is a blood-side factor in the diffusing capacity, not part of the gas's diffusion constant."
 ],
 "objective": "Explain why CO₂ diffuses about 20 times faster than O₂.",
 "source": "Pulm QOD 11/11/2026, Q3"
},
{
 "id": "qod-15",
 "set": "qod",
 "topic": "O₂ & CO₂ Transport",
 "subtopic": "HbO₂ curve & shifts",
 "difficulty": 1,
 "stem": "A 35-year-old man presents to the emergency department with a severe bacterial infection causing septic shock. He is febrile with a temperature of 39.5°C and hypotensive, suggesting significant tissue hypoperfusion. At his hypoperfused tissues his body is attempting to maximize O₂ release from hemoglobin.\n\nWhich change in local tissue blood chemistry is primarily responsible for promoting this maximal O₂ unloading by shifting the O₂–Hb dissociation curve?",
 "choices": [
  "Decreased tissue PCO₂",
  "Decreased body temperature",
  "Decreased blood pH",
  "Decreased red blood cell 2,3-diphosphoglycerate (2,3-DPG)"
 ],
 "answer": 2,
 "explanation": "A rightward shift lowers hemoglobin's O₂ affinity and helps unloading. Rightward shifts come from increased temperature, decreased pH, increased PCO₂ and increased 2,3-DPG. Hypoperfusion produces metabolic acids such as lactate, lowering pH; together with fever this promotes O₂ unloading in his tissues.",
 "whyWrong": [
  "A lower PCO₂ shifts the curve left and holds O₂ on hemoglobin; hypoperfused tissues accumulate CO₂.",
  "He is febrile; a lower temperature would shift the curve left.",
  "",
  "Less 2,3-DPG shifts the curve left (as in stored blood), impairing unloading."
 ],
 "objective": "Identify factors that shift the HbO₂ curve to the right in hypoperfused tissue.",
 "source": "Pulm QOD 11/11/2026, Q4"
},
{
 "id": "qod-16",
 "set": "qod",
 "topic": "Acid–Base",
 "subtopic": "ABG interpretation",
 "difficulty": 1,
 "stem": "The table lists the four primary acid–base disorders and their pH.\n\nWhich option correctly gives the primary problem for respiratory acidosis / metabolic acidosis / respiratory alkalosis / metabolic alkalosis, in that order?",
 "table": {
  "head": [
   "Disorder",
   "pH"
  ],
  "rows": [
   [
    "Respiratory acidosis",
    "Low (< 7.37)"
   ],
   [
    "Metabolic acidosis",
    "Low (< 7.37)"
   ],
   [
    "Respiratory alkalosis",
    "High (> 7.42)"
   ],
   [
    "Metabolic alkalosis",
    "High (> 7.42)"
   ]
  ]
 },
 "choices": [
  "High PCO₂ / low HCO₃⁻ / low PCO₂ / high HCO₃⁻",
  "Low HCO₃⁻ / high PCO₂ / high HCO₃⁻ / low PCO₂",
  "High PCO₂ / high HCO₃⁻ / low PCO₂ / low HCO₃⁻",
  "Low PCO₂ / low HCO₃⁻ / high PCO₂ / high HCO₃⁻",
  "High HCO₃⁻ / low PCO₂ / low HCO₃⁻ / high PCO₂"
 ],
 "answer": 0,
 "explanation": "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. CO₂ acts as an acid and HCO₃⁻ as a base. Respiratory disorders are primary changes in PCO₂ (high PCO₂ → acidosis, low → alkalosis); metabolic disorders are primary changes in HCO₃⁻ (low → acidosis, high → alkalosis). The other organ compensates in the same direction (kidney for respiratory, lung for metabolic), but never restores a fully normal pH.",
 "whyWrong": [
  "",
  "This swaps respiratory and metabolic: respiratory disorders are defined by PCO₂, metabolic ones by HCO₃⁻.",
  "A high HCO₃⁻ raises pH, so it cannot be the primary problem in metabolic acidosis (and a low HCO₃⁻ cannot cause alkalosis).",
  "A low PCO₂ raises pH, so it causes respiratory alkalosis, not acidosis; high PCO₂ causes acidosis.",
  "Every pairing is inverted: the respiratory disorders are labeled with HCO₃⁻ changes and in the wrong direction."
 ],
 "objective": "Identify the primary problem in each acid–base disorder.",
 "source": "Pulm QOD 11/13/2026, Q1 (matching, converted)"
},
{
 "id": "qod-17",
 "set": "qod",
 "topic": "Acid–Base",
 "subtopic": "Metabolic disorders & compensation",
 "difficulty": 2,
 "stem": "A 41-year-old man is brought to the emergency department because of confusion, nausea, and decreased arousal. He is unable to answer questions, and no history is available. His temperature is 37°C, pulse is 78/min, and respirations are 22/min. Arterial blood gas on room air and serum chemistry studies show: pH 7.23, PaO₂ 100 mm Hg, PaCO₂ 22 mm Hg, sodium 138 mEq/L, potassium 4.1 mEq/L, chloride 102 mEq/L, bicarbonate 9 mEq/L, blood urea nitrogen 36 mg/dL, creatinine 1.24 mg/dL.\n\nWhich of the following is the most likely primary acid–base disorder in this patient?",
 "choices": [
  "Metabolic acidosis",
  "Metabolic alkalosis",
  "Respiratory acidosis",
  "Respiratory alkalosis"
 ],
 "answer": 0,
 "explanation": "pH 7.23 is acidemia. A bicarbonate of 9 mEq/L accounts for it, so the primary disorder is metabolic acidosis; the low PaCO₂ acts in the opposite direction and is respiratory compensation. Anion gap = Na⁺ − (Cl⁻ + HCO₃⁻) = 138 − (102 + 9) = 27, a high anion gap metabolic acidosis. Winter's formula predicts PaCO₂ = 1.5 × 9 + 8 ± 2 = 19.5–23.5 mm Hg; the measured 22 is within range, so compensation is appropriate and there is no separate respiratory disorder.",
 "whyWrong": [
  "",
  "Metabolic alkalosis would raise HCO₃⁻ and pH; his HCO₃⁻ is 9 and he is acidemic.",
  "Respiratory acidosis requires a high PaCO₂; his is 22 mm Hg.",
  "His low PaCO₂ is compensation for the metabolic acidosis (it matches Winter's formula); the pH is acidemic, so a primary respiratory alkalosis is not the main process."
 ],
 "objective": "Identify a high anion gap metabolic acidosis with appropriate respiratory compensation (Winter's formula).",
 "source": "Pulm QOD 11/13/2026, Q2"
},
{
 "id": "qod-18",
 "set": "qod",
 "topic": "Acid–Base",
 "subtopic": "Respiratory acidosis (strength vs load)",
 "difficulty": 2,
 "stem": "A 36-year-old man presents to the sleep clinic for polysomnography. Throughout the evaluation, he snores loudly and stops breathing for periods of up to 45 seconds. An arterial blood gas sample is obtained at the end of an apneic episode, immediately before breathing resumes.\n\nCompared with values immediately before the episode, which of the following changes is most likely (↑ increased, ↓ decreased, ↔ unchanged)?",
 "fixedOrder": true,
 "choices": [
  "pH ↑, PaCO₂ ↓, PaO₂ ↔",
  "pH ↔, PaCO₂ ↑, PaO₂ ↑",
  "pH ↔, PaCO₂ ↓, PaO₂ ↑",
  "pH ↓, PaCO₂ ↑, PaO₂ ↓",
  "pH ↓, PaCO₂ ↓, PaO₂ ↔"
 ],
 "answer": 3,
 "explanation": "Loud snoring with recurrent pauses suggests obstructive sleep apnea. The occluded upper airway prevents alveolar ventilation despite continued effort, while metabolism keeps consuming O₂ and producing CO₂. PaO₂ falls and PaCO₂ rises. The rise in CO₂ shifts CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ toward H⁺, an acute respiratory acidosis; there is no time for renal compensation in 45 seconds.",
 "whyWrong": [
  "A rising pH with falling PaCO₂ describes hyperventilation; during apnea no CO₂ is removed.",
  "PaCO₂ rises, but without any renal compensation the pH must fall, and PaO₂ cannot rise when no fresh gas enters.",
  "PaCO₂ cannot fall and PaO₂ cannot rise when ventilation stops.",
  "",
  "PaCO₂ rises, not falls, during apnea, and PaO₂ falls as O₂ is consumed without replacement."
 ],
 "objective": "Predict acute blood gas changes during an obstructive apnea.",
 "source": "Pulm QOD 11/13/2026, Q3"
},
{
 "id": "qod-19",
 "set": "qod",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Low V/Q",
 "difficulty": 1,
 "stem": "A previously healthy 32-year-old man comes to the emergency department because of a 1-day history of fever, shortness of breath, and productive cough. He appears to be in distress. His temperature is 38.6°C, and respirations are 28/min. His oxygen saturation on room air is 88%. A chest x-ray shows lobar consolidation in the right lung.\n\nWhich of the following mechanisms is the most likely cause of the hypoxemia in this patient?",
 "choices": [
  "Impaired oxygen diffusion across fibrotic alveolar walls",
  "Generalized alveolar hypoventilation",
  "Reduced perfusion of ventilated alveoli",
  "Reduced ventilation of perfused alveoli"
 ],
 "answer": 3,
 "explanation": "Fever, productive cough and focal consolidation indicate lobar pneumonia. Inflammatory exudate fills the alveoli and reduces the delivery of fresh gas, while blood keeps flowing through their capillaries, so ventilation is low relative to perfusion (low V/Q). Where ventilation is completely absent, V/Q = 0 (shunt); both coexist in pneumonia. Hypoxic pulmonary vasoconstriction diverts some blood but does not fully correct the mismatch, and healthy units cannot compensate because their hemoglobin is already nearly saturated.",
 "whyWrong": [
  "Nothing suggests fibrosis; the problem is alveoli filled with exudate, not a thickened barrier.",
  "He is tachypneic, so global ventilation is increased; generalized hypoventilation would also raise PaCO₂.",
  "Ventilated but unperfused alveoli are dead space (high V/Q), as in pulmonary embolism, not consolidation.",
  ""
 ],
 "objective": "Identify low ventilation of perfused alveoli (low V/Q to shunt) as the cause of hypoxemia in pneumonia.",
 "source": "Pulm QOD 11/13/2026, Q4"
},
{
 "id": "qod-20",
 "set": "qod",
 "topic": "Acid–Base",
 "subtopic": "Respiratory acidosis (strength vs load)",
 "difficulty": 1,
 "stem": "A 27-year-old woman is found unresponsive with pinpoint pupils. On arrival, her respiratory rate is 5 breaths per minute. Her lung exam is clear, and her x-ray shows normal lungs. Her ABG shows pH 7.08, PaCO₂ 85 mm Hg, PaO₂ 42 mm Hg, SaO₂ 75%, HCO₃⁻ 26 mEq/L.\n\nWhat is the patient's primary acid–base derangement?",
 "choices": [
  "Respiratory acidosis",
  "Respiratory alkalosis",
  "Metabolic acidosis",
  "Metabolic alkalosis"
 ],
 "answer": 0,
 "explanation": "pH 7.08 is acidemia and the PaCO₂ is markedly elevated, so the primary process is respiratory acidosis. Pinpoint pupils and a respiratory rate of 5 suggest opioid overdose, which depresses respiratory drive (\"won't breathe\"); the low minute ventilation lets CO₂ accumulate. HCO₃⁻ is essentially normal because renal compensation has not had time to occur.",
 "whyWrong": [
  "",
  "Respiratory alkalosis requires a high pH and low PaCO₂.",
  "Her HCO₃⁻ is 26 (normal); the acidemia is explained by the high PaCO₂.",
  "She is acidemic, and HCO₃⁻ is not elevated."
 ],
 "objective": "Classify acute respiratory acidosis from opioid-induced hypoventilation.",
 "source": "Pulm QOD 11/13/2026, Q5"
},
{
 "id": "qod-21",
 "set": "qod",
 "topic": "V/Q, Hypoxemia & Pulmonary Circulation",
 "subtopic": "Dead space (high V/Q)",
 "difficulty": 1,
 "stem": "A 45-year-old man develops acute shortness of breath. A CT angiogram confirms a large pulmonary embolism.\n\nWhich of the following changes would you expect?",
 "choices": [
  "Increased physiologic dead space with unchanged anatomic dead space",
  "Increased anatomic dead space with unchanged physiologic dead space",
  "Increased alveolar ventilation due to increased perfusion",
  "Decreased V/Q ratio in affected lung regions"
 ],
 "answer": 0,
 "explanation": "A pulmonary embolism leaves alveoli ventilated but not perfused. That adds alveolar dead space, which increases physiologic dead space (anatomic + alveolar). The anatomic dead space, the conducting airways, is unchanged.",
 "whyWrong": [
  "",
  "The conducting airways are unchanged by an embolus; the new wasted ventilation is alveolar, which is part of physiologic dead space.",
  "Perfusion to the affected region falls, not rises, and ventilated but unperfused alveoli do not participate in gas exchange.",
  "Loss of perfusion with preserved ventilation raises V/Q toward infinity in the affected region."
 ],
 "objective": "Distinguish physiologic from anatomic dead space in pulmonary embolism.",
 "source": "Pulm QOD 11/13/2026, Q6"
},
{
 "id": "qod-22",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Chemoreceptors",
 "difficulty": 2,
 "stem": "When a toddler throws a temper tantrum, they tend to hyperventilate before holding their breath, and they can then hold their breath for a very long time.\n\nWhich statement best explains why hyperventilating first lets the toddler hold their breath so long?",
 "choices": [
  "Hyperventilation leaves PaCO₂ low, and hypocarbia decreases the ventilatory response to a low O₂, so the urge to breathe is delayed while hypoxia develops",
  "Hyperventilation raises PaCO₂, and hypercarbia decreases the ventilatory response to a low O₂",
  "Hyperventilation stores extra O₂ on hemoglobin, so PaO₂ cannot fall during the breath hold",
  "Hypocarbia increases carotid body sensitivity to a low O₂, so the toddler is protected from hypoxia",
  "Hyperventilation lowers PaCO₂, which increases the CO₂-driven urge to breathe during the hold"
 ],
 "answer": 0,
 "explanation": "Hyperventilation blows off CO₂, so the breath hold starts from a low PaCO₂ (hypocarbia). CO₂ is the main stimulus to breathe, and it takes longer to climb back to the breakpoint. Hypocapnia also suppresses the ventilatory response to hypoxia, so the falling O₂ does not trigger breathing either: the toddler is not bothered by the hypoxia and can hold their breath for a long time.",
 "whyWrong": [
  "",
  "Hyperventilation lowers, not raises, PaCO₂.",
  "Hemoglobin is already about 97% saturated on room air, so hyperventilation adds almost no O₂ to the blood, and PaO₂ still falls steadily during the hold.",
  "Hypocapnia blunts, not enhances, the response to hypoxia; that blunting is what allows the long hold.",
  "A low PaCO₂ reduces the CO₂-driven urge to breathe; it is the starting point far below the breakpoint."
 ],
 "objective": "Explain how hypocapnia from prior hyperventilation blunts the drive to breathe during a breath hold.",
 "source": "Pulm QOD 11/18/2026, Q1 (fill-in-the-blank, converted)"
},
{
 "id": "qod-23",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Chemoreceptors",
 "difficulty": 1,
 "stem": "A 25-year-old healthy man participates in a high-altitude hiking expedition. As he ascends, his arterial PO₂ (PaO₂) decreases significantly while his PaCO₂ remains relatively constant at first. This drop in oxygen tension triggers an immediate increase in his ventilation.\n\nWhich of the following structures is the primary sensor responsible for detecting this change in blood gas composition?",
 "choices": [
  "Carotid bodies",
  "Aortic bodies",
  "Central chemoreceptors",
  "Juxtacapillary receptors"
 ],
 "answer": 0,
 "explanation": "Peripheral chemoreceptors detect low O₂. Both the carotid bodies (CN IX) and aortic bodies (CN X) are peripheral chemoreceptors, but the carotid bodies are the more sensitive O₂ sensors and drive the hypoxic ventilatory response.",
 "whyWrong": [
  "",
  "The aortic bodies are also peripheral chemoreceptors, but they are less sensitive than the carotid bodies to O₂.",
  "Central (medullary) chemoreceptors respond mainly to CO₂/pH of the CSF, not to a fall in PaO₂.",
  "J receptors sense interstitial edema and capillary distension, not arterial PO₂."
 ],
 "objective": "Identify the carotid bodies as the primary sensors of hypoxemia.",
 "source": "Pulm QOD 11/18/2026, Q2"
},
{
 "id": "qod-24",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Anaerobic threshold & CPET",
 "difficulty": 2,
 "stem": "A 19-year-old collegiate rower undergoes cardiopulmonary exercise testing. At moderate workloads, his V̇CO₂ begins to rise disproportionately compared with V̇O₂, triggering a sharp increase in V̇E.\n\nWhich mechanism best explains this rise in V̇CO₂?",
 "choices": [
  "Increased buffering of lactic acid by bicarbonate",
  "Increased CO₂ from β-oxidation of fatty acids",
  "Increased anaerobic ATP production without lactate formation",
  "Reduced O₂ extraction by skeletal muscle",
  "Increased dead space ventilation at high workloads"
 ],
 "answer": 0,
 "explanation": "At the anaerobic threshold, rising lactate is buffered by bicarbonate: lactic acid + HCO₃⁻ → lactate + H₂CO₃ → CO₂ + H₂O. This non-metabolic CO₂ adds to aerobic CO₂ production, so V̇CO₂ rises faster than V̇O₂ and stimulates ventilation.",
 "whyWrong": [
  "",
  "Fat oxidation has a low R (about 0.7) and produces less CO₂ per O₂; heavy exercise shifts toward carbohydrate, not fat.",
  "The extra CO₂ comes from buffering the lactic acid that anaerobic glycolysis produces; without lactate there would be no added CO₂.",
  "O₂ extraction rises, not falls, with exercise, and lower extraction would not add CO₂.",
  "Dead space ventilation wastes ventilation; it does not increase CO₂ production (V̇CO₂)."
 ],
 "objective": "Explain the excess CO₂ output above the anaerobic threshold.",
 "source": "Pulm QOD 11/18/2026, Q3"
},
{
 "id": "qod-25",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Exercise: delivery & extraction",
 "difficulty": 2,
 "stem": "A 24-year-old elite cyclist performs a graded exercise test. As workload increases, his V̇O₂ continues to rise linearly until a plateau is reached, even though he is still able to increase his respiratory rate and tidal volume. His arterial blood gases immediately before exhaustion show pH 7.39, PaCO₂ 34 mm Hg, PaO₂ 97 mm Hg, SaO₂ 98%.\n\nWhich physiologic parameter is the primary factor limiting his maximal oxygen consumption?",
 "choices": [
  "Cardiac output",
  "Alveolar ventilation",
  "Pulmonary diffusing capacity",
  "Hemoglobin concentration",
  "Respiratory muscle strength"
 ],
 "answer": 0,
 "explanation": "Healthy people keep a normal PaO₂ and a low-normal PaCO₂ at maximal exercise, showing a large ventilatory reserve. The V̇O₂ plateau occurs when cardiac output (HR × SV) can no longer increase, so V̇O₂max in health is limited by the cardiovascular system, not the lungs.",
 "whyWrong": [
  "",
  "His PaCO₂ is 34 and he can still raise his breathing, so alveolar ventilation is not limiting.",
  "A PaO₂ of 97 and SaO₂ of 98% at peak exercise show complete equilibration; diffusion is not limiting.",
  "His arterial saturation is normal and nothing suggests anemia; hemoglobin is not the limiting factor in this healthy athlete.",
  "He can still increase rate and tidal volume, so the respiratory muscles are not the limit."
 ],
 "objective": "Identify cardiac output as the limit to V̇O₂max in healthy people.",
 "source": "Pulm QOD 11/18/2026, Q4"
},
{
 "id": "qod-26",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Anaerobic threshold & CPET",
 "difficulty": 1,
 "stem": "Refer to the figure, an incremental cycle exercise test showing V̇O₂, V̇CO₂ and V̇E over time, with the workload below.\n\nAt point B, why is there a divergence between CO₂ production and O₂ consumption?",
 "figure": {
  "type": "cpet"
 },
 "choices": [
  "Shift towards anaerobic respiration",
  "Decreased ventilation",
  "Increased ventilation",
  "Perfusion limitation"
 ],
 "answer": 0,
 "explanation": "Point B is the anaerobic threshold. Beyond it lactate accumulates and is buffered by bicarbonate, which releases extra CO₂ on top of aerobic CO₂ production, so V̇CO₂ rises faster than V̇O₂ (the gas exchange threshold).",
 "whyWrong": [
  "",
  "Ventilation keeps rising throughout the test; a fall in ventilation would not make V̇CO₂ outpace V̇O₂.",
  "Ventilation rises in response to the extra CO₂; it follows the divergence rather than causing it (V̇E departs further from V̇CO₂ only at C).",
  "Perfusion limitation means gas uptake in the lung is limited by blood flow rather than by diffusion (normal for O₂ in a healthy lung). It describes gas transfer across the alveolar wall, not CO₂ production in muscle, so it cannot make V̇CO₂ rise faster than V̇O₂."
 ],
 "objective": "Explain the V̇CO₂–V̇O₂ divergence at the anaerobic threshold on a CPET plot.",
 "source": "Pulm QOD 11/18/2026, Q5"
},
{
 "id": "qod-27",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Chronic hypercapnia & O₂ drive",
 "difficulty": 2,
 "stem": "Consider the chemical control of breathing in health and in chronic obstructive lung disease.\n\nWhich set of statements is correct?",
 "choices": [
  "Central chemoreceptors are in the brainstem and are most sensitive to CO₂; in COPD, baseline hypercarbia decreases CO₂ sensitivity, O₂ becomes the primary driver, and heavy O₂ supplementation decreases the drive to breathe",
  "Central chemoreceptors are in the carotid sinus and aortic arch and are most sensitive to O₂; in COPD, CO₂ remains the primary driver, so O₂ supplementation does not change the drive to breathe",
  "Central chemoreceptors are in the brainstem and are most sensitive to O₂; in COPD, chronic hypoxia blunts O₂ sensing, so heavy O₂ supplementation increases the drive to breathe",
  "Peripheral chemoreceptors are in the brainstem and are most sensitive to CO₂; in COPD, baseline hypercarbia increases CO₂ sensitivity, so O₂ supplementation decreases the drive to breathe",
  "Central chemoreceptors are in the brainstem and are most sensitive to CO₂; in COPD, baseline hypercarbia increases CO₂ sensitivity, so heavy O₂ supplementation increases the drive to breathe"
 ],
 "answer": 0,
 "explanation": "Central chemoreceptors lie in the brainstem (medulla) and respond mainly to CO₂/pH; peripheral chemoreceptors lie in the carotid sinus region (carotid bodies) and aortic arch and respond mainly to low O₂. In COPD with chronic CO₂ retention, the central response to CO₂ is blunted, so low O₂ sensed peripherally becomes the main driver. Giving heavy O₂ supplementation removes that hypoxic stimulus and decreases the drive to breathe.",
 "whyWrong": [
  "",
  "The carotid sinus/aortic arch hold the peripheral chemoreceptors; central chemoreceptors are in the brainstem. In COPD the CO₂ response is blunted, so O₂ becomes the driver.",
  "Central chemoreceptors are most sensitive to CO₂, not O₂, and removing hypoxia with O₂ decreases rather than increases the drive in a CO₂ retainer.",
  "Peripheral chemoreceptors are in the carotid and aortic bodies, not the brainstem, and chronic hypercarbia decreases CO₂ sensitivity.",
  "Chronic hypercarbia decreases CO₂ sensitivity, and heavy O₂ removes the hypoxic drive, decreasing ventilation."
 ],
 "objective": "Describe central vs peripheral chemoreceptors and the shift to O₂ drive in chronic hypercapnia.",
 "source": "Pulm QOD 11/18/2026, Q6 (fill-in-the-blank, converted)"
},
{
 "id": "qod-28",
 "set": "qod",
 "topic": "Control of Ventilation & Exercise",
 "subtopic": "Lung & airway receptors",
 "difficulty": 1,
 "stem": "During an experiment on the cough reflex in humans, a volunteer inhales air containing different amounts of particles that will impact and adhere to mucus primarily in the trachea.\n\nBlockade of which of the following receptors would most likely prevent this volunteer's reflex to initiate a cough?",
 "choices": [
  "Chemoreceptors",
  "Irritant receptors",
  "J receptors",
  "Proprioceptors",
  "Stretch receptors"
 ],
 "answer": 1,
 "explanation": "Particles adhering to tracheal mucus activate rapidly adapting airway irritant receptors, whose vagal afferents initiate cough. Blocking irritant receptors would therefore prevent the reflex. (Originally from NBME Physiology Sample Questions #9.)",
 "whyWrong": [
  "Chemoreceptors sense blood O₂, CO₂ and pH and adjust ventilation; they do not trigger cough from inhaled particles.",
  "",
  "J receptors in the alveolar walls respond to interstitial edema and capillary distension, not tracheal particles.",
  "Proprioceptors in muscles and joints report movement; they do not sense airway irritants.",
  "Slowly adapting stretch receptors report lung inflation (Hering–Breuer reflex), not particles in the trachea."
 ],
 "objective": "Identify irritant receptors as the afferent limb of the cough reflex.",
 "source": "Pulm QOD 11/18/2026, Q7"
},
{
 "id": "qod-29",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Obstruction vs restriction",
 "difficulty": 1,
 "stem": "A 39-year-old man comes to the physician because of a 6-month history of progressive shortness of breath. He has had a cough productive of white sputum for 2 years. He smoked 1 pack of cigarettes daily for 16 years but quit 10 years ago. He is in mild respiratory distress with pursed lips and a barrel chest; he is using the accessory muscles of respiration. Breath sounds are distant and crackles are present in the lower lung fields bilaterally. Pulmonary function tests show a decreased FEV₁:FVC ratio, increased residual volume, and decreased diffusion capacity. An x-ray of the chest shows hyperinflation and hypertranslucency of the lower lobes of both lungs.\n\nWhich of the following is the most likely diagnosis?",
 "choices": [
  "Asthma",
  "Bronchiectasis",
  "Chronic pulmonary fibrosis",
  "Cystic fibrosis",
  "Emphysema"
 ],
 "answer": 4,
 "explanation": "Emphysema is the COPD component marked by destruction of alveolar walls and elastin (protease/antiprotease imbalance). Loss of recoil and tethering causes expiratory airway collapse, air trapping and hyperinflation (barrel chest, increased RV), and loss of alveolar–capillary surface lowers DLCO. Pursed-lip breathing adds back-pressure that keeps airways open during expiration. Lower-lobe predominance at a young age raises concern for α₁-antitrypsin deficiency. (Sourced from NBME Free 120 (2024).)",
 "whyWrong": [
  "Asthma is obstructive but typically has a normal DLCO and reversible obstruction, without destruction of the alveolar surface.",
  "Bronchiectasis causes chronic copious purulent sputum from dilated airways; it does not explain the low DLCO with hypertranslucent, hyperinflated lungs.",
  "Fibrosis is restrictive: small lungs with a normal or high FEV₁/FVC, not hyperinflation with a low ratio.",
  "Cystic fibrosis presents in childhood with recurrent infections and bronchiectasis, usually upper-lobe predominant.",
  ""
 ],
 "objective": "Recognize emphysema from obstruction, hyperinflation and a low DLCO.",
 "source": "Pulm QOD 11/19/2026, Q1"
},
{
 "id": "qod-30",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Neuromuscular & extrathoracic restriction",
 "difficulty": 1,
 "stem": "A 48-year-old woman with hypertension and type 2 diabetes presents with progressive shortness of breath over the last several months. Her body mass index is 45 kg/m². Pulmonary function testing shows a total lung capacity (TLC) of 68% of predicted and a forced vital capacity (FVC) of 75% of predicted. Her diffusing capacity for carbon monoxide (DLCO) is 94% of predicted (normal).\n\nWhich of the following is the most likely etiology of her respiratory limitation?",
 "choices": [
  "Chest wall restriction due to obesity",
  "Interstitial lung disease",
  "Emphysema",
  "Asthma"
 ],
 "answer": 0,
 "explanation": "A TLC below 80% predicted defines restriction. DLCO then separates the causes: a low DLCO suggests intrinsic lung disease (fibrosis, ILD), whereas a normal DLCO suggests an extrathoracic cause in which healthy lung is \"squeezed\" or limited from outside, as by obesity.",
 "whyWrong": [
  "",
  "ILD is restrictive, but damage to the alveolar–capillary interface lowers DLCO; hers is normal.",
  "Emphysema is obstructive with a high TLC and low DLCO.",
  "Asthma is obstructive with a normal or high TLC; it does not cause a TLC of 68%."
 ],
 "objective": "Use DLCO to separate extrathoracic from parenchymal restriction.",
 "source": "Pulm QOD 11/19/2026, Q2"
},
{
 "id": "qod-31",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "DLCO patterns",
 "difficulty": 1,
 "stem": "A 74-year-old man with a history of smoking presents with chronic dyspnea. Spirometry shows an FEV₁/FVC ratio of 0.55. Administration of a bronchodilator results in no significant change in FEV₁. Subsequent testing reveals a markedly decreased DLCO.\n\nWhich diagnosis is most consistent with these findings?",
 "choices": [
  "Emphysema",
  "Chronic bronchitis",
  "Asthma",
  "Myasthenia gravis"
 ],
 "answer": 0,
 "explanation": "FEV₁/FVC below 0.70 is an obstructive defect. Obstructive diseases are distinguished by reversibility and DLCO: asthma typically shows bronchodilator reversibility and a normal DLCO, whereas emphysema shows fixed obstruction and a low DLCO from destruction of the alveolar–capillary surface.",
 "whyWrong": [
  "",
  "Chronic bronchitis causes airway obstruction from mucus and inflammation, but the alveolar surface is largely preserved, so DLCO is usually near normal.",
  "Asthma usually reverses with a bronchodilator and has a normal (or high) DLCO.",
  "Myasthenia gravis causes neuromuscular weakness, a restrictive pattern with a normal FEV₁/FVC and normal DLCO."
 ],
 "objective": "Distinguish emphysema from other obstructive diseases by reversibility and DLCO.",
 "source": "Pulm QOD 11/19/2026, Q3"
},
{
 "id": "qod-32",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Flow–volume loops",
 "difficulty": 2,
 "stem": "Refer to the figure, which shows six flow–volume loops (A–F), each drawn against a normal reference loop (dashed). The patients have mild–moderate obstruction, severe obstruction, variable extrathoracic obstruction, fixed large/central airway obstruction, unilateral mainstem bronchus obstruction, and restriction.\n\nWhich loop shows variable extrathoracic obstruction?",
 "figure": {
  "type": "fvgrid",
  "loops": [
   "obstructive",
   "severe",
   "varextra",
   "fixed",
   "mainstem",
   "restrictive"
  ]
 },
 "fixedOrder": true,
 "choices": [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
 ],
 "answer": 2,
 "explanation": "A variable extrathoracic lesion (e.g., vocal cord paralysis, tracheomalacia above the thoracic inlet) is sucked closed during forced inspiration, when intraluminal pressure falls below atmospheric, and pushed open during forced expiration. Only the inspiratory limb is flattened, as in loop C; the expiratory limb is near normal.",
 "whyWrong": [
  "A has a scooped expiratory limb with reduced peak flow and a normal-shaped inspiratory limb: mild–moderate obstruction.",
  "B is a small, severely scooped expiratory limb shifted to high volumes: severe obstruction.",
  "",
  "D has both limbs flattened: a fixed large/central airway obstruction.",
  "E has a biphasic expiratory limb with a late low-flow tail and a biphasic inspiratory limb: unilateral mainstem bronchus obstruction.",
  "F is narrow and shifted to low volumes with a steep expiratory limb: restriction."
 ],
 "objective": "Recognize variable extrathoracic obstruction on a flow–volume loop.",
 "source": "Pulm QOD 11/19/2026, Q4 (matching, part 1)"
},
{
 "id": "qod-33",
 "set": "qod",
 "topic": "PFT Interpretation & Respiratory Consult",
 "subtopic": "Flow–volume loops",
 "difficulty": 3,
 "stem": "Refer to the same six flow–volume loops (A–F), each drawn against a normal reference loop (dashed).\n\nWhich option correctly matches loops D, E and F?",
 "figure": {
  "type": "fvgrid",
  "loops": [
   "obstructive",
   "severe",
   "varextra",
   "fixed",
   "mainstem",
   "restrictive"
  ]
 },
 "choices": [
  "D = fixed large/central airway obstruction, E = unilateral mainstem bronchus obstruction, F = restriction",
  "D = variable extrathoracic obstruction, E = severe obstruction, F = restriction",
  "D = fixed large/central airway obstruction, E = restriction, F = unilateral mainstem bronchus obstruction",
  "D = restriction, E = unilateral mainstem bronchus obstruction, F = mild–moderate obstruction",
  "D = variable intrathoracic obstruction, E = fixed large/central airway obstruction, F = severe obstruction"
 ],
 "answer": 0,
 "explanation": "Loop D is flattened on both limbs, the box shape of a fixed central narrowing (e.g., tracheal stenosis) that caps flow in both directions. Loop E is biphasic: the normal lung empties and fills first, then the obstructed lung contributes a slow late tail on expiration and a slow late phase on inspiration, typical of a unilateral main-bronchus obstruction. Loop F is small and narrow, shifted toward low volumes with a steep expiratory limb: restriction.",
 "whyWrong": [
  "",
  "D has both limbs flattened (not just inspiration), so it is fixed rather than variable extrathoracic; E keeps a near-normal early peak, unlike severe obstruction.",
  "E's biphasic limbs mark a unilateral bronchial obstruction, and F's small, narrow loop is restriction; these two are swapped.",
  "D's flat plateaus on both limbs are a fixed obstruction, not restriction, and F has no scooping.",
  "D has both limbs flattened (fixed, not variable intrathoracic), E is biphasic rather than boxed, and F is narrow and steep rather than scooped."
 ],
 "objective": "Match fixed central, unilateral mainstem and restrictive patterns on flow–volume loops.",
 "source": "Pulm QOD 11/19/2026, Q4 (matching, part 2)"
}
]);
