function MarketUpdate () {

    return(
        <div>
            <section id="market" className="market-section">
                <div className="container">
                    <div className="market-content">
                        <h2>Market Update</h2>
                        <div className="market-content__coin-list">
                            <div className="market-content__coin-list__top">
                                <p>Coin</p>
                                <p>Price</p>
                                <p>24h Change</p>
                                <p>Market Cap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MarketUpdate;