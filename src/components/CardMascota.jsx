import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Avatar from 'react-avatar';

const CardMascota = () => {
    return (
        <>
             {/* {colores.map((color,index)=>
             )} */}
                <Card  className="my-3 cards col-lg-3 col-md-4 m-1 " >
                    <Card.Body >
                        <div className='d-flex'>
                            <Avatar size="40" color='#0D6EFD' round="100px"/>
                            <Card.Title className=" ms-4"> 
                            mascota : pepe
                            <div className='fw-light'>
                                soy pepe
                            </div>
                            </Card.Title>
                            
                        </div>
                        <hr />
                        <div className="my-4">
                          <Card.Text className='my-2'>Fecha : <span className="border border-primary border-1 p-1">fdggg</span></Card.Text>
                          <Card.Text className='my-2'>Hora : <span className="border border-primary border-1 p-1">fdggg</span></Card.Text>
                          <Card.Text className='my-2'>Sintomas : <span className="border border-primary border-1 p-1">fdggg</span></Card.Text>
                        </div>
                        
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                                <Button className="col-7 botonFormulario" variant="danger" >Borrar</Button>
                    </Card.Footer>
                </Card>
            
        </>
        // <Card  className=' mx-auto formulario p-2 border'>
            
        //         <div  className='my-5 d-flex justify-content-center '>
        //             <Button type='submit' className='px-5 botonFormulario'>Agregar nueva cita</Button>
        //         </div>
            
        // </Card>
    );
};

export default CardMascota;