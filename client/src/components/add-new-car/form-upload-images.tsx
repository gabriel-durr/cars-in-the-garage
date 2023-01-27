import {FormControl, FormLabel} from "@chakra-ui/react";
import {UploadImages} from "./upload-images";

type FormUploadImagesProps = {
	setImageUrls: (images: string[]) => void;
};

export const FormUploadImages = ({setImageUrls}: FormUploadImagesProps) => {
	return (
		<FormControl isRequired>
			<FormLabel textTransform="uppercase" color="#5400e6">
				Upload de Imagens
			</FormLabel>
			<UploadImages setImageUrls={setImageUrls} />
		</FormControl>
	);
};
