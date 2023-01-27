import {CarDescription} from "./car-description";
import {CarOwner} from "./car-owner";
import {CarHeaderContent} from "./car-header-content";
import {Cars} from "./../types";

import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
} from "@chakra-ui/react";
import {CarInfo} from "./car-info";
import {CarCarousel} from "./car-carousel";

type CarsCardProps = Cars & {
	message: string;
	setMessage: (message: string) => void;
};

export const CarsCard = ({
	_id,
	image,
	description,
	speed,
	price,
	year,
	owner,
	model,
	brandIcon,
	brand,
	message,
	setMessage,
}: CarsCardProps) => {
	return (
		<Card
			transform="perspective(240px) rotateX(0.1deg) rotateY(1deg)"
			w="420px"
			h="740px"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="gray.300"
			boxShadow="1px -1px 2px #7676dd9e, -12px 10px 10px #71729b76"
			rounded="lg">
			<CarCarousel banners={image} />

			<CardHeader>
				<CarHeaderContent
					_id={_id}
					image={image}
					brand={brand}
					description={description}
					speed={speed}
					price={price}
					year={year}
					owner={owner}
					model={model}
					brandIcon={brandIcon}
					message={message}
					setMessage={setMessage}
				/>
				<CarInfo speed={speed} year={year} price={price} />
			</CardHeader>
			<CardBody
				display="flex"
				flexDir="column"
				alignItems="flex-start"
				justifyContent="space-around">
				<CarDescription description={description} />
				<Divider />
			</CardBody>
			<CardFooter>
				<CarOwner
					name={owner.name}
					avatar={owner.avatar}
					email={owner.email}
					phone={owner.phone}
				/>
			</CardFooter>
		</Card>
	);
};
