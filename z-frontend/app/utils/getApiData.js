import axios from "axios";
import { useQuery } from "react-query";

export const fetchData = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error("Error fetching data: " + error);
	}
};

export const GetData = (key, url) => {
	return useQuery(key, () => fetchData(url));
};
