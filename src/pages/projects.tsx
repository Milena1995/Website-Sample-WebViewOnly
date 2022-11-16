import MainContent from "src/components/MainContent";
import { Features } from "src/components/services/Features";
import { PageLayout } from "src/layout/pageLayout";

const ProjectsPage = () => {
  return (
    <PageLayout>
      <MainContent title={"Projects"} />
      <Features />
    </PageLayout>
  );
};

export default ProjectsPage;
