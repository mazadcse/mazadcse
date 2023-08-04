---
id: 5bnxpbo182efvf38j331nes
title: How Deno differs from Node.js
description: "This article goes over the core differences between Deno and Node.js."
updated: 1688877769873
created: 1686355733170
image: "/content/cover/deno-vs-node.png"
head:
  meta:
    - name: "keywords"
      content: "deno, nodejs, shorts"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Dawit (@oneminch)"
    - property: "og:type"
      content: "article"
    - name: "twitter:card"
      content: "summary_large_image"
tags:
  - deno
  - nodejs
  - shorts
---

[Deno](https://deno.land) improves upon [Node.js](https://nodejs.org) in some significant ways.

### Modules

Modules are loaded directly from URLs and cached locally.

```js
import confetti from "https://esm.sh/canvas-confetti@1.6.0";
```

This allows decentralization of packages by removing reliance on [npm](https://npmjs.com) and enabling developers to self-host their packages.

Consequently, this removes the need for `package.json` and `node_modules`, and allows programs to run in the browser since there is no reliance on build tools like webpack.

### Security

Because code is executed in a sandbox, the Deno runtime has no access to the file system, and the network. Flags like `--allow-write` and `--allow-net` can be used to explicitly enable access.

In addition to the above features, Deno supports TypeScript out of the box, and has a built-in formatter for code similar to ESLint for Node.js.