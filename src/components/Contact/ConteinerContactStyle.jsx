import styled from "styled-components";

export const ContainerContant  = styled.div`


margin: -5rem 0 5rem 0;
display: flex;
flex-direction: column;
align-items: center;

`

export const Banner = styled.div`
background: linear-gradient(90deg,
    rgba(107,74,213, .7),
    rgba(247,81,69, .7)
  ), url(/banner-faq.jpg) center center;
height: 400px;
width: 70vw;
border-radius: 10px 10px 0 0;
`

export const Form = styled.div`
display: flex;
align-items: start;
padding-top: 5rem;
justify-content: center;
background-color: #f1f1f1;
height: 600px;
width: 70vw;
border-radius: 0 0 10px 10px ;
`

export const ContentForm = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1.3rem;
h4 {
  color: #060606;
  line-height: 2.5rem;
}
p {
  max-width: 400px;
}
div {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
img {
  background-color: #149af6;
  padding: .7rem;
  border-radius: 50%;
}
`

export const InputForm = styled.form`

display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
input, 
textarea {
  min-width: 400px ;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #149af6;
  outline: none;
  color: #7B7D81;
  font-size: 1rem;
  font-weight: 00;
}
input::placeholder, 
textarea::placeholder {
  color: #7B7D81;
  font-size: 1rem;
  font-weight: 00;
}

textarea {
  resize: none;
}
`