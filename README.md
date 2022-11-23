# Chrome Triumph Service Manual Print Enabler Extension _(chrome-triumph-service-print)_

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Used to remove the watermarking and allow Triumph Service Manual pages to be printed from triumphtechnicalinformation.com

The Triumph Motorcycles website for accessing service manuals currently actively prevents users from printing any pages. This extension shifts around some CSS classes when printing to allow the content to be printed and to hide the watermarks. Triumph says they prevent printings/saving so that they can "deliver content which is always up to date and reduces paper waste", but it also ties you to a subscription. 

## Table of Contents

- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Security

Declares the `tabs` and `activeTab` [Chrome permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/). 

## Install

### Download this repository

Via git:

```bash
git clone https://github.com/Sustenance/chrome-triumph-service-print.git
```

or just download the [latest release](https://github.com/Sustenance/chrome-triumph-service-print/releases) zip and extract (unzip) it somewhere.

### Install unpacked Chrome extension

Follow [Google's instructions for installing an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked), pointing to the unzipped extension folder.

### Updating

Unpacked extensions will not automatically update like the ones you install off the Chrome Web Store. To update, remove the old version and repeat the above steps with the new version.

## Usage

[IANAL](https://en.wikipedia.org/wiki/IANAL) - ensure that you have permission to print any content before doing so.

The extension will automatically load for any /document URLs, so you should be able to just print like normal through Chrome!

## Contributing

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[GNU General Public License v3.0](./LICENSE)
