import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState, useRef } from 'react'

const products = [
  {
    title: 'Product A',
    desc: 'Elegant and powerful solution.',
    longDesc:
      'Product A is an elegant, powerful platform designed to streamline operations, enhance productivity, and scale with your business.',
    height: 'Enterprise-grade architecture',
    cost: '$299/month',
    audience: 'Large enterprises and high-scale startups',
  },
  {
    title: 'Product B',
    desc: 'Modern tech for modern needs.',
    longDesc:
      'Leverage the latest in cloud-native technologies and automation with Product B, built for developers and teams.',
    height: 'Cloud-native, Kubernetes-based',
    cost: '$149/month',
    audience: 'Tech teams and DevOps professionals',
  },
  {
    title: 'Product C',
    desc: 'Simple. Effective. Affordable.',
    longDesc:
      'A cost-effective solution that simplifies workflow management and enhances collaboration across teams.',
    height: 'Lightweight architecture, fast setup',
    cost: 'Free plan available, $49/month Pro',
    audience: 'Small businesses and startups',
  },
  {
    title: 'Product D',
    desc: 'Robust integrations and APIs.',
    longDesc:
      'Build anything with our extensive API suite and pre-built integrations for top platforms.',
    height: 'API-first, 99.9% uptime SLA',
    cost: '$99/month per developer',
    audience: 'API consumers, SaaS integrators',
  },
  {
    title: 'Product E',
    desc: 'AI-powered productivity tools.',
    longDesc:
      'Supercharge your productivity with intelligent automation and predictive insights using Product E.',
    height: 'AI/ML powered with real-time inference',
    cost: '$199/month',
    audience: 'Operations, product, and marketing teams',
  },
]

export default function ProductsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Keep the slider instance ref to call next/prev
  const sliderInstance = useRef<any>(null)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel)
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created(s) {
      sliderInstance.current = s
    },
  })

  const selected = products[selectedIndex]

  return (
    <section className="py-4 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-10 text-center">Our Products</h1>

      {/* Carousel + Arrows Wrapper */}
      <div className="relative mb-12 max-w-4xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => sliderInstance.current?.prev()}
          aria-label="Previous Slide"
          className="absolute -left-12 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10 hidden md:block text-white"
        >
          ←
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product, i) => (
            <div
              key={i}
              className={`keen-slider__slide cursor-pointer rounded-lg border p-6 shadow-sm transition-colors ${
                i === selectedIndex
                  ? 'border-primary bg-muted/50'
                  : 'border-border bg-card'
              }`}
              onClick={() => setSelectedIndex(i)}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground">{product.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => sliderInstance.current?.next()}
          aria-label="Next Slide"
          className="absolute -right-12 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10 hidden md:block text-white"
        >
          →
        </button>
      </div>

      {/* Selected Product Details */}
      <div className="flex flex-col lg:flex-row items-center gap-8 border border-border bg-muted/30 p-8 rounded-lg shadow-sm h-auto">
        {/* Product Image or Placeholder */}
        <div className="w-full max-w-md">
          <img
            src="https://picsum.photos/id/182/400"
            alt={selected.title}
            width={350}
            className="rounded-md object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-primary">{selected.title}</h2>
          <p className="text-muted-foreground">{selected.longDesc}</p>

          {/* Technical Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <span className="block font-semibold text-foreground">
                Tech Level
              </span>
              <span>{selected.height}</span>
            </div>
            <div>
              <span className="block font-semibold text-foreground">Cost</span>
              <span>{selected.cost}</span>
            </div>
            <div>
              <span className="block font-semibold text-foreground">
                Designed For
              </span>
              <span>{selected.audience}</span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
