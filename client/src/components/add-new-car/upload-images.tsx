import {validateImageCount} from "../../utils/validate-image-count";
import ImageUploader from "react-images-upload";

interface UploadImagesProps {
	setImageUrls: (imageUrls: string[]) => void;
}
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
