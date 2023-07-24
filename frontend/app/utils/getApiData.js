import axios from "axios";
import { useQuery } from "react-query";

/**
 * Fetches data from the given URL.
 *
 * @param {String} url - The URL to fetch data from.
 * @return {Promise} A Promise that resolves to the fetched data.
 */
export const fetchData = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error("Error fetching data: " + error);
	}
};

/**
 * Fetches data from the specified URL using the provided key.
 *
 * @param {string} key - The key used to identify the data in the cache.
 * @param {string} url - The URL from which to fetch the data.
 * @return {Promise} - A Promise that resolves with the fetched data.
 */
export const GetData = (key, url) => {
	return useQuery(key, () => fetchData(url));
};
