import MainContent from "src/components/MainContent";
import { ListProjects } from "src/components/projects/ListProjects";
import { PageLayout } from "src/layout/pageLayout";

const ProjectsPage = () => {
  return (
    <PageLayout>
      <MainContent title={"Projects"} />
      <ListProjects />
    </PageLayout>
  );
};

export default ProjectsPage;
