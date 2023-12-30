function create(words) {
   let conteiner = document.querySelector("#content");

   function createDiv(word){
      let div = document.createElement("div");
      let p = document.createElement("p");

      p.textContent=word;
      p.style.display="none";

      div.appendChild(p);
      div.addEventListener("click", onClick);
      return div;

   }

   function onClick(e){
      let invisableParagraph = e.currentTarget.querySelector("p");
      invisableParagraph.style.display="block";
   }

   words.forEach(word => {
      conteiner.appendChild(createDiv(word));
   });

}