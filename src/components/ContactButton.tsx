"use client";
import Image from "next/image";
import Link from "next/link";
const ContactButton: React.FC = () => {
  return (
    <>
      {/* Fixed Contact Button */}
      <div className="fixed md:bottom-20 bottom-4 right-4 md:right-16 z-50">
        <Link href="https://wa.me/923435306597">
          <button className="bg-green-500 text-white px-3 py-3 rounded-full shadow-lg">
            <Image src="/whatsapp.svg" alt="phone" width={30} height={30} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContactButton;
