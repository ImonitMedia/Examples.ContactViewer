import { contactCardSpacing, guttering, header1 } from 'settings';
import styled from 'styled-components';
import { device } from 'utils';

const StyledLayout = styled.div`
  max-width: 1280px;
  margin: auto;
  font-size: 1.3rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid lightgrey;
  padding: ${guttering.sm};

  @media ${device.md} {
    padding: ${guttering.md};
  }

  @media ${device.lg} {
    padding: ${guttering.lg};
  }

  h1 {
    margin: 0 ${guttering.sm} 0 0;
    padding: 0;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: ${header1.sm};

    @media ${device.md} {
      margin: 0 ${guttering.md} 0 0;
      font-size: ${header1.md};
    }

    @media ${device.lg} {
      margin: 0 ${guttering.lg} 0 0;
      font-size: ${header1.lg};
    }
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border: 1px dotted red;
`;

const StyledColumns = styled.div`
  padding: 0 calc(${guttering.sm} - ${contactCardSpacing});

  @media ${device.md} {
    padding: 0 calc(${guttering.md} - ${contactCardSpacing});
  }

  @media ${device.lg} {
    padding: 0 calc(${guttering.lg} - ${contactCardSpacing});
  }
`;

const StyledColumn = styled.div`
  float: left;
  margin-bottom: 0;
  width: 100%;

  @media ${device.md} {
    width: 50%;
  }

  @media ${device.lg} {
    width: 33.33%;
  }
`;

const StyledColumnBorder = styled.div`
  display: block;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 5px lightgrey;
  background-color: white;
  min-height: 60px;
`;

const StyledActionBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  height: 80px;
  flex-direction: column;

  @media ${device.md} {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    flex-direction: row;
  }
`;

export {
  StyledActionBar,
  StyledColumn,
  StyledColumnBorder,
  StyledColumns,
  StyledError,
  StyledHeader,
  StyledLayout,
};
