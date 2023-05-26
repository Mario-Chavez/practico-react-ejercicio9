import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const CardMascota = () => {
    return (
        <Card  className=' mx-auto formulario p-2 border'>
            
                <div  className='my-5 d-flex justify-content-center '>
                    <Button type='submit' className='px-5 botonFormulario'>Agregar nueva cita</Button>
                </div>
            
        </Card>
    );
};

export default CardMascota;