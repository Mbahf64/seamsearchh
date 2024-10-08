import Link from "next/link";


const Hero = () => {

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[px] 
    box-border max-w-full text-center text-45xl text-gray-300 font-text-base-semibold mq750:pb-[66px] mq750:box-border">
      <div className="w-[983px] flex flex-row items-start justify-start relative max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[px] max-w-full z-[1] ">
          <div className="self-stretch flex flex-col items-center justify-start gap-[px] max-w-full">
            <Link className="no-underline cursor-pointer mt-[3rem] [border:none] text-[14px] px-[12px] py-[6px] bg-basic-app-landing-color 
            rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-lavender-100 -m-5"  href="/search">
              <div className="w-[104px] relative text-sm leading-[150%] font-medium font-body-sub-heading-16-bold text-data-analysis-color03 text-center inline-block min-w-[104px] no-underline">
                Product Search
              </div>
            </Link>


            <div className="self-stretch flex flex-col items-center justify-start relative">
              <div className="m relative">
                <img
                  className="absolute w-[347px] h-[57px] md:w-[530px] md:h-[90px] lg:w-[571px] lg:h-[90px] z-0 top-[6.5rem] right-[1rem] md:top-[11rem] mg:right-[2rem] lg:top-[9rem] lg:right-[2rem]"
                  loading="lazy"
                  alt=""
                  src="/Vector.png"
                />

                <b className="leading-[rem] w-auto z-[1] text-[32px] md:text-[50px] relative">
                  <p className="font-bold lg:text-[64px] md:w-auto">
                    Explore Every Corner of <br className="lg:hidden" /> Retail with Ease,
                    <span className="lg:text-[56px] bg-[] text-neutral-10">
                      <br className="lg:hidden" />With Just an Image
                    </span>
                  </p>
                </b>
              </div>




              <div className="w-[536px] md:w-[536px] relative text-lg leading-[32px] font-medium font-body-sub-heading-16-bold text-neutral-80 inline-block max-w-full m-5">
                With every interaction, we bring you closer to the items you
                love from the brands you trust.
              </div>
            </div>
          </div>


          <div className="w-[420px] flex flex-col md:flex-row flex-wrap items-start justify-start gap-[17px] max-w-full mb-8">
            <div className="cursor-pointer flex-1 flex flex-row items-start justify-start md:min-w-[126px] min-w-full">
              <div className="flex-1 rounded-81xl bg-data-analysis-color03 overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px]">
                <Link className="flex-1 relative leading-[26px] text-neutral-10 no-underline text-base " href="/search">New Search</Link>
              </div>
            </div>
            <Link className="no-underline cursor-pointer flex-1 flex flex-row items-start justify-start md:min-w-[126px] min-w-full" href="/search">
              <div className="flex-1 rounded-81xl bg-[transparent] overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px]  border-[1px] border-solid border-neutral-30">
              <img
                  className="h-6 w-6"
                  alt=""
                  src="/Icon.png"
                />
                
                <b className="text-base leading-[26px] inline-block font-body-sub-heading-16-bold text-data-analysis-color03 text-center">
                  Watch A Demo
                </b>
              </div>
            </Link>
            {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center max-w-full md:min-w-[126px]">
              <Link className="no-underline flex flex-row items-center justify-center py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-neutral-30 rounded-81xl overflow-hidden" href="/search">
                <img
                  className="h-6 w-6"
                  alt=""
                  src="/Icon.png"
                />
                <b className="text-base leading-[26px] inline-block font-body-sub-heading-16-bold text-data-analysis-color03 text-center">
                  Watch A Demo
                </b>
              </Link>
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

