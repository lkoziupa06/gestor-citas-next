import Label from "../Label"
import Input from "../Input"
import Boton from "../Boton"
import '../../globals.css'

export const FormContact = () =>{
    return(
        <form className="form mb-5">
                <Label nombre="Nombre" />
                <Input type="text" name="nombre" placeholder="Ingrese su nombre"/>
                <Label nombre="Correo electrónico" />
                <Input type="text" name="email" placeholder="Ingrese su email"/>
                <Label nombre="Mensaje" />
                <textarea name="mensaje" id="mensaje"></textarea>
                <Boton nombre="Enviar" type="submit" onClick={''}/>
        </form>
    );
}