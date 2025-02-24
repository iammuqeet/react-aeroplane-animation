const Blogs = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto bg-[#111] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Understanding Runway Animation
      </h1>

      <article className="max-w-3xl text-lg space-y-6 bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-[#f46000]">
          🚀 How does the Runway Animation Work?
        </h2>
        <p>
          The{" "}
          <span className="font-semibold text-[#f46000]">Runway Animation</span>{" "}
          is a smooth scrolling effect where an airplane icon moves dynamically
          in response to the user’s scroll position. As the user scrolls down,
          the airplane progressively moves from the bottom to the top of the
          screen, creating an immersive flight-like experience.
        </p>
        <p>This effect is achieved by leveraging:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Framer Motion</strong> – Handles smooth animations and
            transitions.
          </li>
          <li>
            <strong>React State</strong> – Dynamically tracks user scroll
            behavior.
          </li>
          <li>
            <strong>Tailwind CSS</strong> – Provides a sleek and modern design.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🛠️ Implementation Details
        </h2>
        <p>
          The airplane’s movement is controlled based on the total scrollable
          height of the page. The farther the user scrolls, the higher the
          airplane moves. This is calculated using:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **Window Scroll Position** - Captured using React's{" "}
            <code>useState</code> and <code>useEffect</code>.
          </li>
          <li>
            **Total Scrollable Height** - Calculated dynamically to ensure
            smooth motion across different screen sizes.
          </li>
          <li>
            **Framer Motion Animations** - Used to smoothly interpolate the
            airplane’s vertical position.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          📏 Adaptive Scroll Handling
        </h2>
        <p>
          Unlike a fixed animation, this system ensures that no matter how long
          or short a page is, the airplane correctly reaches the top by the time
          the user reaches the bottom of the content. This is particularly
          useful in multi-page applications where each page may have varying
          amounts of content.
        </p>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🎨 Visual Styling
        </h2>
        <p>The visual elements of the Runway animation include:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>A **dotted runway strip** made with Tailwind utility classes.</li>
          <li>
            A **bright orange airplane icon** that stands out against the dark
            background.
          </li>
          <li>
            Smooth **hover effects** where runway lights turn orange when the
            airplane moves over them.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          🔄 Future Improvements
        </h2>
        <p>
          While the current implementation provides a compelling animation
          effect, there are potential enhancements that can make the experience
          even more dynamic:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            🌓 **Dark Mode Toggle** – Enhancing usability in different lighting
            conditions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#f46000]">🏁 Conclusion</h2>
        <p>
          The Runway Animation is a unique way to visualize scroll progression
          and enhance the user experience. By combining **React, Framer Motion,
          and Tailwind CSS**, this effect adds a fun and interactive element to
          the UI, making the website feel dynamic and engaging.
        </p>

        <h2 className="text-2xl font-semibold text-[#f46000]">
          Extra Lorem text
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </article>
    </section>
  );
};

export default Blogs;
