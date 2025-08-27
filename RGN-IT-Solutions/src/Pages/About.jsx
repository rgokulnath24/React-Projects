import { motion } from "framer-motion";

export default function About() {
  return (
      <div className="pt-[100px] flex flex-col md:flex-row items-center justify-center relative
       bg-gradient-to-r from-gray-600 via-black-400 to-gray-500 w-full min-h-screen p-8">

      {/* Animated Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          className="h-[350px] w-[350px] md:h-[400px] md:w-[400px] rounded-2xl shadow-xl"
          src="teamwork.jpeg"
          alt="about"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex-1 text-black font-medium mt-8 md:mt-0 md:ml-10">
        <h2 className="bg-gradient-to-r from-[#FFDAB9] to-[#FFB07C] bg-clip-text text-transparent font-extrabold text-4xl mb-4">About Us</h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg leading-relaxed text-gray-100 max-w-lg"
        >
          We are a passionate team dedicated to delivering digital solutions that
          transform businesses. Our mission is to bridge the gap between technology
          and people, ensuring innovation is accessible to everyone.
        </motion.p>
      </div>
    </div>
  );
}
