import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}-monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="64"
      height="40"
      viewBox="0 0 64 40"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Letter P */}
          <path d="M10 40V10h10c6 0 10 4 10 10s-4 10-10 10h-5v10h-5Z" />
          {/* Letter O */}
          <path d="M42 10a15 15 0 1 1 0 30a15 15 0 1 1 0-30Zm0 5a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z" />
        </clipPath>
      </defs>

      <rect width="100%" height="100%" clipPath={`url(#${clipId})`} />

      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
