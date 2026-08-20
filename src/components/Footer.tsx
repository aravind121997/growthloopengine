import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/growthloop-logo.jpeg.asset.json";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  description?: string;
}

const defaultSections: FooterSection[] = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Why AI-First", href: "/#compare" },
      { label: "ROI Calculator", href: "/#calculator" },
    ],
  },
  {
    heading: "Company",
    links: [{ label: "For Agencies", href: "/#agency" }],
  },
];

export function Footer({
  sections = defaultSections,
  description = "An AI-first revenue engine that transforms leads into customer journeys — automatically.",
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logoAsset.url}
                alt="GrowthLoop logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{description}</p>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <FooterColumn key={section.heading} section={section} />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2024 GrowthLoop AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ section }: { section: FooterSection }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold tracking-wide text-foreground">
        {section.heading}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
