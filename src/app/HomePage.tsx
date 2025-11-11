import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-scroll'

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section with background image */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/petal.jpg')" }}
      >
        <div className="bg-white/70 p-8 rounded-md">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to Lumé Wellness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Where beauty meets tranquility. Discover skincare, body, and
            wellness treatments designed to help you look radiant and feel
            renewed.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="services"
              smooth={true}
              duration={600}
              className="cursor-pointer bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
            >
              Our Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="cursor-pointer border border-primary text-primary px-6 py-3 rounded-md hover:bg-muted transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section with image filler */}
      <section
        id="services"
        className="min-h-screen flex flex-col justify-center px-4 py-20 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-6xl mx-auto space-y-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Services
          </h2>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/petal.jpg"
              alt="Signature Facials"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Signature Facials
              </h3>
              <p className="text-muted-foreground">
                Customized facial experiences using organic products that
                refresh, hydrate, and give your skin a radiant glow.
              </p>
              <button className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="/plant2.jpg"
              alt="Body Therapy"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Body Therapy
              </h3>
              <p className="text-muted-foreground">
                Relaxing massages and full-body rejuvenation treatments designed
                to release tension, restore balance, and promote total wellness.
              </p>
              <button className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/wellness.jpg"
              alt="Aesthetic Enhancements"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Aesthetic Enhancements
              </h3>
              <p className="text-muted-foreground">
                Non-invasive treatments to enhance natural beauty, restore
                confidence, and rejuvenate your appearance with subtle elegance.
              </p>
              <button className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with second plant image */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/plant2.jpg')" }}
      >
        {/* Semi-transparent overlay for text */}
        <div className="bg-white/80 p-10 rounded-lg max-w-3xl w-full mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            At <span className="font-semibold">Lumé Wellness</span>, we believe
            beauty begins with self-care. Our holistic approach combines expert
            techniques, natural ingredients, and mindful rituals to rejuvenate
            your body, calm your mind, and renew your spirit.
          </p>

          {/* Team Images */}
          <div className="flex flex-wrap justify-center gap-12 pt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src="/worker1.jpg"
                  alt={`Worker ${i}`}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-lg font-semibold text-primary mt-3">
                  Emma Thompson
                </h3>
                <p className="text-muted-foreground text-sm">
                  Senior Wellness Specialist
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with wellness image */}
      <section
        id="testimonials"
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-20 text-center"
        style={{ backgroundImage: "url('/wellness.jpg')" }}
      >
        <div className="bg-white/80 p-10 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sophia R.',
                text: 'Absolutely loved my experience! The facial left my skin glowing for days. Highly recommend Lumé!',
              },
              {
                name: 'Ava M.',
                text: 'The massage was heavenly — pure relaxation from start to finish. The atmosphere is just perfect.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 shadow-sm"
              >
                <p className="text-muted-foreground italic mb-4">“{t.text}”</p>
                <h4 className="font-semibold text-primary">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col md:flex-row items-center bg-pink-50 px-8 py-20 text-center justify-evenly"
      >
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Book Your Session
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Ready to experience relaxation and renewal? Reach out to schedule
            your appointment or learn more about our offerings.
          </p>
          <form className="max-w-md w-full text-left gap-4 flex flex-col pb-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message"></Textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className=" w-full md:w-1/2 h-96 rounded-lg overflow-hidden border border-border shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177127.95045618672!2d18.10850803677202!3d46.07853347942308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b19bac52b2f7%3A0x3d820ed4a8561c6a!2sHeaven%20-%20The%20Cosmetics!5e0!3m2!1sen!2shu!4v1762856476341!5m2!1sen!2shu"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Lumé Wellness — All rights reserved.
      </footer>
    </main>
  )
}
