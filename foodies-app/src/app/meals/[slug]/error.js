

"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" , backgroundColor:"#fed7d7", border:"2px solid #fc8181", borderRadius:"8px"  }}>
        <h1 style={{ color: "#e53e3e" }}>Opp !Something went wrong!</h1>
        <p>We could not find that Delicious meal.</p>
        <p style={{ fontSize: "0.875rem",  color: "#718096" }}>Error : {error.message}</p>
        <button
          onClick={() => reset()}   
            style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#3182ce",
                color: "white",
                border: "none", 
                borderRadius: "4px",
                cursor: "pointer",  
            }}
        >
          Try Again 
        </button>
    </div>
  );
}   