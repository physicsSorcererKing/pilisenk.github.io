window.onload = init;

function init(evt) {
    console.log("Page Loaded!");
	let myButton_01 = document.querySelector('#myButton_01');
	//let p = document.querySelector('body p');
	let yourX = document.querySelector('#yourX');
	let x = myButton_01.x;

    myButton_01.addEventListener("click", function(evt) {
        yourX.innerHTML = "You just clicked!<br>";
        console.log("You just clicked!");
    });
    myButton_01.addEventListener("mousemove", function(evt) {
        yourX.innerHTML = "You just moved! x=" + evt.clientX;
        console.log("You just moved! x=" + evt.clientX );
    });
}
