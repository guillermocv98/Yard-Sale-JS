const { src, dest, watch, series, parallel } = require('gulp');

//CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

// IMG 
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css() {
    // 1. Identificar archivo
    return src( 'src/scss/app.scss' )
    // 2. Crear el mapa
        .pipe( sourcemaps.init() )
    // 3. Compilar el archivo 
        .pipe( sass( { outputStyle: 'compressed' } ) ) // { outputStyle: 'compressed' }
    // 4. Optimizar el código
        .pipe( postcss( [ autoprefixer(), cssnano() ] ) )
    // 5. Guardamos el mapa
        .pipe( sourcemaps.write('.') )
    // 6. Guardar el .css
        .pipe( dest( 'build/css' ) )
}


function img() {
    return src( 'src/img/**/* ' )
    .pipe( imagemin( { optimizacionLevel: 3} ) )
    .pipe( dest( 'build/img' ) );
}

function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src( 'src/img/**/*.{png,jpg}' )
    .pipe( webp( opciones ) )
    .pipe( dest( 'build/img' ) )
}

function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src( 'src/img/**/*.{png,jpg}' )
    .pipe( avif( opciones ) )
    .pipe( dest( 'build/img' ) );
}



function dev() {
    watch( 'src/scss/**/*.scss', css);
    watch( 'src/img/**/*', img);
    
};
exports.css = css;
exports.img = img;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = dev;
exports.default = series( img, versionWebp, versionAvif, css, dev );

// series - Va por orden, cuando termina una empieza la otra
// parallel - Ejecuta de forma paralela