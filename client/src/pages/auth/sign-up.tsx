import { useAuth } from "@hooks/use-auth";
import { FormAuthInputs } from "@typings/form-types";

import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { useState } from "react";
import {
	Text,
	Input,
	Button,
	VStack,
	useToast,
	FormLabel,
	InputGroup,
	FormControl,
	InputRightElement,
} from "@chakra-ui/react";

type SignUpProps = {
	setAuthAlternate: (value: boolean) => void;
};

export const SignUp = ({ setAuthAlternate }: SignUpProps) => {
	const [isShowPassword, setIsShowPassword] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
		watch,
	} = useForm<FormAuthInputs>();

	const toast = useToast();
	const { authRegister } = useAuth();

	const password = watch("password");
	const errorExists = !!Object.keys(errors).length;
	const isDesabled = !isDirty || errorExists;
	const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
	const fiveSeconds = 5 * 1000;

	async function handleOnSubmit({ name, email, password }: FormAuthInputs) {
		try {
			const msg = await authRegister({ name, email, password });

			toast({
				title: msg,
				variant: "left-accent",
				status: "success",
				position: "top",
				isClosable: true,
				duration: fiveSeconds,
			});

			setAuthAlternate(true);
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

	function handleAuthLogin() {
		setAuthAlternate(true);
	}

	return (
		<VStack w="100%" align="center">
			<VStack as="form">
				<FormControl isRequired>
					<FormLabel>Nome</FormLabel>
					<Input
						type="text"
						{...register("name", {
							required: "É necessário informar o nome!",
							minLength: {
								value: 3,
								message: "O nome deve ter pelo menos 3 caracters",
							},
							maxLength: {
								value: 50,
								message: "Tamanho máximo do nome é de 50 caracters",
							},
						})}
					/>
					<Text pt="4" color="my.error" fontSize="0.8rem">
						{errors.name && errors.name.message}
					</Text>
				</FormControl>

				<FormControl isRequired>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						{...register("email", {
							required: "Email Obrigatório!",
							pattern: {
								value: validateEmail,
								message: "Informe um email válido",
							},
						})}
					/>
					<Text pt="4" color="my.error" fontSize="0.8rem">
						{errors.email && errors.email.message}
					</Text>
				</FormControl>

				<FormControl isRequired>
					<FormLabel>Senha</FormLabel>
					<InputGroup>
						<Input
							type={isShowPassword ? "password" : "text"}
							placeholder="Crie uma senha"
							{...register("password", {
								required: "Para sua segurança, é importante criar uma senha!",
								minLength: {
									value: 8,
									message: "A senha deve ter no mínimo 8 caracters",
								},
								maxLength: {
									value: 16,
									message: "Tamanho máximo da senha é de 16 caraters",
								},
							})}
						/>
						<InputRightElement
							cursor="pointer"
							children={isShowPassword ? <FaEyeSlash /> : <FaEye />}
							onClick={() => setIsShowPassword(!isShowPassword)}
							aria-label={isShowPassword ? "Esconder senha" : "Mostrar senha"}
							h="100%"
						/>
					</InputGroup>
					<Text color="my.error" pt="4">
						{errors?.password && errors.password.message}
					</Text>
				</FormControl>

				<FormControl isRequired>
					<FormLabel>Confirmar Senha</FormLabel>
					<Input
						type={isShowPassword ? "password" : "text"}
						placeholder="Cofirme a senha"
						aria-label={
							isShowPassword
								? "Esconder confirmação de senha"
								: "Mostrar senha confirmação de senha"
						}
						{...register("confirmPassword", {
							required: "Confirme a Senha!",
							validate: value =>
								value === password || "As senhas não coincidem",
						})}
					/>
					<Text pt="4" color="my.error" fontSize="0.8rem">
						{errors?.confirmPassword && errors.confirmPassword.message}
					</Text>
				</FormControl>
			</VStack>

			<Button
				bg="my.redLove"
				variant="customLight"
				color="whiteAlpha.800"
				_hover={{
					bg: "my.red_love",
					filter: "brightness(1.3)",
					color: !isDesabled && "my.mustard",
					transition: "all .4s",
				}}
				isDisabled={isDesabled}
				isLoading={isSubmitting}
				onClick={handleSubmit(handleOnSubmit)}>
				Cadastrar
			</Button>

			<Text>
				Já possui Cadastro?{" "}
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
					onClick={handleAuthLogin}>
					Faça Login!
				</Text>
			</Text>
		</VStack>
	);
};
