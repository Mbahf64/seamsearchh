
import Hero from "@/components/Hero"
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full relative bg-neutral-10 overflow-auto flex flex-col 
    items-center justify-center pt-[38px] lg:px-0  pb-0 box-border 
    leading-[normal] tracking-[normal] text-left text-base text-neutral-100 font-body-sub-heading-16-bold">
      <Hero />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 lg:py-[rem] pr-[20px] pl-5 text-center text-lg text-neutral-80">
        <div className="w-[349px] relative leading-[32px] font-medium inline-block">
          Instant search in multiple stores at once.
        </div>
      </div>


      <div className="bg-data-analysis-color03 flex flex-row items-center justify-center  w-full h-[80px] md:h-[128px] lg:h-[158px] md:mt-[rem] lg:mt-[rem] mt-[5rem] mb-[rem] ">
        <div className=" flex flex-row items-center justify-center gap-[56px]">

          <img
            className="w-[139px] md:w-[166px] relative h-10 md:h-12 overflow-hidden shrink-0"
            alt=""
            src="/jumia.png"
          />
          <img
            className="w-[120px] md:w-[143px] relative h-10 md:h-12 overflow-hidden shrink-0"
            alt=""
            src="/konga.png"
          />
        </div>
      </div>

      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
