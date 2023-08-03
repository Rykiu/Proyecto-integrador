import "./Form.css"
    
function Form(){
    const v1="^[a-zA-Z]{3,13}$"; 
    const v2="^[a-zA-Z0-9]{3,10}[_]?[a-zA-Z0-9]{0,10}@[a-zA-Z0-9]{4,8}(.com)(.ar)?$";
    const v3="^[a-zA-Z0-9]{4,25}$";
    const v4="^[0-9]{10,13}$";
    const fprueba = (e) =>{
        e.preventDefault()
        const entrada = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value,e.target[4].value, e.target[5].value]
        alert(`
                Nombre: ${entrada[0]}
                Correo Electronico: ${entrada[1]}
                Tipo: ${entrada[2]}
                Asunto: ${entrada[3]}
                Teléfono: ${entrada[4]}
                Mensaje: ${entrada[5]}
                
                ¡Su mensaje se envió con éxito!`
            )
    }        
    return (
        <>
            <form className="Form" onSubmit={fprueba}>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" required pattern={v1} title="Ingrese entre 4 y 25 caracteres (solo letras) para el nombre"/><br/>
                    <label>Direccion de correo:</label>
                    <input type="text" name="correo" required pattern={v2} title="Solo se aceptan dominios .com o .com.ar"/><br/>
                    <label>Tipo:</label>
                    <select name="tipo">
                        <option value="1" disabled> Seleccione una opción </option>
                        <option value="Público">Gremio</option>
                        <option value="Gremio">Publico</option>
                    </select><br/><br/>
                    <label>Asunto:</label>
                    <input type="text" required pattern={v3} title="Ingrese entre 4 y 25 caracteres para el asunto"/><br/>
                    <label>Teléfono</label>
                    <input type="text" required pattern={v4} title="Por favor ingrese código de área + número"/><br/>
                    <label>Mensaje:</label>
                    <textarea rows="10" required title="Por favor ingrese al menos 10 caracteres"></textarea><br/>
                    <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default Form
