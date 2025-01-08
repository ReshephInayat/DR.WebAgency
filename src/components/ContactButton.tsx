"use client";
import React, { useState } from "react";
import { PhoneIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm"; // Ensure the path matches your project structure

const ContactButton: React.FC = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const toggleContactForm = () => {
    setContactFormOpen(!isContactFormOpen);
  };

  return (
    <>
      {/* Fixed Contact Button */}
      <div className="fixed md:bottom-20 bottom-4 right-4 md:right-16 z-50">
        <button
          onClick={toggleContactForm}
          className="bg-blue-600 hover:bg-red-600 text-white px-3 py-3 rounded-full shadow-lg"
        >
          <PhoneIcon className="md:size-[30px]" />
        </button>
      </div>

      {/* Contact Form */}
      <ContactForm isOpen={isContactFormOpen} onClose={toggleContactForm} />
    </>
  );
};

export default ContactButton;
