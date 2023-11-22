import * as React from "react";

import styles from './Input.module.css';

interface InputComponentProps {
    className?: string;
    errors?: boolean;
    disabled?: boolean;
    label?: string;
    helperMessage?: string;
    inputStyle?: React.CSSProperties;
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    expires?: boolean;
    type: string;
    value: string;
}

const Input: React.FC<InputComponentProps> = ({
    className,
    errors,
    label,
    helperMessage,
    disabled,
    inputStyle,
    name,
    onChange,
    expires,
    placeholder,
    readOnly,
    required,
    type,
    value,
}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef && inputRef.current) inputRef.current.focus();
    };

    return (
        <div
            onClick={handleClick}
            className={styles.inputContainer}
        >
            <div className={styles.labelContainer}>
                {label &&
                    <label className={styles.label} htmlFor={label}>
                        {label} {required && <span className={styles.required}>*</span>}
                    </label>
                }
                {expires &&
                    <label className={styles.label} htmlFor={label}>
                        {`Expires in 4:59 min`}
                    </label>
                }
            </div>
            {type === 'textarea' ? (
                <textarea
                    aria-label={name}
                    data-testid={name}
                    className={`${className} ${errors && required ? styles.errorInput : ''}`}
                    tabIndex={0}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    style={inputStyle}
                    disabled={disabled}
                    readOnly={readOnly}
                />
            ) : (
                <input
                    ref={inputRef}
                    aria-label={name}
                    data-testid={name}
                    className={`${className} ${errors && required ? styles.errorInput : ''}`}
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
            {errors && !value && required && (
                <p className={styles.errorMessage}>Error message</p>
            )}
            {helperMessage &&
                <label className={styles.helperMessage} htmlFor={label}>
                    {helperMessage}
                </label>
            }
        </div>
    );
};

export default Input;
