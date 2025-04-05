
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PowerApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="py-20 bg-gradient-to-r from-blue-500/10 to-pink-500/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Power Apps
            </h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PowerApps;
