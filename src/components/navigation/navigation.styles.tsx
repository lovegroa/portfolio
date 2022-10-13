import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 100vw;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  display: flex;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }

  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  font-size: 2vw;
  padding: 20px;
  z-index: 5;
  scrollbar-width: thin;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    li {
      /* display: inline-block; */
      padding: 1px 5px;
      margin: 0 1vw;
      border-bottom: 1px solid white;
      transition: 1s;
      font-size: 24px;
      white-space: nowrap;

      @media screen and (max-width: 600px) {
        font-size: 16px;
      }

      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export const NavigationInnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
`;

export const NavContainerLeft = styled.div`
  @media screen and (max-width: 600px) {
    flex: 0 0 auto;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4 {
    padding-right: 10px;
    font-size: 32px;
  }

  @media screen and (max-width: 600px) {
    h4 {
      font-size: 24px;
    }
  }
`;
export const NavContainerRight = styled.nav`
  @media screen and (max-width: 600px) {
    flex: 1 1 auto;
  }

  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
