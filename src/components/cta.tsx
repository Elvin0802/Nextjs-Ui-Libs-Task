import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-linear-to-r from-indigo-600 to-indigo-700 rounded-3xl overflow-hidden p-12 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Get Ahead with AI-Powered, Actionable Note Taking
              </h2>
              <p className="text-lg text-indigo-100 text-balance">
                Turn your ideas into organized, actionable insights—no manual
                work required. Capture your thoughts and let TalkNotes transform
                them into the formats you need to stay productive and on top of
                your work.
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors inline-block">
                → Get TalkNotes +
              </button>
            </div>

            {/* Right - Icons Grid */}
            <div className="">
              <Image
                className="dark:invert"
                src="/last-bg-icon.svg"
                alt="Foundr logo"
                width={720}
                height={405}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
