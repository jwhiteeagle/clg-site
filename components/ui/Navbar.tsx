"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Chief Live Gaming
      </Link>

      <nav className="flex items-center gap-4">
        <Link href="/portfolio" className="text-sm hover:underline">
          Portfolio
        </Link>
        <Link href="/contact" className="text-sm hover:underline">
          Contact
        </Link>

        {/* Example Shadcn button */}
        <Button asChild>
          <Link href="/commission">Commission Work</Link>
        </Button>
      </nav>
    </header>
  );
}
