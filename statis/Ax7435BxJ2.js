// Constants for blockchain configuration
const contractAddress = "0xd08482b5894D5A5A4eca9C941080A88b11937572";
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"string","name":"number","type":"string"},{"indexed":false,"internalType":"uint256","name":"betAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"}],"name":"BetResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"}],"name":"BetWon","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"commenter","type":"address"},{"indexed":false,"internalType":"string","name":"comment","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CommentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"CommentDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"},{"indexed":false,"internalType":"string","name":"newComment","type":"string"}],"name":"CommentUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ETHClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"}],"name":"LastWinnerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"PlayerJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"totalComments","type":"uint256"}],"name":"TotalCommentsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPayout","type":"uint256"}],"name":"TotalPayoutUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"TotalPlayersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalPrizes","type":"uint256"}],"name":"TotalPrizesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWinners","type":"uint256"}],"name":"WinnerAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WinnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"}],"name":"WinnerSet","type":"event"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"_comment","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betComments","outputs":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"commentText","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betHistory","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeDetails","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeList","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"betLikes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikesArray","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betResults","outputs":[{"internalType":"uint256","name":"drawId","type":"uint256"},{"internalType":"uint256","name":"winningNumber","type":"uint256"},{"internalType":"bool","name":"isProcessed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betToDrawId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betWinners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"commentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"deleteComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"},{"internalType":"string","name":"newComment","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllWinners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getBetLikers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getComments","outputs":[{"components":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct HKBettingPool.CommentData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"getPlayerStats","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"topN","type":"uint256"}],"name":"getTopPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"getWinnerByBetId","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"internalType":"struct HKBettingPool.WinnerData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"hasUserLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLeaderboardReset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"likeType","type":"string"}],"name":"likeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_number","type":"string"},{"internalType":"uint256","name":"_times","type":"uint256"},{"internalType":"bool","name":"_isETH","type":"bool"},{"internalType":"uint256","name":"_payoutAmount","type":"uint256"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerStats","outputs":[{"internalType":"uint256","name":"totalBets","type":"uint256"},{"internalType":"uint256","name":"totalAmountBet","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerWins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_drawId","type":"uint256"},{"internalType":"uint256","name":"_winningNumber","type":"uint256"}],"name":"setBetResult","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_winner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_betId","type":"uint256"},{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"setWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"topBettor","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"totalBets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalBetsByPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalComments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalLikes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalPayoutPerDraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"unlikeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userBets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnerHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"winnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const betPrice = 0.000256;
const SEPOLIA_BASE_CHAIN_ID = "0x14a34";
const SEPOLIA_RPC_URL = "https://sepolia.base.org";
const SEPOLIA_EXPLORER_URL = "https://sepolia.basescan.org";
const SEPOLIA_CURRENCY = { name: "Ethereum", symbol: "ETH", decimals: 18 };

// Global variables
let web3;
let contract;
let userAccount = null;
let fullBetHistory = [];
let isSearching = false;
let searchStatusTimeout;
let userBetsPage = 0;
let betHistoryPage = 0;
const pageSize = 15;

// DOM Elements for QR Code
const qrContainer = document.getElementById("qrCanvas");
const showQRBtn = document.getElementById("showQRBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrCanvasContainer = document.getElementById("qrCanvasContainer");
const closeBtn = document.getElementById("closeBtn");
let canvas;

// Utility function to generate unique IDs
const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `${timestamp}${randomStr}`;
};

// Initialize Web3 and contract
async function initializeWeb3() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return false;
  }

  try {
    web3 = new Web3(window.ethereum);
    await switchToSepoliaBase();
    contract = new web3.eth.Contract(contractABI, contractAddress);
    return true;
  } catch (error) {
    console.error("Web3 initialization failed:", error);
    alert("Failed to initialize Web3: " + error.message);
    return false;
  }
}

// Switch to Sepolia Base Testnet
async function switchToSepoliaBase() {
  try {
    const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
    if (currentChainId !== SEPOLIA_BASE_CHAIN_ID) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: SEPOLIA_BASE_CHAIN_ID }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: SEPOLIA_BASE_CHAIN_ID,
                chainName: "Base Sepolia Testnet",
                nativeCurrency: SEPOLIA_CURRENCY,
                rpcUrls: [SEPOLIA_RPC_URL],
                blockExplorerUrls: [SEPOLIA_EXPLORER_URL],
              },
            ],
          });
        } else {
          throw switchError;
        }
      }
    }
  } catch (error) {
    console.error("Failed to switch network:", error);
    throw new Error("Failed to switch to Sepolia Base Testnet");
  }
}

// Connect Wallet
async function connectWallet() {
  if (!(await initializeWeb3())) return;

  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length === 0) throw new Error("No accounts found. Please connect your wallet.");

    userAccount = accounts[0];
    localStorage.setItem("walletAddress", userAccount);

    const timestamp = new Date().toISOString();
    const message = `Verifying user Connect To Lotto Chain HK Play & Win!\nWallet: ${userAccount}\nTime: ${timestamp}`;
    const signature = await web3.eth.personal.sign(message, userAccount, "");
    console.log("Signature:", signature);

    updateUIAfterConnect();
    showPrivacyModal(userAccount);
    await loadInitialData();
  } catch (error) {
    console.error("Connection failed:", error);
    alert(`Connection failed: ${error.message}`);
  }
}

// Update UI after wallet connection
function updateUIAfterConnect() {
  document.getElementById("walletAddress").innerText = `Connected: ${userAccount}`;
  document.getElementById("walletAddress").style.display = "block";
  document.getElementById("walletBalance").style.display = "block";
  document.getElementById("connectWallet").style.display = "none";
  document.getElementById("disconnectWallet").style.display = "block";
  document.getElementById("notificationIcon").style.display = "block";

  const networkStatusEl = document.getElementById("networkStatus");
  networkStatusEl.innerHTML = `<img src="img/base.svg" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 6px;">
                              <span id="networkText">Network: Base</span>`;
  networkStatusEl.style.color = "#1a88ff";
  networkStatusEl.style.display = "block";
}

// Disconnect Wallet
function disconnectWallet() {
  userAccount = null;
  localStorage.removeItem("walletAddress");

  document.getElementById("walletAddress").innerText = "";
  document.getElementById("walletAddress").style.display = "none";
  document.getElementById("walletBalance").innerText = "Balance: 0 ETH";
  document.getElementById("walletBalance").style.display = "none";
  document.getElementById("connectWallet").style.display = "block";
  document.getElementById("disconnectWallet").style.display = "none";
  document.getElementById("networkStatus").style.display = "none";
}

// Update Wallet Balance
async function updateBalance() {
  if (!userAccount) return;
  try {
    const balanceWei = await web3.eth.getBalance(userAccount);
    const balanceEth = web3.utils.fromWei(balanceWei, "ether");
    document.getElementById("walletBalance").innerText = `Balance: ${parseFloat(balanceEth).toFixed(4)} ETH`;
  } catch (error) {
    console.error("Failed to update balance:", error);
  }
}

// Load initial data (bets, comments, etc.)
async function loadInitialData() {
  try {
    await updateBalance();
    await loadUserBets();
    await loadBetHistory();
    await checkForWinnings();

    const allBets = await contract.methods.getAllBets().call();
    const betIds = allBets.map((bet) => bet.betId);
    for (const betId of betIds) {
      await updateCommentCount(betId);
      await loadComments(betId);
    }
  } catch (error) {
    console.error("Failed to load initial data:", error);
  }
}

// QR Code Generation
function setupQRCodeListeners() {
  showQRBtn.addEventListener("click", () => {
    qrCanvasContainer.style.display = "block";
    qrContainer.innerHTML = "";

    const url = window.location.href;
    QRCode.toCanvas(
      url,
      { width: 300, margin: 2, errorCorrectionLevel: "H" },
      (err, c) => {
        if (err) {
          console.error("Error generating QR:", err);
          qrContainer.innerHTML = "<p style='color: red;'>Failed to generate QR code.</p>";
          return;
        }
        canvas = c;
        qrContainer.appendChild(canvas);

        const logo = document.createElement("img");
        logo.src = "img/logo.svg";
        logo.className = "logos";
        logo.crossOrigin = "anonymous";
        logo.onerror = () => console.error("Failed to load logo");
        qrContainer.appendChild(logo);

        showQRBtn.style.display = "none";
        downloadBtn.style.display = "inline-block";
      }
    );
  });

  qrContainer.addEventListener("click", () => {
    qrCanvasContainer.classList.add("active");
    setTimeout(() => qrCanvasContainer.classList.remove("active"), 300);
  });

  closeBtn.addEventListener("click", () => {
    qrCanvasContainer.style.display = "none";
    showQRBtn.style.display = "inline-block";
    downloadBtn.style.display = "none";
    qrContainer.innerHTML = "";
    canvas = null;
  });

  downloadBtn.addEventListener("click", () => {
    if (!canvas) {
      alert("QR code has not been created. Click 'Show QR Link' first.");
      return;
    }

    const url = window.location.href;
    QRCode.toCanvas(
      url,
      { width: 4000, margin: 8, errorCorrectionLevel: "H" },
      (err, highResCanvas) => {
        if (err) {
          console.error("Error generating high-res QR:", err);
          alert("Failed to generate QR code for download.");
          return;
        }

        const combinedCanvas = document.createElement("canvas");
        combinedCanvas.width = 4400;
        combinedCanvas.height = 4400;
        const ctx = combinedCanvas.getContext("2d");

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 4400, 4400);
        ctx.drawImage(highResCanvas, 200, 200, 4000, 4000);

        const logoImage = new Image();
        logoImage.crossOrigin = "anonymous";
        logoImage.src = "img/logo.svg";

        logoImage.onload = () => {
          const logoSize = 400;
          const logoX = (4400 - logoSize) / 2;
          const logoY = (4400 - logoSize) / 2;
          ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);

          ctx.font = "bold 120px 'Ubuntu', sans-serif";
          const gradient = ctx.createLinearGradient(900, 0, 3500, 0);
          gradient.addColorStop(0, "#03a9f4");
          gradient.addColorStop(1, "#f441a5");
          ctx.fillStyle = gradient;
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const watermarkText = "Faylotto Decentralized Betting Web3 Social";
          const textX = 4400 / 2;
          const textY = 4000;
          ctx.fillText(watermarkText, textX, textY);

          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;

          const link = document.createElement("a");
          link.download = `Faylotto${generateUniqueId()}.png`;
          link.href = combinedCanvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        logoImage.onerror = () => {
          console.error("Failed to load logo for download, proceeding without logo.");

          ctx.font = "bold 120px 'Ubuntu', sans-serif";
          const gradient = ctx.createLinearGradient(900, 0, 3500, 0);
          gradient.addColorStop(0, "#03a9f4");
          gradient.addColorStop(1, "#f441a5");
          ctx.fillStyle = gradient;
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const watermarkText = "Faylotto Decentralized Betting Web3 Social";
          const textX = 4400 / 2;
          const textY = 4000;
          ctx.fillText(watermarkText, textX, textY);

          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;

          const link = document.createElement("a");
          link.download = `Faylotto${generateUniqueId()}.png`;
          link.href = combinedCanvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      }
    );
  });
}

// Place a Bet
async function placeBet() {
  if (!userAccount) {
    alert("Please connect your wallet first!");
    return;
  }

  const number = document.getElementById("betNumber").value;
  const times = parseInt(document.getElementById("betTimes").value);
  const betPriceWei = web3.utils.toWei(betPrice.toString(), "ether");
  const totalCost = BigInt(betPriceWei) * BigInt(times);

  if (!number || number.length < 1 || number.length > 4 || isNaN(times) || times < 1) {
    alert("Invalid bet input!");
    return;
  }

  try {
    document.getElementById("betStatus").innerHTML = `
      <img src="img/load.svg" width="20" height="20" style="vertical-align: middle;">
      <span style="color: #aaffaa; font-size: 12px;">Your ticket transaction is in progress...</span>
    `;

    const estimatedGas = await contract.methods
      .placeBet(number, times, true, 0)
      .estimateGas({ from: userAccount, value: totalCost });

    await contract.methods.placeBet(number, times, true, 0).send({
      from: userAccount,
      value: totalCost,
      gas: estimatedGas + 100000,
      maxFeePerGas: web3.utils.toWei("0.0015", "gwei"),
      maxPriorityFeePerGas: web3.utils.toWei("0.0014", "gwei"),
    });

    document.getElementById("betStatus").innerHTML = `
      <img src="img/success.svg" width="20" height="20" style="vertical-align: middle;">
      <span style="color: #00cc00; font-size: 12px;">Your ticket has been submitted successfully! Please check it under your "Tickets".</span>
    `;

    setTimeout(() => {
      document.getElementById("betStatus").innerHTML = "";
    }, 7000);

    await loadUserBets();
  } catch (error) {
    console.error("Failed to place bet:", error);
    document.getElementById("betStatus").innerHTML = `
      <img src="img/failed.svg" width="20" height="20" style="vertical-align: middle;">
      <span style="color: #ff3333; font-size: 12px;">Failed to submit Your ticket. Please try again</span>
    `;
    setTimeout(() => {
      document.getElementById("betStatus").innerHTML = "";
    }, 5000);
  }
}

// Update Bet Price Display
function updateBetPrice() {
  const betTimes = document.getElementById("betTimes").value;
  const ethPrice = (betTimes * betPrice).toFixed(6);
  document.getElementById("betPrice").innerText = `Cost: ${ethPrice} ETH`;
}

// Validate Bet Number
function validateBetNumber() {
  const betNumberInput = document.getElementById("betNumber");
  const betWarning = document.getElementById("betWarning");

  betNumberInput.value = betNumberInput.value.replace(/\D/g, "");
  if (betNumberInput.value.length < 2) {
    betWarning.innerText = "Bet number must be at least 2 digits!";
  } else if (betNumberInput.value.length > 4) {
    betWarning.innerText = "Bet number must be at most 4 digits!";
    betNumberInput.value = betNumberInput.value.slice(0, 4);
  } else {
    betWarning.innerText = "";
  }
}

// Validate Bet Times
function validateBetTimes() {
  const betTimesInput = document.getElementById("betTimes");
  const warning = document.getElementById("betWarning");
  const value = parseInt(betTimesInput.value, 10);

  if (value < 1) {
    betTimesInput.value = 1;
    warning.innerText = "Bet times must be between 1 and 99!";
  } else if (value > 99) {
    betTimesInput.value = 99;
    warning.innerText = "Bet times must be between 1 and 99!";
  } else {
    warning.innerText = "";
  }
}

// Load User Bets
async function loadUserBets() {
  if (!userAccount) return;

  try {
    const bets = await contract.methods.getUserBets(userAccount).call();
    const reversedBets = bets.slice().reverse();
    const now = Math.floor(Date.now() / 1000);
    const oneMonthAgo = now - 30 * 24 * 60 * 60;
    const filteredBets = reversedBets.filter((bet) => bet.timestamp >= oneMonthAgo);

    const start = userBetsPage * pageSize;
    const end = Math.min(start + pageSize, filteredBets.length);

    let html = "";
    for (let i = start; i < end; i++) {
      const bet = filteredBets[i];
      const winnerData = await contract.methods.getWinnerByBetId(bet.betId).call();
      const isWinner =
        winnerData.winner !== "0x0000000000000000000000000000000000000000" &&
        Number(winnerData.amount) > 0;

      const shortPlayer = bet.player.slice(0, 10) + "..." + bet.player.slice(-10);
      const shortTxHash = bet.txHash.slice(0, 10) + "..." + bet.txHash.slice(-10);
      html += `
        <p>
          Wallet: <span style="color: #ad5cff;">${shortPlayer}</span><br>
          BetID: <span style="color: #b37500; font-size: 8px;">${bet.betId}</span><br>
          BetNumber: <span style="color: #00FF66;">${bet.number}</span><br>
          BetAmount: <span style="color: #00FF66;">${bet.betAmount}</span><br>
          Status: <span style="color:${isWinner ? "#00FF66" : "#fff899"};">${isWinner ? "Won" : "Waiting..."}</span><br>
          Tx: <span style="color: #fe6666;">${shortTxHash}</span><br>
          Block: <a href="https://basescan.io/block/${bet.blockNumber}" target="_blank" style="color: #1a88ff;">${bet.blockNumber}</a><br>
          Time: <span style="color: orange;">${new Date(bet.timestamp * 1000).toISOString()} UTC</span><br>
          <br><button onclick="window.open('https://ticket.faylotto.xyz/userticket?betId=${bet.betId}', '_blank')"
            style="display: inline-block; margin-top: 8px; background-color: #000000; color: white; padding: 4px 6px; font-size: 6px; border-radius: 0.9em; text-decoration: none;">
            Ticket Details
          </button><br>
        </p><hr style="background-color: #333333; height: 1px; border: none;">
      `;
    }

    document.getElementById("userBets").innerHTML = html || "<p style='text-align: center; font-weight: bold; color: red;'>No bet history available.</p>";

    for (let i = start; i < end; i++) {
      const bet = filteredBets[i];
      await updateLikeStatus(bet.betId);
      await updateCommentCount(bet.betId);
      await loadComments(bet.betId);
    }
  } catch (error) {
    console.error("Failed to load user bets:", error);
  }
}

// Pagination for User Bets
function prevUserBets() {
  if (userBetsPage > 0) {
    userBetsPage--;
    loadUserBets();
  }
}

function nextUserBets() {
  userBetsPage++;
  loadUserBets();
}

// Load Bet History
async function loadBetHistory() {
  try {
    const refreshIcon = document.querySelector("button img[alt='Refresh']");
    if (refreshIcon) refreshIcon.classList.add("spin-once");

    const bets = await contract.methods.getAllBets().call();
    const reversedBets = bets.slice().reverse();
    const now = Math.floor(Date.now() / 1000);
    const oneMonthAgo = now - 30 * 24 * 60 * 60;
    fullBetHistory = reversedBets.filter((bet) => bet.timestamp >= oneMonthAgo);

    if (!isSearching) renderBetHistoryPage();
  } catch (error) {
    console.error("Failed to load bet history:", error);
  }
}

// Render Bet History Page
async function renderBetHistoryPage() {
  const start = betHistoryPage * pageSize;
  const end = Math.min(start + pageSize, fullBetHistory.length);
  const pageBets = fullBetHistory.slice(start, end);
  await renderBets(pageBets);
}

// Render Bets
async function renderBets(betsToRender) {
  let html = "";
  for (const bet of betsToRender) {
    const winnerData = await contract.methods.getWinnerByBetId(bet.betId).call();
    const isWinner =
      winnerData.winner !== "0x0000000000000000000000000000000000000000" &&
      Number(winnerData.amount) > 0;

    const shortPlayer = bet.player.slice(0, 10) + "..." + bet.player.slice(-10);
    const shortTxHash = bet.txHash.slice(0, 10) + "..." + bet.txHash.slice(-10);

    html += `
      <p>
        Player: <span style="color: #ad5cff;">${shortPlayer}</span><br>
        BetID: <span style="color: #b37500; font-size: 9px;">${bet.betId}</span><br>
        BetNumber: <span style="color: #00FF66;">${bet.number}</span><br>
        BetAmount: <span style="color: #00FF66;">${bet.betAmount}</span><br>
        Status: <span style="color:${isWinner ? "#00FF66" : "#fff899"};">${isWinner ? "Won" : "Waiting..."}</span><br>
        Is ETH: <span style="color: ${bet.isETH ? "#00FF66" : "#fe6666"};">${bet.isETH ? "Yes" : "No"}</span><br>
        Tx: <span style="color: #fe6666;">${shortTxHash}</span><br>
        Block: <a href="https://basescan.org/block/${bet.blockNumber}" target="_blank" style="color: #1a88ff;">${bet.blockNumber}</a><br>
        Time: <span style="color: orange;">${new Date(bet.timestamp * 1000).toISOString()} UTC</span><br>
        <button id="likeButton-${bet.betId}" onclick="toggleLike('${bet.betId}')"
          style="background-color: #000000; color: white; border: none; padding: 5px 10px; cursor: pointer; margin-top: 5px;">
          <img src="img/like.svg" alt="Like" style="width: 11px; height: 11px; vertical-align: middle;">
        </button>
        <span id="likeCount-${bet.betId}" style="margin-left: 10px; color: #00cc51; font-size: 15px; font-weight: bold;">0</span> Likes
        <p id="likeStatus-${bet.betId}" style="font-size: 12px; color: gray; margin-top: 3px;"></p>
        <details class="comment-dropdown">
          <summary style="display: flex; align-items: center; cursor: pointer; justify-content: space-between; width: 100%; padding: 0 15px;">
            <span style="display: flex; align-items: center; gap: 10px;">
              <img src="img/comment.svg" alt="Komentar" style="width: 18px; height: 18px;" margin-right: 20px;">
              <span id="commentCount-${bet.betId}" style="color: #00cc51; font-size: 15px; font-weight: bold;">0</span> Comments
            </span>
            <img src="img/clos.svg" style="width: 18px; height: 18px; margin-right: 20px;">
          </summary>
          <div id="commentSection-${bet.betId}" class="comment-section">
            <div id="commentList-${bet.betId}" class="comment-list"></div>
            <textarea id="commentInput-${bet.betId}" placeholder="Write a comment..."></textarea>
            <button id="sendBtn-${bet.betId}" onclick="addOrUpdateComment('${bet.betId}')" style="background: rgba(0, 255, 0, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Send</button>
            <br><h6 style="color: #ff1a1d; text-align: left; padding: 10px; background: url('img/warning.svg') no-repeat left center; background-size: 20px; padding-left: 40px;">
              WARNING: Comments stored on the blockchain are permanent and cannot be deleted. Please be wise in your comments before posting!
            </h6>
          </div>
        </details>
        <br><button onclick="window.open('https://ticket.faylotto.xyz?betId=${bet.betId}', '_blank')"
          style="display: inline-block; margin-top: 8px; background-color: #000000; color: white; padding: 4px 6px; font-size: 6px; border-radius: 0.9em; text-decoration: none;">
          Ticket Details
        </button><br>
      </p>
      <hr style="background-color: #333333; height: 1px; border: none;">
    `;
  }

  document.getElementById("betHistory").innerHTML = html || "<p>No bets found.</p>";

  for (const bet of betsToRender) {
    await updateLikeStatus(bet.betId);
    await updateCommentCount(bet.betId);
    await loadComments(bet.betId);
  }
}

// Pagination for Bet History
function prevBetHistory() {
  if (betHistoryPage > 0) {
    betHistoryPage--;
    loadBetHistory();
  }
}

function nextBetHistory() {
  betHistoryPage++;
  loadBetHistory();
}

// Search Bet History
function searchBetHistory() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const statusEl = document.getElementById("searchStatus");

  if (!query) {
    statusEl.innerHTML = "";
    renderBetHistoryPage();
    return;
  }

  setSearchStatus("Searching...", "#f7e702", "searchI.svg");

  setTimeout(() => {
    const results = fullBetHistory.filter((bet) =>
      Object.values(bet).some((value) => String(value).toLowerCase().includes(query))
    );

    if (results.length > 0) {
      setSearchStatus("Found results", "#00ff66", "success.svg", true);
    } else {
      setSearchStatus("No results found", "#ff4747", "failed.svg", true);
    }

    betHistoryPage = 0;
    renderBets(results);
  }, 3000);
}

// Set Search Status
function setSearchStatus(message, color, icon, autoClear = false) {
  const statusEl = document.getElementById("searchStatus");
  statusEl.innerHTML = `<img src="img/${icon}" style="width: 16px; vertical-align: middle; margin-right: 8px;">
                        <span>${message}</span>`;
  statusEl.style.color = color;
  statusEl.style.fontWeight = "bold";
  statusEl.style.marginBottom = "10px";

  if (autoClear) {
    clearTimeout(searchStatusTimeout);
    searchStatusTimeout = setTimeout(() => {
      statusEl.innerHTML = "";
    }, 5000);
  }
}

// Toggle Like
async function toggleLike(betId) {
  if (!userAccount) {
    alert("Please connect your MetaMask wallet.");
    return;
  }

  try {
    const liked = await contract.methods.hasUserLiked(betId, userAccount).call();
    const button = document.getElementById(`likeButton-${betId}`);
    const statusElement = document.getElementById(`likeStatus-${betId}`);

    statusElement.innerText = "Transaction in progress...";

    const gasOptions = {
      from: userAccount,
      gas: (await (liked
        ? contract.methods.unlikeBet(betId)
        : contract.methods.likeBet(betId, "👍")
      ).estimateGas({ from: userAccount })) + 50000,
      maxFeePerGas: web3.utils.toWei("0.0002", "gwei"),
      maxPriorityFeePerGas: web3.utils.toWei("0.00018", "gwei"),
    };

    if (liked) {
      await contract.methods.unlikeBet(betId).send(gasOptions)
        .on("transactionHash", (hash) => console.log("Transaction sent! Hash:", hash))
        .on("receipt", (receipt) => {
          console.log("Transaction confirmed:", receipt);
          button.style.backgroundColor = "#000000";
          statusElement.innerText = "Disliked successfully";
          button.innerHTML = `<img src="img/like.svg" alt="Like" style="width: 11px; height: 11px; vertical-align: middle;">`;
          setTimeout(() => (statusElement.innerText = ""), 3000);
          updateLikeStatus(betId);
        })
        .on("error", (error) => {
          console.error("Error processing unlike:", error);
          statusElement.innerText = "Dislike failed";
          setTimeout(() => (statusElement.innerText = ""), 3000);
        });
    } else {
      await contract.methods.likeBet(betId, "👍").send(gasOptions)
        .on("transactionHash", (hash) => console.log("Transaction sent! Hash:", hash))
        .on("receipt", (receipt) => {
          console.log("Transaction confirmed:", receipt);
          button.style.backgroundColor = "#ff1a1e";
          statusElement.innerText = "Liked successfully";
          button.innerHTML = `<img src="img/dis.svg" alt="Dislike" style="width: 12px; height: 12px; vertical-align: middle;">`;
          setTimeout(() => (statusElement.innerText = ""), 3000);
          updateLikeStatus(betId);
        })
        .on("error", (error) => {
          console.error("Error processing like:", error);
          statusElement.innerText = "Like failed";
          setTimeout(() => (statusElement.innerText = ""), 3000);
        });
    }
  } catch (error) {
    console.error("Failed to toggle like:", error);
    document.getElementById(`likeStatus-${betId}`).innerText = "Like/Unlike failed";
    setTimeout(() => (document.getElementById(`likeStatus-${betId}`).innerText = ""), 3000);
  }
}

// Update Like Status
async function updateLikeStatus(betId) {
  try {
    const likeCount = await contract.methods.getLikeCount(betId).call();
    document.getElementById(`likeCount-${betId}`).innerText = likeCount;

    if (!userAccount) return;
    const liked = await contract.methods.hasUserLiked(betId, userAccount).call();
    const button = document.getElementById(`likeButton-${betId}`);

    button.innerHTML = liked
      ? `<img src="img/disl.svg" alt="Dislike" style="width: 16px; height: 16px; vertical-align: middle;">`
      : `<img src="img/like.svg" alt="Like" style="width: 16px; height: 16px; vertical-align: middle;">`;
    button.style.backgroundColor = liked ? "#ff1a1e" : "#000000";
  } catch (error) {
    console.error("Failed to update like status:", error);
  }
}

// Load Comments
async function loadComments(betId, limit = 10) {
  try {
    const comments = await contract.methods.getComments(betId).call();
    const currentUser = userAccount ? userAccount.toLowerCase() : null;
    let commentHtml = "";

    comments.slice(0, limit).forEach((comment, index) => {
      if (!comment.isDeleted) {
        const date = new Date(comment.timestamp * 1000).toLocaleString();
        const shortCommenter = comment.commenter.slice(0, 6) + "..." + comment.commenter.slice(-4);
        const deleteButton = currentUser && currentUser === comment.commenter.toLowerCase()
          ? `<button onclick="deleteComment('${betId}', ${index})" style="background: rgba(255, 0, 0, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Delete</button>`
          : "";
        const editButton = currentUser && currentUser === comment.commenter.toLowerCase()
          ? `<button id="editBtn-${betId}-${index}" onclick="enableEdit('${betId}', ${index})" style="background: rgba(0, 162, 255, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Edit</button>`
          : "";

        commentHtml += `
          <div style="background: #222; padding: 10px; border-radius: 8px; margin-bottom: 10px; border: 1px solid #444; box-shadow: 0 4px 8px rgba(0, 162, 255, 0.2);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #ad5cff; font-size: 12px;">${shortCommenter}</strong>
              <span style="color: gray; font-size: 9px; white-space: nowrap;">(${date})</span>
            </div>
            <p id="commentText-${betId}-${index}" style="margin: 5px 0;">${comment.text}</p>
            <br><br>
            ${deleteButton} ${editButton}
          </div>`;
      }
    });

    if (comments.length > limit) {
      commentHtml += `<button onclick="loadComments('${betId}', ${limit + 10})" style="background-color: rgba(0, 123, 255, 0.5);">See more</button>`;
    }

    document.getElementById(`commentList-${betId}`).innerHTML = commentHtml;
    await updateCommentCount(betId);
  } catch (error) {
    console.error("Failed to load comments:", error);
  }
}

// Add or Update Comment
async function addOrUpdateComment(betId) {
  const commentInput = document.getElementById(`commentInput-${betId}`);
  const saveMode = commentInput.dataset.editing === "true";
  const commentIndex = commentInput.dataset.index;

  if (!commentInput.value.trim()) {
    alert("Comments cannot be empty!");
    return;
  }

  if (!userAccount) {
    alert("Please connect your MetaMask wallet.");
    return;
  }

  try {
    const gasEstimate = saveMode
      ? await contract.methods.editComment(betId, commentIndex, commentInput.value).estimateGas({ from: userAccount })
      : await contract.methods.addComment(betId, commentInput.value).estimateGas({ from: userAccount });

    const gasOptions = {
      from: userAccount,
      gas: gasEstimate + 56000,
      maxFeePerGas: web3.utils.toWei("0.00025", "gwei"),
      maxPriorityFeePerGas: web3.utils.toWei("0.00023", "gwei"),
    };

    if (saveMode) {
      await contract.methods.editComment(betId, commentIndex, commentInput.value).send(gasOptions);
      disableEdit(betId);
    } else {
      await contract.methods.addComment(betId, commentInput.value).send(gasOptions);
    }

    commentInput.value = "";
    document.getElementById(`sendBtn-${betId}`).innerText = "Send";
    await loadComments(betId);
  } catch (error) {
    console.error("Failed to save comment:", error);
    alert("Failed to save comment. Please try again later!");
  }
}

// Enable Edit Comment
function enableEdit(betId, index) {
  const commentTextElement = document.getElementById(`commentText-${betId}-${index}`);
  const commentInput = document.getElementById(`commentInput-${betId}`);
  const sendButton = document.getElementById(`sendBtn-${betId}`);
  let cancelButton = document.getElementById(`cancelBtn-${betId}`);

  commentInput.value = commentTextElement.innerText;
  commentInput.dataset.editing = "true";
  commentInput.dataset.index = index;
  sendButton.innerText = "Save";

  if (!cancelButton) {
    cancelButton = document.createElement("button");
    cancelButton.id = `cancelBtn-${betId}`;
    cancelButton.innerText = "Cancel";
    cancelButton.style.marginLeft = "5px";
    cancelButton.onclick = () => disableEdit(betId);
    sendButton.parentNode.insertBefore(cancelButton, sendButton.nextSibling);
  }
}

// Disable Edit Comment
function disableEdit(betId) {
  const commentInput = document.getElementById(`commentInput-${betId}`);
  const sendButton = document.getElementById(`sendBtn-${betId}`);
  const cancelButton = document.getElementById(`cancelBtn-${betId}`);

  commentInput.value = "";
  delete commentInput.dataset.editing;
  delete commentInput.dataset.index;
  sendButton.innerText = "Send";
  if (cancelButton) cancelButton.remove();
}

// Delete Comment
async function deleteComment(betId, index) {
  if (!confirm("Are you sure you want to delete this comment?")) return;

  try {
    const gasEstimate = await contract.methods.deleteComment(betId, index).estimateGas({ from: userAccount });
    const gasOptions = {
      from: userAccount,
      gas: gasEstimate + 100000,
      maxFeePerGas: web3.utils.toWei("0.0025", "gwei"),
      maxPriorityFeePerGas: web3.utils.toWei("0.0023", "gwei"),
    };

    await contract.methods.deleteComment(betId, index).send(gasOptions);
    await loadComments(betId);
  } catch (error) {
    console.error("Failed to delete comment:", error);
    alert("Failed to delete comment. Try again!");
  }
}

// Update Comment Count
async function updateCommentCount(betId) {
  try {
    const count = await contract.methods.commentCount(betId).call();
    document.getElementById(`commentCount-${betId}`).innerText = count;
  } catch (error) {
    console.error(`Failed to fetch comment count for ${betId}:`, error);
  }
}

// Check for Winnings
async function checkForWinnings() {
  try {
    const winnings = await contract.methods.winnings(userAccount).call();
    if (parseInt(winnings) > 0) {
      const ethAmount = web3.utils.fromWei(winnings, "ether");
      showNotification(`Congratulations, You won ${ethAmount} ETH!`);
      addNotification(`Congratulations, You won ${ethAmount} ETH Claim Now!`, "claim");
    }
  } catch (error) {
    console.error("Error checking winnings:", error);
  }
}

// Show Notification
function showNotification(message) {
  const popup = document.getElementById("notificationPopup");
  const messageContainer = document.getElementById("notificationMessage");

  if (!popup || !messageContainer) {
    console.error("Notification elements not found!");
    return;
  }

  messageContainer.innerHTML = `<span style="color: #00FF66;">${message}</span> 
                                <a href="claim" target="_blank" style="color: #00b7ff; text-decoration: none;">Claim now!</a>`;
  popup.classList.remove("hidden");
  popup.style.display = "block";
  popup.classList.add("show");

  let audio = new Audio("win.mp3");
  audio.play().catch((error) => console.log("Audio playback error:", error));

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.classList.add("hidden");
      popup.style.display = "none";
    }, 300);
  }, 15000);
}

// Add Notification
function addNotification(message, link) {
  const notifications = document.getElementById("notifications");
  const li = document.createElement("li");
  li.innerHTML = `<a href="${link}" target="_blank" style="color: #00FF66; text-decoration: none;">${message}</a>`;
  notifications.appendChild(li);
  document.getElementById("notificationBadge").classList.add("active");
  updateNotificationStatus();
}

// Toggle Notification List
function toggleNotificationList() {
  const list = document.getElementById("notificationList");
  list.classList.toggle("hidden");
  if (!list.classList.contains("hidden")) {
    document.getElementById("notificationBadge").classList.remove("active");
  }
}

// Close Notification Popup
function closePopup() {
  const popup = document.getElementById("notificationPopup");
  if (popup) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.classList.add("hidden");
      popup.style.display = "none";
    }, 300);
  }
}

// Update Notification Status
function updateNotificationStatus() {
  const notificationsList = document.getElementById("notifications");
  const noNotificationsMessage = document.getElementById("noNotificationsMessage");

  setTimeout(() => {
    if (notificationsList.children.length === 0) {
      noNotificationsMessage.classList.remove("hidden");
    } else {
      noNotificationsMessage.classList.add("hidden");
    }
  }, 100);
}

// Show Privacy Modal
function showPrivacyModal(walletAddress) {
  if (localStorage.getItem(`privacyAccepted_${walletAddress}`) === "true") {
    showWelcomePopup();
    return;
  }

  const modal = document.getElementById("modalPrivacyLottoChain");
  const scrollBox = document.getElementById("scrollPrivacyContent");
  const agreeBtn = document.getElementById("agreePrivacyBtn");
  const checkbox = document.getElementById("privacyCheckbox");
  const statusText = document.getElementById("checkboxStatus");

  modal.style.display = "block";
  agreeBtn.style.display = "none";
  agreeBtn.style.opacity = "0.5";
  agreeBtn.style.pointerEvents = "none";
  statusText.style.display = "none";
  checkbox.checked = false;

  let scrolledToBottom = false;

  scrollBox.addEventListener("scroll", function () {
    scrolledToBottom = scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight;
    if (scrolledToBottom) {
      agreeBtn.style.display = "inline-block";
      agreeBtn.style.opacity = checkbox.checked ? "1" : "0.5";
      agreeBtn.style.pointerEvents = "auto";
      statusText.style.display = "none";
    }
  });

  checkbox.addEventListener("change", function () {
    if (scrolledToBottom) {
      agreeBtn.style.opacity = checkbox.checked ? "1" : "0.5";
      agreeBtn.style.pointerEvents = "auto";
      statusText.style.display = "none";
    }
  });

  agreeBtn.onclick = function () {
    if (!checkbox.checked) {
      statusText.style.display = "block";
      return;
    }
    localStorage.setItem(`privacyAccepted_${walletAddress}`, "true");
    modal.style.display = "none";
    showWelcomePopup();
  };
}

// Show Welcome Popup
function showWelcomePopup() {
  const popupDiv = document.createElement("div");
  popupDiv.id = "popupLotto";
  popupDiv.innerHTML = `<div class="popup-text">Welcome to Faylotto. Enjoy & playing!</div>`;

  const style = document.createElement("style");
  style.textContent = `
    #popupLotto {
      position: fixed; top: 10%; left: 50%; transform: translateX(-50%);
      background: linear-gradient(90deg, #000000, #02024c, #4b4b4b); color: white;
      padding: 20px; border-radius: 16px; box-shadow: 0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 128, 255, 0.4);
      z-index: 9999; font-family: 'Ubuntu', sans-serif; text-align: center;
      animation: fadeIn 1s ease, bounce 0.5s infinite alternate; width: 90%; max-width: 1000px;
      transition: all 0.3s ease; box-sizing: border-box;
    }
    #popupLotto:hover {
      box-shadow: 0 0 60px rgba(0, 255, 255, 0.8), 0 0 100px rgba(0, 128, 255, 0.6), 0 0 20px rgba(0, 255, 200, 0.5);
      transform: translateX(-50%) scale(1.03);
    }
    .popup-text {
      font-size: 1.1rem; font-weight: bold; animation: typing 4s steps(50, end), blink 1s infinite;
      white-space: nowrap; overflow: hidden; border-right: 3px solid white;
      text-shadow: 0 0 10px #00f2fe, 0 0 20px #007acc;
    }
    @keyframes fadeIn { from { opacity: 0; top: 0%; } to { opacity: 1; top: 10%; } }
    @keyframes bounce { from { transform: translate(-50%, 0); } to { transform: translate(-50%, 12px); } }
    @keyframes typing { from { width: 0; } to { width: 100%; } }
    @keyframes blink { 0%, 100% { border-color: transparent; } 50% { border-color: white; } }
    @media (max-width: 480px) {
      #popupLotto { padding: 16px; top: 8%; border-radius: 12px; width: 95%; }
      .popup-text { font-size: 0.6rem; border-right: 2px solid white; animation: typing 4s steps(35, end), blink 1s step-end infinite; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popupDiv);

  new Audio("https://www.myinstants.com/media/sounds/pop-up-off.mp3")
    .play()
    .catch(() => console.log("Popup sound not allowed without user interaction."));

  setTimeout(() => popupDiv.remove(), 11000);
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Auto Refresh Bet History
function autoRefreshBetHistory() {
  loadBetHistory();
}

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modalId === "myModal" && !document.getElementById("userBets").innerHTML.trim()) {
      document.getElementById("userBets").innerHTML = "<p style='text-align: center; font-weight: bold; color: red;'>No bet history available.</p>";
    }
    modal.style.display = "block";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "none";
}

function closeMyBets() {
  closeModal("myModal");
}

function closeMenu() {
  closeModal("menuModal");
}

function closeResult() {
  closeModal("resultModal");
}

// Initialize on Page Load
window.addEventListener("load", async () => {
  if (await initializeWeb3()) {
    const savedAccount = localStorage.getItem("walletAddress");
    if (savedAccount) {
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          userAccount = accounts[0];
          updateUIAfterConnect();
          await loadInitialData();
        }
      } catch (error) {
        console.error("Auto-connect failed:", error);
        localStorage.removeItem("walletAddress");
      }
    }
  }

  setupQRCodeListeners();
  document.getElementById("refreshButton").addEventListener("click", () => {
    const icon = document.querySelector(".refresh-icon");
    icon.classList.remove("spin-once");
    void icon.offsetWidth;
    icon.classList.add("spin-once");
    setTimeout(loadBetHistory, 2000);
  });

  setInterval(autoRefreshBetHistory, 2000);

  window.ethereum?.on("accountsChanged", (accounts) => {
    if (accounts.length > 0) {
      userAccount = accounts[0];
      updateUIAfterConnect();
      loadInitialData();
    } else {
      disconnectWallet();
    }
  });

  window.addEventListener("scroll", () => {
    const icon = document.getElementById("scrollUpIcon");
    if (window.scrollY > 300) {
      icon.classList.add("show");
    } else {
      icon.classList.remove("show");
    }
  });
});