import { readFileSync } from "fs";
import { join, resolve } from "path";

import { createData, TorspecKeyblindSigner } from "../../index";
import { torspecKeyblindPublicKeyFromExpandedKey } from "../signing/chains/TorspecKeyblindSigner";

const EXAMPLE_MASTER_ID_PUBLIC_KEY = readFileSync(join(resolve(), "./src/__tests__/test_keys/torspec_keyblind_master_id_public_key"));
const EXAMPLE_MASTER_ID_SECRET_KEY = readFileSync(join(resolve(), "./src/__tests__/test_keys/torspec_keyblind_master_id_secret_key"));
const EXAMPLE_SIGNING_CERT = readFileSync(join(resolve(), "./src/__tests__/test_keys/torspec_keyblind_signing_cert"));
const EXAMPLE_SIGNING_SECRET_KEY = readFileSync(join(resolve(), "./src/__tests__/test_keys/torspec_keyblind_signing_secret_key"));

describe("TorspecKeyblindSigner", () => {
  it("signs & verifies stuff", async () => {
    const certifiedKey = EXAMPLE_SIGNING_CERT.subarray(39, 71);
    const extData = EXAMPLE_SIGNING_CERT.subarray(76, 108);
    const signature = EXAMPLE_SIGNING_CERT.subarray(108, 172);
    const digest = EXAMPLE_SIGNING_CERT.subarray(32, EXAMPLE_SIGNING_CERT.length - 64);
    const masterIdPublicKey = EXAMPLE_MASTER_ID_PUBLIC_KEY.subarray(32);
    const masterIdSecretKey = EXAMPLE_MASTER_ID_SECRET_KEY.subarray(32);
    const signingSecretKey = EXAMPLE_SIGNING_SECRET_KEY.subarray(32);
    const signingPublicKey = torspecKeyblindPublicKeyFromExpandedKey(signingSecretKey.subarray(0, 32));

    const isCertVerified = await TorspecKeyblindSigner.verify(extData, digest, signature);
    const signer = new TorspecKeyblindSigner(masterIdSecretKey, masterIdPublicKey);
    const signerSignature = await signer.sign(digest);
    const isVerified = await TorspecKeyblindSigner.verify(masterIdPublicKey, digest, signature);

    expect(isCertVerified).toBe(true);
    expect(Buffer.from(signingPublicKey).toString("hex")).toEqual(certifiedKey.toString("hex"));
    expect(Buffer.from(signerSignature).toString("hex")).toEqual(signature.toString("hex"));
    expect(isVerified).toBe(true);
  });

  it("creates data items", async () => {
    const certifiedKey = EXAMPLE_SIGNING_CERT.subarray(39, 71);
    const signingSecretKey = EXAMPLE_SIGNING_SECRET_KEY.subarray(32);
    const signingPublicKey = Buffer.from(torspecKeyblindPublicKeyFromExpandedKey(signingSecretKey.subarray(0, 32)));
    const signer = new TorspecKeyblindSigner(signingSecretKey, signingPublicKey);
    const obj = { hello: "world" };
    const dataItem = createData(JSON.stringify(obj), signer);

    await dataItem.sign(signer);

    expect(Buffer.from(dataItem.owner, "base64").toString("hex")).toEqual(certifiedKey.toString("hex"));

    const isValid = await dataItem.isValid();
    expect(isValid).toBe(true);
  });
});
