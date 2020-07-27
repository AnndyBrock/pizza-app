import React, {useState, memo} from 'react';

const Categories = memo(function Categories ({items, onClick}) {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = index =>{
        setActiveItem(index);
        onClick(index)
    };
    return(
        <div className="categories">
            <ul>
                {items && items.map((item, index)=>(
                    <li
                        className={activeItem === index ? 'active':''}
                        onClick={()=>onSelectItem(index)}
                        key={`${item}_${index}`}>{item}
                    </li>))}
            </ul>
        </div>
    )

});
export default Categories;