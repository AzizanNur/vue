var app = new Vue({
    el: '#app',
    data: {
      // show: true, //way data is boolean
      //show: false, //way data is opposite in html use !
      //show: 'ready', //other way if data is not boolean
      show:true,
      message: 'Hello World! Pasti bisa',
      message2: 'Hello Vue!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })