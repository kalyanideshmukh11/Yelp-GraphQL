const USER = 'admin';
const PASSWORD = 'admin%23123';
const URI = 'mongodb+srv://'+USER+':'+PASSWORD+'@test.pzz2j.mongodb.net/yelp?retryWrites=true&w=majority';
//mongodb+srv://admin:<password>@test.pzz2j.mongodb.net/<dbname>?retryWrites=true&w=majority
const DATABASE = 'handshake';
const JWTPASSWORD = 'handshake';

module.exports = {
    URI: URI,
    DATABASE: DATABASE,
    JWTPASSWORD: JWTPASSWORD
}
