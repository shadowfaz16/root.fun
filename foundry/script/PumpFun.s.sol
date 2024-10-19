// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/PumpFun.sol";

contract DeployPumpFun is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        PumpFun pumpFun = new PumpFun();

        vm.stopBroadcast();

        console.log("PumpFun deployed to:", address(pumpFun));
    }
}