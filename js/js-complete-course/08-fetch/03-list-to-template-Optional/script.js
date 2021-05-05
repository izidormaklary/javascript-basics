/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", getXmen);
    async function getXmen() {
        let data = await fetch(`http://localhost:3000/heroes`);
        let heroObj = await data.json();
        heroObj.forEach(element=> createTemplate(element))
        
          
    };
    function createTemplate(heroObj){
        const target = document.getElementById("target");
        template = document.getElementById('tpl-hero').content.cloneNode(true);
        const name = template.querySelector(".name");
        const alt = template.querySelector(".alter-ego");
        let abilities =  template.querySelector(".powers");
        target.appendChild(template);
        name.innetText= heroObj.name;
        alt.innerText= heroObj.alterEgo;
        
       
        heroObj.abilities.forEach(element => {
          
           let br = document.createElement("br");
           let el = document.createTextNode(element);
           
           abilities.appendChild(el);
           abilities.appendChild(br);
        })
        
    }
})();
