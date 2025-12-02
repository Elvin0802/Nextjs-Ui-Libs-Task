import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Monthly",
    subtitle: "Try 7 days free then $19.97/month",
    price: "$19.97",
    period: "/month",
    badge: false,
    features: [
      "iOS and Android app",
      "Unlimited notes",
      "2h recording",
      "Upload files",
      "Custom styles",
      "Export to text, mail, URL etc",
      "Store and organize your notes",
    ],
  },
  {
    name: "Yearly",
    subtitle: "Try 7 days free then $16/month",
    price: "$197",
    period: "/year",
    badge: true,
    features: [
      "iOS and Android app",
      "Unlimited notes",
      "2h recording",
      "Upload files",
      "Custom styles",
      "Export to text, mail, URL etc",
      "Store and organize your notes",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center mb-12">
          <p className="text-sm font-semibold text-slate-500">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Start Your 7 Day Free Trial</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    BEST VALUE
                  </span>
                </div>
              )}
              <Card
                className={`p-8 rounded-xl ${plan.badge ? "border-2 border-indigo-600" : "border border-slate-200"}`}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.subtitle}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600 ml-2">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-6 text-base rounded-lg font-semibold">
                  → Try 7 Days Free
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
