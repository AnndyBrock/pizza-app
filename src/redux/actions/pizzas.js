import axios from "axios";

export const setLoaded = (payload) => ({
    type:"SET_LOADED",
    payload
});

export const fetchPizzas =  (category, sortBy ) => (dispatch) => {
    dispatch(setLoaded(false));

    const categoryVal = category > 0 ? `category=${category}` : '';

    axios.get(`http://localhost:3001/pizzas?${categoryVal}&_sort=${sortBy}&_order=desc`)
        .then(({data})=>{
        dispatch(setPizzas(data));
    });

};

export const setPizzas = (items) =>({
        type:'SET_PIZZAS',
        payload:items
    }
);