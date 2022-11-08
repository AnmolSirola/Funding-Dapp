import "./Creator.sol";
pragma solidity >=0.4.22 <0.9.0;
contract CreatorFactory{
    address[] public creators;

    function createCreator(string  memory _title,string memory _desc)  public payable {
      creators.push(address(new Creator(address(msg.sender),_title,_desc)));
    }
    function getCreators() public view returns(address [] memory){
        return creators;

    }

}