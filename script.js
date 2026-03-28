let pdfData = [  

  // LEGAL REASONING (ALL 8)
  {title:"Nature and Stages of Crime", category:"Legal Reasoning", sub:"Law of Crimes", link:"legal.pdf"},  
  {title:"Punishment in IPC", category:"Legal Reasoning", sub:"Law of Crimes", link:"punishment_in_ipc.pdf"},  
  {title:"Elements of Criminal Liability", category:"Legal Reasoning", sub:"Law of Crimes", link:"elements_of_criminal_liability.pdf"},  
  {title:"Joint Liability", category:"Legal Reasoning", sub:"Law of Crimes", link:"joint_liability.pdf"},  
  {title:"General Exceptions", category:"Legal Reasoning", sub:"Law of Crimes", link:"general_exceptions.pdf"},  
  {title:"Offences Affecting the Human Body", category:"Legal Reasoning", sub:"Law of Crimes", link:"offences_affecting_the_human_body.pdf"},  
  {title:"Offences Against Property", category:"Legal Reasoning", sub:"Law of Crimes", link:"offences_against_property.pdf"},  
  {title:"Other Offences", category:"Legal Reasoning", sub:"Law of Crimes", link:"other_offences.pdf"},  
  {title:"Nature of Torts", category:"Legal Reasoning", sub:"Law of Tort", link:"nature_of_torts.pdf"},  
  {title:"Liability Based on Tort", category:"Legal Reasoning", sub:"Law of Tort", link:"liability_based_on_tort.pdf"},  
  {title:"Vicarious Liability", category:"Legal Reasoning", sub:"Law of Tort", link:"vicarious_liability.pdf"},  
  {title:"Trespass", category:"Legal Reasoning", sub:"Law of Tort", link:"trespass.pdf"},  
  {title:"Negligence", category:"Legal Reasoning", sub:"Law of Tort", link:"negligence.pdf"},  
  {title:"Defamation", category:"Legal Reasoning", sub:"Law of Tort", link:"defamation.pdf"},  
  {title:"Malicious Prosecution", category:"Legal Reasoning", sub:"Law of Tort", link:"malicious_prosecution.pdf"},  
  {title:"Nuisance", category:"Legal Reasoning", sub:"Law of Tort", link:"nuisance.pdf"},  
  {title:"Other Kind of Liability Torts", category:"Legal Reasoning", sub:"Law of Tort", link:"other_kind_of_liability_torts.pdf"},  
  {title:"Economic Trots", category:"Legal Reasoning", sub:"Law of Tort", link:"economic.torts.pdf"},  
  {title:"Constitution Notes", category:"Legal Reasoning", sub:"Constitution", link:"pdfs/constitution1.pdf"},  
  {title:"Contract Act", category:"Legal Reasoning", sub:"Contract", link:"pdfs/contract1.pdf"},  
  {title:"Misc Law", category:"Legal Reasoning", sub:"Miscellaneous", link:"pdfs/misc1.pdf"},  
  {title:"Legal English", category:"Legal Reasoning", sub:"English", link:"pdfs/english1.pdf"},  
  {title:"Legal GK", category:"Legal Reasoning", sub:"GK", link:"pdfs/gk1.pdf"},  

  // OTHER SECTIONS
  {title:"Logical Notes", category:"Logical Reasoning", sub:"Logical", link:"pdfs/logical1.pdf"},  
  {title:"Quant Notes", category:"Quantitative Techniques", sub:"Math", link:"pdfs/quant1.pdf"},  
  {title:"CLAT PYQ", category:"Previous Year Papers", sub:"CLAT", link:"pdfs/pyq1.pdf"},  
  {title:"CLAT Mock", category:"CLAT Mock Test", sub:"CLAT", link:"pdfs/clat_mock1.pdf"},  
  {title:"CLAT Sample", category:"CLAT Sample Paper", sub:"CLAT", link:"pdfs/sample1.pdf"},  
  {title:"AILET Mock", category:"AILET Mock Test", sub:"AILET", link:"pdfs/ailet_mock1.pdf"},  
  {title:"AILET PYQ", category:"AILET PYQs", sub:"AILET", link:"pdfs/ailet_pyq.pdf"},  
  {title:"SLAT Notes", category:"SLAT Notes", sub:"SLAT", link:"pdfs/slat_notes.pdf"},  
  {title:"SLAT Mock", category:"SLAT Mock Test", sub:"SLAT", link:"pdfs/slat_mock.pdf"}  

];


// DISPLAY
function displayPDF(data){  
  let html = "";  

  if(data.length === 0){
    html = "<p>❌ No PDFs Found</p>";
  } else {
    data.forEach(pdf => {  
      html += `
<div class="card">  
  <h3>${pdf.title}</h3>  
  <p>${pdf.category} - ${pdf.sub}</p>  

  <a href="${pdf.link}" target="_blank">📖 Open PDF</a>  
  <br><br>  
  <a href="${pdf.link}" download class="download-btn">⬇️ Download PDF</a>  
</div>`;
    });
  }

  document.getElementById("pdfList").innerHTML = html;  
}


// SEARCH
function searchPDF(){  
  let input = document.getElementById("search").value.toLowerCase();  

  let filtered = pdfData.filter(pdf =>  
    pdf.title.toLowerCase().includes(input) ||  
    pdf.category.toLowerCase().includes(input) ||  
    pdf.sub.toLowerCase().includes(input)  
  );  

  displayPDF(filtered);  
}


// FILTER
function filterCategory(cat){  
  let filtered = pdfData.filter(pdf => pdf.category === cat);  
  displayPDF(filtered);  
}


// LOAD
displayPDF(pdfData);


// SPLASH
setTimeout(() => {  
  let splash = document.getElementById("splash");  
  if(splash) splash.style.display = "none";
}, 2000);