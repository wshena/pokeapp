/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { GetPokemonDetails, LocationAreaEncounter } from "../../utils/apis";
import { Type } from "../components/Type";
import { FullLoading } from "../components/Loading";
import Layout from "../components/Layout";

const PokemonImage = ({data}) => {
	const [isClick, setIsClick] = useState(false);
  const [currentImage, setCurrentImage] = useState(data?.sprites?.front_default);

  const handleClick = (newImage) => {
    setCurrentImage(newImage);
    setIsClick(true);
  };

  return (
    <div className="w-[250px]">
			{
				isClick === true ? (
					<img src={currentImage} alt={data.name} />
				) : (
					<img src={data.sprites?.front_default} alt={data.name} />
				)
			}
      <div className="flex items-center gap-[15px]">
        <button onClick={() => handleClick(data.sprites?.front_default)}>
          <img src={data.sprites?.front_default} alt={data.name} className="border border-black" />
        </button>
        <button onClick={() => handleClick(data.sprites?.back_default)}>
          <img src={data.sprites?.back_default} alt={data.name} className="border border-black" />
        </button>
        <button onClick={() => handleClick(data.sprites?.front_shiny)}>
          <img src={data.sprites?.front_shiny} alt={data.name} className="border border-black" />
        </button>
        <button onClick={() => handleClick(data.sprites?.back_shiny)}>
          <img src={data.sprites?.back_shiny} alt={data.name} className="border border-black" />
        </button>
      </div>
    </div>
  );
}

const Details = () => {
	const {name, id} = useParams();
	const [pokemonDetails, setPokemonDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [location, setLocation] = useState([]);

	const fetchData = async () => {
		const data = await GetPokemonDetails(name);
		const location = await LocationAreaEncounter(id)

		if (data) {
			setPokemonDetails(data);
			setIsLoading(false);
			setLocation(location);
		}
	}

	useEffect(() => {
		fetchData();
	})

	if (isLoading) {
		return (
			<FullLoading />
		)
	}

  return (
		<Layout>
			<div className="container container__padding">
				<div className="flex items-center justify-center">
					<div className="flex flex-col md:flex-row items-center gap-[20px] rounded-[20px] p-[15px] md:p-[30px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
						<div className="">
							<PokemonImage data={pokemonDetails} />
						</div>
						<div className="">
							<h1 className="capitalize font-bold text-[2rem]">{name} #{id}</h1>
							<div className="flex items-center gap-[20px] text-[1rem]">
								<h2>Height: {pokemonDetails.height / 10} m</h2>
								<h2>Weight: {pokemonDetails.weight / 10} kg</h2>
							</div>
							<h1 className="">Base Experiences: {pokemonDetails.base_experience}</h1>
							<div className="">
								<h1>Species: {pokemonDetails?.species?.name}</h1>
							</div>
							<div className="flex flex-col gap-[10px] my-[10px]">
								<h1>Types:</h1>
								<div className="flex items-center gap-[15px] flex-wrap">
									{
										pokemonDetails?.types?.map((type, idx) => {
											return (
												<div className="" key={idx}>
													<Type type={type.type.name}/>
												</div>
											)
										})
									}
								</div>
							</div>

							<div className="">
								<h1>Abilities</h1>
								<h2 className="capitalize">{pokemonDetails?.abilities?.map(item => item.ability.name).join(' | ')}</h2>
							</div>
						</div>
					</div>
				</div>
			
				<div className="flex items-center justify-center w-full">
					<div className="mt-[20px] w-[100%]">
						<div className="">
							<h1 className="font-bold text-[1.9rem] mb-[10px]">Moves:</h1>
							{
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
									{
										pokemonDetails?.moves?.map((item) => {
											return (
												<div className="" key={item.move.name}>
													<Link className="border-b capitalize" to={item.move.url}>{item.move.name}</Link>
												</div>
											)
										})
									}
								</div>
							}
						</div>
						<div className="mt-[20px]">
							<h1 className="font-bold text-[1.9rem] mb-[10px]">Location Encounters:</h1>
							{
								location.length > 0 ? (
									<div className="flex items-center flex-wrap gap-[10px]">
										{
											location?.map((item) => {
												return (
													<Link className="border-b capitalize" to={item.location_area.url} key={item.location_area.name}>{item.location_area.name}</Link>
												)
											})
										}
									</div>
								) : (
									<h1>No Data</h1>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</Layout>
  )
}

export default Details