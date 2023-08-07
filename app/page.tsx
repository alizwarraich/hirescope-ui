import Header from "./components/Main/Header"
import Hero from "../public/images/Hero.png"
import Image from "next/image"

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 px-32 gap-44 py-20">
        <div className="flex justify-center flex-col gap-4">
            <div className="font-bold text-6xl text-gray-800">Website Heading Goes Here</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sunt eius odio eos unde fugit, autem nam nihil dolorem temporibus.</div>
            <div className="flex gap-3">
                <button className="bg-blue-600 hover:opacity-90 px-4 py-2 rounded-[0.25rem] text-white">Join us now</button>
                <button className="text-blue-600">Learn more</button>
            </div>
        </div>
        <div>
            <Image src={Hero} alt="hero" className="w-[32rem] h-[28rem]" />
        </div>
      </div>
    </>
  )
}

export default HomePage
