/* eslint-disable react/prop-types */
export const Type = ({type}) => {
	let color = '';
  switch (type) {
		case "grass":
			color = "bg-[#77cc55ff]"
			break;
		case "normal":
			color = 'bg-[#aaaa99ff]'
			break;
		case "fire":
			color = 'bg-[#ff4422ff]'
			break;		
		case "water":
			color = 'bg-[#3399ffff]'
			break;
		case "electric":
			color = 'bg-[#ffcc33ff]'
			break;
		case "ice":
			color = "bg-[#66ccffff]"
			break;
		case "fighting":
			color = 'bg-[#bb5544ff]'
			break;
		case "poison":
			color = 'bg-[#aa5599ff]'
			break;		
		case "ground":
			color = 'bg-[#ddbb55ff]'
			break;
		case "flying":
			color = 'bg-[#8899ffff]'
			break;
			case "psychic":
			color = "bg-[#ff5599ff]"
			break;
		case "bug":
			color = 'bg-[#aabb22ff]'
			break;
		case "rock":
			color = 'bg-[#bbaa66ff]'
			break;		
		case "ghost":
			color = 'bg-[#6666bbff]'
			break;
		case "dragon":
			color = 'bg-[#7766eeff]'
			break;
			case "dark":
			color = 'bg-[#775544]'
			break;		
		case "steel":
			color = 'bg-[#aaaabb]'
			break;
		case "fairy":
			color = 'bg-[#ee99ee]'
			break;
		default:
			break;
	}

	return (
		<span className={`text-[0.8rem] font-bold block py-[5px] rounded-[5px] px-[20px] ${color}`}>{type}</span>
	)
}