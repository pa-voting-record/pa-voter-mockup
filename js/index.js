'use strict';

(function() {

  //Profile Event Handler
  let login = document.getElementById('login')
  login.addEventListener('click', () => window.alert('Facebook OAuth Here'))

  //Article
  let article = iter => {
  	console.log("hey")
  	const container = document.getElementById('body_text')
  	const text = {
  		'start' : {
  			title : 'Start Screen',
  			text : 'Text Filler, Text Filler, Text Filler'
  		}
  	}
  	let title = text => { return ('<span class="card-title">' + text + '</span>') }
  	container.innerHTML = title(text[iter].title) + '<p>' + text[iter].text + '</p>'
  }

  article('start')

})()
