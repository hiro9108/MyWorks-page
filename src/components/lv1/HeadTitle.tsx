import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-weight: 500;
  color: black;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  & ~ & {
    margin-top: 5rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 500 !important;
  color: black;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
`;

export const H5 = styled.h5`
  font-size: 1.3rem;
  font-weight: 500 !important;
  color: black;
  margin-bottom: 1rem;
  padding-bottom: 0;
  margin-top: 2rem;
  padding-left: 0.8rem;
  border-left: 4px solid black;
`;
