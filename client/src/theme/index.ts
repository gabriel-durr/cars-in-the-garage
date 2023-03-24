import { extendTheme } from "@chakra-ui/react";
import { components } from "./components-theme";

const colors = {
	my: {
		purple: "#5967b8",
		purpleHeader: "#322659",
		redLove: "#ef2159",
		greenLight: "#a9d4af",
		mustard: "#f7a716",
		error: "#b13026",
		titleFormPurple: "#5400e6",
		titleFormLight: "#e0e0e0",
		dark: "#000000d0",
		white: "#fdfcfc",
		light: "#fcfaf9",
		ashenGray: "#a7a198",
		goldenLight: "#F0E68C",
	},
};
const styles = {
	global: {
		body: {
			bg: "gray.200",
			color: "gray.700",
			fontSize: "0.88rem",
		},

		"*:focus-visible": {
			boxShadow: "0 0.5px 20px -2px #f7a716 !important",
			border: "1px solid #eeeeee !important",
			outlineColor: "my.mustard !important",
			outlineWidth: "2px !important",
		},

		a: {
			color: "my.purple",
			_hover: {
				textDecoration: "none !important",
			},
		},
	},
};
const fonts = {
	body: {
		fontFamily: "Roboto Slab, serif",
		fontWeight: 200,
	},
	heading: {
		fontFamily: "Oswald, sans-serif",
		fontWeight: 700,
	},
};

const breakpoints = {
	sm: "24.563em", // 393px
	md: "48em", //768px
	lg: "60em", //960px
	xl: "93.75em", //1500px
};

export const theme = extendTheme({
	fonts,
	colors,
	styles,
	components,
	breakpoints,
});
