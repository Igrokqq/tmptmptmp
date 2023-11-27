import * as React from "react";

import styles from "./Input.module.css";
import OpenEye from "./assets/open-eye.svg";
import ClosedEye from "./assets/closed-eye.svg";

interface InputComponentProps {
  className?: string;
  errors?: boolean;
  disabled?: boolean;
  label?: string;
  helperMessage?: string;
  inputStyle?: React.CSSProperties;
  name?: string;
  onChange?: (event: any) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  expires?: boolean;
  type?: string;
  showPasswordToggle?: boolean;
  value?: string;
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
  showPasswordToggle,
  value,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    console.log("State changed");
  };

  return (
    <div onClick={handleClick} className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        {label && (
          <label className={styles.label} htmlFor={label}>
            {label} {required && <span className={styles.required}>*</span>}
          </label>
        )}
        {expires && (
          <label className={styles.label} htmlFor={label}>
            {`Expires in 4:59 min`}
          </label>
        )}
      </div>
      {type === "textarea" ? (
        <textarea
          aria-label={name}
          data-testid={name}
          className={`${className} ${
            errors && required ? styles.errorInput : ""
          }`}
          tabIndex={0}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      ) : showPasswordToggle ? (
        <div className={styles.passwordContainer}>
          <input
            required
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            className={`${className} ${
              errors && required ? styles.errorInput : ""
            }`}
            tabIndex={0}
            type={isPasswordVisible ? "text" : "password"}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={handleTogglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <img src={OpenEye} alt="hide" />
              ) : (
                <img src={ClosedEye} alt="show" />
              )}
            </button>
          )}
        </div>
      ) : (
        <input
          required
          ref={inputRef}
          aria-label={name}
          data-testid={name}
          className={`${className} ${
            errors && required ? styles.errorInput : ""
          }`}
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
      {helperMessage && (
        <label className={styles.helperMessage} htmlFor={label}>
          {helperMessage}
        </label>
      )}
    </div>
  );
};

export default Input;
