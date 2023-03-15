import { useUserData } from "@hooks/use-user-data";
import { FormEditInputs } from "@typings/form-types";
import { formatBitcoin } from "@utils/format-bitcoin";
import { EditableInput } from "@components/editable-input";

import { useForm } from "react-hook-form";

import {
	Text,
	Modal,
	Button,
	VStack,
	useToast,
	FormLabel,
	ModalBody,
	FormControl,
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalOverlay,
	ModalCloseButton,
} from "@chakra-ui/react";

type EditProps = {
	_id: string;
	description: string;
	price: string;
	isOpenUp: boolean;
	onCloseUp: () => void;
};

export const ModalUpdate = ({
	_id,
	description,
	price,
	isOpenUp,
	onCloseUp,
}: EditProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<FormEditInputs>();

	const toast = useToast();
	const { updateCar } = useUserData();

	const errorExists = !!Object.keys(errors).length;
	const isDesableButton = !isDirty || errorExists;

	const registerPrice = register("price", {
		minLength: { value: 5, message: "O preço deve ter no minimo 5 caracters" },
	});
	const registerDescription = register("description", {
		minLength: {
			value: 12,
			message: "A descrição deve ter no minimo 12 caracters",
		},
	});

	async function onHandleSubmit({ price, description }: FormEditInputs) {
		try {
			const msg = await updateCar.mutateAsync({
				carId: _id,
				carData: { description, price: formatBitcoin(price) },
			});
			toast({
				title: msg,
				status: "success",
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});

			onCloseUp();
		} catch (error: any) {
			const {
				data: { msg },
			} = error.response;

			toast({
				title: msg,
				status: "error",
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
		}
	}

	return (
		<>
			<Modal isOpen={isOpenUp} onClose={onCloseUp} size="3xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						bgImg="/wave.svg"
						bgPos="bottom"
						bgSize="cover"
						bgRepeat="no-repeat"
						bgBlendMode="luminosity"
						bgColor="my.dark"
						color="my.goldenLight"
						textShadow="0px 0px 8px black"
						fontFamily="Oswald"
						letterSpacing="wide"
						fontSize="lg"
						fontWeight="bold"
						textAlign="center">
						Atualizar informações do Carro
					</ModalHeader>
					<ModalCloseButton
						bg="orange.400"
						transition="all ease .5s"
						_hover={{
							bg: "orange.600",
						}}
					/>
					<ModalBody>
						<VStack as="form">
							<FormControl mb="12" textAlign="center">
								<FormLabel
									textAlign="center"
									color="#5400e6"
									fontSize="0.96rem"
									textTransform="uppercase">
									preço
								</FormLabel>
								<EditableInput
									isControls
									register={registerPrice}
									editableProps={{
										defaultValue: price,
										display: "flex",
										alignItems: "center",
										flexDir: "column",
										gap: "1",
									}}
									previewProps={{
										fontSize: "sm",
										color: "green",
										h: "28.8px",
									}}
									inputProps={{
										type: "number",
										h: "28.8px",
										w: "160px",
									}}
								/>
								<Text color="red.800" pt="4">
									{errors.price && errors.price.message}
								</Text>
							</FormControl>

							<FormControl textAlign="center">
								<FormLabel
									textTransform="uppercase"
									color="#5400e6"
									textAlign="center"
									fontSize="0.96rem">
									descrição
								</FormLabel>
								<EditableInput
									isControls
									isTextArea
									register={registerDescription}
									editableProps={{
										defaultValue: description,
									}}
									previewProps={{
										h: "112px",
										noOfLines: 5,
										overflow: "hidden",
									}}
									inputProps={{
										fontSize: "sm",
										h: "112px",
									}}
								/>
								<Text color="red.800" pt="4">
									{errors.description && errors.description?.message}
								</Text>
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter
						justifyContent="center"
						bgSize="cover"
						bgRepeat="no-repeat"
						bgBlendMode="luminosity"
						bgColor="my.dark"
						bgImg="/wave.svg">
						<Button
							onClick={handleSubmit(onHandleSubmit)}
							isDisabled={isDesableButton}
							textTransform="uppercase"
							shadow="sm"
							h="8"
							w="32"
							type="submit">
							Enviar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
