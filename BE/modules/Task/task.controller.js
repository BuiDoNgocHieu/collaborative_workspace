const TaskModel = require('./task');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const createTask = async (req, res) => {
    try {
        //     const token = req.headers.authorization;

        // if (!token) {
        //   throw new Error('Not found token');
        // }

        // // const jwtToken = token.split(' ')[1];
        // // check token có thuộc token của dự án mình ko
        // // check token có hết hạn hay ko
        // // trả về payload

        // const data = jwt.verify(token, process.env.SECRET_KEY);

        // const { userId } = data;
        // if (!userId) {
        //   throw new Error('Authorization fail');
        // }
        // console.log(data);

        // const existedUser = await UserModel.findById(userId);

        // if (!existedUser) {
        //   throw new Error('Authorization fail');
        // }

        // console.log(token);
        // const senderUser = req.user

        const { name, description, status, assignee, reporter } = req.body;

        const newTask = await TaskModel.create({
            name,
            description,
            status,
            assignee,
            reporter,
            //   createdBy: existedUser._id,
        });

        res.send({ success: 1, data: newTask });
    } catch (error) {
        res.send({ success: 0, data: null })
    }
}

module.exports = { createTask }