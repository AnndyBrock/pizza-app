import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Categories,SortPopup,Content} from '../components';
import {setCategory} from "../redux/actions/filters";

const categories = ["Все", 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']
const sorrtBy = [{name:'Популярности',type:'popular'}, {name:"Цене",type:'price'}, {name:"Алфавиту", type:'alphabet'}];



function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = useCallback((index) =>{
        dispatch(setCategory(index));
    },[dispatch]);

    const onSelectFilter = useCallback((index) =>{
        dispatch(setCategory(index));
    },[dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={onSelectCategory} items={categories}/>
                <SortPopup onClick={onSelectFilter} items={sorrtBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {items &&
                items.map(obj => (
                    <Content key={obj.id} {...obj}/>
                    )
                )
            }
            </div>
        </div>
    );
}

export default Home;
