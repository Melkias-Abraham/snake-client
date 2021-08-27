const net = require("net");
const {IP, PORT}  = require("./constants")


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server'); // code that does something when the connection is first established
    // conn.write("Move: up");
    conn.write('Name: MAE');

    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);

    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2000);

    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 2050);

    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2100);
    
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // conn.on("connect", () => {
    // console.log('Successfully connected to game server'); // code that does something when the connection is first established
    // conn.write('Name: MAE');
    // conn.write("Move: up");
  // });

  return conn;
};

module.exports = connect;