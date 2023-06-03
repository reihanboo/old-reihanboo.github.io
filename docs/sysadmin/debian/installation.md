# VirtualBox Installation
VMWare kinda sucks for normal installations like this one... Just give me a virtual machine I can run in a click!

## Virtual Machine Setup
1. Download the Debian 11 ISO file from the official Debian website.
   - https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.7.0-amd64-netinst.iso
2. Open VirtualBox and create a new virtual machine.
3. Click "New".
4. The virtual machine setup rules are as follows:
    - Name: Debian 11
    - ISO Image: Linux Debian 11
5. Check "Skip Unattended Installation".
6. Click "Next".
7. Set the virtual machine settings as follows:
    - Memory: 2 GB
    - Processors: 2 CPUS
    - Hard disk: 20 GB
8. Click "Finish".

## Network Setup on the Virtual Machines
1. Click "Settings" at the top right of the virtual machine.
2. On the left side menu, click "Network".
3. Then, click the "Adapter 2" tab.
4. Check "Enable Network Adapter".
5. In the "Attached to" dropdown, select "Host-only Adapter".
6. Then click OK.

## Virtual Machine's Settings in VirtualBox
After the above settings, select "Debian 11", then click "Start".
### Initial Installation
1. Start the virtual machine and select "Install" from the installation menu.
2. Select English as the language.
3. You can choose your country. But for Indonesia, choose "Other" as the location, then select "Asia" and "Indonesia".
4. Configure locales and select "United States - en_US.UTF-8".
5. Configure the keyboard and choose "American English".
6. Select "enp0s3" for network configuration.
7. Rename the hostname to "d11".
8. Skip the domain name configuration.
9. Set a root password (e.g., "123").
10. Retype the root password.
11. Provide your full name.
12. Choose a username (e.g., "reihan").
13. Set a password for the user (e.g., "123").
14. Retype the user password.
15. Configure the clock according to your time zone.
16. Select "Guided - use entire disk" for partitioning.
17. Choose "SCSI3 (0, 0, 0) (sda) - 21.5 GB ATA VBOX HARDDISK" as the disk.
18. Select "All files in one partition" for partitioning.
19. Finish partitioning and write changes to disk.
20. Confirm and wait for the OS installation to complete.
21. Skip scanning extra installation media.
22. Do not use a network mirror.
23. Skip configuring popularity contest.
24. Deselect all software except "standard system utilities" and proceed.
25. Install the GRUB boot loader.
26. Select "/dev/sda" as the boot loader device.
27. Click "Continue" in the installation complete menu.
That's it.

### Connection to the Internet
#### IP Configuration
1. Type `vi /etc/network/interfaces`.
2. Then enable the line number by using `:set nu`.
3. On line 11, change to `auto enp0s3`.
4. On the 14th line, type `auto enp0s8`.
5. On line 15, type `iface enp0s8 inet static`.
6. On line 16, type `address 192.168.56.11`.
7. On line 17, type `netmask 255.255.255.0`.
8. Then save.
9. Type `systemctl restart networking`.

#### DNS Configuration
1. Type `vi /etc/resolv.conf`.
2. Create a new first line, then type `nameserver 8.8.8.8`.
3. On the 2nd line, type `nameserver 8.8.4.4`.
4. Then save.

#### Changing Repository
1. Type `vi /etc/apt/sources.list`.
2. Delete all contents of the file using `:%d`.
3. In `sources.list`, type as below:
```bash title="sources.list" 
deb http://deb.debian.org/debian bullseye main  
deb-src http://deb.debian.org/debian bullseye main

deb http://deb.debian.org/debian-security/ bullseye-security main  
deb-src http://deb.debian.org/debian-security/ bullseye-security main

deb http://deb.debian.org/debian bullseye-updates main  
deb-src http://deb.debian.org/debian bullseye-updates main
```
4. Then save.
If typing as much as above is annoying, you can use SSH or use the commands below:
1. Type `wget -O /etc/apt/sources.list https://rentry.co/sourcesdotlist/raw`.
2. That's it.
That's just *the tip of the iceberg* of the magic of *scripting*. You can find out more in depth with a simple Googling.