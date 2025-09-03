import Link from "next/link";
import {offeredCoursesArray} from "@/assets/data/courses/coursesData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function CoursesPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-jet">
          Our Programs
        </h2>

        <p className="mt-4 text-lg text-jet/80 text-center max-w-2xl mx-auto">
          Explore a range of paramedical courses designed to equip students with
          the skills and knowledge needed for successful healthcare careers.
        </p>

        <div className="mt-10 max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {offeredCoursesArray.map((course) => (
                <CarouselItem key={course.slug} className="md:basis-1/2 lg:basis-1/3 flex">
                <Card
                  key={course.slug}
                  className="bg-snow hover:shadow-lg transition flex flex-col h-full"
                >
                  <CardHeader>
                    <CardTitle>
                      <h3 className="text-brand-primary text-xl">{course.name}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-jet/80 text-sm">
                      {course.highlight}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link className="inline-block text-sm font-medium text-raspberry hover:text-raspberry/80 transition"
                      href={`/courses/${course.slug}`}>
                      Learn more →
                    </Link>
                  </CardFooter>
                </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-brand-primary/90 transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
