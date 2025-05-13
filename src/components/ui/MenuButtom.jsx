import React from 'react';
import { ClickButtom } from './ClickButtom';

export const MenuButtom = () => {

    return (
        <div className='menu-buttom' onClick={ClickButtom}>
            <div className='bars bars1' ></div>
            <div className='bars bars2'></div>
            <div className='bars bars3'></div>
        </div>
    )
}
