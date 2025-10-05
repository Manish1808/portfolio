import React from "react";

function Experience() {
  return (
    <section className="per p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            DSA Mentor - SmartInterviews
          </h3>
          <p className="text-sm text-gray-400 mb-4">March 2025 – July 2025</p>

          <div className="text-gray-200 leading-relaxed space-y-3">
            <p>
              Mentored junior students by facilitating a deeper understanding of
              Data Structures and Algorithms.
            </p>
            <p>
              Provided comprehensive support in resolving doubts, explaining
              algorithmic problem-solving strategies, and reinforcing
              fundamental programming concepts.
            </p>
            <p>
              Assisted students in preparing for technical interviews through
              structured guidance, personalized feedback, and continuous
              motivation.
            </p>
          </div>

          <div className="mt-">
            <a
          href="https://smartinterviews.in/certificate/c7cf40e5"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
