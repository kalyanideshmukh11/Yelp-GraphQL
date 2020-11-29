const USER = 'admin';
const PASSWORD = 'admin%23123';
const LOCAL_URI = 'http://localhost:3000';
//const URI = 'mongodb+srv://'+USER+':'+PASSWORD+'@handshake-1stbk.mongodb.net/test?retryWrites=true&w=majority';
const URI = 'mongodb+srv://'+USER+':'+PASSWORD+'@test.pzz2j.mongodb.net/yelp?retryWrites=true&w=majority';
const DATABASE = 'handshake';
const JWTPASSWORD = 'handshake';

module.exports = {
    URI: URI,
    LOCAL_URI: URI,
    DATABASE: DATABASE,
    JWTPASSWORD: JWTPASSWORD
}
