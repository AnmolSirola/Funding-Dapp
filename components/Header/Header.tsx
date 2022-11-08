import React
    // ,{useState,useEffect}
    from 'react';
import {Btn, HeaderContainer, Logo, Navbar, NavItem, NavMenu,} from "./HeaderElements";
import Link from "next/link"
// let Web3=require("web3")

import RiseME from "../RiseME.png"
const Header = (props: any) => {
    // const userAbi=`[
    //     {
    //       "inputs": [],
    //       "stateMutability": "nonpayable",
    //       "type": "constructor"
    //     },
    //     {
    //       "inputs": [
    //         {
    //           "internalType": "address",
    //           "name": "",
    //           "type": "address"
    //         }
    //       ],
    //       "name": "isUserPresent",
    //       "outputs": [
    //         {
    //           "internalType": "int256",
    //           "name": "",
    //           "type": "int256"
    //         }
    //       ],
    //       "stateMutability": "view",
    //       "type": "function",
    //       "constant": true
    //     },
    //     {
    //       "inputs": [
    //         {
    //           "internalType": "address",
    //           "name": "",
    //           "type": "address"
    //         }
    //       ],
    //       "name": "users",
    //       "outputs": [
    //         {
    //           "internalType": "string",
    //           "name": "",
    //           "type": "string"
    //         }
    //       ],
    //       "stateMutability": "view",
    //       "type": "function",
    //       "constant": true
    //     },
    //     {
    //       "inputs": [
    //         {
    //           "internalType": "string",
    //           "name": "_name",
    //           "type": "string"
    //         }
    //       ],
    //       "name": "addUser",
    //       "outputs": [],
    //       "stateMutability": "nonpayable",
    //       "type": "function"
    //     },
    //     {
    //       "inputs": [
    //         {
    //           "internalType": "string",
    //           "name": "_name",
    //           "type": "string"
    //         }
    //       ],
    //       "name": "updateName",
    //       "outputs": [],
    //       "stateMutability": "nonpayable",
    //       "type": "function"
    //     }
    //   ]`
    // let accounts:any;
    // const [signIn,setSignIn]=useState(false)
    // const c=new Web3("HTTP://127.0.0.1:7000")
    // function getContractInstance(abi:any,address:any) {
    //
    //     const contract = new c.eth.Contract(JSON.parse(abi), address, {
    //         from: accounts[0],
    //         gas: 2000000,
    //     });
    //     return contract;
    // }
    // async function isUser(){
    //     const userContractInstance=getContractInstance(userAbi,'0x28049eedc322b6B517B176e60acBbebEd64e2b9A')
    //     const res=await userContractInstance.methods.isUserPresent(accounts[0]).call()
    //     const res2=await userContractInstance.methods.users(accounts[0]).call()
    //     if(res==0)
    //     {
    //         setSignIn(true)
    //     }
    //     else{
    //         setSignIn(false)
    //     }
    //
    // }
    // useEffect(() => {
    //     (window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((res:any)=>{
    //         accounts=res
    //         isUser().then(()=>{})
    //     });
    // }, [])
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <Logo src={RiseME} alt={"RiseMEd"}/>
            </Link>

            {/*<Btn>Connect Wallet</Btn>*/}

            {/*{ signIn == true?*/}
            {/*    (*/}
            {/*        <Link href={"/Login"}>*/}
            {/*            <Btn>Connect</Btn>*/}
            {/*        </Link>*/}
            {/*) : null*/}
            {/*}*/}
            <>
            <Link href={"/Login"}>
                <Btn>Connect</Btn>
            </Link>
                <Link href={"/SignUp"}>
                    <Btn>Create a Page</Btn>
                </Link>
            </>
        </HeaderContainer>
    );  1
};

export default Header;