import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    console.log('get current user');
    res.send('hi there!');
});

export {router as signinRouter};