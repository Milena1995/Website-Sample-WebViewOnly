import { ContactContent } from "src/components/contact/ContactContent";
import { NavBar } from "src/components/navigation/NavBar";
import { PageLayout } from "src/layout/pageLayout";

import style from "src/stylesheet/contact/contact.module.scss";

export const ContactPage = () => {
  return (
    <PageLayout>
      <section id={style.contactContent}>
        <NavBar />
        <ContactContent />
      </section>
    </PageLayout>
  );
};

ContactPage.displayName = "ContactPage";
