"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "c3ce18acfd26400d197dca0115574f3c";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);
      });
  }, []);

  return (

    <div className='bg-gray-400 min-h-screen flex items-center justify-center'>

    <div className="coin-market">
      <h1 className="font-bold text-5xl">Crypto Currency Market  </h1>
      <br />
      <h1 className="font-bold text-3xl">Coin CSR</h1>
         <div className="coin-container">
         <div className="coin-block">
      <p className="coin-block">BTC: {data?.rates?.BTC}</p>
      <p className="coin-block">BNB: {data?.rates?.BNB}</p>
      <p className="coin-block">ACP: {data?.rates?.ACP}</p>
      <p className="coin-block">ADZ: {data?.rates?.ADZ}</p>
      <p className="coin-block">ADX: {data?.rates?.ADX}</p>
      <p className="coin-block">ACT: {data?.rates?.ACT}</p>
      <p className="coin-block">ADCN:{data?.rates?.ADCN}</p>
      <p className="coin-block">ABC: {data?.rates?.ABC}</p>
      
     </div>
    </div>
    </div>
      
      </div>
    );
}