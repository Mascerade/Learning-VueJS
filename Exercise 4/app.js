new Vue({
  el: '#exercise',
  data: {
    hBool: true,
    sBool: false,
    userTF: true,
    userClass2: "",
    userClass: "",
    anotherColor: "",
    widthValue: ""
  },
  
  methods: {
    startEffect: function() {
      vm = this;
      setInterval(function() {
        if (vm.hBool) {
          vm.hBool = false;
          vm.sBool = true;
          console.log("here")
        }
        else {
          vm.sBool = false;
          vm.hBool = true;
          console.log("there")
        }
      }, 1000)
    },

    startProgress: function() {
      vm = this;
      width = 0
      setInterval(function() {
        if (width < 1000) {
          width += 1;
          vm.widthValue = width + "px"
          console.log(vm.widthValue)
        }

      }, 50);
    }
  }
});
