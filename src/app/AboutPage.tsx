import { motion } from 'framer-motion'

export default function AboutPage() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }
  return (
    <main className="bg-background text-foreground min-h-screen px-4 md:px-20 py-20">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-2xl md:text-3xl font-light text-primary">
          Ahol a kozmetikai kezelés figyelmes találkozás önmagaddal...
        </h1>
      </header>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Bevezető */}
        <motion.section
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">✨</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">Diszkréció</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Heaven – The Cosmetics-ben az első pillanattól fontos vagy. Itt
              nem siettetünk, nem ítélkezünk, nem „csak egy kezelés” történik –
              hanem figyelmes, biztonságos gondoskodás. A Heaven egy olyan
              kozmetikai tér, ahol a precizitás, a diszkréció és a nyugalom
              természetes alapérték. Legyen szó első alkalomról vagy rendszeres
              kezelésekről, nálunk minden lépés a te komfortodhoz igazodik.
              <br />
              <strong>Időpontot foglalok: +36 20 347 7262</strong>
            </p>
          </div>
        </motion.section>

        {/* Szemlélet */}
        <motion.section
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">💡</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">Szemlélet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hiszünk abban, hogy a valódi szépség a komfortérzetből indul.
              Ezért nálunk minden a biztonságról, a tiszteletről és a személyes
              határok elfogadásáról szól. Nem siettetünk, nem hasonlítunk, nem
              ítélkezünk. Figyelünk. Kérdezünk. Alkalmazkodunk.
            </p>
          </div>
        </motion.section>

        {/* Szakértelem */}
        <motion.section
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">🧑‍⚕️</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">
              Szakértelem & Emberi jelenlét
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Heaven – The Cosmetics-ben dolgozó szakemberek magasan képzett,
              tapasztalt kozmetikusok, akik számára a technikai precizitás
              mellett ugyanilyen fontos az empátia és az emberi jelenlét.
            </p>
          </div>
        </motion.section>

        {/* Miért Heaven */}
        <motion.section
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">✨</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">Miért Mi?</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              A Heaven - The Cosmetics azoknak szól, akik nem csak egy kezelést
              keresnek, hanem egy nyugodt, biztonságos teret, ahol figyelnek
              rájuk, és nincs sietség. Ha fontos számodra a diszkréció, a
              személyre szabott figyelem és az, hogy jó érzéssel érkezz meg és
              távozz, jó helyen jársz.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>gyengéd</li>
              <li>professzionális</li>
              <li>biztonságos</li>
              <li>diszkrét</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
