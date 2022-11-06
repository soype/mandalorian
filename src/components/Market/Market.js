import React, {useState} from 'react';

import classes from './Market.module.css';

import Blaster from '../../media/images/guns/blaster.png';
import HanSolo from '../../media/images/guns/han-solo.png';
import WingBlaster from '../../media/images/guns/wing-blaster.png';
import TieFighter from '../../media/images/ships/tie-fighter.png';
import XWing from '../../media/images/ships/x-wing.png';
import RazorCrest from '../../media/images/ships/razor-crest.png';
import Crib from '../../media/images/misc/crib.png';
import Helmet from '../../media/images/misc/helmet.png';
import Jetpack from '../../media/images/misc/jetpack.png';
import MenuItem from './MenuItem';
import Display from './Display/Display';
import Cart from './Cart';

const Market = (props) => {

    const [selected, setSelected] = useState(0);

    const items = [
        ['Weapons',[
            {
                name: 'Blaster',
                price: 2500,
                amount: 0,
                id: 0,
                img: Blaster
            },
            {
                name: 'Hand blaster',
                price: 1500,
                amount: 0,
                id: 1,
                img: HanSolo
            },
            {
                name: 'Wing blaster',
                price: 1900,
                amount: 0,
                id: 2,
                img: WingBlaster
            },
            ]
        ],
        ['Ships',[
            {
                name: 'Tie Fighter',
                price: 27000,
                amount: 0,
                id: 3,
                img: TieFighter
            },
            {
                name: 'X-Wing',
                price: 34000,
                amount: 0,
                id: 4,
                img: XWing
            },
            {
                name: 'Razor Crest',
                price: 18500,
                amount: 0,
                id: 5,
                img: RazorCrest
            }
            ]
        ],
        ['Misc',[
            {
                name: 'Crib',
                price: 1200,
                amount: 0,
                id: 6,
                img: Crib
            },
            {
                name: 'Helmet',
                price: 11000,
                amount: 0,
                id: 7,
                img: Helmet
            },
            {
                name: 'Jetpack',
                price: 7000,
                amount: 0,
                id: 8,
                img: Jetpack
            }
            ]
        ],
    ]

    const cart = {
        items: '',
        totalAmount: 0,
        totalItems: 0,
    }

    const selectorHandler = (id) => {
        setSelected(id);
    }

  return (
    <div className={classes.market}>
        <div className={classes.menu}>
            <div className={classes.options}>
                {items.map((item, index) => {
                    return <MenuItem key={index} params={item} onSelected={selectorHandler} itemId={(index + 1)} itemStyle={(index + 1) === selected ? 'menu-item-selected' : 'menu-item' } />
                })}
            </div>
            <div className={classes.cart}>
                <h2 id='4' onClick={() => setSelected(4)} className={classes[4 === selected ? 'menu-item-selected' : 'menu-item']}>Cart</h2>
            </div>
            <div className={classes['menu-background']} onClick={() => setSelected(0)}></div>
        </div>
        <div className={classes.display}>
            {
                (0 < selected && selected < 4) && <Display data={items[selected-1]}></Display>
            }
            {
                selected === 4 && <Cart data={cart}></Cart>
            }
            
        </div>
    </div>
  )
}

export default Market;