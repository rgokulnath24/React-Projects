import { useEffect, useState } from "react";
import { ForwardIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoPlay() {
  const [video, setVideo] = useState(false);
  const [add, setAdd] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdd(false);
      setVideo(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const onSkip = () => {
    setAdd(false);
    setVideo(true);
  };

  return (
    <div className="relative flex justify-center mt-8">
      {/* AnimatePresence handles entry/exit smoothly */}
      <AnimatePresence>
        {add && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-0 w-[600px] h-[350px] bg-gray-50 
                       rounded-4xl flex flex-col items-center justify-center"
          >
            <marquee
              scrollamount="20"
              className="font-semibold text-yellow-600 text-5xl mb-6"
            >
              Advertisement <span className="text-orange-400">Let's Skip</span>
            </marquee>

            <button
              onClick={onSkip}
              className="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white shadow-lg
                         hover:bg-red-600 active:scale-95 transition-all cursor-pointer top-69 right-4"
            >
              <ForwardIcon className="w-5 h-5" />
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {video && (
          <motion.video
            key="video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            autoPlay
            controls
            className="border rounded-4xl"
            width={600}
          >
            <source src="sample.mp4" type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>
    </div>
  );
}
