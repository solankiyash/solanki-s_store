import multer from "multer";
import path from "path";

const StorageData = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: StorageData });

export default upload;
