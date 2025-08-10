import { Livvic } from "next/font/google";
import { Inter } from "next/font/google";
const livvic = Livvic({
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
      <div className="flex flex-col items-center h-[442px] pt-[160px] pr-[354px] pl-[354px]">
        <div className={livvic.className}>
          <div className="h-[45px] text-3xl">Intern with FUSION!</div>
        </div>
        <div className={inter.className}>
          <div className="h-[160px] text-xl text-intern mt-4 text-center">
            Our 10-week internship program enables interns to shadow three board positions of their 
            choice. The first six weeks involve rotating through these roles, followed by a focus on one 
            preferred position during the final four weeks, culminating in an intern-led general meeting in 
            the last week. Interns are expected to attend both general meetings and board meetings 
            throughout the program.
          </div>
        </div>
      </div>
    </div>
  );
}
