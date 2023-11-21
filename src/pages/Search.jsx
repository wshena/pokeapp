import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { GetPokemonDetails, LocationAreaEncounter } from "../../utils/apis";
import DetailsComponents from "../components/DetailsComponents";

const Search = () => {
	const { name } = useParams();
	const [pokemonDetails, setPokemonDetails] = useState({});
	const [location, setLocation] = useState([]);

	const fetchData = async () => {
		const data = await GetPokemonDetails(name);
		const location = await LocationAreaEncounter(data.id)
		
		if (data) {
			setPokemonDetails(data);
			setLocation(location);
		}
	}

	useEffect(() => {
		fetchData();
	})

  return (
		<Layout>
			<div className="">
				{
					!pokemonDetails.id ? (
						<div className="flex items-center justify-center">
							<h1 className="font-bold text-[2rem]">No Result</h1>
						</div>
					) : (
						<DetailsComponents pokemon={pokemonDetails} location={location} />
					)
				}
			</div>
		</Layout>
  )
}

export default Search