import React from 'react';
import './../css/menu.css';
import './../css/clear.css';
import { NavLink } from 'react-router-dom';



const Menu = () => {
    return (
        <div>
            <div class='bg'>
                <div class="center">
                    <div class="ui inverted menu blue scroll" >
                        <NavLink to="/index" className="item" activeClassName="active">Главная</NavLink>
                        <NavLink to="/news" className="item" activeClassName="active">Новости</NavLink>
                        <NavLink to="/region" className="item" activeClassName="active">Ярославль</NavLink>
                        <NavLink to="/blog" className="item" activeClassName="active">Блог</NavLink>
                        <NavLink to="/health" className="item" activeClassName="active">Здоровье</NavLink>
                        <NavLink to="/sport" className="item" activeClassName="active">Спорт</NavLink>
                        <NavLink to="/poster" className="item" activeClassName="active">Афиша</NavLink>
                        <NavLink to="/weather" className="item" activeClassName="active">Погода</NavLink>
                        <NavLink to="/program" className="item" activeClassName="active">Программа</NavLink>
                        <NavLink to="/test" className="item" activeClassName="active">Тесты</NavLink>
                        <NavLink to="/horoscope" className="item" activeClassName="active">Гороскоп</NavLink>
                        {/* <a class="item">Новости</a>
                        <a class="item">Ярославль</a>
                        <a class=" item">Ж.Блог</a>
                        <a class="item">Здоровье</a>
                        <a class=" item">Спорт</a>
                        <a class="item">Афиша</a>
                        <a class="item">Погода</a>
                        <a class="item">Программа</a>
                        <a class=" item">Тесты</a>
                        <a class="item">Гороскоп</a> */}
                        <div class="right menu">
                            <div class="item">
                                <div class="ui icon input">
                                    <input type="text" placeholder="Поиск..." />
                                    <i aria-hidden="true" class="search icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Menu;





