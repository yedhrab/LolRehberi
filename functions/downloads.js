/**
 * JSON objesi indirme
 * @param {JSON} exportObj İndirilecek JSON objesi
 * @param {string} exportName İndirilen dosyanın ismi
 */
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function downloadArrayUrlWithKey(array, key) {
    let i = 0;
    array.forEach(element => {
        const url = element[key];
        console.log(i++ + ". " +  element["name"] + " "  + url);
        const fileName = url.split("/").pop();

        downloadURI(url, fileName);  
        sleep(100); // Bekleme olmazsa chrome her dosyayı indirmiyor
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    delete link;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }   
    }
}