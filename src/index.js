//import hello from "./module.js" // относительный путь к файлу, из которого импортируем. назвать можно как угодно, так как экспорт был по default
//import _ from "lodash" //подключаем библиотеку lodash через нижнее подчеркивание - _ это и есть символ лодаш

//hello(_.camelCase("super_admin")) //обращаемся к библиотеке лодаш через нижнее подчеркивание и подставляем в функцию hello значение

import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import send from './utils.js';
import css from "./style/main.css";
const API_URL = "http://localhost:3000/api/v1";
//import js from '../server/index.js'

let productList = [];

let cart = [];

send((err) => { console.log(err) }, (res) => { 
  let list = JSON.parse(res);
  productList = list;
  renderGoodsList(productList);
}, `${API_URL}/catalog`)



// Пользователь добавляет товар в корзину
var buyed = {id:1,title:"Jacket green",price:687};
send((err) => { console.log(err) }, (res) => {
  cart.push(buyed)
}, `${API_URL}/cart`,'POST', JSON.stringify(buyed), {"Content-Type": "application/json"})