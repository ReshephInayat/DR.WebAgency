import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton"; // Import the new ContactButton component
import BookMeeting from "@/components/Bookmeeting";

const Page = () => {
  return (
    <div>
      <ContactButton /> {/* Include the ContactButton component */}
      <Hero />
      <Services />
      <BookMeeting />
    </div>
  );
};

export default Page;
