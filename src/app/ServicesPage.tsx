import { useState } from 'react'
import { servicesData, waxServices } from '../data/data'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const ServicesPage = () => {
  const [selectedGender, setSelectedGender] = useState<'female' | 'male'>(
    'female'
  )

  const filteredWaxServices = waxServices.details.filter((service) =>
    Array.isArray(service.gender)
      ? service.gender.includes(selectedGender)
      : service.gender === selectedGender
  )

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

      {/* MAIN SERVICES */}
      <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">
        {/* WAX */}
        <div className="max-w-5xl mx-auto ">
          <motion.div
            key={selectedGender}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 bg-card rounded-xl p-6 shadow cursor-pointer"
          >
            {/* LEFT SIDE  */}
            <div className="self-center space-y-4">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✨ WAX-kezelések
              </h3>

              <p className="text-muted-foreground">
                Professzionális gyantázási kezelések higiénikus, nyugodt
                környezetben.
              </p>

              {/* Gender Toggle */}
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant={selectedGender === 'female' ? 'default' : 'outline'}
                  onClick={() => setSelectedGender('female')}
                >
                  Női
                </Button>

                <Button
                  size="sm"
                  variant={selectedGender === 'male' ? 'default' : 'outline'}
                  onClick={() => setSelectedGender('male')}
                >
                  Férfi
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="max-h-96 overflow-y-scroll  rounded-md ">
              {/* Header Row */}
              <ul className="flex justify-between font-semibold px-4 py-2 bg-muted sticky top-0 z-10">
                <li className="flex justify-between w-full">
                  <span className="w-2/6">Megnevezés</span>
                  <span className="w-1/6 text-center">Idő</span>
                  <span className="w-2/6 text-center">Első alkalommal</span>
                  <span className="w-1/6 text-right">Ár</span>
                </li>
              </ul>

              {/* Data Rows */}
              <ul className="divide-y divide-muted-foreground px-4">
                {filteredWaxServices.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-2/6">{service.name}</span>
                    <span className="w-1/6 text-center">
                      {service.duration.regular}p
                    </span>
                    <span className="w-2/6 text-center">
                      {service.duration.new}p
                    </span>
                    <span className="w-1/6 text-right">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* WELLNESS */}
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid md:grid-cols-2 gap-8 bg-card rounded-xl p-6 shadow cursor-pointer"
          >
            {/* LEFT SIDE  */}
            <div className="self-center">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                🌿 {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              {service.note && (
                <p className="text-sm italic text-destructive mt-2">
                  {service.note}
                </p>
              )}
            </div>

            <div className="max-h-96 overflow-y-scroll  rounded-md">
              {/* Header Row */}
              <ul className="flex justify-between font-semibold px-4 py-2 bg-muted sticky top-0 z-10">
                <li className="flex justify-between w-full">
                  <span className="sm:w-4/6 w-3/6">Megnevezés</span>
                  <span className="w-1/6 text-center">Idő</span>
                  <span className="w-1/6 text-right">Ár</span>
                </li>
              </ul>

              {/* Data Rows */}
              <ul className="divide-y divide-muted-foreground px-4">
                {service.details.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="sm:w-4/6 w-3/6">{service.name}</span>
                    <span className="w-1/6 text-center">
                      {service.duration}p
                    </span>

                    <span className="w-1/6 text-right">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default ServicesPage
