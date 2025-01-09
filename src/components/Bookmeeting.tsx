"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import {
  Clock,
  Calendar,
  User,
  Mail,
  MessageSquare,
  Check,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookMeeting = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Rest of the time slots and variants code remains the same...
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedDate = date?.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const messageWithDateTime = `Meeting requested for ${formattedDate} at ${selectedTime}.\n\nAdditional message: ${formData.message}`;

    try {
      const response = await fetch("https://formspree.io/f/xgvvreon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: messageWithDateTime,
          date: formattedDate,
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setDate(null);
          setSelectedTime("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of the helper functions remain the same...
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.3 },
    },
  };

  return (
    <section className="py-10 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header section remains the same... */}
        <div className="text-center mb-12">
          <motion.h2
            className="pb-5 text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book a Meeting
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Choose your preferred time slot and let us connect
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Date and Time Selection section remains the same... */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            variants={formVariants}
          >
            {/* Date and Time Selection content remains the same... */}
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="text-blue-500" size={24} />
              Select Date & Time
            </h3>

            <div className="mb-8 relative">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
                filterDate={isWeekday}
                placeholderText="Select a date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <AnimatePresence>
              {date && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Clock className="text-blue-500" size={20} />
                    Available Time Slots
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg transition-all ${
                          selectedTime === time
                            ? "bg-blue-500 text-white shadow-lg scale-105"
                            : "bg-gray-50 hover:bg-gray-100 hover:scale-102"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            variants={formVariants}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <User className="text-blue-500" size={24} />
              Your Information
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field remains the same... */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              {/* New Phone field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="phone-input-container">
                    <PhoneInput
                                          country={"pk"}
                                          
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass="w-full p-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      containerClass="phone-input"
                      buttonClass="phone-button"
                    />
                  </div>
              
                </div>
              </div>

              {/* Email field remains the same... */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              {/* Message field remains the same... */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none transition-all duration-200"
                    placeholder="Add any additional details..."
                  />
                  <MessageSquare
                    className="absolute left-3 top-4 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={
                  !date ||
                  !selectedTime ||
                  !formData.name ||
                  !formData.email ||
                  !formData.phone ||
                  isSubmitting
                }
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg 
                          hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 
                          disabled:cursor-not-allowed disabled:hover:from-blue-500 disabled:hover:to-blue-600
                          flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : submitted ? (
                  <Check size={20} />
                ) : (
                  "Schedule Meeting"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Selected Date/Time Summary remains the same... */}
        <AnimatePresence>
          {date && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 bg-white p-4 rounded-xl shadow-md border border-gray-100 max-w-md mx-auto"
            >
              <p className="text-center text-gray-700">
                Selected Date & Time:{" "}
                <span className="font-semibold">
                  {date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at {selectedTime}
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Add custom styles for phone input */}
      <style jsx global>{`
        .phone-input {
          font-family: inherit;
        }
        .phone-input .special-label {
          display: none;
        }
        .phone-input .selected-flag {
          background-color: transparent !important;
        }
        .phone-input .selected-flag:hover,
        .phone-input .selected-flag:focus {
          background-color: transparent !important;
        }
        .phone-input .flag-dropdown {
          border: none !important;
          background-color: transparent !important;
        }
        .phone-input .form-control {
          width: 100% !important;
          height: auto !important;
          padding-left: 48px !important;
        }
        .phone-input .country-list {
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  );
};

export default BookMeeting;
