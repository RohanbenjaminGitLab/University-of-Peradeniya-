import { motion } from "framer-motion";

export default function CardSection() {
  const features = [
    {
      title: "PhD in Political Science",
      year: "2010",
      desc: "Department of Political Science, Bangalore University",
      icon: "🎓",
    },
    {
      title: "MPhil in Political Science",
      year: "2005",
      desc: "Department of Political Science, University of Peradeniya",
      icon: "📘",
    },
    {
      title: "BA in Political Science",
      year: "1992 – 1996",
      desc: "Department of Political Science, University of Peradeniya",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-indigo-700 mb-14"
      >
        Academic Qualifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            className="relative group"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-20 group-hover:opacity-40 transition"></div>

            {/* Card */}
            <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-7 shadow-xl border border-white/40">
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-4xl mb-4"
              >
                {f.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-indigo-700">
                {f.title}
              </h3>

              <p className="text-sm font-semibold text-gray-500 mt-1">
                {f.year}
              </p>

              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
