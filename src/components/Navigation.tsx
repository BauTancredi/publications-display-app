import { NavLink } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav>
      <ul className='flex justify-center gap-2 m-5'>
        <li>
          <NavLink to="/" className={({ isActive, }) =>
            isActive ? "text-blue-500" : "inherit"
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/new" className={({ isActive, }) =>
            isActive ? "text-blue-500" : "inherit"}>New Publication</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation