import express from 'express';
import prisma from './database';
import routes from './routes';
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
);

process.on('SIGINT', async () => {
  try {
    await prisma.$disconnect();
    server.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error when closing server: ', error);
  }
});
