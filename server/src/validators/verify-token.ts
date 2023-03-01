import {SECRET} from "../config";

import jwt from "jsonwebtoken";

type VerifyTokenType = string;

type JwtTokenProps = {
	id: string;
	email: string;
};

function verifyTokenFn(refreshToken: VerifyTokenType): VerifyTokenType | null {
	try {
		const {id: userId} = jwt.verify(refreshToken, SECRET) as JwtTokenProps;
		return userId;
	} catch (error) {
		return null;
	}
}

export {verifyTokenFn};
