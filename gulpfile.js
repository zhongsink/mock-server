const path = require('path');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const server = path.resolve(__dirname, 'mock');

gulp.task('mock', ['nodemon'], function () {
    gulp.watch(['./mock/db.js', './mock/**']);
});

// listener
gulp.task('nodemon', function (cb) {
    let started = false;
    let stream = nodemon({
        script: './index.js',
        // listen .js
        ext: "js",
        env: {
            'NODE_ENV': 'development'
        },
        // listen path
        watch: [
            server
        ]
    });
    stream.on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    }).on('crash', function () {
        console.error('application has crashed!\n')
        stream.emit('restart', 10)
    })
});