import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import Swal from "sweetalert2";
export default function Contact() {
  return (
    <div className="bg-fixed inset-0 pt-29 
    bg-gradient-to-r from-gray-600 via-black-400 to-gray-500 w-full min-h-screen p-12 flex flex-col items-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold bg-gradient-to-r from-[#FFDAB9] to-[#FFB07C] bg-clip-text text-transparent
         mb-12 tracking-wide"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col justify-center border border-white/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 rounded-full bg-red-100">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-white/90">info@rgnitsolutions.com</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 rounded-full bg-green-100">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-white/90">+91 98765 43210</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-yellow-100">
              <MapPin className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-white/90">Hyderabad, India</p>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              
              const name = e.target[0].value.trim();   // First input (Name)
              const email = e.target[1].value.trim();  // Second input (Email)
              const message = e.target[2].value.trim(); // Textarea (Message)

              // Email regex for validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

              if (!name) {
                Swal.fire("Error", "Please enter your name.", "error");
                return;
              }

              if (!email) {
                Swal.fire("Error", "Please enter your email.", "error");
                return;
              }

              if (!emailRegex.test(email)) {
                Swal.fire("Error", "Please enter a valid email address.", "error");
                return;
              }

              if (!message) {
                Swal.fire("Error", "Please enter your message.", "error");
                return;
              }

              // If all validations pass
              Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting us. We'll get back to you soon.",
                icon: "success",
                confirmButtonColor: "#9333ea",
                confirmButtonText: "OK",
              });

              e.target.reset(); // Reset form fields
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col border border-white/30"
          >


          <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
          
          {/* Input fields */}
          {[
            { placeholder: "Your Name", icon: <User className="text-gray-400" /> },
            { placeholder: "Your Email", icon: <Mail className="text-gray-400" /> },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-5"
            >
              <span className="absolute left-4 top-3">{field.icon}</span>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full pl-12 p-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </motion.div>
          ))}

          {/* Message box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{once:true}}
            className="mb-5"
          >
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              rows="5"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-lg"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
