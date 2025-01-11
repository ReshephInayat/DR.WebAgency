import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import BookMeeting from "@/components/Bookmeeting";
import ScrollContext from "@/context/ScrollContext";
import CardGrid from "@/components/CardGrid";

const Page = () => {
  return (
    <div>
      <ScrollContext>
        <ContactButton />
        <Hero />
        <Services />
        <CardGrid />
        <BookMeeting />
      </ScrollContext>
    </div>
  );
};

export default Page;
