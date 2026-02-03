import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-scroll'

const servicesData = [
  {
    id: 1,
    title: 'Wellness kezelések – Hegkezelések',
    image: '/wellness.jpg',
    imageAlt: 'Hegkezelések',
    description:
      'A hegek nem csak esztétikai kérdések. A manuális hegkezelés célja a letapadások oldása és a szövetek szabadabb működésének elősegítése.',
    details: [
      { name: 'Kis kiterjedésű hegkezelés', duration: '20 perc', price: '—' },
      {
        name: 'Közepes kiterjedésű hegkezelés',
        duration: '30 perc',
        price: '—',
      },
      {
        name: 'Komplex hegkezelés – 1-es típus',
        duration: '45 perc',
        price: '—',
      },
      {
        name: 'Komplex hegkezelés – 2-es típus',
        duration: '60 perc',
        price: '—',
      },
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
      {
        name: '„Kék kezelés” – bőrkép helyreállító',
        duration: '120 perc',
        price: '—',
      },
      { name: 'Xebor arctisztító kezelés', duration: '120 perc', price: '—' },
      { name: 'Kímélő arctisztító kezelés', duration: '120 perc', price: '—' },
      { name: 'Firmezza Anti-Aging kezelés', duration: '60 perc', price: '—' },
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
      {
        name: 'Teljes szemöldök styling – 1. alkalom',
        duration: '90 perc',
        price: '—',
      },
      {
        name: 'Teljes szemöldök styling – következő alkalom',
        duration: '60 perc',
        price: '—',
      },
      { name: 'Szemöldök laminálás', duration: '45 perc', price: '—' },
      { name: 'Szemöldökszedés és festés', duration: '30 perc', price: '—' },
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
      { name: 'Szemöldökszedés + festés', duration: '30 perc', price: '—' },
      {
        name: 'Szemöldökszedés + szempillafestés',
        duration: '45 perc',
        price: '—',
      },
      {
        name: 'Szemöldökszedés + festés + szempillafestés',
        duration: '60 perc',
        price: '—',
      },
      { name: 'Szempillafestés', duration: '45 perc', price: '—' },
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
      { name: 'Lábszár gyantázás', duration: '30–40 perc', price: '—' },
      { name: 'Comb gyantázás', duration: '30 perc', price: '—' },
      { name: 'Teljes láb gyantázás', duration: '60 perc', price: '—' },
      { name: 'Hónalj gyantázás', duration: '15–20 perc', price: '—' },
      { name: 'Kar gyantázás', duration: '30–40 perc', price: '—' },
      { name: 'Bajusz gyantázás', duration: '10 perc', price: '—' },
      { name: 'Áll gyantázás', duration: '10–15 perc', price: '—' },
      { name: 'Teljes arc gyantázás', duration: '30 perc', price: '—' },
      { name: 'Bikini wax', duration: '20–30 perc', price: '—' },
      { name: 'Brazil wax', duration: '30–40 perc', price: '—' },
      {
        name: 'Brazil wax + fenék belső ív',
        duration: '45–50 perc',
        price: '—',
      },
    ],
    note: '',
    reverse: false,
  },
]

export const ServicesPage = () => {
  return (
    <section
      id="szolgaltatasok"
      className="min-h-screen flex flex-col justify-center px-4 py-10 bg-gradient-to-b from-pink-50 to-white dark:from-background dark:bg-background"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Szolgáltatásaink
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              service.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            />

            <Card className="md:w-1/2 bg-card/90 backdrop-blur border border-border p-6 shadow-md">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  {service.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b pb-2 border-b-accent-foreground"
                    >
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm">{item.duration}</div>
                      {/* <div className="text-primary font-semibold">
                        {item.price}
                      </div> */}
                    </div>
                  ))}
                </div>

                {service.note && (
                  <p className="text-sm italic text-muted-foreground mt-4">
                    {service.note}
                  </p>
                )}

                <Link to="contact" smooth={true} duration={600} offset={-40}>
                  <Button className="mt-6 w-full hover:bg-primary/90">
                    Időpontot foglalok
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
