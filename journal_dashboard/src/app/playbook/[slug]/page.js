export default function PlaybookPageDetail({params}){

    const {slug} = params;  
    console.log("Params:", params); // Debugging log to check the params object
    console.log("Slug:", slug); // Debugging log to check the slug value

    return (
        <div>
            <h1>Playbook Detail Page</h1>
            <p>Slug: {slug}</p>
        </div>
    )
}