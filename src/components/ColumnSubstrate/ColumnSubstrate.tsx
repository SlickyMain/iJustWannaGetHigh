import React from 'react'
import "./ColumnSubstrate.scss"
import Column from '../Column/Column'

const ColumnSubstrate = () => {
    return (
        <div>
            <div className='substrate__header mt-2'>
                <h3 className='usualHeader'>
                    Languages
                </h3>
            </div>
            <div className='substrate__layout_Grid'>
                <Column />
                <Column order={1} />
                <Column />
            </div>
        </div>
    )
}

export default ColumnSubstrate