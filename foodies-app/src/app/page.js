import Link from 'next/link'

export default function Home() {
  return (
   <div style={{padding:"1rem"}}>
    <nav style={{padding:"1rem", backgroundColor:"#f8f8f8", display:"flex", gap:"1rem", marginBottom:"2rem",border:"1px solid #ccc",borderRadius:"8px"}}> 
      <Link style={{marginRight:"1rem", textDecoration:"none", color:"black"}} href="/">Home</Link>
      <Link style={{marginRight:"1rem",textDecoration:"none", color:"black"}} href="/about">About</Link>
      <Link style={{textDecoration:"none", color:"black"}} href="/contact">Contact</Link>
    </nav>
    <main>
      <h1>Welcome to Foodies App!</h1>
      <p>Discover delicious recipes and share your culinary creations with the world.</p>
      <p>Explore our collection of recipes, connect with fellow food enthusiasts, and get inspired to cook something amazing today!</p>

    </main>
   </div>
  )
}