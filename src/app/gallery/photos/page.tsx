import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery/gallery-1.png", title: "Hospital Campus" },
  { src: "/images/gallery/gallery-2.png", title: "Research Laboratory" },
  { src: "/images/gallery/gallery-3.png", title: "Seminar Hall" },
  { src: "/images/gallery/gallery-4.png", title: "Blood Bank" },
  { src: "/images/gallery/gallery-5.png", title: "Library" },
  { src: "/images/gallery/gallery-6.png", title: "Cafeteria" },
  { src: "/images/gallery/gallery-7.png", title: "Dissection Hall" },
  { src: "/images/gallery/gallery-8.png", title: "Sports Ground" },
  { src: "/images/facilities/pathology.png", title: "Pathology Lab" },
  { src: "/images/facilities/operation-theatre.png", title: "Operation Theatre" },
  { src: "/images/facilities/classroom.png", title: "Classrooms" },
  { src: "/images/facilities/diagnostic-lab.png", title: "Diagnostic Lab" },
];

export default function PhotoGalleryPage() {
  return (
    <main>
      <div className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-[#0f2557] to-[#1a3a6b]">
        <h1 className="section-heading-white">Photo Gallery</h1>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
          Explore our campus, facilities, and infrastructure
        </p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImages.map((img) => (
            <div key={img.title} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
