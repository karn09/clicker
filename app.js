var clicked = document.getElementById('kittyclick');
var clicked2 = document.getElementById('kittyclick2');


var insertClicks = document.getElementById('clickTime');
var insertClicks2 = document.getElementById('clickTime2');

var clickListener = function(clickElement, counterElement) {
    var timesClicked = 0
    clickElement.addEventListener('click', function() {
        timesClicked++
        counterElement.innerHTML = timesClicked;
        if (timesClicked > 20) {
            wtf()
        }
    })
}

clickListener(clicked,insertClicks)
clickListener(clicked2,insertClicks2)


function wtf() {
    console.log('wtf')
}