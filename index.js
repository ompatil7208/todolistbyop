const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host:"sql12.freesqldatabase.com",
	user:"sql12718987",
	password:"cwPB7XKUZt",
	database:"sql12718987"
});

app.post("/save",(req,res)=>{
	let data =[req.body.no,req.body.task]
	let sql = "insert into list values(?,?)";
	con.query(sql, data,(err, result)=>{
	if(err)		res.send(err);
	else		res.send(result);
	});
});

app.get("/gs",(req,res)=>{
	let sql = "select * from list";
	con.query(sql, (err, result)=>{
	if(err)		res.send(err);
	else		res.send(result);
	});
});

app.delete("/ds",(req,res)=>{
	let data = [req.body.no]
	let sql = "delete from  list  where no = ? ";
	con.query(sql,data,(err,result) => {
		if(err)		res.send(err);
		else		res.send(result);
	});
});

app.put("/us",(req,res) => {
	let data = [req.body.task,req.body.no]
	let sql = "update list set task = ? where no = ? ";
	con.query(sql,data,(err,result) => {
		if(err)		res.send(err);
		else		res.send(result);
	});
});
app.listen(9000,()=>{console.log("ready@9000");});