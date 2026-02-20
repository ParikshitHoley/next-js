
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"Arial, sans-serif", margin:"0", padding:"0", backgroundColor:"#fff"}}>
        <header style={{backgroundColor:"#2d3748", color:"white",padding:"1rem 2rem", boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <h1 style={{margin:"0"}}>Foodies App</h1>
            <nav>
              <Link style={{marginRight:"1rem", textDecoration:"none", color:"white"}} href="/">Home</Link>
              <Link style={{marginRight:"1rem",textDecoration:"none", color:"white"}} href="/about">About</Link>
              <Link style={{marginRight:"1rem",textDecoration:"none", color:"white"}} href="/contact">Contact</Link>
              <Link style={{textDecoration:"none", color:"white"}} href="/meals">Meals</Link>
            </nav>
          </div>
        </header>
        <main style={{padding:"2rem"}}>{children}</main>
        <footer style={{padding:"1rem 2rem",color:"white", backgroundColor:"#2d3748", textAlign:"center", marginTop:"2rem",}}>
          <p style={{margin:"0"}}>&copy; 2024 Foodies App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
} 