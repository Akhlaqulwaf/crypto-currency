import React from "react";

export const CoinData = (data) => {
  return data.map((coin, id) => {
    return (
      <div
        key={id}
        className="grid grid-cols-four gap-[8rem] md:gap-[2rem] py-[1rem] items-center border-b border-black text-right font-semibold text-[0.9rem]"
      >
        <span className="flex justify-start items-center gap-[1rem] px-[0.6rem] w-[7rem] md:w-auto whitespace-pre-line">
          <img className="w-10" src={coin.image} alt="" />
          {coin.name}
        </span>
        <p>${coin.current_price}</p>

        <p
          className={`${
            coin.price_change_24h < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {coin.price_change_24h.toFixed(2)}%
        </p>

        <p className="px-[0.6rem]">${coin.market_cap}</p>
      </div>
    );
  });
};
