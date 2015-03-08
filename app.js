
/*var clickListener = function(clickElement, counterElement) {
    var timesClicked = 0
    clickElement.addEventListener('click', function() {
        timesClicked++
        counterElement.innerHTML = timesClicked;
    })
}
*/
/*var picTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};*/
/*for (var i = 0; i < catsArray.length; i++) {
    var cat = catsArray[i];
    cat.addEventListener('click', (function(i) {
        return function() {
            var picNum = i + 1;
            imgDiv.src = "./cat" + picNum + ".jpg";
            return imgDiv.addEventListener('click', (function(pic) {
                return function() {

                    picTracker[pic]++;
                    console.log(picTracker)
                }
            })(picNum))
        }
    })(i))
}*/

/*.addEventListener('click', (function(img) {
    return function() {
		console.log(img)
        num++;
        console.log(num);
    }
})(imgStor))
*/

/*
    var imgClick = function(img, picNum) {

        img.addEventListener('click', function(imgCopy) {
            var num = 0;
            return function() {
                num++;
                console.log(" was clicked " + num + " times.");
            }
        })(img)

    }*/


var model = {
	currentCat: null,
	cats: [
		{
			clickCount : 0,
			name: 'Cat1',
			imgSrc: 'cat1.jpg'
		},{
			clickCount : 0,
			name: 'Cat2',
			imgSrc: 'cat2.jpg'
		},{
			clickCount : 0,
			name: 'Cat3',
			imgSrc: 'cat3.jpg'
		},{
			clickCount : 0,
			name: 'Cat4',
			imgSrc: 'cat4.jpg'
		},{
			clickCount : 0,
			name: 'Cat5',
			imgSrc: 'cat5.jpg'
		}
	]
};

var control = {
	init: function() {
		model.currentCat = model.cats[0]

		catList.init();
		catView.init();
	},

	getCurrent: function () {
		return model.currentCat;
	},

	setCurrent: function (cat) {
		model.currentCat = cat;
	},

	getList: function () {
		return model.cats;
	},

	increment: function () {
		model.currentCat.clickCount++;
		catView.render();
	}
}

/*
Views
*/

var catView = {
	init: function () {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('catName');
		this.catImgElem = document.getElementById('catImg');
		this.countElem = document.getElementById('counter');
	
		this.catImgElem.addEventListener('click', function () {
			control.increment();
		})

		this.render();
	},

	render: function () {
		var	currentCat = control.getCurrent();
		this.countElem.textContent = currentCat.clickCount
		this.catNameElem.textContent = currentCat.name;
		this.catImgElem.src = currentCat.imgSrc;
	}
}

var catList = {
	init: function () {
		this.catListElem = document.getElementById('catList');

		this.render();
	},

	render: function () {
		var cat, elem;
		var cats = control.getList();

		this.catListElem.innerHTML = '';

		for (var i = 0; i < cats.length; i++) {
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function (copyCat) {
				return	function  () {
					console.log(control.getCurrent())
					control.setCurrent(copyCat);
					catView.render();
				}
			})(cat))

			this.catListElem.appendChild(elem);
		}
	}
}

control.init();