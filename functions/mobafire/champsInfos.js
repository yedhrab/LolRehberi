/*
 * Mobifire Şampiyon Bilgilerini Alma Aracı
 * https://www.mobafire.com/league-of-legends/champions
 * 
 * Şampiyon özellikleri: 
 * statImgsSrc: Özelliklerinin resimleri, dayanıklık, saldırı vs.
 * name: Şampiyon ismi
 * imgSrc: Şampiyon resminin yolu
 * href: Şampiyon ile alaklaı mobafire linki
 * lanesPickRate: Lanelere göre seçilme oranı
 * lanes: Olası lane'leri
 * laneImgSrcs: Lane resimleri
 * statRatings: Özellik puanları
 * winRate: Kazanma oranı
 * banRate: Banlanma oranı
 * pickRate: Seçilme oranı
 */

function getChampElements() {
    return document.getElementsByClassName("champ-list__item visible");
}

function getStatImgsSrc(champElement) {
    const statImgs = [];

    const radialStats = champElement.getElementsByClassName("radial-stats")[0].getElementsByTagName("img");
    for (let i = 0; i < radialStats.length; i++) {
        statImgs.push(radialStats[i].src);
    }

    return statImgs;
}

function getChampName(champElement) {
    return champElement.getElementsByTagName("b")[0].innerText;
}

function getChampImgSrc(champElement) {
    return champElement.getElementsByTagName("img")[1].src;
}

function getChampHref(champElement) {
    return champElement.href;
}

function getChampLanesPickRate(champElement) {
    const lanesPickRate = [];

    const laneInfos = champElement.getElementsByTagName("b");
    for (let i = 1; i <= (laneInfos.length - 1) / 2; i++) {
        lanesPickRate.push(laneInfos[i].innerText);
    }

    return lanesPickRate;
}

function getChampLanes(champElement) {
    const lanes = [];

    const laneInfos = champElement.getElementsByTagName("b");
    for (let i = ((laneInfos.length - 1) / 2) + 1; i < laneInfos.length; i++) {
        lanes.push(laneInfos[i].innerText);
    }

    return lanes;
}

// Şampiyon lane resimleri optimizasyon için lane ismini kullanıp kendi db'en den çek
function getChampLaneImgSrcs(champElement) {
    const laneImgSrcs = [];

    const laneImgs = champElement.getElementsByClassName("champ-list__item__role")[0].getElementsByTagName("img");
    for (let i = 0; i < laneImgs.length; i++) {
        laneImgSrcs.push(laneImgs[i].src);
    }

    return laneImgSrcs;
}

function getChampStatRatings(champElement) {
    const statRatings = [];

    const radialStats = champElement.getElementsByClassName("radial-stats")[0].getElementsByTagName("img");
    for (let i = 0; i < radialStats.length; i++) {
        statRatings.push(radialStats[i].getAttribute("rating"));
    }

    return statRatings;
}

function getChampWinRate(champElement) {
    return champElement.getElementsByClassName("champ-list__item__winP")[0].innerText;
}

function getChampBanRate(champElement) {
    return champElement.getElementsByClassName("champ-list__item__banP")[0].innerText;
}

function getChampPickRate(champElement) {
    return champElement.getElementsByClassName("sort-value-pickP")[0].innerText;
}

function getChampsInfos() {
    const champElements = getChampElements();

    // Şampiyonlar
    const champs = [];

    champs.statImgsSrc = getStatImgsSrc(champElements[0]);

    for (let i = 0; i < champElements.length; i++) {
        const element = champElements[i];
        const champ = {};

        // Şampiyon ana özelliklerini alma
        champ.name = getChampName(element);
        champ.imgSrc = getChampImgSrc(element);
        champ.href = getChampHref(element);
        
        champ.lanesPickRate = getChampLanesPickRate(element);
        champ.lanes = getChampLanes(element);
        champ.statRatings = getChampStatRatings(element);

        champ.winRate = getChampWinRate(element);
        champ.banRate = getChampBanRate(element);
        champ.pickRate = getChampPickRate(element);

        champs.push(champ);
    }

    return champs;
}

// export default getChampsInfos();