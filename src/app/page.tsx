import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import BookMeeting from "@/components/Bookmeeting";
import ScrollContext from "@/context/ScrollContext";
import CardGrid from "@/components/CardGrid";
// import AnimatedTestimonialsDemo from "@/components/Testimonials";
import { BlockProvider } from "@/context/BlockContext";

const Page = () => {
  return (
    <div>
      <BlockProvider>
        <ScrollContext>
          <ContactButton />
          <Hero />
          <Services />
          <CardGrid />
          <BookMeeting />
          {/* <AnimatedTestimonialsDemo /> */}
        </ScrollContext>
      </BlockProvider>
    </div>
  );
};

export default Page;
