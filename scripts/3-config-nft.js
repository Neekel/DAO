import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x86C82749FA1Cc2A61145414c0A28788678639c31",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "CannaDAO Members",
        description: "This NFT will give you access to CannaDAO!",
        image: readFileSync("scripts/assets/canna.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()