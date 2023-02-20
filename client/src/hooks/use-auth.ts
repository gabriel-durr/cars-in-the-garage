import {useState, useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useAuth = () => {
	const {data} = useQuery(["user"]);

	return {};
};
