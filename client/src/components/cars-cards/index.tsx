import {Cars} from "../../@types";
import {CarOwner} from "./car-owner";
import {CarInfo} from "./car-info";
import {CarImages} from "./car-images";
import {cars} from "../../utils/car-static-data";
import {CarDescription} from "./car-description";
import {CarHeaderContent} from "./car-header-content";

import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
} from "@chakra-ui/react";

export const CarsCards = () => {
	return (
		<>
			{cars.map((car: Cars) => (
				<Card
					key={car._id}
					transform="perspective(240px) rotateX(0.1deg) rotateY(1deg)"
					w="420px"
					h="740px"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="gray.300"
					boxShadow="1px -1px 2px #7676dd9e, -12px 10px 10px #71729b76"
					rounded="lg">
					<CarImages banners={car.image} />

					<CardHeader>
						<CarHeaderContent
							_id={car._id}
							image={car.image}
							brand={car.brand}
							description={car.description}
							speed={car.speed}
							price={car.price}
							year={car.year}
							owner={car.owner}
							model={car.model}
							brandIcon={car.brandIcon}
						/>
						<CarInfo speed={car.speed} year={car.year} price={car.price} />
					</CardHeader>
					<CardBody
						display="flex"
						flexDir="column"
						alignItems="flex-start"
						justifyContent="space-around">
						<CarDescription description={car.description} />
						<Divider />
					</CardBody>
					<CardFooter>
						<CarOwner
							name={car.owner.name}
							avatar={car.owner.avatar}
							email={car.owner.email}
							phone={car.owner.phone}
						/>
					</CardFooter>
				</Card>
			))}
		</>
	);
};
