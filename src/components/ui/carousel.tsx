"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  carouselThumbRef: ReturnType<typeof useEmblaCarousel>[0];
  apiThumb: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  onThumbButtonClick: (index: number) => void;
  selectedIndex: number;
  scrollSnaps: number[];
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );

  const [carouselThumbRef, apiThumb] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      containScroll: "keepSnaps",
      dragFree: true,
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  // For dot button
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onThumbButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api],
  );

  const onSelect = React.useCallback(() => {
    // if (!api ||  !apiThumb) return;
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
    apiThumb?.scrollTo(api.selectedScrollSnap());
  }, [api, apiThumb]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  // For dot button

  const onInit = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  }, []);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    console.log("api", api);
    console.log("apiThumb", apiThumb);
    // if (!api || !apiThumb) return;
    if (!api) return;
    onInit(api);

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);

    return () => {
      api?.off("select", onSelect).off("reInit", onInit);
    };
  }, [api, onSelect, onInit, apiThumb]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        onThumbButtonClick,
        selectedIndex,
        scrollSnaps,
        canScrollPrev,
        canScrollNext,
        carouselThumbRef,
        apiThumb,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn("overflow-hidden", className)}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

function CarouselThumbnail({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">) {
  const { carouselThumbRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselThumbRef}
      className="mx-auto w-full overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

function CarouselThumbnailItem({
  className,
  index,
  children,
  ...props
}: {
  index: number;
} & React.ComponentProps<"div">) {
  const { onThumbButtonClick, orientation } = useCarousel();

  return (
    <div
      {...props}
      onClick={() => onThumbButtonClick(index)}
      className={cn(
        "bg-background flex min-w-0 shrink-0 grow-0 basis-1/3 p-1 pl-4",
        `${orientation === "vertical" ? "pb-1" : "pr-1"}`,
        className,
      )}
    >
      <div className="relative mx-auto aspect-square w-full">{children}</div>
    </div>
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        canScrollPrev ? "bg-card-action text-white" : "bg-gray-200",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={(e) => {
        if (onClick) onClick(e);
        scrollPrev();
      }}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        canScrollNext ? "bg-card-action text-white" : "bg-gray-200",
        className,
      )}
      disabled={!canScrollNext}
      onClick={(e) => {
        if (onClick) onClick(e);
        scrollNext();
      }}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

function CarouselDotButton({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, onThumbButtonClick, selectedIndex, scrollSnaps } =
    useCarousel();

  console.log("selectedIndex", selectedIndex);
  console.log("scrollSnaps", scrollSnaps);

  return (
    <>
      {scrollSnaps.map((snap, i) => {
        return (
          <Button
            key={i}
            data-slot="carousel-next"
            variant={variant}
            size={size}
            className={cn(
              "bg-background-hero size-8 h-4 w-4 rounded-full transition-all",
              selectedIndex === i
                ? "bg-background-hero w-24 text-white"
                : "bg-gray-200",
              orientation === "horizontal"
                ? "-right-12 top-1/2 -translate-y-1/2"
                : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
              className,
            )}
            onClick={() => onThumbButtonClick(i)}
            {...props}
          >
            <span className="sr-only">Next slide</span>
          </Button>
        );
      })}
    </>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDotButton,
  CarouselThumbnail,
  CarouselThumbnailItem,
};
