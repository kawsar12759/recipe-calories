import './Recipe.css'
const Recipe = ({ recipe, handleWantToCookBtn }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div className="border-2 p-5 rounded-lg">
            <div className='flex flex-col h-full'>
                <img className="rounded-lg recipe-img mb-5" src={recipe_image} alt="" />
                <div className='grow'>
                    <div className='h-28'>
                        <h4 className='text-xl font-semibold mb-2'>{recipe_name}</h4>
                        <p className='text-base font-normal recipe-short-description mb-4'>{short_description}</p>
                    </div>
                    <hr className='hr-line mb-4' />
                    <h5 className='text-lg font-medium mb-3'>Ingredients: {ingredients.length}</h5>
                    <ul className='list-disc list-inside text-lg ingredients-list'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <hr className='hr-line mt-4 mb-4' />
                <div className="flex text-base time-and-calorie mb-4">
                    <div className="flex items-center mr-7">
                        <i className="fa-regular fa-clock mr-2"></i>
                        <p>{preparing_time}</p>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-fire mr-2"></i>
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={() => handleWantToCookBtn(recipe)} className='want-to-cook-btn py-3 px-6 text-lg font-medium rounded-full mr-7'>Want to Cook</button>

            </div>
        </div>
    );
};

export default Recipe;