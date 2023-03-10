import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    /* border: 1px solid #111; */
    border-radius: 11px;
    box-shadow: 8px 5px 15px #929292;
    :not(:last-child) {
        margin-bottom: 30px;
    }
    img {
        width: 200px;
    }
    >div {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        >div {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            h2, p {
                margin-top: 0;
            }
            h2 {
                font-size: 32px;
            }
            >div {
                input {
                    text-align: center;
                    width: 40px;
                }
            }
        }
    }
   
`