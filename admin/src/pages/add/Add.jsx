import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
        <div className="flex-col">
            <div className="add-img-upload">
                <p>Upload Image</p>
                <label htmlFor="" className="image">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" id="image"  hidden required/>
            </div>

            <div className="add-product-name">
                <p>Product name</p>
                <textarea name="description" rows='6' placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select name="category" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Add
