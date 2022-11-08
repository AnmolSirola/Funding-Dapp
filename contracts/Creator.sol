pragma solidity >=0.4.22 <0.9.0;

contract Creator{
    address payable public creator;
    uint public totalDonations = 0;
    string public title ;
    string public description ;
    uint curr_link_idx=0;
    mapping(uint=>string) links;
    mapping(uint=>string) linksName;
    mapping(address=>donator) public donators;
    uint minAmount;

    struct donator{
        uint donation;
    }
    function getDetails() public view returns(string memory,string memory){
        return(title,description);
    }
    constructor(address _creator,string memory ttl, string memory desc){
        creator = payable(_creator);
        title = ttl;
        description = desc;
        minAmount=0;
    }
    function addNewLinks(string memory _linkName,string memory _linkSrc) public{
        links[curr_link_idx]=_linkSrc;
        linksName[curr_link_idx]=_linkName;
        curr_link_idx=curr_link_idx+1;
    }
    function donate() payable public{
        require(msg.value>0,"Donation amount cannot be 0");
        if(donators[msg.sender].donation > 0){
            donators[msg.sender].donation += msg.value;
            totalDonations+= msg.value;
            creator.transfer(address(this).balance);
        }
        else{
            donator memory newDonator = donator({
            donation: msg.value
            });
            donators[msg.sender] = newDonator;
            creator.transfer(address(this).balance);
            totalDonations+= msg.value;
        }
    }
}