import React from 'react';
import classNames from "classnames";

const Button = ({onClick, className, children, outline}) => {

    return(
        <div className="header__cart">
            <button onClick={onClick} className={classNames('button', className,{'button--outline':outline})}>{children}</button>
        </div>
    )
};

export default Button;