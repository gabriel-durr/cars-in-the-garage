import {QueryClient} from "@tanstack/react-query";

const oneSecond = 5 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 2,
			staleTime: oneSecond,
		},
	},
});

export {queryClient};
