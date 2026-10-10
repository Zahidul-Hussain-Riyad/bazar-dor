import Link from "next/link";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const navs: Category[] = await res.json();

    return (
        <nav className="border-b border-gray-100">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3">
                {navs.map((n) => (
                    <Link
                        key={n.id}
                        href={`/category/${n.slug}`}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-700 transition-colors hover:text-green-700"
                    >
                        <span>{n.icon}</span>
                        <span>{n.nameBn}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLinks;
