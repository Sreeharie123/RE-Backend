import { Request, Response, Router } from "express";

const app: Router = Router();

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: "",
  });
});

export const authRouters = app;
