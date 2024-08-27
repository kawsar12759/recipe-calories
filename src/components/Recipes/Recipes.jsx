import { useEffect, useState } from 'react';
import './Recipes.css'
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div>
            <h3 className="text-4xl font-semibold text-center mb-6">Our Recipes</h3>
            <p className="recipes-para-text text-base text-center px-24 mb-12">Discover a world of deliciousness with our curated collection of recipes. From quick and easy weeknight meals to gourmet feasts, we have something to satisfy every craving. Our recipes are designed to be easy to follow and packed with flavor. Let's cook together!</p>
            <div className='w-100 flex'>
                <div className='recipes-container w-3/5'>
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                    }
                </div>
                <div className='border-2  h-96 w-2/5 ml-7 rounded-lg'>
                    <h1 className='text-2xl font-semibold text-center my-6'>Want to Cook: </h1>
                    <div className='flex justify-center'>
                        <hr className='w-3/4' />
                    </div>
                    <table className='table-auto w-full'>
                        <thead className='text-base font-medium'>
                            <tr className='text-left'>
                                <th className='w-1/12'></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>1</td>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                                <td><button>Preparing</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recipes;