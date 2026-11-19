var wms_layers = [];

var format_Groupe1NbreEtab_0 = new ol.format.GeoJSON();
var features_Groupe1NbreEtab_0 = format_Groupe1NbreEtab_0.readFeatures(json_Groupe1NbreEtab_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Groupe1NbreEtab_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groupe1NbreEtab_0.addFeatures(features_Groupe1NbreEtab_0);
var lyr_Groupe1NbreEtab_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groupe1NbreEtab_0, 
                style: style_Groupe1NbreEtab_0,
                popuplayertitle: 'Groupe1NbreEtab',
                interactive: true,
                title: '<img src="styles/legend/Groupe1NbreEtab_0.png" /> Groupe1NbreEtab'
            });
var format_District_exo_1 = new ol.format.GeoJSON();
var features_District_exo_1 = format_District_exo_1.readFeatures(json_District_exo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_exo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_exo_1.addFeatures(features_District_exo_1);
var lyr_District_exo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_exo_1, 
                style: style_District_exo_1,
                popuplayertitle: 'District_exo',
                interactive: true,
                title: '<img src="styles/legend/District_exo_1.png" /> District_exo'
            });
var format_DRENADonnees_QGIS_2 = new ol.format.GeoJSON();
var features_DRENADonnees_QGIS_2 = format_DRENADonnees_QGIS_2.readFeatures(json_DRENADonnees_QGIS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRENADonnees_QGIS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENADonnees_QGIS_2.addFeatures(features_DRENADonnees_QGIS_2);
var lyr_DRENADonnees_QGIS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENADonnees_QGIS_2, 
                style: style_DRENADonnees_QGIS_2,
                popuplayertitle: 'DRENA-Donnees_QGIS',
                interactive: true,
                title: '<img src="styles/legend/DRENADonnees_QGIS_2.png" /> DRENA-Donnees_QGIS'
            });

lyr_Groupe1NbreEtab_0.setVisible(true);lyr_District_exo_1.setVisible(true);lyr_DRENADonnees_QGIS_2.setVisible(true);
var layersList = [lyr_Groupe1NbreEtab_0,lyr_District_exo_1,lyr_DRENADonnees_QGIS_2];
lyr_Groupe1NbreEtab_0.set('fieldAliases', {'DRENA': 'DRENA', 'X': 'X', 'Y': 'Y', 'NB_ETAB': 'NB_ETAB', 'NATURE': 'NATURE', });
lyr_District_exo_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin1RefN': 'admin1RefN', 'admin1AltN': 'admin1AltN', 'admin1Al_1': 'admin1Al_1', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Rowcacode1': 'Rowcacode1', });
lyr_DRENADonnees_QGIS_2.set('fieldAliases', {'DRENA': 'DRENA', 'X': 'X', 'Y': 'Y', 'NB_ETAB': 'NB_ETAB', 'NATURE': 'NATURE', });
lyr_Groupe1NbreEtab_0.set('fieldImages', {'DRENA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NB_ETAB': 'Range', 'NATURE': 'TextEdit', });
lyr_District_exo_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'admin1Name': '', 'admin1Pcod': '', 'admin1RefN': '', 'admin1AltN': '', 'admin1Al_1': '', 'admin0Name': '', 'admin0Pcod': '', 'date': '', 'validOn': '', 'validTo': '', 'Shape_Leng': '', 'Shape_Area': '', 'Rowcacode1': '', });
lyr_DRENADonnees_QGIS_2.set('fieldImages', {'DRENA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NB_ETAB': 'Range', 'NATURE': 'TextEdit', });
lyr_Groupe1NbreEtab_0.set('fieldLabels', {'DRENA': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NB_ETAB': 'inline label - always visible', 'NATURE': 'hidden field', });
lyr_District_exo_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin1RefN': 'no label', 'admin1AltN': 'no label', 'admin1Al_1': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Rowcacode1': 'no label', });
lyr_DRENADonnees_QGIS_2.set('fieldLabels', {'DRENA': 'header label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'NB_ETAB': 'inline label - always visible', 'NATURE': 'hidden field', });
lyr_DRENADonnees_QGIS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});