import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import { HeroSection } from './HeroPage'

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      {/* ---------------- HOME ---------------- */}
      <HeroSection />

      {/* ---------------- RÓLUNK ---------------- */}
      <AboutPage />

      {/* ---------------- SZOLGÁLTATÁSOK ---------------- */}

      <ServicesPage />

      {/* ---------------- GALÉRIA ---------------- */}
      <section
        id="gallery"
        className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-20 text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-10">Galéria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          {['petal.jpg', 'plant1.jpg', 'plant2.jpg', 'wellness.jpg'].map(
            (img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt={`Gallery ${i}`}
                className="rounded-lg shadow-md object-cover h-64 w-full"
              />
            )
          )}
        </div>
      </section>

      {/* ---------------- KAPCSOLAT / IDŐPONTFOGLALÁS ---------------- */}
      <section
        id="contact"
        className="min-h-screen flex flex-col md:flex-row items-start md:items-center px-6 md:px-8 py-20 text-center md:text-left justify-center md:justify-evenly gap-12"
      >
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Időpontfoglalás & Kapcsolat
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Foglalj időpontot online, vagy vedd fel velünk a kapcsolatot
            telefonon vagy e-mailben.
            <br />
            <strong>Telefon:</strong> +36 30 123 4567
            <br />
            <strong>E-mail:</strong> info@lumewellness.hu
          </p>
          <form className="max-w-md w-full text-left gap-4 flex flex-col pb-4">
            <Input type="text" placeholder="Neved" />
            <Input type="email" placeholder="E-mail címed" />
            <Textarea placeholder="Üzeneted"></Textarea>
            <Button type="submit">Küldés</Button>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-96 rounded-lg overflow-hidden border border-border shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177127.95045618672!2d18.10850803677202!3d46.07853347942308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b19bac52b2f7%3A0x3d820ed4a8561c6a!2sHeaven%20-%20The%20Cosmetics!5e0!3m2!1sen!2shu!4v1762856476341!5m2!1sen!2shu"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
