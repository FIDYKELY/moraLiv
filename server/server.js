   // server/server.js
   import express from 'express';
   import mongoose from 'mongoose';
   import dotenv from 'dotenv';
   import cors from 'cors';
   import helmet from 'helmet';
   import morgan from 'morgan';

   dotenv.config();
   const app = express();

   // Middlewares
   app.use(helmet());
   app.use(cors({ origin: 'http://localhost:5173' }));
   app.use(morgan('dev'));
   app.use(express.json());

   // Route de santé
   app.get('/api/health', (req, res) => {
     res.json({ status: 'OK', db: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected' });
   });

   // Connexion MongoDB
   mongoose.connect(process.env.MONGODB_URI)
     .then(() => console.log('✅ MongoDB connecté'))
     .catch(err => console.error('❌ Erreur MongoDB:', err));

   app.listen(5000, () => console.log('🚀 Backend lancé sur http://localhost:5000'));