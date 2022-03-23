function Nav({children}) {
    const navLi = children.map((link, index) => {
        return <li key={index}>{link}</li>
    });

    return (
        <nav className="nav">
            <ul className="nav__list">
                {navLi}
            </ul>
        </nav>
    );
}

export default Nav;