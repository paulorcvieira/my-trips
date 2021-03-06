import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 8px;
  width: 100%;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }

  > div {
    padding: 50px 40px 50px 12px;

    section {
      display: flex;

      .square-skeleton {
        width: 100%;
        height: 116px;
        border-radius: 9px;
        flex-shrink: 0;
      }

      .column {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        padding-left: 15px;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 30%;
          }

          &:nth-child(2) {
            width: 40%;
            margin-top: 10px;
          }

          &:nth-child(3) {
            width: 80%;
            margin-top: 10px;
          }

          &:nth-child(4) {
            width: 85%;
            margin-top: 10px;
          }

          &:nth-child(5) {
            width: 90%;
            margin-top: 10px;
          }

          &:nth-child(6) {
            width: 95%;
            margin-top: 10px;
          }

          &:nth-child(7) {
            width: 100%;
            margin-top: 10px;
          }
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 100%;
        }

        &:nth-child(2) {
          width: 90%;
          margin-top: 10px;
        }
      }
    }
  }
`;
