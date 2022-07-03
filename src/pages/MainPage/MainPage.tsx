import React from 'react'
import "./MainPage.scss"
import ColumnSubstrate from '../../components/ColumnSubstrate/ColumnSubstrate'

const MainPage: React.FC = () => {
  return (
    <div className='fullViewHeightSection_Grid'>
        <div>
            <ColumnSubstrate />
        </div>
        <div>Hello</div>
        <div>Hello</div>
    </div>
  )
}

export default MainPage