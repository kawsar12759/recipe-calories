import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import profile from '../../images/profile.png';

const Navbar = () => {
    return (
        <div className='flex items-center px-4 justify-between mb-8'>
            <div>
                <h3 className="text-3xl font-bold">Recipe Caloriz</h3>
            </div>
            <div className="nav-link text-base">
                <a className='nav-item' href="">Home</a>
                <a className='nav-item' href="">Recipes</a>
                <a className='nav-item' href="">About</a>
                <a className='nav-item' href="">Search</a>
            </div>
            <div className='flex'>
                <div className='search-container'>
                    <button className='search-btn'><i className="fa-solid fa-magnifying-glass bg-gray-100 text-gray-500"></i></button>
                    <input className='search-input bg-gray-100 py-3 rounded-3xl px-9 mr-4' type="text" placeholder='Search' />

                </div>
                <img className='w-12' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Navbar;