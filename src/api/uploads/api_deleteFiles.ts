import {Request, Response} from "express";
import {S3} from "./uploadSetup";

const api_deleteFiles = (req: Request, res: Response) => {
    const {fileKeys} = req.body;

    if(!fileKeys || !Array.isArray(fileKeys) || (fileKeys && fileKeys.length == 0)) {
        res.status(400);
        return res.json({error: 'Error! File keys not found.'})
    }

    const deleteParam = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Delete: {
            Objects: fileKeys.map((key: string) => ({Key: key}))
        }
    };    
    S3.deleteObjects(deleteParam, function(err, data) {
        if (err) throw err;

        res.status(200);
        return res.json({msg: 'Deleted!'});
    });
}

export default api_deleteFiles;