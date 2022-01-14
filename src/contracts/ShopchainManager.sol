// SPDX-License-Identifier: GPL-3.0
// define which compiler to use
// VERSION = 1.0.0
pragma solidity >=0.7.0 <0.9.0;

//contract name is MyFirstFantomContract 
contract ShopchainManager {
    
    address payable private sellerAddress;
    uint private amount;

    event NewTrade (
        uint date,
        address indexed from,
        address to,
        uint amount
    );

    event UnlockContract (
        uint date,
        address to,
        uint amount
    );

    function setParameters(address payable _sellerAddress, uint _amount) public {
        sellerAddress = _sellerAddress;
        amount = _amount;
    }

    function getSellerAddress() public view returns (address) {
        return sellerAddress;
    }

    function getAmount() public view returns (uint) {
        return amount;
    }

    function balanceOf() external view returns(uint) {
        return address(this).balance;
    }

    /*
    function trade(address to, uint amount) external {
        emit NewTrade(block.timestamp, msg.sender, to, amount);
    }
    */

    function sendToContract() public payable {
        //address(this).transfer(msg.value);  // msg.sender is implicity
    }

    function unlockToSeller(string memory unlockCode) external {
        require(
            keccak256(abi.encodePacked(unlockCode)) == keccak256(abi.encodePacked("12345")),
            "Wrong unlock code"
        );

        sellerAddress.transfer(amount);
        emit UnlockContract(block.timestamp, sellerAddress, amount);
    }

}

// Helper functions are defined outside of a contract
