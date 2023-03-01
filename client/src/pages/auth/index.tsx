import {SignIn} from "./sign-in";
import {SignUp} from "./sign-up";
import {getTokensOrUserId} from "../../storage/storageAuthToken";

import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Image, Text, Heading, VStack, HStack, Tooltip} from "@chakra-ui/react";

export const Auth = () => {
	const [authAlternate, setAuthAlternate] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = getTokensOrUserId("acessToken");
		if (token) navigate("/garage");
	}, []);

	return (
		<VStack
			m="1% auto"
			spacing="12"
			align="center"
			w="container.sm"
			bg="whiteAlpha.300"
			shadow="sm"
			p="6">
			<Heading as="h2" size="md" textTransform="uppercase">
				{authAlternate ? "Login" : "Cadastro"}
			</Heading>
			{authAlternate ? (
				<SignIn setAuthAlternate={setAuthAlternate} />
			) : (
				<SignUp setAuthAlternate={setAuthAlternate} />
			)}

			{authAlternate && (
				<Tooltip label="Funcionalidade de recuperação de conta será adicionada em breve.">
					<Text color="my.purple" fontWeight="bold" cursor="not-allowed">
						Esqueceu seu e-mail ou senha?
					</Text>
				</Tooltip>
			)}

			<VStack w="100%" spacing="8">
				<Text fontWeight="medium">Logar com</Text>
				<Tooltip label="Login Social será adicionado em breve. Crie uma conta ou faça login pelo formulário.">
					<HStack spacing="4" cursor="not-allowed">
						<Image w="12" src="/auth-social/facebook.svg" />
						<Image w="12" src="/auth-social/linkedin.svg" />
						<Image cursor="not-allowed" w="12" src="/auth-social/google.svg" />
					</HStack>
				</Tooltip>
			</VStack>
		</VStack>
	);
};
