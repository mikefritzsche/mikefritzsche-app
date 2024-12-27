const env = {
  isProduction: import.meta.env.VITE_ENV === 'production',
  isDevelopment: import.meta.env.VITE_ENV === 'development',

  // API
  apiUrl: import.meta.env.VITE_API_URL,
  apiVersion: import.meta.env.VITE_API_VERSION,

  // Analytics
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID,

  // App Info
  title: import.meta.env.VITE_TITLE,
};

// Freeze the environment object in production
if (env.isProduction) {
  Object.freeze(env);
}

export default env;
