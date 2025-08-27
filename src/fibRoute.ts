import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  if (!num) {
    res.status(400).send('Missing parameter: num');
    return;
  }

  const parsedNum = parseInt(num, 10);
  
  if (isNaN(parsedNum)) {
    res.status(400).send('Invalid parameter: num must be a number');
    return;
  }

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};