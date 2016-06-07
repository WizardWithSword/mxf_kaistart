module.exports = function(grunt) {
	// Do grunt-related things in here
	// Project configuration.
	grunt.initConfig({
		concat: {
			// 这里是concat任务的配置信息。
		},
		uglify: {
			// 这里是uglify任务的配置信息
			src: ['js/*.js', 'static/**/*.js'],
			dest: ['js/all.js']
		},
		// 任意数据。
		my_property: 'whatever',
		my_src_files: ['js/*.js', 'static/**/*.js'],
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};