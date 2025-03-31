import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAllMedia } from "@/lib/supabase/data-service";
import Image from "next/image";

async function MediaPage() {
  const media = await getAllMedia();

  return (
    <div className="flex flex-col">
      <div className="bg-background-hero mb-8 p-8">
        <h1 className="text-center text-2xl font-bold capitalize text-white">
          Add a new Product
        </h1>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-16">
          {media.map((image) => {
            if (image.name === ".emptyFolderPlaceholder") return null;

            const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${image.name}`;

            return (
              <Card key={image.id} className="gap-0 p-0">
                <CardHeader className="bg-background-hero rounded-t-2xl p-0">
                  <div className="rounded-2xl">
                    <h2 className="p-4 text-center text-white">Image name</h2>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-48 w-48 rounded-2xl">
                    <Image
                      fill
                      className="rounded-b-2xl border-t-4 object-cover"
                      src={url}
                      alt=""
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
