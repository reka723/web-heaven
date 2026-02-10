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
          Egy hely, ahol a kozmetikai kezelés nem egy futószalagos szolgáltatás,
          hanem figyelmes találkozás önmagaddal.
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
            <h2 className="text-2xl font-semibold text-primary">BEVEZETŐ</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Heaven azért jött létre, hogy legyen egy hely, ahol nem kell
              megfelelni. Ahol a kozmetikai kezelés nem egy futószalagos
              szolgáltatás, hanem egy nyugodt, figyelmes találkozás – önmagaddal
              is.
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
            <h2 className="text-2xl font-semibold text-primary">SZEMLÉLET</h2>
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
              SZAKÉRTELEM & EMBERI JELENLÉT
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Heaven – The Cosmetics-ben dolgozó szakemberek magasan képzett,
              tapasztalt kozmetikusok, akik számára a technikai precizitás
              mellett ugyanilyen fontos az empátia és az emberi jelenlét.
            </p>
          </div>
        </motion.section>

        {/* Első alkalom */}
        <motion.section
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">🌸</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">
              ELSŐ ALKALOM
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sokan érkeznek hozzánk úgy, hogy izgulnak, bizonytalanok, vagy
              korábbi rossz élményük volt. Ez teljesen rendben van. Az első
              alkalom nálunk nem a „teljesítményről” szól, hanem a
              megérkezésről, az igények átbeszéléséről és a bizalom
              kialakításáról. Csak az történik, amihez te is komfortosan tudsz
              kapcsolódni.
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
            <h2 className="text-2xl font-semibold text-primary">MIÉRT MI?</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>gyengéd</li>
              <li>professzionális</li>
              <li>biztonságos</li>
              <li>emberi egyszerre</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              A Heaven – The Cosmetics nem ígér tökéletességet. Viszont
              jelenlétet, figyelmet és tiszteletet igen.
            </p>
          </div>
        </motion.section>
        {/* Zárás */}
        <motion.section
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-4 bg-card p-8 rounded-xl shadow-lg"
        >
          <span className="text-4xl">💌</span>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">ZÁRÁS</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ha fontos számodra, hogy egy olyan helyre érkezz, ahol valóban
              számítasz – szeretettel várunk a Heaven – The Cosmetics-ben.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
