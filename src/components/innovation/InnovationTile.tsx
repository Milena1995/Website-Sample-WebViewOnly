import { Vertical } from "src/layout/layout";
import { H2Bold, H3Medium } from "src/components/Text";
import iconStyle from "src/stylesheet/innovationTile.module.scss";
interface Props {
  icon: any;
  text: string;
  subText: string;
}
export const InnovationTile: React.FC<Props> = ({ icon, text, subText }) => (
  <Vertical padding={50}>
    <div className={iconStyle.icon}>{icon}</div>
    <H2Bold margin={"20px 0 10px"}>{text}</H2Bold>
    <H3Medium color={"#678C92"}>{subText}</H3Medium>
  </Vertical>
);

InnovationTile.displayName = "InnovationTile";
