'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO VIDEO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/spaday.mp4"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.h1
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="
        text-white text-3xl md:text-5xl font-light tracking-wide
        text-center md:text-left
        max-w-xl
        md:ml-auto
        md:mr-24
      "
          >
            Megérkezni. <br />
            Fellélegezni. <br />
            Jól lenni a bőrödben.
            <span className="mt-4 text-xl md:text-2xl opacity-90">
              <br /> Törődés minden részletben.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div className="space-y-10 text-center md:text-left order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Kinek szól a <br /> Heaven – The Cosmetics?
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Azoknak, akik nem csak egy kezelést keresnek, hanem egy
                  nyugodt, biztonságos teret, ahol figyelnek rájuk, és nincs
                  sietség. Ha fontos számodra a diszkréció és a személyre
                  szabott figyelem, jó helyen jársz.
                </p>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Az első pillanattól fontos vagy…
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Itt nem siettetünk, nem ítélkezünk – hanem figyelmes,
                  biztonságos gondoskodás történik. Egy kozmetikai tér, ahol a
                  precizitás, a diszkréció és a nyugalom természetes alapérték.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="hidden md:flex justify-center md:justify-start order-1 md:order-2">
              <img
                src="/spa.jpg"
                alt="Natural spa atmosphere"
                className="w-64 md:w-full max-w-md rounded-3xl object-cover shadow-sm md:shadow-md border-secondary border-8"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-light mb-12 tracking-wide text-center">
            Szolgáltatási pillérek
          </h2>

          <div className="grid md:grid-cols-3 gap-10 ">
            {[
              {
                title: '🌿 Kozmetikai kezelések',
                text: 'Személyre szabott arckezelések és speciális bőrmegoldások.',
              },
              {
                title: '✨ Dekor kezelések',
                text: 'Természetes hatású szemöldök- és szempillakezelések.',
              },
              {
                title: '🤍 Wax kezelések',
                text: 'Diszkrét, professzionális wax kezelések minden területen.',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-secondary text-secondary-foreground rounded-3xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-medium text-2xl mb-3">{s.title}</h3>
                <p className="text-m leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl mx-auto px-6 space-y-12"
        >
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Merre tovább?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ha szeretnél többet megtudni a kezelésekről, az első alkalom
              menetéről, vagy időpontot foglalnál, innen indulj tovább.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                href: '/szolgaltatasok',
                title: 'Szolgáltatások',
                description: 'Kezelések, wax, dekor és bőrápolás egy helyen.',
              },
              {
                href: '/GYIK',
                title: 'GYIK',
                description:
                  'Minden, amit érdemes tudnod az első látogatás előtt.',
              },
              {
                href: '/kapcsolat',
                title: 'Kapcsolat',
                description: 'Időpontfoglalás, elérhetőség, térkép.',
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group flex items-center justify-between border-b border-secondary py-6 px-4 transition-all duration-300 ease-out hover:bg-secondary/10 hover:shadow-md rounded-xl"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-light group-hover:text-primary transition-all duration-300 relative">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {link.description}
                  </p>
                </div>

                <span className="text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
