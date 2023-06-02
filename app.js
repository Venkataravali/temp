//npm --version to check version it's same as node's version 
//npm i packagename coud use in this project 
//npm i -g packagename we can use anywhere 

const _ = require('lodash');

const items = [1,[2,3,[4]]]
const newItems = _.flattenDeep(items)