let project_folder = 'dist',
    source_folder = 'src';


let path = {
    build:{
        html:`${project_folder}/`,
        css:`${project_folder}/css/`,
        js:`${project_folder}/js`,
        img:`${project_folder}/img/`
    },
    src:{
        html:`${source_folder}/*.html`,
        scss:`${source_folder}/scss/style.scss`,
        js:`${source_folder}/js/script.js`,
        img:`${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`
    },
    watch:{
        html:`${source_folder}/**/*.html`,
        css:`${source_folder}/scss/**/*.scss`,
        js:`${source_folder}/js/**/*.js`,
        img:`${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`
    },
    clean:`./${project_folder}/`
}


let {src,dest} = require('gulp'),
    gulp = require('gulp'),
    del = require('del'),
    browsersync = require('browser-sync').create();

function browserSync(){
    browsersync.init({
        server:{
            baseDir:`./${project_folder}/`
        },
        port:3000,
        notify:false
    })
}

function html(){
    return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function watchFiles(){
    gulp.watch([path.watch.html],html)
}

let build = gulp.series(html)
let watch = gulp.parallel(build,browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

