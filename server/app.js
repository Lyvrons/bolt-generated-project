import express from 'express';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import userRoutes from './routes/userRoutes.js';

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/api/users', userRoutes);

    app.get('/', (req, res) => {
      res.send('LeadPlus API');
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
