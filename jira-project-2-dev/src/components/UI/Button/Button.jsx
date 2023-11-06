import React from "react";

const Button = ({children, styles, onClick, disabled}) => {
    return (
        <button style={styles} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
export default Button;