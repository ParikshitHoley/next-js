import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        < header style={{
          backgroundColor:"#2d3748",
          color:"white",
          padding:"1rem 2rem",
          boxShadow:"0 2px 4px rgba(0,0,0,0.1)",
          marginBottom:"2rem"
        }}>
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}>
            <h1 style={{margin:"0"}}>Journal Dashboard</h1>
            <nav>
              <Link style={{color:"white",marginRight:"1rem",textDecoration:"none"}} href="/">Home</Link>
              <Link style={{color:"white",marginRight:"1rem",textDecoration:"none"}} href="/about">About</Link>
              <Link style={{color:"white",marginRight:"1rem",textDecoration:"none"}} href="/playbook">Playbook</Link>
              <Link style={{color:"white",textDecoration:"none"}} href="/contact">Contact</Link>  
            </nav>
          </div>
        </header>
        <main style={{
          padding:"0 2rem",
          minHeight:"70vh",
          backgroundColor:"#f9f9f9",
          borderRadius:"8px",
          boxShadow:"0 2px 4px rgba(0,0,0,0.1)"
        }}>{children}</main>
        <footer style={{
          backgroundColor:"#2d3748",
          color:"white",
          textAlign:"center",
          padding:"1rem",
          marginTop:"2rem"
        }}>
          <p>&copy; 2026 Journal Dashboard - trading community -share your playbook</p>
        </footer>
      </body>
    </html>
  );
}
