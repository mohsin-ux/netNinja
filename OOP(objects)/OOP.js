// const userOne = {
//     username: 'mohsin', 
//     email: 'mohsinraza@gmail.com',
//     login(){
//         console.log('the user logged in...');
//     },
//     logout(){
//         console.log('the user logged out...');
//     }
// };

// console.log(userOne.username, '......', userOne.email);
// userOne.login();


// const userTwo = {
//     username: 'mohsin', 
//     email: 'mohsinraza@gmail.com',
//     login(){
//         console.log('the user logged in...');
//     },
//     logout(){
//         console.log('the user logged out...');
//     }
// };

// console.log(userTwo.username, '......', userTwo.email);
// userTwo.login();


console.log('--------- constructors (under the hood) ----------');

function User(name, email){
    this.name = name;
    this.email = email;
}

User.prototype.login = function(){
    console.log(`${this.name} has logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.name} has logged out`);
    return this;
};

function Admin(name, email, title){
    User.call(this, name, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //delete a user
};

// console.log('-------- class constructors --------');

// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.name} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.name} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.name} has a score of ${this.score}`);
//         return this;
//     }
// }

// console.log('------- inheritence in classes -------f');

// class Admin extends User{
//     constructor(name, email, title){
//         super(name, email);
//         this.title = title;
//     }

//     deleteUser(user){
//         users = users.filter(u =>  u.name !== user.name);
//     };
// }



const userOne = new User('mohsin.......', 'mohsinraza@gmail.com');
const userTwo = new User('raza......', 'raza@gmail.com');
const userThree = new Admin('ALi.......', 'alihassan@gtmail.com', 'black-belt-ninja');

// console.log(userOne, userTwo, userThree);
console.log(userOne, userTwo, userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userThree);
// console.log(users);

userOne.login().logout();
// userOne.logout();

//chaining the methods
// userOne.incScore().incScore().incScore();