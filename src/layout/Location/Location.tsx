import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
import mapImage from '@/assets/images/map.png';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <MapImage src={mapImage} alt="양재 엘블레스 약도" />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 8px 0;
`;
