export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Faculty",
      description:
        "Learn from highly qualified instructors with years of experience in healthcare education.",
      icon: "🎓",
    },
    {
      title: "Hands-On Training",
      description:
        "Gain practical skills through labs, simulations, and clinical exposure.",
      icon: "🏥",
    },
    {
      title: "Accredited Programs",
      description:
        "Study recognized courses that prepare you for real-world healthcare careers.",
      icon: "📜",
    },
    {
      title: "Career Support",
      description:
        "Get guidance for internships, placements, and future growth opportunities.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-snow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-jet">
          Why Study at AMMIMS?
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-brand-primary">
                {f.title}
              </h3>
              <p className="mt-2 text-jet/80 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
