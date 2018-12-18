const  express = require('express')
const router = express.Router();

//Controller
const Register = require('./controllers/register.controller')
const Login =  require('./controllers/login.controller')
const Users =  require('./controllers/users.controller')
const GuestCourse =  require('./controllers/guestcoures.controller')
const GuestMeetup =  require('./controllers/guestmeetup.controller')
const Search =  require('./controllers/search.controller')
const ViewCoures =  require('./controllers/viewcoures.controller')
const ViewMeetup =  require('./controllers/viewmeetup.controller')

//Middleware
const AuthService =  require('./middleware/AuthService')
//User
const UserCourse =  require('./controllers/user/coures.controller')
const UserMeetup =  require('./controllers/user/meetup.controller')
const RegisterUserCourse =  require('./controllers/user/register.coures.controller')
const RegisterUserMeetup =  require('./controllers/user/register.meetup.controller')
const DeleteUserCourse =  require('./controllers/user/delete.coures.controller')
const UpgradePermission =  require('./controllers/user/upgrade.permission.controller')

// Router
router.post('/register', Register);
router.post('/login', Login);
router.post('/search', Search);

router.get('/coures', GuestCourse);
router.get('/meetup', GuestMeetup);
router.get('/coures/:uuid', ViewCoures);
router.get('/meetup/:uuid', ViewMeetup);

//Auth
router.use('/user', AuthService);
router.get('/user/coures', UserCourse);
router.get('/user/meetup', UserMeetup);
router.get('/user/coures/register/:uuid', RegisterUserCourse);
router.get('/user/meetup/register/:uuid', RegisterUserMeetup);
router.get('/user/coures/delete/:uuid', DeleteUserCourse);
router.get('/user/meetup/delete/:uuid', UserMeetup);

router.get('/user/upgrade', UpgradePermission);




module.exports = router;