import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import recipesData from "/pages/recipe.json";


export default function ViewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      const recipe = recipesData.find((recipe) => recipe.Id === parseInt(id));
      setSelectedRecipe(recipe);
    }
  }, [id]);

  if (!selectedRecipe) {
    return;
  }

  return (
    <>
      <section className="viewpage">
        <div className="topview">
          <div className="title">
            <h1 className="recipetitle">{selectedRecipe.Recipe_Name}</h1>
          </div>
          <div className="details">
            <h4 className="deets">{selectedRecipe.PreparationTime}</h4>
            <h4 className="deets">{selectedRecipe.CookingTime}</h4>
            <h4 className="deets">{selectedRecipe.DifficultyLevel}</h4>
            <h4 className="deets">{selectedRecipe.DietaryRestriction}</h4>
            <h4 className="deets">{selectedRecipe.Calories}</h4>
          </div>
          <div className="img1">
            <Image 
              src= {`/recipics/${recipes.image1}`} 
              alt="Food"
              width='100'
              height='100'
            />
          </div>

          <div className="img2">  
          <Image 
            src= {`/recipics/${recipes.image2}`}
            alt="Food"
            width='100'
            height='100'
          />
          </div>

          

        </div>



      </section>
       
    </>
  );
}

