import {CardDescription} from "./card-description";
import {CardOwner} from "./card-owner";
import {CardHeaderContent} from "./card-header-content";
import {Cars} from "./../types";

import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
} from "@chakra-ui/react";
import {CardInfo} from "./card-info";
import {CardCarousel} from "./card-carousel";

type CarsCardProps = Cars;

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
			<CardCarousel banners={image} />

			<CardHeader>
				<CardHeaderContent
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
				/>
				<CardInfo speed={speed} year={year} price={price} />
			</CardHeader>
			<CardBody
				display="flex"
				flexDir="column"
				alignItems="flex-start"
				justifyContent="space-around">
				<CardDescription description={description} />
				<Divider />
			</CardBody>
			<CardFooter>
				<CardOwner
					name={owner.name}
					avatar={owner.avatar}
					email={owner.email}
					phone={owner.phone}
				/>
			</CardFooter>
		</Card>
	);
};
