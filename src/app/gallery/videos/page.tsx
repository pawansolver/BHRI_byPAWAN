const videos = [
  { id: "dQw4w9WgXcQ", title: "Hospital Overview" },
  { id: "dQw4w9WgXcQ", title: "Campus Tour" },
  { id: "dQw4w9WgXcQ", title: "Medical Facilities" },
  { id: "dQw4w9WgXcQ", title: "Student Life at BHRI" },
  { id: "dQw4w9WgXcQ", title: "OPD & Emergency Services" },
  { id: "dQw4w9WgXcQ", title: "Annual Day Celebration" },
];

export default function VideoGalleryPage() {
  return (
    <main>
      <div className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-[#0f2557] to-[#1a3a6b]">
        <h1 className="section-heading-white">Video Gallery</h1>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
          Watch videos about our hospital, campus, and events
        </p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, i) => (
            <div key={i}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-[15px] font-semibold text-[#1a1a2e]">{vid.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
