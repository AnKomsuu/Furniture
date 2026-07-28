import { WORKSHOP_NAME } from "@/data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-wood-dark text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} {WORKSHOP_NAME}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
