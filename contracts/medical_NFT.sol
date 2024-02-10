// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Mapping from token ID to a list of addresses that are allowed to access the token's URI
    mapping(uint256 => mapping(address => bool)) private _tokenAccess;

    event TokenMinted(address receiver, uint256 tokenId);

    constructor() ERC721("ProfileNFT", "PNFT") {}

    function mintProfileNFT(address receiver, string memory patient_name, string memory conc_cid, string memory conc_pdf_name) public onlyOwner {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        string memory tokenURI = string(abi.encodePacked(patient_name, "/", conc_pdf_name, "/", conc_cid));
        _mint(receiver, newItemId);
        _setTokenURI(newItemId, tokenURI);

        // By default, give the receiver access to the token's URI
        _tokenAccess[newItemId][receiver] = true;

        emit TokenMinted(receiver, newItemId);
    }

    function grantAccess(uint256 tokenId, address user) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can grant access");
        _tokenAccess[tokenId][user] = true;
    }

    function revokeAccess(uint256 tokenId, address user) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can revoke access");
        _tokenAccess[tokenId][user] = false;
    }

    function canAccess(uint256 tokenId, address user) public view returns (bool) {
        return _tokenAccess[tokenId][user];
    }

    // Override function to check for access before returning the URI
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_tokenAccess[tokenId][msg.sender], "You do not have permission to access this token's URI");
        return super.tokenURI(tokenId);
    }
}
