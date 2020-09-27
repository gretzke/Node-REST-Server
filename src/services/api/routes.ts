import { Request, Response } from 'express';

export default [
  {
    path: '/api/v1/ping',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send();
      },
    ],
  },
];
