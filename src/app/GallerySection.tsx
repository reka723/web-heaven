export function GallerySection() {
  return (
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
  )
}
