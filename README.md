# AWS: Create IAM User
Create IAM user AWS with [ **Access type**: `Programmatic access` ], I named mine `ex3_s333`

1. Next step "**Set permissions**" -> Click "**Attach existing policies directly**"
2. Then search with keyword "`s3`"
3. To make things simple I chose/checked option "**AmazonS3FullAccess**" policy name
4. Click "**Next:Tags**", I am not setting tags here.
5. Finish the process, click "**Next:Review**" -> click -> "**Create user**"
6. For ease of use, **REMEMBER** to download the CSV (contains this new user's access info) -> Save file -> Keep it safe ;)

# AWS: Create a bucket
To do so, from **"Servises"** -> click **"S3"**
- Click "**Create bucket**"
- Enter a valid + unique name. I named it "`mygallerybucket33`", then click "**Next**"
- I will keep everything default in "**Configure option**" section, click -> "**Next**"
- This step "**Set permissions**", 
    - ***`Uncheck`*** -> "**Block all public access**"
    - ***`Check`*** -> "**Block public access to buckets and objects granted through new public bucket or access point policies**"
    - ***`Check`*** -> "**Block public and cross-account access to buckets and objects through any public bucket or access point policies**"
    - **NOTE**: *Information are given below the checkboxes there, please read them to understand what they do.*
    - Acknowledge the alert checkbox.
    - Click -> **Next**
    - Click -> **Create bucket**
- You will find the created bucket in the bucket list
- Click to open your bucket, I clicked mine "`mygallerybucket33`"
- We need to make it publicly accessible, so click on **"Permissions"**
    - Click -> "**Access Control List**"
    - Navigate to "**Public access**" section and click -> "**Everyone**"
    - A pop up "**Everyone**" will appear to set further option
        - Under "**Access to the objects**" 
        - Check -> "`List objects`" and 
        <!-- - Check -> "`Write objects`" -->
        - Click -> **Save**
- Notice: The bucket is now publicly accessible.

# Run the app

1. `npm install`
2. Rename `sample_nodemon.json` > `nodemon.json`
3. Open `nodemon.json` > Replace all `<_xxxx_>` with valid credentials
2. `npm start`



    


