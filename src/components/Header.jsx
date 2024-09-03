import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchRestaurant } from "../redux/restaurantSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Link
            to={"/"}
            style={{ textDecoration: "none", overflowY: "hidden" }}
          >
            <div className="d-flex justify-content-center align-items-center">
            <Navbar.Brand className="d-flex ">
              <img
                alt=""
                src="https://img.icons8.com/?size=100&id=EvrLar2yzS3V&format=png&color=000000"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Food <span className="text-primary">Circle</span>
             
            </Navbar.Brand>
            <input
                type="text"
                className="form-control ms-5 w-50"
                placeholder="Search by Name"
                onChange={(e)=>dispatch(searchRestaurant(e.target.value))}
              />
            </div>
            
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
