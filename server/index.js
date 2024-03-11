const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/',(request,response) => {

    const data = {};
    data.name = "Himanshu";
    data.age = 26;
    response.send(data);
})
    
app.listen(8080, () =>{
    console.log('server listening on port 8080');
})