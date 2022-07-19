// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {

    uint256 number;
    mapping(uint256 => string[]) private email;

    function push(uint256 token, string memory data) public {
        email[token].push(data);
    }

    function storeData(uint256 token,uint256 index, string memory data) public {
        email[token][index] = data;
    }

    function getData(uint256 token) public view returns(string[] memory){
        return email[token];
    }

    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}