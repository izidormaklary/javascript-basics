/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
   // button eventlistener
    document.getElementById("run").addEventListener("click", getXmen);
    //function that waits for the data to be fetched
    async function getXmen() {
        //getting id from inputfield
        let heroId = document.getElementById('hero-id').value;
        //selecting the right element from json object, and fetching it
        let data = await fetch(`http://localhost:3000/heroes?id=${heroId}`);
        let heroObj = await data.json();
        //selecting the first element (of one element but yes)
        heroObj = heroObj[0];
        // using the provided template with the wanted data
        createTemplate(heroObj)
          
    }

    function createTemplate(heroObj){
        //get the target element
        const target = document.getElementById("target");
        //cloning template
        const template = document.getElementById('tpl-hero').content.cloneNode(true);
        //select classes from templates nodetree
        const name = template.querySelector(".name");
        const alt = template.querySelector(".alter-ego");
        let abilities =  template.querySelector(".powers");
        //adding name, alter-ego, and powers
        name.innetText= heroObj.name;
        alt.innerText= heroObj.alterEgo;

        heroObj.abilities.forEach(element => {
          
           let br = document.createElement("br");
           let el = document.createTextNode(element);
           
           abilities.appendChild(el);
           abilities.appendChild(br);
           
        })
        //make the template the targets child. 
        target.appendChild(template);
    }

    // your code here
})();
