import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Pioneer",
      items: [
        "Pioneer in suiai.fun data analysis with proprietary algorithms",
        "Exclusive technical analysis capabilities for small cap SUI gems",
        "Racing toward bonded status to unlock advanced features"
      ]
    },
    {
      title: "Phase 2: Evolution & Innovation",
      items: [
        "Expansion to X platform",
        "Enhanced AI capabilities",
        "Broader market analysis coverage",
        "Integration with premium data sources",
        "Advanced prediction models"
      ]
    },
    {
      title: "Phase 3: $ELARA Utility",
      items: [
        "Launch of exclusive data marketplace powered by $ELARA with deflationary burn mechanism"
      ]
    }
  ]

  return (
    <section id="roadmap" className="py-16 bg-black/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">Development Roadmap</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-accent/10 border-accent/20 backdrop-blur-sm hover:bg-accent/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-accent">
                  {phase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center text-gray-100"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

