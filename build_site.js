const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const playstylesDir = path.join(srcDir, 'playstyles');

if (!fs.existsSync(playstylesDir)) {
    fs.mkdirSync(playstylesDir, { recursive: true });
}

// 1. Map PlayStyle names to asset image bases
const imgBaseMap = {
    'Finesse Expert': 'playstyle_256_PLAYSTYLE_POWER_FINESSE',
    'Clinical Finisher': 'playstyle_256_PLAYSTYLE_CLINICAL_FINISHER',
    'Power Shot': 'playstyle_256_PLAYSTYLE_POWER_SHOT',
    'Penalty Expert': 'playstyle_256_PLAYSTYLE_PENALTY_EXPERT',
    'Chip Shot': 'playstyle_256_PLAYSTYLE_CHIP_MASTER',
    'Dead ball': 'playstyle_256_PLAYSTYLE_DEAD_BALL',
    'Dead Ball': 'playstyle_256_PLAYSTYLE_DEAD_BALL',
    'Trickster': 'playstyle_256_PLAYSTYLE_TRICKSTER',
    'Rapid': 'playstyle_256_PLAYSTYLE_SPEED_DRIBBLER',
    'Tiki Taka': 'playstyle_256_PLAYSTYLE_TIKI_TAKA',
    'Bullet Pass': 'playstyle_256_PLAYSTYLE_BULLET_PASS',
    'Whipped Cross': 'playstyle_256_PLAYSTYLE_WHIPPED_CROSSER',
    'Incisive through pass': 'playstyle_256_PLAYSTYLE_INCISIVE_THROUGH',
    'Incisive Through Pass': 'playstyle_256_PLAYSTYLE_INCISIVE_THROUGH',
    'Driven lob through': 'playstyle_256_PLAYSTYLE_DRIVEN_LOB_THROUGH',
    'Driven Lob Through': 'playstyle_256_PLAYSTYLE_DRIVEN_LOB_THROUGH',
    'Anticipate': 'playstyle_256_PLAYSTYLE_STAND_TACKLE_MASTER',
    'Guardian': 'playstyle_256_PLAYSTYLE_HARD_TACKLE_MASTER',
    'Slide tackle': 'playstyle_256_PLAYSTYLE_SLIDE_TACKLE',
    'Slide Tackle': 'playstyle_256_PLAYSTYLE_SLIDE_TACKLE',
    'Accelerator': 'playstyle_256_PLAYSTYLE_ACCELERATOR',
    'Relentless': 'playstyle_256_PLAYSTYLE_RELENTLESS_STAMINA',
    'Bruiser': 'playstyle_256_PLAYSTYLE_INTIMIDATOR',
    'Precision Header': 'playstyle_256_PLAYSTYLE_AERIAL_MASTER',
    'Deflector': 'playstyle_256_PLAYSTYLE_DEFLECTOR',
    'Rush Out': 'playstyle_256_PLAYSTYLE_SUPER_RUSH'
};

// 1b. Map PlayStyle names to video preview images (22 in assets folder)
const previewMap = {
    'finesse expert': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_FINESSE_SHOT.png',
    'clinical finisher': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_CLINICAL_FINISHER.png',
    'power shot': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_POWER_SHOT.png',
    'penalty expert': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_PENALTY_EXPERT.png',
    'chip shot': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_CHIP_MASTER.png',
    'dead ball': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_DEAD_BALL.png',
    'trickster': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_TRICKSTER.png',
    'rapid': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_SPEED_DRIBBLER.png',
    'tiki taka': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_TIKI_TAKA.png',
    'bullet pass': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_BULLET_PASS.png',
    'whipped cross': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_WHIPPED_CROSSER.png',
    'incisive through pass': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_INCISIVE_THROUGH.png',
    'driven lob through': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_DRIVEN_LOB_THROUGH.png',
    'anticipate': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_STAND_TACKLE_MASTER.png',
    'guardian': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_HARD_TACKLE_MASTER.png',
    'slide tackle': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_SLIDE_TACKLE.png',
    'accelerator': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_ACCELERATOR.png',
    'relentless': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_RELENTLESS_STAMINA.png',
    'bruiser': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_INTIMIDATOR.png',
    'precision header': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_AERIAL_DEFENSE.png',
    'deflector': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_DEFLECTOR.png',
    'rush out': 'playstyle_video_preiview_PREVIEW_PLAYSTYLE_SUPER_RUSH.png'
};

// 2. Parse Meta Tier List from Section 2 of Playstyles.txt
function parseTiers(txt) {
    const tierMap = {};
    const lines = txt.split(/\r?\n/);
    for (const line of lines) {
        const tierMatch = line.match(/\[([SABCD]-TIER)\]/i);
        if (tierMatch) {
            const tierCode = tierMatch[1].charAt(0).toUpperCase();
            const lastColon = line.lastIndexOf(':');
            if (lastColon !== -1) {
                const listStr = line.substring(lastColon + 1);
                const names = listStr.split(',').map(s => s.trim()).filter(Boolean);
                names.forEach(n => {
                    tierMap[n.toLowerCase()] = tierCode;
                    if (n.toLowerCase().endsWith(' pass')) {
                        tierMap[n.toLowerCase().replace(/ pass$/, '')] = tierCode;
                    }
                });
            }
        }
    }
    return tierMap;
}

// 3. Parse Playstyles.txt Section 3
function parsePlaystyles(txt, tierMap) {
    const lines = txt.split(/\r?\n/);
    let currentCategory = '';
    let currentPs = null;
    let lastField = null;
    const playstyles = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('4. RECOMMENDED')) break; // Stop at section 4

        if (line.startsWith('[') && line.endsWith(']') && !line.includes('TIER')) {
            currentCategory = line.slice(1, -1).trim();
            continue;
        }

        const numMatch = line.match(/^(\d+)\.\s+([^\r\n]+)$/);
        if (numMatch && currentCategory && parseInt(numMatch[1]) <= 22) {
            if (currentPs) playstyles.push(currentPs);
            const rawName = numMatch[2].trim();
            // Normalize casing for display (e.g., 'Dead ball' -> 'Dead Ball')
            const displayName = rawName
                .split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ')
                .replace('Through Pass', 'Through Pass');

            const tier = tierMap[rawName.toLowerCase()] || tierMap[displayName.toLowerCase()] || 'B';
            const imgBase = imgBaseMap[rawName] || imgBaseMap[displayName] || '';

            currentPs = {
                id: parseInt(numMatch[1]),
                name: displayName,
                rawName: rawName,
                imgBase: imgBase,
                category: currentCategory.toUpperCase(),
                tier: tier,
                desc: '',
                lvl1: '',
                lvl2: '',
                lvl3: null
            };
            lastField = null;
            continue;
        }

        if (!currentPs) continue;

        if (line.match(/^-\s*Silver\s*\(Lv[li]\s*1\):\s*(.*)$/i)) {
            currentPs.lvl1 = line.replace(/^-\s*Silver\s*\(Lv[li]\s*1\):\s*/i, '').trim();
            lastField = 'lvl1';
        } else if (line.match(/^-\s*Gold\s*\(Lv[li]\s*2\):\s*(.*)$/i)) {
            currentPs.lvl2 = line.replace(/^-\s*Gold\s*\(Lv[li]\s*2\):\s*/i, '').trim();
            lastField = 'lvl2';
        } else if (line.match(/^-\s*Violet\s*\(Lv[li]\s*3\):?\s*(.*)$/i)) {
            const val = line.replace(/^-\s*Violet\s*\(Lv[li]\s*3\):?\s*/i, '').trim();
            currentPs.lvl3 = val ? val : null;
            lastField = 'lvl3';
        } else if (line.startsWith('-') && !currentPs.desc) {
            currentPs.desc = line.replace(/^-\s*/, '').trim();
            lastField = 'desc';
        } else if (lastField && line.length > 0 && !line.startsWith('-') && !line.startsWith('[')) {
            // Continuation line for wrapped descriptions
            currentPs[lastField] = (currentPs[lastField] ? currentPs[lastField] + ' ' : '') + line.trim();
        }
    }
    if (currentPs) playstyles.push(currentPs);
    return playstyles;
}

// 4. Parse Tips.txt
function parseTips(txt) {
    const lines = txt.split(/\r?\n/);
    const tipsData = {};
    let currentPs = null;
    let lastField = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('2. TACTICAL SQUAD COMBINATIONS')) break;
        const numMatch = line.match(/^(\d+)\.\s+([^\r\n]+)$/);
        if (numMatch) {
            currentPs = numMatch[2].trim().toLowerCase();
            tipsData[currentPs] = { tip: '', whenActivated: '', howToPerform: '', positions: [] };
            lastField = null;
            continue;
        }
        if (!currentPs || !tipsData[currentPs]) continue;

        if (line.match(/^-\s*Tip:\s*(.*)$/i)) {
            tipsData[currentPs].tip = line.replace(/^-\s*Tip:\s*/i, '').trim();
            lastField = 'tip';
        } else if (line.match(/^-\s*When activated:\s*(.*)$/i)) {
            tipsData[currentPs].whenActivated = line.replace(/^-\s*When activated:\s*/i, '').trim();
            lastField = 'whenActivated';
        } else if (line.match(/^-\s*How to perform:\s*(.*)$/i)) {
            tipsData[currentPs].howToPerform = line.replace(/^-\s*How to perform:\s*/i, '').trim();
            lastField = 'howToPerform';
        } else if (line.match(/^-\s*Recommended Positions\s*\/?\s*Roles?:\s*(.*)$/i)) {
            const posStr = line.replace(/^-\s*Recommended Positions\s*\/?\s*Roles?:\s*/i, '').trim();
            tipsData[currentPs].positions = posStr.split(',').map(s => s.trim()).filter(Boolean);
            lastField = null;
        } else if (lastField && line.length > 0 && !line.startsWith('-') && !line.startsWith('[')) {
            // Continuation line for multi-line tips
            tipsData[currentPs][lastField] = (tipsData[currentPs][lastField] ? tipsData[currentPs][lastField] + ' ' : '') + line;
        }
    }
    return tipsData;
}

function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Read input files
const playstylesTxt = fs.readFileSync(path.join(rootDir, 'Playstyles.txt'), 'utf8');
const tipsTxt = fs.readFileSync(path.join(rootDir, 'Tips.txt'), 'utf8');

const tierMap = parseTiers(playstylesTxt);
const playstyles = parsePlaystyles(playstylesTxt, tierMap);
const tipsData = parseTips(tipsTxt);

console.log(`Parsed ${playstyles.length} playstyles from Playstyles.txt`);

// Squad combinations definition
const squadCombos = [
    { pos: "LW / RW", role: "Winger", traits: ["Trickster", "Rapid", "Finesse Expert"] },
    { pos: "ST", role: "Striker", traits: ["Finesse Expert", "Rapid", "Clinical Finisher"] },
    { pos: "CAM", role: "Attacking Midfield", traits: ["Power Shot", "Finesse Expert", "Incisive Through Pass"] },
    { pos: "CM", role: "Central Midfield", traits: ["Tiki Taka", "Bullet Pass", "Relentless"] },
    { pos: "LM / RM", role: "Wide Midfield", traits: ["Accelerator", "Rapid", "Whipped Cross"] },
    { pos: "CDM", role: "Defensive Midfield", traits: ["Anticipate", "Bruiser", "Relentless"] },
    { pos: "CB", role: "Center-Back", traits: ["Anticipate", "Bruiser", "Precision Header"] },
    { pos: "LB / RB", role: "Full-Back", traits: ["Accelerator", "Anticipate", "Relentless"] },
    { pos: "GK", role: "Goalkeeper", traits: ["Deflector", "Rush Out"] }
];

// Specialized tactical role descriptions for playstyles not in standard starting combos
const specializedTactics = {
    "penalty-expert": {
        title: "Knockout & Set-Piece Specialist",
        desc: "Essential specialist asset for high-stakes Division Rivals and tournament penalty shootouts. Pair on your designated primary spot-kicker alongside clinical finishing or power shot traits."
    },
    "chip-shot": {
        title: "Anti-Rush Goal Scoring Weapon",
        desc: "Direct tactical counter against opponents utilizing aggressive goalkeeper rush tactics. Pairs exceptionally well with pace traits (Rapid, Accelerator) on counter-attacking wingers and strikers."
    },
    "dead-ball": {
        title: "Direct Set-Piece Match-Winner",
        desc: "Game-changing set-piece weapon that converts direct free kicks outside the box into reliable goals. Essential on your designated primary free-kick specialist in tight, low-scoring matches."
    },
    "driven-lob-through": {
        title: "Deep Counter-Attacking Transition",
        desc: "Devastating for rapid vertical transitions over compact defensive blocks. Pair on deep-lying playmakers (CAM / CM) targeting rapid, high-acceleration wingers running into open pitch channels."
    },
    "guardian": {
        title: "Aggressive Stopper & Pressing Enforcer",
        desc: "Perfect in a 3-CB or 5-back system as the dedicated aggressive stopper, aggressively stepping out to dispossess target forwards while an Anticipate partner sweeps up behind."
    },
    "slide-tackle": {
        title: "High-Recovery Emergency Defending",
        desc: "Ideal for high-line pressing setups and wide recovery full-backs. Greatly reduces recovery lag when chasing down rapid wingers and executing decisive last-man ground tackles."
    }
};

// Generate individual HTML pages
playstyles.forEach((ps, idx) => {
    const slug = slugify(ps.name);
    const prevPs = playstyles[(idx - 1 + playstyles.length) % playstyles.length];
    const nextPs = playstyles[(idx + 1) % playstyles.length];
    const prevSlug = slugify(prevPs.name);
    const nextSlug = slugify(nextPs.name);

    const logo64 = `../../assets/${ps.imgBase.replace('256', '64')}_0.png`;
    const lvl1Img = `../../assets/${ps.imgBase}_1.png`;
    const lvl2Img = `../../assets/${ps.imgBase}_2.png`;
    const lvl3Img = `../../assets/${ps.imgBase}_3.png`;

    const tipObj = tipsData[ps.name.toLowerCase()] || tipsData[ps.rawName.toLowerCase()] || { tip: '', whenActivated: '', howToPerform: '', positions: ['Flexible'] };
    const tip = tipObj.tip || 'Utilize this trait to enhance your squad balance in Head-to-Head touch controls.';
    const whenActivated = tipObj.whenActivated || '';
    const howToPerform = tipObj.howToPerform || '';
    const positions = tipObj.positions && tipObj.positions.length ? tipObj.positions : ['Flexible'];

    const previewImg = previewMap[ps.name.toLowerCase()] || previewMap[ps.rawName.toLowerCase()] || '';

    const combosFeaturing = squadCombos.filter(c => 
        c.traits.some(t => t.toLowerCase() === ps.name.toLowerCase() || t.toLowerCase() === ps.rawName.toLowerCase())
    );

    const related = playstyles.filter(p => p.category === ps.category && p.name !== ps.name);

    // ONLY render Level 3 if provided in Playstyles.txt!
    const lvl3Html = ps.lvl3
        ? `
            <div class="ps-level-card card-violet">
                <div class="ps-level-icon-wrapper">
                    <img class="ps-level-icon" src="${lvl3Img}" alt="${ps.name} Violet (Lvl 3)">
                </div>
                <div class="ps-level-details">
                    <div class="ps-level-header">
                        <span class="ps-level-tag ps-level-tag-violet">Violet (Level 3)</span>
                    </div>
                    <div class="ps-level-text">${ps.lvl3}</div>
                </div>
            </div>
        `
        : '';

    const specTactic = specializedTactics[slug] || {
        title: "Tactical Flexibility",
        desc: "This PlayStyle offers versatile utility across multiple tactical formations and pairs effectively with complimentary speed or physical traits."
    };

    const combosHtml = combosFeaturing.length > 0
        ? `
            <div class="ps-tactic-card card-purple">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-purple">Squad Synergy</span>
                        <h3 class="ps-tactic-title">Meta Squad Combinations</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-tactic-text">Featured in recommended competitive squad lineups:</div>
                        <div class="ps-combos-list">
                            ${combosFeaturing.map(c => `
                                <div class="ps-combo-pill-box">
                                    <strong class="ps-combo-pos">${c.pos} (${c.role}):</strong>
                                    <span class="ps-combo-traits">
                                        ${c.traits.map(t => {
                                            const tSlug = slugify(t);
                                            return `<a href="${tSlug}.html" class="ps-combo-trait-link">${t}</a>`;
                                        }).join(' <span class="ps-combo-plus">+</span> ')}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `
        : `
            <div class="ps-tactic-card card-purple">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-purple">Tactical Role</span>
                        <h3 class="ps-tactic-title">${specTactic.title}</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-tactic-text">${specTactic.desc}</div>
                    </div>
                </div>
            </div>
        `;

    const relatedHtml = related.length > 0
        ? `
            <h2 class="ps-detail-section-title">Other ${ps.category} PlayStyles</h2>
            <div class="ps-related-grid">
                ${related.map(r => `
                    <a href="${slugify(r.name)}.html" class="ps-related-card">
                        <img class="ps-related-icon" src="../../assets/${r.imgBase.replace('256', '64')}_0.png" alt="${r.name}">
                        <span class="ps-related-name">${r.name}</span>
                        <span class="badge-tier tier-${r.tier}">${r.tier}-TIER</span>
                    </a>
                `).join('')}
            </div>
        `
        : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Complete analysis and perk breakdown of the ${ps.name} PlayStyle in EA SPORTS FC Mobile.">
    <title>${ps.name} — FC Mobile PlayStyles Guide</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Teko:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
</head>
<body>

    <div class="ps-page-container">

        <!-- Navigation Bar -->
        <nav class="ps-nav-bar" aria-label="Breadcrumb navigation">
            <div class="ps-breadcrumbs">
                <a href="../../index.html">&larr; Main Guide</a>
                <span>/</span>
                <a href="../../index.html#explore">PlayStyles</a>
                <span>/</span>
                <span style="color: #fff; font-weight: 700;">${ps.name}</span>
            </div>
            <div class="ps-nav-pager">
                <a href="${prevSlug}.html" class="ps-pager-btn" title="Previous: ${prevPs.name}">&larr; ${prevPs.name}</a>
                <a href="${nextSlug}.html" class="ps-pager-btn" title="Next: ${nextPs.name}">${nextPs.name} &rarr;</a>
            </div>
        </nav>

        <!-- Hero Card -->
        <div class="ps-hero-card">
            <div class="ps-hero-header">
                <img class="ps-hero-logo" src="${logo64}" alt="${ps.name} Logo">
                <div class="ps-hero-info">
                    <h1 class="ps-hero-title">${ps.name}</h1>
                    <div class="ps-hero-badges">
                        <span class="badge-cat">${ps.category}</span>
                        <span class="badge-tier tier-${ps.tier}">${ps.tier}-TIER</span>
                    </div>
                </div>
            </div>
            <div class="ps-hero-desc">"${ps.desc}"</div>
        </div>

        <!-- Performance Levels Showcase -->
        <h2 class="ps-detail-section-title">Level Progression &amp; Perk Breakdown</h2>
        <div class="ps-levels-stack">

            <!-- Silver (Level 1) -->
            <div class="ps-level-card card-silver">
                <div class="ps-level-icon-wrapper">
                    <img class="ps-level-icon" src="${lvl1Img}" alt="${ps.name} Silver (Lvl 1)">
                </div>
                <div class="ps-level-details">
                    <div class="ps-level-header">
                        <span class="ps-level-tag ps-level-tag-silver">Silver (Level 1)</span>
                    </div>
                    <div class="ps-level-text">${ps.lvl1}</div>
                </div>
            </div>

            <!-- Gold (Level 2) -->
            <div class="ps-level-card card-gold">
                <div class="ps-level-icon-wrapper">
                    <img class="ps-level-icon" src="${lvl2Img}" alt="${ps.name} Gold (Lvl 2)">
                </div>
                <div class="ps-level-details">
                    <div class="ps-level-header">
                        <span class="ps-level-tag ps-level-tag-gold">Gold (Level 2)</span>
                    </div>
                    <div class="ps-level-text">${ps.lvl2}</div>
                </div>
            </div>

            <!-- Violet (Level 3) -->
            ${lvl3Html}

        </div>

        <!-- Tactical Strategy & Analysis -->
        <h2 class="ps-detail-section-title">Tactical Meta &amp; Squad Fit</h2>
        <div class="ps-tactics-stack">

            <!-- Recommended Positions -->
            <div class="ps-tactic-card card-cyan">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-cyan">Squad Deployment</span>
                        <h3 class="ps-tactic-title">Recommended Positions</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-tactic-text">Optimal squad positions for maximum competitive impact on pitch:</div>
                        <div class="ps-position-pills">
                            ${positions.map(p => `<span class="ps-pos-pill">${p}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Touch Control Pro-Tip -->
            <div class="ps-tactic-card card-blue">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-blue">Pro Gameplay Tip</span>
                        <h3 class="ps-tactic-title">Touch Controls Pro-Tip</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-tactic-text">${tip}</div>
                    </div>
                </div>
            </div>

            ${whenActivated ? `
            <!-- When Activated -->
            <div class="ps-tactic-card card-amber">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-amber">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z"></path></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-amber">In-Game Trigger</span>
                        <h3 class="ps-tactic-title">When Activated</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-tactic-text">${whenActivated}</div>
                    </div>
                </div>
            </div>
            ` : ''}

            ${howToPerform ? `
            <!-- How to Perform -->
            <div class="ps-tactic-card card-green">
                <div class="ps-tactic-icon-wrapper">
                    <div class="ps-tactic-icon-circle icon-green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                    </div>
                </div>
                <div class="ps-tactic-details">
                    <div class="ps-tactic-header">
                        <span class="ps-tactic-tag tag-green">Gesture Execution</span>
                        <h3 class="ps-tactic-title">How to Perform</h3>
                    </div>
                    <div class="ps-tactic-content">
                        <div class="ps-perform-instruction">
                            <span class="ps-perform-label">Touch Input:</span>
                            <span class="ps-perform-action">${howToPerform}</span>
                        </div>
                        ${previewImg ? `
                        <div class="ps-preview-showcase">
                            <div class="ps-preview-top-bar">
                                <span class="ps-preview-badge">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    In-Game Touch Controls Visual Guide
                                </span>
                                <span class="ps-preview-hint">Touch gesture &amp; pitch activation diagram</span>
                            </div>
                            <div class="ps-preview-frame">
                                <img class="ps-preview-img" src="../../assets/${previewImg}" alt="${ps.name} How to Perform In-Game Gesture" loading="lazy">
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            ` : ''}

            <!-- Combos Featuring -->
            ${combosHtml}

        </div>

        <!-- Related Playstyles in Category -->
        ${relatedHtml}

        <!-- Bottom Return Action -->
        <div style="text-align: center; margin-top: 3rem;">
            <a href="../../index.html" class="details-back-btn">&larr; Return to Main Tier List &amp; Guide</a>
        </div>

    </div>

    <!-- Back to Top Button -->
    <button class="back-to-top" id="backToTop" aria-label="Back to top" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    </button>

    <script>
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 400) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }, { passive: true });

            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    </script>
</body>
</html>
`;

    const outPath = path.join(playstylesDir, `${slug}.html`);
    fs.writeFileSync(outPath, html, 'utf8');
});

console.log(`Generated ${playstyles.length} dedicated pages in src/playstyles/`);

// 5. Update playstylesData in script.js
const scriptPath = path.join(srcDir, 'script.js');
let scriptCode = fs.readFileSync(scriptPath, 'utf8');

const jsArrayString = JSON.stringify(playstyles.map(p => ({
    name: p.name,
    imgBase: p.imgBase,
    category: p.category,
    tier: p.tier,
    desc: p.desc,
    lvl1: p.lvl1,
    lvl2: p.lvl2,
    lvl3: p.lvl3
})), null, 4);

scriptCode = scriptCode.replace(
    /const playstylesData = \[[\s\S]*?\];/,
    `const playstylesData = ${jsArrayString};`
);

fs.writeFileSync(scriptPath, scriptCode, 'utf8');
console.log('Updated src/script.js with parsed Playstyles.txt data');
