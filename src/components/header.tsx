import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600">
              <span className="text-lg font-bold text-white">♪</span>
            </div>
            <span className="text-xl font-bold text-slate-900">TalkNotes</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#try" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Try it
            </a>
            <a href="#how" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
              Login
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">→ Get TalkNotes +</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
