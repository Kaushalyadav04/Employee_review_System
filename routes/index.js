const { create } = require('connect-mongo');
const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const usersController=require('../controllers/users_controller');
const passport=require('passport');

router.get('/',homeController.signIn);
router.get('/home',homeController.home);
console.log('check and routes');
// router.post('/create-session',passport.authenticate(
//     'local',
//     {failureRedirect:'/user-signout'},
// ),usersController.createSession);
router.get('/user-signin',usersController.signIn);
router.get('/user-signup',usersController.signUp);
router.post('/user-signin/create-session',passport.authenticate(
    'local',    
    {failureRedirect:'/user-signout'},
),usersController.createSession);
router.post('/user-signUp/create',usersController.create);
router.get('/profile/:id',usersController.profile);
router.post('/profile/:ReviewToBeGiven',usersController.reviewToBeGiven);
router.get('/logout',usersController.destroySession);
router.get('/reviewPage/:reviewPending',usersController.reviewPage);
router.post('/reviewCreate',usersController.reviewCreate);
router.post('/profileUpdate',usersController.updateProfile);
router.get('/removeUser/:user',usersController.removeUser);
router.post('/updateRole',usersController.updateRole);
module.exports=router;