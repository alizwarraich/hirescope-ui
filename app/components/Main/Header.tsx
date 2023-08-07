import Image from "next/image"
import Logo from "../../../public/images/Logo.png"
import Link from "next/link"

const Header = () => {
  return (
    <div className="grid grid-cols-3 px-8 py-4">
      <Link href="/">
        <Image priority={true} src={Logo} alt="logo" className="w-24 h-8" />
      </Link>
      <div className="flex text-gray-600 gap-8 justify-center">
        <div>Features</div>
        <div>Pricing</div>
        <div>About us</div>
        <div>Blog</div>
      </div>
      <div className="flex gap-4 justify-end">
        <Link href="/login" className="flex items-center">
            <p className="text-blue-600">Sign in</p>
        </Link>
        <Link href="/register">
            <p className="bg-blue-600 hover:opacity-90 px-4 py-[0.375rem] rounded-[0.25rem] text-white">Sign up</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
