const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project4",
  };

  const record={
      sender:"payal",
      reciver:"manoj",
      message:"wptexam"
  }

  const addRecord=async(record)=>{
      const connection =mysql.createConnection(dbinfo);
      await connection.connectAsync();
      const sql=`insert into message(sender,reciver,message)values(?,?,?)`;
      await connection.queryAsync(sql,[record.sender,record.reciver,record.message]);
      await connection.endAsync();
      console.log("message record added....");
  }
  const getRecord=async()=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql=`select * from message`;
    const list=await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log("list of record.....");
    console.log(list);
    return list;
  }
  getRecord();

  module.exports={addRecord,getRecord};
