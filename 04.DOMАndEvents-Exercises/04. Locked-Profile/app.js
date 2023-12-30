function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {
        button.addEventListener("click", hendleClick);

    });

    function hendleClick(e){
        let lockedRadioButto = e.currentTarget.parentElement.querySelector('input[type="radio"]');

        if(lockedRadioButto.checked){
            return;
        }

        const isHidden = e.currentTarget.textContent === "Show more";
        const hiddenInfo = e.currentTarget.parentElement.querySelector("div");

        hiddenInfo.style.display = isHidden ?"block":"none";

        e.currentTarget.textContent=isHidden?"Hide it": "Show more"

      

    }

    

}