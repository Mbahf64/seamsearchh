

const Footer = () => {
    return (

        <div className="pt-[3rem] md:pt-[6rem] pb-[2rem]">

            <div className="border-t-[2px] border-solid border-[#222328] mt-[0px] mx-[2rem] md:mx-[90px] 2xl:mx-[26rem]" />

            <div className="flex-col-reverse flex md:flex md:flex-row md:justify-between gap-6 mt-[2rem] md:mt-[2rem] mx-[2rem] md:mx-[75px] 2xl:mx-[23rem]">
                <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:justify-between md:gap-[65px] pt-8- md:mr-[rem]">
                    <div className="order-1 lg:order-1 text-base font-body-sub-heading-16-bold md:text-[14px] lg:text-base ">
                        © 2024 Seamsearch. All Rights Reserved.
                    </div>
                    <div className="order-2 md:order-2 flex flex-row items-center justify-between gap-12 md:gap-7 font-body-sub-heading-16-bold text-base md:text-[14px] lg:text-base">
                        <div className="relative">Terms & Conditions</div>
                        <div className="relative">Privacy Policy</div>
                    </div>
                </div>
                <div className="order-3 lg:order-3 flex flex-row items-center md:justify-between -ml-2 md:ml-[rem] gap-4">
                    <img className="w-6 h-6" alt="Facebook" src="/rifacebookfill.png" />
                    <img className="w-6 h-6" alt="Instagram" src="/mdiinstagram.png" />
                    <img className="w-6 h-6" alt="Twitter" src="/mditwitter.png" />
                    <img className="w-6 h-6" alt="LinkedIn" src="/mdilinkedin.png" />
                </div>
            </div>
        </div>

    );
};

export default Footer;

