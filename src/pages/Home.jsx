import { Col, Row } from "react-bootstrap";
import RestCard from "../components/RestCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurant } from "../redux/restaurantSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);
  const allRestaurant = useSelector(state=> state.restaurantSlice.allRestaurant.restaurants
  );
  console.log(allRestaurant);

  return (
    <>
      <Row className="mt-3">
      {
          allRestaurant?.length > 0 ?
            allRestaurant.map((restaurant) => (
              <Col sm={6} md={4} lg={4} className="px-5 py-3" >
                <RestCard restaurant={restaurant} />
              </Col>
            )) :
            <p>No item found</p>
        }
      </Row>
    </>
  );
}

export default Home;
