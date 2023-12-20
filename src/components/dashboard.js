import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    query: "BTC",
    symbol: "",
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };
  render() {
    const { query } = this.state;

    return (
      <div>
        <div className="inputDiv">
          <input
            placeholder="Search for a symbol"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
            className="dataRequest"
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

export default Dashboard;
