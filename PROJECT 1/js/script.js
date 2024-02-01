
//Button Listing
const arrayofLetters = ["fa-star", "fa-gift", "fa-heart", "fa-lemon", "fa-star", "fa-gift", "fa-heart", "fa-lemon",
"fa-sun","fa-crown","fa-infinity","fa-ice-cream","fa-sun","fa-crown","fa-infinity","fa-ice-cream"];
const buttons = document.querySelectorAll('.button-row button');

//timer
let timer = document.querySelector('#timer');
let timerValue = 60;
timer.innerHTML = timerValue;

const countDown = setInterval(function(){
if(timerValue>0){
    timerValue--;
timer.innerHTML = timerValue;
}

if(timerValue === 0){
clearInterval(countDown);
alert("You Have Lost");
location.reload();


}else if(document.querySelectorAll('.button-row button').length === 0){
alert('You Have Won')
clearInterval(countDown);
location.reload()

}
},1000);



let lastClickedButton = null;

for (let i = 0; i < buttons.length; i++) {
    const randomIndex = Math.floor(Math.random() * arrayofLetters.length);
    const randomIcon = arrayofLetters.splice(randomIndex, 1)[0];

    buttons[i].innerHTML = `<i class="fas ${randomIcon}"></i>`;
    //buttons[i].textContent = randomLetter;

    
   
   
    buttons[i].addEventListener('click', function() {
        // Check if the button is already disabled
        if (this.disabled) {
            return; // Do nothing if the button is disabled
        }

        // Check if the current click matches the last clicked button
        //if (lastClickedButton && this.textContent === lastClickedButton.textContent)
        if (lastClickedButton && this.children[0].className === lastClickedButton.children[0].className) {
            // Remove both buttons with the same value
            this.remove();
            lastClickedButton.remove();

           
            
            // Reset the last clicked button to null
            lastClickedButton = null;
        } else {
            // Disable the current button
            this.disabled = true;

            // If there was a previous click, enable its button
            if (lastClickedButton) {
                lastClickedButton.disabled = false;
            }

            // Set the last clicked button to the current one
            lastClickedButton = this;
        }
    });
}










// if (lastClickedButton && this.textContent === lastClickedButton.textContent) {
            //     this.remove();
            //     lastClickedButton.remove();

       