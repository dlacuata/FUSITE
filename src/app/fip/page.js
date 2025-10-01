import Image from "next/image";

export default function Fip() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="bg-white h-[91vh] w-screen flex flex-col items-center justify-center">
        <h1>The FUSION ICS Project</h1>
      </div>
      <div className="bg-linear-to-b from-[#FFF8F1] to-[#FE9A00] h-[126vh] w-screen flex flex-col items-center justify-center">

      </div>
      <div className="relative bg-linear-to-b from-black via-[#3C3C3C] to-black h-[115vh] w-screen flex flex-col items-center justify-center">
        <Image
          src="/infobg.jpg"
          fill
          style={{objectFit: "cover"}}
          alt="Background image"
          className="opacity-50"
        />

      </div>
      <div className="bg-[#7D7D7D] h-[221vh] w-screen flex flex-col items-center justify-center">
      </div>
      <div className="bg-[#404040] h-[60vh] w-screen flex flex-col items-center justify-center">

      </div>
      <div className="bg-white h-[267vh] w-screen flex flex-col items-center justify-center">

      </div>
      <div className="relative bg-[#FFA52366] h-[140vh] w-screen flex flex-col items-center justify-center">
        <Image
          src="/findings.jpg"
          fill
          style={{objectFit: "cover"}}
          alt="Background image"
          className="opacity-20"
        />
      </div>
      <div className="bg-white h-[140vh] w-screen flex flex-col items-center justify-center">

      </div>
    </main>
  );
}