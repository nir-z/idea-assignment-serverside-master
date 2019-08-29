var fs = require('fs');


function connect(infra) {
  return new Promise((resolve, reject) => {
    loadDbOnInfra(infra);
    console.log("connected to DB");
  });
}
function loadDbOnInfra(infra) {
  infra.db = {};
  infra.db.getUsers = getUsers;
  infra.db.authenticateUser = authenticateUser;
}

function getUsers() {
  return new Promise((resolve, reject) => {


    var obj = fs.readFileSync('C:\\Users\\nirk\\Downloads\\devWeek-2019-products-master\\devWeek-2019-products-master\\services\\users-controller\\data.js', 'utf8');
    console.log(obj);
    resolve(obj);

  });
}

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {


    if(password == 'idea' && username == 'idea')
    {
      console.log("authentication success");  
      resolve({token : 'nt94ng92n43n0nv02n0f203hv2nndsonjsdn233r3rb'});
    }
    else
      reject(new Error("Login Failed!"));

  


  });
}

module.exports = {
  connect
};
