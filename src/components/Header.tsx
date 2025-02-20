import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", subLinks: [
            { name: "Commercial", href: "/commercial" },
            { name: "Residential", href: "/residential" },
            { name: "Barndominiums", href: "/barndominiums" },
        ] },
    { name: "Contact", href: "/contact" },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-4 text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors">

                    <img
                        src='/images/builtec-icon.png'
                        alt="Builtec Logo"
                        className="w-auto h-16 object-contain"
                    />
                    BUILTEC USA
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {links.map((link) => (
                                <NavigationMenuItem key={link.name}>
                                    {link.subLinks ? (
                                        <>
                                            <NavigationMenuTrigger className="text-slate-900 hover:text-slate-700">
                                                {link.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-48 gap-1 p-2 bg-white border border-gray-200">
                                                    {link.subLinks.map((subLink) => (
                                                        <li key={subLink.name}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={subLink.href}
                                                                    className={cn(
                                                                        "block select-none space-y-1 rounded-md p-3",
                                                                        "text-slate-900 hover:bg-slate-900 hover:text-white",
                                                                        "focus:bg-slate-900 focus:text-white"
                                                                    )}
                                                                >
                                                                    <div className="text-sm font-medium">
                                                                        {subLink.name}
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <a
                                                href={link.href}
                                                className={cn(
                                                    "block select-none rounded-md px-3 py-2 text-sm font-medium",
                                                    "text-slate-900 hover:text-slate-700",
                                                    "focus:bg-slate-50 focus:text-slate-900"
                                                )}
                                            >
                                                {link.name}
                                            </a>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger className="md:hidden">
                        <Menu className="w-6 h-6 text-slate-900" />
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white">
                        <nav className="flex flex-col gap-4">
                            {links.map((link) => (
                                <div key={link.name}>
                                    {link.subLinks ? (
                                        <div className="space-y-2">
                                            <div className="font-medium text-slate-900">{link.name}</div>
                                            <div className="pl-4 flex flex-col gap-2">
                                                {link.subLinks.map((subLink) => (
                                                    <a
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        className="text-sm text-slate-700 hover:text-slate-900"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="font-medium text-slate-900 hover:text-slate-700"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header
