// const { forEach } = require("async");

// const { log } = require("async");

// const { forEach } = require("async");

console.log("******** (HTTP reuqest) ********");

const getTodos = (resource, callback) => {
  // return new Promise((resolve, reject) => {

  const request = new XMLHttpRequest();
  request.open("GET", resource);
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      callback(undefined, data);
      // resolve({
      //   body: request.response,
      //   status: request.status,
      // });
    } else if (request.readyState === 4) {
      // reject("data could not fetch");
      callback("data could not fetch", undefined);
    }
  });

  //   });
};

// --------- Callback Hell & Nesting Callback -----------

getTodos("jsons/data.json", (err, data) => {
  console.log(err, data);

  const datas = Object.values(data.data);
  console.log(datas);

  // datas.forEach(item => {
  //   item.groups.foreach
  // })

  // for (let i = 0; i < datas.length; i++) {
  //   // console.log(datas.length);
  //   for (let j = 0; j < datas[i].groups.length; j++) {
  //     if (datas[i].groups[j].label == "Programm") {
  //       console.log(datas[i].groups[j]);
  //     }
  //   }
  // }

  // console.log(typeof(data));
  // getTodos("jsons/mario.json", (err, data) => {
  // console.log(data);
  // getTodos("jsons/shaun.json", (err, data) => {
  // console.log(data);
  // });
  // });
});

//---------- promises -----------

// getTodos("jsons/luigi.json")
//   .then((data) => {
//     console.log("promise 1 resolved: ", data);
//     return getTodos("jsons/mario.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved: ", data);
//     return getTodos("jsons/shaun.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved: ", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------- fetch the data ----------

// fetch("jsons/luigi.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('error', err);
//   });

// fetch("jsons/mario.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//========== async / await ===========

// const getTodos = async () => {

//   const response = await fetch('jsons/luigi.json');
//   if(response.status !== 200){
//     throw new Error('error is found') ;
//   }
//   response.json();
//   return data;
// };

// console.log(getTodos());
// getTodos()
// .then(data => console.log(data))
// .catch(err => console.log(err));
