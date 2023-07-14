import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    align-items: center;
    padding: 45px 0;


`;

export const Title = styled.h1`
    color: white;
    max-width: 640x;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media screen and (max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
     color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`;