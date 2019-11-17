
function onListen(event){
	const audioSrc = event.currentTarget.getAttribute('data-audio-src')
	const { pageX, pageY } = event
	hideModal()
	modalContent(audioSrc, pageX, pageY)
}


function modalContent(audioSrc, pageX, pageY){
	const modal = document.querySelector('.modal')
	const _content = document.querySelector('.modal-content audio')
	_content.setAttribute('src', audioSrc)
	modal.style.left = pageX + 'px'
	modal.style.top = 10 + pageY + 'px'
	showModal()
}

function showModal(){
	document.querySelector('.modal').style.display = "block"
}


function hideModal(){
	document.querySelector('.modal').style.display = "none"
}

