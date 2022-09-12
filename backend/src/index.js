const app = require('./app');
const {connect} = require('./database');


async function main(){

  await connect();

  await app.listen(3004);
  console.log('Server on port 3004: Connected');

}


main();