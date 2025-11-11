import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-scroll'

const servicesData = [
  {
    id: 1,
    title: 'Wellness kezelések (Hegkezelések)',
    image: '/wellness.jpg',
    imageAlt: 'Wellness kezelések',
    details: [
      {
        name: 'Kis kiterjedésű hegkezelés',
        duration: '20 perc',
        price: '4.300 Ft',
      },
      {
        name: 'Közepes kiterjedésű hegkezelés',
        duration: '30 perc',
        price: '5.300 Ft',
      },
      {
        name: 'Komplex hegkezelés (1-es típusú)',
        duration: '45 perc',
        price: '6.700 Ft',
      },
      {
        name: 'Komplex hegkezelés (2-es típusú)',
        duration: '60 perc',
        price: '8.300 Ft',
      },
    ],
    note: 'Csak műtéti, égési vagy nagyobb hegeken alkalmazható, pattanásos hegek esetén nem.',
    reverse: false,
  },
  {
    id: 2,
    title: 'Arckezelések (Eberlin termékcsalád)',
    image: '/plant1.jpg',
    imageAlt: 'Arckezelések',
    details: [
      {
        name: '„Kék kezelés” (Bőrkép helyreállító)',
        duration: '60 perc',
        price: '10.600 Ft',
      },
      {
        name: 'Xebor (Arctisztító)',
        duration: '120 perc',
        price: '16.700–18.500 Ft',
      },
      { name: 'Firmezza Anti-Aging', duration: '60 perc', price: '16.500 Ft' },
    ],
    note: '„Kék kezelés”: Frissít, hidratál, tisztít. Xebor: Pattanás, mitesszer eltávolítás mechanikusan. Firmezza: Érett, tápanyaghiányos bőrre ajánlott.',
    reverse: true,
  },
  {
    id: 3,
    title: 'Dekor kezelések – Szemöldök styling',
    image: '/petal.jpg',
    imageAlt: 'Szemöldök styling',
    details: [
      {
        name: 'Teljes szemöldök styling (1. alkalom)',
        duration: '90 perc',
        price: '10.900 Ft',
      },
      { name: 'Következő alkalom', duration: '60 perc', price: '9.700 Ft' },
      { name: 'Laminálás', duration: '45 perc', price: '7.800 Ft' },
      {
        name: 'Szemöldökszedés + festés',
        duration: '30 perc',
        price: '5.200 Ft',
      },
    ],
    note: '*A kedvezményes ár rendszeresen (3–6 hetente) visszatérő vendégeinkre vonatkozik.',
    reverse: false,
  },
  {
    id: 4,
    title: 'Dekor kezelések – Szemöldök és Szempilla festés',
    image: '/plant2.jpg',
    imageAlt: 'Szempilla festés',
    details: [
      {
        name: 'Szemöldökszedés + festés',
        duration: '30 perc',
        price: '5.200 Ft',
      },
      {
        name: 'Szemöldökszedés + Szempilla festés',
        duration: '45 perc',
        price: '6.200 Ft',
      },
      {
        name: 'Szemöldökszedés + festés + Szempillafestés',
        duration: '60 perc',
        price: '8.000 Ft',
      },
      { name: 'Szempillafestés', duration: '45 perc', price: '4.200 Ft' },
    ],
    note: '',
    reverse: true,
  },
]

export const ServicesPage = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center px-4 py-10 bg-gradient-to-b from-pink-50 to-white dark:from-background dark:bg-background"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Szolgáltatásaink
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              service.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <Card className="md:w-1/2 bg-card dark:bg-card/80 border border-border p-6 shadow-md">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-y-2 text-muted-foreground mb-2">
                  {service.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-center items-start  py-2"
                    >
                      <span className="font-semibold">{item.name}</span>
                      <span>{item.duration}</span>
                      <span className="text-primary font-semibold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {service.note && (
                  <p className="text-sm italic text-muted-foreground mt-2">
                    {service.note}
                  </p>
                )}
                <Link to="contact" smooth={true} duration={600} offset={-40}>
                  <Button className="mt-4 hover:bg-primary/90">
                    Időpont foglalás
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
