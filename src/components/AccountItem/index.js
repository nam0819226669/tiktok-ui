import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Image';
const cx = classNames.bind(style);

function AccountItem({ data }) {
    console.log(data.avatar);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avata')} src={data.avatar} alt={data.first_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
