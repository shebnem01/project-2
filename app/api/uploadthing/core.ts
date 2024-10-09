import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = () => {
    const { userId } = { userId: "derewredsw" };
    if (!userId) {
        throw new Error("Unauthorization");
    }
    return { userId }
}

export const ourFileRouter = {
    productImage: f({ image: { maxFileSize: "4MB" } })
        .middleware(() => auth())
        .onUploadComplete(() => { }),
    attachment: f(["image", "video","text"])
        .middleware(() => auth())
        .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
