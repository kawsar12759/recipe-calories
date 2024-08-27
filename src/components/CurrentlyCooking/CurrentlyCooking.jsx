import './CurrentlyCooking.css'
const CurrentlyCooking = ({ currentlyCookingRecipe }) => {
    const { recipe_name, preparing_time, calories, serial } = currentlyCookingRecipe;
    return (
        <tr className='items-center currently-cook-items h-14 text-base'>
            <td className='text-center font-semibold'>{serial}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};

export default CurrentlyCooking;