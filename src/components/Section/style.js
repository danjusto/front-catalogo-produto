import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.4rem;
  }

  > #grid {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    row-gap: 30px;
    column-gap: 30px;
    padding: 0 20px;
  }

  .item {
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    width: 21rem;
    height: 29.2rem;

    > #edit {
      background: transparent;
      width: auto;
      justify-self: end;
      padding: 2rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.6rem 0;

      img {
        width: 8.8rem;
        height: 8.8rem;
      }

      button:nth-child(2) {
        width: 16.2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1.2rem 0;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        gap: 0.5rem;
      }

      p {
        height: 1.6rem;
        width: 16.6rem;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 100%;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.5rem;
      }

      h3 {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
      }
    }
  }

  @media screen and (min-width: 900px) {
    > #grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      justify-content: space-between;
      row-gap: 30px;
      column-gap: 30px;
      padding: 0 20px;
    }

    .item {
      width: 30.4rem;
      height: 46.2rem;

      > div {
        gap: 1.5rem;

        img {
          width: 17.6rem;
          height: 17.6rem;
        }

        button:nth-child(2) {
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 140%;
          width: 25.6rem;
          gap: 1rem;

          svg {
            margin-top: 0;
            margin-bottom: 0.2rem;
            width: 1rem;
            height: auto;
          }
        }

        p {
          height: 2.2rem;
          width: 25.6rem;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 160%;
          text-align: center;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0;
        }

        h3 {
          font-size: 3.2rem;
          line-height: 160%;
        }
      }
    }
  }
`;
