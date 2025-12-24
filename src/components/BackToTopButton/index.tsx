import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function BackToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.backToTop}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.backToTopButton}
          aria-label="Back to top"
          title="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 3.293l6 6-1.414 1.414L11 7.121V17H9V7.121l-3.586 3.586L4 9.293l6-6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
