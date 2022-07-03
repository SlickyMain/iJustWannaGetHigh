import React from 'react'
import "./Column.scss"
import cat from "../../images/cat.jpg"

interface columnProps {
    order?: number
}

const Column: React.FC<columnProps> = ({ order }) => {
    return (
        <div className={`column ${order ? "favorite" : ""}`}>
            <div className='column__layout d-flex flex-column'>
                <div className='column__image'>
                    <img src={cat} alt="cat" />
                </div>
                <div className='column__description mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, libero!
                </div>
                <div className='column__experience mt-auto'>
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>
    )
}

export default Column