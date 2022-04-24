//document.getElementById("count-el").innerText = 5;

//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

//function to increment the people entered when the button is clicked
function increment() {
    count = count + 1
    countEl.innerText = count
}

//function which logs out the count when it's called

let saveEl = document.getElementById("save-el")
function save() {
    //create a variable that contains both the count and dash separator, i.e. "12 - "
    let countVal = count + " - "
    //render the variable in the saveEl using innerText
    //NB: make sure to not delete the existing content of the paragraph
    saveEl.textContent += countVal 
    //Reset count to 0 to begin counting afresh next time
    count = 0
    //Display zero on the screen
    countEl.innerText = count
}
