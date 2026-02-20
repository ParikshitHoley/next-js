import Link from "next/link";


export default function MealsLayout({ children }) {
  return (
    <div style={{ padding: "1rem" }}>
     <div style={{backgroundColor:"#fffbf0", padding:"1rem", borderRadius:"8px", border:"1px solid #ffd700"}}>
        <h2 style={{margin:"0" , color:"#d69e2e"}}>Meals Section</h2>
        <p style={{margin:"0.5rem 0", color:"#747474"}}>Explore our delicious meals and recipes!</p>
    
     </div>
     <nav style={{ marginBottom:"2rem"}}>
        <Link style={{marginRight:"1rem",color:"white",backgroundColor:"#d69e2e",padding:"0.5rem 1rem", borderRadius:"4px"}} href="/meals">All  Meals</Link>
        <Link style={{color:"white",backgroundColor:"#22cf3f",padding:"0.5rem 1rem", borderRadius:"4px"}} href="/meals/share">Share your Recipe</Link>
     </nav>
     {children}
    </div>
  );
}