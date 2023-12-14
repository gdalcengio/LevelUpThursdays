import "./Header.css"
import { useNavigate } from "react-router-dom";

export const Header = (props: any) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/About');
  }

  const goToForm = () => {
    navigate('/');
  }

    return(
        <div className="headerWrapper">
            <div className="iconContainer">
                <img className="bcgovIcon" src="bcgov_logo.svg" alt="Government of British Columbia" />
            </div>
            <div className="titleContainer" onClick={goToForm}>
                <p className="headerText">Moose Tracker</p>
            </div>
            <div className="about-button-container">
                <button className="about-button" onClick={goHome}>
                  About
                </button>
            </div>
        </div>
    )
}