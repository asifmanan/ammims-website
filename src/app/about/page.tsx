export const metadata = {
  title: "About Us | Abdul Manan Memorial Institute of Medical Sciences",
  description:
    "Learn more about Abdul Manan Memorial Institute of Medical Sciences — our mission, vision, and dedication to excellence in paramedical education.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Abdul Manan Memorial Institute of Medical Sciences (AMMIMS) is
          dedicated to shaping the next generation of healthcare professionals
          through excellence in paramedical education.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-snow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary">Our Mission</h2>
            <p className="mt-4 text-jet/80">
              Our mission is to provide high-quality paramedical education,
              integrating academic excellence with practical skills. We aim to
              empower students to serve communities with competence, compassion,
              and integrity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-primary">Our Vision</h2>
            <p className="mt-4 text-jet/80">
              Our vision is to become a leading institution recognized for
              producing skilled healthcare professionals who contribute to
              improving healthcare standards across Pakistan and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-jet">Why Choose AMMIMS?</h2>
          <p className="mt-4 text-lg text-jet/80 max-w-3xl mx-auto">
            At AMMIMS, we combine academic knowledge, modern facilities, and
            practical experience to prepare students for real-world healthcare
            challenges.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Experienced Faculty",
                text: "Learn from highly qualified professionals with years of practical experience.",
              },
              {
                title: "Hands-on Training",
                text: "Practical labs and clinical exposure ensure students gain real-world skills.",
              },
              {
                title: "Accredited Programs",
                text: "All courses are designed to meet healthcare industry standards.",
              },
              {
                title: "Modern Facilities",
                text: "State-of-the-art labs and classrooms enhance the learning experience.",
              },
              {
                title: "Career Guidance",
                text: "We provide support to help students build successful careers in healthcare.",
              },
              {
                title: "Community Focused",
                text: "Our graduates are committed to serving local and global communities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-snow p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-jet/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
