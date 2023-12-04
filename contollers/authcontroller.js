const User = require('../model/User')
const bcrypt  = require('bcrypt')
const loginController = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.send('all fields required')
        }
        const isUser = await User.findOne({ email }).select('+password');
        console.log(isUser);
        if(!isUser){
            res.send('error: user not found')
        }
        const matched = await bcrypt.compare(password,isUser.password)
        if (!matched){
            res.send('password invalid')
        }
        res.send({email,password})

    } catch (error) {
        console.error('failed to log in', error);
    }
}

const signupController = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.send('all fields required')
        }
        const isUser = User.findOne({email})
        if(isUser){
            res.send('user already registered plz login')
        }
        const hashedPass = await bcrypt.hash(password,10)
        // const user = new User({
        //     email,
        //     password:hashedPass
        // })
        // await user.save()
        const user = await User.create({
            email,
            password:hashedPass
        })
        res.send('user registered successfully')
    } catch (error) {
        console.error('error signup',error);
    }
}
module.exports = {
    loginController,
    signupController
}    