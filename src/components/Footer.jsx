import Link from "next/link";
import Mainfooter from "./Mainfooter"

const Footer = () => {
  return (

    <div className="footer w-full h-[621px] md:w-full md:h-full lg:h-full  text-center text-white -mt-1">
      <b className="leading-[140%]  md:leading-[115%] inline-block font-text-base-semibold w-[398.4px] md:w-[729px] text-[40px] md:text-[62px] mt-[5rem]">
        <span>{`Visual Shopping with only `}</span>
        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.67deg,_#936ff4,_#5542f6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          3 Clicks!
        </span>
      </b>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]  lg:gap-[31px] mt-[3rem] ">
        <div className="w-[340px] md:w-[194px] flex flex-row items-start justify-start">
          <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_#563feb,_#312485)] overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px] cursor-pointer">

            <b className="flex-1 relative leading-[26px]">Find Product</b>

          </div>
        </div>
        <div className="w-[340px] md:w-[262px] flex flex-row items-center justify-center">
          <div className="flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px] border-[1px] border-solid border-neutral-30 cursor-pointer">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0  "
              alt=""
              src="/Icon (1).png"
            />
            <b className="self-stretch flex-1 relative leading-[26px]">
              See Demo to learn more
            </b>

          </div>
        </div>
      </div>
      <Mainfooter />
    </div>
  );
};

export default Footer;




{/* <div className="absolute top-[1637px] left-[calc(50%_-_214px)] bg-gray-700 w-[428px] h-[621px] overflow-hidden text-base">
  <div className="absolute top-[713px] left-[114.5px] box-border w-[1211px] h-0.5 border-t-[2px] border-solid border-gray-300" />
  <img
    className="absolute top-[223.9px] left-[-106.3px] w-[1174.1px] h-[704.5px]"
    alt=""
    src="/group-1171274789.svg"
  />
  <img
    className="relative w-[1082.9px] h-[847.5px]"
    alt=""
    src="/union1.svg"
  />
  <b className="absolute top-[130px] left-[calc(50%_-_199.2px)] text-[40px] tracking-[-0.01em] leading-[140%] inline-block font-text-base-semibold w-[398.4px]">
    <span>{`Visual Shopping with only `}</span>
    <span className="text-transparent !bg-clip-text [background:linear-gradient(92.67deg,_#936ff4,_#5542f6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
      3 Clicks!
    </span>
  </b>
  <div className="absolute top-[272.5px] left-[calc(50%_-_170px)] flex flex-col items-start justify-start gap-[24px]">
    <div className="w-[340px] flex flex-row items-start justify-start">
      <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_#563feb,_#312485)] overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon.svg"
        />
        <b className="flex-1 relative leading-[26px]">Find Product</b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon1.svg"
        />
      </div>
    </div>
    <div className="w-[340px] flex flex-row items-center justify-center">
      <div className="flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px] border-[1px] border-solid border-neutral-30">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/icon3.svg"
        />
        <b className="self-stretch flex-1 relative leading-[26px]">
          See Demo to learn more
        </b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon1.svg"
        />
      </div>
    </div>
  </div>
  <div className="absolute top-[40px] left-[calc(50%_-_91.5px)] w-[183px] h-[66px]">
    <img
      className="absolute h-[24.24%] top-[37.88%] bottom-[37.88%] left-[50px] max-h-full w-[126px] overflow-hidden"
      alt=""
      src="/frame3.svg"
    />
    <img
      className="absolute h-[63.64%] top-[18.18%] bottom-[18.18%] left-[0px] max-h-full w-[42px] object-cover"
      alt=""
      src="/group-33107@2x.png"
    />
  </div>
  <div className="absolute bottom-[0px] left-[0px] w-[428px] h-[171px] overflow-hidden text-left">
    <div className="absolute top-[24.3px] left-[24px] flex flex-col items-start justify-start gap-[24px]">
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/rifacebookfill.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/mdiinstagram.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/mditwitter.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/mdilinkedin.svg"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[45px]">
        <div className="relative">{`Terms & Conditions`}</div>
        <div className="relative">Privacy Policy</div>
      </div>
      <div className="relative">
        © 2024 Seamsearch. All Rights Reserved.
      </div>
    </div>
    <div className="absolute top-[0px] left-[calc(50%_-_190px)] bg-gray-300 w-[380px] h-[1.5px]" />
  </div>
</div> */}

/* Button.base */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 14px 20px;
// gap: 10px;

// width: 340px;
// height: 54px;

// background: linear-gradient(90deg, #563FEB 0%, #312485 100%);
// border-radius: 100px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;


