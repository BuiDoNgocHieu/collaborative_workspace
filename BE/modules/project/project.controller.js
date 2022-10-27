const ProjectModel = require('./project');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const createProject = async (req, res) => {
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

        const { name, type } = req.body;

        const newProject = await ProjectModel.create({
            name,
            type
        });

        res.send({ success: 1, data: newProject });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message })
    }
}
const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        const deleteProject = await ProjectModel
            .findByIdAndDelete(projectId);

        res.send({ success: 1 });
    } catch (err) {
        res.status(400).send({ success: 0, message: err.message });
    }
}

const updateProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const dataUpdateProject = req.body;

        const updatedProject = await ProjectModel
            .findByIdAndUpdate(projectId, dataUpdateProject, { new: true });

        res.send({ success: 1, data: updatedProject });
    } catch (err) {
        res.status(400).send({ success: 0, data: null, message: err.message });
    }
}

const getProjects = async (req, res) => {
    try {
        const projects = await (await ProjectModel
            .find({})
            // .skip(offset)
            // .limit(limit)
        );
        const totalProject = await ProjectModel.countDocuments({});
        res.send(
            {
                success: 1,
                data: {
                    projects: projects,
                    total: totalProject
                }
            });
    } catch (err) {
        res.status(400).send({ success: 0, data: [], message: err.message });
    }
}

const getProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await (await ProjectModel
            .findById(projectId)
        );
        res.send(
            {
                success: 1,
                data: project
            });
    } catch (err) {
        res.status(400).send({ success: 0, data: [], message: err.message });
    }
}

module.exports = { createProject, deleteProject, updateProject, getProject, getProjects }