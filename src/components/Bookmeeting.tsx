"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Check, Loader2, AlertTriangle } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";

// Form validation schema
const BookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  message: z.string().optional(),
});

type BookingData = z.infer<typeof BookingSchema>;

const BookMeeting: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const validateForm = () => {
    try {
      BookingSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = error.flatten().fieldErrors;
        setErrors(formErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!date || !selectedTime) {
      setSubmitError("Please select a date and time.");
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvvreon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: date.toLocaleDateString(),
          time: selectedTime,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      setSubmitError("Failed to schedule meeting. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setDate(null);
    setSelectedTime("");
    setErrors({});
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
              Schedule a Meeting
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Choose your preferred date and time
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Date and Time Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="text-blue-500" />
                  Select Date & Time
                </h3>

                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  minDate={new Date()}
                  filterDate={isWeekday}
                  placeholderText="Select a date"
                  className="w-full p-3 border rounded-lg"
                />

                <AnimatePresence>
                  {date && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h4 className="mt-4 mb-2 font-medium">
                        Available Time Slots
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded ${
                              selectedTime === time
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                            whileTap={{ scale: 0.95 }}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">Phone</label>
                  <PhoneInput
                    country="pk"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputProps={{ name: "phone" }}
                    containerClass="w-full"
                    inputClass="w-full p-3 border rounded-lg"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg h-24"
                    placeholder="Additional details"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 p-3 rounded flex items-center gap-2">
                    <AlertTriangle className="text-red-500" />
                    <p className="text-red-700">{submitError}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full p-3 rounded-lg text-white font-semibold transition ${
                    isSubmitting || submitted
                      ? "bg-gray-400"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <Loader2 className="mx-auto animate-spin" />
                  ) : submitted ? (
                    <div className="flex items-center justify-center gap-2">
                      <Check /> Meeting Scheduled
                    </div>
                  ) : (
                    "Schedule Meeting"
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookMeeting;
