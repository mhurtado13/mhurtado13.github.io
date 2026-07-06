export const profile = {
  name: "Marcelo Hurtado",
  title: "PhD Student in Computational Biology and Bioinformatics",
  institution: "Cancer Research Center of Toulouse (CRCT)",
  tagline:
    "Advancing cancer systems biology through multiscale modeling and transcriptomics approaches to decode the tumor microenvironment.",
  cvUrl: "/CV_Marcelo_Hurtado.pdf",
  social: {
    github: "https://github.com/mhurtado13",
    linkedin: "https://www.linkedin.com/in/marcelo-hurtado/",
    orcid: "https://orcid.org/0009-0004-6712-0864",
    researchgate: "https://www.researchgate.net/profile/Marcelo-Hurtado-2",
  },
  email: {
    professional: "marcelo.hurtado@inserm.fr",
    personal: "marcelo.hurt137@gmail.com",
  },
};

export const researchFocus = [
  {
    title: "Immunology",
    description:
      "Immunotherapy response, survival analysis and cell type deconvolution.",
  },
  {
    title: "Genomics",
    description:
      "RNA-seq analysis including bulk and single-cell data, gene regulatory networks and inference of transcription factor activity.",
  },
  {
    title: "Machine Learning",
    description:
      "Supervised learning for classification and survival tasks, dimensionality reduction and predictive modeling.",
  },
  {
    title: "Systems Biology",
    description:
      "Network analysis, pathway modeling and multiscale simulations.",
  },
];

export const about = {
  paragraphs: [
    "I'm a PhD student in Computational Biology at Paul Sabatier University, working at the Cancer Research Center of Toulouse (CRCT) in Vera Pancaldi's lab. My research capitalizes on recent advances in modeling intercellular and intracellular processes in complex tumor environments, where effective control is key to improved cancer therapy effectiveness.",
    "Trained in Bioengineering at Universidad de Ingeniería y Tecnología UTEC (Lima, Peru) with a focus on Bioinformatics and Synthetic Biology, I now develop models for cancer and its interactions with the immune system using multi-omics data. My project aims to design effective control mechanisms for tumor environments, leveraging deep reinforcement learning and novel models of cellular interactions.",
  ],
};

export const consulting = {
  intro:
    "I offer consulting services for academic and industry teams working with omics and computational biology data.",
  topics: [
    "RNA-seq analysis",
    "Machine learning",
    "Transcriptomics analysis",
    "Multiscale modeling",
  ],
};

export const experience = [
  {
    role: "Visiting PhD Student",
    org: "Eindhoven University of Technology (TU/e), Eindhoven, Netherlands",
    detail: "Department of Biomedical Engineering — Supervisor: Dr. Federica Eduati",
    period: "Mar 2026 – Jun 2026",
    project: "Personalisation of mechanistic Boolean models through integration of transcriptomics data.",
    achievements: [
      "Improve and develop an R package for cell-cell communication from bulk RNA-seq data based on kernel and Monte-Carlo algorithms (RaCiNG).",
    ],
  },
  {
    role: "PhD Student",
    org: "Paul Sabatier University, Toulouse, France",
    detail: "Cancer Research Center of Toulouse (CRCT) — Team NetB(IO)² — Supervisor: Vera Pancaldi",
    period: "Oct 2023 – Present",
    project: "Reinforcement learning approaches to control the tumor microenvironment",
    achievements: [
      "Develop a multiscale agent-based model (ABM) of NLC-CLL differentiation using the PhysiCell software (GitHub repository).",
      "Develop a Python and Bash pipeline for PhysiCell model exploration (parameter exploration, sensitivity analysis and genetic algorithms) for HPC architectures (GitHub repository).",
      "Apply basic reinforcement learning algorithms to the NLC-CLL model to evaluate cancer cell concentration.",
      "Develop an advanced machine learning framework in R to extract clinically relevant features from bulk RNA-seq data (pipeML).",
    ],
  },
  {
    role: "Bioinformatics Engineer",
    org: "Cancer Research Center of Toulouse (CRCT)",
    detail: "Team NetB(IO)² — PI: Vera Pancaldi",
    period: "Apr 2023 – Oct 2023",
    project: "Analysis of transcriptomics data to evaluate patient profiles of early and late stage NSCLC patients.",
    achievements: [
      "Develop a novel framework for characterizing TME patient profiles by constructing transcriptional regulatory networks (TRNs) based on inferred transcription factor (TF) activity and cell type deconvolution from bulk RNA-seq data (CellTFusion).",
    ],
  },
  {
    role: "Intern in Bioinformatics",
    org: "Cancer Research Center of Toulouse (CRCT)",
    detail: "Team NetB(IO)² — PI: Vera Pancaldi",
    period: "Jan 2022 – Aug 2022",
    project: "Analysis of tumor cell composition in NSCLC patients using computational tools based on transcriptomics data.",
    achievements: [
      "Develop an algorithm that integrates a combination of multiple first- or second-generation deconvolution methods and several cell type signatures to ensure robust and accurate profiling of cell composition from bulk RNA-seq data (multideconv).",
    ],
  },
  {
    role: "Research Assistant",
    org: "Universidad de Ingeniería y Tecnología UTEC, Lima, Peru",
    detail: "Bioengineering Department — Supervisor: Dr. Alberto Donayre",
    period: "Jan 2021 – Aug 2021",
    project: "Design of a bioactive polymer based on self-assembling and antimicrobial peptides for wound applications.",
    achievements: [
      "Propose a genetic cassette for the production of self-assembling peptides with antimicrobial properties via genetic engineering techniques and cloning methods (Gibson assembly, restriction enzymes, golden gate).",
    ],
  },
];

export const skills = [
  {
    category: "Transcriptomics",
    items: [
      "Bulk RNA-Seq",
      "Single-cell RNA-Seq",
      "Cell type deconvolution",
      "Transcription factor activity",
      "Network analysis",
    ],
  },
  {
    category: "Multiscale Modeling",
    items: [
      "Agent-based modeling",
      "PhysiCell software",
      "HPC architecture",
      "Model exploration",
      "Sensitivity analysis",
      "Genetic algorithms",
    ],
  },
  {
    category: "Synthetic Biology",
    items: [
      "CRISPR-Cas9 gRNA design",
      "Vector cloning",
      "Plasmid design",
      "Primer design",
    ],
  },
  {
    category: "Programming & Tools",
    items: ["Python", "R", "C++", "Bash", "Git", "VS Code", "MATLAB", "CSS3", "SQL"],
  },
  {
    category: "Bioinformatics & Data Science",
    items: ["Seurat", "Bioconductor", "Machine Learning", "dplyr", "tidymodels"],
  },
  {
    category: "Laboratory & Design",
    items: ["Benchling", "SnapGene", "Biomedical signals", "Bioprocesses"],
  },
];

export const publications = [
  {
    title:
      "CellTFusion: A transcriptional regulatory network framework for the identification of functional multicellular states from bulk RNA-seq data",
    authors: "Hurtado, M.*, Pancaldi, V.",
    venue: "bioRxiv (Preprint)",
    year: "2026",
    description:
      "A transcriptional regulatory network framework integrating cell type deconvolution and transcription factor activity to identify functional multicellular states from bulk RNA-seq data.",
    tags: ["Transcriptomics", "Networks", "Transcription Factor", "Computational Biology"],
    link: "https://doi.org/10.64898/2026.06.30.735682",
  },
  {
    title:
      "Specific dendritic cells spatial organization is associated to ICB Response in Non–Small-Cell Lung Cancer",
    authors: "Gobbini, E.*, Duplouye, P.*, Hurtado, M.*, et al.",
    venue: "Preprint",
    year: "2026",
    description:
      "Spatial analysis identifying dendritic cell organization patterns in the tumor microenvironment associated with response to immune checkpoint blockade in NSCLC.",
    tags: ["Spatial Biology", "Immunotherapy", "NSCLC", "Immunology"],
    link: "https://doi.org/10.64898/2026.05.04.720587",
  },
  {
    title:
      "A new pipeline for cross-validation fold-aware machine learning prediction of clinical outcomes addresses hidden data-leakage in omics based predictors",
    authors: "Hurtado M.*, Pancaldi V.",
    venue: "bioRxiv (Preprint)",
    year: "2026",
    description:
      "A machine learning pipeline that prevents fold-aware data leakage in omics-based clinical outcome prediction, improving the reliability of survival and classification models.",
    tags: ["Machine Learning", "Omics", "Cross-Validation", "Computational Biology"],
    link: "https://doi.org/10.64898/2026.03.12.711429",
  },
  {
    title:
      "Data driven network inference and longitudinal transcriptomics unveil dynamic regulation in Chronic Lymphocytic Leukaemia models",
    authors: "Marku M.*, Chenel H.*, ..., Hurtado M., et al.",
    venue: "npj Systems Biology and Applications",
    year: "2026",
    description:
      "In-depth analysis revealing dynamic regulatory changes within cancer cells in response to immune cell interactions, uncovering key regulators in Chronic Lymphocytic Leukaemia.",
    tags: ["RNA-seq", "Network Inference", "Cancer", "Immunology"],
    link: "https://doi.org/10.1038/s41540-025-00645-4",
  },
  {
    title:
      "multideconv - Integrative pipeline for cell type deconvolution from bulk RNAseq using first and second generation methods",
    authors: "Marcelo Hurtado, Abdelmounim Essabbar, Leila Khajavi, Vera Pancaldi",
    venue: "bioRxiv (Preprint)",
    year: "2025",
    description:
      "A novel computational pipeline addressing the high feature complexity and variability in cell type deconvolution methods, improving patient stratification from bulk RNA-seq data.",
    tags: ["RNA-seq", "Deconvolution", "Computational Biology", "Machine Learning"],
    link: "https://doi.org/10.1101/2025.04.29.651220",
  },
  {
    title:
      "PhysiGym: bridging the gap between the Gymnasium reinforcement learning application interface and the PhysiCell agent-based model software",
    authors: "Bertin A.*, Bucher E.*, ..., Hurtado M., et al.",
    venue: "bioRxiv (Preprint)",
    year: "2025",
    description:
      "A novel framework bridging reinforcement learning interfaces with agent-based modeling for computational biology applications.",
    tags: ["Reinforcement Learning", "Agent-Based Modeling", "Computational Biology"],
    link: "https://doi.org/10.1101/2025.09.18.677030",
  },
  {
    title:
      "Transcriptomics profiling of the non-small cell lung cancer microenvironment across disease stages reveals dual immune cell-type behaviors",
    authors: "Marcelo Hurtado, Leila Khajavi, Abdelmounim Essabbar, et al., Vera Pancaldi",
    venue: "Frontiers in Immunology",
    year: "2024",
    description:
      "Computational immunology approach revealing dual immune cell behaviors in non-small cell lung cancer across disease stages, providing insights for improved patient outcomes.",
    tags: ["Cancer", "Immunology", "Transcriptomics", "Systems Biology"],
    link: "https://doi.org/10.3389/fimmu.2024.1394965",
  },
];

export const projects = [
  {
    name: "LungPredict",
    description:
      "Profiling the Non-Small Cell Lung Cancer (NSCLC) microenvironment by integrating transcriptomics to uncover potential phenotypic profiles associated with patterns in immune infiltration.",
    tags: ["Non-small cell lung cancer", "Immunotherapy", "Survival analysis"],
    github: "https://github.com/VeraPancaldiLab/LungPredict1_paper",
  },
  {
    name: "LungPredict DC",
    description:
      "Spatial analysis of dendritic cell organization in the NSCLC tumor microenvironment and its association with response to immune checkpoint blockade.",
    tags: ["Spatial Biology", "Dendritic Cells", "Immunotherapy", "NSCLC"],
    github: "https://github.com/VeraPancaldiLab/LungPredict_DC_paper",
  },
  {
    name: "ABM NLC-CLL",
    description: "PhysiCell model of NLC-CLL differentiation.",
    tags: ["PhysiCell", "Agent-based models", "Modeling", "Chronic Lymphocytic Leukemia"],
    github: "https://github.com/mhurtado13/ABM_NLC-CLL",
  },
  {
    name: "NLC_CLL_HPC_exploration",
    description: "HPC exploration of parameters for the NLC-CLL PhysiCell model.",
    tags: ["HPC architecture", "Bash", "Python", "Calibration", "Sensitivity analysis", "Genetic algorithms"],
    github: "https://github.com/mhurtado13/NLC-CLL_HPC_exploration",
  },
];

export const software = [
  {
    name: "multideconv",
    version: "v0.0.1",
    description:
      "Integrative pipeline for cell type deconvolution from bulk RNAseq using first and second generation methods.",
    tags: ["R", "RStudio", "Cell type deconvolution"],
    github: "https://github.com/VeraPancaldiLab/multideconv/",
    docs: "https://verapancaldilab.github.io/multideconv/",
    logo: "/logos/multideconv.png",
  },
  {
    name: "pipeML",
    version: "v0.0.1",
    description: "A robust R machine learning pipeline for classification tasks and survival analysis.",
    tags: ["R", "tidymodels", "caret", "Machine Learning"],
    github: "https://github.com/VeraPancaldiLab/pipeML",
    docs: "https://verapancaldilab.github.io/pipeML/",
    logo: "/logos/pipeML.png",
  },
  {
    name: "CellTFusion",
    version: "v0.0.1",
    description:
      "Integration of immune-cell type deconvolution features and prior-knowledge networks of TF–gene interactions to characterize potential cell states of the tumor microenvironment using bulk RNAseq data.",
    tags: ["R", "decoupleR", "Transcription factor", "Networks"],
    github: "https://github.com/VeraPancaldiLab/CellTFusion",
    docs: "https://verapancaldilab.github.io/CellTFusion/",
    logo: "/logos/CellTFusion.png",
  },
  {
    name: "multimethconv",
    version: "v0.0.1",
    description: "Integrative pipeline for cell type deconvolution from methylation data.",
    tags: ["R", "DNA Methylation", "Cell type deconvolution"],
    github: "https://github.com/VeraPancaldiLab/multimethconv",
    docs: "https://verapancaldilab.github.io/multimethconv/",
    logo: "/logos/multimethconv.png",
  },
];

export const awards = [
  { title: "ERASMUS+ Fellowship – PhD mobility", category: "PhD Mobility Fellowship", year: "2026" },
  { title: "CARe International – PhD mobility", category: "PhD Mobility Fellowship", year: "2026" },
  { title: "ISMB/ECCB 2025 – Full conference fellowship, Liverpool, UK", category: "Conference Fellowship", year: "2025" },
  { title: "Prix de la Fondation Silab Jean Paufique", category: "Research Excellence", year: "2024" },
  { title: "Best oral presentation award", category: "Conference Recognition", year: "2024" },
  { title: "Campus France – France Excellence Eiffel PhD scholarship", category: "PhD Fellowship", year: "2023" },
  { title: "Toulouse Foundation Cancer Santé – PhD scholarship", category: "PhD Fellowship", year: "2023" },
  { title: "CARe Graduate School Univ. Paul Sabatier – Doctoral School Fellowship", category: "PhD Fellowship", year: "2023" },
  { title: "CARe Graduate School Univ. Paul Sabatier – M2 internship fellowship", category: "Master Fellowship", year: "2022" },
  { title: "Research for Peruvian Undergraduates (REPU) program – International stage fellowship", category: "International Fellowship", year: "2021" },
  { title: "iGEM Design League – Gold medal", category: "Competition", year: "2021" },
  { title: "iGEM Design League – Best Human Practices", category: "Competition", year: "2021" },
  { title: "iGEM Design League – Best aligned with Sustainable Development Goals (SDG)", category: "Competition", year: "2021" },
];

export const talksOral = [
  {
    title:
      "Estimating tumour microenvironment cellular states from bulk RNA-seq reveals biomarkers of clinical outcome in Non Small Cell Lung Cancer (NSCLC) across disease stages",
    venue: "EACR – Cancer Genomics, Multiomics and Computational Biology",
    type: "Oral presentation",
    location: "Essen, Germany",
    date: "12–14 May 2026",
  },
  {
    title:
      "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
    venue: "Bioinformatics and Computational Biology Conference",
    type: "Oral presentation",
    location: "Napoli, Italy",
    date: "December 2025",
  },
  {
    title:
      "Estimating tumour microenvironment cellular states from bulk RNAseq produces biomarkers of clinical outcome across stages",
    venue: "21èmes Journées annuelles du Cancéropôle GSO",
    type: "Oral presentation",
    location: "Agen, France",
    date: "November 2025",
  },
  {
    title:
      "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
    venue: "European Conference on Computational Biology – ISMB/ECCB 2025",
    type: "Oral presentation",
    location: "Liverpool, UK",
    date: "July 2025",
  },
  {
    title:
      "CellTFusion: Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "Journée Bioinfo/Biostat GenoToul",
    type: "Oral presentation",
    location: "Toulouse, France",
    date: "November 2024",
  },
  {
    title:
      "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "EMBO Workshop | Computational models of life: From molecular biology to digital twins",
    type: "Flash presentation",
    location: "Sant Feliu de Guíxols, Spain",
    date: "December 2023",
  },
  {
    title:
      "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "19th Annual Meeting of the Cancéropôle GSO",
    type: "Oral presentation",
    location: "Arcachon, France",
    date: "November 2023",
  },
  {
    title:
      "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "Institut Curie | Computational Systems Biology of Cancer, 6th edition",
    type: "Oral presentation",
    location: "Paris, France",
    date: "September 2023",
  },
];

export const talksPoster = [
  {
    title:
      "Estimating NSCLC tumour microenvironment cellular states from bulk RNAseq produces biomarkers of clinical outcome across stages",
    venue: "World Conference on Lung Cancer (WCLC) 2025",
    location: "Barcelona, Spain",
    year: "2025",
  },
  {
    title:
      "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies cell niches potentially predictive of cancer progression",
    venue: "JOBIM 2025",
    location: "Bordeaux, France",
    year: "2025",
  },
  {
    title:
      "CellTFusion: Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "Toulouse Oncoweek 2025",
    location: "Toulouse, France",
    year: "2025",
  },
  {
    title:
      "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "1st edition Young Scientist Cancer Congress",
    location: "Toulouse, France",
    year: "2024",
  },
  {
    title:
      "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
    venue: "Computational models of life: From molecular biology to digital twins – EMBO Workshop",
    location: "Sant Feliu de Guíxols, Spain",
    year: "2023",
  },
  {
    title: "Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages",
    venue: "EACR Defence is the Best Attack: Immuno-Oncology Breakthroughs 2023",
    location: "Barcelona, Spain",
    year: "2023",
  },
  {
    title: "Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages",
    venue: "The Festival of Genomics & Biodata 2023",
    location: "London, UK",
    year: "2023",
  },
  {
    title: "Multi-omics Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages and Gender",
    venue: "Cancéropôle Grand Sud-Ouest 18th Annual Meeting",
    location: "Montpellier, France",
    year: "2022",
  },
  {
    title: "Computational analysis and multi-omics in oncology",
    venue: "CARe Graduate School",
    location: "Toulouse, France",
    year: "2022",
  },
  {
    title: "Axis 2 workshop 'Genome Dynamics and Cancer'",
    venue: "Cancéropôle Grand Sud-Ouest",
    location: "Toulouse, France",
    year: "2022",
  },
];

export const media = [
  {
    title: "LECCHAIN: Improving vaccine thermal tolerance",
    outlet: "Centro Bio",
    description:
      "Coverage of the iGEM Design League 2021 project focusing on improving SARS-CoV-2 vaccine stability using plant lectins.",
    type: "Press Release",
    year: "2021",
    link: "https://www.centrobio.pe/2021/10/22/lecchain-mejorando-la-tolerancia-termica-de-las-vacunas/",
  },
  {
    title: "UTEC team develops technology for vaccine conservation",
    outlet: "Peru21",
    description:
      "Feature on the innovative approach to vaccine thermal stability developed by the iGEM team.",
    type: "Press Release",
    year: "2021",
    link: "https://peru21.pe/vida/equipo-de-la-utec-desarrollo-tecnologia-para-conservacion-de-vacunas-noticia/",
  },
  {
    title: "Peruvian students develop system to preserve COVID-19 vaccines",
    outlet: "El Comercio",
    description:
      "Press coverage highlighting the development of LECCHAIN technology for vaccine preservation.",
    type: "Press Coverage",
    year: "2021",
    link: "https://elcomercio.pe/tecnologia/ciencias/estudiantes-peruanos-desarrollan-sistema-para-preservar-vacunas-contra-la-covid-19-noticia/",
  },
  {
    title: "LECCHAIN Project Video Presentation",
    outlet: "YouTube",
    description:
      "Video presentation of the LECCHAIN project showcasing the innovative approach to improving vaccine thermal tolerance using synthetic biology.",
    type: "Video",
    year: "2021",
    link: "https://www.youtube.com/watch?v=Br8n5n1vN8M",
  },
];
