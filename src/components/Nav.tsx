import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/growthloop-logo.jpeg.asset.json";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultLinks: NavLink[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why AI-First", href: "/#compare" },
  { label: "ROI Calculator", href: "/#calculator" },
  { label: "For Agencies", href: "/#agency" },
];

export function Nav({
  links = defaultLinks,
  ctaLabel = "Calculate Revenue",
  ctaHref = "/#calculator",
}: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="GrowthLoop home">
          <img
            src={logoAsset.url}
            alt="GrowthLoop logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            to={ctaHref}
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition hover:bg-primary/90"
          >
            {ctaLabel}
          </Link>

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex items-center justify-between mb-6">
                <img
                  src={logoAsset.url}
                  alt="GrowthLoop logo"
                  className="h-8 w-auto object-contain"
                />
                <SheetTrigger asChild>
                  <button className="inline-flex h-8 w-8 items-center justify-center">
                    <X className="h-5 w-5" />
                  </button>
                </SheetTrigger>
              </div>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
