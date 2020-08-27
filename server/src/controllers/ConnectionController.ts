import { Request, Response } from 'express'
import db from '../database/connection'

export default class ConnetionController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connections').count('* as total')

        const { total } = totalConnections[0]

        return res.json({ total })
    }

    async create(req: Request, res: Response) {
        const { users_id } = req.body

        await db('connections').insert({
            users_id,
        })

        return res.status(201).send()
    }
} 