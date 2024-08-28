import './WantToCook.css'
const WantTOCook = ({ wantToCookRecipes, handlePrepareBtn }) => {
    const { recipe_name, preparing_time, calories, serialOfWantToCook } = wantToCookRecipes;
    return (
        <tr className='items-center want-to-cook-items h-16 text-base'>
            <td className='text-center font-semibold'>{serialOfWantToCook}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td><button onClick={() => handlePrepareBtn(wantToCookRecipes)} className='prepare-btn py-2 px-6 text-lg font-medium rounded-full'>Preparing</button></td>
        </tr>
    );
};

export default WantTOCook;