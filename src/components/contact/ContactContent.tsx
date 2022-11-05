import { Horizontal, Vertical } from "src/layout/layout";
import { ContactDetails } from "src/components/contact/ContactDetails";
import { Forms } from "src/components/contact/Forms";
import { H3Medium, Title } from "src/components/Text";

export const ContactContent = () => {
  return (
    <Horizontal>
      <Vertical flex={1}>
        <H3Medium marginBottom={13} color={"#5BCCDE"}>
          Contact
        </H3Medium>
        <Title color={"#486A6F"} marginBottom={100}>
          Get In Touch
        </Title>
        <ContactDetails />
      </Vertical>
      <Forms flex={1} />
    </Horizontal>
  );
};
