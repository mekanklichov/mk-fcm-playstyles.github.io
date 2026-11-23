# ⚽ FC Mobile — Ultimate PlayStyles Guide & Meta Analysis

[![FC Mobile](https://img.shields.io/badge/EA%20SPORTS-FC%20Mobile%2025%2F26-00ff87.svg?style=flat-square&logo=ea)](https://renderz.app/)
[![PlayStyles](https://img.shields.io/badge/PlayStyles-22%20Total%20Traits-00e5ff.svg?style=flat-square)](#-playstyles-matrix--meta-tier-list)
[![Performance Tiers](https://img.shields.io/badge/Levels-Silver%20%7C%20Gold%20%7C%20Violet-c084fc.svg?style=flat-square)](#-performance-level-hierarchy)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla%20JS%2FCSS)-brightgreen.svg?style=flat-square)](#-technical-architecture)
[![Offline Ready](https://img.shields.io/badge/Offline-file%3A%2F%2F%20Compatible-blueviolet.svg?style=flat-square)](#-quick-start--how-to-use)

A comprehensive, high-performance web guide dedicated exclusively to **EA SPORTS FC Mobile PlayStyles**, tailored specifically for mobile touch controls, gesture inputs, and pitch mechanics. 

Features an **Interactive PlayStyles Meta Tier Guide**, category and tier filters, instant search, full 3-level perk comparisons (**Silver / Level 1**, **Gold / Level 2**, and **Violet / Level 3**), dedicated single-page breakdowns for all 22 PlayStyles with video previews, recommended squad combinations, gesture execution guides, and core in-game card mechanics.

---

## 📑 Table of Contents

- [🌟 Features](#-features)
- [🏅 Performance Level Hierarchy](#-performance-level-hierarchy)
- [🎮 Mobile Touch Controls & Gesture Execution](#-mobile-touch-controls--gesture-execution)
- [📊 PlayStyles Matrix & Meta Tier List](#-playstyles-matrix--meta-tier-list)
- [🎯 Recommended Squad Combinations](#-recommended-squad-combinations)
- [⚙️ Card Mechanics & OVR Rules](#️-card-mechanics--ovr-rules)
- [📂 Project Architecture](#-project-architecture)
- [🚀 Quick Start & How to Use](#-quick-start--how-to-use)
- [🛠️ Build & Synchronization Script](#️-build--synchronization-script)
- [🎨 Design System & Aesthetics](#-design-system--aesthetics)
- [⚠️ Disclaimer](#️-disclaimer)

---

## 🌟 Features

* **All 22 PlayStyles Analyzed**: Fully categorized across 6 tactical roles (*Finishing*, *Ball Control*, *Passing*, *Defending*, *Physical*, and *Goalkeeper*).
* **Meta Tier Rankings (S to D)**: Graded by competitive head-to-head (H2H) impact on mobile touch controls, from S-Tier (*Overpowered*) to D-Tier (*Useless* with dark red styling).
* **Dual Light / Dark Mode with Persistence**: Seamless theme toggle with animated Sun/Moon morphing icon, `localStorage` persistence, and automatic system OS `prefers-color-scheme` matching.
* **Liquid Glass UI**: Translucent, softly tinted surfaces with strong backdrop blur, saturated background color, bright upper rims, and darker lower edges. Hover states stay still and restrained.
* **Mobile-Ready Layout**: Phone-friendly spacing and readable detail pages, touch-sized controls, horizontally scrollable filter and breadcrumb rows, and safe-area-aware floating controls. Touch devices do not retain hover lift effects after taps.
* **Compact Mobile Navigation**: A keyboard-accessible section menu replaces the horizontally scrolling navigation on smaller screens and closes after navigation or Escape.
* **3-Level Perk Progression**: Comprehensive breakdown of Silver (Level 1), Gold (Level 2), and Violet (Level 3) perks for every PlayStyle.
* **Dedicated Deep-Dive Pages**: 22 standalone pages (`src/playstyles/*.html`) detailing tactical meta fit, recommended positions, gesture executions, pro-tips, and video previews.
* **Gesture Execution Guide**: Practical touch control instructions for every trait (swipes, taps, and skill triggers).
* **Instant Diacritic-Resilient Search & Shortcuts**: Real-time filtering across names, descriptions, categories, and perks. Press `/` anywhere to focus search and `Esc` to clear.
* **Category & Tier Filter Controls**: Filter simultaneously by category pills and tier pills with instant result counts and quick reset.
* **Search Feedback**: Matching text is highlighted, active filters appear as removable chips, and the empty state offers a one-tap reset.
* **Focused Detail Pages**: Each PlayStyle opens with a quick tier and position summary, followed by collapsible level details and gameplay guidance.
* **Tactical Squad Combinations**: Optimal PlayStyle configurations for every pitch position (LW, RW, ST, CAM, CM, LM, RM, CDM, CB, LB, RB, GK) with official logos and tier badges.
* **High-Level Accessibility**: Includes `@media (prefers-reduced-transparency: reduce)` and `@media (prefers-reduced-motion: reduce)` fallbacks, alongside WCAG AA contrast compliance for both dark and light modes.
* **Zero Dependencies**: 100% pure vanilla HTML, modern CSS, and JavaScript. Runs directly from local filesystem (`file://`) with zero build steps or servers required.

---

## 🏅 Performance Level Hierarchy

PlayStyles in FC Mobile operate on three distinct mechanical tiers:

| Level | Badge / Color | In-Game Significance |
| :--- | :--- | :--- |
| **Level 1** | **Silver** (Grey) | Provides baseline mechanical improvements to passing, shooting, physicality, or defensive responsiveness. |
| **Level 2** | **Gold** (Yellow) | Unlocks top animation speeds, expanded targeting cones, and secondary gameplay perks (e.g., causing opponents to stumble, tighter touchline control). |
| **Level 3** | **Violet** (Purple) | Maximum competitive boost; grants extreme mechanical bonuses, custom physics (e.g. sudden knuckleball trajectory dips), and near-instant recovery. |

---

## 🎮 Mobile Touch Controls & Gesture Execution

Mastering PlayStyles requires knowing the exact touch gesture to activate each trait on mobile touchscreens:

| PlayStyle | Gesture Execution / How to Perform | In-Game Trigger Condition | Recommended Positions |
| :--- | :--- | :--- | :--- |
| **Finesse Expert** | **Swipe down** on the Shoot button | Curved shot targeting the far corner | ST, LW / RW, CAM |
| **Clinical Finisher** | **Quick tap** on Shoot without holding | High-speed ground shot inside the 18-yard box | ST |
| **Power Shot** | **Swipe right** on the Shoot button | High-velocity rocket shot on target | ST, CAM |
| **Penalty Expert** | **Swipe** toward target corner on spot-kicks | Penalty kick aiming | Penalty Takers |
| **Chip Shot** | **Pull up** on the Shoot button | Lofting ball over a rushing goalkeeper | ST, LW / RW |
| **Dead Ball** | **Draw a curved path** during set-pieces | Free kick shooting (enables knuckle dips at Lvl 3) | Free Kick Takers |
| **Trickster** | **Tap or swipe sprint button** in any direction | 1v1 dribbling and skill move chains | ST, LW / RW |
| **Rapid** | **Hold sprint** / **Double-tap sprint** into space | Sprint knock-on and explosive speed bursts | LW / RW, ST, LM / RM |
| **Tiki Taka** | **Tap / Double-tap** Pass button | Rapid first-time ground passing sequences | CM, CAM |
| **Bullet Pass** | **Swipe left** on Pass button | High-speed driven ground through pass | CM, CDM |
| **Whipped Cross** | **Swipe pass up / right** from wide areas | Deep curling cross away from goalkeeper | LM / RM, LB / RB |
| **Incisive Through Pass**| **Tap / Double-tap** Through Pass button | Defense-splitting through ball along turf | CAM |
| **Driven Lob Through** | **Pull up** on Through Pass button | High lofted through ball over defensive line | CAM, CM |
| **Anticipate** | **Tap Tackle** or **Jockey** near opponent | Standing tackle with instant ball possession | CB, CDM, LB / RB |
| **Guardian** | **Swipe left on Tackle** or **Jockey** closely | Hard shoulder charge / heavy tackle | CB, CDM |
| **Slide Tackle** | **Tap Slide Tackle** button | Extended ground slide clearance/interception | CB, LB / RB |
| **Accelerator** | **Hold Sprint** during off-ball runs | Sudden burst speed when tracking back or overlapping | LM / RM, LB / RB |
| **Relentless** | **Passive effect** (triggers continuously) | Reduces fatigue loss and boosts halftime recovery | CM, CDM, LB / RB |
| **Bruiser** | **Engage in 50/50 duels** side-by-side | Shoulder jostle and ball shielding | CB, CDM, ST |
| **Precision Header** | **Tap Shoot or Pass** during aerial contests | Downward-angled headers on crosses and corners | CB, ST |
| **Deflector** | **Passive effect** (GK reflex saves) | Pushes deflection saves away into safe zones | GK |
| **Rush Out** | **Pull down** on 2nd Defender button | Keeper rapidly charges forward in 1v1 situations | GK |

---

## 📊 PlayStyles Matrix & Meta Tier List

Below is the complete catalog of all 22 PlayStyles in EA SPORTS FC Mobile with full 3-level perk descriptions:

| PlayStyle | Category | Meta Tier | Level 1 (Silver) Effect | Level 2 (Gold) Effect | Level 3 (Violet) Effect |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Trickster** | Ball Control | `S-TIER` | Performs skill moves with increased speed while keeping the ball close. | Performs skill moves with even more speed while keeping the ball close. | Performs skill moves with much more speed while staying tight on the ball. |
| **Rapid** | Ball Control | `S-TIER` | Faster acceleration when sprint dribbling. | Even faster acceleration when sprint dribbling and knock-ons, with better ball control ability. | Super faster acceleration when sprint dribbling and knock-ons, with even better ball control ability. |
| **Finesse Expert** | Finishing | `S-TIER` | Performs finesse shots with slightly faster ball speed, additional curve, and improved accuracy. | Performs finesse shots with greater ball speed, additional curve, and improved accuracy. | Performs finesse shots with even greater ball speed, additional curve, and improved accuracy. |
| **Anticipate** | Defending | `S-TIER` | Improved standing tackle range, speed, and the ability to stop the ball directly at their feet. | Much improved standing tackle range, speed, and the ability to stop the ball directly at their feet. | Maximized standing tackle range and recovery, and increases the chance of triggering opponent stumble or fall. |
| **Deflector** | Goalkeeper | `A-TIER` | Performs deflection saves into safer areas with increased ball speed. | Performs deflection saves into safer areas with even faster ball speed. | Performs deflection saves into safer areas or towards free teammates with even greater ball speed. |
| **Accelerator** | Physical | `A-TIER` | Accelerates faster without the ball. | Accelerates even faster without the ball. | Accelerates exceptionally fast without the ball. |
| **Tiki Taka** | Passing | `A-TIER` | Ground passes are faster and highly accurate. | Ground passes & dinked passes are even faster and more accurate. | Ground passes & dinked passes are significantly faster and accurate, with reduced trap error of the receiver. |
| **Bruiser** | Physical | `A-TIER` | Increases strength during physical battles. | Greatly increases strength during physical battles. | Significantly increases strength during physical battles. |
| **Clinical Finisher** | Finishing | `B-TIER` | Increases accuracy and shot speed for regular shots from mid to close range. | Further increases accuracy and shot speed for regular shots from mid to close range. | Exceptionally increases accuracy and shot speed for regular shots from mid to close range. |
| **Rush Out** | Goalkeeper | `B-TIER` | GKs will have increased speed during rush. | GKs will have more increased speed and better auto tackle ability during rush. | GKs will have greatly increased speed and better auto tackle ability during rush. |
| **Relentless** | Physical | `B-TIER` | Reduces fatigue loss during play. | Reduces fatigue loss during play and increases stamina recovery during halftime. | Greatly reduces fatigue loss during play and greatly increases stamina recovery during halftime. |
| **Bullet Pass** | Passing | `B-TIER` | Increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. | Greatly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. | Significantly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver. |
| **Power Shot** | Finishing | `B-TIER` | Increases accuracy and shot speed for power shots. | Further increases accuracy and shot speed for power shots, with faster kick animation and lower elevation. | Greatly increases accuracy and shot speed for power shots, with even faster kick animation and lower elevation. |
| **Incisive Through Pass** | Passing | `B-TIER` | Ground Through Passes are more accurate and travel at a higher speed. | Ground & Dinked Through Passes are even more accurate, faster, and reduce receiver trap error. | Ground & Dinked Through Passes are significantly more accurate, with more impact on user control and reduced trap error. |
| **Driven Lob Through** | Passing | `B-TIER` | Lob through passes are more accurate, also travel at a slightly higher speed. | Lob through passes are even more accurate, travel faster, with reduced trap error of the receiver. | Lob through passes are much more accurate, travel at an even higher speed, with reduced trap error. |
| **Precision Header** | Physical | `C-TIER` | Header shots, passes, and clearances are slightly faster and more accurate. | Header shots, passes, and clearances are faster and even more accurate. | Header shots, passes, and clearances are exceptionally fast and very accurate. |
| **Whipped Cross** | Passing | `C-TIER` | Lob crosses have increased accuracy and curve. Plus reduced error when taking corner kicks. | Lob and ground crosses are faster, with further increased accuracy and curve. Plus reduced error on corner kicks. | All crosses are significantly faster with greatly increased accuracy and curve. Also increases corner kick accuracy. |
| **Slide Tackle** | Defending | `C-TIER` | Improved slide tackle coverage, quicker execution, and faster recovery. | Greatly improved slide tackle coverage, quicker execution, faster recovery, and better ball control. | Significantly improved slide tackle coverage, much quicker execution, faster recovery, and superior ball control. |
| **Chip Shot** | Finishing | `D-TIER` | Chip shots have a unique dipping trajectory with increased accuracy and shot speed. | Chip shots have a unique dipping trajectory with further increased accuracy and shot speed. | Chip shots have a unique dipping trajectory with greatly increased accuracy and shot speed. |
| **Penalty Expert** | Finishing | `D-TIER` | Increases accuracy and shot speed for penalty kicks. | Further increases accuracy and shot speed, and shows a red dot kick target after your swipe. | Greatly increases accuracy and shot speed, and displays an exact red target reticle after swipe. |
| **Guardian** | Defending | `D-TIER` | Improved hard tackle range, speed, and the ability to stop the ball directly at their feet. | Much improved hard tackle range, speed, and ability to stop the ball directly at their feet. | Greatly improved hard tackle range and speed, and increases the chance of triggering opponent stumble or fall. |
| **Dead Ball** | Finishing | `D-TIER` | Increases accuracy and shot speed for free kick shots. | Further increases accuracy, shot speed, and curve on long-range free kicks, with target reticle visualization. | Applies a new shot type enabling the ball to travel at extreme speed with sudden dips and unpredictable movement. |

---

## 🎯 Recommended Squad Combinations

Tactical PlayStyle pairings optimized for each pitch position on mobile touch mechanics:

| Position | Tactical Role | Recommended Primary & Secondary PlayStyles | Strategic Reason |
| :--- | :--- | :--- | :--- |
| **LW / RW** | Winger | `Trickster` + `Rapid` + `Finesse Expert` | Exploit flank pace, beat full-backs with skill moves, and cut inside to curl top-corner finishes. |
| **ST** | Striker | `Finesse Expert` + `Rapid` + `Clinical Finisher` | Explode behind defensive lines and execute reliable first-time finishes from any angle inside the box. |
| **CAM** | Attacking Midfield | `Power Shot` + `Finesse Expert` + `Incisive Through Pass` | Provide dual long-range shooting threat while distributing weighted ground through-balls to forwards. |
| **CM** | Central Midfield | `Tiki Taka` + `Bullet Pass` + `Relentless` | Control match tempo, break press lines with driven passes, and maintain high stamina across 90 minutes. |
| **LM / RM** | Wide Midfield | `Accelerator` + `Rapid` + `Whipped Cross` | Fast transitions along touchlines and whipped early crosses into the box for target strikers. |
| **CDM** | Defensive Midfield | `Anticipate` + `Bruiser` + `Relentless` | Shield backline, win standing tackles with zero rebound loss, and overpower opposition creators physically. |
| **CB** | Center-Back | `Anticipate` + `Bruiser` + `Precision Header` | Lock down defensive channel, knock attackers off the ball in jostles, and dominate aerial corner clearances. |
| **LB / RB** | Full-Back | `Accelerator` + `Anticipate` + `Relentless` | Recover swiftly against fast wingers, dispossess on the flank, and run box-to-box without stamina drop. |
| **GK** | Goalkeeper | `Deflector` + `Rush Out` | Prevent rebound tap-in goals by parrying wide, and sweep aggressively in 1v1 through-ball situations. |

---

## ⚙️ Card Mechanics & OVR Rules

Understanding how PlayStyles are distributed across event cards in EA SPORTS FC Mobile:

1. **Fixed Pre-Assignment**: PlayStyles are permanently assigned to player cards upon event release and cannot be swapped, added, or modified using skill points.
2. **Exclusive Box Cards (P2W)**: Featured cards in exclusive store boxes feature **1 Violet + 1 Silver** OR **2 Gold** PlayStyles.
3. **Maximum OVR Cards**: The highest OVR cards released for an event feature **1 Violet** OR **1 Gold + 1 Silver** PlayStyles.
4. **Max - 1 & Max - 2 OVR Cards**: Cards rated 1 or 2 tiers below the event maximum feature either **1 Gold** OR **2 Silver** PlayStyles.
5. **Max - 3 OVR Cards**: Cards rated 3 tiers below the event maximum feature **1 Silver** PlayStyle.
6. **Dynamic OVR Cap**: The maximum OVR cap in FC Mobile rises dynamically by **+2 to +3 OVR** every 2–3 major in-game events.

---

## 📂 Project Architecture

```
Playstyles site/
├── assets/                       # Official EA Sports PlayStyle Assets (110+ icons & previews)
│   ├── playstyle_64_*_0.png      # 22 Basic PlayStyle Badges (64x64)
│   ├── playstyle_256_*_1.png     # 22 Level 1 (Silver) Icons (256x256)
│   ├── playstyle_256_*_2.png     # 22 Level 2 (Gold) Icons (256x256)
│   ├── playstyle_256_*_3.png     # 22 Level 3 (Violet) Icons (256x256)
│   └── playstyle_video_preiview_*.png # 22 Video Preview Illustrations
├── index.html                    # Main PlayStyles Guide, Meta Tier List & Combos (Root Entry)
├── src/                          # Web Application Sources
│   ├── playstyles/               # 22 Dedicated Individual PlayStyle Detail Pages
│   │   ├── finesse-expert.html   # Standalone page for Finesse Expert
│   │   ├── anticipate.html       # Standalone page for Anticipate
│   │   └── ... (20 more pages)
│   ├── playstyles.html           # Full Catalog Overview (All 22 PlayStyles)
│   ├── theme.js                  # Theme Controller (Light/Dark mode, storage & system sync)
│   ├── script.js                 # Main page controller, search & filter logic
│   ├── details.js                # Catalog page controller & deep-linking handler
│   └── style.css                 # Dual-theme iOS Liquid Glass design system & animations
├── Playstyles.txt                # Raw source reference notes & gameplay mechanics documentation
├── Tips.txt                      # Dynamic touch control pro-tips & recommended positions
├── build_site.js                 # Automation script syncing Playstyles.txt & Tips.txt to web
└── README.md                     # Project documentation
```

---

## 🚀 Quick Start & How to Use

### Direct File Execution (No Installation Required)
This project has **zero external runtime dependencies** or build steps. You can run it directly from your local filesystem:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/mekanklichov/mk-fcm-playstyles.git
   ```
2. Open [`index.html`](index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).
3. To view the full 3-level catalog overview directly, open [`src/playstyles.html`](src/playstyles.html).
4. To view individual PlayStyle breakdowns, navigate to any page in [`src/playstyles/`](src/playstyles/).

### Optional: Serving via a Local HTTP Server
If you prefer serving over a local HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js npx serve
npx -y serve .
```

---

## 🛠️ Build & Synchronization Script

The repository includes a Node.js automation script (`build_site.js`) that synchronizes the raw notes from `Playstyles.txt` and `Tips.txt` into the web application:

```bash
node build_site.js
```

### What `build_site.js` Does:
1. Parses `Playstyles.txt` to extract meta tiers, categories, and 3-level perk descriptions.
2. Parses `Tips.txt` to extract recommended squad positions, activation moments, touch gesture executions, and gameplay tips.
3. Automatically generates all 22 individual HTML detail pages inside `src/playstyles/` with correct relative asset paths, breadcrumb navigation, and theme toggle controls.
4. Synchronizes and updates the embedded dataset in `src/script.js`.

---

## 🎨 Design System & Aesthetics

* **Dual-Theme Support (Dark & Light)**:
  - **Dark Mode (Default)**: Deep charcoal (`#081018`) with green, cyan, and violet ambient lighting.
  - **Light Mode**: Soft gray-green (`#f3f6f2`) with subtle emerald, blue, and lilac color fields and dark, readable typography.
  - **Animated iOS Pill Switcher**: Sun/Moon icon morphing rotation animation with instant `localStorage` persistence and `prefers-color-scheme` synchronization.
* **Liquid Glass UI**:
  - Translucent surfaces use `backdrop-filter: blur(24px) saturate(175%)` with tinted gradients that let the ambient page colors show through.
  - Static upper-edge highlights and lower-edge shadows provide depth without animated shine on hover.
  - Reduced-transparency settings switch to solid surfaces for users who prefer less blur.
* **Tier Color System**:
  - **S-Tier**: Obsidian Black / Charcoal (`#18181b` / `#1e293b`)
  - **A-Tier**: Champion Gold (`#fbbf24` / `#d97706`)
  - **B-Tier**: Metallic Silver (`#9ca3af` / `#64748b`)
  - **C-Tier**: Vintage Bronze (`#cd7f32` / `#b45309`)
  - **D-Tier**: Dark Crimson Red (`#7f1d1d` / `#991b1b`)
* **Typography**:
  - Display & Headings: [Teko](https://fonts.google.com/specimen/Teko) for bold sports graphics.
  - Body & UI: [Inter](https://fonts.google.com/specimen/Inter) for clean mobile legibility.
* **Accessibility**:
  - Focus rings with outline offsets for keyboard navigation.
  - OS-level transparency reduction support (`prefers-reduced-transparency`).
  - Motion reduction support (`prefers-reduced-motion`).

---

## ⚠️ Disclaimer

This project is an independent community-created resource and is **not affiliated with, endorsed by, or sponsored by Electronic Arts Inc. (EA SPORTS)**. All game titles, trademarks, and PlayStyle artwork belong to their respective owners.
