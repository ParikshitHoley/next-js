export default async function MealDetailPage({ params }) {
  console.log("MealDetailPage params:", params);

const { slug } = await params;
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Meal details for {slug}</h1>
      <p>Details about the meal with slug: <strong>{slug}</strong></p>
      <p>this page is dynamically generated based on the meal slug.</p>

      <div style={{backgroundColor:"#f0f8ff", padding:"1rem", borderRadius:"8px", marginTop:"2rem"}}>
        <h3>Recipe Information</h3>
        <p>Recipe details for the meal with slug: {slug}</p>
        <p>dynamic url is /meals/{slug}</p>
      </div>
    </div>
  );
}