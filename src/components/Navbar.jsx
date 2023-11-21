import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {BiSearchAlt} from 'react-icons/bi'

const Navbar = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();
	const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const targetUrl = input ? `/pokemon/search/${encodeURIComponent(input.toLowerCase())}` : '/pokemon/search';
    navigate(targetUrl);
  };

  return (
		<div className="flex items-center justify-center mt-[40px]">
			<nav className='flex flex-col items-center gap-[20px]'>
				<Link to={'/'} className='font-bold text-[2rem]'>Pokeapp</Link>
				<form onSubmit={handleFormSubmit} className="w-[280px] lg:w-[350px] p-[8px] border border-gray-300 rounded-[10px] flex items-center justify-between">
					<input required className="w-[80%] focus:outline-none text-[15px]" type="text" name="title" id="title" placeholder="Search your pokemon..." autoComplete="off" onChange={handleInputChange} value={input}/>
					<button type="submit" onClick={() => {}}> <BiSearchAlt /> </button>
				</form>
			</nav>
		</div>
  )
}

export default Navbar