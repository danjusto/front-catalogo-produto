import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > main {
    width: 36.4rem;
    margin: 0 3.2rem;
    padding: 11.7rem 0 7.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button:nth-child(1) {
      margin: 1rem 0 2rem;
      font-size: 1.6rem;
      align-self: flex-start;
      gap: 0.8rem;

      div {
        display: flex;
        align-items: center;

        svg {
          height: 1.5rem;
          width: auto;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    > main {
      width: clamp(36.4rem, 80rem + 20vw, 112rem);
      margin: 0 12.2rem;
    }
  }
`;

export const Form = styled.form`
  width: 316px;

  > label {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    margin: 0.8rem 0 3.2rem;
  }

  > button:last-child {
    display: flex;
    margin: 3.2rem auto 0;
  }

  @media screen and (min-width: 900px) {
    width: clamp(42rem, 47.6rem, 47.6rem);
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    padding: 6.4rem;
    margin-top: -1rem;
  }
`;
