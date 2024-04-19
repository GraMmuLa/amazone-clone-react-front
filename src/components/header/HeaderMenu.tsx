const HeaderMenu = () => {
    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="" className="menu__link">Всі<span><img src="img/arrow.svg" alt="arrow"/></span></a>
                    <ul className="menu__sub-list">
                        <li className="menu__sub-item">
                            <a href="" className="menu__sub-link">lorem 1</a>
                        </li>
                        <li className="menu__sub-item">
                            <a href="" className="menu__sub-link">lorem 2</a>
                        </li>
                    </ul>
                </li>
                <li className="menu__item"><a href="" className="menu__link">Сьогоднішні пропозиції</a></li>
                <li className="menu__item"><a href="" className="menu__link">Купити знову</a></li>
                <li className="menu__item"><a href="" className="menu__link">Обслуговування клієнтів</a></li>
                <li className="menu__item"><a href="" className="menu__link">Подарункові карти</a></li>
                <li className="menu__item"><a href="" className="menu__link">Продати</a></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;