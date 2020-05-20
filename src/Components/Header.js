import React from 'react';
import './../css/header.css';

import Icon from '@material-ui/core/Icon';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DropdownExampleSearchSelectionTwo from './City';
import logo from './../img/log.png'



const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />

            <DropdownExampleSearchSelectionTwo />
            <div className='wether'>
                <p>Сейчас: </p>
                <Icon>cloud</Icon>
                <p>+15</p>
            </div>
            <div className='money'>

                <p>Валюта:</p>
                <AttachMoneyIcon>AttachMoney</AttachMoneyIcon>
                <p>75.37</p>
                <Icon className='indentation'>euro</Icon>
                <p>85.65</p>
            </div>
            <div>
                <button class="ui button blue">Добавить статью</button>
                <button class="ui button" style={{ marginLeft: 5 + "px" }}>Войти</button>
            </div>

        </div>
    )
}

export default Header;