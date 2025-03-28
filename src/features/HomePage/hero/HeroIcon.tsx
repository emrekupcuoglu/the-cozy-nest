function HeroIcon({
  icon,
  iconText,
}: {
  iconText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start max-sm:items-center">
      <div className="relative mx-4">
        <div className="bg-icon-primary rounded-full p-4 max-sm:p-2">
          <span>{icon}</span>
        </div>
        <div className="bg-icon-grey absolute -left-4 bottom-0 right-4 top-0 -z-50 rounded-full p-4 max-sm:p-2"></div>
      </div>
      <span className="text-2xl max-md:text-base max-sm:text-sm">
        <strong>{iconText}</strong>
      </span>
    </div>
  );
}

export default HeroIcon;
