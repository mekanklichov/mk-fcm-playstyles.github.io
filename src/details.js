// ============================================================================
// FC Mobile Playstyles - Full Detailed Breakdown Controller
// ============================================================================

// Recommended squad positions mapping for each playstyle
const recommendedPositions = {
    "Finesse Expert": ["ST", "LW / RW", "CAM"],
    "Trickster": ["ST", "LW / RW"],
    "Rapid": ["LW / RW", "ST", "LM / RM"],
    "Clinical Finisher": ["ST"],
    "Power Shot": ["ST", "CAM"],
    "Penalty Expert": ["Penalty Taker"],
    "Chip Shot": ["ST", "LW / RW"],
    "Dead Ball": ["Free Kick Taker"],
    "Tiki Taka": ["CM", "CAM"],
    "Bullet Pass": ["CM", "CDM"],
    "Whipped Cross": ["LM / RM", "LB / RB", "Corner Taker"],
    "Incisive Through Pass": ["CAM"],
    "Driven Lob Through": ["CAM", "CM"],
    "Anticipate": ["CB", "CDM", "LB / RB"],
    "Guardian": ["CB", "CDM"],
    "Slide Tackle": ["CB", "LB / RB"],
    "Accelerator": ["LM / RM", "LB / RB"],
    "Relentless": ["CM", "CDM", "LB / RB"],
    "Bruiser": ["CB", "CDM", "ST"],
    "Precision Header": ["CB", "ST"],
    "Deflector": ["GK"],
    "Rush Out": ["GK"]
};

// Reuse globals from script.js if already declared; otherwise define them.
// Using var to avoid 'let' re-declaration SyntaxError when both scripts load.
if (typeof activeCategory === 'undefined') var activeCategory = 'ALL';
if (typeof activeTier === 'undefined') var activeTier = 'ALL';
if (typeof searchQuery === 'undefined') var searchQuery = '';

if (typeof normalizeText === 'undefined') {
    var normalizeText = function(str) {
        if (!str) return '';
        return str
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    };
}

function updateResultCount(count) {
    const el = document.getElementById('resultCount');
    if (!el) return;
    if (count === playstylesData.length) {
        el.textContent = `Showing all ${count} playstyles in full detail`;
    } else {
        el.textContent = `Showing ${count} of ${playstylesData.length} playstyles`;
    }
}

function updateClearAllVisibility() {
    const btn = document.getElementById('clearAllFilters');
    if (!btn) return;
    if (activeCategory === 'ALL' && activeTier === 'ALL' && searchQuery === '') {
        btn.classList.remove('visible');
    } else {
        btn.classList.add('visible');
    }
}

function renderDetailedCards() {
    const grid = document.getElementById('detailedGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const normQuery = normalizeText(searchQuery);

    const filtered = playstylesData.filter(ps => {
        const matchesCat = activeCategory === 'ALL' || ps.category === activeCategory;
        const matchesTier = activeTier === 'ALL' || ps.tier === activeTier;

        const matchesSearch = !normQuery ||
                              normalizeText(ps.name).includes(normQuery) ||
                              normalizeText(ps.desc).includes(normQuery) ||
                              normalizeText(ps.lvl1).includes(normQuery) ||
                              normalizeText(ps.lvl2).includes(normQuery) ||
                              (ps.lvl3 && normalizeText(ps.lvl3).includes(normQuery)) ||
                              normalizeText(ps.category).includes(normQuery);

        return matchesCat && matchesTier && matchesSearch;
    });

    updateResultCount(filtered.length);
    updateClearAllVisibility();

    const clearBtn = document.getElementById('searchClear');
    if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'flex' : 'none';
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No Playstyles Found</h3>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }

    filtered.forEach((ps, index) => {
        const card = document.createElement('div');
        card.className = 'ps-card ps-card-detailed animate-on-scroll visible';
        card.setAttribute('data-ps-name', ps.name);
        card.id = `ps-${normalizeText(ps.name).replace(/\s+/g, '-')}`;
        card.style.animation = 'cardEntrance 0.35s ease-out both';
        card.style.animationDelay = `${(index % 8) * 40}ms`;

        const tierDisplay = `${ps.tier}-TIER`;
        const logo64 = `../assets/${ps.imgBase.replace('256', '64')}_0.png`;

        const lvl3Html = ps.lvl3
            ? `
                <div class="lvl-item">
                    <img class="lvl-icon" src="../assets/${ps.imgBase}_3.png" alt="${ps.name} Violet (Lvl 3)">
                    <div class="lvl-content">
                        <div><span class="lvl-tag lvl-tag-violet">Violet (Lvl 3)</span></div>
                        <span>${ps.lvl3}</span>
                    </div>
                </div>
            `
            : '';

        const recPositions = recommendedPositions[ps.name] || [];
        const recHtml = recPositions.length > 0
            ? `
                <div class="ps-recommended-badge">
                    <strong>Recommended Positions:</strong> ${recPositions.join(', ')}
                </div>
            `
            : '';

        card.innerHTML = `
            <div>
                <div class="ps-card-top">
                    <img class="ps-logo-64" src="${logo64}" alt="${ps.name} Logo">
                    <div class="ps-header-info">
                        <div class="ps-name">${ps.name}</div>
                        <div class="ps-badges">
                            <span class="badge-cat">${ps.category}</span>
                            <span class="badge-tier tier-${ps.tier}">${tierDisplay}</span>
                        </div>
                    </div>
                </div>
                <div class="ps-desc">"${ps.desc}"</div>
            </div>

            <div class="ps-levels">
                <div class="lvl-item">
                    <img class="lvl-icon" src="../assets/${ps.imgBase}_1.png" alt="${ps.name} Silver (Lvl 1)">
                    <div class="lvl-content">
                        <div><span class="lvl-tag lvl-tag-silver">Silver (Lvl 1)</span></div>
                        <span>${ps.lvl1}</span>
                    </div>
                </div>
                <div class="lvl-item">
                    <img class="lvl-icon" src="../assets/${ps.imgBase}_2.png" alt="${ps.name} Gold (Lvl 2)">
                    <div class="lvl-content">
                        <div><span class="lvl-tag lvl-tag-gold">Gold (Lvl 2)</span></div>
                        <span>${ps.lvl2}</span>
                    </div>
                </div>
                ${lvl3Html}
            </div>

            ${recHtml}
            <div style="margin-top: 1rem; text-align: right;">
                <a href="playstyles/${ps.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.html" class="view-details-btn" style="text-decoration: none;">Dedicated Page &rarr;</a>
            </div>
        `;

        grid.appendChild(card);

        if (window.scrollObserver) {
            window.scrollObserver.observe(card);
        }
    });
}

function scrollToTargetPlaystyle(targetName) {
    if (!targetName) return;
    const targetNorm = normalizeText(targetName);

    // Reset filters to ALL so the target is rendered
    activeCategory = 'ALL';
    activeTier = 'ALL';
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('#categoryFilters .btn-filter').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === 'ALL');
    });
    document.querySelectorAll('#tierFilters .btn-filter').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tier') === 'ALL');
    });

    renderDetailedCards();

    requestAnimationFrame(() => {
        setTimeout(() => {
            const allCards = document.querySelectorAll('.ps-card[data-ps-name]');
            for (const card of allCards) {
                if (normalizeText(card.getAttribute('data-ps-name')) === targetNorm) {
                    card.classList.add('visible');
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('highlighted');
                    setTimeout(() => {
                        card.classList.remove('highlighted');
                    }, 2000);
                    return;
                }
            }
        }, 150);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Scroll animation observer
    const observerOptions = {
        root: null,
        rootMargin: '250px 0px 250px 0px',
        threshold: 0.01
    };

    window.scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe static elements
    document.querySelectorAll('.overview-box, .controls-panel').forEach(el => {
        el.classList.add('animate-on-scroll');
        window.scrollObserver.observe(el);
    });

    // Fallback safety check: reveal any elements that should be visible
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 500) {
                el.classList.add('visible');
            }
        });
    }, 300);

    // Initial render
    renderDetailedCards();

    // Check URL params or hash for target playstyle
    const urlParams = new URLSearchParams(window.location.search);
    const targetPsParam = urlParams.get('ps');
    const hash = window.location.hash ? decodeURIComponent(window.location.hash.substring(1).replace(/-/g, ' ')) : null;
    const initialTarget = targetPsParam || hash;

    if (initialTarget) {
        scrollToTargetPlaystyle(initialTarget);
    }

    // Filter handlers
    document.getElementById('categoryFilters').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-filter')) {
            document.querySelectorAll('#categoryFilters .btn-filter').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-cat');
            renderDetailedCards();
        }
    });

    document.getElementById('tierFilters').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-filter')) {
            document.querySelectorAll('#tierFilters .btn-filter').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeTier = e.target.getAttribute('data-tier');
            renderDetailedCards();
        }
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderDetailedCards();
    });

    const searchClear = document.getElementById('searchClear');
    const searchInput = document.getElementById('searchInput');

    if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            renderDetailedCards();
            searchInput.focus();
        });
    }

    // Keyboard shortcut: '/' to focus search, 'Escape' to clear
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        } else if (e.key === 'Escape' && document.activeElement === searchInput) {
            if (searchInput.value) {
                searchInput.value = '';
                searchQuery = '';
                renderDetailedCards();
            }
            searchInput.blur();
        }
    });

    const clearAllBtn = document.getElementById('clearAllFilters');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            activeCategory = 'ALL';
            document.querySelectorAll('#categoryFilters .btn-filter').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-cat') === 'ALL');
            });
            activeTier = 'ALL';
            document.querySelectorAll('#tierFilters .btn-filter').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-tier') === 'ALL');
            });
            const input = document.getElementById('searchInput');
            input.value = '';
            searchQuery = '';
            renderDetailedCards();
        });
    }

    // Sticky Nav visibility
    const stickyNav = document.getElementById('stickyNav');
    const headerEl = document.querySelector('header');
    if (stickyNav && headerEl) {
        window.addEventListener('scroll', () => {
            const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;
            if (window.scrollY > headerBottom) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        }, { passive: true });
    }

    // Back to Top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
