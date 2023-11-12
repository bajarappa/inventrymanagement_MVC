import multer, { diskStorage } from "multer";

const storageConfig = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + "_" + file.originalname;
        cb(null, fileName);
    },
});
export const uploadFile = multer({ storage: storageConfig });
