import {AnimatePresence, motion} from "framer-motion";
import {Image} from "@chakra-ui/react";

type ImagesProps = {
	banners: string[];
	currentImage: number;
	direction: number;
};

export const CarouselImages = ({
	banners,
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
				variants={variants}
				initial="initial"
				animate="animate"
				exit="exit"
				custom={direction}
				key={banners[currentImage]}
				objectFit="cover"
				as={motion.img}
				src={banners[currentImage]}
			/>
		</AnimatePresence>
	);
};
