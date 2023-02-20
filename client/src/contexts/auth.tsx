import {createContext, ReactNode} from "react";

type AuthProviderProps = {
	children: ReactNode;
};

const authContext = createContext({});

const AuthProvider = ({children}: AuthProviderProps) => {
	return (
		<authContext.Provider value={{user: "Gabriel"}}>
			{children}
		</authContext.Provider>
	);
};

export {authContext, AuthProvider};
