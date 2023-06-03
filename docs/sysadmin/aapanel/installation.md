---
title: AAPanel
---

:::info
If you don't have a Debian virtual machine yet, you can visit [this page](../debian/installation) to install one.
:::

## Installation
1. After performing the steps above, we can now type `apt update -y`.
2. Type `apt install wget -y`.
3. Type `wget -O install_aapanel.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh`.
4. Then finally type `bash install_aapanel.sh`.
5. At `Do you want to install aaPanel to the /www directory now?`, type `y` then Enter.
6. At `Do you need to enable the panel SSL?`, type `yes` and Enter.
7. Once the aaPanel script installation is complete, access the control panel using `https://192.168.56.11:7800` or the IP on your `enp0s8`.

## Accessing aaPanel
1. Type `https://192.168.56.11:7800/<id>` into the browser on the host.
2. From the screenshot, you can type the username and password.
3. If there is a pop-up/modal, close it with the button on the top right.

## LEMP (Linux, Nginx, MySQL, PHP) Software Installation
1. In the virtual machine, type the following:
   ```bash
   curl -v https://brandnew.aapanel.com
   curl -v https://node.aapanel.com
   ```
2. Wait for it to finish. If you can't, then you can check your DNS configuration.
3. Go to aaPanel page.
4. On the left sidebar, click "App Store" at the bottom.
5. Click "Install" on the "Nginx" app, select the latest Nginx version, then click "Submit" and "Confirm".
6. Close the pop-op/modal with the button on the top right.
7. Click "Install" on the "PHP-8.0" application or select the latest PHP version with the search bar above, then click "Submit" and "Confirm".
8. Close the pop-op/modal with the button on the top right.
9. Click "Install" on the "MySQL" application, select the latest MySQL version, then click "Submit" and "Confirm".
10. Close the pop-op/modal with the button on the top right.

## Publishing a Website
1. On the aaPanel page, on the left sidebar, click the "Website" menu.
2. Click "Add site".
3. In "Domain name", type the IP of the Debian virtual machine, in my case, it is `192.168.56.11`.
4. Since aaPanel is still new, you can immediately click "Submit".
5. Then, refresh when the installation is complete.
6. To confirm, on the private tab, type the IP you entered in the URL bar, without the port. So, just `192.168.56.11`.