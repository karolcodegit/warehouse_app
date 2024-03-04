import express from 'express';
const router = express.Router();
import {createIssue,getAllIssues, getIssueById, updateIssue, deleteIssue} from '../../controllers/Reports/issue.controller.js';

// Trasy dla operacji CRUD na zgłoszeniach problemów
router.post('/issues', createIssue);
router.get('/issues', getAllIssues);
router.get('/issues/:id', getIssueById);
router.put('/issues/:id', updateIssue);
router.delete('/issues/:id', deleteIssue);

export default router;
