import { AboutHome } from "src/components/about/AboutHome";
import { AboutStatistic } from "src/components/about/AboutStatistic";
import { AboutTeam } from "src/components/about/AboutTeam";
import { PageLayout } from "src/layout/pageLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHome />
      <AboutStatistic />
      <AboutTeam />
    </PageLayout>
  );
};

export default AboutPage;
AboutPage.displayName = "AboutPage";
