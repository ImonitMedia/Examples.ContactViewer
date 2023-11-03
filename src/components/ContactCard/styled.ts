import { header2 } from 'settings';
import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import { device } from 'utils';

interface StyledContentProps {
  $expanded: boolean;
}

const avatar = {
  height: {
    lg: '100px',
    sm: '60px',
  },
  width: {
    lg: '100px',
    sm: '60px',
  },
};

const StyledContactCard = styled.div`
  position: relative;
`;

const StyledIntro = styled.div<StyledContentProps>`
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: ${(props): CSSProperties['width'] =>
      props.$expanded ? avatar.width.lg : avatar.width.sm};
    height: ${(props): CSSProperties['height'] =>
      props.$expanded ? avatar.height.lg : avatar.height.sm};
  }

  h2 {
    margin: 0 10px;
    padding: 0;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: ${header2.sm};

    @media ${device.md} {
      font-size: ${header2.md};
    }

    @media ${device.lg} {
      font-size: ${header2.lg};
    }
  }
`;

const StyledContent = styled.div`
  display: block;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid lightgrey;

  dl {
    margin: 0;
    padding: 0;

    dt {
      display: block;
      font-weight: bold;
    }
    dd {
      display: block;
      margin: 0 0 10px;
      padding: 0;
    }
  }
`;

const StyledMessage = styled.div`
  font-weight: bold;
  color: green;
  margin-bottom: 10px;
`;

const StyledActions = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid lightgrey;
  right: 10px;
  top: 10px;
  gap: 5px;
  font-size: 1.2rem;
`;

export { StyledActions, StyledContactCard, StyledContent, StyledIntro, StyledMessage };
