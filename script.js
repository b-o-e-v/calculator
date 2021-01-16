let calc = document.getElementById("calc");
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("calculator__button");
let str = "";

for (let i = 0; i < buttons.length; i++) {
    addEvent(buttons[i]);
}
function addEvent(button) {
    button.addEventListener('click', event);
    function event() {
        let type = button.getAttribute('data-type');
        if (type === '=') {
            str = eval(str);
            display.value = str;
            return;
        } else if (type === 'C') {
            str = '';
        } else {
            str += type;
        }
        display.value = str;
    }
}