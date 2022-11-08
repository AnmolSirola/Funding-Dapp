pragma solidity >=0.5.0 <0.9.0;

contract User{
    mapping(address=>string) public  users ;
    mapping(address=>int) public isUserPresent ;
    constructor(){

    }
    function addUser(string  memory _name) public{
        require(isUserPresent[msg.sender]==0,"User already Created with given address");
        users[msg.sender]=_name;
        isUserPresent[msg.sender]=1;
    }
    function updateName(string  memory _name) public{
        users[msg.sender]=_name;
        isUserPresent[msg.sender]=1;
    }
}