import Button from 'components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const clases = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={clases} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
