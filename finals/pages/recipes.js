import Image from "next/image";
import fs from 'fs';
import path from "path";

export default function Recipe ({ recipe }) {
    return (
        <>
        <section className="recipesection">
            {recipe.map((recipes) => {
                return (
                    <a className="recipeboxes" key={recipes.id}>
                    <Image 
                        src = {`/recipics/${recipes.image1}`} 
                        alt=""
                        width='100'
                        height='100'
                    />
                    <h1 className="recipetitles">{recipes.Recipe_Name}</h1>
                    </a>
                );
            })}
                


        </section>
        </>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "./pages/recipe.json");
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    console.log(data);
    return {
        props: {
            recipe: data,
        },
    };
}


