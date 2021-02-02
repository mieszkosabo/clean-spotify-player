import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const LeftPart = styled.div`
    display: flex;
    justify-content: ${ifProp('vertical', 'center', 'flex-end')};
    width: ${ifProp('vertical', '100%', '50%')};
    align-items: ${ifProp('vertical', 'flex-end', 'center')};
    height: ${ifProp('vertical', '50%', '100%')};
`;
