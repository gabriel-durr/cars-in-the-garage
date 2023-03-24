import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { IconButton, HStack, Text } from "@chakra-ui/react";

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
				boxSize={{ base: "34px", md: "44px" }}
				fontSize={{ base: 34, md: 44 }}
				color="cyan.400"
				icon={<BiChevronLeft />}
				aria-label="Prev Button"
				onClick={handlePrevious}
			/>
			{images.map((_, index) => (
				<Text
					as="span"
					borderRadius="full"
					boxSize={
						index === currentImage
							? { base: "12px", md: "14px" }
							: { base: "6px", md: "8px" }
					}
					key={index}
					bg={index === currentImage ? "blue.100" : "whiteAlpha.100"}
					border="1px solid #00a6ff8f"
					color="blue.100"
				/>
			))}
			<IconButton
				variant="ghost"
				transition="all .9s"
				boxSize={{ base: "34px", md: "44px" }}
				fontSize={{ base: 34, md: 44 }}
				color="cyan.400"
				icon={<BiChevronRight />}
				aria-label="Next Button"
				onClick={handleNext}
			/>
		</HStack>
	);
};
