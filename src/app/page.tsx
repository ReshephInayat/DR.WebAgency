import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton"; // Import the new ContactButton component
import BookMeeting from "@/components/Bookmeeting";
import ScrollContext from "@/context/ScrollContext";

const Page = () => {
  return (
    <div>
      <ScrollContext>
        <ContactButton /> {/* Include the ContactButton component */}
        <Hero />
        <Services />
        <BookMeeting />
      </ScrollContext>
    </div>
  );
};

export default Page;
