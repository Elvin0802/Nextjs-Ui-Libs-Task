import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Never Take Notes Again,
              <br />
              <span className="text-indigo-600">There's an AI for that.</span>
            </h1>
            <p className="text-lg text-slate-600 text-balance">
              Join thousands of professionals who use AI voice transcription and
              note-taking to save time, impress colleagues and clients with
              organized notes while working smarter, not harder.
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-lg">
              → Try TalkNotes free for 7 days
            </Button>
          </div>

          {/* Right - Interactive Demo Card */}
          <div>
            <Card className="border-2 border-indigo-300 rounded-2xl p-8 bg-white">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Interactive demo
                </h3>
                <div className="text-center space-y-2">
                  <p className="text-sm text-slate-500">Limit: 01:00</p>
                  <p className="text-5xl font-bold text-slate-900">{"00:00"}</p>
                </div>

                {/* Control Buttons */}
                <div className="flex justify-center items-center gap-4">
                  {/* Play Button */}
                  <button className="w-12 h-12 rounded-full bg-indigo-300 hover:bg-indigo-400 flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5 text-white fill-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>

                  {/* Mic Button - Center */}
                  <button className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center transition-colors">
                    <svg
                      className="w-8 h-8 text-white fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm0-10c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1zm7 5v2c0 2.76-2.24 5-5 5s-5-2.24-5-5v-2H5v2c0 3.52 2.64 6.43 6 6.92V21h2v-3.08c3.36-.49 6-3.4 6-6.92v-2h-2z" />
                    </svg>
                  </button>

                  {/* Trash Button */}
                  <button className="w-12 h-12 rounded-full bg-indigo-300 hover:bg-indigo-400 flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5 text-white fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  </button>
                </div>

                <Button className="w-full bg-indigo-400 hover:bg-indigo-500 text-white py-6 rounded-lg">
                  → Continue
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-slate-200">
          <Image
            className="dark:invert"
            src="/medium-logo.svg"
            alt="Medium logo"
            width={200}
            height={50}
            priority
          />
          <Image
            className="dark:invert"
            src="/indie-logo.svg"
            alt="INDIE HACKERS logo"
            width={200}
            height={50}
            priority
          />
          <Image
            className="dark:invert"
            src="/f-logo.svg"
            alt="Foundr logo"
            width={150}
            height={50}
            priority
          />
          <Image
            className="dark:invert"
            src="/sp-logo.svg"
            alt="Scoop logo"
            width={150}
            height={50}
            priority
          />
        </div>
      </div>
    </section>
  );
}
