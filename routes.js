const  express = require('express')
const router = express.Router();

//const Main = require('./controllers/index')
const Register = require('./controllers/register.controller')
const Login =  require('./controllers/login.controller')
const Users =  require('./controllers/users.controller')
const Guest =  require('./controllers/guest.controller')
const Search =  require('./controllers/search.controller')


/* GET home page. */
//router.get('/', Main);
router.post('/register', Register);
router.post('/login', Login);
router.post('/search', Search);
router.post('/users/:action', Users);

router.get('/', Guest);


//Debug
const Debug =  require('./controllers/debug.controller')
router.get('/debug', Debug);



module.exports = router;