import express, {Request, Response, NextFunction} from 'express';
import { handleUploadMiddleware } from './api/uploads/uploadSetup';
import api_uploadFiles from "./api/uploads/api_uploadFiles";
import api_deleteFiles from './api/uploads/api_deleteFiles';
import api_ListFiles from './api/uploads/api_listFiles';

    const router = express.Router();
    
    router.get('/ping', (req: Request, res: Response) => {
        res.send('pong');
    });

    // Accept maximum 5 files
    router.post('/upload',
        handleUploadMiddleware.array('input_files', 5), 
        api_uploadFiles
    );

    router.delete('/remove', api_deleteFiles);
    router.get('/list', api_ListFiles);


export default router;
