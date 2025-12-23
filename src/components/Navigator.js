export default function Navigator() {
    return (
        <nav className="s-menu">
            <ul>
                <li className="s-menu__item">
                    <a href="/">Página Inicial</a>
                </li>
                <li className="s-menu__item">
                    <a href="./pages/tobey-maguire/spiderman1.html">Tobey Maguire</a>
                </li>
                <li className="s-menu__item s-menu__icon">
                    <img src="./assets/images/icons/spider.svg" alt="logo spider"/>
                </li>
                <li className="s-menu__item">
                    <a href="./pages/tom-holland/spiderman1.html">Tom Holland</a>
                </li>
                <li className="s-menu__item">
                    <a href="./pages/andrew-garfield/spiderman1.html">Andrew Garfield</a>
                </li>
            </ul>
        </nav>
    );
}