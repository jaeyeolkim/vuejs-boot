var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js!',
    list: ['사과', '바나나', '딸기'],
    count: 1,
    show: true
  },
  methods: {
    handleClick: function (event) {
      console.log('click');
    }
  }
});