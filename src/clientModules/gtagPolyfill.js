// Polyfill for gtag to prevent "window.gtag is not a function" errors
// This ensures gtag queue exists before the actual script loads

if (typeof window !== 'undefined' && !window.gtag) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
}
