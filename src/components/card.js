
function Card(props) {
    return(
        <a href ={props.link} target="_blank" className="min-height-30 decoration-none cursor-pointer col d-flex flex-row align-items-center justify-content-start">
            <img className="h-75 rounded" src={props.img}></img>
            <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                <h1 className="mont fs-3 truncate-row">{props.titolo}</h1>
                <p className="truncate-row ">{props.descrizione}</p>
            </div>
        </a>
    );
}
export default Card