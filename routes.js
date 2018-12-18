const  express = require('express')
const router = express.Router();

//const Main = require('./controllers/index')
const Register = require('./controllers/register.controller')
const Login =  require('./controllers/login.controller')
const Users =  require('./controllers/users.controller')
const GuestCourse =  require('./controllers/guestcoures.controller')
const GuestMeetup =  require('./controllers/guestmeetup.controller')
const Search =  require('./controllers/search.controller')
const ViewCoures =  require('./controllers/viewcoures.controller')

const AuthService =  require('./middleware/AuthService')

/* GET home page. */
//router.get('/', Main);
router.post('/register', Register);
router.post('/login', Login);
router.post('/search', Search);
router.post('/users/:action', Users);

router.get('/coures', GuestCourse);
router.get('/meetup', GuestMeetup);
router.get('/coures/:uuid', ViewCoures);

//Auth

router.use('/user', AuthService);
router.get('/user/coures', GuestCourse);

//Debug
const Debug =  require('./controllers/debug.controller')
router.get('/debug', Debug);



module.exports = router;