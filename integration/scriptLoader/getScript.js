/* 
Script Loader pour Syracuse
Christophe Leonardi 02/03/2023

L'objet [plugin]_infos recene les url des scripts javascript et des feuilles css et les charge au traver de la fonction loadScripts. 
La propriété tagId permet de conditionner le chargement des scripts aux pages contenant le plugin en lançant les scripts si l'élément est présent sur la page.

Les pages où sont utilisés les scripts sont énumérés dans le commentaire Références d'utilisation.

*/

const loadScripts = (objInfos) => {
    if ($(`#${objInfos.tagId}`).length) {
        $.when(
            objInfos.css_url.map(url => {
                $('<link/>', { rel: 'stylesheet', type: 'text/css', href: url }).appendTo('head')
            }),
            objInfos.lib_url.map(url => {
                $.ajax({
                    async: true,
                    url: url,
                    type: "GET",
                    dataType: "script"
                });
            }),
            $.Deferred(function(deferred) {
                $(deferred.resolve);
            })
        ).done(function() {});
    }
}

$(document).ready(function() {

    /* BEGIN script des mosaïques Collections */
    /* Références d'utilisation : https://docs.google.com/spreadsheets/d/1DtkxYk8JhH-51X_NQGVPcessJ7HVUb3gycZxKwOZv_w/edit#gid=0 */

    const mosaiques_infos = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/mozaicFilter/constructMozaic.js`,
            `/ui/plug-in/integration/mozaicFilter/custom-select.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/mozaicFilter/mozaicFilter.css`,
        ],
        tagId: "idMozaic"
    }
    loadScripts(mosaiques_infos)

    /* END script des mosaïques PAD  */

})