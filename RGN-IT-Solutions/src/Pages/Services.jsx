import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, ShieldCheck, Cloud, Smartphone, ShoppingCart, Search, Briefcase, BarChart } from "lucide-react";

export default function Services() {
const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications tailored to your needs.",
    icon: <Code className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting visually stunning and user-friendly interfaces for seamless experiences.",
    icon: <Palette className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Digital Marketing",
    description: "Boosting your online presence with data-driven strategies and creative campaigns.",
    icon: <TrendingUp className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Cyber Security",
    description: "Protecting your business with cutting-edge security solutions and monitoring.",
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment for modern businesses.",
    icon: <Cloud className="w-10 h-10 text-cyan-600" />,
  },
  {
    title: "Mobile App Development",
    description: "Designing and building high-performance iOS and Android apps.",
    icon: <Smartphone className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Custom online stores with secure payments and smooth shopping experiences.",
    icon: <ShoppingCart className="w-10 h-10 text-orange-600" />,
  },
  {
    title: "SEO Optimization",
    description: "Improving website ranking and visibility to drive organic traffic.",
    icon: <Search className="w-10 h-10 text-emerald-600" />,
  }
];


  return (
  //   <div className="fixed inset-0
  // bg-gradient-to-r from-gray-600 via-gray-400 to-gray-500
  // // w-full h-full p-12 flex flex-col items-center overflow-hidden">

    <div className="bg-fixed pt-29
     bg-gradient-to-r from-gray-600 via-black-400 to-gray-500 w-full min-h-screen p-12 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold 
        bg-gradient-to-r from-[#FFDAB9] to-[#FFB07C] bg-clip-text text-transparent mb-10"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ rotateX: 2, rotateY: 2, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center "
          >
            <motion.div initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}} transition={{duration:2,delay:i*0.2}}   viewport={{ once: true }}className="mb-4">{service.icon}</motion.div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
