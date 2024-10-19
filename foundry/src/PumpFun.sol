// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PumpFun is ReentrancyGuard, Ownable(msg.sender) {
    struct Pool {
        IERC20 token;
        uint256 totalStaked;
        uint256 rewardRate;
        uint256 lastUpdateTime;
        uint256 rewardPerTokenStored;
    }

    struct UserInfo {
        uint256 stakedAmount;
        uint256 rewardDebt;
    }

    mapping(uint256 => Pool) public pools;
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    uint256 public poolCount;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event ClaimRewards(address indexed user, uint256 indexed pid, uint256 amount);

    constructor() {
        // Initialize contract
    }

    function addPool(IERC20 _token, uint256 _rewardRate) external onlyOwner {
        pools[poolCount] = Pool({
            token: _token,
            totalStaked: 0,
            rewardRate: _rewardRate,
            lastUpdateTime: block.timestamp,
            rewardPerTokenStored: 0
        });
        poolCount++;
    }

    function deposit(uint256 _pid, uint256 _amount) external nonReentrant {
        Pool storage pool = pools[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];

        updatePool(_pid);
        if (user.stakedAmount > 0) {
            uint256 pending = (user.stakedAmount * pool.rewardPerTokenStored / 1e18) - user.rewardDebt;
            if (pending > 0) {
                safeTokenTransfer(pool.token, msg.sender, pending);
            }
        }
        if (_amount > 0) {
            pool.token.transferFrom(msg.sender, address(this), _amount);
            user.stakedAmount += _amount;
            pool.totalStaked += _amount;
        }
        user.rewardDebt = user.stakedAmount * pool.rewardPerTokenStored / 1e18;
        emit Deposit(msg.sender, _pid, _amount);
    }

    function withdraw(uint256 _pid, uint256 _amount) external nonReentrant {
        Pool storage pool = pools[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.stakedAmount >= _amount, "Withdraw: not enough balance");

        updatePool(_pid);
        uint256 pending = (user.stakedAmount * pool.rewardPerTokenStored / 1e18) - user.rewardDebt;
        if (pending > 0) {
            safeTokenTransfer(pool.token, msg.sender, pending);
        }
        if (_amount > 0) {
            user.stakedAmount -= _amount;
            pool.totalStaked -= _amount;
            pool.token.transfer(msg.sender, _amount);
        }
        user.rewardDebt = user.stakedAmount * pool.rewardPerTokenStored / 1e18;
        emit Withdraw(msg.sender, _pid, _amount);
    }

    function claimRewards(uint256 _pid) external nonReentrant {
        updatePool(_pid);
        Pool storage pool = pools[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 pending = (user.stakedAmount * pool.rewardPerTokenStored / 1e18) - user.rewardDebt;
        if (pending > 0) {
            safeTokenTransfer(pool.token, msg.sender, pending);
        }
        user.rewardDebt = user.stakedAmount * pool.rewardPerTokenStored / 1e18;
        emit ClaimRewards(msg.sender, _pid, pending);
    }

    function updatePool(uint256 _pid) public {
        Pool storage pool = pools[_pid];
        if (block.timestamp <= pool.lastUpdateTime) {
            return;
        }
        if (pool.totalStaked == 0) {
            pool.lastUpdateTime = block.timestamp;
            return;
        }
        uint256 multiplier = block.timestamp - pool.lastUpdateTime;
        uint256 tokenReward = multiplier * pool.rewardRate;
        pool.rewardPerTokenStored += tokenReward * 1e18 / pool.totalStaked;
        pool.lastUpdateTime = block.timestamp;
    }

    function safeTokenTransfer(IERC20 token, address to, uint256 amount) internal {
        uint256 tokenBal = token.balanceOf(address(this));
        if (amount > tokenBal) {
            token.transfer(to, tokenBal);
        } else {
            token.transfer(to, amount);
        }
    }
}
