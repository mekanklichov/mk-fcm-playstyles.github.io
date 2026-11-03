# ⚽ FC Mobile — Ultimate PlayStyles Guide & Meta Analysis

[![FC Mobile](https://img.shields.io/badge/EA%20SPORTS-FC%20Mobile%2025%2F26-green.svg)](https://renderz.app/)
[![PlayStyles](https://img.shields.io/badge/PlayStyles-22%20Total%20Traits-blue.svg)](#-playstyles-matrix--meta-tier-list)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla%20JS%2FCSS)-brightgreen.svg)](#-technical-architecture)
[![Offline Ready](https://img.shields.io/badge/Offline-file%3A%2F%2F%20Compatible-purple.svg)](#-offline--zero-cors-architecture)

A comprehensive, high-performance web guide dedicated exclusively to **EA SPORTS FC Mobile PlayStyles**, tailored specifically for mobile touch controls and pitch mechanics. It features an **Interactive PlayStyles Meta Tier Guide**, category and tier filters, instant search, side-by-side Silver (Level 1) vs. Gold (Level 2) perk comparisons, recommended squad combinations, and core in-game card mechanics.

---

## 📑 Table of Contents

- [🌟 Features](#-features)
- [📂 Project Architecture](#-project-architecture)
- [🚀 Quick Start & How to Use](#-quick-start--how-to-use)
- [📊 PlayStyles Matrix & Meta Tier List](#-playstyles-matrix--meta-tier-list)
- [🎯 Recommended Squad Combinations](#-recommended-squad-combinations)
- [⚙️ Card Mechanics & OVR Rules](#️-card-mechanics--ovr-rules)
- [🎨 Design System & Aesthetics](#-design-system--aesthetics)
- [⚠️ Disclaimer](#️-disclaimer)

---

## 🌟 Features

* **All 22 PlayStyles Analyzed**: Fully categorized across 6 tactical roles (*Finishing*, *Ball Control*, *Passing*, *Defending*, *Physical*, and *Goalkeeper*).
* **Meta Tier Rankings (S to D)**: Graded by competitive head-to-head (H2H) impact on mobile touch controls, from S-Tier (*Overpowered*) to D-Tier (*Useless*).
* **Compact Main Cards & Dedicated 3-Level Breakdown**: Main guide displays compact cards (name, basic 64px logo, description, categories) with direct 1-click navigation to the dedicated [All Details Page](src/playstyles.html) displaying complete Silver (Level 1), Gold (Level 2), and Violet (Level 3) perks.
* **Instant Diacritic-Resilient Search**: Real-time filtering across PlayStyle names, descriptions, categories, and perk benefits.
* **Category & Tier Filter Controls**: Filter simultaneously by category pills and tier pills with instant result counts and quick reset.
* **Interactive Navigation**: Smooth scroll jumping between sections (*Overview*, *Tier List*, *Explore*, *Combos*, *Mechanics*) with sticky navigation, deep-linking, and back-to-top button.
* **Tactical Squad Combinations**: Optimal PlayStyle configurations for every pitch position (LW, RW, ST, CAM, CM, LM, RM, CDM, CB, LB, RB, GK) with official 64px logos and tier-colored playstyle badges.
* **Zero Dependencies**: 100% pure vanilla HTML, modern CSS, and JavaScript. Runs directly from local filesystem (`file://`) with zero build steps or servers required.

---

## 📂 Project Architecture

```
Playstyles site/
├── assets/                       # Official EA Sports PlayStyle Assets
│   ├── playstyle_64_*_0.png      # 22 Basic PlayStyle Logos (64x64)
│   ├── playstyle_256_*_1.png     # 22 Level 1 (Silver) Icon Assets (256x256)
│   ├── playstyle_256_*_2.png     # 22 Level 2 (Gold) Icon Assets (256x256)
│   └── playstyle_256_*_3.png     # 22 Level 3 (Violet) Icon Assets (256x256)
├── index.html                    # Main PlayStyles Guide, Meta Tier List & Combos (Root Entry)
├── src/                          # Additional Web Application Files
│   ├── playstyles/               # 22 Dedicated Individual PlayStyle Detail Pages
│   │   ├── finesse-expert.html   # e.g. Full 3-Level Breakdown & Strategy for Finesse Expert
│   │   └── ... (21 more)
│   ├── playstyles.html           # Full Catalog Overview (All 22 PlayStyles)
│   ├── script.js                 # Main page controller, search & filters
│   ├── details.js                # Catalog page controller & deep-linking handler
│   └── style.css                 # Pitch-themed responsive dark design system & animations
├── Playstyles.txt                # Source reference notes & gameplay mechanics documentation
├── Tips.txt                      # Dynamic touch control pro-tips & recommended positions
├── build_site.js                 # Automation script to sync Playstyles.txt & Tips.txt to web
└── README.md                     # Project documentation
```

---

## 🚀 Quick Start & How to Use

### Direct File Execution (No Installation Required)
This project has **zero external runtime dependencies** or build steps. You can run it directly from your local filesystem:

1. Clone or download this repository.
2. Open [`index.html`](index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).
3. To view full 3-level perk breakdowns directly, open [`src/playstyles.html`](src/playstyles.html).

### Optional: Serving via a Local HTTP Server
If you prefer serving over a local HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js npx serve
npx -y serve .
```

---

## 📊 PlayStyles Matrix & Meta Tier List

Below is the complete catalog of all 22 PlayStyles in EA SPORTS FC Mobile:

| PlayStyle | Category | Meta Tier | Level 1 (Silver) Effect | Level 2 (Gold) Effect | Level 3 (Violet) Effect |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Trickster** | Ball Control | `S-TIER` | Performs skill moves with increased speed while keeping the ball close. | Performs skill moves with even more speed while keeping the ball close. | Performs skill moves with much more speed while staying tight on the ball. |
| **Rapid** | Ball Control | `S-TIER` | Faster acceleration when sprint dribbling. | Even faster acceleration when sprint dribbling and knock-ons, with better ball control ability. | Super faster acceleration when sprint dribbling and knock-ons, with even better ball control ability. |
| **Finesse Expert** | Finishing | `S-TIER` | Performs finesse shots with slight faster ball speed, additional curve and improved accuracy. | Performs finesse shots with greater ball speed, additional curve and improved accuracy. | Performs finesse shots much with even greater ball speed, additional curve and improved accuracy. |
| **Anticipate** | Defending | `S-TIER` | Improved standing tackle range, speed and the ability to stop the ball directly at their feet. | Much improved standing tackle range, speed and the ability to stop the ball directly at their feet. Also increases chance of triggering opponent stumble or fall. | *Not yet active on current event cards* |
| **Deflector** | Goalkeeper | `A-TIER` | Performs deflection saves into safer areas with increased ball speed. | Performs deflection saves into safer areas with even faster ball speed. | *Not yet active on current event cards* |
| **Accelerator** | Physical | `A-TIER` | Accelerates faster without the ball. | Accelerates even faster without the ball. | *Not yet active on current event cards* |
| **Tiki Taka** | Passing | `A-TIER` | Ground passes are faster and highly accurate. | Ground passes & dinked passes are even faster and more accurate. | Ground passes & dinked passes are significantly faster and accurate, with reduced trap error of the receiver. |
| **Bruiser** | Physical | `A-TIER` | Increases strength during physical battles. | Greatly increases strength during physical battles. | *Not yet active on current event cards* |
| **Clinical Finisher** | Finishing | `B-TIER` | Increases accuracy and shot speed for regular shots from mid-to close range. | Further increases accuracy and shot speed for regular shots from mid-to close range. | Exceptionally increases accuracy and shot speed for regular shots from mid-to close range. |
| **Rush Out** | Goalkeeper | `B-TIER` | GKs will have increased speed during rush. | GKs will have more increased speed and better auto tackle ability during rush. | *Not yet active on current event cards* |
| **Relentless** | Physical | `B-TIER` | Reduces fatigue loss during play. | Reduces fatigue loss during play and increases stamina recovery during halftime. | *Not yet active on current event cards* |
| **Bullet Pass** | Passing | `B-TIER` | Increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. | Greatly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. | Significantly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. |
| **Power Shot** | Finishing | `B-TIER` | Increases accuracy and shot speed for power shots. | Further increases accuracy and shot speed for power shots, while also providing faster kick animation and lower elevation to keep shot on target. | Greatly increases accuracy and shot speed for power shots, while also providing even faster kick animation and lower elevation to keep shot on target. |
| **Incisive Through Pass** | Passing | `B-TIER` | Ground Through Passes are more accurate, and travel at a higher speed. | Ground Through Passes and Dinked Ground Through Passes are even more accurate, and travel at a higher speed. Plus reduced trap error of the receiver. | *Not yet active on current event cards* |
| **Driven Lob Through** | Passing | `B-TIER` | Lob through passes are more accurate, also travel at a slightly higher speed. | Lob through passes are even more accurate, also travel at a higher speed. Plus reduced trap error of the receiver. | *Not yet active on current event cards* |
| **Precision Header** | Physical | `C-TIER` | Header shot, passes and clearances are slightly faster and more accurate. | Header shots, passes and clearances are faster and even more accurate. | *Not yet active on current event cards* |
| **Whipped Cross** | Passing | `C-TIER` | All crosses are faster, with increased accuracy and curve. | All crosses are even faster, with further increased accuracy and curve. | All crosses are significantly faster, with greatly increased accuracy and curve. Also increases corner kick accuracy, plus reduced error when taking corner kicks. |
| **Slide Tackle** | Defending | `C-TIER` | Improved slide tackle coverage, plus quicker execution and faster recovery. | Greatly improved slide tackle coverage, plus even quicker execution and faster recovery. Also grants better ball control when performing a slide tackle. | *Not yet active on current event cards* |
| **Chip Shot** | Finishing | `D-TIER` | Chip shots have an unique dipping trajectory with increased accuracy and shot speed. | Chip shots have an unique dipping trajectory with further increased accuracy and shot speed. | Chip shots have an unique dipping trajectory with greatly increased accuracy and shot speed. |
| **Penalty Expert** | Finishing | `D-TIER` | Increases accuracy and shot speed for penalty kicks. | Further increases accuracy and shot speed for penalty kicks, while also showing a red dot of the kick target after your swipe. | Greatly increases accuracy and shot speed for penalty kicks, while also showing a red dot of the kick target after your swipe. |
| **Guardian** | Defending | `D-TIER` | Improved hard tackle range, speed and the ability to stop the ball directly at their feet. | Much improved hard tackle range, speed and the ability to stop the ball directly at their feet. Also increases the chance of triggering opponent stumble or fall. | *Not yet active on current event cards* |
| **Dead Ball** | Finishing | `D-TIER` | Increases accuracy and shot speed for free kick shots. | Further increases accuracy and shot speed, plus enhanced trajectory curvature for free kick shots at long range, while also showing a red dot of the kick target after your swipe. | Also applies a new shot type that allows the ball to travel at high speed with sudden dips and unpredictable movement. |

---

## 🎯 Recommended Squad Combinations

Tactical PlayStyle pairings optimized for each position on mobile pitch mechanics:

| Position | Tactical Role | Recommended Primary & Secondary PlayStyles |
| :--- | :--- | :--- |
| **LW / RW** | Winger | `Trickster` + `Rapid` + `Finesse Expert` |
| **ST** | Striker | `Finesse Expert` + `Rapid` + `Clinical Finisher` |
| **CAM** | Attacking Midfield | `Power Shot` + `Finesse Expert` + `Incisive Through Pass` |
| **CM** | Central Midfield | `Tiki Taka` + `Bullet Pass` + `Relentless` |
| **LM / RM** | Wide Midfield | `Accelerator` + `Rapid` + `Whipped Cross` |
| **CDM** | Defensive Midfield | `Anticipate` + `Bruiser` + `Relentless` |
| **CB** | Center-Back | `Anticipate` + `Bruiser` + `Precision Header` |
| **LB / RB** | Full-Back | `Accelerator` + `Anticipate` + `Relentless` |
| **GK** | Goalkeeper | `Deflector` + `Rush Out` |

---

## ⚙️ Card Mechanics & OVR Rules

1. **Fixed Pre-Assignment**: PlayStyles are permanently assigned to player cards upon event release and cannot be swapped, added, or modified using skill points.
2. **Exclusive Box Cards (P2W)**: Featured cards in exclusive boxes have **1 Violet + 1 Silver** OR **2 Gold** PlayStyles.
3. **Maximum OVR Cards**: The highest OVR cards released for an event feature **1 Violet** OR **1 Gold + 1 Silver** PlayStyles.
4. **Max - 1 & Max - 2 OVR Cards**: Cards rated 1 or 2 tiers below the event maximum feature either **1 Gold** OR **2 Silver** PlayStyles.
5. **Max - 3 OVR Cards**: Cards rated 3 tiers below the event maximum feature **1 Silver** PlayStyle.
6. **Dynamic OVR Cap**: The maximum OVR cap in FC Mobile rises dynamically by **+2 to +3 OVR** every 2–3 major in-game events.

---

## 🎨 Design System & Aesthetics

* **Color Palette**:
  - Background: Pitch-dark Obsidian (`#050811`, `#121826`) with stadium green and violet radial glows.
  - Accents: Electric Pitch Green (`#00ff87`), Neon Cyan (`#00e5ff`), and Violet (`#c084fc`).
  - Tier Colors: S-Tier (90% Black / Dark Gray `#18181b`), A-Tier (Gold `#fbbf24`), B-Tier (50% Gray `#6b7280`), C-Tier (Bronze `#cd7f32`), D-Tier (90% White Gray `#e6e6e6`).
* **Typography**:
  - Display & Headings: [Teko](https://fonts.google.com/specimen/Teko) (Google Fonts) for athletic sports styling.
  - Body & UI: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) for high-legibility text on desktop and mobile.
* **Micro-Interactions**:
  - Frosted glass cards with `backdrop-filter: blur(12px)`.
  - Neon hover glows, smooth lift transitions (`transform: translateY(-4px)`), and staggered scroll animations powered by `IntersectionObserver`.

---

## ⚠️ Disclaimer

This project is a community-created tool and is **not affiliated with, endorsed by, or associated with Electronic Arts Inc. (EA SPORTS)**. All game trademarks, PlayStyle assets, and logos are property of their respective owners.
