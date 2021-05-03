/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const input = document.getElementById("pass-one");
    let counter = document.getElementById("counter")
    input.oninput = (ev=> {
        const input = document.getElementById("pass-one");
        if (input.value.length > 9 ){
            input.value = input.value.substring(0,10)
        }
        counter.innerText= input.value.length+"/10";
    })

})();
