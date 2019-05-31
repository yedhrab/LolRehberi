# Lol Uygulaması

Android için lol app yapımı.

> Hasar hesaplama excel'ine (buradan)[/res/LOL%20-%20Dmg%20Calculator.xlsx] erişebilirsin

## Yapılacaklar

### Site Yönetimi

| Değişken İsmi | Özelliği |
|---------------|----------|
| `[region]` | Bölge |
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

* Karakterin özelliklerini itemlere göre hesaplama

* Hangi itemlerle daha fazla vururum hesabı

* Anlık maç analizi

* Maçlarda tavsiye seçimleri

  * Karşı takımın ve senin takımının aldıklarını girersin
  * Lane seçersin ve öneri gelir

* Mobafire şampiyon sayfası gibi bir sayfa ve bilgiler.

## Kaynaklar

* [Şampiyon bilgileri](https://www.mobafire.com/league-of-legends/champions) | Mobafire
  * utils/mobafire/champInfos.js

## Yazar

Yunus Emre

* [Github](https://github.com/yedehrab)
* [GitLab](https://gitlab.com/yedehrab)

---

```text
█████░░░░██░░░░█████░██░░░░██
██░░░░░░████░░░██░░░░░██░░██░
████░░░██░░██░░█████░░░████░░
██░░░░████████░░░░██░░░░██░░░
█████░██░░░░██░█████░░░░██░░░
```
