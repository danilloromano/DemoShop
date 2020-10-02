import React from 'react';
import './SideBarHeader.scss';
import Step from '../step/Step';

const SideBarHeader = () => {
    return (
        <div className="sidebar-header">
            <Step currentStep={1}/>
            <div className="sidebar-header__title">
            <div>
            <img className="sidebar-header__image" src="../src/assets/images/header-icon.png" />
            </div>
                <h1 className="sidebar-header__text">Adicione um novo cartão de crédito</h1>
            </div>
        </div>
    )
}

export default SideBarHeader;