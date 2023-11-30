import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'components/Popper';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={(0, 500)}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
