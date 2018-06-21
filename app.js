App({
      onLaunch:function(){
        console.log(this.globalData);
        console.log("app onlaunch");
      },
      onShow:function(){
        console.log("app onshow");
      },
      onHide: function () {
        console.log("app onhide");
      },
      onError: function (msg) {
        console.log(msg)
      },
      globalData: 1
  });