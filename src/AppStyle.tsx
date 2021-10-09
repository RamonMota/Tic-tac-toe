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
        background: #FFFFFF;
        padding: 80px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        list-style-type: none;
        transition: 0.3s;

        :active {
            background: linear-gradient(135.93deg, #7D78DB -7.69%, #4E4BAE 110.93%);
        }
    }
`;