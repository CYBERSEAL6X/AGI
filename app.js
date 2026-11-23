/**
 * CYBERSEAL6X // INSTITUTIONAL MONOGRAPH & ARCHITECTURE ENGINE
 * Palantir & Anduril Caliber Client Micro-Interactions
 */

// 1. SOVEREIGN RISK MATRIX DATA
const sovereignRiskData = {
  "RISK-01": {
    code: "THREAT VECTOR // 01",
    name: "Adversarial Perturbation in Industrial SCADA & Computer Vision",
    sector: "Electric Smart Grids, Water Treatment & High-Pressure Pipeline Infrastructure",
    impact: "$450M+ in physical turbine and transformer burnout; multi-state cascading blackouts caused by misclassification of telemetry anomalies.",
    mechanics: "Imperceptible mathematical gradients (L-infinity bounded noise) injected into edge sensory feeds force neural anomaly detectors to classify critical pressure surges as nominal operating states.",
    countermeasure: "Formal Adversarial Verification & Randomized Noise Smoothing (Book Chapters 2 & 6, pp. 42-68, 172-198). Hardware-enforced kinematic interlocks that bypass neural decision layers entirely.",
    citation: "CyberSeal6X Research Monograph 06-X, Section 2.4"
  },
  "RISK-02": {
    code: "THREAT VECTOR // 02",
    name: "Autonomous Agent Tool-Use Hijacking & Indirect Semantic Injection",
    sector: "Defense Logistics, Corporate IT/OT Gateways, Autonomous Train & Aviation Dispatch",
    impact: "Unsanctioned remote command execution across air-gapped bridges; automated database exfiltration; weaponization of robotic dispatch.",
    mechanics: "Indirect prompt injections embedded inside untrusted telemetry, supplier manifests, or diagnostic logs break system prompt boundaries, hijacking LLM agentic tool-use to invoke arbitrary shell commands.",
    countermeasure: "Dual-LLM Isolated Execution Sandboxing & Cryptographic Nonce Enforced Tool Whitelisting (Book Chapter 2 & 6, pp. 69-98, 199-214). Zero-trust tool execution boundaries.",
    citation: "CyberSeal6X Research Monograph 06-X, Section 2.8"
  },
  "RISK-03": {
    code: "THREAT VECTOR // 03",
    name: "Training Pipeline Data Poisoning & Latent Model Trojans",
    sector: "Autonomous Defense Systems, IoMT Medical Diagnostic Networks & Border Surveillance",
    impact: "Pre-programmed failure during national geopolitical crisis; silent misdiagnosis across regional hospital networks.",
    mechanics: "Adversary implants low-frequency triggers into foundational pre-training datasets. The model achieves 99.4% benchmark accuracy during validation but misclassifies threat targets upon presentation of the adversary trigger signal.",
    countermeasure: "Clean-Lab Dataset Provenance, Gradient-Shapley Poison Attribution & Cryptographic Weight Attestation (Book Chapters 6 & 8, pp. 160-185, 238-254).",
    citation: "CyberSeal6X Research Monograph 06-X, Section 8.2"
  },
  "RISK-04": {
    code: "THREAT VECTOR // 04",
    name: "Autonomous Kinetic Feedback Resonance & Grid Collapse",
    sector: "National Power Transmission Networks, High-Speed Rail & Municipal Pumping Stations",
    impact: "High-voltage substation destruction, synchronous grid tripping, and prolonged physical grid outage requiring weeks of black-start procedures.",
    mechanics: "Coordinated algorithmic micro-fluctuations in localized EV charging and distributed energy resource (DER) algorithms exploit automated frequency balancing loops, inducing physical phase resonance.",
    countermeasure: "Hardware-Enforced Physics Failsafes & Isolated Microgrid Islanding Directives (Book Chapters 3 & 7, pp. 102-134, 215-237). Continuous national grid red-teaming exercises.",
    citation: "CyberSeal6X Research Monograph 06-X, Section 3.3"
  },
  "RISK-05": {
    code: "THREAT VECTOR // 05",
    name: "Model Supply Chain & Serialized Tensor Remote Execution",
    sector: "Enterprise AI Platforms, Defense Contractors & Cloud AI Enclaves",
    impact: "Total infrastructure cluster takeover, persistent hardware rootkits, and exfiltration of sovereign model weights and weights telemetry.",
    mechanics: "Malicious payloads concealed within Python pickle deserialization routines in Hugging Face / third-party checkpoints execute rootkits upon model instantiation in production inference servers.",
    countermeasure: "Safetensors Mandatory Standards, Cryptographic SBOM (Software Bill of Materials) & Confidential Hardware Enclave Remote Attestation (Book Chapters 6 & 8, pp. 186-204, 255-272).",
    citation: "CyberSeal6X Research Monograph 06-X, Section 6.4"
  },
  "RISK-06": {
    code: "THREAT VECTOR // 06",
    name: "Harvest-Now-Decrypt-Later & Quantum Cryptanalysis",
    sector: "Classified Satellite Telemetry, Sovereign AI Model Repositories & National Communications",
    impact: "Total retrospective compromise of sovereign AI defense models, unmasking of national critical infrastructure topologies and autonomous weapon blueprints.",
    mechanics: "Adversary intelligence services intercept and archive encrypted model communications and training proprietary telemetry, preparing to decrypt them once Cryptanalytically Relevant Quantum Computers (CRQCs) come online.",
    countermeasure: "Immediate Post-Quantum Cryptography Migration (NIST FIPS 203/204/205 Kyber/Dilithium), Quantum-Resistant VPNs & Hardware Enclaves (Book Chapter 12, pp. 310-338).",
    citation: "CyberSeal6X Research Monograph 06-X, Section 12.5"
  }
};

function initRiskMatrix() {
  const navItems = document.querySelectorAll('.risk-nav-item');
  const codeEl = document.getElementById('riskDisplayCode');
  const titleEl = document.getElementById('riskDisplayTitle');
  const sectorEl = document.getElementById('riskDisplaySector');
  const impactEl = document.getElementById('riskDisplayImpact');
  const mechanicsEl = document.getElementById('riskDisplayMechanics');
  const counterEl = document.getElementById('riskDisplayCounter');
  const citationEl = document.getElementById('riskDisplayCitation');

  if (!navItems.length || !codeEl) return;

  function selectRisk(key) {
    const data = sovereignRiskData[key];
    if (!data) return;

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.risk === key);
    });

    codeEl.textContent = data.code;
    titleEl.textContent = data.name;
    sectorEl.textContent = data.sector;
    impactEl.textContent = data.impact;
    mechanicsEl.textContent = data.mechanics;
    counterEl.textContent = data.countermeasure;
    citationEl.textContent = data.citation;
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      selectRisk(item.dataset.risk);
    });
  });
}

// 2. THE 12 MISSION-CRITICAL MODULES DATA
const treatiseModules = [
  {
    num: "MODULE 01",
    pages: "pp. 1 - 41",
    title: "Foundations of AI & Cybersecurity in Critical Infrastructure",
    abstract: "Deconstructs the foundational transition from deterministic SCADA/OT networks to stochastic, agentic artificial intelligence. Maps baseline vulnerability surfaces across energy, water, transit, and healthcare.",
    directive: "Directive 1.4: Establish dual-stack architectural decoupling separating neural inference from physical actuation."
  },
  {
    num: "MODULE 02",
    pages: "pp. 42 - 99",
    title: "Threat Landscape & Attack Vectors in AI Systems",
    abstract: "Exhaustive taxonomy of adversarial machine learning: evasion attacks, membership inference, model inversion, prompt injections, and jailbreaking in critical command architectures.",
    directive: "Directive 2.8: Mandate gradient masking and randomized noise smoothing on all high-consequence sensory telemetry."
  },
  {
    num: "MODULE 03",
    pages: "pp. 100 - 142",
    title: "Sector-by-Sector Vulnerability & Exposure Matrix",
    abstract: "Microscopic risk breakdown across high-voltage electric grids, nuclear telemetry, IoMT medical backbones, autonomous logistics, and digital public infrastructure (DPI).",
    directive: "Directive 3.3: Deploy automated air-gapping when model uncertainty metrics exceed 12% standard deviation."
  },
  {
    num: "MODULE 04",
    pages: "pp. 143 - 171",
    title: "International AI Governance, Standards & Compliance",
    abstract: "Operationalizing the NIST AI Risk Management Framework (AI RMF 1.0), ISO/IEC 42001, ISO/IEC 27001, and the EU AI Act High-Risk systems classification.",
    directive: "Directive 4.2: Continuous mathematical audit trail generation for regulatory conformity and SEC disclosure readiness."
  },
  {
    num: "MODULE 05",
    pages: "pp. 172 - 198",
    title: "Risk Management & Quantitative Assessment Methodologies",
    abstract: "Quantitative risk modeling for stochastic systems. Integrating FAIR-AI frameworks, automated policy enforcement engines, and dynamic blast-radius minimization.",
    directive: "Directive 5.5: Implement automated kill-switches tied to real-time risk index thresholds."
  },
  {
    num: "MODULE 06",
    pages: "pp. 199 - 237",
    title: "Technical Controls, Zero Trust (ZTA) & Defensive Engineering",
    abstract: "Implementing Zero Trust for AI: cryptographic model weight signing, confidential computing hardware enclaves (Intel SGX / AMD SEV), and runtime execution firewalls.",
    directive: "Directive 6.1: Never trust model output without cryptographic origin and provenance attestation."
  },
  {
    num: "MODULE 07",
    pages: "pp. 238 - 265",
    title: "Incident Response, Resilience & National Tabletop Exercises",
    abstract: "Protocols for managing cognitive compromise: AI forensic logging, model rollback procedures, national tabletop cyber war-games, and continuity of operations (COOP).",
    directive: "Directive 7.4: Maintain pre-trained cold backup deterministic algorithms for immediate emergency takeover."
  },
  {
    num: "MODULE 08",
    pages: "pp. 266 - 289",
    title: "Sovereign AI, Geopolitical Hegemony & Supply Chain Security",
    abstract: "The strategic exposure of foreign foundation model weights, semiconductor supply chain interdiction, and industrial digital twins in adversarial geopolitical environments.",
    directive: "Directive 8.2: Enforce sovereign code signing on all foundational foundation model checkpoints."
  },
  {
    num: "MODULE 09",
    pages: "pp. 290 - 309",
    title: "Cyber Diplomacy, Policy & International AI Treaties",
    abstract: "Bilateral and multilateral governance mechanisms to prevent autonomous cyber weapons proliferation and establish rules of engagement for state AI attacks.",
    directive: "Directive 9.4: Formulate verifiable non-proliferation standards for autonomous weaponized AI agents."
  },
  {
    num: "MODULE 10",
    pages: "pp. 310 - 322",
    title: "Predictive Cybersecurity & Autonomous Threat Hunting",
    abstract: "Leveraging defensive AI swarms to counter autonomous attacker swarms, sub-second anomaly hunting, and behavioral graph neural networks.",
    directive: "Directive 10.3: Speed-of-light automated containment for self-propagating wormable prompt injections."
  },
  {
    num: "MODULE 11",
    pages: "pp. 323 - 332",
    title: "Human-AI Teaming, Reasoning & Safety Verification",
    abstract: "Architecting reliable human-on-the-loop and human-in-the-loop controls. Mitigating operator complacency and cognitive fatigue during automated crises.",
    directive: "Directive 11.2: Mandatory dual-key human authorization for kinetic and high-consequence AI directives."
  },
  {
    num: "MODULE 12",
    pages: "pp. 333 - 338",
    title: "The Next Frontier: Quantum, Bio-Cyber & 6G/Blockchain",
    abstract: "Post-Quantum Cryptography (PQC) migration blueprints, protecting brain-computer interfaces (BCI), synthetic biology networks, 6G infrastructure, and distributed ledgers.",
    directive: "Directive 12.5: Immediate rollout of NIST PQC lattice-based key exchanges across all critical links."
  }
];

function renderCurriculum() {
  const container = document.getElementById('curriculumContainer');
  if (!container) return;

  container.innerHTML = treatiseModules.map((m, idx) => `
    <div class="module-card" data-idx="${idx}">
      <div>
        <div class="module-num">${m.num} · ${m.pages}</div>
        <h4 class="module-title">${m.title}</h4>
        <p class="module-abstract">${m.abstract}</p>
      </div>
      <div class="module-link-action">
        <span>READ EXECUTIVE ABSTRACT</span>
        <span>→</span>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx, 10);
      openReaderModal(idx);
    });
  });
}

// 3. EXECUTIVE CHAPTER READER MODAL
function openReaderModal(idx = 0) {
  const modal = document.getElementById('readerModalOverlay');
  const titleEl = document.getElementById('readerModalTitle');
  const contentEl = document.getElementById('readerModalBody');
  if (!modal || !treatiseModules[idx]) return;

  const m = treatiseModules[idx];
  titleEl.textContent = `${m.num}: ${m.title}`;

  contentEl.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 24px; border-bottom: 1px solid var(--border-hairline); padding-bottom: 16px;">
      MONOGRAPH: Cybersecurity Governance for Critical Infrastructure in AI-Driven Economies<br>
      AUTHORS: Gopal Karamchand & Praveen Kumar Nakkalapally | CYBERSEAL6X RESEARCH PRESS<br>
      PAGES: ${m.pages} | INSTITUTIONAL COMPLIMENTARY ACCESS
    </div>

    <h2 style="font-size: 2rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; margin-bottom: 20px;">
      ${m.title}
    </h2>

    <div style="background: rgba(255,255,255,0.03); border-left: 2px solid #ffffff; padding: 20px; margin-bottom: 30px; font-family: var(--font-main);">
      <strong style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--accent-steel); text-transform: uppercase; display: block; margin-bottom: 6px;">
        OPERATIONAL MANDATE:
      </strong>
      <p style="color: #ffffff; font-size: 1.05rem; line-height: 1.6; margin: 0;">
        ${m.directive}
      </p>
    </div>

    <h3 style="font-size: 1.3rem; font-weight: 600; color: #ffffff; margin-top: 32px; margin-bottom: 14px;">
      Strategic Executive Briefing
    </h3>
    <p style="font-size: 1.05rem; line-height: 1.8; color: #94a3b8; margin-bottom: 20px;">
      In an AI-driven economy, critical infrastructure cannot be defended by perimeter firewalls or static policy rules. Artificial intelligence models operate as stochastic decision matrices, fundamentally shifting the threat landscape from deterministic code vulnerabilities to cognitive and semantic vulnerabilities.
    </p>

    <h3 style="font-size: 1.3rem; font-weight: 600; color: #ffffff; margin-top: 32px; margin-bottom: 14px;">
      Actionable Boardroom Checkpoints
    </h3>
    <ul style="margin-left: 24px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 14px; font-size: 1rem; color: #cbd5e1;">
      <li><strong style="color:#ffffff;">Defensive Decoupling:</strong> Operational networks must maintain independent hardware-enforced fail-safes that cannot be countermanded by neural optimization software.</li>
      <li><strong style="color:#ffffff;">Cryptographic Attestation:</strong> Model weights and inference prompts must undergo zero-trust integrity checks prior to deployment into operational loops.</li>
      <li><strong style="color:#ffffff;">Regulatory Harmonization:</strong> Seamless alignment with NIST AI RMF, ISO/IEC 42001, and EU AI Act mandates to immunize the organization against catastrophic financial and legal liability.</li>
    </ul>

    <div style="margin-top: 40px; padding: 28px; background: #07090d; border: 1px solid var(--border-hairline); border-radius: 4px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
      <div>
        <h4 style="font-size: 1.15rem; font-weight: 700; color: #ffffff; margin-bottom: 4px;">
          Download Full 338-Page Master Treatise
        </h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">
          Complete mathematical verifications, regulatory audit matrices, and red-team runbooks.
        </p>
      </div>
      <a href="https://drive.google.com/file/d/1yc-cYgywfpzJYTEgoiM4p1EncVQMCX3J/view?usp=drive_link" target="_blank" rel="noopener noreferrer" data-ga-download class="btn-hero-primary" style="padding: 12px 24px; font-size: 0.88rem;">
        DOWNLOAD COMPLETE PDF (GOOGLE DRIVE)
      </a>
    </div>
  `;

  modal.classList.add('active');
}

function closeReaderModal() {
  const modal = document.getElementById('readerModalOverlay');
  if (modal) modal.classList.remove('active');
}

function initDownloadAnalytics() {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a[data-ga-download]');
    if (!link) return;

    window.gtag('event', 'download_link_click', {
      file_name: 'CyberSeal6X Master Treatise',
      file_extension: 'pdf',
      link_url: link.href
    });
  });
}

// 4. INSTITUTIONAL DOWNLOAD FORM HANDLER
function initAcquisitionForm() {
  const form = document.getElementById('institutionalDownloadForm');
  const resultBox = document.getElementById('institutionalResultBox');
  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('acqName').value.trim() || 'Executive';
    const org = document.getElementById('acqOrg').value.trim() || 'Organization';

    const card = document.createElement('div');
    card.style.cssText = 'background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.2); padding: 24px; border-radius: 4px; margin-top: 20px;';

    const status = document.createElement('div');
    status.style.cssText = 'font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-steel); margin-bottom: 8px;';
    status.textContent = 'PDF ACCESS LINK READY';

    const heading = document.createElement('h4');
    heading.style.cssText = 'font-size: 1.1rem; color: #ffffff; margin-bottom: 8px;';
    heading.textContent = `Complimentary copy for ${name} (${org})`;

    const description = document.createElement('p');
    description.style.cssText = 'font-size: 0.9rem; color: #94a3b8; margin-bottom: 20px; line-height: 1.6;';
    description.textContent = 'This site does not store or send the information entered in this form. Open the PDF directly in Google Drive.';

    const actions = document.createElement('div');
    actions.style.cssText = 'display: flex; gap: 14px; flex-wrap: wrap;';

    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/1yc-cYgywfpzJYTEgoiM4p1EncVQMCX3J/view?usp=drive_link';
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';
    downloadLink.dataset.gaDownload = '';
    downloadLink.className = 'btn-hero-primary';
    downloadLink.style.cssText = 'padding: 12px 24px; font-size: 0.88rem;';
    downloadLink.textContent = 'DOWNLOAD COMPLETE PDF (GOOGLE DRIVE)';

    const readerButton = document.createElement('button');
    readerButton.type = 'button';
    readerButton.className = 'btn-hero-secondary';
    readerButton.style.cssText = 'padding: 12px 20px; font-size: 0.88rem;';
    readerButton.textContent = 'READ IN BROWSER';
    readerButton.addEventListener('click', () => openReaderModal(0));

    actions.append(downloadLink, readerButton);
    card.append(status, heading, description, actions);
    resultBox.replaceChildren(card);

    resultBox.style.display = 'block';
  });
}

// 5. CISO BRIEFING ADVISORY INQUIRY FORM HANDLER
function initBriefingForm() {
  const form = document.getElementById('cisoBriefingForm');
  const msgEl = document.getElementById('briefingStatusMsg');
  if (!form || !msgEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const officer = document.getElementById('briefingOfficer').value.trim();
    const email = document.getElementById('briefingEmail').value.trim();
    const practice = document.getElementById('briefingPractice').value;
    const scope = document.getElementById('briefingScope').value.trim();
    const subject = `Confidential CISO briefing inquiry - ${officer}`;
    const body = [
      'Confidential CISO Briefing Inquiry',
      '',
      `Officer / Executive Name: ${officer}`,
      `Enterprise Email: ${email}`,
      `Practice Area: ${practice}`,
      `Operational Scope & Context: ${scope || 'Not provided'}`
    ].join('\n');
    const mailtoUrl = `mailto:security@cyberseal6x.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    msgEl.replaceChildren();
    const status = document.createElement('div');
    status.style.cssText = 'background: rgba(56, 189, 248, 0.06); border: 1px solid rgba(56, 189, 248, 0.25); color: #e2e8f0; padding: 18px 24px; border-radius: 4px; font-size: 0.92rem; margin-top: 18px; line-height: 1.6;';
    status.append('Your default email app (such as Outlook) should open with a draft addressed to security@cyberseal6x.com. Review and send it to submit your inquiry. If it did not open, ');

    const fallbackLink = document.createElement('a');
    fallbackLink.href = mailtoUrl;
    fallbackLink.textContent = 'open the email draft';
    fallbackLink.style.color = 'var(--accent-steel)';
    status.append(fallbackLink);
    msgEl.append(status);

    window.location.href = mailtoUrl;
  });
}

// INITIALIZE ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  initRiskMatrix();
  renderCurriculum();
  initDownloadAnalytics();
  initAcquisitionForm();
  initBriefingForm();
  const readerCloseButton = document.getElementById('readerModalClose');
  if (readerCloseButton) readerCloseButton.addEventListener('click', closeReaderModal);

  // Close reader modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReaderModal();
  });
});
