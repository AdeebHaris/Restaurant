import { Col, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RestView() {
  //useParam hook is used to get parameter passedd in url
  const {id} = useParams()
  console.log("parameter data");
  console.log(id);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const allRestaurant = useSelector(state=> state.restaurantSlice.allRestaurant.restaurants);
  const selectedRestaurant = allRestaurant.find(item=>item.id == id)
  console.log(selectedRestaurant);
   
  return (
    <>
    <Row className="mt-5 mb-5">  
        <Col md={1}>
        
        </Col>
        <Col md={3} sm={3}>
            <img src={selectedRestaurant?.photograph} width='100%' height='100%'  alt="" className="rounded" />
        </Col>
        <Col md={7} sm={9} className="px-5">
        <hr />
        <h5 className="text-center">Restaurant <span className="text-primary">Details</span></h5>
        <hr />
        <ListGroup>
      <ListGroup.Item><h5 className="text-center p-2"><span className="text-primary">{selectedRestaurant.name}</span> </h5></ListGroup.Item>
      <ListGroup.Item>Neighbourhood: <span className="text-primary  ms-2">{selectedRestaurant.neighborhood}</span> </ListGroup.Item>
      <ListGroup.Item>Address: <span className="text-primary  ms-2">{selectedRestaurant.address}</span></ListGroup.Item>
      <ListGroup.Item>Cuisine Type: <span className="text-primary  ms-2">{selectedRestaurant.cuisine_type}</span></ListGroup.Item>
      <ListGroup.Item className="p-3 text-center">
        <button className="btn btn-warning"onClick={handleShow}>Operating Hours</button>
        <button className="btn btn-warning ms-3 " onClick={() => setOpen(!open)}>Click Here To See Reviews</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday : {selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>
      </ListGroup.Item>
    </ListGroup>
        </Col>
    </Row>
    <Row>
      <Col md={4} sm={4}></Col>
      <Col md={7} sm={8}>
      <Collapse in={open}>
        <div>
          {
            selectedRestaurant?.reviews?.length > 0?
            selectedRestaurant.reviews.map((item)=>{
            <div>
              <hr />
              <div className="mt-2">
          <h6>Name and Date: {item.name} - {item.date}</h6>
          <p>Rating: {item.rating}</p>
          <p>{item.comments}</p>
         </div>
            </div>  
            }):
            <p>No reviews found</p>
          }
         
         
        </div>
      </Collapse>
      </Col>
    </Row>
    </>
  )
}

export default RestView