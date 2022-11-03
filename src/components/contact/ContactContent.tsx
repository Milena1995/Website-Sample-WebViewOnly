import { Horizontal, Vertical } from "../../layout/layout";
import { H3Medium, Title } from "../Text";
import { ContactDetails } from "./ContactDetails";
import { Forms } from "./Forms";

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
