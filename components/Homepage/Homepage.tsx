import React
    // ,{useEffect,useState}
    from 'react';
import  {CreatorsData} from '../SponsorsData/SponsorsData';
import {HomepageContainer, CreatorContainer, Creator, CreatorBar, CreatorName, CreatorNameDP, CreatorDescription, CreatorDP, CreatorAddress} from "./HomepageElements";
import Link from "next/link";
// let Web3=require("web3")

const Homepage = () => {
  //
  //   let cList:any[]=[];
  //   let accounts:any;
  //   const userAbi=`[
  //       {
  //         "inputs": [],
  //         "stateMutability": "nonpayable",
  //         "type": "constructor"
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "address",
  //             "name": "",
  //             "type": "address"
  //           }
  //         ],
  //         "name": "isUserPresent",
  //         "outputs": [
  //           {
  //             "internalType": "int256",
  //             "name": "",
  //             "type": "int256"
  //           }
  //         ],
  //         "stateMutability": "view",
  //         "type": "function",
  //         "constant": true
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "address",
  //             "name": "",
  //             "type": "address"
  //           }
  //         ],
  //         "name": "users",
  //         "outputs": [
  //           {
  //             "internalType": "string",
  //             "name": "",
  //             "type": "string"
  //           }
  //         ],
  //         "stateMutability": "view",
  //         "type": "function",
  //         "constant": true
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "string",
  //             "name": "_name",
  //             "type": "string"
  //           }
  //         ],
  //         "name": "addUser",
  //         "outputs": [],
  //         "stateMutability": "nonpayable",
  //         "type": "function"
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "string",
  //             "name": "_name",
  //             "type": "string"
  //           }
  //         ],
  //         "name": "updateName",
  //         "outputs": [],
  //         "stateMutability": "nonpayable",
  //         "type": "function"
  //       }
  //     ]`
  // const Abi=`[
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "creators",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function",
  //     "constant": true
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_title",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_desc",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "createCreator",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function",
  //     "payable": true
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getCreators",
  //     "outputs": [
  //       {
  //         "internalType": "address[]",
  //         "name": "",
  //         "type": "address[]"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function",
  //     "constant": true
  //   }
  // ]`
  // const cAbi=`[
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_creator",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "ttl",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "desc",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "creator",
  //     "outputs": [
  //       {
  //         "internalType": "address payable",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "description",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "donators",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "donation",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "title",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "totalDonations",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getDetails",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_linkName",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_linkSrc",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "addNewLinks",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "donate",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   }
  // ]`
  // const c=new Web3("HTTP://127.0.0.1:7000")
  // function getContractInstance(abi:any,address:any) {
  //
  //     const contract = new c.eth.Contract(JSON.parse(abi), address, {
  //         from: accounts[0],
  //         gas: 2000000,
  //     });
  //     return contract;
  // }
  // async function displayCreators() {
  //
  //     const creatorFactoryContarctInstance = getContractInstance( Abi,'0x97886DA09C0607fAA72CA80C33Be085293192c81')
  //     const res = await creatorFactoryContarctInstance.methods.getCreators().call()
  //
  //     res.forEach(async(e:any)=>{
  //       let ins:any;
  //       ins=getContractInstance(cAbi,e);
  //      console.log(ins.methods)
  //       const data=await ins.methods.getDetails().call()
  //
  //      console.log(data)
  //     })
  //
  //
  // }
  // useEffect(() => {
  //   (window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((res:any)=>{
  //         accounts=res
  //         displayCreators().then(()=>{})
  //
  //      });
  //   }, [])

    return (
        <HomepageContainer>
            <CreatorContainer>
                {CreatorsData.map(creator => (
                    <Link href={`/${creator.address}`} key={creator.address}>
                        <Creator>
                        <CreatorBar>
                            <CreatorNameDP>
                                <CreatorDP src={creator.profilePic}/>
                                <CreatorName>{creator.name}</CreatorName>
                            </CreatorNameDP>
                            <CreatorAddress>{creator.address}</CreatorAddress>
                        </CreatorBar>
                       <CreatorDescription>{creator.description}</CreatorDescription>
                   </Creator>
                    </Link>
                ))
                }
            </CreatorContainer>
        </HomepageContainer>
    );
};

export default Homepage;