"use client"
import Form from "../components/Form";
import Cita from "../components/Cita";
import { useState, useEffect } from "react";
export default function reservas(){

    const [citas, setCitas] = useState([]);
    function addCita(form){
        const {
            mascota = '',
            dueno = '',
            fecha = '',
            hora = '',
            sintomas = '',
            index = ''
        } = form || {}; 
        
        setCitas(citas.concat({
            mascota: mascota,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas,
            index: index
        }))
    }

    useEffect(() => {
        console.log('Las citas se modificaron:', citas);
    }, [citas]);
    
    const eliminarCita = (target) =>{
        if (window.confirm('¿Quieres eliminar esta cita?')) {
            handleDelete(target);
        }
    }
      
    const handleDelete = (target) =>{
        let index = target.target.id;
        const arrayActualizado = citas.filter(cita => cita.index !== index);
        setCitas(arrayActualizado);
    }

    return (
        <>
            <h1>ADMINISTRADOR DE CITAS</h1>
            <div className="row">
                <div className="one-half column">
                    <h2>AGENDAR CITA</h2>
                    <Form funcion={addCita}/>
                </div>
                <div className="one-half column">
                <h2>LISTADO DE CITAS</h2>
                    {citas.map((cita, key) => (
                        <Cita cita={cita} key={key} funcion={eliminarCita}/>
                    ))}
                </div>
            </div>
        </>
    );
}
