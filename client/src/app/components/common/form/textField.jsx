import React, { useState } from 'react';
import PropTypes from 'prop-types';
import eye from '../svg/eye';
import classes from './form.module.css';

const TextField = ({
    type,
    onChange,
    placeholder,
    name,
    value,
    error,
    inputStyle,
    isDisabled
}) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const handleChange = ({ target }) => {
        if (isFirstRender) setIsFirstRender(false);
        onChange(name, target.value);
    };
    return (
        <>
            <input
                disabled={isDisabled}
                className={classes.input}
                style={inputStyle}
                type={showPassword ? 'text' : type}
                onChange={handleChange}
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
            />
            {type === 'password' && (
                <div
                    className={classes.eye}
                    onClick={toggleShowPassword}
                    title={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                    {showPassword ? eye.slash : eye.open}
                </div>
            )}
            {error && !isFirstRender && (
                <p className={classes.error}>{error}</p>
            )}
        </>
    );
};

TextField.defaultProps = {
    type: 'text'
};
TextField.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    isDisabled: PropTypes.bool,
    inputStyle: PropTypes.object
};

export default TextField;
