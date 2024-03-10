import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import recipesData from "/pages/recipe.json";


export default function RecipeViewPage() {
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className={styles.Viewpage_title}>
        <div className={styles.viewpage_top}>
          <div className={styles.title_div}>
            <h1 className={styles.title}>{selectedRecipe.Recipe_name}</h1>
            <h3 className={styles.subtitle}>{selectedRecipe.Category}</h3>
          </div>
          <div className={styles.description}>
            <p>{selectedRecipe.Description}</p>
          </div>
        </div>
      </section>
      <section className={styles.recipe_container}>
        <div className={styles.col1}>
          <img
            className={styles.img}
            src={`../recipes/${selectedRecipe.image}`}
            alt=""
          />
          <div className={styles.oval}></div>
          <div className={styles.details}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <h1 className={styles.title}>Preperation Time</h1>
                    <h2 className={styles.subtitle}>
                      {selectedRecipe.Preparation_time}
                    </h2>
                  </td>
                  <td>
                    <h1 className={styles.title}>Cooking Time</h1>
                    <h2 className={styles.subtitle}>
                      {selectedRecipe.Cooking_time}
                    </h2>
                  </td>
                  <td>
                    <h1 className={styles.title}>Calories</h1>
                    <h2 className={styles.subtitle}>
                      {selectedRecipe.Calories}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 className={styles.title}>Difficulty:</h1>
                    <h2 className={styles.subtitle}>
                      {selectedRecipe.Difficulty}
                    </h2>
                  </td>
                  <td colSpan="2">
                    <h1 className={styles.title}>Dietary Restriction:</h1>
                    <h2 className={styles.subtitle}>
                      {selectedRecipe.Dietary_restriction}
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.col2}>
          <h1 className={styles.ingredients}>Ingredients:</h1>
          <ul className={styles.ul}>
            {Object.values(selectedRecipe.Ingredients).map(
              (ingredient, index) => (
                <li className={styles.li} key={index}>
                  {ingredient}
                </li>
              )
            )}
          </ul>
          <h2 className={styles.procedure}>Procedure</h2>
          <ol className={styles.ol}>
            {Object.values(selectedRecipe.Procedure).map((step, index) => (
              <li className={styles.li} key={index}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}