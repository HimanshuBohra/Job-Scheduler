const express = require('express')
const app = express()

app.get('/',(request,response) => {
    response.send("Response");
})
    
app.listen(8080, () =>{
    console.log('server listening on port 8080');
})