import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton"; // Import the new ContactButton component

const Page = () => {
  return (
    <div>
      <ContactButton /> {/* Include the ContactButton component */}
      <Hero />
      <Services />
    </div>
  );
};

export default Page;
