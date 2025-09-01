import { aboutData } from "@/assets/data/about/aboutData";

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
        <h1 className="text-4xl sm:text-5xl font-bold">{aboutData.banner.title}</h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
        {aboutData.banner.description}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-snow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary">{aboutData.mission.title}</h2>
            <p className="mt-4 text-jet/80">
              {aboutData.mission.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-primary">{aboutData.vision.title}</h2>
            <p className="mt-4 text-jet/80">
              {aboutData.vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-jet">{aboutData.whyChoose.title}</h2>
          <p className="mt-4 text-lg text-jet/80 max-w-3xl mx-auto">
            {aboutData.whyChoose.description}
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aboutData.whyChoose.cards.map((item) => (
              <div
                key={item.title}
                className="bg-snow p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-jet/80">{item.description}</p>
              </div>              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
