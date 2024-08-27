import './Navbar.css'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h3 className="text-3xl font-bold">Recipe Calories</h3>
            </div>
            <div className="nav-link text-base">
                <a className='nav-item' href="">Home</a>
                <a className='nav-item' href="">Recipes</a>
                <a className='nav-item' href="">About</a>
                <a className='nav-item' href="">Search</a>
            </div>
            <div>
                <input className='search-input bg-gray-100 py-3 rounded-3xl px-4 mr-4' type="text" placeholder='Search' />
                <img className='border-2 h-full w-full'  src="../../images/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg" alt="" />
            </div>
        </div>
    );
};

export default Navbar;