import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    console.log('get current user');
    res.send('hi there!');
});

export {router as signoutRouter};