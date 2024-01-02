import React, { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { Input } from "./Input";

export const Coin = () => {
  const { cointPage, search, handleChange, renderButton, loading } =
    useContext(CoinContext);
  return (
    <div className="w-full bg-purple-100 rounded-md py-[3rem] text-black">
      <div className="my-0 mx-auto w-[90%] ">
        <div className="text-center py-[1rem]">
          <Input search={search} handleChange={handleChange} />
        </div>
        <div className="flex flex-col overflow-x-auto md:overflow-hidden w-full h-auto whitespace-nowrap">
          <div className="flex justify-between md:grid md:grid-cols-four gap-[2rem] md:gap-[2rem] px-[0.6rem] text-center md:text-right py-[0.7rem] bg-gradient-to-r from-purple-800 via-purple-500 to-black rounded-t-md font-semibold text-slate-50 text-[1rem] w-fit md:w-full">
            <p className="w-[10rem] md:w-auto text-left">Coin</p>
            <p className="w-[10rem] md:w-auto">Price</p>
            <p className="w-[10rem] md:w-auto">24Change</p>
            <p className="w-[10rem] md:w-auto">Market Cap</p>
          </div>

          <div className="flex flex-col w-fit md:w-full">
            {loading ? (
              <p>...Loading</p>
            ) : (
              <>
                {cointPage}
                <div className="flex justify-center items-center gap-2 py-[1rem]">{renderButton()}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
