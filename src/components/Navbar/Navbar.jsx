import './Navbar.css'
import logo from './Assets/logo.svg'

function cambio(event){
    if(event.target.className==="fas fa-bars"){
        event.target.className="fas fa-times";
        document.getElementById("navbar").classList.add('activo');
    }
    else{
        event.target.className="fas fa-bars";
        document.getElementById("navbar").classList.remove('activo');
    }
}

function buscar(e){
    e.preventDefault();
    window.location.replace(`/tienda/${e.target[0].value}`);
}

const Navbar = () => {

    return(
        <>  
            <div className="navCont">
                <nav className="Navbar">
                    <a href="/">
                        <img src={logo} alt=""></img>
                    </a>
                    <form onSubmit={buscar}>
                        <input type="search" placeholder="Hola! ¿Que deseas buscar?"/>
                        <button type="submit"/>
                    </form>
                    <ul id="navbar">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/acerca">Sobre nosotros</a></li>
                        <li><a href="/tienda">Tienda</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                    <div id="movil">
                        <i className="fas fa-bars" onClick={cambio} />
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;