const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto bg-[#111] text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        ✈️ Welcome to Runway Animation
      </h1>

      <article className="max-w-3xl text-lg space-y-6 bg-[#1c1c1c] p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-[#f46000]">
          📌 What is Runway Animation?
        </h2>
        <p>
          The{" "}
          <span className="text-[#f46000] font-semibold">Runway Animation</span>{" "}
          is an interactive scrolling effect where an airplane moves dynamically
          as the user scrolls down the page. The airplane starts at the bottom
          and gradually ascends, creating a **takeoff effect** that visually
          represents the user's scroll progress.
        </p>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🔍 How Does It Work?
        </h2>
        <p>
          The movement of the airplane is controlled based on the **scroll
          position** of the page. As the user scrolls:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-left">
          <li>The **airplane starts at the bottom** of the screen.</li>
          <li>As the user scrolls, the **plane moves up gradually**.</li>
          <li>
            By the time the user reaches the end of the content, the **airplane
            reaches the top**.
          </li>
        </ul>
        <p>
          This effect creates an engaging and visually appealing user experience
          that mimics a real runway takeoff.
        </p>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🛠️ Technologies Used
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-left">
          <li>**React** – Handles dynamic state updates and page structure.</li>
          <li>
            **Framer Motion** – Provides smooth and interactive animations for
            the airplane.
          </li>
          <li>**Tailwind CSS** – Offers a sleek and responsive design.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🎨 Key Features
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-left">
          <li>
            **Real-Time Animation** – The airplane responds dynamically to
            scrolling.
          </li>
          <li>
            **Custom Runway Design** – Styled runway lines light up as the
            airplane moves.
          </li>
          <li>
            **Adaptive Scroll Handling** – Works on different pages with varying
            content lengths.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🚀 Why Use Runway Animation?
        </h2>
        <p>
          The **Runway Animation** adds a unique and interactive element to web
          design, making content exploration more engaging. Whether it's for a
          portfolio, blog, or a fun scrolling experience, this feature enhances
          user interaction with smooth transitions and a visually appealing
          theme.
        </p>
      </article>
    </section>
  );
};

export default Home;
