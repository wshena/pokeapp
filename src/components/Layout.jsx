/* eslint-disable react/prop-types */
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='w-full'>{children}</main>
		</>
  )
}

export default Layout