import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Runway from "./components/Runway";

function AppContent() {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" &&
    !["/blogs"].some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar only if it's NOT the NotFound page */}
      {!isNotFound && <Navbar />}

      <Runway />

      <div className="flex flex-col lg:flex-row lg:justify-center w-full flex-grow">
        {!isNotFound ? (
          <div className="w-full lg:w-full p-4 lg:mt-8 md:mt-8 flex flex-col lg:flex-row">
            {/* Page Content - FIXED to not go behind the ProfileCard */}
            <div className="w-full lg:w-full px-4 lg:ml-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
