import { Features } from "src/components/services/Features";
import MainContent from "src/components/MainContent";
import { PageLayout } from "src/layout/pageLayout";
import { ReserveFeatures } from "src/components/services/ReverseFeatures";
import { ContactTile } from "src/components/ContactTile";
import { View } from "app-studio";

const ServicesPage = () => {
  return (
    <PageLayout>
      <MainContent title="Services" />
      <Features />
      <ReserveFeatures />
      <Features />
      <View padding={"0 120px 50px"}>
        <ContactTile />
      </View>
    </PageLayout>
  );
};

export default ServicesPage;
