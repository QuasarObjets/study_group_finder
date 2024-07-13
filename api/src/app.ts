// File: study_group_finder/api/src/app.ts

import express from 'express';
import { setRoutes } from './routes';

const app = express();

app.use(express.json());

// Set up routes
setRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
