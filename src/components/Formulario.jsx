import React, { useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import CardMascota from './CardMascota';

const Formulario = () => {
   const [nombreMascota, setNombreMascota] = useState("");
   const [nombreDueño, setNombreDueño] = useState("");
   const [fecha, setFecha] = useState("")
   const [hora, setHora] = useState("")
   const [sintomas, setSintomas] = useState("")
   
   
   const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(nombreMascota,nombreDueño,fecha,hora);
    }
   /* fijarme como hacer para q los nombres queden al costado */
    return (
        <> 
            <section>
                <Form onSubmit={handleSubmit} className=' mx-auto formulario p-2 border'>
                    <div>
                        <p className='text-info fs-5' >Llenar el formulario para crear una cita</p>
                        <hr />
                    </div>
                    <Form.Group  className="d-flex m-2" controlId="nombreMascota">
                    <Form.Label className='me-3'>Nombre mascota:</Form.Label>
                        <Form.Control type="text"
                        placeholder="Escribe el nombre"
                        onChange={(e)=>setNombreMascota(e.target.value)}
                        value={nombreMascota}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="d-flex m-2" controlId="nombreDueño" >
                        <Form.Label className='me-4'>Nombre dueño:</Form.Label>
                        <Form.Control type="text"
                        placeholder="Escribe tu nombre" 
                        onChange={(e)=>setNombreDueño(e.target.value)}
                        value={nombreDueño}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="d-flex m-2" controlId="fecha" >
                        <Form.Label className='me-4'>Fecha:</Form.Label>
                        <Form.Control type="date"
                        placeholder="email@ejemplo.com"
                        onChange={(e)=>setFecha(e.target.value)}
                        value={fecha}
                        required
                        className='ms-5'
                        />
                        <Form.Label className='mx-1'>Hora:</Form.Label>
                        <Form.Control type="time"
                        placeholder="email@ejemplo.com"
                        onChange={(e)=>setHora(e.target.value)}
                        value={hora}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="d-flex m-2" controlId="sintomas" >
                        <Form.Label className='me-4'>Sintomas:</Form.Label>
                        <Form.Control 
                        as="textarea"
                        placeholder="Escribe los sintomas de tu mascota" 
                        onChange={(e)=>setSintomas(e.target.value)}
                        value={sintomas}
                        required
                        className='ms-4'
                        />
                    </Form.Group>
                    <Form.Group>
                        <div  className='my-5 d-flex justify-content-center '>
                            <Button type='submit' className='px-5 botonFormulario'>Agregar nueva cita</Button>
                        </div>
                    </Form.Group>
                </Form>
            </section>
            <section className="row justify-content-between mt-5">
                    <CardMascota/>
            </section>
        </>
    );
};

export default Formulario;