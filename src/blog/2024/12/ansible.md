---
layout: layouts/base.html
title: Configuring my daily driver using Ansible
date: 2024-12-06
categories: ["IaC","Ansible"]
tags: blog
---
Historically, I've practiced a form of infrastructure management I like to call "memory-based chaos". However, as I slide through middle age with increasing lack of cognitive grace, it becomes more apparent that I should let my tools work for me. Enter shell scripting and [Ansible](https://www.ansible.com/)...

## The goal
In my ideal world, I'd like to use the following ever-so-elaborate process to set up my daily driver:
1. Install a clean copy of Ubuntu
1. Pull [my repo](https://github.com/DanBlumenfeld/ansible-ubuntu-local)
1. Execute [local-install.sh](https://github.com/DanBlumenfeld/ansible-ubuntu-local/blob/main/local-install.sh) in the root of the repo
1. Answer a couple of questions, then wait


## Requirements
 - It should be idempotent. I don't want to cause problems by re-running the process.
 - It should be user friendly. The process should save my responses locally, and ask me if I wish to re-use them. (With obvious exceptions for sensitive data like passwords and access tokens, of course.)
 - It should be designed to run locally, but with an eye towards running it against other hosts too. *This is more for my learning than any practical purpose, as I find it unlikely that I'll want to set up my daily driver remotely*.
 - Each component should be able to be run independently, with minimal upstream dependencies. This keeps things easier to use on an ad-hoc basis, as well as easier to debug.

 ## The initial manifest
 1. Ansible (Used to drive the rest of the system configuration)
 1. Git configuration. Defines local git settings, generates SSH key, pushes said key to Github
 1. System hardening, details TBD
 1. Tor Brtowser
 1. 1Password 
 1. 1Password CLI 
 1. Sublime Text 
 1. Sublime Merge 
 1. Docker and docker-compose
 1. DevToys 
 1. Visual Studio Code
 1. Terraform

 ## How's it going so far?
 Quite well, actually. 
 
 I've got a seemingly decent model for the individual playbooks and associated scripts, with at least a modicum of sanity checking and convenience features.

 The Ansible, git config, Tor Browser, and VS Code scripts and playbooks are implemented and seem to work nicely.

## Lessons Learned
Unifi networks [need some help](/nts/unifi-and-tor/) to unblock Tor traffic