import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 3.6rem 3.2rem 2.8rem;

  > h1 {
    font-size: 2.1rem;
    line-height: 2.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background: transparent;
    }
  }

  @media screen and (min-width: 900px) {
    height: 10.4rem;
    padding: 0 9.5rem;
    gap: 4.5rem;
  }
`;
