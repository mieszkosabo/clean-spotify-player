import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${ifProp('vertical', '100%', '50%')};
    align-items: center;
    height: ${ifProp('vertical', '50%', '100%')};
`;