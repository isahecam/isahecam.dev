import { ProjectCard } from "@/features/projects/components/project-card";

export function ProjectGridView() {
  return (
    <div className="flex flex-col gap-6">
      {/* {items.map((project) => ( */}
      <ProjectCard
        // key={project._id}
        project={{
          _id: "1",
          title: "Project Title",
          tagline: "Project Tagline",
          slug: "project-slug",
          description: "Project Description",
          imageGallery: [],
          coverImage: {
            _key: "cover-image-key",
            url: "https://assets.isahecam.dev/images/ascii-art-hero-background.png",
            alt: "Cover Image Alt Text",
          },
          liveUrl: "https://example.com",
          publishedAt: "2024-06-01T00:00:00Z",
          technologies: [],
        }}
      />
      {/* ))} */}
    </div>
  );
}
