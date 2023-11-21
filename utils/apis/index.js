// import { Axios } from "axios"
import axios from "axios";

export const GetPokemonNameList = async (limit) => {
  try {
		const respone = await axios.get(`${import.meta.env.VITE_PUBLIC_HOST}/pokemon?limit=${limit}`);
		return respone.data.results
	} catch (error) {
		console.log(error)
	}
}

export const GetPokemonDetails = async (name) => {
	try {
		const respone = await axios.get(`${import.meta.env.VITE_PUBLIC_HOST}/pokemon/${name}`);
		return respone.data
	} catch (error) {
		console.log(error)
	}
}

export const LocationAreaEncounter = async (id) => {
	try {
		const respone = await axios.get(`${import.meta.env.VITE_PUBLIC_HOST}/pokemon/${id}/encounters`);
		return respone.data
	} catch (error) {
		console.log(error)
	}
}