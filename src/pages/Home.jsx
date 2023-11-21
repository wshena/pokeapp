import { useState } from "react"
import { GetPokemonDetails, GetPokemonNameList } from "../../utils/apis";
import { useEffect } from "react";
import PokemonCards from "../components/Cards";
import { CustomHeightLoading, FullLoading } from "../components/Loading";
import Layout from "../components/Layout";

const Home = () => {
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadMore, setIsLoadMore] = useState(false);
	const [limit, setLimit] = useState(25)

	const loadMoreData = () => {
		const newLimit = limit + 10;
		setLimit(newLimit);
		setIsLoadMore(true);
		fetchData(newLimit);
	};

	const fetchData = async (limit) => {
    try {
      const data = await GetPokemonNameList(limit);
      if (data) {
        const details = await Promise.all(
          data.map(async (pokemon) => {
            const details = await GetPokemonDetails(pokemon.name);
            return details;
          })
        );
				setIsLoading(false);
        setIsLoadMore(false);
        setPokemonDetails(details);
      }
    } catch (error) {
      console.log(error);
    }
  };

	useEffect(() => {
		fetchData(limit);
	}, [limit])

	if (isLoading) {
		return (
			<FullLoading />
		)
	}

  return (
		<Layout>
    <div className="container container__padding">
			<div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
				{
					pokemonDetails.map((pokemon) => {
						return (
							<div key={pokemon.id} className=''>
								<PokemonCards id={pokemon.id} data={pokemon} />
							</div>
						)
					})
				}
			</div>
			{
				isLoadMore && (
					<div className="my-[50px]">
						<CustomHeightLoading height={200} />
					</div>
				)
			}
			<div className="mt-[50px] flex items-center justify-center">
				<button className='border border-black py-[8px] px-[20px]' onClick={loadMoreData}>Load More</button>
			</div>
		</div>
		</Layout>
  )
}

export default Home