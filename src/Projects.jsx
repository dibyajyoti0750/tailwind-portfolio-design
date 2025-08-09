import { assets } from "./assets/assets";
import Card from "./Card";
import Heading from "./Heading";

export default function Projects() {
  return (
    <div className="bg-blue-50 py-16 px-4 text-lg">
      <Heading
        title={"Featured Projects"}
        desc={
          "A selection of projects that showcase my skills and passion for development."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        <Card
          image={assets.project1}
          title="E-commerce Platform"
          description="A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard."
          tech={["React", "Node.js", "MongoDB"]}
          liveLink="https://github.com/dibyajyoti0750"
          codeLink="https://github.com/dibyajyoti0750"
        />

        <Card
          image={assets.project1}
          title="Task Management App"
          description="A collaborative task management tool with real-time updates, team collaboration, and progress tracking."
          tech={["Next.js", "TypeScript", "PostgreSQL"]}
          liveLink="https://github.com/dibyajyoti0750"
          codeLink="https://github.com/dibyajyoti0750"
        />

        <Card
          image={assets.project1}
          title="Weather Dashboard"
          description="A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics."
          tech={["React", "API Integration", "Charts.js"]}
          liveLink="https://github.com/dibyajyoti0750"
          codeLink="https://github.com/dibyajyoti0750"
        />
      </div>
    </div>
  );
}
