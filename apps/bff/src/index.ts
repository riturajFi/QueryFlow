import express from 'express';
import * as trpc from '@trpc/server/adapters/express';

const app = express();
const router = trpc.router().query('ping', {
  resolve: () => 'pong',
});

app.use(
  '/trpc',
  trpc.createExpressMiddleware({
    router,
    createContext: () => ({}),
  })
);

app.listen(4000, () => console.log('BFF running on http://localhost:4000'));
