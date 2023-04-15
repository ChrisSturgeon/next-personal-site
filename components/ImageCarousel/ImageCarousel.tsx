import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  hasPriorityImage: boolean;
}

export default function ImageCarousel({
  hasPriorityImage,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Image
              priority={hasPriorityImage}
              src={'/imgs/session-hub/home-1.png'}
              alt="headhsot"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: '100%', boxShadow: 'none' }}
            ></Image>
          </div>
          <div className={styles.embla__slide}>
            <Image
              priority={hasPriorityImage}
              src={'/imgs/session-hub/session-1.png'}
              alt="headhsot"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: '100%', boxShadow: 'none' }}
            ></Image>
          </div>
          <div className={styles.embla__slide}>
            <Image
              priority={hasPriorityImage}
              src={'/imgs/session-hub/profile-1.png'}
              alt="headhsot"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: '100%', boxShadow: 'none' }}
            ></Image>
          </div>
          <div className={styles.embla__slide}>
            <Image
              priority={hasPriorityImage}
              src={'/imgs/session-hub/mobile-1.png'}
              alt="headhsot"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: '100%', boxShadow: 'none' }}
            ></Image>
          </div>
        </div>
        <button className={styles.embla__prev} onClick={scrollPrev}>
          Prev
        </button>
        <button className={styles.embla__next} onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
}
