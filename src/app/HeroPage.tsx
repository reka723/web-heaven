import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-scroll'

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/petal.jpg')" }}
    >
      <Card className="bg-card/80 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-2xl border border-border">
        <CardContent className="space-y-6">
          <h1 className="text-5xl font-bold text-primary">Lumé Wellness</h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Ahol a szépség a nyugalommal találkozik. Fedezd fel kezeléseinket,
            amelyek segítenek a megújulásban – testben és lélekben.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="services" smooth={true} duration={600} offset={-40}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Szolgáltatások
              </Button>
            </Link>

            <Link to="contact" smooth={true} duration={600} offset={-40}>
              <Button
                size="lg"
                className="border-primary text-primary-foreground hover:bg-muted"
              >
                Foglalj időpontot
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
