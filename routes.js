const express = require('express')
const router = express.Router();

//Controller
const Register = require('./controllers/register.controller')
const Login =  require('./controllers/login.controller')
const GuestCourse =  require('./controllers/guestcoures.controller')
const GuestMeetup =  require('./controllers/guestmeetup.controller')
const Search =  require('./controllers/search.controller')
const ViewCoures =  require('./controllers/viewcoures.controller')
const ViewMeetup =  require('./controllers/viewmeetup.controller')
const ViewVideo =  require('./controllers/viewvdieo.controller')


//Activate
const ActivateUser =  require('./controllers/activate.controller')

//Middleware
const AuthService =  require('./middleware/AuthService')
const ManageService =  require('./middleware/ManageService')
const AdminService =  require('./middleware/AdminService')

//UserController
const UserCourse =  require('./controllers/user/coures.controller')
const UserMeetup =  require('./controllers/user/meetup.controller')
const RegisterUserCourse =  require('./controllers/user/register.coures.controller')
const RegisterUserMeetup =  require('./controllers/user/register.meetup.controller')
const DeleteUserCourse =  require('./controllers/user/delete.coures.controller')
const DeleteUserMeetup =  require('./controllers/user/delete.meetup.controller')
const UpgradePermission =  require('./controllers/user/upgrade.permission.controller')

//ManageController
const UserTearcherCourse =  require('./controllers/user/manage/coures.controller')
const UserTearcherMeetup =  require('./controllers/user/manage/meetup.controller')
const TeacherViewVideo =  require('./controllers/user/manage/view.vdieo.controller')
const ShowCourse =  require('./controllers/user/manage/show.coures.controller')
const ApproveCoures =  require('./controllers/user/manage/approve.coures.controller')
const RejectCoures =  require('./controllers/user/manage/reject.controller')
const AddCourse =  require('./controllers/user/manage/add.coures.controller')
const AddMeetup =  require('./controllers/user/manage/add.meetup.controller')
const AddVideo =  require('./controllers/user/manage/add.video.controller')
const EditCourse =  require('./controllers/user/manage/edit.coures.controller')
const EditMeetup =  require('./controllers/user/manage/edit.meetup.controller')
const EditVideo =  require('./controllers/user/manage/edit.video.controller')
const DeleteUserTearcherCourse =  require('./controllers/user/manage/delete.coures.controller')
const DeleteUserTearcherMeetup =  require('./controllers/user/manage/delete.meetup.controller')
const DeleteVideo =  require('./controllers/user/manage/delete.video.controller')


//AdminController
const ApproveVideo =  require('./controllers/admin/approve.video.controller')
const RejectVideo =  require('./controllers/admin/reject.video.controller')

// Router
router.post('/register', Register);
router.post('/login', Login);
router.post('/search', Search);

router.get('/coures', GuestCourse);
router.get('/meetup', GuestMeetup);
router.get('/coures/:uuid', ViewCoures);
router.get('/meetup/:uuid', ViewMeetup);
router.get('/vdieo/:uuid', ViewVideo);

//ConfirmEmail

router.get('/activate/:token', ActivateUser);

//Auth
router.use('/user', AuthService);
router.get('/user/coures', UserCourse);
router.get('/user/meetup', UserMeetup);
router.get('/user/coures/register/:uuid', RegisterUserCourse);
router.get('/user/meetup/register/:uuid', RegisterUserMeetup);
router.get('/user/coures/delete/:uuid', DeleteUserCourse);
router.get('/user/meetup/delete/:uuid', DeleteUserMeetup);

router.get('/user/upgrade', UpgradePermission);

//Manage
router.use('/user/manage', ManageService);
router.get('/user/manage/coures', UserTearcherCourse);
router.get('/user/manage/meetup', UserTearcherMeetup);
router.get('/user/manage/vdieo/:uuid', TeacherViewVideo);
router.get('/user/manage/show/:uuid', ShowCourse);
router.get('/user/manage/approve/:uuid/:user_id', ApproveCoures);
router.get('/user/manage/reject/:uuid/:user_id', RejectCoures);
router.post('/user/manage/coures/add', AddCourse);
router.post('/user/manage/meetup/add', AddMeetup);
router.post('/user/manage/video/add', AddVideo);
router.post('/user/manage/coures/edit', EditCourse);
router.post('/user/manage/meetup/edit', EditMeetup);
router.post('/user/manage/video/edit', EditVideo);
router.post('/user/manage/coures/delete', DeleteUserTearcherCourse);
router.post('/user/manage/meetup/delete', DeleteUserTearcherMeetup);
router.post('/user/manage/video/delete', DeleteVideo);

//Admin
router.use('/admin/:token', AdminService);
router.get('/admin/:token/approve', ApproveVideo);
router.get('/admin/:token/reject', RejectVideo);

module.exports = router;