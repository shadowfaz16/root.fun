// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    address public owner;

    constructor(string memory name, string memory symbol, uint initialMintValue, address airdropReceiver, uint airdropQty) ERC20(name, symbol) {
        _mint(msg.sender, initialMintValue);
        _mint(airdropReceiver, airdropQty);
        owner = msg.sender;
    }

    function mint(uint mintQty, address receiver) external returns(uint){
        require(msg.sender == owner, "Mint can only be called by the owner");
        _mint(receiver, mintQty);
        return 1;
    }


}