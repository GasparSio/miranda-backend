import { NextFunction, Request, Response, Router } from 'express';
import { contactsServices } from '../services/contactsServices';
import { contactsInterface } from '../interfaces/contactsInterface';
import { generateValidateMiddleware } from '../validators/validationMiddleware';
import { contactSchema } from '../validators/schemas';

export const contactsController = Router();

contactsController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const contactsResult = await contactsServices.fetchAll()
        res.json(contactsResult)
    } catch (error) {
        next()    
    }
})

contactsController.get("/:contactId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactsResult = await contactsServices.fetchOne(req.params.contactId);
        res.json(contactsResult);
    } catch (error) {
      next()
    }
  }
);

contactsController.delete("/:contactId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactsResult = await contactsServices.delete(req.params.contactId);
      res.json(contactsResult);
    } catch (error) {
      next()
    }
  }
);

contactsController.put(
  "/:contactId", 
  generateValidateMiddleware(contactSchema), 
  async (req: Request,res: Response, next: NextFunction) => {
    try {
      const contactsResult = await contactsServices.updateOneContact(req.params.contactId, req.body);
      res.json(contactsResult);
    } catch (error) {
      next()
    }
  }
);

contactsController.post(
  "/", 
  generateValidateMiddleware(contactSchema),
  async (req: Request<{}, {}, contactsInterface>, res: Response, next: NextFunction) => {
    try {
      const contactsResult = await contactsServices.createOneContact(req.body);
      res.json(contactsResult);
    } catch (error) {
      next()
    }
  }
);
