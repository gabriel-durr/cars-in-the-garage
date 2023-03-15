import { useAuth } from "@hooks/use-auth";
import { useUserData } from "@hooks/use-user-data";
import { FormChangePassword } from "@typings/form-types";

import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { useState } from "react";
import {
	Flex,
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

export const InputPassword = () => {
	const [isShowPassword, setIsShowPassword] = useState(true);

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isValid, isSubmitted },
	} = useForm<FormChangePassword>();

	const { updatePassword } = useUserData();
	const { authSignOut } = useAuth();

	const toast = useToast();

	const [currentPassword, newPassword] = watch([
		"currentPassword",
		"newPassword",
	]);

	const fiveSeconds = 5 * 1000;
	const errorExists = !!Object.keys(errors).length;
	const isDisabled = (isSubmitted && !isValid) || errorExists;

	async function handleOnSubmit({
		currentPassword,
		newPassword,
	}: FormChangePassword) {
		try {
			const msg = await updatePassword.mutateAsync({
				currentPassword,
				newPassword,
			});

			toast({
				title: msg,
				variant: "left-accent",
				isClosable: true,
				status: "success",
				position: "top",
				duration: fiveSeconds,
			});

			authSignOut();
		} catch (error: any) {
			const {
				data: { msg },
			} = error.response;

			toast({
				title: msg,
				variant: "left-accent",
				isClosable: true,
				status: "success",
				position: "top",
				duration: fiveSeconds,
			});
		}
	}

	return (
		<Flex as="form" direction="column" w="400px" gap="8">
			<FormControl display="flex" justifyContent="end">
				<FormLabel
					textTransform="uppercase"
					color="my.white"
					fontSize=".9rem"
					fontWeight="bold">
					Senha atual:
				</FormLabel>

				<VStack align="start" pos="relative">
					<Input
						type="text"
						variant="customLight"
						placeholder="Digite sua senha atual"
						fontSize=".8rem"
						{...register("currentPassword", {
							required: "É necessário informar sua senha atual",
							minLength: {
								value: 8,
								message: "Minimo de 8 Caracteres",
							},
						})}
					/>

					<Text
						color="my.error"
						h="17px"
						pos="absolute"
						bottom="-6"
						whiteSpace="nowrap">
						{errors.currentPassword && errors.currentPassword.message}
					</Text>
				</VStack>
			</FormControl>

			<FormControl display="flex" justifyContent="end">
				<FormLabel
					textTransform="uppercase"
					color="my.white"
					fontSize=".9rem"
					fontWeight="bold">
					Nova Senha:
				</FormLabel>

				<VStack align="start" pos="relative">
					<InputGroup>
						<Input
							type={isShowPassword ? "password" : "text"}
							variant="customLight"
							placeholder="Digite uma nova senha"
							fontSize=".8rem"
							{...register("newPassword", {
								required: "É necessário criar uma nova senha",
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
					<Text
						color="my.error"
						h="17px"
						pos="absolute"
						bottom="-6"
						whiteSpace="nowrap">
						{errors.newPassword && errors.newPassword.message}
					</Text>
				</VStack>
			</FormControl>

			<FormControl display="flex" justifyContent="end">
				<FormLabel
					textTransform="uppercase"
					color="my.white"
					fontSize=".9rem"
					whiteSpace="nowrap"
					fontWeight="bold">
					Confirmar Senha:
				</FormLabel>

				<VStack align="start" pos="relative">
					<Input
						type={isShowPassword ? "password" : "text"}
						variant="customLight"
						placeholder="Confirme sua nova senha"
						fontSize=".8rem"
						{...register("confirmNewPassword", {
							required: "É necessário confirmar a nova senha",
							validate: value =>
								value === newPassword || "As senhas não coincidem",
						})}
					/>

					<Text
						color="my.error"
						h="17px"
						pos="absolute"
						bottom="-6"
						whiteSpace="nowrap">
						{errors.confirmNewPassword && errors.confirmNewPassword.message}
					</Text>
				</VStack>
			</FormControl>

			<Button
				type="submit"
				isDisabled={isDisabled}
				pos="absolute"
				bottom="2"
				right="28%"
				variant="customLight"
				onClick={handleSubmit(handleOnSubmit)}>
				Alterar Informações
			</Button>
		</Flex>
	);
};
