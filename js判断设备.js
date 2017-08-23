//  function IsPC() {
//      var userAgentInfo = navigator.userAgent;
//      var Agents = ["Android", "iPhone",
//          "SymbianOS", "Windows Phone",
//          "iPad", "iPod"
//      ];
//      var flag = true;
//      for (var v = 0; v < Agents.length; v++) {
//          if (userAgentInfo.indexOf(Agents[v]) > 0) {
//              flag = false;
//              break;
//          }
//      }
//      return flag;
//  }
//  if (!IsPC()) {
//      alert(1);
//  }

//  function isWeiXin() {
//      var ua = navigator.userAgent.toLowerCase();
//      if (ua.indexOf('micromessenger') != -1) {
//          return true;
//      } else {
//          return false;
//      }
//  }

//  var u = navigator.userAgent;
//  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
//      //安卓手机
//  } else if (u.indexOf('iPhone') > -1) {
//      //苹果手机
//  } else if (u.indexOf('Windows Phone') > -1) {
//      //winphone手机
//  }


(function() {
    var UA = {};
    var ua = navigator.userAgent.toLowerCase(),
        s;
    UA.ie = (s = ua.match(/(msie\s|trident.*rv:)([\d.]+)/)) ? parseInt(s[2]) : false;
    UA.firefox = (s = ua.match(/firefox\/([\d.]+)/)) ? parseInt(s[1]) : false;
    UA.chrome = (s = ua.match(/chrome\/([\d.]+)/)) ? parseInt(s[1]) : false;
    UA.opera = (s = ua.match(/opera.([\d.]+)/)) ? parseInt(s[1]) : false;
    UA.safari = (s = ua.match(/version\/([\d.]+).*safari/)) ? parseInt(s[1]) : false;
    UA.android = (s = ua.match(/android/)) ? s : false;
    UA.iphone = (s = ua.match(/iphone os/)) ? s : false;
    UA.ipad = (s = ua.match(/ipad/)) ? s : false;
    UA.ios = UA.ipad || UA.iphone;
    UA.isWin32 = /win32/i.test(window.navigator.platform);
    UA.isWeixin = (s = ua.match(/MicroMessenger/i)) ? !!s : false; //判断是否是在微信浏览器里面
    UA.isUcweb = (s = ua.match(/ucbrowser/)) ? !!s : false;
    UA.isMqq = (s = ua.match(/mqqbrowser/)) ? !!s : false; //是否是手机qq浏览器
    UA.isWeiBo = (s = ua.match(/__weibo__/)) ? !!s : false; //是否微博浏览器
    window.UA = UA;

    console.log(UA);
})();