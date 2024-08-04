/**
 *Submitted for verification at polygonscan.com on 2022-08-16
 */

// File: contracts\interfaces\TokenInterfaceV5.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

interface TokenInterfaceV5 {
    function burn(address, uint256) external;

    function mint(address, uint256) external;

    function transfer(address, uint256) external returns (bool);

    function transferFrom(address, address, uint256) external returns (bool);

    function balanceOf(address) external view returns (uint256);

    function hasRole(bytes32, address) external view returns (bool);

    function approve(address, uint256) external returns (bool);

    function allowance(address, address) external view returns (uint256);
}

// File: contracts\GNSStakingV6_2.sol

pragma solidity 0.8.15;

contract GNSStakingV6_2 {
    // Contracts & Addresses
    address public govFund;

    TokenInterfaceV5 public immutable token; // GNS
    TokenInterfaceV5 public immutable dai;

    // Pool state
    uint public accDaiPerToken;
    uint public tokenBalance;

    // Pool parameters
    uint[5] public boostsP;

    // Pool stats
    uint public totalRewardsDistributedDai; // 1e18

    // Mappings
    mapping(address => User) public users;

    struct User {
        uint stakedTokens; // 1e18
        uint debtDai; // 1e18
        uint totalBoostTokens; // 1e18
        uint harvestedRewardsDai; // 1e18
    }

    // Events
    event GovFundUpdated(address value);
    event BoostsUpdated(uint[5] boosts);

    event DaiDistributed(uint amount);

    event DaiHarvested(address indexed user, uint amount);

    event TokensStaked(address indexed user, uint amount);
    event TokensUnstaked(address indexed user, uint amount);

    constructor(
        address _govFund,
        TokenInterfaceV5 _token,
        TokenInterfaceV5 _dai,
        uint[5] memory _boostsP
    ) {
        require(
            _govFund != address(0) &&
                address(_token) != address(0) &&
                address(_dai) != address(0),
            "WRONG_PARAMS"
        );

        checkBoostsP(_boostsP);

        govFund = _govFund;
        token = _token;
        dai = _dai;

        boostsP = _boostsP;
    }

    // Modifiers
    modifier onlyGov() {
        require(msg.sender == govFund, "GOV_ONLY");
        _;
    }
    modifier notContract() {
        require(tx.origin == msg.sender, "CONTRACT");
        _;
    }

    // Manage addresses
    function setGovFund(address value) external onlyGov {
        require(value != address(0), "ADDRESS_0");

        govFund = value;

        emit GovFundUpdated(value);
    }

    // Manage parameters
    function checkBoostsP(uint[5] memory value) public pure {
        require(
            value[0] < value[1] &&
                value[1] < value[2] &&
                value[2] < value[3] &&
                value[3] < value[4],
            "WRONG_VALUES"
        );
    }

    function setBoostsP(uint[5] memory value) external onlyGov {
        checkBoostsP(value);

        boostsP = value;

        emit BoostsUpdated(value);
    }

    // Distribute rewards
    function distributeRewardDai(uint amount) external {
        dai.transferFrom(msg.sender, address(this), amount);

        if (tokenBalance > 0) {
            accDaiPerToken += (amount * 1e18) / tokenBalance;
            totalRewardsDistributedDai += amount;
        }

        emit DaiDistributed(amount);
    }

    // Compute user boosts
    function setBoosts() private {
        User storage u = users[msg.sender];

        u.debtDai = ((u.stakedTokens) * accDaiPerToken) / 1e18;
    }

    // Rewards to be harvested
    function pendingRewardDai() public view returns (uint) {
        User storage u = users[msg.sender];

        return
            ((u.stakedTokens + u.totalBoostTokens) * accDaiPerToken) /
            1e18 -
            u.debtDai;
    }

    // Harvest rewards
    function harvest() public {
        uint pendingDai = pendingRewardDai();

        User storage u = users[msg.sender];
        u.debtDai =
            ((u.stakedTokens + u.totalBoostTokens) * accDaiPerToken) /
            1e18;
        u.harvestedRewardsDai += pendingDai;

        dai.transfer(msg.sender, pendingDai);

        emit DaiHarvested(msg.sender, pendingDai);
    }

    // Stake tokens
    function stakeTokens(uint amount) external {
        User storage u = users[msg.sender];

        token.transferFrom(msg.sender, address(this), amount);

        harvest();

        tokenBalance -= (u.stakedTokens + u.totalBoostTokens);

        u.stakedTokens += amount;
        setBoosts();

        tokenBalance += (u.stakedTokens + u.totalBoostTokens);

        emit TokensStaked(msg.sender, amount);
    }

    // Unstake tokens
    function unstakeTokens(uint amount) external {
        User storage u = users[msg.sender];

        harvest();

        tokenBalance -= (u.stakedTokens + u.totalBoostTokens);

        u.stakedTokens -= amount;
        setBoosts();

        tokenBalance += (u.stakedTokens + u.totalBoostTokens);

        token.transfer(msg.sender, amount);

        emit TokensUnstaked(msg.sender, amount);
    }
}
