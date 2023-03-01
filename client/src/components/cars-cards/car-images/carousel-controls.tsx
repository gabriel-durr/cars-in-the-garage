import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {IconButton, HStack, Text} from "@chakra-ui/react";

type CarouselControls = {
	setCurrentImage: (index: number) => void;
	setDirection: (dir: number) => void;
	currentImage: number;
	images: string[];
};

export const CarouselControls = ({
	currentImage,
	setCurrentImage,
	setDirection,
	images,
}: CarouselControls) => {
	const lastIndex = images.length - 1;
	const prevIndex = currentImage - 1;
	const firstIndex = 0;
	const nextIndex = currentImage + 1;

	const handlePrevious = () => {
		setDirection(0);
		if (currentImage <= firstIndex) {
			setCurrentImage(lastIndex);
			return;
		}

		setCurrentImage(prevIndex);
	};

	const handleNext = () => {
		setDirection(1);
		if (currentImage >= lastIndex) {
			setCurrentImage(firstIndex);
			return;
		}

		setCurrentImage(nextIndex);
	};
	return (
		<HStack pos="absolute" w="98%" justify="space-between" bottom="4%">
			<IconButton
				variant="ghost"
				transition="all .9s"
				fontSize="44"
				color="cyan.400"
				icon={<BiChevronLeft />}
				aria-label="Prev Button"
				onClick={handlePrevious}
			/>
			{images.map((_, index) => (
				<Text as="span" key={index} color="blue.100">
					{index === currentImage ? "●" : "○"}
				</Text>
			))}
			<IconButton
				variant="ghost"
				transition="all .9s"
				fontSize="44"
				color="cyan.400"
				icon={<BiChevronRight />}
				aria-label="Next Button"
				onClick={handleNext}
			/>
		</HStack>
	);
};
