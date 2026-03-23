// PDF DATA (EDIT HERE ONLY)
let pdfData = [
  {
    title: "Legal Reasoning Notes",
    category: "Law",
    link: "pdfs/legal.pdf"
  },
  {
    title: "Current Affairs 2026",
    category: "GK",
    link: "pdfs/current.pdf"
  },
  {
    title: "Logical Reasoning",
    category: "Reasoning",
    link: "pdfs/logical.pdf"
  }
];

// SHOW PDF
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

  let container = document.getElementById("pdfList");
  if(container){
    container.innerHTML = html;
  }
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

// MOCK TEST FUNCTION
function check(ans){
  let result = document.getElementById("result");

  if(ans === "B"){
    result.innerHTML = "✅ Correct Answer";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Wrong Answer";
    result.style.color = "red";
  }
}

// LOAD PDFs (safe)
displayPDF(pdfData);