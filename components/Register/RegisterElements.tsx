import styled from "styled-components";
import Link from "next/link"
import image from "./CybersecurityRegPage.png";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
    overflow: auto;
    padding: 0 50px;
`;

export const RegistrationFormContainer = styled.form`
    width: 100%;
    height: 100%;
    padding: 43px 14%;
    max-width: fit-content;

    & .registrationpromotionh1 {
        color: white;
        font-size: 25px;
        margin-bottom: 13px;
        line-height: 1.2;
    }

    & .registrationpromotionp {
        color: gray;
        font-size: 14px;
        margin-bottom: 26px;
        line-height: 1.4;
    }

    & .registrationinputfields {
        display: grid;
        row-gap: 23px;
    }

    & .registrationctas {
        margin-top: 20px;
        display: grid;
        row-gap: 43px;

        & .registrationtandc {
            display: flex;
            font-size: 12px;
            color: white;

            & span {
                color: green;
                text-decoration: underline;
                margin-left: 5px;
                cursor: pointer;
            }

            & > div {
                margin-left: 12px;
            }
        }
    }
`;
export const RegInImage = styled(Image)`
  width: auto;
  height: 600px;  
  
`;

export const Learn2CodePromotion = styled.div`
    width: 100%;
    background-image: url("./CybersecurityRegPage.png");
    background-size: cover;
    background-position: 45%;
    background-color: rgba(51, 51, 51, 0.19);
    background-blend-mode: soft-light;
    border-radius: 7px;

    & #reg-promo-content {
        width: 80%;
        margin: 0px auto;
        color: white;
        height: 100%;
        padding: 40px 0;
        display: flex;
        flex-direction: column;

        & .brand-logo {
            font-weight: 600;
        }

        & .leading-title {
            margin: 40px 0 20px;
            font-size: 50px;
            width: min-content;
        }

        & .nav-links {
            display: flex;
            list-style: none;
            margin-top: auto;
            justify-content: space-between;
            width: 64%;
        }
    }
`;

export const CenterCard = styled.div`
    //min-width: max-content;
    margin: auto;
    min-height: 85vh;
    background: #1a1c20;
    width: 1124px;
    box-shadow: rgb(0 0 0 / 11%) 1px 7px 16px 5px;
    border-radius: 7px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`;


export const CustomInputGroup = styled.div`
    height: 45px;
    min-width: 120px;
    display: flex;
    align-items: center;
    border: 1px solid rgb(128 128 128 / 24%);
    border-radius: 8px;
    padding: 4px 8px;

    &:focus-within {
        border-color: green !important;
    }

    & input {
        flex: 2;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 15px;
    }

    & span {
        padding: 5px;
        color: #b9b4b4;
        padding-right: 15px;
        display: flex;
        align-items: center;
    }
`;

export const PrimaryFilledButton = styled.button`
    text-decoration: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    background: #20c20e;
    border-color: #20c20e;
    margin-right: 20px; //border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    font-size: 14px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    color: black;
    width: 100%};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #20c20e;
        color: black;
        font-size: 15px;
    }
`;
