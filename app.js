ysql = require('mysql');

conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'traptidb'
    })

    conn.connect((err) =>{
        if (err) throw err
        console.log('connected success!!!!')
        a = "create table patna(name varchar(50), mail varchar(35))"
        conn.query(a, (err, res) =>
        {
            if (err) throw err
            console.log('table created!!!!')
        })
    })