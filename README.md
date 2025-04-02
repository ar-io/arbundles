# Hank Hill's Ass (Formerly ANS-104 Bundles)

Lean & mean.

[![Bwahhh!!](./ASSets/hanktwerking.gif)](https://www.youtube.com/watch?v=51delDxcPKY)

Dang it, Bobby!

[![YouTube: King of the Hill- Hank has no ass!](https://img.youtube.com/vi/VcUFW-_-mf4/0.jpg)](https://www.youtube.com/watch?v=VcUFW-_-mf4)

## Installing the library

Using npm:

```bash
npm install @memetic-block/hank-hills-ass
```

Using yarn:

```bash
yarn add @memetic-block/hank-hills-ass
```

## Creating bundles

### Quick Example
```ts
import { bundleAndSignData, createData } from "@memetic-block/hank-hills-ass";

const dataItems = [createData("some data"), createData("some other data")];

const signer = new ArweaveSigner(jwk);

const bundle = await bundleAndSignData(dataItems, signer);
```

### Further Reading
See the [Bundling Reference](https://cookbook.arweave.net/references/bundling.html) on the Arweave cookbook for more examples of how to use this library.

## Prior Art

This repository is a fork of [fork](https://github.com/ar-io/arbundles) of the [ archived original](https://github.com/irys-xyz/arbundles).

## Original Description
A low level library for creating, editing, reading and verifying bundles.

See [ANS-104](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md) for more details.
