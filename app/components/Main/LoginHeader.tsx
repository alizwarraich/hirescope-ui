import Image from "next/image"
import Logo from "../../../public/images/Logo.png"
import Link from "next/link"

const LoginHeader = () => {
  return (
    <div className="px-8 py-4 flex justify-between items-center">
        <Link href="/">
            <Image priority={true} src={Logo} alt="logo" className="w-24 h-8" />
        </Link>
        <p>Doesn't have an account? <Link href="/register" className="text-blue-500 underline">Sign up</Link></p>
    </div>  
  )
}

export default LoginHeader
