import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux'
import {Header } from './components';
import {Route} from 'react-router-dom';
import {Home, Cart} from './pages';
import {fetchPizzas} from './redux/actions/pizzas';

function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPizzas());
    },[dispatch]);

    return(
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
