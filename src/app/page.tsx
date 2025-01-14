import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import BookMeeting from "@/components/Bookmeeting";
import ScrollContext from "@/context/ScrollContext";
import CardGrid from "@/components/CardGrid";
import AnimatedTestimonialsDemo from "@/components/Testimonials";

const Page = () => {
  return (
    <div>
      <ScrollContext>
        <ContactButton />
        <Hero />
        <Services />
        <CardGrid />
        <BookMeeting />
        <AnimatedTestimonialsDemo />
      </ScrollContext>
    </div>
  );
};

export default Page;
