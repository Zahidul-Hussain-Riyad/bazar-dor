import Image from "next/image";
import Link from "next/link";
import DateDisplay from "./DateDisplay";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <header className="w-full bg-white">
            {/* Top Header */}
            <div className="border-b border-gray-100">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    {/* Logo and Website Name */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-700">
                            <Image
                                src="/logo-icon.png"
                                alt="বাজার দর"
                                width={26}
                                height={26}
                                className="h-6 w-6 object-contain"
                            />
                        </div>

                        <div>
                            <h1 className="text-base font-bold leading-tight text-[#163b2b]">
                                বাজার দর
                            </h1>
                            <DateDisplay />
                        </div>
                    </Link>

                </div>
            </div>

            {/* Category Navigation */}
            <NavLinks />
        </header >
    );
};

export default Header;
