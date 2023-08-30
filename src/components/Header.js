import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
//import SearchIcon from '@material-ui/icons/Search';
import {BsSearch} from 'react-icons/bs';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{cart}]=useStateValue();
  
  return (
    <nav className='header'>
        {/* logo-on the left */}
        <Link to="/">
     <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''></img>
        </Link>
        {/* Search-Box */}
       <div className='header__search'>
       <input type="text" className="header__searchInput"/>
          <BsSearch className='header__searchIcon'/>
          </div>

        {/* 3 links */}
         <div className='header__Nav'>
          {/* 1st link */}

           <Link to="/login" className='header__link'>
           <div className='header__option'>
           <span className='header__optionLineOne'>Hello Ashish</span>
           <span className='header__optionLineTwo'>Sign In</span>
           </div>
           </Link>
           {/* 2nd link */}

           
           <Link to="/" className='header__link'>
           <div className='header__option'>
           <span className='header__optionLineOne'>Account</span>
           <span className='header__optionLineTwo'>& Lists</span>
           </div>
           </Link>

           {/* 3rd link */}

           <Link to="/" className='header__link'>
           <div className='header__option'>
           <span className='header__optionLineOne'>Returns</span>
           <span className='header__optionLineTwo'>& Orders</span>
           </div>
           </Link>
             {/* 3rd link */}
             <Link to="/checkout" className='header__link'>
              <div className='header__optionCart'>
                {/* Shopping Cart Icon */}
                    <AddShoppingCartIcon/>
                 {/* Number of Items */}
                  <span className='header__optionLineTwo header__CartCount'>{cart.length}</span>
              </div>
             </Link>

         </div>
        {/* Cart  icon with number */}

    </nav>
  )
}

export default Header