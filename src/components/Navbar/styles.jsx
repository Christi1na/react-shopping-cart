import styled from "styled-components";

export const Nav = styled.nav`
    background-color: black;
    /* position: fixed; */
    /* width: 100%; */

    ul {
        margin: 0;
        padding: 10px;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        li {
            :not(:last-child) {
                margin-right: 40px;
            }
            a {

                color: #fff;
                font-size: 24px;
                text-decoration: none;
            }
        }
    }

`