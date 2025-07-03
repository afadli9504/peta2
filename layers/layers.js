var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_9504_kecamatanfinal_kecamatan_9504_1 = new ol.format.GeoJSON();
var features_9504_kecamatanfinal_kecamatan_9504_1 = format_9504_kecamatanfinal_kecamatan_9504_1.readFeatures(json_9504_kecamatanfinal_kecamatan_9504_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9504_kecamatanfinal_kecamatan_9504_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9504_kecamatanfinal_kecamatan_9504_1.addFeatures(features_9504_kecamatanfinal_kecamatan_9504_1);
var lyr_9504_kecamatanfinal_kecamatan_9504_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9504_kecamatanfinal_kecamatan_9504_1, 
                style: style_9504_kecamatanfinal_kecamatan_9504_1,
                popuplayertitle: '9504_kecamatan — final_kecamatan_9504',
                interactive: true,
                title: '9504_kecamatan — final_kecamatan_9504'
            });
var format_final_desa_2 = new ol.format.GeoJSON();
var features_final_desa_2 = format_final_desa_2.readFeatures(json_final_desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_desa_2.addFeatures(features_final_desa_2);
var lyr_final_desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_desa_2, 
                style: style_final_desa_2,
                popuplayertitle: 'final_desa',
                interactive: true,
                title: '<img src="styles/legend/final_desa_2.png" /> final_desa'
            });
var format_final_bs_3 = new ol.format.GeoJSON();
var features_final_bs_3 = format_final_bs_3.readFeatures(json_final_bs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_bs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_bs_3.addFeatures(features_final_bs_3);
var lyr_final_bs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_bs_3, 
                style: style_final_bs_3,
                popuplayertitle: 'final_bs',
                interactive: true,
                title: '<img src="styles/legend/final_bs_3.png" /> final_bs'
            });
var format_final_sls_4 = new ol.format.GeoJSON();
var features_final_sls_4 = format_final_sls_4.readFeatures(json_final_sls_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_sls_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_sls_4.addFeatures(features_final_sls_4);
var lyr_final_sls_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_sls_4, 
                style: style_final_sls_4,
                popuplayertitle: 'final_sls',
                interactive: true,
                title: '<img src="styles/legend/final_sls_4.png" /> final_sls'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_9504_kecamatanfinal_kecamatan_9504_1.setVisible(true);lyr_final_desa_2.setVisible(true);lyr_final_bs_3.setVisible(true);lyr_final_sls_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_9504_kecamatanfinal_kecamatan_9504_1,lyr_final_desa_2,lyr_final_bs_3,lyr_final_sls_4];
lyr_9504_kecamatanfinal_kecamatan_9504_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_final_desa_2.set('fieldAliases', {'gid': 'gid', 'luas': 'luas', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'iddesa': 'iddesa', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'rw_dki': 'rw_dki', 'sumber': 'sumber', 'periode': 'periode', });
lyr_final_bs_3.set('fieldAliases', {'kk': 'kk', 'gid': 'gid', 'sbs': 'sbs', 'base': 'base', 'bstt': 'bstt', 'idbs': 'idbs', 'kdbs': 'kdbs', 'luas': 'luas', 'bsbtt': 'bsbtt', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'dominan': 'dominan', 'periode': 'periode', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', });
lyr_final_sls_4.set('fieldAliases', {'kk': 'kk', 'gid': 'gid', 'bstt': 'bstt', 'luas': 'luas', 'bsbtt': 'bsbtt', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'subsls': 'subsls', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'periode': 'periode', 'tingkat': 'tingkat', 'idsubsls': 'idsubsls', 'nm_gedung': 'nm_gedung', 'wil_campur': 'wil_campur', });
lyr_9504_kecamatanfinal_kecamatan_9504_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_final_desa_2.set('fieldImages', {'gid': 'Range', 'luas': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'iddesa': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'rw_dki': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_final_bs_3.set('fieldImages', {'kk': 'Range', 'gid': 'Range', 'sbs': 'TextEdit', 'base': 'TextEdit', 'bstt': 'Range', 'idbs': 'TextEdit', 'kdbs': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'Range', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'Range', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'Range', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'dominan': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'Range', 'nm_gedung': 'TextEdit', });
lyr_final_sls_4.set('fieldImages', {'kk': 'TextEdit', 'gid': 'Range', 'bstt': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'subsls': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'TextEdit', 'idsubsls': 'TextEdit', 'nm_gedung': 'TextEdit', 'wil_campur': 'TextEdit', });
lyr_9504_kecamatanfinal_kecamatan_9504_1.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'luas': 'no label', 'sumber': 'no label', 'periode': 'no label', 'layer': 'no label', 'path': 'no label', 'idkec': 'no label', });
lyr_final_desa_2.set('fieldLabels', {'gid': 'no label', 'luas': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'iddesa': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'rw_dki': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_final_bs_3.set('fieldLabels', {'kk': 'no label', 'gid': 'no label', 'sbs': 'no label', 'base': 'no label', 'bstt': 'no label', 'idbs': 'no label', 'kdbs': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'dominan': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', });
lyr_final_sls_4.set('fieldLabels', {'kk': 'no label', 'gid': 'no label', 'bstt': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'idsls': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'subsls': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'idsubsls': 'no label', 'nm_gedung': 'no label', 'wil_campur': 'no label', });
lyr_final_sls_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});