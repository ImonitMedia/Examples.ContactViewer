import { guttering } from 'settings';
import styled from 'styled-components';
import { device } from 'utils';

const StyledSearchBox = styled.div`
  display: block;
  padding: 0 ${guttering.sm};

  @media ${device.md} {
    padding: 0 ${guttering.md};
  }

  @media ${device.lg} {
    padding: 0 ${guttering.lg};
  }

  span {
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  input {
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    margin-right: 5px;
  }

  button {
    display: inline-block;
    vertical-align: middle;
  }
`;

export { StyledSearchBox };
