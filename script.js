let pdfData = [    

  // LEGAL REASONING
  {title:"Nature and Stages of Crime", category:"Legal Reasoning", sub:"Law of Crimes", type:"drive", fileId:"1UTKR6cDaW73yaCqeHfIglgrIpwVFXgxX"},    
  {title:"Punishment in IPC", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/punishment_in_ipc.pdf"},    
  {title:"Joint Liability", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/joint_liability.pdf"},    
  {title:"General Exceptions", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/general_exceptions.pdf"},    
  {title:"Offences Affecting the Human Body", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/offences_affecting_the_human_body.pdf"},    
  {title:"Offences Against Property", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/offences_against_property.pdf"},    
  {title:"Other Offences", category:"Legal Reasoning", sub:"Law of Crimes", type:"github", link:"pdfs/other_offences.pdf"},    

  {title:"Nature of Torts", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/nature_of_torts.pdf"},    
  {title:"Liability Based on Tort", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/liability_based_on_tort.pdf"},    
  {title:"Vicarious Liability", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/vicarious_liability.pdf"},    
  {title:"Trespass", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/trespass.pdf"},    
  {title:"Negligence", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/negligence.pdf"},    
  {title:"Defamation", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/defamation.pdf"},    
  {title:"Malicious Prosecution", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/malicious_prosecution.pdf"},    
  {title:"Nuisance", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/nuisance.pdf"},    
  {title:"Other Kind of Liability Torts", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/other_kind_of_liability_torts.pdf"},    
  {title:"Economic Trots", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/economic.torts.pdf"},    
  {title:"General Defences", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/general_defences.pdf"},    
  {title:"Remidies", category:"Legal Reasoning", sub:"Law of Tort", type:"github", link:"pdfs/remidies.pdf"},    

  {title:"Framing of Indian Constitution", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/framing_of_indian_constitution.pdf"},     
  {title:"Parts & Schedules of Indian Constitution", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/constitution.pdf"},    
  {title:"Preamble union & its territories citizenship", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/preamble_union_&_its_territories_citizenship.pdf"},    
  {title:"Fundamental Rights & Duties", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/fundamental_rights_&_duties.pdf"},    
  {title:"Union Executive", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/union_executive.pdf"},    
  {title:"Parliament", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/parliament.pdf"},    
  {title:"Emergency Provisions in India", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/emergency_provisions_in_india.pdf"},    
  {title:"State Legislature", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/state_legislature.pdf"},    
  {title:"Governor", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/governor.pdf"},    
  {title:"Local-Self Governance", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/local_self_governance.pdf"},    
  {title:"Judiciary", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/judiciary.pdf"},    
  {title:"Union Territories", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/union_territories.pdf"},     
  {title:"Government Bodies", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/government_bodies.pdf"},    
  {title:"Official Language", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/official_language.pdf"},    
  {title:"Some Important Points", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/some_important_points.pdf"},    
  {title:"GST & Union Budget", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/gst_&_union_budget.pdf"},    
  {title:"Index", category:"Legal Reasoning", sub:"Constitution of India", type:"github", link:"pdfs/index.pdf"},    

  {title:"Contract Act", category:"Legal Reasoning", sub:"Contract", type:"github", link:"pdfs/contract1.pdf"},    
  {title:"Misc Law", category:"Legal Reasoning", sub:"Miscellaneous", type:"github", link:"pdfs/misc1.pdf"},    
  {title:"Legal English", category:"Legal Reasoning", sub:"English", type:"drive", fileId:"PASTE_ID"},    
  {title:"Legal GK", category:"Legal Reasoning", sub:"GK", type:"drive", fileId:"PASTE_ID"},    

  // OTHER SECTIONS
  {title:"Logical Notes", category:"Logical Reasoning", sub:"Logical", type:"github", link:"pdfs/logical1.pdf"},    
  {title:"Quant Notes", category:"Quantitative Techniques", sub:"Math", type:"github", link:"pdfs/quant1.pdf"},    
  {title:"CLAT PYQ", category:"Previous Year Papers", sub:"CLAT", type:"github", link:"pdfs/pyq1.pdf"},    
  {title:"CLAT Mock", category:"CLAT Mock Test", sub:"CLAT", type:"github", link:"pdfs/clat_mock1.pdf"},    
  {title:"CLAT Sample", category:"CLAT Sample Paper", sub:"CLAT", type:"github", link:"pdfs/sample1.pdf"},    
  {title:"AILET Mock", category:"AILET Mock Test", sub:"AILET", type:"github", link:"pdfs/ailet_mock1.pdf"},    
  {title:"AILET PYQ", category:"AILET PYQs", sub:"AILET", type:"github", link:"pdfs/ailet_pyq.pdf"},    
  {title:"SLAT Notes", category:"SLAT Notes", sub:"SLAT", type:"github", link:"pdfs/slat_notes.pdf"},    
  {title:"SLAT Mock", category:"SLAT Mock Test", sub:"SLAT", type:"github", link:"pdfs/slat_mock.pdf"}    

];


// 🔥 SAME LOGIC (no change)
function displayPDF(data){    
  let html = "";    

  if(data.length === 0){
    html = "<p>❌ No PDFs Found</p>";
  } else {
    data.forEach(pdf => {

      let openLink = "";
      let downloadLink = "";

      if(pdf.type === "github"){
        openLink = pdf.link;
        downloadLink = pdf.link;
      } 
      else if(pdf.type === "drive"){
        openLink = `https://drive.google.com/file/d/${pdf.fileId}/preview`;
        downloadLink = `https://drive.google.com/uc?export=download&id=${pdf.fileId}`;
      }

      html += `
<div class="card">    
  <h3>${pdf.title}</h3>    
  <p>${pdf.category} - ${pdf.sub}</p>    

  <a href="${openLink}" target="_blank">📖 Open</a>    
  <br><br>    
  <a href="${downloadLink}" class="download-btn">⬇️ Download</a>    
</div>`;
    });
  }

  document.getElementById("pdfList").innerHTML = html;    
}

function searchPDF(){    
  let input = document.getElementById("search").value.toLowerCase();    
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

displayPDF(pdfData);

setTimeout(() => {    
  let splash = document.getElementById("splash");    
  if(splash) splash.style.display = "none";  
}, 2000);