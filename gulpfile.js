const gulp = require("gulp");
const babel = require("gulp-babel");

// Compile scripts.
gulp.task("scripts", function() {
	gulp.src("phoenix-socket.js")
   		.pipe(babel())
    	.pipe(gulp.dest("dist/"));
});
