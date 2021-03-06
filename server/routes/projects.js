import express from 'express';

import { getProjects,  createProject, updateProject,  deleteProject } from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);

export default router;