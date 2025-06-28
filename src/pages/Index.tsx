import { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BarChart3, Zap, Globe, Shield, Rocket, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this completely free to use?",
      answer: "Yes! It's free within Firebase's generous free tier limits. You only pay if you exceed Firebase's free quotas."
    },
    {
      question: "Can I use this on WordPress, Blogger, or static sites?",
      answer: "Absolutely! Just add the configuration and script tags to your HTML. Works on any website platform."
    },
    {
      question: "How do I customize the counter appearance?",
      answer: "You can override the CSS styles or modify the hosted script files. Full customization is supported."
    },
    {
      question: "Can I track multiple pages separately?",
      answer: "Yes! Use different database paths like 'page_views/home', 'page_views/about' for separate counters."
    },
    {
      question: "Is the data secure and private?",
      answer: "Yes! You control your own Firebase project and database. No data is stored on our servers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Live • Real-time • Zero Backend</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Live PageView<br />Counter Library
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Track your website's page views in real-time using Firebase. 
            <span className="text-purple-300 font-semibold"> No backend required</span> — 
            just plug and play!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#get-started" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Get Started Now
            </a>
            <Link 
              to="/demo" 
              className="border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Live Demo
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-slate-300 text-sm">Works Everywhere</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm">5-Min Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16">
            Our library connects your website to Firebase Realtime Database to track and display 
            page views that update instantly across all visitors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Firebase Integration</h3>
              <p className="text-slate-400">
                Uses Firebase Realtime Database to store and sync page view counts across all your visitors in real-time.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Hosted JavaScript</h3>
              <p className="text-slate-400">
                Pre-built, optimized JavaScript widgets hosted on Netlify CDN for maximum performance and reliability.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Updates</h3>
              <p className="text-slate-400">
                Every page load increments the counter and updates live for all visitors instantly — no refresh needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section id="get-started" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Quick Setup Guide</h2>
            <p className="text-xl text-slate-300">Get your live page counter running in under 5 minutes</p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <h3 className="text-2xl font-bold text-white">Create Firebase Realtime Database</h3>
              </div>
              <div className="space-y-4 text-slate-300 ml-16">
                <p>• Go to <a href="https://console.firebase.google.com/" target="_blank" className="text-purple-400 hover:text-purple-300 underline">Firebase Console</a></p>
                <p>• Click "Add Project" and set your project name</p>
                <p>• Disable Google Analytics → Create Project</p>
                <p>• Navigate to Build → Realtime Database → Create Database</p>
                <p>• Choose "Start in test mode" for development</p>
                <p>• Copy your database URL (looks like: https://your-project-default-rtdb.firebaseio.com)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <h3 className="text-2xl font-bold text-white">Get Your Firebase Config</h3>
              </div>
              <div className="space-y-4 text-slate-300 ml-16">
                <p>• In Firebase Console, go to Project Settings ⚙️</p>
                <p>• Scroll to "Your apps" section</p>
                <p>• Click the Web icon {"</>"} to register a web app</p>
                <p>• Copy the config object that looks like this:</p>
                <div className="mt-4 bg-slate-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-300">
{`const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <h3 className="text-2xl font-bold text-white">Add Config to Your Website</h3>
              </div>
              <div className="space-y-4 text-slate-300 ml-16">
                <p>Add this script to your HTML page with your Firebase config:</p>
                <div className="mt-4 bg-slate-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-blue-300">
{`<script>
window.pageCounterConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",  
  databaseURL: "https://your-project-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
</script>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <h3 className="text-2xl font-bold text-white">Load Counter Widgets</h3>
              </div>
              <div className="space-y-4 text-slate-300 ml-16">
                <p>Add our hosted counter scripts after your config:</p>
                <div className="mt-4 bg-slate-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-yellow-300">
{`<!-- For Bar Counter -->
<script src="https://livehutracker.netlify.app/pageview-bar.js"></script>

<!-- For Badge Counter -->  
<script src="https://livehutracker.netlify.app/pageview-badge.js"></script>

<!-- Or use both! -->`}
                  </pre>
                </div>
                <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 font-semibold">✅ That's it! Your live page counter is now active!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Live Demo Preview</h2>
          <p className="text-xl text-slate-300 mb-12">Here's how your counters will look on your website:</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Bar Counter Style</h3>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg">
                📊 Total Page Views: <span className="font-bold">12,847</span>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Badge Counter Style</h3>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="font-bold">12,847</span> views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300">Everything you need to know about the Live PageView Counter</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Troubleshooting</h2>
            <p className="text-xl text-slate-300">Common issues and their solutions</p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-4">🚨 Counter not showing up?</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Check if window.pageCounterConfig is properly set</li>
                <li>• Verify your Firebase database URL is correct</li>
                <li>• Open browser console and check for error messages</li>
                <li>• Ensure Firebase database rules allow public read/write</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ Firebase "App already exists" error?</h3>
              <p className="text-slate-300">Don't worry! Our script prevents duplicate Firebase app initialization. This warning can be safely ignored.</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🔒 Database Permission Denied?</h3>
              <p className="text-slate-300 mb-4">Update your Firebase Realtime Database rules to:</p>
              <div className="bg-slate-800 p-4 rounded-lg">
                <pre className="text-sm text-green-300">
{`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Pro Tips</h2>
            <p className="text-xl text-slate-300">Take your page counter to the next level</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">🎨 Custom Styling</h3>
              <p className="text-slate-300">Override CSS classes .view-bar and .view-badge to match your website's design perfectly.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">🏠 Self-Hosting</h3>
              <p className="text-slate-300">Host the JavaScript files on your own Netlify/Vercel for complete control and branding.</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-green-300 mb-4">📊 Multiple Counters</h3>
              <p className="text-slate-300">Track different pages separately using paths like 'views/home', 'views/about', 'views/blog'.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">⚡ Performance</h3>
              <p className="text-slate-300">Load scripts asynchronously and use Firebase's offline capabilities for better user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Credit Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-purple-900/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Animated Typing SVG */}
          <div className="mb-12">
            <img 
              src="https://readme-typing-svg.herokuapp.com?font=Segoe+UI&size=26&duration=4000&pause=800&color=00FF9F&background=111111&vCenter=true&width=600&height=60&lines=🔥+Live+Page+View+Tracker+by+Arsalan;📊+Built+with+Firebase+%26+Netlify+❤️" 
              alt="Live Page View Tracker by Arsalan"
              className="mx-auto rounded-lg"
            />
          </div>

          {/* Author Info */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700 max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">MA</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Md Arsalan</h3>
              <p className="text-purple-300 font-medium">Confused Developer</p>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/mdarsalan-c30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/md-arsalan-web/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                "Building tools that make developers' lives easier, one line of code at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Ready to get started?
            </h3>
            <a 
              href="#get-started" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Tracking Now
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              Made with ❤️ by Arsalan for developers who want simple, effective page tracking
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © 2025 Live PageView Counter Library • Open Source & Free Forever
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
