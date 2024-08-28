import { useEffect, useState } from 'react';
import './Recipes.css'
import Recipe from '../Recipe/Recipe';
import WantTOCook from '../WantToCook/WantTOCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCookRecipes, setWantToCookRecipes] = useState([]);
    const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleWantToCookBtn = recipe => {
        const newWantToCookRecipes = [...wantToCookRecipes, recipe];
        const updatedNewWantToCookRecipes = arrangeOrderOfWantToCook(newWantToCookRecipes);
        setWantToCookRecipes(updatedNewWantToCookRecipes);

    }

    function createDeepCopy(object) {
        return JSON.parse(JSON.stringify(object));
      }

    function arrangeOrderOfWantToCook(unorderedRecipes) {
        let count = 0;
        unorderedRecipes.forEach(recipe => {
            count++;
            recipe.serialOfWantToCook = count;
        })
        return unorderedRecipes;
    }

    function arrangeOrderOfCurrentlyCook(unorderedRecipes) {
        let count = 0;
        unorderedRecipes.forEach(recipe => {
            count++;
            recipe.serialOfCurrentlyCook = count;
        })
        return unorderedRecipes;

    }

    const handlePrepareBtn = recipe => {
        delete recipe.serialOfWantToCook;

        let numericPartOfTime = recipe.preparing_time.match(/\d+/);
        const time = parseInt(numericPartOfTime[0]);
        setTotalTime(totalTime + time);

        let numericPartOfCalories = recipe.calories.match(/\d+/);
        const calories = parseInt(numericPartOfCalories[0]);
        setTotalCalories(totalCalories + calories);
        const deepCopiedRecipe = createDeepCopy(recipe);

        const newCurrentlyCookingRecipes = [...currentlyCookingRecipes, deepCopiedRecipe];
        const updatedWantToCookRecipes = wantToCookRecipes.filter(rec => rec.recipe_id !== recipe.recipe_id);
        const orderedUpdatedWantToCookRecipes = arrangeOrderOfWantToCook(updatedWantToCookRecipes);
        const orderedNewCurrentlyCookingRecipes = arrangeOrderOfCurrentlyCook(newCurrentlyCookingRecipes);
        setWantToCookRecipes(orderedUpdatedWantToCookRecipes);
        setCurrentlyCookingRecipes(orderedNewCurrentlyCookingRecipes);
    }
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
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleWantToCookBtn={handleWantToCookBtn}></Recipe>)
                    }
                </div>
                <div className='border-2 h-fit w-2/5 ml-7 rounded-lg'>
                    <h1 className='text-2xl font-semibold text-center mt-6 mb-4'>Want to Cook: {wantToCookRecipes.length < 10 ? '0' + wantToCookRecipes.length : wantToCookRecipes.length}</h1>
                    <div className='flex justify-center'>
                        <hr className='w-3/4' />
                    </div>
                    <table className='table-auto w-full'>
                        <thead className='text-base font-medium'>
                            <tr className='text-left h-16'>
                                <th className='w-1/12'></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCookRecipes.map(recipe => <WantTOCook key={recipe.recipe_id} wantToCookRecipes={recipe} handlePrepareBtn={handlePrepareBtn}></WantTOCook>)
                            }

                        </tbody>

                    </table>
                    <h1 className='text-2xl font-semibold text-center mt-8 mb-4'>Currently cooking: {currentlyCookingRecipes.length < 10 ? '0' + currentlyCookingRecipes.length : currentlyCookingRecipes.length}</h1>
                    <div className='flex justify-center'>
                        <hr className='w-3/4' />
                    </div>
                    <table className='table-auto w-full mb-24'>
                        <thead className='text-base font-medium'>
                            <tr className='text-left h-16'>
                                <th className='w-1/12'></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th className=''>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentlyCookingRecipes.map((recipe, idx) => <CurrentlyCooking key={idx} currentlyCookingRecipe={recipe}></CurrentlyCooking>)
                            }
                            <tr className='text-base font-medium total-time-calories h-16'>
                                <td></td>
                                <td className='w-2/5'></td>
                                <td>{totalTime} minutes</td>
                                <td>{totalCalories} calories</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default Recipes;