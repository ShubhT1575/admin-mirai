import {
  getBalance,
  getToken,
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import { ContractABI, ContractAddress, TokenABI } from "./Config";
import { config } from "../main";

export const checkAllowance = async (owner, TokenAddress) => {
  const result = await readContract(config, {
    abi: TokenABI,
    address: TokenAddress,
    functionName: "allowance",
    args: [owner, ContractAddress],
  });
  return Number(result);
};

export const tokenApprove = async (amt, TokenAddress, tokenDecimal) => {
  const result = await writeContract(config, {
    abi: TokenABI,
    address: TokenAddress,
    functionName: "approve",
    args: [
      ContractAddress,
      (amt * Number("1e" + tokenDecimal)).toLocaleString("fullwide", {
        useGrouping: false,
      }),
    ],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const buyPackage = async (ref, amt, tokenDecimal) => {
  console.log(ref, amt, tokenDecimal, ":::::buypackage");
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "registerExt",
    args: [ref],
  });
  console.log(result, "result");
  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  console.log(receipt, "receipt");
  return receipt;
};

export const userRegister = async (ref, packageId) => {
  console.log(ref, packageId, ":::::package");
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "registrationEx",
    args: [ref,packageId],
  });
  console.log(result, "result");
  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  console.log(receipt, "receipt");
  return receipt;
};
  

export const buySlot= async (amt,id,tokenDecimal) => {
  console.log(amt,id, tokenDecimal, ":::::buypackage");
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "purchaseSlot",
    args: [id],
  });
  console.log(result, "result");
  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  console.log(receipt, "receipt");
  return receipt;
};

export const buyMatrix= async (id) => {
  console.log(id, "buyMatrix");
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "buyMatrix",
    args: [id],
  });
  console.log(result, "result");
  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  console.log(receipt, "receipt");
  return receipt;
};

export const UserExist = async (address) => {
  console.log(address,"addddd")
  let result;
  try {
    result = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "isUserExists",
      args: [address],
    });
    return result;
  } catch (error) {
    console.log("Error checking if user exists:", error);
    return false;
  }
};
export const getPendingCycle = async (user,id) => {
  // console.log(address,"addddd")
  let result;
  try {
    result = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getPendingCycle",
      args: [user,id],
    });
    return result;
  } catch (error) {
    console.log("Error checking if user exists:", error);
    return false;
  }
};
export const getReinvestCount = async (user,id) => {
  // console.log(address,"addddd")
  let result;
  try {
    result = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getReinvestCount",
      args: [user,id],
    });
    return result;
  } catch (error) {
    console.log("Error checking if user exists:", error);
    return false;
  }
};

export const UserData = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "users",
      args: [address],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};


export const getActiveSlotData = async (address,id) => {
  console.log(address,id,"111111111")
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getActiveSlot",
      args: [address,id],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};

export const StakingTotalReward = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getStakingTotalReward",
      args: [address],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};

export const RankTotalReward = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getRankTotalReward",
      args: [address],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};

export const UserClaimStakeReward = async () => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "claimStakeReward",
    args: [],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const getOwner = async () => {
  const result = await readContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "owner",
    args: [],
  });
  return result;
};

export const getDailyReward = async () => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "dailyReward",
    args: [],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const RewardWallet = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getRewardWallet",
      args: [address],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};
  
export const LevelTeamBusiness = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getLevelTeamBusiness",
      args: [address,1],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};

export const FundingWalletStakingReward = async (address) => {
  let data;
  try {
    data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "getFundingWalletStakingReward",
      args: [address],
    });
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
    data = null;
  }
  return data;
};
// getFundingWalletStakingReward


export const depoInSpotWallet = async (amt) => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "depositInSpotWallet",
    args: [amt],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const transferToFundWallet = async () => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "transferRewardWalletToFundWallet",
    args: [],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const withdrawFundWallet = async () => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "withdrawFromFundWallet",
    args: [],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const ClaimRankReward = async () => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "claimRankReward",
    args: [],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const UpgradeAmount = async (amt, tokenDecimal) => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "stake",
    args: [(amt * Number("1e" + tokenDecimal)).toString()],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const LapseWallet = async (address) => {
  const result = await writeContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "setLapseWallet",
    args: [address],
  });

  const receipt = await waitForTransactionReceipt(config, {
    hash: result,
  });
  return receipt;
};

export const CurrentLapseAdd = async () => {
  const result = await readContract(config, {
    abi: ContractABI,
    address: ContractAddress,
    functionName: "lapseWallet",
    args: [],
  });
  return result;
};

export const getUSDT = async () => {
  try {
    const data = await readContract(config, {
      abi: ContractABI,
      address: ContractAddress,
      functionName: "USDT",
    });
    // console.log(data, "data..............");

    const token = await getToken(config, {
      address: data,
    });
    return token;
  } catch (error) {
    console.error("Error checking if Data is not fetch", error);
  }
};

export function cutAfterDecimal(number, pos, dl, ac) {
  if (Number(number)) {
    if (dl) {
      const limit = dl?.decimalLimit[ac] > 0 ? dl?.decimalLimit[ac] : 5;
      const res =
        number?.toString()?.indexOf(".") > -1
          ? number
              .toString()
              .slice(0, number.toString().indexOf(".") + limit + 1)
          : number;
      return res;
    } else {
      const res =
        number?.toString()?.indexOf(".") > -1
          ? number.toString().slice(0, number.toString().indexOf(".") + pos + 1)
          : number;
      return res;
    }
  } else {
    return 0;
  }
}
