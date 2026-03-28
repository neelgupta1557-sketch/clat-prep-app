let pdfData = [  
  // LAW OF CRIMES  
  {title:"Nature and Stages of Crime 1", category:"Law of Crimes", link:"pdfs/legal.pdf"},  
  {title:"Punishment in IPC 2", category:"Law of Crimes", link:"pdfs/punishment_in_ipc.pdf"},  
  {title:"Elements of Criminal liability 3", category:"Law of Crimes", link:"pdfs/elements_of_criminal_liability.pdf"},  
  {title:"Joint Liability 4", category:"Law of Crimes", link:"pdfs/joint_liability.pdf"},  
  {title:"General Exceptions 5", category:"Law of Crimes", link:"pdfs/general_exceptions.pdf"},  
  {title:"Offences Affecting The Human Body 6", category:"Law of Crimes", link:"pdfs/offences_affecting_the_human_body.pdf"},  
  {title:"Offences Against Property 7", category:"Law of Crimes", link:"pdfs/offences_against_property.pdf"},  
  {title:"Other Offences 8", category:"Law of Crimes", link:"pdfs/other_offences.pdf"},  
  
  // LAW OF TORT  
  {title:"Nature of Torts 1", category:"Law of Tort", link:"pdfs/nature_of_torts.pdf"},  
  {title:"Liability Based On Torts 2", category:"Law of Tort", link:"pdfs/liability_based_on_tort.pdf"},  
  {title:"Vicarious Liability 3", category:"Law of Tort", link:"pdfs/vicarious_liability.pdf"},  
  {title:"Trespass 4", category:"Law of Tort", link:"pdfs/trespass.pdf"},  
  {title:"Negligence 5", category:"Law of Tort", link:"pdfs/negligence.pdf"},  
  {title:"Defamation 6", category:"Law of Tort", link:"pdfs/defamation.pdf"},  
  {title:"Malicious Prosecution 7", category:"Law of Tort", link:"pdfs/tort1.pdf"},  
  {title:"Nuisance 8", category:"Law of Tort", link:"pdfs/tort2.pdf"},  
  {title:"Other Kind Of Liability In Tort 9", category:"Law of Tort", link:"pdfs/tort1.pdf"},  
  {title:"Economic Torts 10", category:"Law of Tort", link:"pdfs/tort2.pdf"},  
  {title:"New And Emergent Torts 11", category:"Law of Tort", link:"pdfs/tort1.pdf"},  
  {title:"Remedies 12", category:"Law of Tort", link:"pdfs/tort2.pdf"},  
  {title:"General Defences 13", category:"Law of Tort", link:"pdfs/tort1.pdf"},  
  
  // CONSTITUTION  
  {title:"Constitution Notes 1", category:"Constitution", link:"pdfs/constitution1.pdf"},  
  
  // CONTRACT ACT  
  {title:"Contract Act Notes 1", category:"Contract", link:"pdfs/contract1.pdf"},  
  
  // MISC  
  {title:"Misc Law Notes", category:"Miscellaneous", link:"pdfs/misc1.pdf"},  
  
  // QUANT  
  {title:"Quant Notes", category:"Quantitative", link:"pdfs/quant1.pdf"},  
  
  // ENGLISH  
  {title:"English Notes", category:"English", link:"pdfs/english1.pdf"},  
  
  // GK  
  {title:"Current Affairs", category:"GK", link:"pdfs/gk1.pdf"}  
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

  <!-- Legal Reasoning main + original category sub -->
  <p>Legal Reasoning - ${pdf.category}</p>  

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
    pdf.category.toLowerCase().includes(input)  
  );  

  displayPDF(filtered);  
}  


// FILTER (ab sab Legal Reasoning me show karega)
function filterCategory(){  
  displayPDF(pdfData);  
}  


// LOAD  
displayPDF(pdfData);  


// MOCK TEST  
let questions = [  
  { q: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: 1 },  
  { q: "IPC stands for?", options: ["Indian Penal Code", "Indian Police Code", "Internal Penal Code", "None"], answer: 0 },  
  { q: "Mens Rea means?", options: ["Guilty Mind", "Guilty Act", "Law", "Punishment"], answer: 0 }  
];  

let currentQ = 0;  
let score = 0;  


function loadQuestion(){  
  let q = questions[currentQ];  
  document.getElementById("question").innerText = q.q;  

  q.options.forEach((opt, i) => {  
    document.getElementById("opt"+i).innerText = opt;  
  });  

  document.getElementById("result").innerText = "";  
}  


function checkAnswer(i){  
  if(i === questions[currentQ].answer){  
    score++;  
    document.getElementById("result").innerText = "✅ Correct";  
  } else {  
    document.getElementById("result").innerText = "❌ Wrong";  
  }  
}  


function nextQuestion(){  
  currentQ++;  

  if(currentQ < questions.length){  
    loadQuestion();  
  } else {  
    document.getElementById("question").innerText = "🎉 Test Completed!";  
    document.getElementById("result").innerText = "Score: " + score + "/" + questions.length;  
  }  
}  


if(document.getElementById("question")){  
  loadQuestion();  
}  


// SPLASH SCREEN  
setTimeout(() => {  
  let splash = document.getElementById("splash");  
  if(splash) splash.style.display = "none";
}, 2000);