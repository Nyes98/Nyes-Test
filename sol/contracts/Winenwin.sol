// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '../node_modules/@openzeppelin/contracts/access/Ownable.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol';
import '../node_modules/@openzeppelin/contracts/utils/Strings.sol';

/*
 * @dev 멤버십 NFT에 대한 컨트랙트(whitelist이기도 함.)
 */
contract Winenwin is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply, ERC1155URIStorage {
    using Strings for uint256;
    string public name;
    string public symbol;
    string private _baseURI = '';

    /*
     * @dev 화이트 리스트 주소들 모음
     * @notice _tokenURIs : tokenURI를 저장하는 key, value값
     */
    mapping(uint256 => string) private _tokenURIs;

    /*
     * @dev 생성자 함수
     * @param _uri: NFT의 IPFS 주소
     * @param _name: 컬렉션의 이름
     * @param _symbol: 컬렉션의 심볼
     */
    constructor(string memory _uri, string memory _name, string memory _symbol) ERC1155(_uri) {
        name = _name;
        symbol = _symbol;
        _setBaseURI(_uri);
    }

    /*
     * @dev 민팅 기능(NFTs)
     * @param holder: 오너가 아닌 홀더인 이유는 특정 유저들에게 민팅할 수도 있는 상황에 대비
     * @param tokenIds: 발급하려는 NFT의 ID들
     * @param amounts: 발급하려는 NFT의 숫자들
     * @param _tokenURI : 토큰의 주소
     */
    function mintMembershipNFTs(
        address holder,
        uint256[] memory tokenIds,
        uint256[] memory amounts,
        string memory baseURI,
        string memory _tokenURI
    ) external onlyOwner {
        require(holder != address(0), 'Invalid holder address');
        require(amounts.length > 0, 'Array should not be empty.');
        require(bytes(_tokenURI).length > 0, '_tokenURI should not be empty');
        _setBaseURI(baseURI);
        _setURI(tokenIds[0], _tokenURI);
        _mintBatch(holder, tokenIds, amounts, '');
    }

    /*
     * @dev NFT 일괄 전송 기능
     * @param holder: 특정 유저의 계정
     * @param tokenId: 발급하려는 NFT의 ID
     * @param amount: 발급하려는 NFT의 숫자
     */
    function transferMembershipNFT(address holder, uint256 tokenId, uint256 amount) external {
        require(holder != address(0), 'Invalid holder address');
        setApprovalForAll(holder, true);
        safeTransferFrom(msg.sender, holder, tokenId, amount, '');
    }

    /*
     * @dev 일괄 민팅 기능(NFTs)
     * @param holders: 특정 홀더들의 계정들
     * @param tokenId: 발급하려는 NFT의 ID
     * @param amount: 발급하려는 NFT의 숫자
     */
    function mintMembershipBatchNFTs(
        address[] memory holders,
        uint256 tokenId,
        uint256 amount,
        string memory baseURI,
        string memory _tokenURI
    ) external onlyOwner {
        require(amount != 0, 'amount must not be empty');
        require(holders.length > 0, 'Empty address array');

        _setBaseURI(baseURI);

        for (uint256 i = 0; i < holders.length; i++) {
            address holder = holders[i];
            require(holder != address(0), 'Invalid holder address');

            _setURI(tokenId, _tokenURI);
            _mint(holder, tokenId, amount, '');
        }
    }

    /*
     * @dev 일괄 전송 기능
     * @param holder: 특정 유저의 계정
     * @param tokenId: 발급하려는 NFT의 ID
     * @param amount: 발급하려는 NFT의 숫자
     */
    function transferMembershipBatchNFTs(address[] memory holders, uint256 tokenId, uint256 amount) external {
        require(holders.length > 0, 'Empty address array');
        require(amount != 0, 'amount must not be empty');
        for (uint256 i = 0; i < holders.length; i++) {
            address holder = holders[i];
            require(holder != address(0), 'Invalid holder address');
            setApprovalForAll(holder, true);
            safeTransferFrom(msg.sender, holder, tokenId, amount, '');
        }
    }

    /*
     * @dev 기존의 URI를 전체 변경
     * @params newBaseURI : 바꾸려고 하는 전체 URI
     */
    function setBaseURI(string memory newBaseURI) external onlyOwner {
        require(bytes(newBaseURI).length != 0, 'newBaseURI is empty.');
        _setBaseURI(newBaseURI);
    }

    /*
     * @dev token의 URI를 변경
     * @params tokenId : 현재 로직으로는, 몇 번째 배열의 인덱스에 토큰의 URI를 할당할지 정하는 파라미터
     * @params tokenURI : tokenId의 인덱스에 부여할 URI
     */
    function setURI(uint256 tokenId, string memory tokenURI) public onlyOwner {
        require(bytes(tokenURI).length != 0, 'tokenURI is empty.');
        _setURI(tokenId, tokenURI);
    }

    function uri(uint256 tokenId) public view virtual override(ERC1155, ERC1155URIStorage) returns (string memory) {
        string memory tokenURI = _tokenURIs[tokenId];
        return bytes(tokenURI).length > 0 ? string(abi.encodePacked(_baseURI, tokenURI)) : super.uri(tokenId);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    // Fallback function to reject accidental transfers
    fallback() external {
        revert('Fallback function is not supported');
    }
}
