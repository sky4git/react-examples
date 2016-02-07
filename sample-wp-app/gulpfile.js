var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
//var browsersync  = require('browser-sync');
var babel = require('babelify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var watch = require('gulp-watch');
var notify = require("gulp-notify");

//browserify 
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./js/main.jsx'], // Only need initial file, browserify finds the deps
        transform: [[reactify, {"es6": true, "extension": "jsx"}]], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true, // Requirement of watchify
    }).on('error', function(err) {
            console.log('ohh error mate!');
            return notify().write(err);
    });
    var watcher  = watchify(bundler);
    
  //  browsersync.notify('Compiling JavaScript'); 
    
    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle().on('error', function(err) { return notify().write(err); }) // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
        // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/'));
        console.log('Updated! on '+getFormattedDate()+' in ', (Date.now() - updateStart) + 'ms');
       // notify().write('Browserify finished!');
    })
    .bundle().on('error', function(err) { return notify().write(err); }) // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'));
    // notify().write('Browserify finished!');
});


// compress task
gulp.task('compress', function() {
  gulp.src('build/main.js')
    .pipe(minify({  
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./build/'))
    console.log('compressed!');
    notify().write('compressed ready');
});

//watch task
gulp.task('watch', function(){
   gulp.watch(['js/*.jsx', 'js/**/*.jsx'], ['browserify']);
});

// get formatted date
function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;

    /*alert(str);*/

    return str;
}


gulp.task('default', ['browserify', 'watch']);

// Just running the two tasks
//gulp.task('default', ['browserify', 'watch']);