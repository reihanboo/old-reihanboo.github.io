---
title: Network Installation
---

:::caution
This script assumes you follow [this tutorial](/docs/sysadmin/debian/installation)!
:::

## IP Configuration Script

```bash title="$"
wget -O /etc/network/interfaces https://reihan.pages.dev/scripts/interfaces
```

## DNS Configuration Script

You don't! Because DNS is needed to communicate with my <abbr title="or any website">website</abbr>, You _need_ to do this [manually](/docs/sysadmin/debian/installation#dns-configuration). Besides, it's super short anyway.

## Repository Script

```bash title="$"
wget -O /etc/apt/sources.list https://reihan.pages.dev/scripts/sources.list
```
