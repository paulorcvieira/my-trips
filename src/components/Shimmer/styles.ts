import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8px;
  width: 100%;

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
`

export const Panel = styled.div`
  background: linear-gradient(to left, rgb(45, 38, 74), rgb(32, 32, 36));
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`

export const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`
