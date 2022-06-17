import React from "react";

const Pagination = (props) => {
   const {page, total_page, onLeftClick, onRigthClick} = props
    return (
        <div className="pagination">
            <button onClick={onLeftClick}><div>◀</div> </button>
            <div>{page} de {total_page}</div>
            <button onClick={onRigthClick}><div>▶</div></button>
        </div>
    )
}

export default Pagination