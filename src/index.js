import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

store.dispatch(addExpense({ description:'Water bill', amount: 4500, createdAt: 0 }))
store.dispatch(addExpense({ description:'Gas bill', note: 'Petrol', amount: 0, createdAt: 1000 }))
store.dispatch(addExpense({ description:'Rent', amount: 109500, createdAt: 0 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
