define(function(require, exports, module) {
  require('../css/index.css');
	var Vue = require('vue');
  // var qrcode = require('arale-qrcode');
  var res = require('../res/res.json')
  console.log(res)
  // var qrnode = new qrcode({
  //     text: 'http://www.kaistart.com/',
  //     size:200,
  //     image: 'http://kaiman.kaistart.com/project-code.png',
  //     imageSize: 30
  // });

  // var qrnode1 = new qrcode({
  //     text: 'http://www.kaistart.com/?from=yirenyicheng',
  //     size:220,
  //     image: 'http://kaiman.kaistart.com/project-code.png',
  //     imageSize: 35
  // });
  // document.getElementById('qrcodeDefault').appendChild(qrnode)
  // document.getElementById('qrcodeDefault').appendChild(qrnode1);
	module.exports = {};
  var data = Object.assign({}, res.posion)
	var vv = new Vue({
		el: '#app',
		data: {
      posion : data[0]
    },
    ready: function () {
      consoel.log('ready!!!')
    }
	});
  console.log(vv);
});