
window.addEventListener('load', function(){
	let $ = function(selector){
		return document.querySelector(selector);
	}

	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0

	rightArrow.addEventListener('click', function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	leftArrow.addEventListener('click', function(){
		Counter = Counter-5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	let homeBtn = document.querySelector('.home')
	homeBtn.addEventListener('click', function(){
		window.open()
	})
	let winBtn = document.querySelector('.window')
	winBtn.addEventListener('click', function(){
		window.open()
	})

})