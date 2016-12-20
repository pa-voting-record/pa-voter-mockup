'use strict';

(function() {
  //namespace for all app data
  document.app = {}

  //Profile Event Handler
  let login = document.getElementById('login')
  login.addEventListener('click', () => window.alert('Facebook OAuth Here'))

  //Article
  document.app.article_state = 0 //Should always be an int
  let article = iter => {
  	const container = document.getElementById('body_text')
  	const text = [
      {
    			title : 'Start Screen',
    			text : 'Text Filler, Text Filler, Text Filler'
    	},
      {
        title : 'Logged In',
        text : 'Finding your voting Record'
      },
      {
        title : 'Calculating Your Voting Record',
        text : 'Please wait while we get your badge'
      }
    ]
    if (iter >= text.length) {
      let cur = text.length - 1
      iter = cur
      document.app.article_state = cur
    }
    if (iter < 0) {
      iter = 0
      document.app.article_state = 0
    }
  	let title = text => { return ('<span class="card-title">' + text + '</span>') }
  	container.innerHTML = title(text[iter].title) + '<p>' + text[iter].text + '</p>'
  }

  //Article Event listener
   document.body.addEventListener("keypress", e => {
      console.log("It's Firing")
      console.log(document.app.article_state)
      switch(e.charCode) {
        case 13:
          document.app.article_state++
          break
        case 32:
          document.app.article_state++
          break
        case 98:
          document.app.article_state--
          break
      }
      article(document.app.article_state)
    })
   article(document.app.article_state)

})()
