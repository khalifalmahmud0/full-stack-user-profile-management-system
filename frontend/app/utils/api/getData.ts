import axios from "axios";
import { useQuery } from "react-query";

export const fetchData = async (url:string) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error("Error fetching data: " + error);
	}
};

export const GetData = (key:string, url:string) => {
	return useQuery(key, () => fetchData(url));
};
