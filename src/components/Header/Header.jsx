import './Header.css'

const Header = () => {
    return (
        <div className='header-section rounded-xl py-20 px-48 flex items-center'>
            <div>
                <h2 className='text-5xl font-bold text-white text-center mb-10'>Unleash your creativity and become the chef you've always dreamed of!</h2>
                <p className='text-lg text-white text-center mb-10'>Discover your inner chef and unleash your culinary creativity with our comprehensive online cooking courses. Learn essential techniques, master new flavors, and elevate your home cooking skills.</p>
                <div className='flex justify-center'>
                    <div>
                        <button className='explore-btn py-4 px-6 text-xl font-semibold rounded-full mr-7'>Explore Now</button>
                        <button className='feedback-btn py-4 px-6 text-xl font-semibold rounded-full'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;