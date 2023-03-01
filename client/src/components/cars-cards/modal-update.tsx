import {FormEditInputs} from "../../@types";
import {EditableInput} from "./editable-input";
import {useUserData} from "../../hooks/use-user-data";
import {formatBitcoin} from "../../utils/format-bitcoin";

import {useForm} from "react-hook-form";
import {
	Modal,
	Button,
	FormControl,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	ModalCloseButton,
	ModalHeader,
	FormLabel,
	useToast,
	VStack,
	Text,
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
		formState: {errors, isValid, isDirty},
	} = useForm<FormEditInputs>({
		values: {price, description},
	});

	const toast = useToast();
	const {updateCar} = useUserData();

	const errorExists = !!Object.keys(errors).length;
	const isDesableButton = !isDirty || errorExists;

	const registerPrice = register("price", {
		minLength: {value: 5, message: "O preço deve ter no minimo 5 caracters"},
	});
	const registerDescription = register("description", {
		minLength: {
			value: 12,
			message: "A descrição deve ter no minimo 12 caracters",
		},
	});

	async function onHandleSubmit({price, description}: FormEditInputs) {
		let priceValue = formatBitcoin(price);
		const msg = await updateCar.mutateAsync({
			carId: _id,
			carData: {description: description, price: priceValue},
		});
		toast({
			title: msg,
			status: "success",
			isClosable: true,
			position: "top",
		});
		onCloseUp();
	}

	return (
		<>
			<Modal isOpen={isOpenUp} onClose={onCloseUp} size="3xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						bg="gold"
						color="purple.900"
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
									textTransform="uppercase"
									textAlign="center"
									color="#5400e6"
									fontSize="0.96rem">
									preço
								</FormLabel>
								<EditableInput
									register={registerPrice}
									defaultValue={price}
									inputType="number"
									isPreviewFocus
									textSize="sm"
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
									register={registerDescription}
									defaultValue={description}
									isTextArea
									textSize="sm"
								/>
								<Text color="red.800" pt="4">
									{errors.description && errors.description?.message}
								</Text>
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter justifyContent="center">
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
