import styles from './CarouselCounter.module.css';

interface CarouselCounterProps {
  images: [];
  active: number;
}

export default function CarouselCounter({
  images,
  active,
}: CarouselCounterProps) {
  return (
    <div className={styles.counter}>
      {images.map((image, index) => {
        return (
          <svg key={index} height="20" width="20">
            <circle
              cx="10"
              cy="10"
              r="5"
              // stroke="black"
              // stroke-width="3"
              fill={active === index + 1 ? 'red' : 'blue'}
            />
          </svg>
        );
      })}
    </div>
  );
}
