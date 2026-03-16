const sheetID = "1AkrVuM6bv-yPdLZTODvS0D73leu0wsIdnMHUVQRx5cM";
const url = `https://opensheet.elk.sh/${sheetID}/Sheet1`;

let pdfData = [];

fetch(url)
.then(res => res.json())
.then(data => {

pdfData = data;
displayPDF(data);

});

function displayPDF(data){

let html="";

data.forEach(pdf => {

html += `
<div class="card">
<h3>${pdf.Title}</h3>
<p>${pdf.Category}</p>
<a href="${pdf.Link}" target="_blank">Open PDF</a>
</div>
`;

});

document.getElementById("pdfList").innerHTML = html;

}

function searchPDF(){

let input = document.getElementById("search").value.toLowerCase();

let filtered = pdfData.filter(pdf =>
pdf.Title.toLowerCase().includes(input) ||
pdf.Category.toLowerCase().includes(input)
);

displayPDF(filtered);

}