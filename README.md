# Repel

Extension Manifest V3 pour Google Chrome pour le blocage de sites Web et de pages Youtube de votre choix

Testé avec Google Chrome Version 108.0.5359.125 (Build officiel) (64 bits) sous Windows 11 Famille Version 21H2 (64 bits)

## Comment l'utiliser ?

1. Ajouter l'extension en mode Développeur (Testé avec Google Chrome sous Windows 11)
2. Modifier le fichier blacklist/WEBblacklist.json pour ajouter / supprimer les domaines WEB dans la liste noire
3. Modifier le fichier blacklist/YTblacklist.json pour ajouter / supprimer les chaînes YouTube dans la liste noire
4. Recharger l'extension / redémarrer Google Chrome

## Où trouver les informations concernant un domaine Web et/ou l'ID d'une chaîne YouTube ( par rapport à une vidéo / playlist / page du créateur de la chaîne Youtube ) ?

Cliquer sur l'icône de l'extension lorsque l'onglet concerné est chargé : vous obtiendrez les informations nécessaires selon ce que vous souhaitez prendre.

![alt text](https://github.com/Usagi-Corporation/Repel/blob/main/popup-exemple.png?raw=true)

## Liste des sites Web bloqués par défaut

Eléments présents dans le fichier blacklist/WEBblacklist.json

- Sites d'information FR : 20 Minutes, Agence France-Presse, BFMTV, Canal+, CNEWS, Corse Matin, Courrier Picard, DNA, Magazine ELLE, Euronews, Europe 1, France 2, France 24, France 3, France 5, France Soir, L'Humanité, La Croix, L'Alsace Le Pays, laprovence.com, La Tribune, La Voix du Nord, LCI, Le Dauphiné Libéré, Le Figaro, Le Monde, Le Parisien, Le Point, Le Progrès, L'Equipe, Les Echos, Le Télégramme de Brest, L'Expansion, L'Express, libertedelest.fr, L'Yonne Républicaine, Libération, L'Union de Reims, 6play/M6, MetroNews, Midi Libre, Nice-Matin, L'Obs, Objeko, Ouest-France, Paris Match, Paris Normandie, Radio France, Le Républicain Lorrain, RFI.fr, RTL.fr, Midi Olympique, Sud Ouest, MYTF1, TF1 Info, TV5MONDE, 
- Sites Centres d'intérêt FR : jeuxvideo.com, Korben, Le Hollandais Volant, Next INpact, Numerama
- Réseaux sociaux : Facebook, Instagram, TikTok, Twitter, Twitch

## Liste des chaînes Youtube bloqués par défaut

Eléments présents dans le fichier blacklist/YTblacklist.json

ADAM LE RIGOLOW, Adem&Bilal, Allo Docteurs, Amixem, Antoine Langloys, Anas, Aya Nakamura, BFMTV, Bigorneaux & Coquillages, BRICO SYMPA, CNEWS, Cyprien, CYRILmp4, DADJU, Dr Nozman, EnjoyPhoenix, FabienOlicard, FastGoodCuisine, Furious Jumper, Fuze III, GameMixTreize, GIMS, GOTAGA, Hassan, HugoDécrypte, HugoDécrypte - Actus du jour, HugoDécrypte - Shorts, HugoPOSAY, IbraTV, Inoxtag, Jojol, Jul (DORETDEPLATINE), Kevin Tran 陈科伟, L'Algerino, L'atelier de Roxane, LaChaineDeJeremy, Lama Faché, Lartiste, Le Monde à L'Envers, LCI, LES BOYS TV, Mashup par HugoDécrypte, Mcfly et Carlito, McSkyz, Michou, Mister V, Natoo, Niska Officiel, No Comment TV, NORMAN FAIT DES VIDÉOS, Nota Bene, Numerama, Pierre Croce, PNL, PSG, Psyhodelik, REDKILL, Rémi GAILLARD, Sardoche, SEB, Sheshounet, SirGibsy, Sissy MUA, Snaptrox, Soolking Officiel, SQUEEZIE, Studio Bagel, Swan The Voice - Neo & Swan, SYMPA, TheDollBeauty, TheKAIRI78, Tibo InShape, Trash, Vilebrequin, Waythes, ZeratoR

## Remerciements

- SimGus pour avoir partagé la création de la base d'une extension Chrome utilisant le Manifest V3 : https://github.com/SimGus/chrome-extension-v3-starter
