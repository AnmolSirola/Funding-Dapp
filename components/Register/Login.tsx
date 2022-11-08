import React
    // ,{useEffect,useState}
    from "react";
import { Container, CenterCard, Learn2CodePromotion, CustomInputGroup, RegistrationFormContainer, PrimaryFilledButton } from "./RegisterElements";
import { FaEthereum } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { MdTitle } from "react-icons/md";
// import { BsCardText } from "react-icons/bs";
// import Router from 'next/router'
// let Web3=require("web3")
const Registration = () => {
 //    let accounts:any;
 //   const[name,setName] =useState("");
 //   let [ethAddress,setEthAddress]=useState('')
 //   const userAbi=`[
 //    {
 //      "inputs": [],
 //      "stateMutability": "nonpayable",
 //      "type": "constructor"
 //    },
 //    {
 //      "inputs": [
 //        {
 //          "internalType": "address",
 //          "name": "",
 //          "type": "address"
 //        }
 //      ],
 //      "name": "isUserPresent",
 //      "outputs": [
 //        {
 //          "internalType": "int256",
 //          "name": "",
 //          "type": "int256"
 //        }
 //      ],
 //      "stateMutability": "view",
 //      "type": "function",
 //      "constant": true
 //    },
 //    {
 //      "inputs": [
 //        {
 //          "internalType": "address",
 //          "name": "",
 //          "type": "address"
 //        }
 //      ],
 //      "name": "users",
 //      "outputs": [
 //        {
 //          "internalType": "string",
 //          "name": "",
 //          "type": "string"
 //        }
 //      ],
 //      "stateMutability": "view",
 //      "type": "function",
 //      "constant": true
 //    },
 //    {
 //      "inputs": [
 //        {
 //          "internalType": "string",
 //          "name": "_name",
 //          "type": "string"
 //        }
 //      ],
 //      "name": "addUser",
 //      "outputs": [],
 //      "stateMutability": "nonpayable",
 //      "type": "function"
 //    },
 //    {
 //      "inputs": [
 //        {
 //          "internalType": "string",
 //          "name": "_name",
 //          "type": "string"
 //        }
 //      ],
 //      "name": "updateName",
 //      "outputs": [],
 //      "stateMutability": "nonpayable",
 //      "type": "function"
 //    }
 // ]`
 //    const c=new Web3("HTTP://127.0.0.1:7000")
 //    const handleSubmit = (e:any) => {
 //        e.preventDefault()
 //        addUser().then(()=>{})
 //    };
 //    function getContractInstance(abi:any,address:any) {
 //        const contract = new c.eth.Contract (JSON.parse(abi), address, {
 //            from: accounts[0],
 //            gas: 2000000,
 //        });
 //        return contract;
 //    }
 //    async function addUser(){
 //        console.log(name)
 //        getContractInstance(userAbi,'0x28049eedc322b6B517B176e60acBbebEd64e2b9A').methods.addUser(name).send({from:accounts[0]}).then((res:any)=>{
 //            console.log(res)
 //            setTimeout(()=>{        Router.push('/')},2000)
 //
 //        }).catch((e:any)=>{
 //            console.log(e)
 //        })
 //    }
 //    useEffect(()=>{
 //        (window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((res:any)=>{
 //            accounts=res
 //            setEthAddress(accounts[0])
 //            console.log(ethAddress)
 //        })
 //    })
    return (
        <Container>
            <CenterCard>
                <Learn2CodePromotion>
                    <div id="reg-promo-content">
                        <span className="brand-logo">RiseME</span>
                        <h1 className="leading-title">Best place for Creators</h1>
                        {/*<span>Watch Demo</span>*/}
                        {/*<ul className="nav-links">*/}
                        {/*    <li>Home</li>*/}
                        {/*</ul>*/}
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
                                <FaUserCircle />
                            </span>
                            <input type="text" placeholder="Username" aria-label="Username"
                                   // value={name} onChange={(e)=>{setName(e.target.value)}}
                            />
                        </CustomInputGroup>
                        <CustomInputGroup>
                            <span>
                                <FaEthereum />
                            </span>
                            <input type="text" placeholder="Eth Address"
                                   // value={ethAddress}
                                   aria-label="Eth Address"
                            />
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
                    </div>
                </RegistrationFormContainer>
            </CenterCard>
        </Container>
    );
};

export default Registration;