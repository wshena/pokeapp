/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { Type } from "./Type"

const PokemonCards = ({data}) => {
  return (
		<Link to={`/pokemon/${data.name}/${data.id}`}>
			<div className='w-[200px] lg:w-[250px] hover:scale-[1.1] border border-gray-400 rounded-[10px]'>
				<div className="flex items-center justify-center bg-gray-400 rounded-t-[10px]">
					<div className="w-[70%] h-[70%]">
						<img loading="lazy" src={data.sprites.front_default} alt={data.name} />
					</div>
				</div>
				<div className="flex flex-col gap-3 p-[15px]">
					<div className="flex items-center justify-between font-bold text-[1.2rem]">
						<h1 className='capitalize'>{data.name}</h1>
						<h1>{data.id}</h1>
					</div>
						<div className="flex items-center gap-[10px] flex-wrap">
						{
							data.types.map((type, idx) => {
								return (
									<Type type={type.type.name} key={idx}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Link>
  )
}

export default PokemonCards