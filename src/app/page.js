import { Karla } from "next/font/google";
import { Inter } from "next/font/google";
import CardComponent from "./card";
import Testimonial from "./testimonial";
import Carousel from "./carousel.js"
import Image from "next/image";

const karla = Karla({
  weight: ["700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center 
                      md:justify-center  
                      lg:h-[442px] md:h-[457px] h-[329px]
                      lg:pr-[354px] md:pr-[32px] pr-[16px]
                      lg:pl-[354px] md:pl-[32px] pl-[16px]">
        <div className={karla.className}>
          <div className="md:text-5xl text-xl text-center md:w-[732px]">Intern with FUSION!</div>
        </div>
        <div className="w-25 h-1 bg-amber-500 sm:my-4 my-1"></div>

        <div className={inter.className}>
          <div className="h-[160px] xl:text-xl text-base text-intern text-center md:w-[700px] sm:w-[400px] w-[335px]">
            Our 10-week internship program enables interns to shadow three board positions of their 
            choice. The first six weeks involve rotating through these roles, followed by a focus on one 
            preferred position during the final four weeks, culminating in an intern-led general meeting in 
            the last week. Interns are expected to attend both general meetings and board meetings 
            throughout the program.
          </div>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center 
                      lg:p-[0px] md:p-[32px] p-[16px]
                      lg:pt-[80px]
                      lg:h-[691px] md:h-[575px] h-[513]
                      bg-gradient-to-b from-[#FFA523]/20 via-[#FACA84]/20 to-[#FFA523]/20">
        <Image
          src="/internbackground.png"
          alt="Intern Background"
          fill
          className="object-cover -z-10 opacity-10"
        />
        <div className="absolute inset-0 -z-0"></div>
        <div className={karla.className}>
          <div className="md:text-3xl text-xl">INTERN DUTIES</div>
        </div>
        <div className="w-25 h-1 my-[5px] bg-amber-500"></div>
        <div className="flex items-center 
                      md:flex-row flex-col
                      lg:gap-[34px] md:gap-[30x] gap-[26px]     
                      lg:w-[1010px] md:w-[704px] w-[343px]">
          {/* put somethin in the imageSrc prop for the card components to add an image*/}
          <CardComponent
            imageSrc="/gear.png"
            heading="Support"
            description="Attend all general meetings and
                        board meetings, and generally be
                        an active member in the community."
          />
          <CardComponent
            imageSrc="/gearsun.png"
            heading="Innovate"
            description="Create and host an event based 
                        on your chosen board
                        position during the final
                        three weeks of the program."
          />
          <CardComponent
            imageSrc="/sun.png"
            heading="Organize"
            description="Plan intern week, organizing
                        a general meeting and programs
                        throughout the week with your intern class."
          />

        </div>
      </div>
      <div className="flex flex-col items-center 
                      lg:py-[160px] md:py-[40px] py-[20px]
                      lg:px-[354x] md:px-[32px] px-[16px]
                      lg:h-[1402px] md:h-[932px] h-[512]">
        <div className="flex flex-col items-center
                        lg:w-[1166px] md:w-[704px] w-[343px]
                        lg:h-[1198px] md:h-[771px] h-[466px]
                        lg:gap-[40px] md:gap-[36px] gap-[22px]">
          <div className={karla.className}>
            <div className="h-[45px] md:text-3xl text-xl">Why Intern for FUSION?</div>
          </div>
          <div className="hidden sm:flex flex-col lg:gap-[40px] md:gap-[36px] gap-[22px]">
            <Testimonial
              name="Lorem Ipsum"
              internClass="Internship Class"
              description="“Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris
                            nisi.“"
            />
            <Testimonial
              name="Lorem Ipsum"
              internClass="Internship Class"
              description="“Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris
                            nisi.“"
            direction="row-reverse"
            />
            <Testimonial
              name="Lorem Ipsum"
              internClass="Internship Class"
              description="“Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris
                            nisi.“"
            />
          </div>
          <div className="sm:hidden flex"><Carousel/></div>
        </div>
      </div>
    </div>
  );
}
