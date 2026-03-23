let pdfData = [
  // LAW OF CRIMES
  {title:"Nature and Stages of Crime 1", category:"Law of Crimes", link:"legal.pdf"},
  {title:"Crimes Notes 2", category:"Law of Crimes", link:"pdfs/crimes2.pdf"},
  {title:"Crimes Notes 3", category:"Law of Crimes", link:"pdfs/crimes1.pdf"},
  {title:"Crimes Notes 4", category:"Law of Crimes", link:"pdfs/crimes2.pdf"},
  {title:"Crimes Notes 5", category:"Law of Crimes", link:"pdfs/crimes1.pdf"},
  {title:"Crimes Notes 6", category:"Law of Crimes", link:"pdfs/crimes2.pdf"},
  {title:"Crimes Notes 7", category:"Law of Crimes", link:"pdfs/crimes1.pdf"},
  {title:"Crimes Notes 8", category:"Law of Crimes", link:"pdfs/crimes2.pdf"},

  // LAW OF TORT
  {title:"Tort Notes 1", category:"Law of Tort", link:"pdfs/tort1.pdf"},
  {title:"Tort Notes 2", category:"Law of Tort", link:"pdfs/tort2.pdf"},

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

  data.forEach(pdf => {
    html += `
    <div class="card">
      <h3>${pdf.title}</h3>
      <p>${pdf.category}</p>
      <a href="${pdf.link}" target="_blank">Open PDF</a>
    </div>
    `;
  });

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

// FILTER BY CATEGORY
function filterCategory(cat){
  let filtered = pdfData.filter(pdf => pdf.category === cat);
  displayPDF(filtered);
}

// LOAD
displayPDF(pdfData);

// MOCK TEST QUESTIONS
let questions = [
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    q: "IPC stands for?",
    options: ["Indian Penal Code", "Indian Police Code", "Internal Penal Code", "None"],
    answer: 0
  },
  {
    q: "Mens Rea means?",
    options: ["Guilty Mind", "Guilty Act", "Law", "Punishment"],
    answer: 0
  }
];

let currentQ = 0;

// LOAD QUESTION
function loadQuestion(){
  let q = questions[currentQ];

  document.getElementById("question").innerText = q.q;

  q.options.forEach((opt, i) => {
    document.getElementById("opt"+i).innerText = opt;
  });

  document.getElementById("result").innerText = "";
}

// CHECK ANSWER
function checkAnswer(i){
  if(i === questions[currentQ].answer){
    document.getElementById("result").innerText = "✅ Correct";
  } else {
    document.getElementById("result").innerText = "❌ Wrong";
  }
}

// NEXT QUESTION
function nextQuestion(){
  currentQ++;

  if(currentQ < questions.length){
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Test Completed!";
    document.getElementById("result").innerText = "";
  }
}

// LOAD FIRST
if(document.getElementById("question")){
  loadQuestion();
}