/**
 *
 * @param shema - ZOD schema to validate the request body
 * @returns - Middlewares functions to validate the request body
 */
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {

      await schema.parseAsync(req.body);
      console.log("Request Body is Valid");
      next();

    } catch (error) {
      // If the validation Fails

       res.status(400).json({
        message: "Invalid Request Body",
        success: false,
        error: error,
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
  
        await schema.parseAsync(req.query);
        console.log("Query Params is Valid");
        next();
  
      } catch (error) {
        // If the validation Fails
  
         res.status(400).json({
          message: "Invalid Query Params ",
          success: false,
          error: error,
        });
      }
    };
  };
