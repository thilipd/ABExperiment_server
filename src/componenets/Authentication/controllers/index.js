const User = require('../../../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();



const {
    ACCESS_TOKEN_SECRET,
} = process.env



const authController = {



    register: async (req, res) => {

        try {

            const {
                first_name,
                last_name,
                password,
                email,
                role,
                avatar
            } = req.body


            console.log(first_name,
                last_name,
                password,
                email,
                role,
                avatar)

            const user = await User.findOne({ email });


            console.log(user)

            if (!first_name || !email || !password) {

                return res.status(400).json({ msg: "Please fill all the feilds" });

            }


            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invalid email!!!" })
            }

            if (user !== null) {
                return res.status(400).json({ msg: "This email is already exists,  Please login to continue" });
            }

            if (password.length < 6) {
                return res.status(400).json({ msg: "Password must have atleast 6 charcters" });
            }


            const passwordHash = await bcrypt.hash(`${password}`, 10);




            try {
                const newUser = await new User({
                    ...req.body, password: passwordHash
                }).save();
                return res.status(200).json({ msg: "User has been registered, Please login to continue." })

            } catch (error) {
                res.status(400).send(error)
            }

            // await newUser.save()



        } catch (error) {
            res.status(400).send(error)
        }


    },

    login: async (req, res) => {

        const { email, password, provider } = req.body;

        console.log(req.body)
        const user = await User.findOne({ email });

        try {

            if (provider == 'local') {

                if (!user) {
                    return res.status(400).json({ msg: "Not registered please signin" });
                }

                const match = await bcrypt.compare(`${password}`, user.password);

                console.log(match)


                if (!match) {
                    return res.status(400).json({ msg: "Please enter the right password" });
                }



                let accessToken = createAccessToken({ id: user._id });

                return res.status(200).json({ accessToken: accessToken, user: user, msg: "Login Success" })

            } else {

                if (!user) {
                    const { first_name, last_name, avatar } = req.body;

                    const newUser = await new User({
                        first_name, last_name, avatar, email, provider
                    }).save();

                    let accessToken = createAccessToken({ id: newUser._id });

                    return res.status(200).json({ accessToken: accessToken, user: newUser, msg: "Login Success" })
                } else {

                    let accessToken = createAccessToken({ id: user._id });
                    return res.status(200).json({ accessToken: accessToken, user: user, msg: "Login Success" })

                }


            }

        } catch (error) {
            res.status(400).send(error)
        }

    }

}


module.exports = authController;


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const createAccessToken = (payload) => {

    console.log(jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '7d' }))
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
}