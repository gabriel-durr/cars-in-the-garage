import { FormUploadImageProps } from "@typings/form-types";

import { FcProcess, FcCancel } from "react-icons/fc";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { useState } from "react";
import {
	Flex,
	Text,
	Image,
	HStack,
	VStack,
	Button,
	IconButton,
} from "@chakra-ui/react";

type UploadImagesProps = FormUploadImageProps;

export const UploadImages = ({ setValue, errors }: UploadImagesProps) => {
	const [images, setImages] = useState<ImageListType>([]);
	const maxNumber = 4;

	const onChange = (
		imageList: ImageListType,
		addUpdateIndex: number[] | undefined
	) => {
		const images = imageList.map(img => img.dataURL) as string[];

		setValue("images", images);

		setImages(imageList);
	};

	return (
		<>
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				acceptType={["jpg", "jpeg", "gif", "png"]}
				maxNumber={maxNumber}>
				{({
					imageList,
					onImageUpload,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
					onImageRemoveAll,
					errors: errorsImageUpload,
				}) => (
					<Flex
						gap="12"
						pos="relative"
						direction={{ base: "column", lg: "row" }}>
						<VStack justify="center">
							{imageList.length < 4 ? (
								<Button
									h={{ base: "4.4rem", md: "6.25rem" }}
									w={{ base: "14.4rem", md: "18.5rem" }}
									border="1px dotted #0c0703"
									bg="blackAlpha.200"
									variant="unstyled"
									borderBottom="1px solid #b7a710"
									onClick={() => onImageUpload()}
									{...dragProps}>
									<HStack boxSize="100%" align="center" px="2">
										<Image src="/upload-image.svg" h="100%" />
										<Text
											fontSize={{ base: ".82rem", md: ".9rem", xl: "1.01rem" }}
											textTransform="uppercase"
											color={isDragging ? "my.red_love" : "my.title_form"}>
											Clique ou Arraste
										</Text>
									</HStack>
								</Button>
							) : (
								<Button
									variant="unstyled"
									fontSize="0.9rem"
									bg="red.400"
									_hover={{
										bg: "red.500",
										transition: "background .4s",
									}}
									color="#fff"
									p="2"
									onClick={onImageRemoveAll}>
									Remover Imagens
								</Button>
							)}
						</VStack>

						<HStack
							maxW={["16.2rem", "19.2rem", "30.2rem", "100%"]}
							overflowX="scroll"
							sx={{
								"&::-webkit-scrollbar": {
									w: "0px",
								},
							}}>
							{imageList.map((image, index) => (
								<VStack
									pos="relative"
									bg="#000"
									border="1px solid #c7a914"
									justify="space-evenly"
									h="6.25rem"
									minW="8rem"
									key={index}>
									<Image
										objectFit="contain"
										src={image.dataURL}
										alt="Imagem enviada"
										boxSize="100%"
									/>
									<HStack pos="absolute" bottom="2">
										<IconButton
											aria-label="button atualizar imagem"
											size="xs"
											icon={<FcProcess />}
											onClick={() => onImageUpdate(index)}>
											Atualizar
										</IconButton>
										<IconButton
											aria-label="button remover imagem"
											size="xs"
											icon={<FcCancel />}
											onClick={() => onImageRemove(index)}>
											Remover
										</IconButton>
									</HStack>
								</VStack>
							))}
						</HStack>

						<HStack
							pos="absolute"
							justify="center"
							spacing="6"
							bottom="-8"
							w="100%"
							textAlign="center">
							<Text
								color="my.error"
								fontSize="0.8rem"
								textTransform="uppercase">
								{errors.images && errors.images.message}
							</Text>
							<Text
								color="my.error"
								whiteSpace="nowrap"
								fontSize="0.8rem"
								textTransform="uppercase">
								{errorsImageUpload?.maxFileSize &&
									"É permitido no máximo 4 Imagens"}

								{errorsImageUpload?.acceptType &&
									"Só é permitido imagens no formato: jpg, jpeg, gif, png"}
							</Text>
						</HStack>
					</Flex>
				)}
			</ImageUploading>
		</>
	);
};
