import "./Cards.css"

export default function Cards(props) {
    return(
        <>
        <div className="card">
            <h2>{props.Name}</h2>
            <p>{props.Paragraph}</p>
        </div>
        </>
    )
}