import {QueryClient} from "@tanstack/react-query";

const sevenMinutes = 7 * 1000 * 60;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: sevenMinutes,
		},
	},
});

export {queryClient};
