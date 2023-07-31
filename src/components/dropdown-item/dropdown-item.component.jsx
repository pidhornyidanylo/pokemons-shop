import React from 'react'

import './dropdown-item.style.css';

const DropdownItem = ({ item }) => {
    const { name, quantity, image } = item;
  return (
    <div className='dropdown-item'>
        <div className='dropdown-image-container'>
            <img src={image} alt={image + '-alt'} />
        </div>
        <p className='name'>{name}</p>
        <p className='quantity'>{quantity}</p>
    </div>
  )
}

export default DropdownItem
