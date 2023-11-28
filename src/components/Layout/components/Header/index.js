import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from 'assets/images';
const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
