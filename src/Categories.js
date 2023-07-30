import React from 'react';

const Categories = ({ filterItem, categories, type }) => {
    return <div className="btn-container">
        {
            categories.map((category, index) => {
                return <button type='button' key={index} className={type === category ? 'filter-btn selected-btn' : 'filter-btn'} onClick={() => filterItem(category)}>{category}</button>
            })
        }

    </div>
};

export default Categories;
