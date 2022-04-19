import imageCompression from "browser-image-compression";

export async function handleImageUpload(event: any) {
  const imageFile = event.target.files[0];

  const options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    const compressedBlobIntoFile = new File(
      [compressedFile],
      `file_name ${Date.now()}`,
      {
        lastModified: Date.now(),
      }
    ) as Blob;

    return compressedBlobIntoFile;

    // await uploadToServer(compressedFile); // write your own logic
  } catch (error) {
    console.log(error);
  }
}
