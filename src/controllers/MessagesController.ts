import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async showByUser(request: Request, response: Response) {
    const {
      id
    } = request.params

    try {
      const messageService = new MessagesService()
      const list = await messageService.listByUser(id)
      return response.json(list)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      admin_id,
      text,
      user_id
    } = request.body

    try {
      const messageService = new MessagesService()
      const message = await messageService.create({
        admin_id,
        text,
        user_id
      })
      return response.json(message)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { MessagesController }