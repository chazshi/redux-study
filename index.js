import React, {Component} from 'react';
import {render} from 'react-dom';
import './style/App.scss';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

//add to start redux learning
import {createStore, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/index';
import {App} from './components/App';
// import {test} from './components/App';
//Store
let store = createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(App);
//组件
//1.父组件

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));

// require('./a.js');

// document.getElementById('root').style.background="yellow";
// document.getElementById('root').style.height="150px";


//入口文件后面要加这个，才能热加载
if (module.hot) {
  module.hot.accept();
}