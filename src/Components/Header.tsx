const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>Moviecity</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Mount</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">login</button>
            </div>
        </div>
    )
};

export default Header;