import styled from 'styled-components';

export const ContainerTicTac = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
`;
export const TicTac = styled.ul`
    margin: 0;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 15px;
    row-gap: 15px;
    transition: 0.3s;

    li {
        height: 10vw;
        width: 10vw;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        list-style-type: none;
        transition: 0.3s;

        svg {
            width: 5.8vw;
            height: auto;
        }

        :active {
            background: linear-gradient(135.93deg, #7D78DB -7.69%, #4E4BAE 110.93%);
        }

        @media(max-width: 800px) {
            height: 20vw;
            width: 20vw;
        }
    }
`;
export const Footer = styled.p`
    font: 100 14px 'Roboto';
    color: #fff;
    position: absolute;
    bottom: 15px;

    a {
        text-decoration: none;
        font: 500 14px 'Roboto';
        color: #fff;
        transition: 0.3s;

        :hover {
            color: #FA9905;
        }
    }
`;