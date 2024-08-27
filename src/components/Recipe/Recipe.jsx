
const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div className="border-2">
            <div>
                <img src={recipe_image} alt="" />
                <h4>{recipe_name}</h4>
                <p>{short_description}</p>
                <hr />
                <h5>Ingredients: </h5>
                <ul>
                    {
                        ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                    }
                </ul>
                <hr />
                <div className="flex">
                    <div className="flex items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>{preparing_time}</p>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-fire"></i>
                        <p>{calories}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipe;