import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className="logo">Mister Bitcoin</h1>
                <section className="back">
                    <button onClick={props.history.goBack}>Back</button>
                </section>
                <nav>
                    <NavLink exact to='/' >Home</NavLink>
                    <NavLink to='/contact' >Contact</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)