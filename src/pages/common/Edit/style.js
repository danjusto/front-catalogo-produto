import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

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

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      align-self: flex-start;
      margin: 0 0 3.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
  width: 100%;
  margin: 0 3.2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3.2rem;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      font-size: 1.4rem;
      margin: 0;
      padding: 1.2rem 3.2rem;
      width: 29rem;
    }

    button:last-child {
      padding: 1.2rem 2.4rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .image-wrap,
    .name-wrap,
    .category-wrap,
    .stock-wrap,
    .price-wrap,
    .brand-wrap {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      img {
        cursor: pointer;
      }

      label {
        margin-top: 0.8rem;
      }
    }

    label,
    h3 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  @media screen and (min-width: 900px) {
    gap: 3.2rem;

    > .desktop-wrap1,
    .desktop-wrap2 {
      flex-direction: row;
      gap: 3.2rem;
      align-items: center;
      justify-content: center;
      width: 100%;

      .image-wrap {
        width: 50%;
      }

      .brand-wrap {
        width: 30%;
      }

      .name-wrap {
        width: 48%;
      }

      .category-wrap {
        width: 28.5%;
      }

      .price-wrap {
        min-width: 20%;
        label {
          margin-top: 0;
        }
      }
    }

    > .buttons {
      justify-content: end;
      button {
        width: 27.2rem;
        align-self: center;
      }
    }
  }
`;
