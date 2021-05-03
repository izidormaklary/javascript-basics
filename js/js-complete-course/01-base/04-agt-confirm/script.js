/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var age;
    var gender;
    var hometown;
    var askAgain = true;
    while (askAgain == true) {
        age = prompt("How old are you?");
        gender = prompt("Gender");
        hometown = prompt("Where do you live");
        var confirm = window.confirm("Age:" + age + "\nGender:" + gender + "\nHometown:" + hometown);

        if (confirm == true){
            askAgain = false;
        }
        else {
            askAgain = true;
        }
    }
})();
