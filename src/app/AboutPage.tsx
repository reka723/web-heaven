import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/plant2.jpg')" }}
    >
      <Card className="bg-card/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-5xl w-full space-y-10 border border-border">
        <CardHeader>
          <h2 className="text-4xl font-bold text-primary">Rólunk</h2>
        </CardHeader>

        <CardContent className="space-y-10">
          {/* Introduction */}
          <p className="text-muted-foreground leading-relaxed">
            A{' '}
            <span className="font-semibold text-foreground">Lumé Wellness</span>{' '}
            célja, hogy vendégeink számára a testi-lelki feltöltődés, a
            természetes szépség és a nyugalom egyaránt elérhető legyen.
            Filozófiánk az, hogy a szépség belülről fakad – mi pedig segítünk,
            hogy ez kívül is megmutatkozzon.
          </p>

          <Separator className="bg-border/40" />

          {/* Why Choose Us */}
          <Card className="bg-muted/50 border border-border/30 shadow-sm text-left">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-primary">
                Miért válassz minket?
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Professzionális, minősített szakemberek</li>
                <li>Prémium minőségű, természetes alapanyagok</li>
                <li>Személyre szabott kezelések</li>
                <li>Nyugodt, barátságos környezet</li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="bg-border/40" />

          {/* Certificates & Partners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-muted/40 border border-border/20 shadow-sm">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Minősítéseink
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Szakmai képzéseinket és okleveleinket folyamatosan bővítjük,
                  hogy mindig a legújabb technológiákkal és tudással várhassunk.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40 border border-border/20 shadow-sm">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Partnereink
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eberlin, Klapp, és más prémium kozmetikai márkák – mert a
                  minőség nálunk alap.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="bg-border/40" />

          {/* Team */}
          <div className="flex flex-wrap justify-center gap-12 pt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src="/worker1.jpg"
                  alt={`Team member ${i}`}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-card shadow-md"
                />
                <h3 className="text-lg font-semibold text-primary mt-3">
                  Emma Thompson
                </h3>
                <p className="text-muted-foreground text-sm">
                  Senior Wellness Specialista
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
