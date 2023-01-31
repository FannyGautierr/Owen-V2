const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage :{
                "bgImg" : ["url('/Users/fannygautier/Desktop/repos/owen-v2/resources/img/background_star.png')"],
                "bg-owen" : ["url('/Users/fannygautier/Desktop/repos/owen-v2/resources/img/owen.png')"],
                "question" : ["url('/Users/fannygautier/Desktop/repos/owen-v2/resources/img/question.png')"]
            },
            backgroundColor :{
                "bg" :["#1A1A1A"]
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
