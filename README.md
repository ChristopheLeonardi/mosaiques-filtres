# Mosaïque avec filtre

Ce module permet de construire les mosaïques des pages à partir d'un export automatique d'un tableau Excel.

## 1 Installation

1 - Placer le contenu du dossier integration dans le dossier integration de l'arorescence Ermes 

2 - Ajouter le code contenu dans le fichier add_to_master_ermes_front.xslt dans le fichier master_ermes_front.xslt. 

Ce code permet le chargement des dépendances nécessaire au lancement du code. Dans le cas présent la bibliothèque d3js est chargée, Syracuse ayant des problèmes de lancement de code lorsqu'ils sont uniquement déclaré dans le master-front. De plus cela permet de conditionner le chargement des scripts uniquement aux pages où ils doivent s'exécuter, limitant le risque de conflit et d'alourdissement du site.

3 - Modifier éventuellement le chemin d'accès des code xslt ou du fichier getScript.js du dossier scriptLoader

## 2 Création et mise à jour des données

Le dossier contenant les données des mosaïques est nom-mosaique du dossier integration. A l'intérieur se trouve le fichier mosaique_template.xlsm. Il possède les colonnes généralement utilisées pour la création des mosaiques. Vous pouvez ajouter ou supprimer des colonnes mais la modification sera à répercuter sur les templates du frontend. 
Une fois le tableau complété, aller sur l'onglet "automatisation" et cliquer sur le bouton "Mettre à jour les données". Après avoir validé l'emplacement du fichier (il pointe initialement sur le dossier data utilisé par le script), cela générera un fichier output.csv qui sera utilisé par le script.

Une entrée peut avoir plusieur catégories, elles doivent être séparées par des virgules (,).

Le fichier est à dupliqué pour chaque mosaïque.

## 3 Utilisation des templates

Le contenu du fichier encart-filter.html du dossier mosaicFilter est à placer dans une encart Syracuse avant l'encart des vignettes. Il n'y a pas de réglage à effectuer, le choix des filtres se fait dans l'encart de la mosaïque.

Les fichiers encart-constructor-option.html du dossier mosaicFilter sont des variantes des vignettes des mosaïques. Le code est à placer dans un encart Syracuse en ayant modifié le chemin du fichier source à utiliser de l'input en fin de fichier. 

Les filtres sont créés à partir des id du template, mos-titre correspond à la colonne titre, mos-sous_cat à la sous-catégorie, etc. Le nom des filtre est modifiable à l'aide de l'attribut data-name.  

