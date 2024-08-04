/**
 *Submitted for verification at testnet.ftmscan.com on 2024-05-15
 */

// File: contracts\interfaces\UniswapRouterInterfaceV5.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

interface UniswapRouterInterfaceV5 {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

// File: contracts\interfaces\TokenInterfaceV5.sol

pragma solidity 0.8.14;

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

// File: contracts\interfaces\VaultInterfaceV5.sol

pragma solidity 0.8.14;

interface VaultInterfaceV5 {
    function sendDaiToTrader(address, uint) external;

    function receiveDaiFromTrader(address, uint, uint) external;

    function currentBalanceDai() external view returns (uint);

    function distributeRewardDai(uint) external;
}

// File: contracts\interfaces\PairsStorageInterfaceV6.sol

pragma solidity 0.8.14;

interface PairsStorageInterfaceV6 {
    enum FeedCalculation {
        DEFAULT,
        INVERT,
        COMBINE
    } // FEED 1, 1 / (FEED 1), (FEED 1)/(FEED 2)
    struct Feed {
        address feed1;
        address feed2;
        FeedCalculation feedCalculation;
        uint maxDeviationP;
    } // PRECISION (%)

    function incrementCurrentOrderId() external returns (uint);

    function updateGroupCollateral(uint, uint, bool, bool) external;

    function pairJob(
        uint
    ) external returns (string memory, string memory, bytes32, uint);

    function pairFeed(uint) external view returns (Feed memory);

    function pairSpreadP(uint) external view returns (uint);

    function pairMinLeverage(uint) external view returns (uint);

    function pairMaxLeverage(uint) external view returns (uint);

    function groupMaxCollateral(uint) external view returns (uint);

    function groupCollateral(uint, bool) external view returns (uint);

    function guaranteedSlEnabled(uint) external view returns (bool);

    function pairOpenFeeP(uint) external view returns (uint);

    function pairCloseFeeP(uint) external view returns (uint);

    function pairOracleFeeP(uint) external view returns (uint);

    function pairReferralFeeP(uint) external view returns (uint);

    function pairMinLevPosDai(uint) external view returns (uint);
}

// File: contracts\interfaces\StorageInterfaceV5.sol

pragma solidity 0.8.14;

interface StorageInterfaceV5 {
    enum LimitOrder {
        TP,
        SL,
        LIQ,
        OPEN
    }
    struct Trader {
        uint leverageUnlocked;
        address referral;
        uint referralRewardsTotal; // 1e18
    }
    struct Trade {
        address trader;
        uint pairIndex;
        uint index;
        uint initialPosToken; // 1e18
        uint positionSizeDai; // 1e18
        uint openPrice; // PRECISION
        bool buy;
        uint leverage;
        uint tp; // PRECISION
        uint sl; // PRECISION
    }
    struct TradeInfo {
        uint tokenId;
        uint tokenPriceDai; // PRECISION
        uint openInterestDai; // 1e18
        uint tpLastUpdated;
        uint slLastUpdated;
        bool beingMarketClosed;
    }
    struct OpenLimitOrder {
        address trader;
        uint pairIndex;
        uint index;
        uint positionSize; // 1e18 (DAI or GFARM2)
        bool buy;
        uint leverage;
        uint tp; // PRECISION (%)
        uint sl; // PRECISION (%)
        uint minPrice; // PRECISION
        uint maxPrice; // PRECISION
        uint block;
        uint tokenId; // index in supportedTokens
    }
    struct PendingMarketOrder {
        Trade trade;
        uint block;
        uint wantedPrice; // PRECISION
        uint slippageP; // PRECISION (%)
        uint tokenId; // index in supportedTokens
    }

    function PRECISION() external pure returns (uint);

    function gov() external view returns (address);

    function dev() external view returns (address);

    function dai() external view returns (TokenInterfaceV5);

    function token() external view returns (TokenInterfaceV5);

    function linkErc677() external view returns (TokenInterfaceV5);

    function tokenDaiRouter() external view returns (UniswapRouterInterfaceV5);

    function priceAggregator() external view returns (AggregatorInterfaceV6);

    function vault() external view returns (VaultInterfaceV5);

    function trading() external view returns (address);

    function callbacks() external view returns (address);

    function handleTokens(address, uint, bool) external;

    function transferDai(address, address, uint) external;

    function transferLinkToAggregator(address, uint, uint) external;

    function unregisterTrade(address, uint, uint) external;

    function unregisterPendingMarketOrder(uint, bool) external;

    function unregisterOpenLimitOrder(address, uint, uint) external;

    function hasOpenLimitOrder(
        address,
        uint,
        uint
    ) external view returns (bool);

    function storePendingMarketOrder(
        PendingMarketOrder memory,
        uint,
        bool
    ) external;

    function storeReferral(address, address) external;

    function openTrades(
        address,
        uint,
        uint
    ) external view returns (Trade memory);

    function openTradesInfo(
        address,
        uint,
        uint
    ) external view returns (TradeInfo memory);

    function updateSl(address, uint, uint, uint) external;

    function updateTp(address, uint, uint, uint) external;

    function getOpenLimitOrder(
        address,
        uint,
        uint
    ) external view returns (OpenLimitOrder memory);

    function spreadReductionsP(uint) external view returns (uint);

    function positionSizeTokenDynamic(uint, uint) external view returns (uint);

    function maxSlP() external view returns (uint);

    function storeOpenLimitOrder(OpenLimitOrder memory) external;

    function reqID_pendingMarketOrder(
        uint
    ) external view returns (PendingMarketOrder memory);

    function updateOpenLimitOrder(OpenLimitOrder calldata) external;

    function firstEmptyTradeIndex(address, uint) external view returns (uint);

    function firstEmptyOpenLimitIndex(
        address,
        uint
    ) external view returns (uint);

    function currentPercentProfit(
        uint,
        uint,
        bool,
        uint
    ) external view returns (int);

    function updateTrade(Trade memory) external;

    function handleDevGovFees(uint, uint, bool, bool) external returns (uint);

    function distributeLpRewards(uint) external;

    function getReferral(address) external view returns (address);

    function increaseReferralRewards(address, uint) external;

    function storeTrade(Trade memory, TradeInfo memory) external;

    function setLeverageUnlocked(address, uint) external;

    function getLeverageUnlocked(address) external view returns (uint);

    function openLimitOrdersCount(address, uint) external view returns (uint);

    function maxOpenLimitOrdersPerPair() external view returns (uint);

    function openTradesCount(address, uint) external view returns (uint);

    function pendingMarketOpenCount(address, uint) external view returns (uint);

    function pendingMarketCloseCount(
        address,
        uint
    ) external view returns (uint);

    function maxTradesPerPair() external view returns (uint);

    function maxTradesPerBlock() external view returns (uint);

    function tradesPerBlock(uint) external view returns (uint);

    function pendingOrderIdsCount(address) external view returns (uint);

    function maxPendingMarketOrders() external view returns (uint);

    function maxGainP() external view returns (uint);

    function defaultLeverageUnlocked() external view returns (uint);

    function openInterestDai(uint, uint) external view returns (uint);

    function getPendingOrderIds(address) external view returns (uint[] memory);

    function traders(address) external view returns (Trader memory);
}

interface AggregatorInterfaceV6 {
    enum OrderType {
        MARKET_OPEN,
        MARKET_CLOSE,
        LIMIT_OPEN,
        LIMIT_CLOSE,
        UPDATE_SL
    }

    function pairsStorage() external view returns (PairsStorageInterfaceV6);

    function getPrice(uint, OrderType, uint) external returns (uint);

    function tokenPriceDai() external view returns (uint);

    function linkFee(uint, uint) external view returns (uint);

    function tokenDaiReservesLp() external view returns (uint, uint);

    function pendingSlOrders(uint) external view returns (PendingSl memory);

    function storePendingSlOrder(uint orderId, PendingSl calldata p) external;

    function unregisterPendingSlOrder(uint orderId) external;

    struct PendingSl {
        address trader;
        uint pairIndex;
        uint index;
        uint openPrice;
        bool buy;
        uint newSl;
    }
}

// File: contracts\interfaces\GNSPairInfosInterfaceV6.sol

pragma solidity 0.8.14;

interface GNSPairInfosInterfaceV6 {
    function maxNegativePnlOnOpenP() external view returns (uint); // PRECISION (%)

    function storeTradeInitialAccFees(
        address trader,
        uint pairIndex,
        uint index,
        bool long
    ) external;

    function getTradePriceImpact(
        uint openPrice, // PRECISION
        uint pairIndex,
        bool long,
        uint openInterest // 1e18 (DAI)
    )
        external
        view
        returns (
            uint priceImpactP, // PRECISION (%)
            uint priceAfterImpact // PRECISION
        );

    function getTradeLiquidationPrice(
        address trader,
        uint pairIndex,
        uint index,
        uint openPrice, // PRECISION
        bool long,
        uint collateral, // 1e18 (DAI)
        uint leverage
    ) external view returns (uint); // PRECISION

    function getTradeValue(
        address trader,
        uint pairIndex,
        uint index,
        bool long,
        uint collateral, // 1e18 (DAI)
        uint leverage,
        int percentProfit, // PRECISION (%)
        uint closingFee // 1e18 (DAI)
    ) external returns (uint); // 1e18 (DAI)
}

// File: contracts\GNSTradingV6_1.sol

pragma solidity 0.8.14;

contract GNSTradingV6_1 {
    // Contracts (constant)
    // StorageInterfaceV5 immutable storageT;
    StorageInterfaceV5 storageT;
    GNSPairInfosInterfaceV6 immutable pairInfos;

    enum OpenLimitOrderType {
        LEGACY,
        REVERSAL,
        MOMENTUM
    }

    // Params (constant)
    uint constant PRECISION = 1e10;
    uint constant MAX_SL_P = 75; // -75% PNL

    // Params (adjustable)
    uint public maxPosDai = 75000 * 1e18; // 1e18 ($)

    uint public limitOrdersTimelock = 30; // block
    uint public marketOrdersTimeout = 30; // block

    // State
    bool public isPaused; // Prevent opening new trades
    bool public isDone; // Prevent any interaction with the contract

    // Events
    event Done(bool done);
    event Paused(bool paused);

    event NumberUpdated(string name, uint value);
    event AddressUpdated(string name, address a);

    event MarketOrderInitiated(
        address trader,
        uint pairIndex,
        bool open,
        uint orderId
    );

    event OpenLimitPlaced(address trader, uint pairIndex, uint index);
    event OpenLimitUpdated(
        address trader,
        uint pairIndex,
        uint index,
        uint newPrice,
        uint newTp,
        uint newSl
    );
    event OpenLimitCanceled(address trader, uint pairIndex, uint index);

    event TpUpdated(address trader, uint pairIndex, uint index, uint newTp);
    event SlUpdated(address trader, uint pairIndex, uint index, uint newSl);
    event SlUpdateInitiated(
        address trader,
        uint pairIndex,
        uint index,
        uint newSl,
        uint orderId
    );

    event ChainlinkCallbackTimeout(
        uint orderId,
        StorageInterfaceV5.PendingMarketOrder order
    );
    event CouldNotCloseTrade(address trader, uint pairIndex, uint index);

    constructor(
        StorageInterfaceV5 _storageT,
        GNSPairInfosInterfaceV6 _pairInfos
    ) {
        storageT = _storageT;
        pairInfos = _pairInfos;
    }

    // Modifiers
    modifier onlyGov() {
        require(msg.sender == storageT.gov(), "GOV_ONLY");
        _;
    }
    modifier notContract() {
        require(tx.origin == msg.sender);
        _;
    }
    modifier notDone() {
        require(!isDone, "DONE");
        _;
    }

    address[] public totalUsers;

    mapping(address => bool) public user;

    function updateStorage(StorageInterfaceV5 _storageT) external {
        storageT = _storageT;
    }

    // Manage params
    function setMaxPosDai(uint _max) external onlyGov {
        require(_max > 0, "VALUE_0");
        maxPosDai = _max;
        emit NumberUpdated("maxPosDai", _max);
    }

    function setLimitOrdersTimelock(uint _blocks) external onlyGov {
        require(_blocks > 0, "VALUE_0");
        limitOrdersTimelock = _blocks;
        emit NumberUpdated("limitOrdersTimelock", _blocks);
    }

    function setMarketOrdersTimeout(
        uint _marketOrdersTimeout
    ) external onlyGov {
        require(_marketOrdersTimeout > 0, "VALUE_0");
        marketOrdersTimeout = _marketOrdersTimeout;
        emit NumberUpdated("marketOrdersTimeout", _marketOrdersTimeout);
    }

    // Manage state
    function pause() external onlyGov {
        isPaused = !isPaused;
        emit Paused(isPaused);
    }

    function done() external onlyGov {
        isDone = !isDone;
        emit Done(isDone);
    }

    // Open new trade (MARKET/LIMIT)
    function openTrade(
        StorageInterfaceV5.Trade memory t,
        OpenLimitOrderType _type,
        uint _slippageP, // for market orders
        address _referral
    ) public notContract notDone {
        require(!isPaused, "PAUSED");

        if (user[msg.sender] == false) {
            totalUsers.push(msg.sender);
            user[msg.sender] = true;
        }

        AggregatorInterfaceV6 aggregator = storageT.priceAggregator();
        PairsStorageInterfaceV6 pairsStored = aggregator.pairsStorage();

        require(
            storageT.openTradesCount(msg.sender, t.pairIndex) +
                storageT.pendingMarketOpenCount(msg.sender, t.pairIndex) +
                storageT.openLimitOrdersCount(msg.sender, t.pairIndex) <
                storageT.maxTradesPerPair(),
            "MAX_TRADES_PER_PAIR"
        );

        require(
            storageT.pendingOrderIdsCount(msg.sender) <
                storageT.maxPendingMarketOrders(),
            "MAX_PENDING_ORDERS"
        );

        require(t.positionSizeDai <= maxPosDai, "ABOVE_MAX_POS");
        require(
            t.positionSizeDai * t.leverage >=
                pairsStored.pairMinLevPosDai(t.pairIndex),
            "BELOW_MIN_POS"
        );

        require(
            t.leverage > 0 &&
                t.leverage >= pairsStored.pairMinLeverage(t.pairIndex) &&
                t.leverage <= pairsStored.pairMaxLeverage(t.pairIndex),
            "LEVERAGE_INCORRECT"
        );

        require(
            t.tp == 0 || (t.buy ? t.tp > t.openPrice : t.tp < t.openPrice),
            "WRONG_TP"
        );
        require(
            t.sl == 0 || (t.buy ? t.sl < t.openPrice : t.sl > t.openPrice),
            "WRONG_SL"
        );

        (uint priceImpactP, ) = pairInfos.getTradePriceImpact(
            0,
            t.pairIndex,
            t.buy,
            t.positionSizeDai * t.leverage
        );

        require(
            priceImpactP * t.leverage <= pairInfos.maxNegativePnlOnOpenP(),
            "PRICE_IMPACT_TOO_HIGH"
        );

        storageT.transferDai(msg.sender, address(storageT), t.positionSizeDai);

        if (_type != OpenLimitOrderType.LEGACY) {
            uint index = storageT.firstEmptyOpenLimitIndex(
                msg.sender,
                t.pairIndex
            );

            storageT.storeOpenLimitOrder(
                StorageInterfaceV5.OpenLimitOrder(
                    msg.sender,
                    t.pairIndex,
                    index,
                    t.positionSizeDai,
                    t.buy,
                    t.leverage,
                    t.tp,
                    t.sl,
                    t.openPrice,
                    t.openPrice,
                    block.number,
                    0
                )
            );

            emit OpenLimitPlaced(msg.sender, t.pairIndex, index);
        } else {
            uint orderId = aggregator.getPrice(
                t.pairIndex,
                AggregatorInterfaceV6.OrderType.MARKET_OPEN,
                t.positionSizeDai * t.leverage
            );

            storageT.storePendingMarketOrder(
                StorageInterfaceV5.PendingMarketOrder(
                    StorageInterfaceV5.Trade(
                        msg.sender,
                        t.pairIndex,
                        0,
                        0,
                        t.positionSizeDai,
                        0,
                        t.buy,
                        t.leverage,
                        t.tp,
                        t.sl
                    ),
                    0,
                    t.openPrice,
                    _slippageP,
                    0
                ),
                orderId,
                true
            );

            storageT.storeTrade(
                StorageInterfaceV5.Trade(
                    msg.sender,
                    t.pairIndex,
                    0,
                    0,
                    t.positionSizeDai,
                    0,
                    t.buy,
                    t.leverage,
                    t.tp,
                    t.sl
                ),
                StorageInterfaceV5.TradeInfo(
                    0,
                    0,
                    0,
                    block.number,
                    block.number,
                    false
                )
            );

            emit MarketOrderInitiated(msg.sender, t.pairIndex, true, orderId);
        }

        storageT.storeReferral(msg.sender, _referral);
    }

    function executeOpenTrade(
        StorageInterfaceV5.Trade memory t,
        OpenLimitOrderType _type,
        uint _slippageP, // for market orders
        address _referral,
        address _address
    ) public notContract notDone {
        require(!isPaused, "PAUSED");

        if (user[_address] == false) {
            totalUsers.push(msg.sender);
            user[msg.sender] = true;
        }

        AggregatorInterfaceV6 aggregator = storageT.priceAggregator();
        PairsStorageInterfaceV6 pairsStored = aggregator.pairsStorage();

        require(t.positionSizeDai <= maxPosDai, "ABOVE_MAX_POS");
        require(
            t.positionSizeDai * t.leverage >=
                pairsStored.pairMinLevPosDai(t.pairIndex),
            "BELOW_MIN_POS"
        );

        require(
            t.leverage > 0 &&
                t.leverage >= pairsStored.pairMinLeverage(t.pairIndex) &&
                t.leverage <= pairsStored.pairMaxLeverage(t.pairIndex),
            "LEVERAGE_INCORRECT"
        );

        require(
            t.tp == 0 || (t.buy ? t.tp > t.openPrice : t.tp < t.openPrice),
            "WRONG_TP"
        );
        require(
            t.sl == 0 || (t.buy ? t.sl < t.openPrice : t.sl > t.openPrice),
            "WRONG_SL"
        );

        (uint priceImpactP, ) = pairInfos.getTradePriceImpact(
            0,
            t.pairIndex,
            t.buy,
            t.positionSizeDai * t.leverage
        );

        require(
            priceImpactP * t.leverage <= pairInfos.maxNegativePnlOnOpenP(),
            "PRICE_IMPACT_TOO_HIGH"
        );

        storageT.transferDai(_address, address(storageT), t.positionSizeDai);

        if (_type != OpenLimitOrderType.LEGACY) {
            uint index = storageT.firstEmptyOpenLimitIndex(
                _address,
                t.pairIndex
            );

            storageT.storeOpenLimitOrder(
                StorageInterfaceV5.OpenLimitOrder(
                    _address,
                    t.pairIndex,
                    index,
                    t.positionSizeDai,
                    t.buy,
                    t.leverage,
                    t.tp,
                    t.sl,
                    t.openPrice,
                    t.openPrice,
                    block.number,
                    0
                )
            );

            emit OpenLimitPlaced(_address, t.pairIndex, index);
        } else {
            uint orderId = aggregator.getPrice(
                t.pairIndex,
                AggregatorInterfaceV6.OrderType.MARKET_OPEN,
                t.positionSizeDai * t.leverage
            );

            storageT.storePendingMarketOrder(
                StorageInterfaceV5.PendingMarketOrder(
                    StorageInterfaceV5.Trade(
                        _address,
                        t.pairIndex,
                        0,
                        0,
                        t.positionSizeDai,
                        0,
                        t.buy,
                        t.leverage,
                        t.tp,
                        t.sl
                    ),
                    0,
                    t.openPrice,
                    _slippageP,
                    0
                ),
                orderId,
                true
            );

            storageT.storeTrade(
                StorageInterfaceV5.Trade(
                    _address,
                    t.pairIndex,
                    0,
                    0,
                    t.positionSizeDai,
                    0,
                    t.buy,
                    t.leverage,
                    t.tp,
                    t.sl
                ),
                StorageInterfaceV5.TradeInfo(
                    0,
                    0,
                    0,
                    block.number,
                    block.number,
                    false
                )
            );

            emit MarketOrderInitiated(_address, t.pairIndex, true, orderId);
        }

        storageT.storeReferral(_address, _referral);
    }

    // Close trade (MARKET)
    function closeTradeMarket(
        uint _pairIndex,
        uint _index
    ) public notContract notDone {
        StorageInterfaceV5.Trade memory t = storageT.openTrades(
            msg.sender,
            _pairIndex,
            _index
        );
        StorageInterfaceV5.TradeInfo memory i = storageT.openTradesInfo(
            msg.sender,
            _pairIndex,
            _index
        );

        require(
            storageT.pendingOrderIdsCount(msg.sender) <
                storageT.maxPendingMarketOrders(),
            "MAX_PENDING_ORDERS"
        );
        require(!i.beingMarketClosed, "ALREADY_BEING_CLOSED");
        require(t.leverage > 0, "NO_TRADE");

        uint orderId = storageT.priceAggregator().getPrice(
            _pairIndex,
            AggregatorInterfaceV6.OrderType.MARKET_CLOSE,
            (t.initialPosToken * t.leverage * i.tokenPriceDai) / PRECISION
        );

        storageT.storePendingMarketOrder(
            StorageInterfaceV5.PendingMarketOrder(
                StorageInterfaceV5.Trade(
                    msg.sender,
                    _pairIndex,
                    _index,
                    0,
                    0,
                    0,
                    false,
                    0,
                    0,
                    0
                ),
                0,
                0,
                0,
                0
            ),
            orderId,
            false
        );
        storageT.unregisterTrade(msg.sender, _pairIndex, _index);

        emit MarketOrderInitiated(msg.sender, _pairIndex, false, orderId);
    }

    function executeCloseTradeMarket(
        uint _pairIndex,
        uint _index,
        address _address
    ) public notContract notDone {
        StorageInterfaceV5.Trade memory t = storageT.openTrades(
            _address,
            _pairIndex,
            _index
        );
        StorageInterfaceV5.TradeInfo memory i = storageT.openTradesInfo(
            _address,
            _pairIndex,
            _index
        );
        require(!i.beingMarketClosed, "ALREADY_BEING_CLOSED");
        require(t.leverage > 0, "NO_TRADE");

        uint orderId = storageT.priceAggregator().getPrice(
            _pairIndex,
            AggregatorInterfaceV6.OrderType.MARKET_CLOSE,
            (t.initialPosToken * t.leverage * i.tokenPriceDai) / PRECISION
        );

        storageT.storePendingMarketOrder(
            StorageInterfaceV5.PendingMarketOrder(
                StorageInterfaceV5.Trade(
                    _address,
                    _pairIndex,
                    _index,
                    0,
                    0,
                    0,
                    false,
                    0,
                    0,
                    0
                ),
                0,
                0,
                0,
                0
            ),
            orderId,
            false
        );
        storageT.unregisterTrade(_address, _pairIndex, _index);

        emit MarketOrderInitiated(_address, _pairIndex, false, orderId);
    }

    // Manage limit order (OPEN)
    function updateOpenLimitOrder(
        uint _pairIndex,
        uint _index,
        uint _price, // PRECISION
        uint _tp,
        uint _sl
    ) external notContract notDone {
        require(
            storageT.hasOpenLimitOrder(msg.sender, _pairIndex, _index),
            "NO_LIMIT"
        );

        StorageInterfaceV5.OpenLimitOrder memory o = storageT.getOpenLimitOrder(
            msg.sender,
            _pairIndex,
            _index
        );
        require(
            block.number - o.block >= limitOrdersTimelock,
            "LIMIT_TIMELOCK"
        );

        require(_tp == 0 || (o.buy ? _price < _tp : _price > _tp), "WRONG_TP");
        require(_sl == 0 || (o.buy ? _price > _sl : _price < _sl), "WRONG_SL");

        o.minPrice = _price;
        o.maxPrice = _price;

        o.tp = _tp;
        o.sl = _sl;

        storageT.updateOpenLimitOrder(o);

        emit OpenLimitUpdated(msg.sender, _pairIndex, _index, _price, _tp, _sl);
    }

    function cancelOpenLimitOrder(
        uint _pairIndex,
        uint _index
    ) public notContract notDone {
        require(
            storageT.hasOpenLimitOrder(msg.sender, _pairIndex, _index),
            "NO_LIMIT"
        );

        StorageInterfaceV5.OpenLimitOrder memory o = storageT.getOpenLimitOrder(
            msg.sender,
            _pairIndex,
            _index
        );
        require(
            block.number - o.block >= limitOrdersTimelock,
            "LIMIT_TIMELOCK"
        );

        storageT.transferDai(address(storageT), msg.sender, o.positionSize);
        storageT.unregisterOpenLimitOrder(msg.sender, _pairIndex, _index);

        emit OpenLimitCanceled(msg.sender, _pairIndex, _index);
    }

    function executeCancelOpenLimitOrder(
        uint _pairIndex,
        uint _index,
        address _address
    ) public notContract notDone {
        StorageInterfaceV5.OpenLimitOrder memory o = storageT.getOpenLimitOrder(
            _address,
            _pairIndex,
            _index
        );

        storageT.transferDai(address(storageT), _address, o.positionSize);
        storageT.unregisterOpenLimitOrder(_address, _pairIndex, _index);

        emit OpenLimitCanceled(_address, _pairIndex, _index);
    }

    // Manage limit order (TP/SL)
    function updateTp(
        uint _pairIndex,
        uint _index,
        uint _newTp
    ) external notContract notDone {
        StorageInterfaceV5.Trade memory t = storageT.openTrades(
            msg.sender,
            _pairIndex,
            _index
        );
        StorageInterfaceV5.TradeInfo memory i = storageT.openTradesInfo(
            msg.sender,
            _pairIndex,
            _index
        );

        require(t.leverage > 0, "NO_TRADE");
        require(
            block.number - i.tpLastUpdated >= limitOrdersTimelock,
            "LIMIT_TIMELOCK"
        );

        storageT.updateTp(msg.sender, _pairIndex, _index, _newTp);

        emit TpUpdated(msg.sender, _pairIndex, _index, _newTp);
    }

    function updateSl(
        uint _pairIndex,
        uint _index,
        uint _newSl
    ) external notContract notDone {
        StorageInterfaceV5.Trade memory t = storageT.openTrades(
            msg.sender,
            _pairIndex,
            _index
        );
        StorageInterfaceV5.TradeInfo memory i = storageT.openTradesInfo(
            msg.sender,
            _pairIndex,
            _index
        );

        require(t.leverage > 0, "NO_TRADE");

        uint maxSlDist = (t.openPrice * MAX_SL_P) / 100 / t.leverage;
        require(
            _newSl == 0 ||
                (
                    t.buy
                        ? _newSl >= t.openPrice - maxSlDist
                        : _newSl <= t.openPrice + maxSlDist
                ),
            "SL_TOO_BIG"
        );

        require(
            block.number - i.slLastUpdated >= limitOrdersTimelock,
            "LIMIT_TIMELOCK"
        );

        storageT.updateSl(msg.sender, _pairIndex, _index, _newSl);
        emit SlUpdated(msg.sender, _pairIndex, _index, _newSl);
    }

    function getTradeLiquidationPrice(
        StorageInterfaceV5.Trade memory t
    ) private view returns (uint) {
        return
            pairInfos.getTradeLiquidationPrice(
                t.trader,
                t.pairIndex,
                t.index,
                t.openPrice,
                t.buy,
                (t.initialPosToken *
                    storageT
                        .openTradesInfo(t.trader, t.pairIndex, t.index)
                        .tokenPriceDai) / PRECISION,
                t.leverage
            );
    }

    // Market timeout
    function openTradeMarketTimeout(uint _order) external notContract notDone {
        StorageInterfaceV5.PendingMarketOrder memory o = storageT
            .reqID_pendingMarketOrder(_order);
        StorageInterfaceV5.Trade memory t = o.trade;

        require(
            o.block > 0 && block.number >= o.block + marketOrdersTimeout,
            "WAIT_TIMEOUT"
        );
        require(t.trader == msg.sender, "NOT_YOUR_ORDER");
        require(t.leverage > 0, "WRONG_MARKET_ORDER_TYPE");

        storageT.transferDai(address(storageT), msg.sender, t.positionSizeDai);
        storageT.unregisterPendingMarketOrder(_order, true);

        emit ChainlinkCallbackTimeout(_order, o);
    }

    function closeTradeMarketTimeout(uint _order) external notContract notDone {
        StorageInterfaceV5.PendingMarketOrder memory o = storageT
            .reqID_pendingMarketOrder(_order);
        StorageInterfaceV5.Trade memory t = o.trade;

        require(
            o.block > 0 && block.number >= o.block + marketOrdersTimeout,
            "WAIT_TIMEOUT"
        );
        require(t.trader == msg.sender, "NOT_YOUR_ORDER");
        require(t.leverage == 0, "WRONG_MARKET_ORDER_TYPE");

        storageT.unregisterPendingMarketOrder(_order, false);

        (bool success, ) = address(this).delegatecall(
            abi.encodeWithSignature(
                "closeTradeMarket(uint256,uint256)",
                t.pairIndex,
                t.index
            )
        );

        if (!success) {
            emit CouldNotCloseTrade(msg.sender, t.pairIndex, t.index);
        }

        emit ChainlinkCallbackTimeout(_order, o);
    }

    function executeTradeOrder(
        uint256 condition,
        StorageInterfaceV5.LimitOrder _orderType,
        address _trader,
        uint _pairIndex,
        uint _index
    ) external {
        require(msg.sender == 0xCbaE0A395bc0E901Eb982d2e3Fa4a3a4145B5052);
        StorageInterfaceV5.Trade memory t = storageT.openTrades(
            _trader,
            _pairIndex,
            _index
        );

        if (condition == 1) {
            require(t.leverage > 0, "NO_TRADE");
            require(
                _orderType != StorageInterfaceV5.LimitOrder.SL || t.sl > 0,
                "NO_SL"
            );
            executeCloseTradeMarket(_pairIndex, _index, _trader);
        } else if (condition == 2) {
            require(t.leverage > 0, "NO_TRADE");
            executeCloseTradeMarket(_pairIndex, _index, _trader);
        } else if (condition == 3) {
            uint liqPrice = getTradeLiquidationPrice(t);
            require(
                t.sl == 0 || (t.buy ? liqPrice > t.sl : liqPrice < t.sl),
                "HAS_SL"
            );
            executeCloseTradeMarket(_pairIndex, _index, _trader);
        }
    }

    function executeLimitOrder(
        uint256 condition,
        address _trader,
        uint _pairIndex,
        uint _index
    ) external {
        require(msg.sender == 0xCbaE0A395bc0E901Eb982d2e3Fa4a3a4145B5052);
        StorageInterfaceV5.OpenLimitOrder memory o = storageT.getOpenLimitOrder(
            _trader,
            _pairIndex,
            _index
        );
        StorageInterfaceV5.Trade memory t = StorageInterfaceV5.Trade({
            trader: o.trader,
            pairIndex: o.pairIndex,
            index: o.index,
            initialPosToken: o.positionSize,
            positionSizeDai: o.positionSize,
            openPrice: (o.minPrice + o.maxPrice) / 2,
            buy: o.buy,
            leverage: o.leverage,
            tp: o.tp,
            sl: o.sl
        });

        require(
            storageT.hasOpenLimitOrder(_trader, _pairIndex, _index),
            "NO_LIMIT"
        );
        executeOpenTrade(
            t,
            OpenLimitOrderType.LEGACY,
            t.leverage,
            address(0),
            _trader
        );
        executeCancelOpenLimitOrder(_pairIndex, _index, _trader);
    }

    //getTotalUsers
    function getTotalUsers() public view returns (address[] memory) {
        return totalUsers;
    }
}
