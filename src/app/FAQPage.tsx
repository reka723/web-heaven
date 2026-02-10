import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { generalFAQ, waxFAQ } from '@/data/data'

function AccordionItem({ item }: { item: (typeof generalFAQ)[0] }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="bg-card shadow-md rounded-xl p-6 mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <h3 className="text-lg md:text-xl font-semibold text-primary">
            {item.question}
          </h3>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-muted-foreground leading-relaxed"
        >
          {item.answer}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-background min-h-screen px-4 md:px-20 py-20">
      {/* Page Header */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          GYIK – Heaven – The Cosmetics
        </h1>
        <p className="text-muted-foreground">
          Minden kérdésre válaszunk, hogy nyugodtan érkezhess a kezelésekre.
        </p>
      </header>

      {/* Általános GYIK */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Általános GYIK
        </h2>
        {generalFAQ.map((item, idx) => (
          <AccordionItem key={idx} item={item} />
        ))}
      </section>

      {/* Wax GYIK */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Wax – Gyakran Ismételt Kérdések
        </h2>
        {waxFAQ.map((item, idx) => (
          <AccordionItem key={idx} item={item} />
        ))}
      </section>
    </main>
  )
}
