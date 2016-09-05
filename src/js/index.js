define(function(require, exports, module) {
	require('vue');
  var qrcode = require('arale-qrcode');
  var qrnode = new qrcode({
      text: 'http://www.kaistart.com/',
      size:200,
      image: 'http://kaiman.kaistart.com/project-code.png',
      imageSize: 30
  });

  var qrnode1 = new qrcode({
      text: 'http://www.kaistart.com/?from=yirenyicheng',
      size:200,
      image: 'http://kaiman.kaistart.com/project-code.png',
      imageSize: 30
  });

  document.getElementById('qrcodeDefault').appendChild(qrnode)
  document.getElementById('qrcodeDefault').appendChild(qrnode1);
	module.exports = {};
	new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue.js!'
		}
	});
});