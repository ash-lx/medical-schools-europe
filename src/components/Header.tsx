import { Stethoscope } from "lucide-react";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto flex items-center justify-center gap-4 text-white mb-6">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse bg-white/20 rounded-full blur-xl"></div>
            <Stethoscope className="h-12 w-12 relative" />
          </div>
          <h1 className="text-4xl font-bold">MBBS Europe Guide</h1>
        </div>
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Comprehensive Guide to English-Medium Programs in Europe
        </p>
      </div>
    </header>
  );
}