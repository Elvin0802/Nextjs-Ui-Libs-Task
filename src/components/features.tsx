import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "⏱️",
    title: "Save Time",
    description:
      "Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks.",
  },
  {
    icon: "✓",
    title: "Get More Done",
    description:
      "Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency.",
  },
  {
    icon: "🧠",
    title: "Work Smart, Not Hard",
    description:
      "Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking.",
  },
  {
    icon: "🚀",
    title: "Get Ahead Instead of Left Behind",
    description:
      "Stay competitive in an AI-driven world. Using AI isn't optional — it's essential. Keep pace with modern tools to maintain your edge.",
  },
  {
    icon: "📋",
    title: "Stay Organized",
    description:
      "Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it.",
  },
  {
    icon: "✨",
    title: "Never Miss a Thing",
    description:
      "Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them.",
  },
]

export default function Features() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-yellow-100">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600">Why Choose TalkNotes?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Work with AI by Your Side, Every Step of the Way
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
            → Try TalkNotes free for 7 days
          </button>
        </div>
      </div>
    </section>
  )
}
