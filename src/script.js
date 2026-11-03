const playstylesData = [
    {
        "name": "Finesse Expert",
        "imgBase": "playstyle_256_PLAYSTYLE_POWER_FINESSE",
        "category": "FINISHING",
        "tier": "S",
        "desc": "Player can curl finesse shots past the keeper with great accuracy.",
        "lvl1": "Performs finesse shots with slight faster ball speed, additional curve and improved accuracy.",
        "lvl2": "Performs finesse shots with greater ball speed, additional curve and improved accuracy.",
        "lvl3": "Performs finesse shots much with even greater ball speed, additional curve and improved accuracy."
    },
    {
        "name": "Clinical Finisher",
        "imgBase": "playstyle_256_PLAYSTYLE_CLINICAL_FINISHER",
        "category": "FINISHING",
        "tier": "B",
        "desc": "Player can accurately place the ball in the net from close to mid-range shooting distance.",
        "lvl1": "Increases accuracy and shot speed for regular shots from mid-to close range.",
        "lvl2": "Further increases accuracy and shot speed for regular shots from mid-to close range.",
        "lvl3": "Exceptionally increases accuracy and shot speed for regular shots from mid-to close range."
    },
    {
        "name": "Power Shot",
        "imgBase": "playstyle_256_PLAYSTYLE_POWER_SHOT",
        "category": "FINISHING",
        "tier": "B",
        "desc": "Player can take powerful shots with high precision",
        "lvl1": "Increases accuracy and shot speed for power shots.",
        "lvl2": "Further increases accuracy and shot speed for power shots, while also providing faster kick animation and lower elevation to keep shot on target.",
        "lvl3": "Greatly increases accuracy and shot speed for power shots, while also providing even faster kick animation and lower elevation to keep shot on target."
    },
    {
        "name": "Penalty Expert",
        "imgBase": "playstyle_256_PLAYSTYLE_PENALTY_EXPERT",
        "category": "FINISHING",
        "tier": "D",
        "desc": "Player has exceptional accuracy at penalty kicks.",
        "lvl1": "Increases accuracy and shot speed for penalty kicks.",
        "lvl2": "Further increases accuracy and shot speed for penalty kicks, while also showing a red dot of the kick target after your swipe.",
        "lvl3": "Greatly increases accuracy and shot speed for penalty kicks, while also showing a red dot of the kick target after your swipe."
    },
    {
        "name": "Chip Shot",
        "imgBase": "playstyle_256_PLAYSTYLE_CHIP_MASTER",
        "category": "FINISHING",
        "tier": "D",
        "desc": "Player has exceptional skill at chipping the goalkeeper.",
        "lvl1": "Chip shots have an unique dipping trajectory with increased accuracy and shot speed.",
        "lvl2": "Chip shots have an unique dipping trajectory with further increased accuracy and shot speed.",
        "lvl3": "Chip shots have an unique dipping trajectory with greatly increased accuracy and shot speed."
    },
    {
        "name": "Dead Ball",
        "imgBase": "playstyle_256_PLAYSTYLE_DEAD_BALL",
        "category": "FINISHING",
        "tier": "D",
        "desc": "Player who is known for performing direct free kick shooting with great accuracy.",
        "lvl1": "Increases accuracy and shot speed for free kick shots.",
        "lvl2": "Further increases accuracy and shot speed, plus enhanced trajectory curvature for free kick shots at long range, while also showing a red dot of the kick target after your swipe.",
        "lvl3": "Also applies a new shot type that allows the ball to travel at high speed with sudden dips and unpredictable movement."
    },
    {
        "name": "Trickster",
        "imgBase": "playstyle_256_PLAYSTYLE_TRICKSTER",
        "category": "BALL CONTROL",
        "tier": "S",
        "desc": "Player can more effectively perform skill moves and beat defenders in 1v1 situations.",
        "lvl1": "Performs skill moves with increased speed while keeping the ball close.",
        "lvl2": "Performs skill moves with even more speed while keeping the ball close.",
        "lvl3": "Performs skill moves with much more speed while staying tight on the ball."
    },
    {
        "name": "Rapid",
        "imgBase": "playstyle_256_PLAYSTYLE_SPEED_DRIBBLER",
        "category": "BALL CONTROL",
        "tier": "S",
        "desc": "Player has a more explosive acceleration for sprint dribble and knock-ons.",
        "lvl1": "Faster acceleration when sprint dribbling.",
        "lvl2": "Even faster acceleration when sprint dribbling and knock-ons, with better ball control ability.",
        "lvl3": "Super faster acceleration when sprint dribbling and knock-ons, with even better ball control ability."
    },
    {
        "name": "Tiki Taka",
        "imgBase": "playstyle_256_PLAYSTYLE_TIKI_TAKA",
        "category": "PASSING",
        "tier": "A",
        "desc": "Player is able to perform more accurate and faster ground passes.",
        "lvl1": "Ground passes are faster and highly accurate.",
        "lvl2": "Ground passes & dinked passes are even faster and more accurate.",
        "lvl3": "Ground passes & dinked passes are significantly faster and accurate, with reduced trap error of the receiver."
    },
    {
        "name": "Bullet Pass",
        "imgBase": "playstyle_256_PLAYSTYLE_BULLET_PASS",
        "category": "PASSING",
        "tier": "B",
        "desc": "Player is able to perform more accurate and faster driven ground passes.",
        "lvl1": "Increases accuracy and pass speed, without impacting the trapping difficulty of the receiver.",
        "lvl2": "Greatly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver.",
        "lvl3": "Significantly increases accuracy and pass speed, without impacting the trapping difficulty of the receiver."
    },
    {
        "name": "Whipped Cross",
        "imgBase": "playstyle_256_PLAYSTYLE_WHIPPED_CROSSER",
        "category": "PASSING",
        "tier": "C",
        "desc": "Player can perform high-speed whipped crosses into the box.",
        "lvl1": "Lob crosses will have increased accuracy and curve. Plus reduced error when taking corner kicks.",
        "lvl2": "Lob and ground crosses are faster, with further increased accuracy and curve. Plus reduced error when taking corner kicks.",
        "lvl3": "All crosses are significanlty faster, with greatly increased accuracy and curve. Also increases corner kick accuracy. Plus reduced error when taking corner kicks."
    },
    {
        "name": "Incisive Through Pass",
        "imgBase": "playstyle_256_PLAYSTYLE_INCISIVE_THROUGH",
        "category": "PASSING",
        "tier": "B",
        "desc": "Player who is known for making defense-splitting through passes for a teammate to run onto.",
        "lvl1": "Ground Through Passes are more accurate, and travel at a higher speed.",
        "lvl2": "Ground Through Passes and Dinked Ground Through Passes are even more accurate, and travel at a higher speed. Plus reduced trap error of the receiver.",
        "lvl3": "Ground Through Passes and Dinked Ground Through Passes are significantly more accurate, with more impact on user control, and travel at a higher speed. Plus reduced trap error of the receiver."
    },
    {
        "name": "Driven Lob Through",
        "imgBase": "playstyle_256_PLAYSTYLE_DRIVEN_LOB_THROUGH",
        "category": "PASSING",
        "tier": "B",
        "desc": "Player who is known for performing accurate lobbed through passes to teammates.",
        "lvl1": "Lob through passes are more accurate, also travel at a slightly higher speed.",
        "lvl2": "Lob through passes are even more accurate, also travel at a higher speed. Plus reduced trap error of the receiver.",
        "lvl3": "Lob through passes are much more accurate, also travel at an even higher speed. Plus reduced trap error of the receiver."
    },
    {
        "name": "Anticipate",
        "imgBase": "playstyle_256_PLAYSTYLE_STAND_TACKLE_MASTER",
        "category": "DEFENDING",
        "tier": "S",
        "desc": "Player has a higher stand tackle proficiency and success rate.",
        "lvl1": "Improved standing tackle range, speed and the ability to stop the ball directly at their feet.",
        "lvl2": "Much improved standing tackle range, speed and the ability to stop the ball directly at their feet.",
        "lvl3": "Also increases chance of triggering opponent stumble or fall."
    },
    {
        "name": "Guardian",
        "imgBase": "playstyle_256_PLAYSTYLE_HARD_TACKLE_MASTER",
        "category": "DEFENDING",
        "tier": "D",
        "desc": "Player has a higher hard tackle proficiency and success rate.",
        "lvl1": "Improved hard tackle range, speed and the ability to stop the ball directly at their feet.",
        "lvl2": "Much improved hard tackle range, speed and the ability to stop the ball directly at their feet.",
        "lvl3": "Also increases the chance of triggering opponent stumble or fall."
    },
    {
        "name": "Slide Tackle",
        "imgBase": "playstyle_256_PLAYSTYLE_SLIDE_TACKLE",
        "category": "DEFENDING",
        "tier": "C",
        "desc": "Player who is known for often performing slide tackles.",
        "lvl1": "Improved slide tackle coverage, plus quicker execution and faster recovery.",
        "lvl2": "Greatly improved slide tackle coverage, plus even quicker execution and faster recovery. Also grants better ball control when performing a slide tackle.",
        "lvl3": "Significantly improved slide tackle coverage, plus much quicker execution and faster recovery. Also grants better ball control when performing a slide tackle."
    },
    {
        "name": "Accelerator",
        "imgBase": "playstyle_256_PLAYSTYLE_ACCELERATOR",
        "category": "PHYSICAL",
        "tier": "A",
        "desc": "Player is able to have a quick burst of speed when accelerating without the ball .",
        "lvl1": "Accelerates faster without the ball.",
        "lvl2": "Accelerates even faster without the ball.",
        "lvl3": "Accelerates exceptionally fast without the ball."
    },
    {
        "name": "Relentless",
        "imgBase": "playstyle_256_PLAYSTYLE_RELENTLESS_STAMINA",
        "category": "PHYSICAL",
        "tier": "B",
        "desc": "Player has great stamina and is able to make many runs without getting tired easily.",
        "lvl1": "Reduces fatigue loss during play.",
        "lvl2": "Reduces fatigue loss during play and increases stamina recovery during halftime.",
        "lvl3": "Greatly reduces fatigue loss during play and greatly increases stamina recovery during halftime."
    },
    {
        "name": "Bruiser",
        "imgBase": "playstyle_256_PLAYSTYLE_INTIMIDATOR",
        "category": "PHYSICAL",
        "tier": "A",
        "desc": "Player has greater strength during physical battles, both at protecting the ball while dribbling or contesting the opponent during a jostle.",
        "lvl1": "Increases strength during physical battles.",
        "lvl2": "Greatly increases strength during physical battles.",
        "lvl3": "Significantly increases strength during physical battles."
    },
    {
        "name": "Precision Header",
        "imgBase": "playstyle_256_PLAYSTYLE_AERIAL_MASTER",
        "category": "PHYSICAL",
        "tier": "C",
        "desc": "Player has exceptional performance when heading the ball.",
        "lvl1": "Header shot, passes and clearances are slightly faster and more accurate.",
        "lvl2": "Header shots, passes and clearances are faster and even more accurate.",
        "lvl3": "Header shots, passes and clearances are exceptionally fast and very accurate."
    },
    {
        "name": "Deflector",
        "imgBase": "playstyle_256_PLAYSTYLE_DEFLECTOR",
        "category": "GOALKEEPER",
        "tier": "A",
        "desc": "Goalkeeper has the ability to deflect the ball far, wide and into safer areas.",
        "lvl1": "Performs deflection saves into safer areas with increased ball speed.",
        "lvl2": "Performs deflection saves into safer areas with even faster ball speed.",
        "lvl3": "Performs deflection saves into safer areas or towards free teammates with even greater ball speed."
    },
    {
        "name": "Rush Out",
        "imgBase": "playstyle_256_PLAYSTYLE_SUPER_RUSH",
        "category": "GOALKEEPER",
        "tier": "B",
        "desc": "Goalkeeper has the ability to quickly rush out of goal to pressure the opponent.",
        "lvl1": "GKs will have increased speed during rush.",
        "lvl2": "GKs will have more increased speed and better auto tackle ability during rush.",
        "lvl3": "GKs will have greatly increased speed and better auto tackle ability during rush."
    }
];

        var activeCategory = 'ALL';
        var activeTier = 'ALL';
        var searchQuery = '';

        // Helper to normalize strings for robust accent-insensitive and case-insensitive matching
        function normalizeText(str) {
            if (!str) return '';
            return str
                .toString()
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .trim();
        }

        function getPlaystyleSlug(name) {
            if (!name) return '';
            return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }

        const isInsideSrc = typeof window !== 'undefined' && window.location.pathname.replace(/\\/g, '/').includes('/src/');
        const assetPrefix = isInsideSrc ? '../assets/' : 'assets/';
        const playstylesPrefix = isInsideSrc ? 'playstyles/' : 'src/playstyles/';

        // Lookup tier for a playstyle name (case-insensitive)
        function getTierForPlaystyle(name) {
            const target = normalizeText(name);
            const ps = playstylesData.find(p => normalizeText(p.name) === target);
            return ps ? ps.tier : null;
        }

        // Update the result count display
        function updateResultCount(count) {
            const el = document.getElementById('resultCount');
            if (!el) return;
            if (count === playstylesData.length) {
                el.textContent = `Showing all ${count} playstyles`;
            } else {
                el.textContent = `Showing ${count} of ${playstylesData.length} playstyles`;
            }
        }

        // Show/hide the "Clear All Filters" button
        function updateClearAllVisibility() {
            const btn = document.getElementById('clearAllFilters');
            if (!btn) return;
            if (activeCategory === 'ALL' && activeTier === 'ALL' && searchQuery === '') {
                btn.classList.remove('visible');
            } else {
                btn.classList.add('visible');
            }
        }

        function renderCards() {
            const grid = document.getElementById('playstylesGrid');
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

            // Toggle search clear button visibility
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
                card.className = 'ps-card animate-on-scroll visible';
                card.setAttribute('data-ps-name', ps.name);
                card.setAttribute('role', 'link');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', `View ${ps.name} detailed perk breakdown`);
                card.style.animation = 'cardEntrance 0.35s ease-out both';
                card.style.animationDelay = `${(index % 8) * 35}ms`;

                const tierDisplay = ps.tier === 'SPECIAL' ? 'SPECIAL' : `${ps.tier}-TIER`;
                const logo64 = `${assetPrefix}${ps.imgBase.replace('256', '64')}_0.png`;

                card.innerHTML = `
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
                    <div class="ps-card-action">
                        <span class="view-details-btn">Details &rarr;</span>
                    </div>
                `;

                const targetUrl = `${playstylesPrefix}${getPlaystyleSlug(ps.name)}.html`;
                card.addEventListener('click', () => {
                    window.location.href = targetUrl;
                });
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = targetUrl;
                    }
                });

                grid.appendChild(card);
            });
        }

        // Everything else initializes after DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            if (!document.getElementById('playstylesGrid')) return;

            // ── Intersection Observer for scroll animations ──
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
            const staticAnimatable = document.querySelectorAll('.tier-row, .combo-card, .mech-card, .overview-box, .controls-panel');
            staticAnimatable.forEach((el, index) => {
                el.classList.add('animate-on-scroll');
                el.style.transitionDelay = `${(index % 5) * 80}ms`;
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

            // ── Initial render (observer is ready now) ──
            renderCards();

            // Observe the initial dynamic cards too
            document.querySelectorAll('.ps-card').forEach(card => {
                window.scrollObserver.observe(card);
            });

            // ── Filter handlers ──
            document.getElementById('categoryFilters').addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-filter')) {
                    document.querySelectorAll('#categoryFilters .btn-filter').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    activeCategory = e.target.getAttribute('data-cat');
                    renderCards();
                }
            });

            document.getElementById('tierFilters').addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-filter')) {
                    document.querySelectorAll('#tierFilters .btn-filter').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    activeTier = e.target.getAttribute('data-tier');
                    renderCards();
                }
            });

            document.getElementById('searchInput').addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderCards();
            });

            // ── Search clear button ──
            const searchClear = document.getElementById('searchClear');
            if (searchClear) {
                searchClear.addEventListener('click', () => {
                    const input = document.getElementById('searchInput');
                    input.value = '';
                    searchQuery = '';
                    renderCards();
                    input.focus();
                });
            }

            // ── Clear All Filters ──
            const clearAllBtn = document.getElementById('clearAllFilters');
            if (clearAllBtn) {
                clearAllBtn.addEventListener('click', () => {
                    // Reset category
                    activeCategory = 'ALL';
                    document.querySelectorAll('#categoryFilters .btn-filter').forEach(btn => {
                        btn.classList.toggle('active', btn.getAttribute('data-cat') === 'ALL');
                    });
                    // Reset tier
                    activeTier = 'ALL';
                    document.querySelectorAll('#tierFilters .btn-filter').forEach(btn => {
                        btn.classList.toggle('active', btn.getAttribute('data-tier') === 'ALL');
                    });
                    // Reset search
                    const input = document.getElementById('searchInput');
                    input.value = '';
                    searchQuery = '';
                    renderCards();
                });
            }

            // ── Sticky Nav — show/hide on scroll ──
            const stickyNav = document.getElementById('stickyNav');
            const headerEl = document.querySelector('header');
            let lastScrollY = 0;

            if (stickyNav && headerEl) {
                window.addEventListener('scroll', () => {
                    const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > headerBottom) {
                        stickyNav.classList.add('visible');
                    } else {
                        stickyNav.classList.remove('visible');
                    }

                    lastScrollY = currentScrollY;
                }, { passive: true });
            }

            // ── Active nav link highlighting based on scroll position ──
            const sections = document.querySelectorAll('#overview, #tier-list, #explore, #combos, #mechanics');
            const navLinks = document.querySelectorAll('.nav-link');

            if (sections.length && navLinks.length) {
                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const id = entry.target.id;
                            navLinks.forEach(link => {
                                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                            });
                        }
                    });
                }, { rootMargin: '-20% 0px -60% 0px' });

                sections.forEach(section => sectionObserver.observe(section));
            }

            // ── Back to Top button ──
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

            // ── Reusable navigation to a playstyle card ──
            function scrollToCard(card) {
                card.classList.add('visible');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });

                setTimeout(() => {
                    card.classList.add('highlighted');
                    setTimeout(() => {
                        card.classList.remove('highlighted');
                    }, 1500);
                }, 400);
            }

            function navigateToPlaystyle(playstyleName) {
                // Reset filters to show all cards so the target card is always rendered
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

                renderCards();

                requestAnimationFrame(() => {
                    const targetNorm = normalizeText(playstyleName);
                    const allCards = document.querySelectorAll('.ps-card[data-ps-name]');
                    for (const card of allCards) {
                        if (normalizeText(card.getAttribute('data-ps-name')) === targetNorm) {
                            scrollToCard(card);
                            return;
                        }
                    }
                });
            }

            // ── Tier pill click → scroll to card ──
            const tierPills = document.querySelectorAll('.tier-pill[data-playstyle]');
            tierPills.forEach(pill => {
                const playstyleName = pill.getAttribute('data-playstyle');
                pill.addEventListener('click', () => navigateToPlaystyle(playstyleName));
                pill.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigateToPlaystyle(playstyleName);
                    }
                });
            });

            // ── Combo item: basic logo + tier colored name + click to details ──
            const comboItems = document.querySelectorAll('.combo-item[data-ps]');
            comboItems.forEach(item => {
                const psName = item.getAttribute('data-ps');
                const ps = playstylesData.find(p => normalizeText(p.name) === normalizeText(psName));
                const tier = ps ? ps.tier : 'S';
                const icon64 = ps ? `${assetPrefix}${ps.imgBase.replace('256', '64')}_0.png` : '';

                item.setAttribute('data-tier', tier);
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'link');
                item.setAttribute('aria-label', `View ${psName} details on playstyles page`);

                item.innerHTML = `
                    <img class="combo-icon" src="${icon64}" alt="${psName}">
                    <span class="combo-name tier-${tier}">${psName}</span>
                `;

                const targetUrl = `${playstylesPrefix}${getPlaystyleSlug(psName)}.html`;
                item.addEventListener('click', () => {
                    window.location.href = targetUrl;
                });
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = targetUrl;
                    }
                });
            });
        });