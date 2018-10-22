const  express = require('express')
const router = express.Router();

const Main = require('./controllers/index')
const Register = require('./controllers/register.controller')
const Login =  require('./controllers/login.controller')
const Users =  require('./controllers/users.controller')
/* GET home page. */
router.get('/', Main);
router.post('/register', Register);
router.post('/login', Login);
router.post('/users/:action', Users);


module.exports = router;