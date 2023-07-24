import styled from "styled-components";

export const CountryData =styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
color: ${props => props.theme === 'light' ?'' : '#FFF'};
transition: all ease 0.25;

img{
    width: 440px;
    height:300px;
}

.data--area { 
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin:0px;
    }

    .data--firstArea {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 20px;

        p {
            margin: 5px 0px;
            span{
                font-weight: bold
            }
        }

        .language {
            font-weight: normal;
            margin-right: 5px
        }
    }

    .border--area{
        margin-top: 20px;
        p {
            font-weight: bold
        }

        .borders {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap:5px;
            width:100%;

            a {
                text-decoration:none;
                color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
                display: flex;
                min-height: 25px;
                background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 13px;
                flex: 1;
                font-weight: 300;
                border-radius: 2px;
                box-shadow: 0px 2px 9px 0px #0000000E;

    
            }
        }
    }
}
`

