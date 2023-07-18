const express =require('express');

const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
      res.send('This is home');
});

app.post('/',(req,res)=>{
      console.log(req.body.name);
      res.send("This is home Page with post request");
});

app.listen(3000,()=>{
      console.log('Listening on port 3000');
});