const Testimonials = () => {
  return (
    <section
      className="flex items-center flex-col  mt-[3rem] lg:mt-[4rem]"
    >
      <div className="lg:w-[1221px] relative lg:h-[564px] w-[400px] h-[250px]  md:mt-[4rem] md:mb-[5rem] flex items-center justify-center flex-col">
        <img
          className="rounded-21xl lg:w-[1221px] lg:h-[564px] w-[400px] md:w-[800px]  md:h-[800px] h-[250px] object-cover"
          alt=""
          src="/Rectangle.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0  box-border max-w-full text-center text-29xl text-gray-200 font-text-base-semibold">
        <div className=" flex flex-col items-center justify-start gap-[px] max-w-full">
          <h1 className="text-[32px] self-str justify-centeretch  relative text-inherit tracking-[-0.01em]  font-semibold font-inherit inline-block shrink-0 m">
            <p className="m-0 text-[32px] lg:text-29xl">{`Go Beyond Searching: `}</p>
            <p className="m-0 text-[32px] lg:text-29xl">Discover Every Detail</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full text-lg text-[#626875] font-body-sub-heading-16-bold pb-9">
            <div className="w-[385.259px] flex-1 relative leading-[36px] font-[400] inline-block max-w-full text-[16px] md:w-[738px] md:text-[18px] md:font-[500]">
              With our revolutionary platform, every detail matters. Discover
              and compare products instantly across selected or a multitude of
              marketplaces, all with just a photo.
            </div>
          </div>
        </div>

      </div>


      <div className="rounded-21xl box-border w-[382px] flex flex-col  md:items-center lg:items-center mb-[6rem]  md:justify-center lg:justify-center p-6 gap-[16px] text-5xl text-neutral-80  border-[1.5px] border-solid">
        <div className="flex flex-col items-start justify-start">
          <b className="relative leading-[150%] text-data-analysis-color03 font-text-base-semibold text-[24px] font-[700]">2,000+</b>
          <div className="flex flex-row items-center justify-center gap-[8px] text-base text-neutral-80 font-body-sub-heading-16-bold">
            <div className="relative leading-[150%]">Happy Users</div>
            <img
              className="w-[18px] relative rounded-12xs-5 h-[18px]"
              alt=""
              src="/star.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-xs text-gray-400 font-satoshi">
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover"
            alt=""
            src="/1.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/2.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/3.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/4.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/5.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/6.svg"
          />
          <img
            className="w-[43px] relative rounded-[50%] h-[43px] object-cover ml-[-16px]"
            alt=""
            src="/7.svg"
          />
          <div className="w-[43px] relative h-[43px] ml-[-16px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-[43px] h-[43px]" />
            <b className="absolute top-[13px] left-[12px] leading-[150%] text-black">
              2K+
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
