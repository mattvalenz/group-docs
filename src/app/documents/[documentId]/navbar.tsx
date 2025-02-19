import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
            {/*Document input*/}
            {/* menubar*/}
        </div>
      </div>
    </nav>
  );
};
