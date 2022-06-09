var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser) {
  members.push(newUser);
}

function getAllMembers() {
  console.log(members);
}

addNewMember("sweta");
getAllMembers();

addNewMember("piku");


function job1() {
    console.log("I am task 1");
  }
  function job3() {
    console.log("I am task 3");
  }
  function job2() {
    console.log("I am task 2");
  }
  
  
  job3();
  job2();
  job1();

  var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
  }, 200);
}

function getAllMembers() {
  setTimeout(function () {
    console.log("Members are:");
    console.log(members);
  }, 100);
}

addNewMember("Alpha");
getAllMembers();



function addNewMember(newUser , callback) {
    setTimeout(function () {
      members.push(newUser);
      console.log("Member Added");
    }, 200);
  }
  
  function getAllMembers() {
    setTimeout(function () {
      console.log("Members are:");
      console.log(members);
    }, 100);
  }
  
  getAllMembers();



  var myPromise = new Promise(function(resolve, reject) {
    const number1 = 2;
    const number2 = 2;
    if(number1 === number2) {
        // Operation successful
        resolve();
      } else {
        // Error occurred
        reject();
      }
  });
  myPromise.
then(function () {
    console.log("Numbers Equal. Success");
}).
catch(function () {
    console.log('Error');
});



const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))
add(2, 4)
  .then((result) => {
    console.log(result) // result: 6
    return result + 10
  })
  .then((result) => {
    console.log(result) // result: 16
    return result
  })
  .then((result) => {
    console.log(result) // result: 16
  })

 
// API for get requests   Without options, Fetch will always act as a get request.
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
            // fetchRes is the promise to resolve
            // it by using.then() method
            fetchRes.then(res =>
                res.json()).then(d => {
                    console.log(d)
                })  

// API for get requests   Without options, Fetch will always act as a post  request.
user = {
    "name": "Geeks for Geeks",
    "age": "23"

}
let options = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}
let fetchres1 = fetch("http://dummy.restapiexample.com/api/v1/create", options);
        fetchres1.then(res =>
            res.json()).then(d => {
                console.log(d)
            })