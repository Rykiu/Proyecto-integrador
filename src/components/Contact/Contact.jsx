import "./Contact.css"
import Form from "./components/Form"

const Contact = () => {
    return(
        <>
            <div className="conContact">  
                <section className="Contact">
                    <hr />
                    <h1>Contacto</h1>
                    <p>Comuniquese con nosotros.</p>
                    <Form />
                </section>
            </div>     
        </>
        
    )      
}
export default Contact;