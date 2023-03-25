import { useAuth } from "@hooks/use-auth";
import { FormAuthInputs } from "@typings/form-types";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
	Text,
	Input,
	Button,
	VStack,
	useToast,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";
import { getTokensOrUserId } from "@storage/storageAuthToken";

type SignInProps = {
	setAuthAlternate: (value: boolean) => void;
};

type FormAuthLoginInputs = Pick<FormAuthInputs, "email" | "password">;

export const SignIn = ({ setAuthAlternate }: SignInProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<FormAuthLoginInputs>();

	const { authLogin, isLoading } = useAuth();
	const navigate = useNavigate();
	const toast = useToast();

	const fiveSeconds = 5 * 1000;
	const errorExists = !!Object.keys(errors).length;
	const isDesableButton = !isDirty || errorExists;
	const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

	async function handleOnSubmit({ email, password }: FormAuthLoginInputs) {
		try {
			const msg = await authLogin({ email, password });

			toast({
				title: msg,
				variant: "left-accent",
				status: "success",
				position: "top",
				isClosable: true,
				duration: fiveSeconds,
			});

			navigate("/dashboard-garage");
		} catch (error: any) {
			const {
				data: { msg },
			} = error.response;

			toast({
				title: msg,
				variant: "left-accent",
				status: "error",
				position: "top",
				isClosable: true,
				duration: fiveSeconds,
			});
		}
	}

	function handleAuthRegister() {
		setAuthAlternate(false);
	}

	return (
		<VStack w="100%" align="center">
			<VStack as="form">
				<FormControl>
					<FormLabel fontSize={{ base: ".92rem", md: ".98rem" }}>
						Email
					</FormLabel>
					<Input
						type="email"
						{...register("email", {
							required: "Email obrigatório!",
							pattern: {
								value: validateEmail,
								message: "Por favor, insira um endereço de email válido",
							},
						})}
					/>
					<Text color="my.error" pt="4">
						{errors?.email && errors.email.message}
					</Text>
				</FormControl>
				<FormControl>
					<FormLabel fontSize={{ base: ".92rem", md: ".98rem" }}>
						Senha
					</FormLabel>
					<Input
						type="password"
						{...register("password", {
							required: "Senha obrigatória!",
						})}
					/>
					<Text color="my.error" pt="4">
						{errors?.password && errors.password.message}
					</Text>
				</FormControl>
			</VStack>

			<Button
				isLoading={isLoading}
				variant="customLight"
				color="whiteAlpha.800"
				bg="my.redLove"
				_hover={{
					bg: "my.redLove",
					filter: "brightness(1.3)",
					color: !isDesableButton && "my.mustard",
					transition: "all .4s ease",
				}}
				isDisabled={isDesableButton}
				onClick={handleSubmit(handleOnSubmit)}>
				Login
			</Button>
			<Text>
				Não possui conta?{" "}
				<Text
					as="span"
					color="my.purple"
					cursor="pointer"
					fontWeight="bold"
					_hover={{
						filter: "brightness(0.2)",
						transition: "filter .4s",
					}}
					textDecoration="underline"
					textDecorationStyle="dotted"
					textDecorationColor="blue.700"
					onClick={handleAuthRegister}>
					Registre-se
				</Text>
			</Text>
		</VStack>
	);
};
