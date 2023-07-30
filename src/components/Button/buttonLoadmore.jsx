import React from "react";

const Button = ({onClick}) => {
    return (
        <div>
            <button
            type="button"
            onClick={onClick}>
                loadMore
            </button>
        </div>
    )
}
export default Button;