define(function(require, exports, module) {
	require('vue');
	module.exports = {};
	new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue.js!'
		}
	});
});