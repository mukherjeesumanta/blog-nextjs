import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};
const uploadDirPath = ["public", "img", "articles", "uploads"];
const readFile = (
  req: NextApiRequest
): Promise<{ files: formidable.Files; filename: string }> => {
  let filename = "";
  const options: formidable.Options = {};
  options.uploadDir = path.join(process.cwd(), ...uploadDirPath);
  options.filename = (name, ext, path, form) => {
    filename = Date.now().toString() + "_" + path.originalFilename;
    return filename;
  };

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ files, filename });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    fs.mkdir(
      path.join(process.cwd(), ...uploadDirPath),
      { recursive: true },
      function (err) {
        if (err) {
          if (err.code == "EEXIST")
            console.log("Ignore the error if the folder already exists");
          else console.log("Something else went wrong");
        } else console.log("Successfully created folder"); //
      }
    );
  } catch (error) {
    console.log('file creation error _ '+ error);
  }

  const { filename } = await readFile(req);
  res.json({
    message: "Image uploaded successfully",
    url: "/img/articles/uploads/" + filename,
  });
};

export default handler;
