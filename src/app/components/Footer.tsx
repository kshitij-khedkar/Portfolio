export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; 2026 Kshitij Khedkar. All rights reserved.</p>
        <p className="italic">Crafting visuals that move.</p>
        <a
          href="mailto:kzhitix@gmail.com"
          className="hover:text-primary transition-colors"
        >
          kzhitix@gmail.com
        </a>
      </div>
    </footer>
  );
}
