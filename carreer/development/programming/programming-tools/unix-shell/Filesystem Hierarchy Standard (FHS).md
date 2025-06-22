FHS defines the structure of [[File System|Filesystems]] on [[Linux]] and other UNIX-like [[OS]]. However, Linux file systems also contain some directories that aren’t yet defined by the standard.

# Directories

- `/` – The Root Directory: the [[system]]'s first folder
- `/bin` – Essential User Binaries: essential programs that must be present when the system is mounted in single-user mode
- `/boot` – Static Boot Files: contains files needed to boot system, though their configurations are stored in `/etc`
- `/dev` – Device Files: contains special files representing devices, physical (hardware) and virtual (software) e.g. `/dev/random` produces random numbers
- `/etc` – Configuration Files: contains system-wide configuration files, which can generally be edited by hand in a text editor. Note that user-specific configuration files are located in each user’s home directory.
- `/home` – Home Folders: contains a home folder for each user which contains the user’s data files and user-specific configuration files. Each user only has write access to their own home folder and must obtain elevated permissions (become the root user) to modify other files on the system.
- `/lib` – Essential Shared Libraries: contains libraries needed by the essential binaries in the `/bin` and `/sbin` folder.
- `/lost+found` – Recovered Files: If the file system crashes, a file system check will be performed at next boot. Any corrupted files found will be placed here, so you can attempt to recover as much data as possible.
- `/media` – Removable Media: contains subdirectories where removable media devices inserted into the computer are mounted. For example, when you insert a CD into your Linux system, a directory will automatically be created inside the /media directory. You can access the contents of the CD inside this directory.
- `/mnt` – Temporary Mount Points: where system administrators have historically mounted temporary file systems while using them.
- `/opt` – Optional Packages: contains subdirectories for optional software packages. It’s commonly used by proprietary software that doesn't obey FSH – for example, a proprietary program might dump its files in `/opt/application` when you install it.
- `/proc` – Kernel & Process Files: contains special files that represent system and process information
- `/root` – Root Home Directory: the home directory of the root user. Instead of being located at `/home/root`, it’s located at `/root`. This is distinct from `/`, which is the system root directory.
- `/run` – Application State Files: gives applications a standard place to store transient files they require like sockets and process IDs. These files can’t be stored in `/tmp` because files in `/tmp` may be deleted.
- `/sbin` – System Administration Binaries: similar to `/bin` but run by the root user for system administration
- `/srv` – Service Data: contains “data for services provided by the system.” If you were using the Apache HTTP server to serve a website, you’d likely store your website’s files in a directory inside the `/srv` directory.
- `/tmp` – Temporary Files: Applications store temporary files in it. These files are generally deleted whenever your system is restarted and may be deleted at any [[time]] by utilities such as tmpwatch.
- `/usr` – User Binaries & Read-Only Data: contains applications and files used by users, as opposed to applications and files used by the system.For example, non-essential applications are located inside the `/usr/bin` directory instead of the `/bin` directory and non-essential system administration binaries are located in the `/usr/sbin` directory instead of the `/sbin` directory. Libraries for each are located inside the `/usr/lib` directory. The `/usr` directory also contains other directories – for example, architecture-independent files like graphics are located in `/usr/share`. The `/usr/local` directory is where locally compiled applications install to by default – this prevents them from mucking up the rest of the system.
- `/var` – Variable Data Files: is the writable counterpart to the `/usr` directory, which must be read-only in normal operation. [[Logging|Log]] files and everything else that would normally be written to `/usr` during normal operation are written to the `/var` directory. For example, you’ll find log files in `/var/log`.
