import {validateImageCount} from "../../utils/validate-image-count";
import ImageUploader from "react-images-upload";

type UploadImagesProps = {
	setImageUrls: (imageUrls: string[]) => void;
};
export const UploadImages = ({setImageUrls}: UploadImagesProps) => {
	function onDrop(pictures: File[]) {
		let imgUrls: string[] = [];
		if (!validateImageCount(pictures)) {
			return;
		}
		pictures.forEach(picture => {
			let reader = new FileReader();
			reader.readAsDataURL(picture);
			reader.onloadend = function () {
				imgUrls.push(reader.result as string);
			};
		});
		setImageUrls(imgUrls);
	}

	//TODO conseguimos transformar as imagens do upload eum url base64, e em seguida adicionada em array. Porém temos que fazer com que exista as miniaturas das imagens enviadas para ux do usuário

	return (
		<ImageUploader
			withIcon={true}
			buttonText="Escolha as imagens"
			onChange={onDrop}
			imgExtension={[".jpg", ".gif", ".png", ".gif"]}
			maxFileSize={5242880}
		/>
	);
};
