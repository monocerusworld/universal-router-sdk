import { BigNumber } from 'ethers'

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: // mainnet
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 169: // manta
        return '0x3fC944Ef0671249B3E6835eC6da01E2124610018'
    case 3441005: // manta testnet
        return '0x016835cDc0DD8043f96caEC2c5C075FF787fE0AD'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

export const WETH_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: //mainnet
      return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    case 169: // manta
      return '0x0Dc808adcE2099A9F62AA87D9670745AbA741746'    
    case 3441005: // manta testnet
      return '0x226E0D9fBDE51708fC36Bb4E5d1af9728A285cF4'
    case 1482601649: // skale nebula
      return '0x7F73B66d4e6e67bCdeaF277b9962addcDabBFC4d'    
    case 37084624: // skale nebula testnet
      return '0xe27F6D60A6D5c9320e9CAE6C4d95b700c8847468'
    default:
      throw new Error(`WETH9 or UniversalRouter not deployed on chain ${chainId}`)
  }
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
