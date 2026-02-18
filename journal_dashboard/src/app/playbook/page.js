
import Link from "next/link";
export default function PlaybookPage(){

     const playbookEntries = [
        {id:1, title: "Flag", content: "This is the Flag pattern playbook",
            rules:["raise or fall", "min three touch to channel","channel inside fibonachi area","channel filled","reversal from fib area"]
        },
         {id:2, title: "Pullback", content: "This is pullback playbook",
            rules:["strong momentum candle rally","trendline area created","strong and cleare trendline breakout"]
        },
         {id:3, title: "Smc", content: "This is smc playbook",
            rules:["FVG","CHoCh","BoS","liquidity sweep $$$","reversal from third touch"]
        },
    ];

    return(
        <div>
        <h1>Trading Playbook</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1rem" , margin:"2rem"}}>
            {playbookEntries.map(entry => (
                <div style={{border:"1px solid #524f4f", padding:"1rem", margin:"1rem 0", borderRadius:"8px"}} key={entry.id}>
                    <h2 style={{ fontWeight:"bold", color:"rgb(45, 55, 72)", marginBottom:"0.5rem"}}>{entry.title}</h2>
                    <p style={{color:"rgb(45, 55, 72)", marginBottom:"1rem"}}>{entry.content}</p>
                    <h3 style={{color:"rgb(45, 55, 72)", marginBottom:"0.5rem"}}>Rules:</h3>
                    <ul>
                        {entry.rules.map((rule, index) => (
                            <li key={index}>
                                <input type="checkbox" id={`rule-${entry.id}-${index}`} name={`rule-${entry.id}`} value={rule} />
                                <label htmlFor={`rule-${entry.id}-${index}`}>{rule}</label>
                            </li>
                        ))}
                    </ul>
                    <div style={{marginTop:"1rem", padding:"0.5rem", backgroundColor:"#1a99d9", borderRadius:"4px", textAlign:"center", color:"rgb(250, 251, 253)"}}>     
                        <Link style={{ textDecoration:"none", fontWeight:"bold", padding:"0.5rem 1rem", }} href={`/playbook/${entry.id}`}>View in detail</Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}