/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.getElementById("target");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");



    for (i =1; i<11 ; i++){
        const row = document.createElement("tr");

        for (f =1; f<11 ; f++) {
            const cell = document.createElement("td");
            let cellText = document.createTextNode(i*f);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }



    table.appendChild(tbody);
    target.appendChild(table);

})();
