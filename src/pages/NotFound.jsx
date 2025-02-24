import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#111] text-white p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#f46000] text-white px-6 py-2 rounded-lg hover:bg-[#d94d00] transition duration-300"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default NotFound;
