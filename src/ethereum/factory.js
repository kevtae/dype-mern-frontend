import web3 from './web3';


const instance = new web3.eth.Contract(
    [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "creator",
                    "type": "address"
                }
            ],
            "name": "getCampaignsByAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "priceSet",
                    "type": "uint256"
                }
            ],
            "name": "createEscrow",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
  '0xca2ffadddfd2af6370c22fbbed27752cb1220143'
);

export default instance;