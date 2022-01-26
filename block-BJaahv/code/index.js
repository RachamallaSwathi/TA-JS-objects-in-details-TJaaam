// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects


//using function

function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
  }
  function getProjects() {
    return user.noOfProjects;
  }
  function changeName(newName) {
    return newName;
  }
  function incrementProject(value){ // value=1 
    return user.noOfProjects + value;
  }
  function decrementProject(value) {
    return user.noOfProjects - value;
  }


  // using prototypal pattern

  function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
  }
  let userMethods = {
    getProjects: function () {
      return user.noOfProjects;
    },
    changeName: function (newName) {
      return newName;
    },
    incrementProject: function (value) {
      return user.noOfProjects + value;
    },
    decrementProject: function (value) {
      return user.noOfProjects - value;
    },
  };

// using pseduclassical 

function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  CreateUser.prototype = {
    getProjects: function () {
      return this.noOfProjects;
    },
    changeName: function (newName) {
      return newName;
    },
    incrementProject: function (value) {
      return this.noOfProjects + value;
    },
    decrementProject: function (value) {
      return this.noOfProjects - value;
    },
  };
  

  // using class

class User {
    constructor(name, id, noOfProjects) {
      this.name = name;
      this.id = id;
      this.noOfProjects = noOfProjects;
    }
    getProjects() {
      return this.noOfProjects;
    }
    changeName(newName) {
      return newName;
    }
    incrementProject(value) {
      return this.noOfProjects + value;
    }
    decrementProject(value) {
      return this.noOfProjects - value;
    }
  }




// to create the individual user;

let user1=new user('Swathi',1,10);
let user2= new user('Rachamalla',2,20s);



  