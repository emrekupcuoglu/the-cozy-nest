function CarouselLabel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">{title}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default CarouselLabel;
