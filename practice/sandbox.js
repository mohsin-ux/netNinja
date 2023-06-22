// console.log("my name is mohsin");

// let age = 10;
// let year = 1998;
// console.log(age, year);

// age = 20;
// console.log(age);

// const points = 100;
// console.log(points);

// //=======*************** DATA TYPES*************==============//

// //------------------------ strings-------------------------\\

// console.log('name,mohsin');
// let name = 'mohsin raza';
// console.log(name);

// let firstName = 'muhammad';
// let secondName = 'mohsin';

// let email = 'mohsinraza@gmail.com';
// console.log(email);

// // getting characters

// console.log(firstName[3]);

// // string concatenation
// let fullName = firstName + ' ' + secondName;
// console.log(fullName);
// console.log(fullName.length);

// console.log('-----------------string methods--------------');

// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log(index);

// result = email.slice(0, 10);
// console.log(result);

// result = email.substr(4, 10);
// console.log(result);

// result = email.replace('@', 'l');
// console.log(result);

// //--------------------- numbers-------------------//

// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi);

// // arithmetic operators
// // +   -   *   /   **   %
// console.log('-----------------arithmetic operators---------------');

// console.log(3 / 4);

// console.log('-----------------area of a circle---------------');

// let area = pi * radius ** 2;
// console.log(area);

// // order of precedence.   B-I-D-M-A-S
// result = 5*(10-3)**2;
// console.log(result);

// //------------- increment/decrement operator--------------

// let likes = 10;
// likes = likes + 4;

// likes++;
// likes--;
// console.log(likes);
// result = 'The blog has ' + likes + ' likes';
// console.log(result);

// //---------------- template string----------------//
// console.log('----------------template string---------------')

// const title = 'Best roads of 2019';
// const author = 'Ahmad';
// likes = 30;

// // concatenation way

// result = 'The Blog Called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// // template string way

// result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // creating html template

//  let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>This blog has ${likes} likes</span>
//     `;

// console.log(html);

// //-------------- arrays ---------------
// console.log('-------------arrays------------');

// let ninjas = ['mohsin','raza','khan'];
// ninjas[1] = 'raziiiiiiiii';
// console.log(ninjas[1]);

// let ages = [10,20,30,40];
// console.log(ages[2]);

// console.log('---------array methods & properties--------');

// console.log(ninjas.length)
// // result = ninjas.join(' ');
// // result = ninjas.indexOf('raza');
// result = ninjas.concat(ages);
// // result = ninjas.push('ali');
// // result = ninjas.pop();

// console.log(result);
// console.log(ninjas);

// console.log('---------Booleans & Comparisons--------');

// console.log(true,false,'true','false');

// // methods can return boolean values

// email = 'mohsinraza4455@gmail.com';
// result = email.includes('@');
// console.log(result);

// //comparison operators
// age = 20;
// console.log(age == 10);
// console.log(age == 20);
// console.log(age != 10);
// console.log(age > 10);
// console.log(age < 10);
// console.log(age >= 10);
// console.log(age <= 10);

// console.log('-----loose comparison-----')
// // loose comparison(different types can still be equal)

// age = 20;

// console.log(age==20);
// console.log(age=='20');
// console.log(age!=20);
// console.log(age!='20');

// console.log('-----strict comparison-----')
// // strict comparison(different types cannot be equal)

// console.log(age===20);
// console.log(age==='20');
// console.log(age!==20);
// console.log(age!=='20');

// console.log('-----type conversion-----')

// let score = '100';
// console.log(score + 1);

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);
// score = String(score);
// console.log(typeof score);

// console.log('----for loops----')
// names = ['ali','hassan','sheikh'];
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }
// console.log('loop is end');

// for(let i=0; i<=10; i++){
//     document.write('*');
//     for(let j=0; j<=40; j++){
//         if(i==0 || i==10){
//         document.write('*');
//         }
//         else{
//         document.write('_');
//         }
//     }
//     document.write('*');
//     document.write('<br>');
// }

// for( let i=0; i<=10; i++){
//     for(let j=i; j<=10; j++){
//         document.write('_');
//     }
//     for(let k=1; k<i*2; k++){
//         document.write('*');
//     }
//     document.write('<br>');
// }
// for( let i=0; i<=10; i++){
//     for(let j=0; j<i; j++){
//         document.write('_');
//     }
//     for(let k=10*2; k>=i*2; k--){
//         document.write('*');
//     }
//     document.write('<br>');
// }
// document.write('<br>');
// document.write('<br>');
// document.write('<br>');

// for(let i=0; i<=10; i++){
//     for(let j=0; j<=20; j++){
//         if(j==10 || i==5){
//             document.write('*');
//         }
//         else{
//             document.write('_');
//         }
//     }
//     document.write('<br>');

// }

// const names = ['ali', 'ahmad', 'umer'];
// for(let i=0; i<names.length; i++){
//     let html=`<div>${names[i]}</div>`;
//     console.log(html);
// }

// const speak = function(name,time){
//     console.log(`good ${time} ${name}`);
// }
// speak('ali','morning');

// console.log('-------arrow function--------');

// const calArea = (radius)=>{
//     return 3.14*radius**2;
// };
// const area = calArea(5);
// console.log(`the area of circle is= ${a}`);

// const calcVol = function(area){
// }

// console.log('-----------callback function------');

// const sayhi = () => {
//     console.log('hi...');
// };
// const sayHello = () => {
//     console.log('hello');
// };

// const add = (num1, num2, call) => {
//     console.log(num1 + num2);
//     console.log(sayhi());
//     console.log(sayHello());
//     call();
// };

// let a=10;
// let b=20;

// add(a,b,sayhi);

// console.log('-------forEach method-------');

// let arr = ['mohsin', 'ali', 'ahmad', 'umer'];
// let arr2 = [];

// const values = (arrays, index) => {
//   return   console.log(arrays, index);
// }

// arr2 = arr.forEach(values);

// const func = value => console.log(value);

// const myFunc = callback => {
//     let value = 50;
//     callback(value);
// }

// myFunc(func);

// let people = ['mohsin', 'ali', 'hasan', 'umer'];

// people.forEach((person,index) => console.log(index + '-' + person));

// console.log('----------------objects-------------------')

// const blogs = [
// ];
// console.log(blogs);

// let user = {
//     name: 'mohsin',
//     age: 25,
//     email: 'mohsinraza4455@gmail.com',
//     location: 'sahiwal',
//     blogs: [
//         { title: 'why mac & cheese rules', likes:30},
//         { title: '10 things to make with marnite', likes: 40}
//     ],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logblogs(){
//         this.blogs.forEach(value => {
//             console.log(value.title,'( likes: ', value.likes,')');
//         })
//         console.log(this);
//     },

// }
// user.logblogs();
// console.log(this);

// user.login();
// user.logout();

// console.log(user);
// console.log(user.name);

// user.age = 40;
// console.log(user.age);

// user['name'] = 'ali';
// console.log(user['name']);
// console.log(typeof user);

// console.log('-------Math object-------');

// console.log(Math.PI);
// console.log(Math);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// it takes only integers not float

// console.log('---------primitive vs reference datatypes---------');

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreone : ${scoreOne} scoretwo : ${scoreTwo}`);

// const user1 = {user: 'mohsin', age: 14};
// const user2 = user1;
// console.log(user1, user2);

console.log("=====================DOM====================");

// const para = document.querySelector('.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// paras.forEach(error => console.log(error));
// console.log(paras[2]);

// const title = document.getElementById('page');
// console.log(page);

// const hello = document.getElementsByClassName('error');
// console.log(hello[0]);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'mohsin is awesome';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' newtext';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<hr><h2> this is a new tag</h2>';
// console.log(content.innerHTML);

// const people = ['hamza', 'mohsin', 'ali'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
//     console.log(content.innerHTML);
// });
// console.log('-----------setAttribute and getAttribute------------');

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://www.thenetninja.com');
// link.innerText = 'the net ninja wbsite';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('style', 'color: green;');

// console.log('----------changing CSS styles ---------');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin  = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

// console.log('----------Adding & Removing classes---------');

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.add('success');
// content.classList.remove('success');

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     if(para.textContent.includes('error')){
//         para.classList.add('error');
//     }
//     if(para.textContent.includes('success')){
//         para.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');

// console.log('------Parents, Childrens and Siblings------');

// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('success');
// });

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(Array.from(title.nextElementSibling.parentElement.children));

// console.log('------------Event basics-----------');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

const items = document.querySelectorAll("li");

// console.log(items);
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log('item clicked');
//         // console.log(e);
//         console.log(e.target);
//         // console.log(item);
//         e.target.style.background = 'green';
//     });
// });
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//     });
// });

// console.log('------------creating and removing elements----------');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         e.target.remove();
//     });
// });
// const ul = document.querySelector("ul");

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>something</li>';
//     const li = document.createElement('li');
//     li.textContent = 'add something to new';
//     ul.prepend(li);
//     ul.append(li);
// });

// console.log('----------event bubbling and delegation----------');

// ul.addEventListener('click', e => {
//     // console.log('event in ul');
//     // console.log(e);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }

// });

// console.log('------------ onmouse event --------------');

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} /  y pos - ${e.offsetY}`;
// });

// console.log('-------------Submit Events----------');

//     const form = document.querySelector('.signup-form');
//     const feedback = document.querySelector('.feedback');
//     // const username = document.querySelector('#username');
//     const usernamePattern = /^[a-z]{6,12}$/;

//     console.log('---------validation-------');

//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         const username = form.username.value;

//         let result = usernamePattern.test(username);

//         if(result){
//             // feedback good info
//             feedback.textContent = 'username is valid';
//         }else{
//             // feedback help info
//             feedback.textContent = 'user name must contain letters only 6 to 12 characters long';
//         }

//     });

//     console.log('-----------live feedback-----------');

//     form.username.addEventListener('keyup', e => {
//         // console.log(e.target.vlaue, form.username.value);
//         if(usernamePattern.test(e.target.value)){
//             console.log('passed');
//             form.username.setAttribute('class', 'success');
//         }else{
//             console.log('failed');
//             form.username.setAttribute('class', 'error');
//         }
//     });

// console.log('-----------Testing REGEX-----------');

// const username = 'kk';
// const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);

// if(result){
//     console.log('regex test passed :)');
// }else{
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern);
// console.log(result);

// console.log("====== array methods =======");
// console.log('---------filter method---------');

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// console.log(filteredScores);

// const users = [
//     {name: 'Ali', premium: true},
//     {name: 'hassan', premium: false},
//     {name: 'Abdullah', premium: false},
//     {name: 'Zeeshan', premium: true},
// ];

// const premiumUsers = users.filter(user => {
//     return user.premium;
// });

// console.log(premiumUsers);

// var myArray = [1, 2, 3, 4, 5];

// console.log('---------map method---------');

// const prices = [20, 30, 10, 25, 15, 40, 80, 5];
// const salePrices = prices.map(mohsin => {
//     // price / 2;
// return mohsin / 2;
// });

// console.log(salePrices);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50},
// ];

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2 };
//     }else{
//         return product;
//     }
// });

// console.log(saleProducts);
// console.log(products);

// console.log('----------reduce method---------');

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 20){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 50},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 50},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 50},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 50},
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);

// console.log('-----------sort method-----------');

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// names.sort();
// console.log(names);

// const scores = [10, 50, 20, 5, 35, 70, 45];

// // scores.sort();
// scores.reverse();
// console.log(scores);

// // example 3
// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70},
// ];

// players.sort((a,b) => {
//     return b.score - a.score;
// if(a.score > b.score){
//     return -1;
// } else if (b.score > a.score){
//     return 1;
// } else {
//     return 0;
// }
// });

// console.log('------------chaining array methods-------------');

// const products = [
//     {name: 'gold star', price: 30},
//     {name: 'green shell', price: 10},
//     {name: 'red shell', price: 40},
//     {name: 'banana skin', price: 5},
//     {name: 'mushroom', price: 50},

// ];

// // const filtered = products.filter(product => product.price > 30);
// // console.log(filtered);

// // const promos = products.map(`the ${product.name} is ${product.price} pounds`);
// // console.log(promos);

// const promos = products
// .filter(product => product > 20)
// .map(product => `the ${product.name} is ${product.price} pounds`);

// console.log('-------------find method-----------');

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find(score => {
//     return score > 50;
// });
// console.log(firstHighScore);

// console.log('********** Date & Time *********');

// const now = new Date();
// console.log(now);

// //Year, month, date, day

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());

// //hours, minutes, seconds

// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// //TimeStamps

// const before = new Date('February 1 2019 7:30:59');
// console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const sec = Math.round(diff / 1000);
// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(` ${sec} sec, ${mins} mins, ${hours} hours, ${days} days`);
// console.log(`The blog was written in ${days} days ago...`);

// //converting timestamps into date object
// const timestamp = 123456789;
// console.log(new Date(timestamp));

// console.log("******* Asynchronization ******");

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function is fired');
// }, 2000);

// console.log(3);
// console.log(4);
