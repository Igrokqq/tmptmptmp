// import styled from "@emotion/styled";
//
// const Container = styled.div`
//   padding: 20px;
// `;
//
// export default Container;

import styles from './Button.module.css';

import React from 'react';

interface Props {
    className?: string;
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    wrapperStyle?: React.CSSProperties;
    disabled?: boolean;
    type?: "button" | "reset" | "submit" | undefined;
    isWide?: boolean;
    isAccent?: boolean;
    isBold?: boolean;
    hasBorder?: boolean;
}

const Button: React.FC<Props> = ({
     className,
     border,
     color,
     children,
     height,
     onClick,
     type,
     disabled,
     wrapperStyle,
     isWide = false, // Default value is false
     isAccent,
     isBold,
     hasBorder,
 }) => {
    const classNames = `${className ? className : ''} ${isWide ? styles.wide : ''} ${isAccent ? styles.accent : ''} ${isBold ? styles.bold : ''} ${hasBorder ? styles.border : ''}`;

    return (
        <button
            className={classNames}
            style={wrapperStyle}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
