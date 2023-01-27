import {FormInputs} from "./../../types";
import {InputInfos} from "./input-infos";
import {SelectBrand} from "./select-brand";
import {TextareaDescription} from "./textarea-description";
import {FormUploadImages} from "./form-upload-images";

import {useForm} from "react-hook-form";
import {useState} from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	VStack,
} from "@chakra-ui/react";

type ModalNewCarProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const ModalNewCar = ({isOpen, onOpen, onClose}: ModalNewCarProps) => {
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	// const [selectedBrand, setSelectedBrand] = useState("");

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<FormInputs>();

	function handleOnSubmit<FormInputs>(data: FormInputs) {
		// lógica de submit aqui
		console.log(data);
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="5xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					bg="gold"
					color="purple.900"
					fontSize="lg"
					fontWeight="bold"
					textAlign="center">
					Formulário Para Criar um novo Carro
				</ModalHeader>
				<ModalCloseButton
					bg="orange.400"
					transition="all ease .5s"
					_hover={{
						bg: "orange.600",
					}}
				/>
				<ModalBody>
					<VStack as="form" spacing="8">
						<FormUploadImages setImageUrls={setImageUrls} />

						<TextareaDescription register={register} errors={errors} />

						<InputInfos />
						<SelectBrand register={register} errors={errors} />
					</VStack>
				</ModalBody>
				<ModalFooter justifyContent="center">
					<Button
						shadow="sm"
						h="8"
						w="32"
						type="submit"
						onClick={handleSubmit(handleOnSubmit)}>
						Enviar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
