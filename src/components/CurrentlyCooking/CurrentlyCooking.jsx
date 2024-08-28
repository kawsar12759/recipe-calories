import './CurrentlyCooking.css'
const CurrentlyCooking = ({ currentlyCookingRecipe }) => {
    const { recipe_name, preparing_time, calories, serialOfCurrentlyCook } = currentlyCookingRecipe;
    return (
        <tr className='items-center currently-cook-items h-16 text-base'>
            <td className='text-center font-semibold'>{serialOfCurrentlyCook}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};

export default CurrentlyCooking;