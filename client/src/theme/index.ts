import {extendTheme} from "@chakra-ui/react";

const colors = {
	my: {
		purple: "#5967b8",
		red_love: "#ef2159",
		green_light: "#a9d4af",
		mustard: "#f7a716",
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

const styles = {
	global: {
		body: {
			bg: "gray.200",
			color: "gray.700",
			fontSize: "0.88rem",
		},

		a: {
			color: "teal.500",
			_hover: {
				textDecoration: "underline",
			},
		},
	},
};

export const theme = extendTheme({
	fonts,
	colors,
	styles,
});
