
const Demo = () => {
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

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">HTML Implementation</h2>
          <p className="text-slate-300 mb-6">
            Below is the complete HTML code with Firebase configuration and counter scripts:
          </p>
          
          <div className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm text-green-300 whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
 <script>
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
</script>
<script src="https://livehutracker.netlify.app/firebase-loader.js"></script>
<script src="https://livehutracker.netlify.app/pageview-badge.js"></script>
<script src="https://livehutracker.netlify.app/pageview-bar.js"></script>

</body>
</html>`}
            </pre>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold text-green-300 mb-4">✅ Live Counters Active</h3>
          <p className="text-slate-300">
            The page view counters are now tracking visits to this demo page in real-time using the Firebase configuration above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
