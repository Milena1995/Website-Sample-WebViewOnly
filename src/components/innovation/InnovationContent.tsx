import { ReactComponent as WhitePen } from '../../assets/svg/WhitePen.svg';
import { ReactComponent as WhiteArrows } from '../../assets/svg/WhiteArrows.svg';
import { ReactComponent as WhiteSound } from '../../assets/svg/WhiteSound.svg';
import { Horizontal, Vertical } from '../../layout/layout';
import { InnovationTile } from './InnovationTile';
import { H2lBold } from '../Text';

export const InnovationContent = () => {
  const tiles = [
    {
      icon: <WhitePen width={30} height={30} />,
      text: 'Featured Listing',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      icon: <WhiteArrows width={30} height={30} />,
      text: 'Available Properties',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      icon: <WhiteSound width={30} height={30} />,
      text: 'In the News',
      subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    }
  ];
  return (
    <Vertical margin={'auto'} color={'#486A6F'}>
      <H2lBold textAlign={'center'} marginBottom={60}>
        Innovative Execution
      </H2lBold>
      <Horizontal gap={20}>
        {tiles.map((tile, index) => (
          <InnovationTile
            key={`${tile}${index}`}
            icon={tile.icon}
            text={tile.text}
            subText={tile.subText}
          />
        ))}
      </Horizontal>
    </Vertical>
  );
};
