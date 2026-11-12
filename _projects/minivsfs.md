---
layout: page
title: MiniVSFS
description: C implementation of a simplified inode-based filesystem image builder and updater, covering superblocks, allocation bitmaps, inode tables, and directory entries.
img:
importance: 1
category: systems-embedded
github: https://github.com/kitkiti/MiniVSFS
---

MiniVSFS implements `mkfs_builder` and `mkfs_adder` for creating and modifying a simplified inode-based filesystem image. It originated in CSE321: Operating Systems.

## Highlights

- `mkfs_builder` creates a fresh image with a superblock, allocation bitmaps, an inode table, and a root directory.
- `mkfs_adder` adds content to an existing image, updating allocation bitmaps, inodes, and root-directory entries.
- Uses a 4 KiB block size, 128-byte inodes, and 64-byte directory entries.

## Technologies

C17 and inode-based filesystem structures.

[View the source on GitHub](https://github.com/kitkiti/MiniVSFS)
