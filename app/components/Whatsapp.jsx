"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppChat() {
  const [showButton, setShowButton] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState("Hi, I'm interested in your jewelry.");

  const phoneNumber = "917879081806"; // Replace with your WhatsApp number

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {!openChat && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpenChat(true)}
                className="bg-green-500 hover:bg-green-600 text-gray-900 p-4 rounded-full shadow-lg"
              >
                <FaWhatsapp size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {openChat && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
                className="bg-black w-72 p-4 rounded-xl shadow-2xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-semibold text-green-700 text-lg">
                      GoldLace Support
                    </p>
                    <p className="text-xs text-gray-500">Typically replies in 5 mins</p>
                  </div>
                  <button onClick={() => setOpenChat(false)} className="text-gray-400 hover:text-gray-600 text-lg">
                    ✕
                  </button>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full p-2 text-sm border border-gray-300 rounded resize-none focus:outline-none"
                />

                <button
                  onClick={handleSend}
                  className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-medium"
                >
                  Send on WhatsApp
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
