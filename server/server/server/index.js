const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql');
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


// database
var connection = mysql.createConnection({
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "database": "tdb"
});
connection.connect(function(error) {
    if(error) {
        console.log('DB: Error');
    } else {
        console.log('DB: Connected');
    }
});

// test
app.post('/register', (req, res) => {
    res.send({
        message: "U:" + req.body.username + " " + "P: " + req.body.password
    })
})

// reset pw
app.post('/resetPW', (req, res) => {
    console.log(req.body.email + " requested to reset password!")
    res.send(true);
})


// login 
app.post('/checkLogin', (req, res) => {
    var find_pw = "SELECT ID,password, nickname FROM User where username='" + req.body.username + "';";
    console.log("Login: " + req.body.username);
    connection.query(find_pw, function (error, result) {
        if(error) {
            // res.status(400).send({
            //     error: 'no pw'
            // })
            res.send(false);
        }else {
            if(result.length==0){
                res.send(false);
            }
            else{
                if(result[0].password==req.body.password){
                    res.send(result[0]);
                    // res.send(result[0].ID.toString());
                }
                else{
                    res.send(false);
                }
            }
        }
    });
})


// view user info
app.post('/viewInfo', (req, res) => {
    var view_info = "SELECT * FROM User where ID='" + req.body.id + "';";
    console.log('viewInfo: ' + req.body.id);
    connection.query(view_info, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result[0]);
        }
    });
})


// change password
app.post('/changePW', (req, res) => {
    console.log('changePW: ' + req.body.id);
    var find_pw = "SELECT password FROM User where ID='" + req.body.id + "';";
    var update_pw = "UPDATE User SET password = '" + req.body.newPassword + "' WHERE ID ='" + req.body.id + "';";
    connection.query(find_pw, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            if(result.length==0){
                res.send(false);
            }
            else{
                if(result[0].password==req.body.password){
                    console.log(update_pw);
                    connection.query(update_pw, function (error) {
                        if(error) {
                            res.send(false);
                        }else {
                            res.send(true);
                        }
                    });
                }
                else{
                    res.send(false);
                }
            }
        }
    });
})


// view participants' info
app.post('/viewParticipant', (req, res) => {
    console.log('viewParticipant: ' + req.body.id);
    var view_name = "SELECT nickname, phone_number  FROM User,Joining,Gathering where User.ID=Joining.user_id and Joining.gathering_id=Gathering.ID "
    + " and Gathering.ID='" + req.body.id + "' order by User.ID;" ;
    // console.log(view_name)
    connection.query(view_name, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result);
            // console.log(result);
        }
    });
})


// select my created gathering
app.post('/selectMYgathering', (req, res) => {
    console.log('selectMYgathering: ' + req.body.id);
    var find_gathering = "SELECT Gathering.*, nickname, phone_number FROM Gathering, User where group_leader_id='" + req.body.id 
    + "' and User.ID='" + req.body.id + "';" ;
    connection.query(find_gathering, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result);
            // console.log(result);
        }
    });
})


// select my joined gathering
app.post('/selectJgathering', (req, res) => {
    console.log('selectJgathering: ' + req.body.id);
    var find_gathering = "SELECT Gathering.*, nickname, phone_number FROM Gathering, User  where Gathering.ID in (SELECT gathering_ID from Joining where user_ID='" + req.body.id 
    + "') and User.ID= Gathering.group_leader_id;" ;
    // console.log(find_gathering);
    connection.query(find_gathering, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result);
            // console.log(result);
        }
    });
})


// find gathering
app.post('/findGathering', (req, res) => {
    console.log('findGathering: ' + req.body.id);
    var today = new Date();
    var find_gathering = "SELECT Gathering.* FROM Gathering, User where num_of_participant<participant_upper_limit" 
    + " and group_leader_id!='" + req.body.id
    + "' and '" + req.body.id +"' not in (SELECT user_id FROM Joining where Gathering.ID=Joining.gathering_id)"
    + " and User.ID ='" + req.body.id
    + "' and (User.gender=Gathering.gender or Gathering.gender='Both')"
    + " and (year>'" + today.getFullYear()
    + "' or (year='" + today.getFullYear()
    + "' and month>'" + String(today.getMonth() + 1)
    + "') or (year='" + today.getFullYear()
    + "' and month='" + String(today.getMonth() + 1)
    + "' and day>='" + today.getDate()
    + "'));";
    // console.log(find_gathering);
    connection.query(find_gathering, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result);
            // console.log(result);
        }
    });
})


// filter gathering
app.post('/filterGathering', (req, res) => {
    console.log('filterGathering: ' + req.body.id);
    var filter_gathering = "SELECT Gathering.*, nickname FROM Gathering, User where num_of_participant<participant_upper_limit" 
    + " and group_leader_id!='" + req.body.id 
    + "' and User.ID ='" + req.body.id    
    + "' and (User.gender=Gathering.gender or Gathering.gender='Both')"
    + " and '" + req.body.id +"' not in (SELECT user_id FROM Joining where Gathering.ID=Joining.gathering_id)";
    if(req.body.district!=null)
        filter_gathering += " and district='" + req.body.district + "'";
    if(req.body.sportType!=null)
        filter_gathering += " and sport_type='" + req.body.sportType + "'";;
    if(req.body.year!=null){
        filter_gathering += " and (year>'" + req.body.year
            + "' or (year='" + req.body.year
            + "' and month>'" + req.body.month
            + "') or (year='" + req.body.year
            + "' and month='" + req.body.month
            + "' and day>='" + req.body.day + "'))";
    }
    filter_gathering += ";";
    // console.log(filter_gathering);
    connection.query(filter_gathering, function (error, result) {
        if(error) {
            res.send(false);
        }else {
            res.send(result);
            // console.log(result);
        }
    });
})


// change info
app.post('/changeInfo', (req, res) => {
    console.log('changeInfo: ' + req.body.id);    
    var change_fullname = "UPDATE User SET fullname = '" + req.body.fullname + "' WHERE ID ='" + req.body.id + "';";
    var change_nickname = "UPDATE User SET nickname = '" + req.body.nickname + "' WHERE ID ='" + req.body.id + "';";
    var change_phone_number = "UPDATE User SET phone_number = '" + req.body.contactNumber + "' WHERE ID ='" + req.body.id + "';";
    var change_email = "UPDATE User SET email = '" + req.body.email + "' WHERE ID ='" + req.body.id + "';";
    var change_self_intro = "UPDATE User SET self_intro = '" + req.body.selfintro + "' WHERE ID ='" + req.body.id + "';";
    var update_error = false;

    if (!!req.body.fullname){
        connection.query(change_fullname, function (error) {
            if(error) {update_error = true;}
        });
    }

    if (!!req.body.nickname){
        connection.query(change_nickname, function (error) {
            if(error) {update_error = true;}
        });
    }

    if (!!req.body.contactNumber){
        connection.query(change_phone_number, function (error) {
            if(error) {update_error = true;}
        });
    }

    if (!!req.body.email){
        connection.query(change_email, function (error) {
            if(error) {update_error = true;}
        });
    }

    if (!!req.body.selfintro){
        connection.query(change_self_intro, function (error) {
            if(error) {update_error = true;}
        });
    }
    // console.log(update_error);
    res.send(true);
})


// create user table
var create_user = "CREATE TABLE IF NOT EXISTS User("
    + 'ID int(10) NOT NULL AUTO_INCREMENT,'
    + 'username varchar(30) NOT NULL UNIQUE,'
    + 'password varchar(20) not NULL,'
    + 'fullname varchar(50),'
    + 'nickname varchar(50),'
    + 'email varchar(50),'
    + 'phone_number varchar(8),'
    + 'gender varchar(6),'
    + 'age_range varchar(10),'
    + 'self_intro varchar(500),'
    + 'PRIMARY KEY(ID)'
    + ');';
// console.log(create_user);
connection.query(create_user, function(error) {
    if(error) {
        console.log('User table: Error');
    }else {
        console.log('User table: Successful');
    }
});

// create new user
app.post('/createUser', (req, res) => {
    // console.log(req.body.username)
    // console.log(req.body.password)
    var add_user = "INSERT INTO User(username, password, fullname, nickname, email, phone_number, gender, age_range, self_intro) VALUES('"
    + req.body.username + "', '"
    + req.body.password + "', '"
    + req.body.fullname + "', '"
    + req.body.nickname + "', '"
    + req.body.email + "', '"
    + req.body.contactNumber + "', '"
    + req.body.gender + "', '"
    + req.body.age + "', '"
    + req.body.selfintro + "');";
    // console.log(add_user);
    connection.query(add_user, function(error) {
        if(error) {
            console.log('createUser: Error');
            // res.send(false);
            res.status(400).send({
                error: 'This username is already in use.'
            })
        }else {
            console.log('createUser: Successful');
            res.send(true);
        }
    });
})

// create report table
var create_report = "CREATE TABLE IF NOT EXISTS Report("
    + 'ID int(10) NOT NULL AUTO_INCREMENT,'
    + 'report_username varchar(30) NOT NULL,'
    + 'report_by varchar(30) NOT NULL,'
    + 'reason varchar(500),'
    + 'PRIMARY KEY(ID)'
    + ');';
// console.log(create_report);
connection.query(create_report, function(error) {
    if(error) {
        console.log('Report table: Error');
    }else {
        console.log('Report table: Successful');
    }
});

// create new report
app.post('/createReport', (req, res) => {
    // console.log(req.body.username)
    // console.log(req.body.password)
    var add_report = "INSERT INTO Report(report_username, report_by, reason) VALUES('"
    + req.body.report_username + "', '"
    + req.body.report_by + "', '"
    + req.body.reason + "');";
    console.log(add_report);
    connection.query(add_report, function(error) {
        if(error) {
            console.log('createReport: Error');
            res.send(false);
        }else {
            console.log('createReport: Successful');
            res.send(true);
        }
    });
})


// create gathering table
var create_gathering = "CREATE TABLE IF NOT EXISTS Gathering(" +
    'ID int(10) NOT NULL AUTO_INCREMENT,' +
    'sport_type varchar(25) NOT NULL,' +
    'year int(4) NOT NULL,' +
    'month int(2) NOT NULL,' +
    'day int(2) NOT NULL,' +
    'start_hour varchar(2) NOT NULL,' +
    'start_minute varchar(2) NOT NULL,' +
    'end_hour varchar(2) NOT NULL,' +
    'end_minute varchar(2) NOT NULL,' +
    'district varchar(30) NOT NULL,' +
    'venue varchar(50) NOT NULL,' +
    'gender varchar(6) NOT NULL,' +
    'age_upper_range int(3),' +
    'age_lower_range int(3),' +
    'participant_upper_limit int(2),' +
    'participant_lower_limit int(2),' +
    'discription varchar(500),' +
    'num_of_participant int(2),' +
    'group_leader_id varchar(10) NOT NULL,' +
    'leader_nickname varchar(50),' +
    'PRIMARY KEY(ID));';
// console.log(create_gathering);
connection.query(create_gathering, function(error) {
    if(error) {
        console.log('Gathering table: Error');
    }else {
        console.log('Gathering table: Successful');
    }
});
//create new gathering
app.post('/createGathering', (req, res) => {
    var age_upper_range = req.body.age_upper_range;
    if(age_upper_range==null)
        age_upper_range = 61;
    var age_lower_range = req.body.age_lower_range;
    if(age_lower_range==null)
        age_lower_range = 12;
    var participant_upper_limit = req.body.participant_upper_limit;
    if(participant_upper_limit==null)
        participant_upper_limit = 50;
    var participant_lower_limit = req.body.participant_lower_limit;
    if(participant_lower_limit==null)
        participant_lower_limit = 2;
    var add_gathering = "INSERT INTO Gathering(sport_type, year, month, day, start_hour, start_minute, end_hour, end_minute, "
    + "district, venue, gender, age_upper_range, age_lower_range, participant_upper_limit, participant_lower_limit, "
    + "discription, num_of_participant, group_leader_id, leader_nickname) VALUES('"
    + req.body.sportType + "', '"
    + req.body.year + "', '"
    + req.body.month + "', '"
    + req.body.day + "', '"
    + req.body.start_hour + "', '"
    + req.body.start_minute + "', '"
    + req.body.end_hour + "', '"
    + req.body.end_minute + "', '"
    + req.body.district + "', '"
    + req.body.venue + "', '"
    + req.body.gender + "', '"
    + age_upper_range + "', '"
    + age_lower_range + "', '"
    + participant_upper_limit + "', '"
    + participant_lower_limit + "', '"
    + req.body.discription + "', '"
    + "1', '"
    + req.body.group_leader_id + "', '"
    + req.body.leader_nickname
    + "');";
    // console.log(add_gathering);
    // console.log(req.body);
    connection.query(add_gathering, function(error) {
        if(error) {
            console.log('createGathering: Error');
            res.send(false);
        }else {
            console.log('createGathering: Successful');
            res.send(true);
        }
    });
})


// create joining table
var create_joining = "CREATE TABLE IF NOT EXISTS Joining(" +
    'ID int(10) NOT NULL AUTO_INCREMENT,' +
    'user_id varchar(10) NOT NULL,' +
    'gathering_id varchar(10) NOT NULL,' +
    'PRIMARY KEY(ID));';
connection.query(create_joining, function(error) {
    if(error) {
        console.log('Joining table: Error');
    }else {
        console.log('Joining table: Successful');
    }
});
// join gathering
app.post('/joinGathering', (req, res) => {
    console.log(req.body.user_id);
    console.log(req.body.room_id);
    var add_join = "INSERT INTO Joining(user_id, gathering_id) VALUES('"
    + req.body.user_id + "', '"
    + req.body.room_id + "');";
    console.log(add_join);
    connection.query(add_join, function(error) {
        if(error) {
            console.log('addJoin: Error');
            res.send(false);
        }else {
            console.log('addJoin: Successful');
            var add_join = "UPDATE Gathering SET num_of_participant = num_of_participant + 1 where ID='"
            + req.body.room_id + "';";
            console.log(add_join);
            connection.query(add_join, function(error) {
                if(error) {
                    console.log('addJoin: Error');
                    res.send(false);
                }else {
                    console.log('addJoin: Successful');
                    res.send(true);
                }
            });
        }
    });
})

app.listen(process.env.port || 8081)