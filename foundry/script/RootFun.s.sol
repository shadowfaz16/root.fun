// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/src/Script.sol";
import "../src/RootFun.sol";

contract DeployRootFun is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        RootFun rootFun = new RootFun();

        vm.stopBroadcast();

        console.log("RootFun deployed at:", address(rootFun));
    }
}