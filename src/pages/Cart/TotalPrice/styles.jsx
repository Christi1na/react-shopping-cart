import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 30px;
    p {
        font-size: 20px;
    }
    button, Link {
        &:first-child {
            margin-right: 20px;
        }
        width: 180px;
        padding: 15px 5px;
        font-size: 15px;
        color: #fff;
        background-color: #111;
        border-radius: 8px;
        cursor: pointer;
    }
`