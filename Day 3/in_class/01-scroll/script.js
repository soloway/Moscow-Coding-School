// HERE WILL BE SCROLL SCRIPT 
//◢♂◣◥♀◤◢♂◣◥♀◤

window.addEventListener('load', function(){
	const facebook = document.querySelector('.facebook')
	const instagram = document.querySelector('.instagram')
	const github = document.querySelector('.github')

	window.addEventListener('scroll', function(){
		const scrollPosition = window.scrollY
		facebook.style.transform = 'translateY(' + (-scrollPosition/2) + 'px)'
		instagram.style.transform = 'translateY(' + (-scrollPosition*3) + 'px)'
		github.style.transform = 'translateY(' + (-scrollPosition) + 'px)'
	})
})


// window.addEventListener('load', function(){
// 	const facebook = document.querySelector('.facebook')
// 	const instagram = document.querySelector('.instagram')
// 	const github = document.querySelector('.github')
// 	const facebookY = parseInt(getComputedStyle(facebook).top)
// 	const instagramY = parseInt(getComputedStyle(instagram).top)
// 	const githubY = parseInt(getComputedStyle(github).top)

// 	window.addEventListener('scroll', function(){
// 		const scrollPosition = window.scrollY
// 		facebook.style.top = facebookY + scrollPosition/2 + 'px'
// 		instagram.style.top = instagramY + scrollPosition/3 + 'px'
// 		github.style.top = githubY + scrollPosition*0.6 + 'px'
// 	})
// })