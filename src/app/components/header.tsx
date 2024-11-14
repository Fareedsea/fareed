import Link from "next/link"
export default function Header() {
    return(
        <div className="main-nav">
            <div className="logo">
            <h1>Fareed</h1>
            </div>
            <div className="nav">
               <Link href={"/"}>Home</Link>
               <Link href={"/about"}>About</Link>
               <Link href={"/skills"}>Skills</Link>
               <Link href={"/projects"}>Projects</Link>
               <Link href={"/contact"}>Contact</Link>
            </div>

        </div>
    )
}