import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const user = useSelector((state) => state.currentUserReducer)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav className="main-nav">
      {" "}
      <h2 className="nav-logo" >Online Cyber Cafe</h2>
      <Link to="/" className="nav-item nav-btn about">
        About
      </Link>
      <Link to="/" className="nav-item nav-btn products">
        Products
      </Link>
      <Link to="/" className="nav-item nav-btn forTeams">
        ForTeams
      </Link>
      {user === null ? (
        <Link to="/Auth" className="nav-item nav-links">
          Log in
        </Link>
      ) : (
        <>
          <Link to={`Users/1`} className="nav-image" style={{ textDecoration: "none" }}>
            <Avatar
              backgroundImage="url(https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik&psig=AOvVaw3w-7LryEynFnriTzadxzn7&ust=1677311659791000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDuuP3Wrf0CFQAAAAAdAAAAABAE)"
              padding="1.2rem"
              borderRadius="50%"
            ></Avatar>
          </Link>
          <button className="nav-item nav-links" onClick={handleLogOut} >
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
