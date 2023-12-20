import React from "react";
import { CRYPTO_COMPARE } from "../keys";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    // times: [],
    // high: [],
    // low: [],
    // chartData: [],
    query: "BTC",
    // leaderboard: [],
    // addressData: "",
    symbol: "",
  };

  componentDidMount() {
    // this.loadChartData();
  }

  // loadChartData = async () => {
  //   const response = await fetch(
  //     `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
  //   );
  //   const data = await response.json();
  //   const bulkData = data.Data.Data;
  //   const dataArray = [];
  //   {
  //     bulkData.map((y) =>
  //       dataArray.push({
  //         x: y.time * 1000,
  //         y: y.transaction_count * y.average_transaction_value,
  //       })
  //     );
  //   }
  //   // this.setState({ chartData: dataArray });
  //   this.setState({ symbol: this.state.query });
  // };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };
  render() {
    const { chartData, query, addressData, symbol } = this.state;

    return (
      <div>
        <div className="inputDiv">
          <input
            placeholder="Search for a symbol"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
            className="dataRequest"
          />
          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              showSymbolLogo: true,
              isTransparent: true,
              displayMode: "adaptive",
              colorTheme: "dark",
              autosize: true,
              symbols: [
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD",
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD",
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT",
                },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD",
                },
                {
                  proName: "BINANCE:DOTUSDT",
                  title: "DOT/USDT",
                },
                {
                  proName: "UNISWAP:UNIUSDT",
                  title: "UNI/USDT",
                },
              ],
            }}
          />
        </div>
        <div className="charty">
          {query.length > 2 ? (
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "dark",
                width: "100%",
                symbol: query + "USD",
                studies: [
                  "MACD@tv-basicstudies",
                  "StochasticRSI@tv-basicstudies",
                  "TripleEMA@tv-basicstudies",
                ],
              }}
            />
          ) : (
            "BTCUSD"
          )}
        </div>
      </div>
    );
  }
}

// const Chart = (props) => {
//   return (
//     <div>
//       <div className="chart">
//         <p className="chart-data" key={props.time}>
//           {"time" + props.time}
//         </p>
//         <p className="chart-data" key={props.active_addresses}>
//           {"active addresses" + props.active_addresses}
//         </p>
//         {}
//       </div>
//     </div>
//   );
// };

// const Leader = (props) => {
//   return (
//     <div className="leaderItem">
//       <a href={props.url} target="#">
//         <img src={props.logo} alt={props.symbol} className="logo" />
//       </a>
//       <p className="leaderText">{props.symbol}</p>
//       <p className="leaderText">{props.price}</p>
//     </div>
//   );
// };

// const HoverHint = ({ active, data, query, symbol }) => (
//   <div className={`nonActive ${active ? "active" : ""}`}>
//     <p className="hoverData">
//       {data.length > 1
//         ? query
//         : symbol.toUpperCase() +
//           "  - Raw Averaged Volume (Transactions * Average Value $USD)"}
//     </p>
//     <p className="hoverData">
//       {data.length < 1 ? "" : data.time + " - " + formatter.format(data.price)}{" "}
//     </p>
//     {}
//   </div>
// );

export default Dashboard;
