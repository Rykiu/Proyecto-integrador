import "./Store.css"
import ProductoCard from "./Card/ProductoCard"
import lista from "./tienda.json"
import { useParams } from "react-router-dom";


const Productos = () => {
    const {buscar} = useParams();
    const listaFiltrada=[];
    let re = new RegExp(`(${{buscar}.buscar})`,"i");
    if ({buscar}.buscar!==undefined){
        lista.forEach(articulo => {
            if(articulo.nombre.match(re)){
                listaFiltrada.push(<ProductoCard key={articulo.id} src={require(`./Assets/${articulo.imagen}`)} nombre={articulo.nombre} precio={articulo.precio}/>) ;
            }
        })
    }
    else{
            lista.forEach(articulo => {
            listaFiltrada.push(<ProductoCard key={articulo.id} src={require(`./Assets/${articulo.imagen}`)} nombre={articulo.nombre} precio={articulo.precio}/>) ;
        })
    }
    return listaFiltrada;
}

const Store = () => {
    return(
        <>
            <div className="strCont">
                <div className="Store">
                    <Productos />
                </div>
            </div>
        </>
    )      
}

export default Store;