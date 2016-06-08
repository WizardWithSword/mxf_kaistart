module.exports = function(grunt) {
	// Do grunt-related things in here
	// Project configuration.
	grunt.initConfig({
		// concat: {
		// 	// 这里是concat任务的配置信息。
		// },
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			// 这里是uglify任务的配置信息
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['src/**/**.js'],
				dest: 'dist/js/all.js'
			}
		},
		// 任意数据。
		my_property: 'whatever',
		my_src_files: ['src/**/*.js']

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify']);
};