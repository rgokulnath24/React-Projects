import { motion } from "framer-motion";

export default function Home() {
  return (
   <div className="fixed inset-0 bg-gray-900 w-full h-full p-4 flex flex-col justify-center items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="index_image.jpeg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="home"
      />

      {/* Overlay Content */}
      <div className="relative text-white text-lg max-w-4xl text-center px-6">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/90 text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Welcome to RGN IT Solutions
        </motion.h1>

        {/* Subheading Animation */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-red-100 text-lg md:text-xl font-medium leading-relaxed"
        >
          Innovating Your Digital Future.  
          At RGN IT Solutions, we provide cutting-edge technology solutions tailored to help your business grow in the digital age.  
          With a team of experienced professionals and a passion for innovation, we deliver reliable, scalable, and cost-effective IT services to businesses of all sizes.
        </motion.p>

      </div>
    </div>
  );
}
