import { behavesLikeRescuable } from "./Rescuable.behavior";
import {
  FiatTokenV11Instance,
  RescuableInstance,
} from "../../@types/generated";

const FiatTokenV1_1 = artifacts.require("FiatTokenV1_1");

contract("FiatTokenV1_1", (accounts) => {
  let fiatToken: FiatTokenV11Instance;

  beforeEach(async () => {
    fiatToken = await FiatTokenV1_1.new();
    const owner = accounts[0];
    await fiatToken.initialize(
      "USD Coin",
      "USDC",
      "USD",
      6,
      owner,
      owner,
      owner,
      owner
    );
  });

  behavesLikeRescuable(() => fiatToken as RescuableInstance, accounts);
});
