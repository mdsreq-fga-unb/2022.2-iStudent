import express from 'express';
import prisma from './database';
import routes from './routes';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(routes);

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
);

process.on('SIGINT', async () => {
  try {
    await prisma.$disconnect();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error when closing server: ', error);
  }
});
