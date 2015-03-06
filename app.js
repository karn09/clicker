var catsArray = document.getElementsByTagName('li')

/*var clickListener = function(clickElement, counterElement) {
    var timesClicked = 0
    clickElement.addEventListener('click', function() {
        timesClicked++
        counterElement.innerHTML = timesClicked;
    })
}
*/
for (var i = 0; i < catsArray.length; i++) {
	var cat = catsArray[i];
	cat.addEventListener('click', (function(copyCat) {
		var num = 0;
		return function () {
			num++;
			console.log(copyCat.innerText + ": " +num);
		}
	})(cat))
}