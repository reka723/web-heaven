import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-scroll'

export function HeroSection() {
  return (
    <section
      id="/"
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/petal.jpg')" }}
    >
      <Card className="bg-card/85 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl border border-border">
        <CardContent className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Heaven
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                The Cosmetics
              </h1>
            </h1>

            <p className="text-xl text-muted-foreground">
              Megérkezni. Fellélegezni. Jól lenni a bőrödben.
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg font-medium text-foreground/90">
              Nem csak egy kezelésre érkezel. Egy olyan térbe lépsz be, ahol
              végre lelassíthatsz – és igazán önmagadra figyelhetsz.
            </p>

            <p>
              A Heaven – The Cosmetics-ben a gondoskodás nem rutin, hanem
              figyelem. Precízen, diszkréten, ítélkezésmentesen – minden rólad
              szól.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="bg-muted/40 rounded-xl p-4">
              🕊 Nyugalom és diszkréció
            </div>
            <div className="bg-muted/40 rounded-xl p-4">
              ✨ Személyre szabott figyelem
            </div>
            <div className="bg-muted/40 rounded-xl p-4">
              🤍 Biztonságos, ítélkezésmentes tér
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="services" smooth={true} duration={600} offset={-40}>
              <Button size="lg">Szolgáltatások</Button>
            </Link>

            <Link to="contact" smooth={true} duration={600} offset={-40}>
              <Button size="lg">Időpontot foglalok</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
