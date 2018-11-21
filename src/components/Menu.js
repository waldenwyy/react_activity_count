import { Link } from 'react-router'
import { FaHome } from 'react-icons/fa'
import { FaRegCalendarPlus } from 'react-icons/fa'
import { FaTable } from 'react-icons/fa'

export const Menu = () => 
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<FaHome />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<FaRegCalendarPlus />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<FaTable />
		</Link>
	</nav>