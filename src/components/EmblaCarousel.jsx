import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto  overflow-hidden -z-10">
      <div className="embla-viewport w-full h-full" ref={emblaRef}>
        <div className="flex w-full h-full">
          <div className="flex-shrink-0 flex-grow-0 w-full min-w-0 h-full">
            <img
              src="src/assets/bgImage1.png"
              alt="Centered Image"
              className="w-10/12 h-2/3 object-cover -z-10 absolute inset-0 m-auto top-3 rounded-3xl"
            />

            <img
              src="src/assets/bgImage1.png"
              alt="Centered Image"
              className="w-full h-full object-cover -z-20 absolute blur-lg "
            />
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-full min-w-0 h-full flex items-center justify-center">
            Slide 2
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-full min-w-0 h-full flex items-center justify-center">
            Slide 3
          </div>
        </div>
      </div>
      <div className=" absolute inset-0 left-4 right-4 m-auto flex justify-between">
        <button className="" onClick={scrollPrev}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button className="" onClick={scrollNext}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
}

export default EmblaCarousel;
