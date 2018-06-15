'use strict';
// Colors used in 9009
const black = '#171718';  // CR
const green = '#768e72';  // 3B
const red = '#c87e74';  // 3A

// Colors from GMK Swatch
const white = '#f7f2ea';  // WS1
const yellow = '#e5a100';  // N6
const blue = '#00589f';  // V4
const magenta = '#cb3d6e';  // MG1
const cyan = '#0084c2';  // N5

const foregroundColor = black;
const backgroundColor = white;


exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: backgroundColor,
	cursorColor: '#97979b',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		lightBlack: black,
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: white
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}

		/* Allow custom css / overrides */
		${config.css}
	`
});
