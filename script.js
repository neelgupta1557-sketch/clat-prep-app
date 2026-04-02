console.log("SCRIPT LOADED");

/* =========================
   🔥 LOADING FIX (NO BUG)
========================= */
document.addEventListener("DOMContentLoaded", function () {

  let loader = document.getElementById("loading");

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "0.5s";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 800);

});

/* =========================
   👤 PROFILE SYSTEM
========================= */

function getCurrentUser(){
  return localStorage.getItem("user");
}

function showUser(){
  let user = getCurrentUser();
  let el = document.getElementById("welcomeUser");

  if(el && user){
    el.innerText = "Welcome, " + user + " 👋";
  }
}

function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("pass");
  window.location.href = "login.html";
}

/* =========================
   📚 FULL ORIGINAL PDF DATA (RESTORED 100%)
========================= */

let pdfData = [

  // 🔥 CRIMES
  {title:"Nature and Stages of Crime", category:"Legal Reasoning", sub:"Law of Crimes", type:"drive", fileId:"1UTKR6cDaW73yaCqeHfIglgrIpwVFXgxX"},
  {title:"Punishment in IPC", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/punishment_in_ipc.pdf"},
  {title:"Joint Liability", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/joint_liability.pdf"},
  {title:"General Exceptions", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/general_exceptions.pdf"},
  {title:"Offences Human Body", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/offences_affecting_the_human_body.pdf"},
  {title:"Offences Property", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/offences_against_property.pdf"},
  {title:"Other Offences", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"other_offences.pdf"},

  // 🔥 TORT
  {title:"Nature of Torts", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/nature_of_torts.pdf"},
  {title:"Liability Based on Tort", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/liability_based_on_tort.pdf"},
  {title:"Vicarious Liability", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/vicarious_liability.pdf"},
  {title:"Trespass", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/trespass.pdf"},
  {title:"Negligence", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/negligence.pdf"},
  {title:"Defamation", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/defamation.pdf"},
  {title:"Malicious Prosecution", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/malicious_prosecution.pdf"},
  {title:"Nuisance", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/nuisance.pdf"},
  {title:"Economic Torts", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/economic.torts.pdf"},
  {title:"General Defences", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"general_defences.pdf"},
  {title:"Remedies", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"remidies.pdf"},

  // 🔥 CONSTITUTION
  {title:"Framing of Indian Constitution", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/framing_of_indian_constitution.pdf"},
  {title:"Parts & Schedules", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/parts_and_schedules_of_indian_constitution.pdf"},
  {title:"Preamble & Citizenship", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/preamble_union_&_its_territories_citizenship.pdf"},
  {title:"Fundamental Rights", category:"Legal Reasoning", sub:"Constitution", type:"drive", fileId:"1ual18eHk4sZshQjJjwZc76R5ApQYbNgo"},
  {title:"Union Executive", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"union_executive.pdf"},
  {title:"Parliament", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"parliament.pdf"},
  {title:"Emergency Provisions", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/emergency_provisions_in_india.pdf"},
  {title:"State Legislature", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/state_legislature.pdf"},
  {title:"Governor", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/governor.pdf"},
  {title:"Local Self Govt", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/local_self_governance.pdf"},
  {title:"Judiciary", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/judiciary.pdf"},
  {title:"Union Territories", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/union_territories.pdf"},
  {title:"Government Bodies", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/government_bodies.pdf"},
  {title:"Official Language", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/official_language.pdf"},
  {title:"Important Points", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/some_important_points.pdf"},
  {title:"GST & Budget", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"pdfs/gst_&_union_budget.pdf"},
  {title:"Index", category:"Legal Reasoning", sub:"Constitution", type:"github", link:"index.pdf"},

  // 🔥 CONTRACT ACT
  {title:"Introduction", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/introduction.pdf"},
  {title:"Kinds of Contract", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/kinds_of_contract.pdf"},
  {title:"Proposal", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/proposal.pdf"},
  {title:"Acceptance", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/acceptance.pdf"},
  {title:"Free Consent", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/free_consent.pdf"},
  {title:"Capacity", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/capacity_of_parties.pdf"},
  {title:"Consideration", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/consideration.pdf"},
  {title:"Void Agreements", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/void_agreements.pdf"},
  {title:"Performance", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/performance_of_contract.pdf"},
  {title:"Quasi Contract", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/quasi_contract.pdf"},
  {title:"Discharge", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/discharge_of_contract.pdf"},
  {title:"Remedies", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/remedies_for_breach_of_contract.pdf"},
  {title:"Differences", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/differences.pdf"},
  {title:"Special Contracts", category:"Legal Reasoning", sub:"Contract Act", type:"github", link:"pdfs/special_contracts.pdf"},
  {title:"Misc Law", category:"Legal Reasoning", sub:"Misc", type:"github", link:"pdfs/misc1.pdf"},

  // 🔥 OTHER SUBJECTS
  {title:"Legal English", category:"Legal Reasoning", sub:"English", type:"drive", fileId:"PASTE_ID"},
  {title:"Legal GK", category:"Legal Reasoning", sub:"GK", type:"drive", fileId:"PASTE_ID"},
  {title:"Logical Notes", category:"Logical Reasoning", sub:"Logical", type:"github", link:"pdfs/logical1.pdf"},
  {title:"Quant Notes", category:"Quant", sub:"Math", type:"github", link:"pdfs/quant1.pdf"},
  {title:"CLAT PYQ", category:"PYQ", sub:"CLAT", type:"github", link:"pdfs/pyq1.pdf"},
  {title:"CLAT Mock", category:"Mock", sub:"CLAT", type:"github", link:"pdfs/clat_mock1.pdf"},
  {title:"AILET Mock", category:"Mock", sub:"AILET", type:"github", link:"pdfs/ailet_mock1.pdf"},
  {title:"AILET PYQ", category:"PYQ", sub:"AILET", type:"github", link:"pdfs/ailet_pyq.pdf"},
  {title:"SLAT Notes", category:"SLAT", sub:"Notes", type:"github", link:"pdfs/slat_notes.pdf"},
  {title:"SLAT Mock", category:"SLAT", sub:"Mock", type:"github", link:"pdfs/slat_mock.pdf"}

];

/* =========================
   📄 DISPLAY
========================= */

function displayPDF(data){
  let html = "";

  data.forEach(pdf => {

    let openLink = "";
    let downloadLink = "";

    if(pdf.type === "github"){
      openLink = pdf.link + "#toolbar=0";
      downloadLink = pdf.link;
    } else if(pdf.type === "drive"){
      openLink = `https://drive.google.com/uc?export=view&id=${pdf.fileId}`;
      downloadLink = `https://drive.google.com/uc?export=download&id=${pdf.fileId}`;
    }

    html += `
<div class="card">
  <h3>${pdf.title}</h3>
  <p>${pdf.category} - ${pdf.sub || ""}</p>

  <a href="${openLink}" target="_blank">
    <button>📖 Open</button>
  </a>

  <a href="${downloadLink}" target="_blank">
    <button>⬇️ Download</button>
  </a>
</div>
`;
  });

  let el = document.getElementById("pdfList");
  if(el) el.innerHTML = html;
}

/* =========================
   SEARCH + FILTER
========================= */

function searchPDF(){
  let input = document.getElementById("search")?.value.toLowerCase() || "";

  let filtered = pdfData.filter(pdf =>
    pdf.title.toLowerCase().includes(input) ||
    pdf.category.toLowerCase().includes(input) ||
    pdf.sub.toLowerCase().includes(input)
  );

  displayPDF(filtered);
}

function filterCategory(cat){
  let filtered = pdfData.filter(pdf => pdf.category === cat);
  displayPDF(filtered);
}

/* =========================
   INIT
========================= */

showUser();
displayPDF(pdfData);