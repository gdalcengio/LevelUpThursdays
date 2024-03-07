import "./Header.css"
import { useNavigate } from "react-router-dom";

export const Header = (props: any) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/About');
  }
  
  const goToRegs = () => {
    navigate('/Regulations');
  }

  const goToForm = () => {
    navigate('/');
  }

  const goToSightings = () => {
    navigate("/Sightings");
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
              <button className="headerButton" onClick={goToForm}>
                Add a Moose Sighting
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/Sightings" ? 'header-selected ' : ''}`} to="/Sightings">
                Sightings
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/About" ? 'header-selected ' : ''}`} to="/About">
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/Regulations" ? 'header-selected ' : ''}`} to="/Regulations">
                Regulations
              </NavLink>
              <NavLink className={`headerButton ${location.pathname === "/About" ? 'header-selected ' : ''}`} to="/About">
                About
              </NavLink>
            </div>
          </div>
        <span className="horizontal-line"></span>
      </header>
    )
}