import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(setIsSubmitting, setStatus)
  }

  // const encode = (data: Record<string, string>) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&')
  // }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   setStatus('idle')

  //   try {
  //     await fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: new URLSearchParams(formData).toString(),
  //     })

  //     setStatus('success')
  //     setFormData({ name: '', email: '', message: '' })
  //   } catch {
  //     setStatus('error')
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <main className="min-h-screen bg-background px-4 py-20">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Kapcsolat
        </h1>
      </header>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.01,
            boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
          }}
          className="grid md:grid-cols-2 bg-card rounded-xl shadow overflow-hidden"
        >
          {/* LEFT SIDE — IMAGE */}
          <img
            src="/spaPlant.jpg"
            alt="Heaven – The Cosmetics"
            className="object-fill block w-full h-full"
          />

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-10 space-y-8 flex flex-col justify-evenly">
            {/* CONTACT INFO */}
            <div className="space-y-5 text-muted-foreground">
              <h3 className="text-2xl font-semibold text-primary">
                Elérhetőségek
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Cím</p>
                  <p>7634 Pécs, Ürögi fasor 2/B.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href="tel:+36203477262"
                    className="hover:text-primary transition"
                  >
                    +36 20 347 7262
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <a
                    href="mailto:pecs@hellohc.hu"
                    className="hover:text-primary transition"
                  >
                    pecs@hellohc.hu
                  </a>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t pt-6">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Üzenet küldése
              </h3>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                // onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Teljes név"
                    className="pl-10"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@pelda.hu"
                    className="pl-10"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Írd meg üzeneted..."
                    className="pl-10 pt-3"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-green-600">Köszönjük üzeneted!</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Hiba történt. Próbáld újra.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* MAP BELOW CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl shadow overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps?q=7634+Pécs,+Ürögi+fasor+2/B&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Heaven – The Cosmetics Pécs"
          />
        </motion.div>
      </div>
    </main>
  )
}
