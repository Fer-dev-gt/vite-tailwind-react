import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const { count } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4';
  const isRouteActive = (isActive) => isActive ? activeStyle : undefined

  return (
    <nav className='bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          > 
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          fer-dev@gmail.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
              isRouteActive(isActive)
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒 {count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;