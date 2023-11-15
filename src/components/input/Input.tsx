import * as React from "react";
import {inspect} from "util";
// import Errors from "../Errors";
// import Icon from "../Icon";
import styles from './Input.module.css';


interface InputComponentProps {
    className?: string;
    containerStyle?: React.CSSProperties;
    errors?: boolean;
    disabled?: boolean;
    label: string;
    icon?: string;
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
        <div onClick={handleClick} className={styles.container} style={containerStyle}>
            <label className={styles.label} htmlFor={label}>{label}</label>
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
                    className={className}
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
            {type === 'password' && <label className={styles.label} htmlFor={label}>8 or more characters</label>}
            {/*{error && <p className="error">Input filed can't be empty!</p>}*/}
            {/*{errors && !value && required && (*/}
            {/*    <Errors data-testid="errors">Required!</Errors>*/}
            {/*)}*/}
        </div>
    );
};

export default Input;
