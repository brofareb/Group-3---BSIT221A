import Image from "next/image";
import fs from 'fs';
import path from "path";

export default function Recipe ({ recipe }) {
    return (
        <>
        <section className="recipesection">
            <div className="recipes_div1">
                <h1 className="recipename">{recipe.Recipe_Name}</h1>
                <Image 
                src={recipe.image1} 
                width='500'
                height='400'
                />
            </div>

            <div className="recipes_div2">
                <div className="details">
                    <p className="deets">{recipe.PreparationTime}</p>
                    <p className="deets">{recipe.CookingTime}</p>
                    <p className="deets">{recipe.DifficultyLevel}</p>
                    <p className="deets">{recipe.DietaryRestriction}</p>
                    <p className="deets">{recipe.Calories}</p>
                </div>
            </div>

            <div className="recipes_div3">
                <div className="ingredients">
                    <Image 
                        src={recipe.image2}
                        width='1100'
                        height='500'
                    />
                    <h1 className="ingredientss">Ingridients:</h1>
                    <ul className="recipe_ingredients">
                        {Object.values(recipe.ingredients).map((ingredients, index) => (
                            <li className="recipe_list" key={index}>
                                {ingredients}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
        </>
    );
}
