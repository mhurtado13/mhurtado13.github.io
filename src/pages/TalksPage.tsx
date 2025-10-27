import Navigation from "@/components/Navigation";
import Talks from "@/components/Talks";

const TalksPage = () => {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <Talks />
      </div>
    </>
  );
};

export default TalksPage;
