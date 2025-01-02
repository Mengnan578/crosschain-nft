// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {MyToken} from "./MyToken.sol";

contract WrappedMyToken is MyToken {
    constructor(string memory tokenName , string memory tokenSymbol) MyToken(tokenName,tokenSymbol) {}

    // 铸造WrappedMyToken   
    function mintTokenWithSpecificTokenId(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    // 销毁WrappedMyToken
    function burnTokenWithSpecificTokenId(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }
}
