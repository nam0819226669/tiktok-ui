import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from 'assets/images';
import style from './Image.module.scss';

const image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default image;
