
const {connection} = require("../database/config");
const moment = require('moment');
const bodyParser =require("body-parser")
module.exports = {
createNews: (req,res)=>{
    console.log(req.body)
    //Converting data from base64 to binary
    const binaryData = Buffer.from(req.body.image, 'base64');
    //taking the current date
    const currentDate = moment().format('YYYY-MM-DD');
    //post query to create the actuality
    const sqlpost=`insert into actualite(title,brief,description,image,creationDate)  values(?,?,?,?,NOW());`
    //invoking the query with the body object
    connection.query(sqlpost,[req.body.title,req.body.brief,req.body.description,binaryData],function(error,results,fields){
      if(error){
        res.status(500).send(error);
      }
      else{
        res.send("News was added to database successfully")
      }
    })
},
fetchNews:(req,res)=>{
    const sqlget='select * from actualite ORDER BY  creationDate DESC LIMIT 4;'
    connection.query(sqlget,[],function(error,results,fields){
        if(error){
          res.status(500).send(error);
        }
        else{
          res.send(results)
        }
      })
},

deleteOne:function(req,res){
    console.log(req.params.id,"the id to delete")
    const sqldelete =`DELETE FROM actualite WHERE id=${req.params.id};`
    connection.query(sqldelete,function(err,result){
      if(err){res.status(500).send(err);}
      else{
        res.json(result,'\n Is deleted');
      }
    })
  },

updateOne:(req,res)=>{
  console.log(req.body);
  console.log(req.params);
  const currentDate = moment().format('YYYY-MM-DD');
  const sqlupdate =`UPDATE actualite SET title = ${req.body.title},description = ${req.body.description},brief = ${req.body.brief},image=${req.body.image},creationDate = ${currentDate},  WHERE id=${req.params.id};`
  connection.query(sqlupdate,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("Todo was updated successfully")
    }
  })
},

}

