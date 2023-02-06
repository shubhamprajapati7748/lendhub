import Image from "next/image";
import React, { useContext } from "react";

import lendContext from "../context/lendContext";
import { RowSupply } from "../components";

import { ether, dai, usdc, usdt } from "../assets";

const SupplyAssets = () => {
  const { supplyEther, supplyDAI, supplyUSDC, supplyUSDT, supplyWrapperEther } =
    useContext(lendContext);

  const tokenArray = [
    {
      image: ether,
      name: "ETH",
      balance: supplyEther,
      isCollateral: true,
    },
    {
      image: dai,
      name: "DAI",
      balance: supplyDAI,
      isCollateral: true,
    },
    {
      image: usdc,
      name: "USDC",
      balance: supplyUSDC,
      isCollateral: true,
    },
    {
      image: usdt,
      name: "USDT",
      balance: "0",
      isCollateral: true,
    },
  ];

  return (
    <div className="w-full md:w-1/2 h-30 bg-white rounded-md ">
      <h1 className="px-6 py-5 font-semibold text-md">Assets to supply</h1>

      <div className="pt-3">
        <table className="item-center w-full border-collapse bg-transparent">
          <thead>
            <tr>
              <th className="font-medium text-xs px-3 text-[#62677B] text-left align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap ">
                Assets
              </th>
              <th className="font-medium text-xs px-3 text-[#62677B] text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap ">
                Wallet Balance
              </th>
              <th className="font-medium text-xs px-3 text-[#62677B] text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap ">
                APY
              </th>
              <th className="font-medium text-xs px-3 text-[#62677B] text-center align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap ">
                Can be collateral
              </th>
              <th className="font-medium text-xs px-3 text-[#62677B] text-left align-middle border-b-[1px] border-blueGrey-100 whitespace-nowrap "></th>
            </tr>
          </thead>

          <tbody>
            {tokenArray.map((token, index) => (
              <RowSupply
                key={index}
                name={token.name}
                image={token.image}
                balance={token.balance}
                isCollateral={token.isCollateral}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplyAssets;