import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <>
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant?.photograph} style={{height:'300px',width:'300px'}}/>
      <Card.Body>
        <Card.Title className='text-center text-primary'>{restaurant?.name}</Card.Title>
        <Card.Text>
          Neighbourhood: <span className='text-primary ms-2' >{restaurant?.neighborhood}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
    </>
  )
}

export default RestCard