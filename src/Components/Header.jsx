const Header = () => {

    function toggleNightMode() {
       document.querySelector(':root').classList.toggle('dark-mode')
    }

    return (
        <header>
            <h1>TODO</h1>
            <button id="night-mode" onClick={toggleNightMode}><span className="night-mode-btn"></span></button>
        </header>
    )
}

export default Header
