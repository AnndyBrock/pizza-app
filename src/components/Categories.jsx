import React,{ memo } from 'react';
import PropTypes from "prop-types";

const Categories = memo(function Categories ({activeCat ,items, onClick}) {

    return(
        <div className="categories">
            <ul>
                {items && items.map((item, index)=>(
                    <li
                        className={activeCat === index ? 'active':''}
                        onClick={()=>onClick(index)}
                        key={`${item}_${index}`}>{item}
                    </li>))}
            </ul>
        </div>
    )

});

Categories.propTypes = {
    activeCat:PropTypes.number.isRequired,
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick:PropTypes.func
};

Categories.defaultProps = {
    activeCat:null ,items:{}
};

export default Categories;