
import Link from "next/link"
export default function MealsPage(){

    const meals =[
        {slug:"spaghetti-carbonara", title:"Italian", chef:"Chef Marco", name:"Spaghetti Carbonara", description:"A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."},
        {slug:"chicken-tikka-masala", title:"Indian", chef:"Chef Priya", name:"Chicken Tikka Masala", description:"A popular Indian dish consisting of roasted marinated chicken chunks in a spiced curry sauce."},
        {slug:"beef-bourguignon", title:"French", chef:"Chef Jean-Pierre", name:"Beef Bourguignon", description:"A traditional French stew made with beef braised in red wine, along with onions, mushrooms, and bacon."},
        {slug:"vegetable-stir-fry", title:"Asian", chef:"Chef Kenji", name:"Vegetable Stir Fry", description:"A quick and healthy dish made by stir-frying a variety of fresh vegetables with soy sauce and garlic."},
        {slug:"fish-tacos", title:"Mexican", chef:"Chef Maria", name:"Fish Tacos", description:"A delicious Mexican dish featuring grilled or fried fish served in soft tortillas with fresh toppings and salsa."}
    ]

    return (
        <div >
            <h1 style={{margin:"0"}}>Discover amazing meals</h1>
            <p>Browse through our collection of delicious meals from around the world</p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1rem", marginTop:"2rem"}}>
              {meals.map((meal) => (
                <div key={meal.slug} style={{ cursor:"pointer",  border:"1px solid #ddd", borderRadius:"8px", backgroundColor:"#f0f8ff", padding:"1rem", marginBottom:"1rem"}}>
                  <h2>{meal.name}</h2>
                    <p><strong>Cuisine:</strong> {meal.title}</p>
                    <p><strong>Chef:</strong> {meal.chef}</p>
                    <p>{meal.description}</p>
                    <Link style={{color:"#3c7ae6",  textDecoration:"none", fontWeight:"bold"}} href={`/meals/${meal.slug}`}>View Recipe</Link>
                </div>
              ))}  
            </div>

        </div>
    )

}