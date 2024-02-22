mysql = require('mysql');

conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    })

    conn.connect((error) => 

    {
        if(error) {console.log(error)}
        else {console.log('connected successfully db !!!!!')}
        conn.query('create database traptidb', (error) =>
        {
            if (error) throw   error
            else{console.log('database succefully')}      
        })
    })
    
    

//conn.connect()
    


//console.log('connection succesfully')