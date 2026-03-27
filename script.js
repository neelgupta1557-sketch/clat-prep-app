let pdfData = [
  // LAW OF CRIMES
  {title:"Nature and Stages of Crime 1", category:"Law of Crimes", link:"legal.pdf"},
  {title:"Punishment in IPC 2", category:"Law of Crimes", link:"punishment_in_ipc.pdf"},
  {title:"Elements of Criminal liability 3", category:"Law of Crimes", link:"elements_of_criminal_liability.pdf"},
  {title:"Joint Liability 4", category:"Law of Crimes", link:"joint_liability.pdf"},
  {title:"General Exceptions 5", category:"Law of Crimes", link:"general_exceptions.pdf"},
  {title:"Offences Affecting The Human Body 6", category:"Law of Crimes", link:"offences_affecting_the_human_body.pdf"},
  {title:"Offences Against Property 7", category:"Law of Crimes", link:"offences_against_property.pdf"},
  {title:"Other Offences 8", category:"Law of Crimes", link:"other_offences.pdf"},

  // LAW OF TORTS
  {title:"Nature of Torts 1", category:"Law of Tort", link:"nature_of_torts.pdf"},
  {title:"Liability Based On Torts 2", category:"Law of Tort", link:"liability_based_on_tort.pdf"},
  {title:"Vicarious Liability 3", category:"Law of Tort", link:"vicarious_liability.pdf"},
  {title:"Trespass 4", category:"Law of Tort", link:"trespass.pdf"},
  {title:"Negligence 5", category:"Law of Tort", link:"negligence.pdf"},
  {title:"Defamation 6", category:"Law of Tort", link:"defamation.pdf"},
  {title:"Malicious prosecution 7", category:"Law of Tort", link:"malicious_prosecution.pdf"},
  {title:"Nuisance 8", category:"Law of Tort", link:"nuisance.pdf"},
  {title:"Other Kind Of Liability In Tort 9", category:"Law of Tort", link:"other_kind_of_liability_torts.pdf"},
  {title:"Economic Trots 10", category:"Law of Tort", link:"economic.torts.pdf"},
  {title:"New And Emergent Torts 11", category:"Law of Tort", link:"new_and_emergent_torts.pdf"},
  {title:"Remedies 12", category:"Law of Tort", link:"remidies.pdf"},
  {title:"General Defences 13", category:"Law of Tort", link:"general_defences.pdf"},

  // OTHER
  {title:"Quant Notes", category:"Quantitative", link:"pdfs/quant1.pdf"},
  {title:"English Notes", category:"English", link:"pdfs/english1.pdf"},
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

  <a href="${pdf.link}" target="_blank">📖 Open PDF</a>
  <br><br>
  <a href="${pdf.link}" download class="download-btn">⬇️ Download PDF</a>

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

// FILTER BUTTON (optional)
function filterCategory(cat){
  let filtered = pdfData.filter(pdf => pdf.category === cat);
  displayPDF(filtered);
}

// 🔥 AUTO FILTER FROM CATEGORY PAGE
const params = new URLSearchParams(window.location.search);
const selectedClat = params.get("clat");

if(selectedClat){
  let filtered = pdfData.filter(pdf => pdf.category === selectedClat);
  displayPDF(filtered);
} else {
  displayPDF(pdfData);
}

// MOCK TEST
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
    document.getElementById("result").innerText = "";
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