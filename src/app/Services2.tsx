import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom' // ⬅️ Router Link

const servicesData = [
  {
    id: 1,
    title: 'Wellness kezelések – Hegkezelések',
    image: '/wellness.jpg',
    imageAlt: 'Hegkezelések',
    description:
      'A hegek nem csak esztétikai kérdések. A manuális hegkezelés célja a letapadások oldása és a szövetek szabadabb működésének elősegítése.',
    details: [
      { name: 'Kis kiterjedésű hegkezelés', duration: '20 perc' },
      { name: 'Közepes kiterjedésű hegkezelés', duration: '30 perc' },
      { name: 'Komplex hegkezelés – 1-es típus', duration: '45 perc' },
      { name: 'Komplex hegkezelés – 2-es típus', duration: '60 perc' },
    ],
    note: '⚠️ Pattanások okozta hegek kezelésére nem alkalmazható.',
    reverse: false,
  },
  {
    id: 2,
    title: 'Arckezelések',
    image: '/plant1.jpg',
    imageAlt: 'Arckezelések',
    description:
      'Eberlin Biocosmetics professzionális arckezelések a bőr egyensúlyáért, tisztaságáért és megújulásáért.',
    details: [
      { name: '„Kék kezelés” – bőrkép helyreállító', duration: '120 perc' },
      { name: 'Xebor arctisztító kezelés', duration: '120 perc' },
      { name: 'Kímélő arctisztító kezelés', duration: '120 perc' },
      { name: 'Firmezza Anti-Aging kezelés', duration: '60 perc' },
    ],
    note: '',
    reverse: true,
  },
  {
    id: 3,
    title: 'Dekor kezelések – Szemöldök styling',
    image: '/petal.jpg',
    imageAlt: 'Szemöldök styling',
    description:
      'Természetes, harmonikus szemöldökformázás az arc karakteréhez igazítva.',
    details: [
      { name: 'Teljes szemöldök styling – 1. alkalom', duration: '90 perc' },
      {
        name: 'Teljes szemöldök styling – következő alkalom',
        duration: '60 perc',
      },
      { name: 'Szemöldök laminálás', duration: '45 perc' },
      { name: 'Szemöldökszedés és festés', duration: '30 perc' },
    ],
    note: '',
    reverse: false,
  },
  {
    id: 4,
    title: 'Dekor kezelések – Szemöldök & Szempilla festés',
    image: '/plant2.jpg',
    imageAlt: 'Szempilla festés',
    description:
      'Finom, mégis látványos kezelések a természetesen ápolt megjelenésért.',
    details: [
      { name: 'Szemöldökszedés + festés', duration: '30 perc' },
      { name: 'Szemöldökszedés + szempillafestés', duration: '45 perc' },
      {
        name: 'Szemöldökszedés + festés + szempillafestés',
        duration: '60 perc',
      },
      { name: 'Szempillafestés', duration: '45 perc' },
    ],
    note: '',
    reverse: true,
  },
  {
    id: 5,
    title: 'WAX kezelések',
    image: '/wellness.jpg',
    imageAlt: 'Wax kezelések',
    description:
      'Pierrewax termékekkel végzett, bőrbarát, luxus érzetű szőrtelenítés.',
    details: [
      { name: 'Lábszár gyantázás', duration: '30–40 perc' },
      { name: 'Comb gyantázás', duration: '30 perc' },
      { name: 'Teljes láb gyantázás', duration: '60 perc' },
      { name: 'Hónalj gyantázás', duration: '15–20 perc' },
      { name: 'Kar gyantázás', duration: '30–40 perc' },
      { name: 'Bajusz gyantázás', duration: '10 perc' },
      { name: 'Áll gyantázás', duration: '10–15 perc' },
      { name: 'Teljes arc gyantázás', duration: '30 perc' },
      { name: 'Bikini wax', duration: '20–30 perc' },
      { name: 'Brazil wax', duration: '30–40 perc' },
      {
        name: 'Brazil wax + fenék belső ív',
        duration: '45–50 perc',
      },
    ],
    note: '',
    reverse: false,
  },
]

export const ServicesPage2 = () => {
  return (
    <main className="min-h-screen bg-background px-4 py-20">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Szolgáltatásaink
        </h1>
        <p className="text-muted-foreground text-lg">
          Személyre szabott kezelések nyugodt, biztonságos környezetben – ahol
          minden rólad szól.
        </p>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-24">
        {servicesData.map((service) => (
          <section
            key={service.id}
            className={`grid md:grid-cols-2 gap-12 items-start ${
              service.reverse ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text Card */}
            <Card
              className={`bg-card border border-border p-8 shadow-sm ${
                service.reverse ? 'md:col-start-2' : ''
              }`}
            >
              <CardHeader className="px-0 pt-0">
                <h2 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="px-0">
                <div className="space-y-4 text-muted-foreground">
                  {service.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-1 border-b border-border pb-3"
                    >
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  ))}
                </div>

                {service.note && (
                  <p className="text-sm italic text-muted-foreground mt-5">
                    {service.note}
                  </p>
                )}

                <Link to="/contact">
                  <Button className="mt-8">Időpontot foglalok</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Image */}
            <div
              className={`w-full h-full ${
                service.reverse ? 'md:col-start-1' : ''
              }`}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full max-h-[420px] object-cover rounded-xl"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default ServicesPage2
