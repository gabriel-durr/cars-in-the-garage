import {FormAuthInputs} from "../../@types";
import {useAuth} from "../../hooks/use-auth";

import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {
	FormControl,
	FormLabel,
	Input,
	Button,
	VStack,
	Text,
	useToast,
} from "@chakra-ui/react";

type SignInProps = {
	setAuthAlternate: (value: boolean) => void;
};

type FormAuthLoginInputs = Pick<FormAuthInputs, "email" | "password">;

export const SignIn = ({setAuthAlternate}: SignInProps) => {
	const {
		register,
		handleSubmit,
		formState: {errors, isDirty},
	} = useForm<FormAuthLoginInputs>();
	const {authLogin} = useAuth();
	const navigate = useNavigate();
	const toast = useToast();

	const errorExists = !!Object.keys(errors).length;
	const isDesableButton = !isDirty || errorExists;
	const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
	const sevenSeconds = 7000;

	async function handleOnSubmit({email, password}: FormAuthLoginInputs) {
		try {
			await authLogin({email, password});

			navigate("/garage");
		} catch (error: any) {
			toast({
				title: "Erro ao fazer login",
				description: `${error?.response?.data?.msg}`,
				variant: "left-accent",
				position: "top",
				status: "error",
				duration: sevenSeconds,
				isClosable: true,
			});
		}
	}

	function handleAuthRegister() {
		setAuthAlternate(false);
	}

	return (
		<VStack w="70%">
			<VStack as="form" w="100%">
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						{...register("email", {
							required: "Email obrigatório!",
							pattern: {
								value: validateEmail,
								message:
									"Email inválido. Por favor, insira um endereço de email válido",
							},
						})}
					/>
					<Text color="red.800" pt="4">
						{errors?.email && errors.email.message}
					</Text>
				</FormControl>
				<FormControl>
					<FormLabel>Senha</FormLabel>
					<Input
						type="password"
						{...register("password", {
							required: "Senha obrigatória!",
						})}
					/>
					<Text color="red.800" pt="4">
						{errors?.password && errors.password.message}
					</Text>
				</FormControl>
			</VStack>

			<Button
				w="100%"
				bg="my.red_love"
				_hover={{
					bg: "my.red_love",
					filter: "brightness(1.3)",
					color: !isDesableButton && "my.mustard",
					transition: "all .4s ease",
				}}
				rounded="0"
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
