import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="https://hada.hashnode.dev/">
                    Blogs
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/19ZqBTuONFU65HJ5hQDyd_-dOrlKEYMOs/view?usp=sharing" className="cta-btn">Resume</a>
           
        </div>
    )
}

export default Navbar;