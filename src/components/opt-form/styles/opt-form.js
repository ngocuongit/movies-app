import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    margin-left: 11px;
    margin-right: 11px;
    //width: 670px;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }

`;

export const Input = styled.input`
    max-width: 450px;
    width: 60%;
    border: 0;
    padding: 10px;
    height: 60px;
    box-sizing: border-box;

`;

export const Button = styled.button`

    display: flex;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover{
        background: #f40612;
    }

    @media screen and (max-width: 1000px){
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
    @media screen and (min-width: 1000px){
        margin-left: 4px;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;
        font-weight: 100;


        @media screen and (max-width: 1000px){
            width: 16px;
        }
    }

`;

export const Text = styled.p`
    font-size: 18px;
    color: white;
    text-align: center;

    @media screen and (max-width: 600px){
            font-size: 16px;
            line-height: 22px;
        }

`;

export const Break = styled.div`
    flex-basis: 100%;
    margin-top: 5px;
`;