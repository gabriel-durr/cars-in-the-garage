import { User } from "@typings/user-car-types";
import { CardFromMobile } from "./card-from-mobile";
import { CardFromDesktop } from "./card-from-desktop";

export type CarsCardsProps = {
	user: User;
	isMediumDisplay: boolean;
};

export const CarsCards = ({ user, isMediumDisplay }: CarsCardsProps) => {
	return isMediumDisplay ? (
		<CardFromMobile user={user} />
	) : (
		<CardFromDesktop user={user} />
	);
};
