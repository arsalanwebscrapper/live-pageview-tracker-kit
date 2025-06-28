import React, { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    // 1. Define window.pageCounterConfig
    // This makes the configuration available globally for the scripts to use.
    window.pageCounterConfig = {
      apiKey: "AIzaSyCU9V-XgulOjdIdzW5DA_aqZN9BiHVHWVE",
      authDomain: "helpert-e5609.firebaseapp.com",
      databaseURL: "https://helpert-e5609-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "helpert-e5609",
      storageBucket: "helpert-e5609.appspot.com",
      messagingSenderId: "625434858373",
      appId: "1:625434858373:web:79105eb7c00b4a2e60aaec",
      measurementId: "G-D5BK6J6CZP"
    };

    // 2. Dynamically load the external scripts
    const scriptsToLoad = [
      "https://livehutracker.netlify.app/firebase-loader.js",
      "https://livehutracker.netlify.app/pageview-badge.js",
      "https://livehutracker.netlify.app/pageview-bar.js"
    ];

    const loadedScripts = [];

    scriptsToLoad.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // Load script asynchronously
      // Append the script to the body. These types of tracking/widget scripts
      // often expect to be in the main document flow.
      document.body.appendChild(script);
      loadedScripts.push(script);
    });

    // 3. Cleanup function: This runs when the component unmounts
    return () => {
      // Remove the global config if it's not needed elsewhere or on other pages
      delete window.pageCounterConfig;
      // Remove the dynamically added scripts from the DOM
      loadedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []); // Empty dependency array means this useEffect runs once on mount and cleans up on unmount

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Live Demo</h1>
          <p className="text-xl text-slate-300 mb-8">
            This page demonstrates the live page view counter in action using Firebase.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>

        {/* This is where the output of the dynamically loaded scripts will appear.
            The pageview-badge.js and pageview-bar.js should automatically
            inject elements into the page (likely at the bottom or a specific corner).
            You won't see specific React elements here unless the scripts themselves
            create them. */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold text-green-300 mb-4">✅ Live Counters Active</h3>
          <p className="text-slate-300">
            The page view counters are now tracking visits to this demo page in real-time using the Firebase configuration. You should see the counter badge/bar appear on this page, likely in a corner or at the bottom, depending on how those scripts are designed to render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
