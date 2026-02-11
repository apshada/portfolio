import Link from "next/link";
import Head from "next/head";
import ExtLink from "./ext-link";
import { useRouter } from "next/router";

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "About", page: "/about" },
  { label: "Resume", link: "/static/Aditya-Hada-Resume.pdf" },
];


const Header = ({ titlePre = "" }) => {
  const { pathname } = useRouter();

  return (
    <header className="text-center  py-8">
      <Head>
				<title>Aditya's Portfolio</title>
				<meta name="description" content="Aditya's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/profile.jpeg" />
			</Head>
      <ul className="list-none p-0">
        {navItems.map(({ label, page, link }) => (
          <li key={label} className="inline-block px-5">
            {page ? (
              <Link
                href={page}
                className={`text-accents-3 font-normal ${
                  pathname === page ? "font-semibold text-blue-500" : ""
                }`}
              >
                {label}
              </Link>
            ) : (
              <ExtLink href={link} className="text-accents-3 font-normal">
                {label}
              </ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
