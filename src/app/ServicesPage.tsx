import { servicesData } from '../data/data'
import { motion } from 'framer-motion'

export const ServicesPage = () => {
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

      {/* Sections */}
      <div className="max-w-5xl mx-auto space-y-12 py-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
            }}
            className="grid md:grid-cols-2 gap-8 bg-card rounded-xl p-6 shadow cursor-pointer"
          >
            {/* Text */}
            <div className="self-center">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              {service.note && (
                <p className="text-sm italic text-destructive mt-2">
                  {service.note}
                </p>
              )}
            </div>

            {/* Details */}
            <div>
              <ul className="divide-y divide-muted-foreground text-muted-foreground">
                {service.details.map((d, i) => (
                  <li key={i} className="flex justify-between py-2">
                    <span>{d.name}</span>
                    <span>{d.duration}</span>
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
