import { useState } from "react";
import lecturer from "../assets/Sir.jpg";
import { FaEnvelope, FaPhoneAlt, FaAward, FaTimes } from "react-icons/fa";

export default function About() {
  const [showAwards, setShowAwards] = useState(false);
  const [closing, setClosing] = useState(false);

  const openModal = () => setShowAwards(true);
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowAwards(false);
      setClosing(false);
    }, 300);
  };

  const awards = [
    {
      title:
        "Commonwealth Scholarship - Indian Council for Cultural Relations, Government of India",
      year: "2007 – 2010",
    },
    {
      title:
        "Gate Mudliyar A.G. Tillekeratne - Post Graduate Research Fellowship awarded by University of Peradeniya",
      year: "2000",
    },
    {
      title:
        "Rt. Rev. C.L. Wickramasinghe Prize for the best performance at the final examination in Arts (Political Science) - University of Peradeniya",
      year: "1996",
    },
    { title: "Honorary Citizen of Nebraska - United States of America", year: "2011" },
    { title: "Honorary Citizen of Lincoln - United States of America", year: "2011" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 px-4 pt-32">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-6">
        About Us
      </h1>

      <p className="max-w-3xl mx-auto text-gray-600 text-center mb-14">
        I am Prof. G.D.R.U. Abeyrathne, currently serving as the Head of the
        Department of Political Science at the University of Peradeniya.
      </p>

      {/* MAIN CARD WITH ANIMATED GRADIENT BORDER */}
      <div className="max-w-5xl mx-auto p-1 rounded-3xl animate-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 shadow-glow transition-transform duration-300 hover:scale-105">
        <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 flex flex-col items-center text-center gap-4">
            <img
              src={lecturer}
              alt="Lecturer"
              className="w-40 h-40 rounded-full object-cover mb-4 ring-4 ring-indigo-200"
            />
            <h2 className="text-2xl font-bold text-indigo-700">G.D.R.U. Abeyrathne</h2>
            <p className="text-gray-500 mb-4">Head, Department of Political Science</p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 w-full items-center">
              <a
                href="mailto:abeyrathne.upul@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition w-64"
              >
                <FaEnvelope /> Personal Email
              </a>

              <a
                href="mailto:abeyrathne.upul@arts.pdn.ac.lk"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-indigo-600 text-indigo-600 text-sm hover:bg-indigo-50 transition w-64"
              >
                <FaEnvelope /> University Email
              </a>

              <a
                href="tel:+94812392625"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition w-64"
              >
                <FaPhoneAlt /> Office Call
              </a>

              <a
                href="tel:+94715359423"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-emerald-600 text-emerald-600 text-sm hover:bg-emerald-50 transition w-64"
              >
                <FaPhoneAlt /> Mobile Call
              </a>

              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-xl bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition w-64"
              >
                <FaAward /> View Awards
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-2/3 flex flex-col justify-center text-gray-700">
            <p className="mb-3 font-bold text-indigo-700">Current Positions</p>
            <p className="mb-1 font-semibold">• Head – Department of Political Science<br></br>(2021 – Present)</p>
            <p className="font-semibold">• Professor of Political Science – University of Peradeniya <br></br>(24 November 2016 – Present)</p>
          </div>
        </div>
      </div>

      {/* AWARDS MODAL */}
      {showAwards && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ${
              closing ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <FaTimes size={22} />
            </button>

            <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
              <FaAward className="text-yellow-500" /> Awards & Honors
            </h2>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl border-l-4 border-indigo-500 hover:scale-[1.02] hover:shadow transition"
                >
                  <p className="font-semibold text-gray-800">{award.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAILWIND CUSTOM ANIMATION */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientBG 10s ease infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.6),
            0 0 60px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
