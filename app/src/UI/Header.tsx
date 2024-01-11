import "./Header.css"

export const Header = (props: any) => {

    return(
        <div className="headerWrapper">
            <div className="iconContainer">
                <img className="bcgovIcon" src="bcgov_logo.svg" alt="Government of British Columbia" />
            </div>
            <div className="titleContainer">
                <p className="headerText">Moose Tracker</p>
            </div>
        </div>
    )
}