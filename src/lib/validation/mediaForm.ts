import { z } from "zod";

export const mediaFormSchema = z.object({
  // image: z
  //   .instanceof(FileList)
  //   .refine((fileList) => fileList?.length == 1, "Image is required.")
  //   .refine((fileList) => {
  //     console.log();
  //     return fileList[0].type.includes("image");
  //   }, "File must be an image"),

  image:
    typeof FileList === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((fileList) => fileList?.length == 1, "Image is required.")
          .refine((fileList) => {
            console.log();
            return fileList[0].type.includes("image");
          }, "File must be an image"),

  alt: z.string().nonempty().max(1000, "Alt is too long"),
});

export type MediaFormSchema = z.infer<typeof mediaFormSchema>;
