import Image from "next/image";
import fs from 'fs';
import path from "path";
import Head from "next/head";
import { useState } from "react"





export default function Recipe ({ recipe }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    let filteredRecipe = recipe;
    if (selectedCategory) {
        filteredRecipe = recipe.filter((r) => r.Category === selectedCategory);
    }

    return (
        <>
        <Head>
        <title>The Recipe Room</title>
        <link rel="icon" href="/assets/logo1.png" />
      </Head>

     

            <section className="recipesection">
            {recipe.map((recipes) => {
                return (
                    
                    <a className="recipeboxes" key={recipes.id}>
                    <Image 
                        src = {`/recipics/${recipes.image1}`} 
                        alt=""
                        width='200'
                        height='100'
                    />
                    <h5 className="recipetitles">{recipes.Recipe_Name}</h5>
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

