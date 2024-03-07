import "./Header.css"
import { useNavigate, useLocation, NavLink } from "react-router-dom";

export const Header = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/About');
  }

  const goToRegs = () => {
    navigate('/Regulations');
  }

  const goToForm = () => {
    navigate('/');
  }

    return(
      <header className="headerMain">
        <div className="headerWrapper">
            <div className="iconContainer">
                <img className="bcgovIcon" src="BC_logo.png" alt="Government of British Columbia" onClick={goToForm}/>
            </div>
            <div className="titleContainer" onClick={goToForm}>
                <p className="headerText">Moose Tracker</p>
            </div>
            <div className="headerButtonContainer">
              <NavLink className={`headerButton ${location.pathname === "/" ? 'header-selected ' : ''}`} to="/">
                Add a Moose Sighting
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/Sightings" ? 'header-selected ' : ''}`} to="/Sightings">
                Sightings
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/About" ? 'header-selected ' : ''}`} to="/About">
              </button>
              <button className="headerButton" onClick={goToRegs}>
                Regulations
              </button>
              <button className="headerButton" onClick={goHome}>
                About
              </NavLink>
              </button>
              <button className="headerButton" onClick={goToSightings}>
                Sightings
              </button>
            </div>
        </div>
        <span className="horizontal-line"></span>
      </header>
    )
}