function CarouselLabel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default CarouselLabel;
