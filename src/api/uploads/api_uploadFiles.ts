import {Request, Response} from "express";

const api_uploadFiles = (req: Request, res: Response) => {
    if(req.files && req.files.length > 0) {
        res.status(200);
        return res.json({
            msg: "Uploaded!", 
            files: req.files
        });
    }
}

export default api_uploadFiles;