import "./ProductoCard.css"

function ProductoCard(props){
    return(
        <>
            <div className="producto">
                <div className="proImg">
                    <img src={props.src} alt=""/>
                </div>
                <hr></hr>
                <p>{props.nombre}</p>
                <p>{props.precio}</p>
            </div>
        </>
    )
}

export default ProductoCard