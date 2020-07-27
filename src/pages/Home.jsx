import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Categories,SortPopup,Content, PlaceHolderBlock} from '../components';
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categories = ["Все", 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые'];
const sorrtBy = [{name:'Популярности',type:'popular'}, {name:"Цене",type:'price'}, {name:"Алфавиту", type:'alphabet'}];


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filter}) => filter);

    useEffect(()=>{
        dispatch(fetchPizzas());
    },[category, dispatch]);


    const onSelectCategory = useCallback((index) =>{
        dispatch(setCategory(index));
    },[dispatch]);

    const onSelectFilter = useCallback((index) =>{
        dispatch(setCategory(index));
    },[dispatch]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={onSelectCategory} items={categories} activeCat={category}/>
                <SortPopup onClick={onSelectFilter} items={sorrtBy} activeSort={sortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(obj => <Content key={obj.id} {...obj}/>) : Array(12).fill(0).map((_,index)=><PlaceHolderBlock key={index}/>)}
                {}
            </div>
        </div>
    );
}

export default Home;
