# PixelArtDCL
Advanced Pixel Art Colab Project for Decentraland

Based on Nico Earnshaw's Remote Mural for DCL
https://github.com/decentraland-scenes/Remote-mural

This repo is for additions and advancements required for the Lemursiv scene around Madagascar.

First README follows below

# Remote mural

A scene that uses a server and a REST API to sync a scene state amongst multiple users. You can paint pixels in a mural that other users can see. The colors of each pixel are stored in a remote server.

- Create a REST server
- Call REST API

![](screenshot/screenshot.png)

<!--
[Explore the scene](): this link takes you to a copy of the scene deployed to a remote server where you can interact with it just as if you were running `dcl start` locally.
-->

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).


**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

#### Run the REST server

(In another terminal window)

```sh
# from the project root
cd server

# install node dependencies
npm install

# run build
npm run build

# start the server
npm start
```

#### Run the scene preview

```sh
# from the project root
cd scene

# install node dependencies
npm install

# start the preview
dcl start
```

Open multiple browser tabs by copying the preview URL. Interact with the door on one tab to see that it also changes on other tabs as well.

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

**Usage**

Click on a color on the palette on the right. Once a color is selected, you can paint the pixels on the wall with that color. Other users will see the same wall, painted with the same colors.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
