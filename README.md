# Pôle Emploi connexion automatique
Cette extension pour navigateur tape automatiquement votre identifiant, mot de passe et code postal sur le site de Pôle Emploi.

## Comment utiliser l'extension ?
Après l'installation de l'extension, vous verrez apparaitre une icône avec le logo du Pôle Emploi en haut à droite de votre écran comme ceci :

[Capture d'écran après installation](https://raw.githubusercontent.com/theo546/Pole-Emploi_Autologin/master/screenshot/post_install.png)

Cliquez dessus afin d'ouvrir le panneau de configuration, puis remplissez les informations demandées telles que votre identifiant, votre mot de passe et votre code postal.

Voici a quoi devrait ressembler le panneau de configuration une fois configuré :

[Panneau de configuration](https://raw.githubusercontent.com/theo546/Pole-Emploi_Autologin/master/screenshot/configuration.png)

## Comment "compiler" depuis la source ?
La méthode de "compilation" a été testé uniquement sous Linux et nécessite les composants suivants :

 - p7zip
 - git
 - Un terminal

Une fois que tout est prêt, ouvrez le terminal puis taper :

`git clone https://github.com/theo546/Pole-Emploi_Autologin.git`

Une fois que le projet a été cloner, tapez :

`cd Pole-Emploi_Autologin`

Et finalement :

`sh build-firefox.sh` pour "compiler" pour Firefox ou

`sh build-chrome.sh` pour "compiler" pour Google Chrome / Chromium.


Vous pouvez des à présent importer l'extension dans votre navigateur.

## Comment l'installer ?

Vous pouvez installer l'extension depuis les magasins d'extensions de Firefox ou de Google Chrome / Chromium.

[![Firefox Add-ons Store](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://google.com) [![Chrome Web Store](https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png)](https://google.com)