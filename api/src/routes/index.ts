// File: study_group_finder/api/src/routes/index.ts

import express from 'express';
import { GroupController } from '../controllers/groupController';

const router = express.Router();
const groupController = new GroupController();

// Route to create a new study group
router.post('/groups', groupController.createGroup);

// Route to get all study groups
router.get('/groups', groupController.getGroups);

// Route to get a specific study group by ID
router.get('/groups/:id', groupController.getGroupById);

// Route to update a study group by ID
router.put('/groups/:id', groupController.updateGroupById);

export function setRoutes(app: express.Application) {
  app.use('/api', router);
}
