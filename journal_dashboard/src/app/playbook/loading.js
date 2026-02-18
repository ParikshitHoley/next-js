export default function Loading(){

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100vh"}}>
            <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"rgb(45, 55, 72)", marginBottom:"1rem"}}>Loading Playbook...</h1> 
            <div style={{border:"4px solid #f3f3f3", borderTop:"4px solid #3498db", borderRadius:"50%", width:"40px", height:"40px", animation:"spin 2s linear infinite"}}></div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}
            </style>
        </div>
    )
}