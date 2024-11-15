import Link from "next/link"
export default function Header() {
    return(
        <div className="main-nav">
            <div className="logo">
            <h1>Fareed</h1>
            </div>
            <div className="nav">
                <ul>
                    <li><Link href={"/"} className="active">Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/skills"}>Skills</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
               </ul>
            </div>

        </div>
    )
}