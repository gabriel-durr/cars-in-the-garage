import {CarouselImages} from "./carousel-images";
import {CarouselControls} from "./carousel-controls";

import {useState} from "react";
import {Flex} from "@chakra-ui/react";

type CarouselProps = {
	images: string[];
};

export const CarImages = ({images}: CarouselProps) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [direction, setDirection] = useState<number>(0);

	return (
		<Flex
			pos="relative"
			w="100%"
			h="240px"
			justify="center"
			overflow="hidden"
			bgGradient="linear-gradient(90deg, #f5f7fa 0%, #c3cfe2 100%)">
			<CarouselImages
				images={images}
				currentImage={currentImage}
				direction={direction}
			/>

			<CarouselControls
				images={images}
				setDirection={setDirection}
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
			/>
		</Flex>
	);
};
