// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TokenFactory} from "../src/TokenFactory.sol";
import {Token} from "../src/Token.sol";

contract TokenFactoryTest is Test {
    TokenFactory public tokenFactory;


    function setUp() public {
        tokenFactory = new TokenFactory();
    }

    function test_CreateToken() public {
        string memory name = "My awesome token";
        string memory ticker = "MAT";
        address tokenAddress = tokenFactory.createToken(name, ticker);
        Token token = Token(tokenAddress);
        uint totalSupply = token.totalSupply();

        assertEq(
            token.balanceOf(address(tokenFactory)),
            tokenFactory.INITIAL_MINT()
        );
        assertEq(token.totalSupply(), tokenFactory.INITIAL_MINT());
        assertEq(tokenFactory.tokens(tokenAddress), true);
    }

    function test_CalculateRequiredEth() public {
        string memory name = "My awesome token";
        string memory ticker = "MAT";
        address tokenAddress = tokenFactory.createToken(name, ticker);
        Token token = Token(tokenAddress);

        uint totalBuyableSupply = tokenFactory.MAX_SUPPLY() - tokenFactory.INITIAL_MINT();
        uint requiredEth = tokenFactory.calculateRequiredEth(tokenAddress, totalBuyableSupply);
        assertEq(requiredEth, 30 * 10 ** 18);
    }
}
