import {Image} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";

type ImagesProps = {
	images: string[];
	currentImage: number;
	direction: number;
};

export const CarouselImages = ({
	images,
	currentImage,
	direction,
}: ImagesProps) => {
	let variants = {
		initial: (direction: number) => {
			return {
				x: direction > 0 ? -200 : 200,
				opacity: 0,
				transition: {
					x: {type: "spring", bounce: 0.25},
					opacity: {duration: 0.1},
				},
				clipPath: "none",
				filter: "grayscale(0)",
			};
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				x: {type: "spring", bounce: 0.25},
				opacity: {duration: 0.1},
			},
		},
		exit: {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);",
			opacity: 0.1,
			filter: "grayscale(1.1)",
		},
	};

	return (
		<AnimatePresence initial={false} custom={direction}>
			<Image
				w="100%"
				variants={variants}
				initial="initial"
				animate="animate"
				exit="exit"
				custom={direction}
				pointerEvents="none"
				key={images[currentImage]}
				objectFit="cover"
				as={motion.img}
				src={images[currentImage]}
			/>
		</AnimatePresence>
	);
};
