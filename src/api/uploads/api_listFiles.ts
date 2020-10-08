import {Request, Response} from "express";
import {S3} from "./uploadSetup";

const api_ListFiles = (req: Request, res: Response) => {
    const {folderName} = req.query;

    if(!folderName) {
        res.status(400);
        return res.json({error: 'Error! Folder name is missing.'})
    }

    const listParams = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Prefix: folderName?.toString() || '/'
    };  
    S3.listObjectsV2(listParams, function(err, data) {
        if (err) throw err;
        
        if(data.Contents && data.Contents.length > 0) {
                                                
            const fileObjArr: any[] = [];
            data.Contents.forEach((fileObj: any) => { // fileObj: S3.ObjectList
                if(fileObj.Size > 0) {
                    fileObjArr.push({
                        ...fileObj,
                        // Url generating suggestion from => http://www.wryway.com/blog/aws-s3-url-styles/
                        location: `https://${process.env.AWS_BUCKET_NAME}${process.env.AWS_REGION === 'eu-central-1' ? '.' : '-'}s3${process.env.AWS_REGION === 'us-east-1' ? '' : '-' + process.env.AWS_REGION}.amazonaws.com/${fileObj.Key}`
                    })
                }
            })

            data.Contents = fileObjArr;

        }

        res.status(200);
        return res.json({data});
    });
}

export default api_ListFiles;