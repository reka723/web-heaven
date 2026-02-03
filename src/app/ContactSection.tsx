import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mb-20 max-w-full mx-12">
      <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
      <p className="text-muted-foreground mb-2">
        We'd love to hear from you! Whether you have a project in mind, a
        question, or just want to connect — feel free to reach out.
      </p>
      <p className="text-muted-foreground">
        Email us at{' '}
        <a href="mailto:hello@mycompany.com" className="text-primary underline">
          hello@mycompany.com
        </a>
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="pl-10"
              aria-label="Full Name"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="pl-10"
              aria-label="Email Address"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-muted-foreground w-5 h-5" />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="pl-10 pt-3"
              aria-label="Your Message"
            />
          </div>

          {/* Submit Button + Status */}
          <div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {status === 'success' && (
              <p className="mt-2 text-sm text-green-600">
                Thank you for your message!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-sm text-red-600">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>

        {/* Google Map */}
        <div className="relative overflow-hidden w-full h-96 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.011741312318!2d-122.419415684681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a2c5b3b7f%3A0x5e3c6d3b4d8d4e6a!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1633021077756!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Company Location"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              Our Location
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
