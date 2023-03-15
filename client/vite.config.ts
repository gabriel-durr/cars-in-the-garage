import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	envPrefix: "CIG_",
	server: {
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: {
			"@hooks": "/src/hooks",
			"@utils": "/src/utils",
			"@pages": "/src/pages",
			"@storage": "/src/storage",
			"@typings": "/src/typings",
			"@theme": "/src/theme",
			"@components": "/src/components",
			"@animations": "/src/animations",
		},
	},
});
