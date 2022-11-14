# Fynn + Mailing

Templates for [Fynn](https://fynncredit.com)

Built with [Mailing](https://www.mailing.run)

Live at https://fynn-mailing.vercel.app/

## Local development

```
yarn install
yarn dev
```

### With local assets

If you want to use local assets while developing new templates, place them in the `emails/assets` folder and run:

```
yarn install
yarn dev:local-assets
```

They will be served from `http://localhost:3883` and you can use them in your templates like this:

```javascript
import assetUrl from "./util/assetUrl";
import { MjmlImage } from "mjml-react";

<MjmlImage src={assetUrl("/assets/logo.png")} />;
```
