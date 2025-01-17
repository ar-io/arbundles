import type { Signer } from "..";
import { SignatureConfig, SIG_CONFIG } from "../../constants";
import base64url from "base64url";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as _ from "arconnect";
import { getCryptoDriver } from "$/utils";
import { Buffer } from "buffer";

export default class InjectedArweaveSigner implements Signer {
  private signer: Window["arweaveWallet"];
  public publicKey: Buffer;
  readonly ownerLength: number = SIG_CONFIG[SignatureConfig.ARWEAVE].pubLength;
  readonly signatureLength: number = SIG_CONFIG[SignatureConfig.ARWEAVE].sigLength;
  readonly signatureType: SignatureConfig = SignatureConfig.ARWEAVE;
  constructor(windowArweaveWallet: Window["arweaveWallet"]) {
    this.signer = windowArweaveWallet;
  }

  async setPublicKey(): Promise<void> {
    const arOwner = await this.signer.getActivePublicKey();
    this.publicKey = base64url.toBuffer(arOwner);
  }

  async sign(data: Uint8Array, opts: { target: string; anchor: string; tags: { name: string; value: string }[] }): Promise<Uint8Array> {
    if (!this.publicKey) {
      await this.setPublicKey();
    }

    // @ts-expect-error -- this API is offered by arconnect
    const signedBinary = await this.signer.signDataItem({ data, ...opts });
    const signature = Buffer.from(signedBinary).subarray(2, 2 + this.signatureLength);
    return Uint8Array.from(signature);
  }

  static async verify(pk: string, message: Uint8Array, signature: Uint8Array): Promise<boolean> {
    return await getCryptoDriver().verify(pk, message, signature);
  }
}
