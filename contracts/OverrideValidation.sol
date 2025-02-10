// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract OverrideValidation {
    uint256 public cooldownPeriod;
    address public owner;
    mapping(address => uint256) private lastValidationTime;
    event ValidationSuccessful(address indexed user, uint256 timestamp);
    constructor(uint256 _cooldownPeriod) {
        require(_cooldownPeriod > 0, "Cooldown period must be greater than zero");
        cooldownPeriod = _cooldownPeriod;
        owner=msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    modifier validate() {
        _validate(msg.sender);
        _;
    }
    function _validate(address user) internal {
        require(
            block.timestamp >= lastValidationTime[user] + cooldownPeriod,
            "Cooldown period not over"
        );
        lastValidationTime[user] = block.timestamp;
        emit ValidationSuccessful(user, block.timestamp);
    }

    function getLastValidationTime(address user) external view returns (uint256) {
        return lastValidationTime[user];
    }

    function updateCooldownPeriod(uint256 _newCooldown) external onlyOwner {
        require(_newCooldown > 0, "Cooldown must be greater than zero");
        cooldownPeriod = _newCooldown;
    }
}
