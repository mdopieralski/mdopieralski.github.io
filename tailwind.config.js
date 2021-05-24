const { tailwindScreens } = require('./src/.vuepress/constants/screens');

module.exports = {
    purge: {
        content: [
            `/.src/**/*.@(js|ts|md|vue|html)`,
            `/.src/**/*.@(js|ts|md|vue|html)`,
        ],
    },
    theme: {
        colors: {
            black: '#000000',
            content: '#393939',
            gray: '#858585',
            white: '#FFFFFF',
            background: '#EDEDED',
        },
        screens: tailwindScreens,
        container: {
            center: true,
            screens: {
                mobile: '260px',
                tablet: '608px',
                desktop: '1114px',
            },
        },
        fontFamily: {
          logo: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
            '12': '1.2rem',
            '14': '1.4rem',
            '16': '1.6rem',
            '18': '1.8rem',
            '38': '3.8rem',
        },
        spacing: {
            0: 0,
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            13: '3.25rem',
            14: '3.5rem',
            15: '3.75rem',
            16: '4rem',
            17: '4.25rem',
            18: '4.5rem',
            19: '4.75rem',
            20: '5rem',
            24: '6rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            48: '12rem',
            56: '14rem',
            80: '20rem',
            full: '100%',
        },
    },
};


