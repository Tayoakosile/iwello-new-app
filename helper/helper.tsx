import imageCompression from "browser-image-compression";

export async function handleImageUpload(event: any) {
  const imageFile = event.target.files[0];
  console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  const options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(
      "compressedFile instanceof Blob",
      compressedFile instanceof Blob
    ); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    const compressedBlobIntoFile = new File(
      [compressedFile],
      `file_name ${Date.now()}`,
      {
        lastModified: Date.now(),
      }
    );
    return compressedBlobIntoFile;

    // await uploadToServer(compressedFile); // write your own logic
  } catch (error) {
    console.log(error);
  }
}
