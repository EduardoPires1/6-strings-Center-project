import { UsersRepository } from "../repositories/users.repository.js";

export class UsersController {
    static instance;

    constructor() {
        this.repository = new UsersRepository();
    }

    getUser = async (req, res) => {
        const user = await this.repository.getUser()
        return res.json(user)
    }

    getAllUsers = async (req, res) =>{
        const users = await this.repository.getAllUsers()
        return res.json(users)
    }

    createUser = async (req, res) => {
        const user = req.body;

        const createdUser = await this.repository.createUser(user)

        return res.json(createdUser)
    }

    updateUser = async (req, res) => {
        const id = Number(req.params.id)
        const user = req.body

        const userUpdated = await this.repository.updateUser({ id, ...user })

        return res.json(userUpdated)
    }

    deleteUser = async (req, res) => {
        const id = Number(req.params.id)

        await this.repository.deleteUser(id)

        return res.json({ ok: true })
    }
}