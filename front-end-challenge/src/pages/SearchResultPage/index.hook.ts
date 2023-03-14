import useFetchData from 'hooks/useFetchData'
import { useHistory, useLocation } from 'react-router-dom'
import { Article, News } from 'pages/types'

const useIndex = () => {
  const history = useHistory()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchKey = queryParams.get('search')

  const { data, loading, error } = useFetchData<News>('everything', {
    q: searchKey || '',
  })
  const customDFata: News = {
    status: 'ok',
    totalResults: 8785,
    articles: [
      {
        source: {
          id: 'wired',
          name: 'Wired',
        },
        author: 'Joel Khalili',
        title: 'Bitcoin Investors Are Plotting a Major Coup',
        description:
          "A group of activist shareholders at the world's largest bitcoin investment trust claim they lost billions as the market tanked. Now they want to take control.",
        url: 'https://www.wired.com/story/crypto-bitcoin-grayscale-coup/',
        urlToImage:
          "https://media.wired.com/photos/63ea75bd69cf98bf3540429b/191:100/w_1280,c_limit/Coup-D'etat-In-Bitcoin-Land-Business.mp4",
        publishedAt: '2023-02-14T12:00:00Z',
        content:
          'Like Valkyrie, Osprey has called on Grayscale to step down as sponsor and put itself forward as a replacement. In an open letter, Osprey CEO Greg King promised to cut the management fee by 75 percent… [+2998 chars]',
      },

      {
        source: {
          id: 'wired',
          name: 'Wired',
        },
        author: 'Joel Khalili',
        title: 'Bitcoin Miners Are Playing a High-Stakes Game of Chicken',
        description:
          'In the bitter crypto winter, companies are making deep cuts to survive a new challenge.',
        url:
          'https://www.wired.com/story/bitcoin-mining-halving-crypto-winter/',
        urlToImage:
          'https://media.wired.com/photos/63eede2c5b4882ebafffb0e1/191:100/w_1280,c_limit/Biz-data-mining-934468788.jpg',
        publishedAt: '2023-02-17T12:00:00Z',
        content:
          'Its kind of a last-man-standing situation, says Fred Thiel, CEO of US-based Marathon Digital Holdings. His crypto-mining company, among the largest in the world, has found itselflike the rest of the … [+3142 chars]',
      },

      {
        source: {
          id: null,
          name: 'Gizmodo.com',
        },
        author: 'Mack DeGeurin',
        title:
          "El Salvador Is Planning a 'Bitcoin Embassy' in Texas After Losing Tens of Millions on Crypto",
        description:
          'El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial president’s beleaguered effort to embrace cryptocurrencies, now says it plans to open a “bitcoin embassy” in Texas. The Central American country’s continu…',
        url:
          'https://gizmodo.com/bitcoin-price-el-salvador-embassy-texas-crypto-crash-1850118217',
        urlToImage:
          'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg',
        publishedAt: '2023-02-15T18:03:53Z',
        content:
          'El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial presidents beleaguered effort to embrace cryptocurrencies, now says it plans to open a bitcoin… [+2879 chars]',
      },

      {
        source: {
          id: 'google-news',
          name: 'Google News',
        },
        author: null,
        title:
          'Bitcoin, USDC stablecoin rally after US intervenes on SVB - Reuters.com',
        description:
          'Bitcoin, USDC stablecoin rally after US intervenes on SVB  Reuters.com',
        url:
          'https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi11c2RjLXN0YWJsZWNvaW4tcmFsbHktYWZ0ZXItdXMtaW50ZXJ2ZW5lcy1zdmItMjAyMy0wMy0xMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1',
        urlToImage: null,
        publishedAt: '2023-03-13T00:55:00Z',
        content:
          'We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]',
      },

      {
        source: {
          id: 'google-news',
          name: 'Google News',
        },
        author: null,
        title:
          'Bitcoin steadies near lows hit after fall of Silvergate - Reuters.com',
        description:
          'Bitcoin steadies near lows hit after fall of Silvergate  Reuters.com',
        url:
          'https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1zdGVhZGllcy1uZWFyLWxvd3MtaGl0LWFmdGVyLWZhbGwtc2lsdmVyZ2F0ZS0yMDIzLTAzLTA5L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1',
        urlToImage: null,
        publishedAt: '2023-03-09T11:10:00Z',
        content:
          'We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]',
      },

      {
        source: {
          id: 'google-news',
          name: 'Google News',
        },
        author: null,
        title:
          "Cryptoverse: Bitcoin moves towards Satoshi's payment dream - Reuters",
        description:
          "Cryptoverse: Bitcoin moves towards Satoshi's payment dream  Reuters",
        url:
          'https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYml0Y29pbi1tb3Zlcy10b3dhcmRzLXNhdG9zaGlzLXBheW1lbnQtZHJlYW0tMjAyMy0wMi0yOC_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1',
        urlToImage: null,
        publishedAt: '2023-02-28T06:18:00Z',
        content:
          'We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]',
      },

      {
        source: {
          id: 'google-news',
          name: 'Google News',
        },
        author: null,
        title:
          'Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens - Reuters',
        description:
          'Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens  Reuters',
        url:
          'https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtaG9va2VkLWdyb3d0aC1iaXRjb2luLWludmVzdG9ycy10dXJuLXNtYXJ0LXRva2Vucy0yMDIzLTAzLTA3L9IBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1',
        urlToImage: null,
        publishedAt: '2023-03-07T06:16:00Z',
        content:
          'We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'tmohamed@businessinsider.com (Theron Mohamed)',
        title:
          "Warren Buffett's business partner rips into 'cryptocrappo' - and says he's ashamed of America for embracing bitcoin and its kin",
        description:
          'Charlie Munger eviscerated the likes of bitcoin and dogecoin, dismissing them as stupid, worthless, and dangerous.',
        url:
          'https://markets.businessinsider.com/news/currencies/charlie-munger-warren-buffett-daily-journal-crypto-currency-bitcoin-regulation-2023-2',
        urlToImage:
          'https://i.insider.com/63edf9cb1d14070018bafbf1?width=1200&format=jpeg',
        publishedAt: '2023-02-16T11:14:48Z',
        content:
          'It\'s fair to say that Charlie Munger isn\'t the biggest fan of cryptocurrencies.\r\n"Sometimes I call it cryptocrappo and sometimes I call it, well, cryptoshit," the billionaire investor said during Dai… [+2118 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'insider@insider.com (Carla Mozée)',
        title:
          "El Salvador is opening a 'bitcoin embassy' in Texas in a bid to promote more acceptance of crypto",
        description:
          'El Salvador is reaching again beyond its borders to broaden its bitcoin strategy, following a partnership it struck with Switzerland last year.',
        url:
          'https://markets.businessinsider.com/news/currencies/bitcoin-el-salvador-cryptocurrency-embassy-texas-curreproject-adoption-bukele-2023-2',
        urlToImage:
          'https://i.insider.com/61df129d1025b20018bb5d05?width=1200&format=jpeg',
        publishedAt: '2023-02-15T20:00:16Z',
        content:
          'El Salvador is planning to open a "Bitcoin Embassy" in the US, continuing to push for wider adoption of the cryptocurrency even after losing millions of dollars on its high-profile bets on the token.… [+1572 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'insider@insider.com (Carla Mozée)',
        title:
          'Bitcoin edges higher after dismal February for risk assets as investors assess rate outlook and new China data',
        description:
          'Bitcoin has surged by more than 40% so far in 2023 and started off March on stronger footing.',
        url:
          'https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-stocks-china-manufacturing-data-risk-assets-copper-2023-3',
        urlToImage:
          'https://i.insider.com/63ff5968494c7a0019f21cb0?width=1200&format=jpeg',
        publishedAt: '2023-03-01T15:48:21Z',
        content:
          'Bitcoin pushed higher Wednesday, sustaining its advance alongside other risk assets after the strongest official  manufacturing print in a decade out of China kickstarted trading in March. \r\nThe worl… [+2631 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'bevans@insider.com (Brian Evans)',
        title:
          "Investor sentiment has become 'extremely greedy' and that makes the market fragile, says Fairlead's Katie Stockton",
        description:
          '"Sentiment has now gotten what we call sort of extremely greedy. You can see it maybe yesterday in bitcoin," according to Farilead\'s Katie Stockton.',
        url:
          'https://markets.businessinsider.com/news/stocks/investor-sentiment-greedy-fragile-stock-market-outlook-sp500-technical-analysis-2023-2',
        urlToImage:
          'https://i.insider.com/63c03c6033ffb700180f79e8?width=1200&format=jpeg',
        publishedAt: '2023-02-16T20:30:15Z',
        content:
          "After strong start to the year, the stock market now looks vulnerable as investors appear to be overdoing it, according to Fairlead Strategies' Katie Stockton. \r\nJanuary in particular saw some encour… [+1551 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'insider@insider.com (Carla Mozée)',
        title:
          'Bitcoin plunges under $20,000 to its lowest point in 2 months as Silvergate blow-up and bank fears rattle risk assets',
        description:
          'Bitcoin is veering toward a weekly loss as a fresh pain point for the crypto sector emerged from the failure of crypto-friendly Silvergate Bank.',
        url:
          'https://markets.businessinsider.com/news/currencies/bitcoin-price-20000-silvergate-ether-silicon-valley-bank-turmoil-markets-2023-3',
        urlToImage:
          'https://i.insider.com/5d669bfb2e22af0e7c65d5e8?width=1200&format=jpeg',
        publishedAt: '2023-03-10T16:22:49Z',
        content:
          'Bitcoin slumped to its lowest price in two months Friday as the collapse of crypto depositor Silvergate Bank and the blow-up of tech startup lender Silicon Valley Bank fueled a retreat by investors f… [+2141 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'rhogg@insider.com (Ryan Hogg)',
        title:
          "FTX has a massive $9.5 billion shortfall in top crypto and cash needed to repay customers, the bankrupt exchange's new bosses say",
        description:
          'In a presentation, lawyers for the bankrupt FTX identified billions of dollars in shortfalls across bitcoin, ethereum and other liquid assets.',
        url:
          'https://markets.businessinsider.com/news/currencies/ftx-crypto-shortfall-billions-sam-bankman-fried-exchange-bankruptcy-ftt-2023-3',
        urlToImage:
          'https://i.insider.com/63f892f288f76900192d1d30?width=1200&format=jpeg',
        publishedAt: '2023-03-03T11:26:38Z',
        content:
          "FTX has identified a $9.5 billion shortfall in top crypto and cash needed to repay customers, its new bosses have said, with just $694 million in currency that's easy to cash in.  \r\nIn a press releas… [+1756 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'rhogg@insider.com (Ryan Hogg)',
        title:
          'Drake scooped up a $512,000 profit in bitcoin after betting on the Kansas City Chiefs to win the Super Bowl',
        description:
          'The "God\'s Plan" singer placed seven bets worth a total of $965,000, but was only successful with his $700,000 punt on the Chiefs to beat the Eagles.',
        url:
          'https://markets.businessinsider.com/news/currencies/drake-512000-bitcoin-profit-betting-on-chiefs-super-bowl-win-2023-2',
        urlToImage:
          'https://i.insider.com/63ca6c452a1e600018b8d37f?width=1200&format=jpeg',
        publishedAt: '2023-02-14T16:26:38Z',
        content:
          "Drake scooped up $512,000 in bitcoin winnings after placing several bets on Sunday's Super Bowl, but it took a lot more of the cryptocurrency than last year to take his positions.\r\nAccording to a pos… [+1643 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          "US stocks fall as investors brace for further impacts of Silicon Valley Bank's collapse",
        description:
          "Goldman Sachs now expects the Fed to pause its rate hikes at next week's FOMC meeting as uncertainty related to the SVB's collapse soars.",
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-digest-silicon-valley-bank-collapse-2023-3',
        urlToImage:
          'https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg',
        publishedAt: '2023-03-13T13:43:37Z',
        content:
          'US stocks were lower on Monday after the Federal Reserve and US Treasury announced emergency measures to stop the spread of potential bank runs following the collapse of Silicon Valley Bank.\r\nThe mea… [+1210 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          'Bitcoin hits a 6-month high as the total crypto market regains $85 billion in value',
        description:
          "Crypto investors aren't in the clear yet, as macro conditions remain uncertain and risk appetite hinges on the Fed's next move.",
        url:
          'https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-6-month-high-btc-analysts-2023-2',
        urlToImage:
          'https://i.insider.com/63ee2a6c1d14070018bb0159?width=1200&format=jpeg',
        publishedAt: '2023-02-16T15:20:23Z',
        content:
          "Bitcoin's price hit a six-month high on Thursday as the cryptocurrency market's total value rose by nearly $85 billion to top $1.1 trillion.\r\nThe world's largest crypto is trading around $24,376, up … [+2677 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'ztayeb@businessinsider.com (Zahra Tayeb)',
        title:
          'Bitcoin rises and crypto market tops $1 trillion again after US regulators bail out SVB customers',
        description:
          "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank.",
        url:
          'https://markets.businessinsider.com/news/currencies/crypto-bitcoin-silicon-valley-bank-svb-customer-bailout-regulators-2023-3',
        urlToImage:
          'https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg',
        publishedAt: '2023-03-13T11:44:18Z',
        content:
          "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank. \r\nCryptos were staging a comeback fr… [+1897 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          'Crypto lost the battle to be an alternative to fiat money after FTX collapse, top economist says',
        description:
          '"Only the legal, historical infrastructure behind central banks can give great credibility [to money]," a top economist said.',
        url:
          'https://markets.businessinsider.com/news/currencies/crypto-lost-battle-alternative-fiat-money-central-banks-ftx-crash-2023-2',
        urlToImage:
          'https://i.insider.com/63f670355ca81e001855c2af?width=1200&format=jpeg',
        publishedAt: '2023-02-22T20:53:16Z',
        content:
          'Fiat money has beaten out an often-cited use case for certain cryptos an alternative to traditional currencies, according to Agustin Carstens, the head of the Bank for International Settlements.\r\n"I … [+1660 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          "FTX's collapse wiped out $200 billion in the total value of the cryptocurrency market, and it hit retail investors in emerging economies the hardest",
        description:
          'Larger crypto investors "tended to sell their coins right before steep price declines, while smaller investors were still buying," a new study found.',
        url:
          'https://markets.businessinsider.com/news/currencies/crypto-market-retail-investors-ftx-sbf-emerging-economies-bitcoin-ethereum-2023-2',
        urlToImage:
          'https://i.insider.com/63f4d2c25ca81e00185586e9?width=1200&format=jpeg',
        publishedAt: '2023-02-21T15:48:35Z',
        content:
          "Cryptocurrency markets lost $200 billion in value in the wake of FTX's downfall in November, a new report found, but losses weren't the same for investors across the board.\r\nRetail investors in emerg… [+1881 chars]",
      },

      {
        source: {
          id: 'bbc-news',
          name: 'BBC News',
        },
        author: 'https://www.facebook.com/bbcnews',
        title: 'Crypto-mining scheme run from US school crawl space',
        description:
          'Police were called after a janitor noticed electrical wires, ductwork and computers that looked amiss.',
        url: 'https://www.bbc.co.uk/news/world-us-canada-64767178',
        urlToImage:
          'https://ichef.bbci.co.uk/news/1024/branded_news/18622/production/_128747899_crypto.jpg',
        publishedAt: '2023-02-25T00:41:31Z',
        content:
          'A town official was running an illegal cryptocurrency mining operation from a crawl space under a school in the US state of Massachusetts, police say.\r\nNadeam Nahas, 39, who was an assistant faciliti… [+1974 chars]',
      },

      {
        source: {
          id: null,
          name: 'Boing Boing',
        },
        author: 'Mark Frauenfelder',
        title:
          'How scammers are using AI voice cloning to trick victims into sending money',
        description:
          'The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.\n\n\n\nOne example in the article is about the parents of a man named …',
        url:
          'https://boingboing.net/2023/03/06/how-scammers-are-using-ai-voice-cloning-to-trick-victims-into-sending-money.html',
        urlToImage:
          'https://i0.wp.com/boingboing.net/wp-content/uploads/2023/03/clone.jpg?fit=1200%2C832&ssl=1',
        publishedAt: '2023-03-06T18:53:31Z',
        content:
          'The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.One exa… [+1269 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'gglover@insider.com (George Glover)',
        title:
          '2 former Barclays bankers just netted a 700% profit selling Bored Ape NFTs',
        description:
          'Mike Anderson and Ovie Faruq offloaded their collection of 72 NFTs for $9.25 million this week, according to OpenSea data.',
        url:
          'https://markets.businessinsider.com/news/currencies/crypto-investing-news-nft-barclays-bankers-junk-bonds-bored-ape-2023-2',
        urlToImage:
          'https://i.insider.com/63f882ec88f76900192d1bf5?width=1200&format=jpeg',
        publishedAt: '2023-02-24T10:31:02Z',
        content:
          'Two former Barclays junk bond traders reportedly netted a 700% profit when they offloaded their collection of Bored Ape Yacht Club NFTs earlier this week.\r\nMike Anderson and Ovie Faruq sold the 72 NF… [+1998 chars]',
      },

      {
        source: {
          id: null,
          name: 'Slashdot.org',
        },
        author: 'msmash',
        title:
          'DeFi Lender Euler Finance Hit By $197 Million Hack, Experts Say',
        description:
          'Decentralized lending protocol Euler Finance was hit by an attack that drained $197 million in cryptocurrencies from its platform on Monday, making it the largest hack in its corner of the digital-assets market this year. From a report: The bulk of the hacker…',
        url:
          'https://it.slashdot.org/story/23/03/13/161224/defi-lender-euler-finance-hit-by-197-million-hack-experts-say',
        urlToImage: 'https://a.fsdn.com/sd/topics/security_64.png',
        publishedAt: '2023-03-13T16:01:00Z',
        content:
          "The bulk of the hacker's loot -- worth roughly $135 million -- was denominated in staked Ether tokens (stETH), while the remainder was held in wrapped Bitcoin and stablecoins DAI and USDC, according … [+790 chars]",
      },

      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author: 'Dan Milmo and agency',
        title:
          'Crypto bank Silvergate announces liquidation amid sector turmoil',
        description:
          'Wind-down and liquidation plan follows mass withdrawal of deposits after collapse of FTX exchange The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange…',
        url:
          'https://www.theguardian.com/technology/2023/mar/09/crypto-bank-silvergate-liquidation-sector-turmoil-wind-down-ftx-exchange',
        urlToImage:
          'https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_0_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65d8993a2a83c39065eb43558101253',
        publishedAt: '2023-03-09T14:45:15Z',
        content:
          'The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange FTX.\r\nThe California-based bank had w… [+3223 chars]',
      },

      {
        source: {
          id: null,
          name: 'Yahoo Entertainment',
        },
        author: 'Eliza Bavin',
        title:
          'Man has two more chances before $232M in Bitcoin is lost forever',
        description:
          'After misplacing his digital wallet password, this man has only two more attempts before his millions are lost forever.',
        url:
          'https://au.finance.yahoo.com/news/man-has-two-more-chances-before-232-million-is-lost-forever-222045101.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-07/8de88490-eda3-11eb-aefe-da5c70e019cd',
        publishedAt: '2023-03-05T23:55:37Z',
        content:
          'The German-born man has used eight of his 10 attempts to access his Bitcoin. (Source: Getty)\r\nBack when Bitcoin was worth only $5 a coin, Stefan Thomas was paid 7,002 of them for making a video expla… [+1554 chars]',
      },

      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author: 'Kalyeena Makortoff Banking correspondent',
        title:
          'City regulator joins Met in raids on suspected crypto ATM operations',
        description:
          'Joint investigation with police in London follows similar one in Leeds as part of wider crackdown on sectorThe City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of …',
        url:
          'https://www.theguardian.com/technology/2023/mar/08/city-regulator-met-raids-suspected-crypto-atm-operations-police-london-leeds-crackdown-fca',
        urlToImage:
          'https://i.guim.co.uk/img/media/f2e32f3b1abdf154154e4d021b13facc51d838b5/0_0_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=84b77443e4ec015e06f4a4ef30c9b2f5',
        publishedAt: '2023-03-08T12:22:28Z',
        content:
          'The City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of a widening crackdown on the sector.\r\nThe joint … [+1974 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'prosen@insider.com (Phil Rosen)',
        title: 'US stocks trade higher a day ahead of a key inflation reading',
        description:
          'Traders will be watching for a slew of corporate earnings this week, and on Tuesday fresh consumer price index data comes out.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-trade-cpi-reading-investing-earnings-2023-2',
        urlToImage:
          'https://i.insider.com/63ea44954102a900184c8015?width=1200&format=jpeg',
        publishedAt: '2023-02-13T14:33:25Z',
        content:
          "US stocks traded slightly higher Monday as traders look ahead to a key inflation reading coming on Tuesday that could sway the Federal Reserve's policy plans. \r\nEconomists expect January's headline c… [+1164 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'bevans@insider.com (Brian Evans)',
        title:
          'US stocks finish higher after volatile session as S&P 500 breaks out of slump',
        description:
          'Trading was volatile as the major indexes swung between gains and losses intraday, following a big sell-off earlier in the week.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-ends-losing-streak-gdp-revision-2023-2',
        urlToImage:
          'https://i.insider.com/6352c3d7ffcac3001876bb26?width=1200&format=jpeg',
        publishedAt: '2023-02-23T21:05:21Z',
        content:
          'US stocks closed higher on Thursday, with the S&amp;P 500 breaking a streak of four consecutive losses. \r\nMarkets swung between gains and losses, following a big sell-off earlier in the week. The rel… [+1160 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          'US stocks rise as investors await Fed minutes to gauge interest rate trajectory',
        description:
          'Fed presidents like James Bullard and Loretta Mester have recently advocated for a return to 50-basis-point rate hikes to combat inflation.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-interest-rate-clues-inflation-2023-2',
        urlToImage:
          'https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg',
        publishedAt: '2023-02-22T14:33:38Z',
        content:
          "US stocks edged higher on Wednesday as investors await the release of minutes from the Federal Reserve's last FOMC meeting.\r\nInvestors will look for clues on the trajectory of future interest rate hi… [+1245 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'prosen@insider.com (Phil Rosen)',
        title:
          'US stocks rise as investors assess softer employment data and brace for key jobs report',
        description:
          'Weekly jobless claims totaled 211,000, an increase of 21,000 from the previous week and ahead of estimates for 195,000.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-jobless-claims-jerome-powell-rate-hikes-2023-3',
        urlToImage:
          'https://i.insider.com/61afa5886531110019cef403?width=1200&format=jpeg',
        publishedAt: '2023-03-09T14:36:51Z',
        content:
          "US stocks rose Thursday following higher-than-expected jobless claims data and ahead of Friday's key nonfarm payrolls report. \r\nInitial filings for unemployment clocked in at 211,000 last week, up by… [+860 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title: 'The stock market has been flipped upside down',
        description:
          'JPMorgan says this risk-seeking behavior is practically taunting the Fed, which is still hiking interest rates to bring inflation down.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-trends-flipped-upside-down-investors-defy-fed-2023-2',
        urlToImage:
          'https://i.insider.com/63eea93db66c280019d77cbd?width=1200&format=jpeg',
        publishedAt: '2023-02-18T10:00:00Z',
        content:
          'The stock market has been completely flipped upside down so far in 2023 as risky assets that struggled last year stage a big comeback, even in the face of continued rate hikes from the Federal Reserv… [+4365 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          'US stocks trade mixed as Fed minutes show central bank willing to push on with rate hikes to fight inflation',
        description:
          'The Fed minutes showed that some central bankers were supportive of a 50 basis point interest rate hike at its February FOMC meeting.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-more-interest-rate-hikes-2023-2',
        urlToImage:
          'https://i.insider.com/639b5eb2b7e0f200180939e7?width=1200&format=jpeg',
        publishedAt: '2023-02-22T21:06:27Z',
        content:
          "US stocks ended mixed on Wednesday after minutes from the Federal Reserve's last meeting showed that inflation remains a top concern for the central bank as it remains well above its long-term target… [+1279 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'bevans@insider.com (Brian Evans)',
        title:
          'US stocks rise as the S&P 500 looks to snap a 4-day losing streak',
        description:
          'The S&P 500 has notched four straight losses, which is the longest losing streak for the benchmark so far in 2023.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-losing-streak-nasdaq-dow-2023-2',
        urlToImage:
          'https://i.insider.com/63f776fb88f76900192cf333?width=1200&format=jpeg',
        publishedAt: '2023-02-23T14:47:30Z',
        content:
          'US stocks opened higher on Thursday, with major indexes set to mark a turnaround from a disappointing week. \r\nThe S&amp;P 500 has notched four straight losses, which is the longest losing streak for … [+1131 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'insider@insider.com (Carla Mozée)',
        title:
          'Fake ChatGPT tokens are flooding the market as crypto scammers take advantage of the AI craze',
        description:
          'Blockchain security company PeckShield alerted crypto investors that at least one issuer has created "dozens of tokens with a pump & dump scheme."',
        url:
          'https://markets.businessinsider.com/news/currencies/chatgpt-tokens-cryptocurrency-fake-scammers-bing-microsoft-ai-artificial-intelligence-2023-2',
        urlToImage:
          'https://i.insider.com/63db8cdee33c4000193aa1fb?width=1200&format=jpeg',
        publishedAt: '2023-02-21T17:07:12Z',
        content:
          "ChatGPT's popularity has inspired scammers to unleash a wave of unauthorized cryptocurrencies designed to appear as if they're affiliated with the chatbot that's sparked 2023's AI investing frenzy. \r… [+1335 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          'US stocks fall after hot retail sales report suggests higher interest rates for longer',
        description:
          'January retail sales surged 3%, well above economist estimates of 1.8% and represented the biggest monthly gain for retail sales since March 2021.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-hot-retail-sales-report-higher-rates-2023-2',
        urlToImage:
          'https://i.insider.com/62824e98e7446d0018cc9eeb?width=1200&format=jpeg',
        publishedAt: '2023-02-15T14:36:40Z',
        content:
          'US stocks dropped on Wednesday after a hotter-than-expected retail sales report suggested to investors that interest rates might stay higher for longer.\r\nRetail sales in January surged 3%, which was … [+927 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          'US stocks close lower to wrap up losing week as hot inflation data jolts markets',
        description:
          'The drop on Friday follows higher-than-expected core PCE data. The two-year Treasury yield neared its highest level since 2007.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-sp500-nasdaq-dow-bond-yields-inflation-data-2023-2',
        urlToImage:
          'https://i.insider.com/63dba59ee33c4000193aa450?width=1200&format=jpeg',
        publishedAt: '2023-02-24T21:08:32Z',
        content:
          'US stocks fell on Friday to close out a losing week, with the S&amp;P 500 notching its worst weekly performance since mid-December.\r\nThe Nasdaq Composite and Dow Jones Industrial Average also ended l… [+913 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          'US stocks dip to start the month as investors grapple with fears of interest rates higher for longer',
        description:
          'The Federal Reserve is expected to hike interest rates at least two more times to the 5% level, but further increases could be possible.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-fear-high-interest-rates-fed-2023-3',
        urlToImage:
          'https://i.insider.com/6360270d0b271e00186bb924?width=1200&format=jpeg',
        publishedAt: '2023-03-01T14:36:47Z',
        content:
          'US stocks started the month of March in the red as investors continue to fear the prospect of higher for longer interest rates.\r\nThe inflation rate unexpectedly accelerated in Germany last month, and… [+901 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          'US stocks rally as traders digest comments from Fed officials on coming rate hikes',
        description:
          "The Dow popped more than 300 points, supported by Salesforce's gains. Meanwhile, the 2-year note yield reached levels not seen in over a decade.",
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-fed-rates-bostic-2023-3',
        urlToImage:
          'https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg',
        publishedAt: '2023-03-02T21:05:32Z',
        content:
          "US stocks rallied Thursday as a Federal Reserve official's comments on coming interest rates hikes cheered investors.\r\nAfter opening in mixed territory, the major indexes closed in the green, even as… [+1204 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'tmohamed@businessinsider.com (Theron Mohamed)',
        title:
          'Charlie Munger torched crypto and touted BYD over Tesla. Cathie Wood, Robert Kiyosaki, and Patrick Byrne just called him out.',
        description:
          "Warren Buffett's business partner and Berkshire Hathaway's 99-year-old vice-chairman fails to grasp the power of Tesla's innovation, Wood said.",
        url:
          'https://markets.businessinsider.com/news/currencies/wood-kiyosaki-byrne-munger-musk-tesla-byd-ev-crypto-bitcoin-2023-2',
        urlToImage:
          'https://i.insider.com/63f3505e7b15f100194d28b3?width=1200&format=jpeg',
        publishedAt: '2023-02-20T11:39:00Z',
        content:
          "Charlie Munger panned bitcoin and other cryptocurrencies as stupid, worthless, and dangerous during Daily Journal's recent annual meeting.\r\nThe 99-year-old billionaire and vice-chairman of Warren Buf… [+3458 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          "A top exec at the world's largest crypto exchange breaks down the single-biggest risk for the market in 2023",
        description:
          'Binance Chief Strategy Officer Patrick Hillmann explained how poor regulation will lead to increased crypto market volatility.',
        url:
          'https://markets.businessinsider.com/news/currencies/crypto-market-outlook-binance-exec-exchange-sec-regulation-stablecoin-2023-2023-2',
        urlToImage:
          'https://i.insider.com/63ed3b49dd6fcf00194a8a3e?width=1200&format=jpeg',
        publishedAt: '2023-02-20T13:15:00Z',
        content:
          "Cryptocurrency markets have made significant strides to recover from 2022' crises, with bitcoin soaring about 50% since the start of the year and the total crypto market value edging back above $1 tr… [+3595 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'gglover@insider.com (George Glover)',
        title:
          "Binance secretly moved $400 million from its US partner to a trading firm managed by the crypto giant's boss CZ, report says",
        description:
          "The supposedly independent Binance.US secretly sent large sums of money to Changpeng Zhao's trading firm, according to Reuters.",
        url:
          'https://markets.businessinsider.com/news/currencies/binance-crypto-exchange-secret-transfer-changpeng-zhao-cz-ftx-alameda-2023-2',
        urlToImage:
          'https://i.insider.com/63ef47fbf24f34001864bc4c?width=1200&format=jpeg',
        publishedAt: '2023-02-17T10:49:32Z',
        content:
          "Binance secretly moved large sums of money from its supposedly independent US partner to a company managed by the crypto giant's boss Changpeng Zhao, according to Reuters.\r\nThe publication said Thurs… [+1718 chars]",
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mchittum@insider.com (Morgan Chittum)',
        title:
          'US stocks trade mixed as inflation concerns keep traders on edge over higher rates',
        description:
          'The S&P 500 and the tech-heavy Nasdaq Composite were both on track for their second consecutive losing week.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-fed-outlook-interest-rates-2023-3',
        urlToImage:
          'https://i.insider.com/63f8c9934ca0e30019ba4b45?width=1200&format=jpeg',
        publishedAt: '2023-03-02T14:45:17Z',
        content:
          'US stocks stocks were mixed on Thursday as traders continue to mull the prospect of higher interest rates amid signs the economy remains in high gear. \r\nAll three major indexes were on track for a lo… [+1519 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'tmohamed@businessinsider.com (Theron Mohamed)',
        title:
          'Reddit cofounder Alexis Ohanian paid only $15,000 for ether worth $80 million today - and has made $50 million on the crypto and Coinbase stock',
        description:
          'Ohanian bought 50,000 ether for about 30 cents a coin in 2014. The cryptocurrency has surged in price by about 5,600 times to $1,600 since then.',
        url:
          'https://markets.businessinsider.com/news/currencies/reddit-alexis-ohanian-crypto-ether-coinbase-stock-blockchain-nft-metaverse-2023-2',
        urlToImage:
          'https://i.insider.com/5f29b20c4e52b750cc095bcf?width=1200&format=jpeg',
        publishedAt: '2023-02-22T17:05:05Z',
        content:
          'Alexis Ohanian bought 50,000 ether for only $15,000 in 2014 and has made a combined $50 million from early bets on the cryptocurrency and Coinbase stock, he told Forbes in a recent interview.\r\nWhen h… [+1692 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'mfox@businessinsider.com (Matthew Fox)',
        title:
          'US stocks shake off contagion fears to trade mixed amid hopes SVB crisis spurs Fed policy shift',
        description:
          '"We are looking at a historic 2-day drop in the 2-year yield, the largest since right after the 1987 crash," Carson Group\'s Ryan Detrick told Insider.',
        url:
          'https://markets.businessinsider.com/news/stocks/stock-market-news-today-regional-bank-contagion-fears-crisis-svb-2023-3',
        urlToImage:
          'https://i.insider.com/624c427316e2c400196663ce?width=1200&format=jpeg',
        publishedAt: '2023-03-13T20:13:41Z',
        content:
          'US stocks proved resilient on Monday, trading mixed despite the continued fallout from the collapse of Silicon Valley Bank and Signature Bank at the end of last week. \r\nHelping stocks recover from an… [+1297 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'gglover@insider.com (George Glover)',
        title:
          "Binance boss CZ distances his exchange from the dollar-pegged token under fire from the SEC: 'That's not something we created'",
        description:
          'The SEC has ordered Paxos to stop minting a Binance-branded token pegged to $1 as part of its ongoing crypto crackdown.',
        url:
          'https://markets.businessinsider.com/news/currencies/binance-cz-changpeng-zhao-paxos-busd-stablecoin-sec-crypto-crackdown-2023-2',
        urlToImage:
          'https://i.insider.com/63ecba2aeeb52e001886928d?width=1200&format=jpeg',
        publishedAt: '2023-02-15T12:11:10Z',
        content:
          "Binance chief Changpeng Zhao has downplayed the link between his exchange and a token carrying its branding that's currently under fire from the Securities and Exchange Commission.\r\nZhao, who's frequ… [+1740 chars]",
      },

      {
        source: {
          id: null,
          name: 'The Guardian',
        },
        author: 'John Naughton',
        title:
          'Crypto is intended to be hard to regulate, but at least the Treasury wants to have a go | John Naughton',
        description:
          'The government’s consultation document on cryptocurrency highlights the challenges that must be faced in the regulatory processFor my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage …',
        url:
          'https://www.theguardian.com/commentisfree/2023/feb/25/crypto-is-intended-to-be-hard-to-regulate-but-at-least-the-treasury-wants-to-have-a-go',
        urlToImage:
          'https://i.guim.co.uk/img/media/61b8dba17ab10f586222f5c41d20bcf48c460e42/0_213_4734_2841/master/4734.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=448de8728906b8d47d286ec5c6a7f188',
        publishedAt: '2023-02-25T16:00:05Z',
        content:
          'For my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage that was published recently, setting out HM Treasurys plans to gove… [+5792 chars]',
      },

      {
        source: {
          id: null,
          name: 'Mullvad.net',
        },
        author: null,
        title: 'Mullvad campaign against EU chat control',
        description:
          'Mullvad is a VPN service that helps keep your online activity, identity, and location private. Only €5/month - We accept Bitcoin, cash, bank wire, credit card, PayPal, and Swish.',
        url: 'https://mullvad.net/en/chatcontrol/campaign',
        urlToImage:
          'https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_positive.png',
        publishedAt: '2023-03-10T14:25:48Z',
        content:
          'A democratic society is built upon discussions, before law proposals become reality. We started the conversation on the streets of Sweden, during the countrys EU presidency.',
      },

      {
        source: {
          id: 'abc-news',
          name: 'ABC News',
        },
        author: 'Peter Charalambous',
        title:
          'Man arrested after hiding cryptocurrency miner in school crawl space',
        description:
          'A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation.',
        url:
          'https://abcnews.go.com/US/massachusetts-man-charged-after-hiding-cryptocurrency-mining-rig/story?id=97440173',
        urlToImage:
          'https://s.abcnews.com/images/US/cryptocurrency-mine-ht-thg-230224_1677245117035_hpMain_16x9_992.jpg',
        publishedAt: '2023-02-24T17:02:35Z',
        content:
          'A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation in a crawl space of a middle sch… [+1648 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'tmaxwell@insider.com (Thomas Maxwell)',
        title:
          "Inside the self-proclaimed first generative AI conference, executives explain why the hot new technology behind ChatGPT is 'not just hype, but something real'",
        description:
          "Move aside, crypto: a new conference in San Francisco put a spotlight on the tech industry's new love: generative AI.",
        url:
          'https://www.businessinsider.com/chatgpt-generative-ai-genai-jasper-conference-crypto-san-francisco-2023-2',
        urlToImage:
          'https://i.insider.com/63f0287c5ca81e00185567d4?width=1200&format=jpeg',
        publishedAt: '2023-02-18T11:50:00Z',
        content:
          '"It\'s a step forward in humanity," one VC said of generative AI. An executive compared it to the Gutenberg press. A CEO called the technology  "not just hype, but something real." \r\nThat\'s how attend… [+5997 chars]',
      },

      {
        source: {
          id: null,
          name: 'Slashdot.org',
        },
        author: 'msmash',
        title: 'Zombie Newspaper Sites Rise from the Grave',
        description:
          'What happens when a newspaper dies? Apparently, in some cases, its digital ghost lives on in mysterious, unrecognizable forms. From a report: Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues t…',
        url:
          'https://tech.slashdot.org/story/23/03/01/189239/zombie-newspaper-sites-rise-from-the-grave',
        urlToImage: 'https://a.fsdn.com/sd/topics/internet_64.png',
        publishedAt: '2023-03-01T18:09:00Z',
        content:
          'Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues to post fresh content under the auspices of a Delaware "SEO company" whose leader l… [+2226 chars]',
      },

      {
        source: {
          id: 'business-insider',
          name: 'Business Insider',
        },
        author: 'prosen@insider.com (Phil Rosen)',
        title:
          'The chief executive of an AI-driven markets analytics company breaks down how to invest in the craze sparked by ChatGPT',
        description:
          "Insider's Phil Rosen sits down with Jan Szilagyi, the CEO of Toggle AI, to discuss how markets are handling the artificial intelligence boom.",
        url:
          'https://www.businessinsider.com/investing-ai-exec-markets-toggle-microsoft-google-amazon-tech-economy-2023-2',
        urlToImage:
          'https://i.insider.com/63ef792fe083d60018efbeb2?width=1200&format=jpeg',
        publishedAt: '2023-02-18T12:00:00Z',
        content:
          "Happy Saturday readers. I'm senior reporter Phil Rosen.\r\nAs a journalist, I'm always keen on interesting conversations especially when I get the chance to share them in this newsletter. \r\nHave a sugg… [+5402 chars]",
      },
    ],
  }

  const handleClickNews = (article: Article) => {
    history.push({ pathname: 'news-detail', state: article })
  }

  return {
    data: customDFata,
    loading: false,
    error: false,
    searchKey,
    handleClickNews,
  }
}

export default useIndex
