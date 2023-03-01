import {QueryClient} from "@tanstack/react-query";

const fiveSeconds = 5 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: fiveSeconds,
		},
	},
});

export {queryClient};
