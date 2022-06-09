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

  let appComputed = new Vue({
    el: '#app-computed',
    data: {
      int1: 1,
      int2: 4
    },
    computed: {
      sum: function(){
        return this.int1+this.int2;
      },
      umur: function(){
        let umurKata = '';
        if(this.int1 == 2){
          umurKata = 'umur satu bro';
        }else{
          umurKata = 'umur 2 bro' ;
        }
        return umurKata;
      },
      kelas: function(){
        let kelas = 'belum bisa masuk ya';
        if(this.sum <= 3){
          kelas = 'ini masuk kelas batita dan masuk balita';
        }else{
          kelas = 'udah bisa masuk sekolah ya';
        }
        return kelas;
      }
    }
  })