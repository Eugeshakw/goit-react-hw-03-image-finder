import React from "react";
import style from './loadmore.module.scss'
const Button = ({onClick}) => {
    return (
        <div>
            <button
            className={style.loadmore}
            type="button"
            onClick={onClick}>
                loadMore
            </button>
        </div>
    )
}
export default Button;