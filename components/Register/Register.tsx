import React
    // ,{useState,useEffect}
    from "react";
import { Container, CenterCard, Learn2CodePromotion, CustomInputGroup, RegistrationFormContainer, PrimaryFilledButton } from "./RegisterElements";
import { FaEthereum } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
import { MdTitle } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
// import Router from 'next/router'
// let Web3=require("web3")
const Registration = () => {
    // let accounts:any;
    // const abi=`[
    //     {
    //       "inputs": [
    //         {
    //           "internalType": "uint256",
    //           "name": "",
    //           "type": "uint256"
    //         }
    //       ],
    //       "name": "creators",
    //       "outputs": [
    //         {
    //           "internalType": "address",
    //           "name": "",
    //           "type": "address"
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
    //           "name": "_title",
    //           "type": "string"
    //         },
    //         {
    //           "internalType": "string",
    //           "name": "_desc",
    //           "type": "string"
    //         }
    //       ],
    //       "name": "createCreator",
    //       "outputs": [],
    //       "stateMutability": "payable",
    //       "type": "function",
    //       "payable": true
    //     },
    //     {
    //       "inputs": [],
    //       "name": "getCreators",
    //       "outputs": [
    //         {
    //           "internalType": "address[]",
    //           "name": "",
    //           "type": "address[]"
    //         }
    //       ],
    //       "stateMutability": "view",
    //       "type": "function",
    //       "constant": true
    //     }
    //   ]`
    // const c=new Web3("http://localhost:7000")
    // let [title,setTitle]=useState('')
    // let [desc,setDesc]=useState('')
    // function getContractInstance(abi:any,address:any) {
    //     const contract = new c.eth.Contract (JSON.parse(abi), address, {
    //         from: accounts[0],
    //         gas: 2000000,
    //     });
    //     return contract;
    // }
    // useEffect(() => {
    //     (window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((res:any)=>{
    //           accounts=res
    //
    //
    //        });
    //     }, [])
    // const handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     getContractInstance(abi,'0x97886DA09C0607fAA72CA80C33Be085293192c81').methods.createCreator(title,desc).send({from:accounts[0]}).then((r)=>{
    //         console.log(r)
    //         Router.push('/')
    //     })
    // };

    return (
        <Container>
            <CenterCard>
                <Learn2CodePromotion>
                    {/*<RegInImage src={ETHImage} alt={""}/>*/}
                    <div id="reg-promo-content">
                        <span className="brand-logo">RiseME</span>
                        <h1 className="leading-title">Best place for Creators</h1>
                    </div>
                </Learn2CodePromotion>
                <RegistrationFormContainer
                    // onSubmit={handleSubmit}
                >
                    <h1 className="registrationpromotionh1">Join over 100s of creators around the globe</h1>
                    <p className="registrationpromotionp">
                        Get Sponsored by your users for your work.
                    </p>
                    <div className="registrationinputfields">
                        <CustomInputGroup>
                            <span>
                                <MdTitle/>
                            </span>
                            <input type="text" placeholder="title" aria-label="Eth Address"  />
                        </CustomInputGroup>
                        <CustomInputGroup>
                            <span>
                                <BsCardText/>
                            </span>
                            <input type="text" placeholder="Desc" aria-label="Eth Address"  />
                        </CustomInputGroup>
                        <CustomInputGroup>
                            <span>
                                <FaEthereum/>
                            </span>
                            <input type="text" placeholder="Eth Address" aria-label="Eth Address"  />
                        </CustomInputGroup>

                    </div>
                    <div className="registrationctas">
                        {/*<div className="registrationtandc">*/}
                        {/*    <input role="checkbox" type="checkbox" autoComplete="" />*/}
                        {/*    <div>*/}
                        {/*        I agree to all statements included in*/}
                        {/*        <span role="link">Terms of Use</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <PrimaryFilledButton type="submit">
                            Register
                        </PrimaryFilledButton>
                    </div>
                </RegistrationFormContainer>
            </CenterCard>
        </Container>
    );
};

export default Registration;