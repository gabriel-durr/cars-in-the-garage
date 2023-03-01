import {FormAuthInputs} from "../../@types";
import {useAuth} from "../../hooks/use-auth";

import {useState} from "react";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {
	Input,
	FormLabel,
	FormControl,
	Button,
	Text,
	VStack,
	useToast,
	InputGroup,
	InputRightElement,
	IconButton,
} from "@chakra-ui/react";

type SignUpProps = {
	setAuthAlternate: (value: boolean) => void;
};

export const SignUp = ({setAuthAlternate}: SignUpProps) => {
	const [showPassword, setShowPassword] = useState(true);

	const {
		register,
		handleSubmit,
		formState: {errors, isDirty, isSubmitting},
		watch,
	} = useForm<FormAuthInputs>();

	const toast = useToast();
	const {authRegister} = useAuth();

	const password = watch("password");
	const errorExists = !!Object.keys(errors).length;
	const isDesableButton = !isDirty || errorExists;
	const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
	const sevenSeconds = 7000;

	async function handleOnSubmit({name, email, password}: FormAuthInputs) {
		try {
			const res = await authRegister({name, email, password});

			toast({
				title: `${res} 🎉🎉`,
				description: "Agora basta fazer o login e personalizar sua garagem",
				variant: "left-accent",
				position: "top",
				status: "success",
				duration: sevenSeconds,
				isClosable: true,
			});

			setAuthAlternate(true);
		} catch (error) {
			console.log(error);
		}
	}

	function handleAuthLogin() {
		setAuthAlternate(true);
	}

	return (
		<VStack w="70%">
			<VStack as="form" w="100%">
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
					<Text color="red.800" pt="4">
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
					<Text color="red.800" pt="4">
						{errors.email && errors.email.message}
					</Text>
				</FormControl>

				<FormControl isRequired>
					<FormLabel>Senha</FormLabel>
					<InputGroup>
						<Input
							type={showPassword ? "password" : "text"}
							placeholder="Confirme sua senha"
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
						<InputRightElement>
							<IconButton
								aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
								onClick={() => setShowPassword(!showPassword)}
								icon={showPassword ? <FaEyeSlash /> : <FaEye />}
								variant="ghost"
							/>
						</InputRightElement>
					</InputGroup>
					<Text color="red.800" pt="4">
						{errors?.password && errors.password.message}
					</Text>
				</FormControl>

				<FormControl isRequired>
					<FormLabel>Confirmar Senha</FormLabel>
					<Input
						type={showPassword ? "password" : "text"}
						aria-label={
							showPassword
								? "Esconder confirmação de senha"
								: "Mostrar senha confirmação de senha"
						}
						{...register("confirm_password", {
							required: "Confirme a Senha!",
							validate: value =>
								value === password || "As senhas não coincidem",
						})}
					/>
					{errors?.confirm_password && errors.confirm_password.message}
				</FormControl>
			</VStack>

			<Button
				w="100%"
				bg="my.red_love"
				_hover={{
					bg: "my.red_love",
					filter: "brightness(1.3)",
					color: !isDesableButton && "my.mustard",
					transition: "all .4s",
				}}
				rounded="0"
				isDisabled={isDesableButton}
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
