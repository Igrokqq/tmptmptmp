// import React, { ChangeEvent } from 'react';
//
// interface CustomInputProps {
//     value: string;
//     onChange: (value: string) => void;
// }
//
// const Input: React.FC<CustomInputProps> = ({ value, onChange }) => {
//     const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//         onChange(event.target.value);
//     };
//
//     return (
//         <input
//             type="text"
//             value={value}
//             onChange={handleInputChange}
//             placeholder="Enter text"
//         />
//     );
// };
//
// export default Input;

import * as React from "react";
// import styled from "@emotion/styled";
// import Errors from "../Errors";
// import Icon from "../Icon";

// Define the props interface
interface InputComponentProps {
    className?: string;
    containerStyle?: React.CSSProperties;
    errors?: boolean;
    disabled?: boolean;
    label: string;
    icon?: string; // Assuming that the icon is a string, you can adjust the type accordingly
    inputStyle?: React.CSSProperties;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type: 'text' | 'select' | 'password' | 'email' | 'number';
    value: string;
    wrapperStyle?: React.CSSProperties;
}

const Input: React.FC<InputComponentProps> = ({
    className,
    containerStyle,
    errors,
    label,
    disabled,
    icon,
    inputStyle,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    type,
    value,
    wrapperStyle,
}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef && inputRef.current) inputRef.current.focus();
    };

    return (
        <div className={className} style={wrapperStyle}>
            <label htmlFor={label}>{label}</label>
            <div onClick={handleClick} className="container" style={containerStyle}>
                {/*{icon && <Icon dataTestId={`icon-${name}`} type={icon} />}*/}
                {type === 'select' ? (
                    <select
                        id={name}
                        name={name}
                        value={value}
                        onChange={()=>{}}
                    >
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                        <option value="country1">Country 1</option>
                        <option value="country2">Country 2</option>
                        {/* Add more countries as needed */}
                    </select>
                ) : (
                <input
                    ref={inputRef}
                    aria-label={name}
                    data-testid={name}
                    tabIndex={0}
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    style={inputStyle}
                    disabled={disabled}
                    readOnly={readOnly}
                />
                )}
            </div>
            {type === 'password' && <label htmlFor={label}>8 or more characters</label>}
            {/*{error && <p className="error">Input filed can't be empty!</p>}*/}
            {/*{errors && !value && required && (*/}
            {/*    <Errors data-testid="errors">Required!</Errors>*/}
            {/*)}*/}
        </div>
    );
};

export default Input;
