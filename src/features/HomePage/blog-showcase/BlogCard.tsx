import { Card, CardContent } from "@/components/ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function BlogCard({ src }: { src: string | StaticImport }) {
  return (
    <Card className="border-none p-0">
      <CardContent className="p-0">
        <div className="relative aspect-square w-full">
          <Image src={src} alt="" fill className="rounded-2xl" />
        </div>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
