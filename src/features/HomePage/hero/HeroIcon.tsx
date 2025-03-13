function HeroIcon({
  icon,
  iconText,
}: {
  iconText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="relative mx-4">
        <div className="bg-icon-primary rounded-full p-4">
          <span>{icon}</span>
        </div>
        <div className="bg-icon-grey absolute -left-4 bottom-0 right-4 top-0 -z-50 rounded-full p-4"></div>
      </div>
      <span className="text-2xl">
        <strong>{iconText}</strong>
      </span>
    </div>
  );
}

export default HeroIcon;
