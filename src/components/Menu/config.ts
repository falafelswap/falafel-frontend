import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.falafelswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.falafelswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9c5D0C6a3be22B5dbd18275527CC17FB6327d696',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/falafel-swap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/falafel-swap/',
      }, */
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x5824bbe60efd1b321abb3975f07388d898da5c9f',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Audit by Hacken',
        href: 'https://falafelswap.com/files/hackenAudit.pdf',
      }, */
      {
        label: "Github",
        href: "https://github.com/falafelswap/",
      },
      {
        label: "Docs",
        href: "https://falafelswap.gitbook.io/falafel-swap/",
      },
      {
        label: "Blog",
        href: "https://falafelswap.medium.com",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://falafelswap.com/files/hackenAudit.pdf',
  }, */
]

export default config
