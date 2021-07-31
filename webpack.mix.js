const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/Admin/css/font-awesome.min.css',
    'resources/Admin/css/simple-line-icons.min.css',
    'resources/Admin/dist/style.css',

], 'public/css/all.css')
    .scripts([
        'resources/Admin/js/libs/jquery.min.js',
        'resources/Admin/js/libs/bootstrap.min.js',

    ], 'public/js/all.js')
