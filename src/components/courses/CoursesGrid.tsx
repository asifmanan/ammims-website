import Link from "next/link";
import { coursesDataArray } from "@/assets/data/courses/coursesData";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";

const courses = coursesDataArray;

export default function CoursesGrid() {
  return (
    <section className="py-16 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.slug} className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-semibold text-brand-primary">{course.name}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-jet/70">
                  {course.highlight}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="text-raspberry font-medium hover:text-dazzle-rose"
                >
                    View Details →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
