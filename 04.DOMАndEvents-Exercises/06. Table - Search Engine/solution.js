function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchQuery = document.querySelector("#searchField").value;
      let calls = Array.from(document.querySelectorAll("tbody td"));
      let acktiveRows = Array.from(document.querySelectorAll("tbody tr.select"));

      acktiveRows.forEach(row=>{
         row.classList.remove("select");
      });

      calls.filter(cell => cell.textContent.includes(searchQuery))
      .forEach(cell=>{
         cell.parentElement.classList.add("select");

      });

   }
}