

function Movie(props) {
    return (
        <>
            <h1>The Lord of the Rings: {props.title}</h1>
            <p>{props.hours}h {props.minutes}min</p>
        </>
    )
}

export default Movie;