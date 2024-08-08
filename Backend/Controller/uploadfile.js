import { cloudinary } from "../middelwere/cloudinory.js";

export const uploadfile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({
      success: 1,
      image_url: result.secure_url,
    });
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
