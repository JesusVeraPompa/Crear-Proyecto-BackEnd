import User from '../../models/User.js'

let allUsers = async (req, res) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let usersByRole = async (req, res) => {
    try {
        //console.log(req);
        let roleQuery = req.params.x
        let all = await User.find({ role: roleQuery })
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let usersByID = async (req, res) => {
    try {
        //console.log(req);
        let idValue = req.params.idValue
        let all = await User.find({ _id: idValue })
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

export { allUsers, usersByRole, usersByID }
