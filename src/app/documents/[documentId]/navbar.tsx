import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./document-input";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from "@/components/ui/menubar"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
            <DocumentInput/>
            <div className="flex">
                <Menubar className="">

                </Menubar>
            </div>
        </div>
      </div>
    </nav>
  );
};
