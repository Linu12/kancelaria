import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            darkMode: 'media',
            backgroundSize: {
                '50-auto': '50% auto',
                '75-auto': '75% auto',
            },
            transitionDuration: {
                '2000': '2000ms',
            },
            colors: {
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px  purple',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'], // Custom font example
            },
            fontFfamily: {
                garmond: ['EB Garamond', 'serif'],
            },

            corePlugins: {
                transform: true,
                transitionProperty: true,
            },
        },
    },
    plugins: [
        typography
    ],
}