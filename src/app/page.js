import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="w-full max-w-[1440px] mx-auto
                  min-h-[737px] md:min-h-[514px] lg:min-h-[602px]
                  pt-[64px] md:pt-[100px] lg:pt-[160px]
                  pr-[20px] md:pr-[32px] lg:pr-[354px]
                  pb-[64px] md:pb-[100px] lg:pb-[160px]
                  pl-[20px] md:pl-[32px] lg:pl-[354px]
                bg-white flex justify-center"
      >
        <div
          className="flex flex-col
                    w-[335px] md:w-[704px] lg:w-[732px]
                    h-fit
                    gap-[19px]
                    text-center items-center"
        >
          <h2 className="text-black font-livvic font-bold text-xl leading-none tracking-normal">
            Our Story
          </h2>

          <h1 className="text-black font-livvic font-bold text-4xl leading-none tracking-normal">
            A network connecting the Filipinx community and STEM at UC Irvine.
          </h1>

          <p className="text-gray-600 font-inter font-normal text-base leading-8 ">
            Join FUSION, where ambition meets innovation. We&apos;re a vibrant
            community empowering Filipinx students and aspiring professionals in
            Science, Technology, Engineering, and Mathematics (STEM) at UC
            Irvine. Through our five pillars, Support, Professionalism,
            Academics, Culture, and Science-Engineering we foster excellence and
            provide unparalleled opportunities for growth.
          </p>
        </div>
      </div>

      <div>first info box</div>

      <div>second info box</div>

      <div> third info box</div>
    </div>
  );
}
