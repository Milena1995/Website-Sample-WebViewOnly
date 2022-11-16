import { Vertical } from "src/layout/layout";
import { NavBar } from "src/components/navigation/NavBar";
import { H3Medium, H2lBold } from "src/components/Text";

import style from "src/stylesheet/mainContent.module.scss";

const MainContent = ({ title }: { title: string }) => {
  return (
    <section id={style.main_container}>
      <NavBar />
      <Vertical className={style.main_content}>
        <H3Medium color="#5BCCDE">{title}</H3Medium>
        <H2lBold color="#486A6F">Owner and investor with a reputation</H2lBold>
        <H3Medium color="#678C92">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
          sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
          rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
          ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
          Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
          viverra vel ultrices in, congue sed ex.
        </H3Medium>
      </Vertical>
    </section>
  );
};

export default MainContent;
