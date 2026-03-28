let pdfData = [  

  // LEGAL REASONING (all 8 merged)
  {title:"Nature and Stages of Crime", category:"Legal Reasoning", sub:"Law of Crimes", link:"pdfs/legal.pdf"},  
  {title:"Punishment in IPC", category:"Legal Reasoning", sub:"Law of Crimes", link:"pdfs/punishment_in_ipc.pdf"},  
  {title:"Negligence", category:"Legal Reasoning", sub:"Law of Tort", link:"pdfs/negligence.pdf"},  
  {title:"Defamation", category:"Legal Reasoning", sub:"Law of Tort", link:"pdfs/defamation.pdf"},  
  {title:"Constitution Notes", category:"Legal Reasoning", sub:"Constitution", link:"pdfs/constitution1.pdf"},  
  {title:"Contract Act", category:"Legal Reasoning", sub:"Contract", link:"pdfs/contract1.pdf"},  
  {title:"Misc Law", category:"Legal Reasoning", sub:"Miscellaneous", link:"pdfs/misc1.pdf"},  
  {title:"Legal English", category:"Legal Reasoning", sub:"English", link:"pdfs/english1.pdf"},  
  {title:"Legal GK", category:"Legal Reasoning", sub:"GK", link:"pdfs/gk1.pdf"},  

  // LOGICAL
  {title:"Logical Reasoning Notes", category:"Logical Reasoning", sub:"Logical", link:"pdfs/logical1.pdf"},  

  // QUANT
  {title:"Quant Notes", category:"Quantitative Techniques", sub:"Math", link:"pdfs/quant1.pdf"},  

  // PYQ
  {title:"CLAT PYQ 2023", category:"Previous Year Papers", sub:"CLAT", link:"pdfs/pyq1.pdf"},  

  // CLAT MOCK
  {title:"CLAT Mock 1", category:"CLAT Mock Test", sub:"CLAT", link:"pdfs/clat_mock1.pdf"},  

  // CLAT SAMPLE
  {title:"CLAT Sample Paper", category:"CLAT Sample Paper", sub:"CLAT", link:"pdfs/sample1.pdf"},  

  // AILET
  {title:"AILET Mock", category:"AILET Mock Test", sub:"AILET", link:"pdfs/ailet_mock1.pdf"},  
  {title:"AILET PYQ", category:"AILET PYQs", sub:"AILET", link:"pdfs/ailet_pyq.pdf"},  

  // SLAT
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


// FILTER CATEGORY
function filterCategory(cat){  
  let filtered = pdfData.filter(pdf => pdf.category === cat);  
  displayPDF(filtered);  
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


// SPLASH
setTimeout(() => {  
  let splash = document.getElementById("splash");  
  if(splash) splash.style.display = "none";
}, 2000);