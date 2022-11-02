import React from "react";
import PropTypes from "prop-types";
import classes from "./form.module.css";

const SelectField = ({
    label,
    options,
    defaultOption,
    name,
    value,
    onChange
}) => {
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    const optionsArray =
        typeof options === "object" ? Object.values(options) : options;
    return (
        <div>
            <label
                htmlFor={name}
                className={classes.label2}
            >
                {label}
            </label>
            <select
                name={name}
                className={classes.selectInput}
                id={name}
                onChange={handleChange}
                value={value}
            >
                <option
                    disabled
                    value=""
                >
                    {defaultOption}
                </option>
                {optionsArray.map((option) => (
                    <option
                        key={option._id}
                        value={option._id}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
