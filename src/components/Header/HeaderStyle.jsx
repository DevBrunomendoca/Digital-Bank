import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.7rem 5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #0E0A24;
  border-bottom: 1px solid rgba(95, 95, 95, 0.4);
  
  nav{
    display: flex;
    gap: 1.5rem;

  }
  nav a{
    text-decoration: none;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 500;
    transition: .5s;
  
  &:hover {
    color: #149af6;
  }
  }
`