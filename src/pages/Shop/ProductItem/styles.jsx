import styled from "styled-components";

export const Wrapper = styled.div`
    /* width: 300px; */
    /* display: flex; */
    display: flex;
    flex: 1 1 33%;
    flex-direction: column;
    img {
        width: 250px;
        flex-grow: 1;
        /* text-align: center; */
        margin: 0 auto;
    }

    h2, p {
        text-align: center;
    }

    button {
        padding: 10px 35px;
        font-size: 16px;
        /* max-width: 100px; */
        text-align: center;
        display: inline-block;
        margin: 0 auto;
        border-radius: 20px;
        border: 2px solid #111;
        background-color: #fff;
        margin-bottom: 25px;
        transition: all 0.4s;
        :hover {
            background-color: #111;
            color: #fff
        }
    }
`