import { header2 } from 'settings';
import styled from 'styled-components';
import { device } from 'utils';

const StyledContactForm = styled.div`
  display: block;

  h2 {
    margin: 0 0 10px;
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

const StyledFormGroup = styled.div`
  overflow: hidden;
  padding-bottom: 10px;

  &:last-of-type {
    padding: 10px 0 0;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    display: block;
    width: 150px;
  }

  div {
    color: red;
  }
`;

export { StyledContactForm, StyledFormGroup };
