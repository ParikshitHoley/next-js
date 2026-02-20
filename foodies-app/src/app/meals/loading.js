

export default function Loading() {
    return (
        <div style={{textAlign:"center", padding:"2rem", backgroundColor:"#f0f8ff", borderRadius:"8px", border:"1px solid #b3cde0"}}>
            <h2>Cooking .... </h2>
            <div style={{width:"40px", height:"40px", border:"4px solid #d9e720", borderTop:"4px solid transparent", borderRadius:"50%", margin:"1rem auto", animation:"spin 1s linear infinite"}}>
                <p>Fetching delicious meals and recipes for you!</p>
                <p>Please wait while we prepare your favorite dishes!</p>
            </div>
        </div>
    )
}