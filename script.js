

function changeColor(clickedDiv) {
    clickedDiv.classList.toggle('active');
}

const default_page = document.getElementById("default");
const second_page = document.getElementById("wrapper")
const submit_button = document.getElementById("submit-button");
const ratingButtons = document.getElementsByClassName("rating-div");
const selectionText = document.getElementById("selection-text");
const rating_color = "rgb(251, 116, 19)"
function hasDuplicates(object) {
    const valuesSet = new Set(Object.values(object));
    return valuesSet.size !== Object.keys(object).length;
  }

  
// function to check values
function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
function hasMultipleOranges(obj) {
    let orangeCount = 0;
  
    for (const value of Object.values(obj)) {
      if (value === "rgb(251, 116, 19)") {
        orangeCount++;
        if (orangeCount > 1) {
          return true;
        }
      }
    }
    return false;
}

function checkSubmission() {
    let button_colors = {};
    for (let i = 1; i < 6; i++) {
        var button_color = window.getComputedStyle(ratingButtons[i]).getPropertyValue('background-color');
        var button_number = ratingButtons[i].childNodes[0].innerHTML;
        button_colors[button_number] = button_color;
    }
    console.log(Object.values(button_colors)[0])
    if (hasMultipleOranges(button_colors)) {
        alert("Please only pick one option");
    }
    else if (Object.values(button_colors).includes(`${rating_color}`)) {
        selectionText.innerHTML = `You selected ${getKeyByValue(button_colors, rating_color)} out of 5`;
        default_page.style.display = "none";
        second_page.style.display = "flex";
    }

}

submit_button.addEventListener("click", checkSubmission)
