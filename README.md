# 📖 League of Legends (LoL) Rehber Uygulaması <!-- omit in toc -->

Android için League of Legends (LoL) rehber uygulaması yapımı.

> Hasar hesaplama excel'ine [buradan](/res/LOL%20-%20Dmg%20Calculator.xlsx) erişebilirsin

## İçerikler <!-- omit in toc -->

- [Yapılacaklar](#Yap%C4%B1lacaklar)
  - [Site Yönetimi](#Site-Y%C3%B6netimi)
    - [Karakter istatistiği](#Karakter-istatisti%C4%9Fi)
    - [Canlı oyun istatistiği](#Canl%C4%B1-oyun-istatisti%C4%9Fi)
  - [Planlananlar](#Planlananlar)
- [Kaynaklar](#Kaynaklar)
- [Faydalı Linkler](#Faydal%C4%B1-Linkler)
- [Yazar](#Yazar)

## Yapılacaklar

### Site Yönetimi

| Değişken İsmi     | Özelliği    |
| ----------------- | ----------- |
| `[region]`        | Bölge       |
| `[summoner_name]` | Oyuncu ismi |

#### Karakter istatistiği

leagueofgraphs.com sitesin url düzenlemesi halledilebilir.

```URL
https://www.leagueofgraphs.com/summoner/[region]/[summoner_name]
```

#### Canlı oyun istatistiği

porofessor.gg sitesi üzerinden halledilebilir.

```URL
https://porofessor.gg/live/[region]/[summoner_name]
```

### Planlananlar

- Karakterin özelliklerini itemlere göre hesaplama

- Hangi itemlerle daha fazla vururum hesabı

- Anlık maç analizi

- Maçlarda tavsiye seçimleri

  - Karşı takımın ve senin takımının aldıklarını girersin
  - Lane seçersin ve öneri gelir

- Mobafire şampiyon sayfası gibi bir sayfa ve bilgiler.

## Kaynaklar

- [Şampiyon bilgileri](https://www.mobafire.com/league-of-legends/champions) | Mobafire
  - utils/mobafire/champInfos.js

## Faydalı Linkler

> Bu dosyalar `Excludes` dizinine alınmıştır.

- [Minimap üzerinden champları algılama](https://github.com/farzaa/DeepLeague)
  - [Part 1 - Medium](https://medium.com/@farzatv/deepleague-leveraging-computer-vision-and-deep-learning-on-the-league-of-legends-mini-map-giving-d275fd17c4e0)
  - [Part 2 - Medium](https://medium.com/@farzatv/deepleague-part-2-the-technical-details-374439e7e09a)
- [Lol WebSocket ile Oyun Bilgilerini Alma](https://github.com/remixz/lol-game-analysis/tree/master/data-grabber)

## Yazar

Yunus Emre

- [Github](https://github.com/yedehrab)
- [GitLab](https://gitlab.com/yedehrab)

---

```text

█████░░░░██░░░░█████░██░░░░██
██░░░░░░████░░░██░░░░░██░░██░
████░░░██░░██░░█████░░░████░░
██░░░░████████░░░░██░░░░██░░░
█████░██░░░░██░█████░░░░██░░░

```
