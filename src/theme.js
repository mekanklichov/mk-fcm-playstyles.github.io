/**
 * FC Mobile PlayStyles Guide - Theme Controller (iOS Liquid Glass System)
 * Manages dual light/dark theme with localStorage persistence and system sync.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'fcm-theme';
    const THEME_ATTR = 'data-theme';

    /**
     * Resolves the current theme: localStorage > system preference > default dark
     */
    function getPreferredTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'light' || saved === 'dark') return saved;
        } catch (e) {
            /* ignore storage block in private/file mode */
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    }

    /**
     * Applies theme to document root and updates all toggle buttons
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute(THEME_ATTR, theme);

        const buttons = document.querySelectorAll('.theme-toggle-btn');
        buttons.forEach(btn => {
            const isLight = theme === 'light';
            btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
            btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
            btn.setAttribute('data-active-theme', theme);
        });
    }

    /**
     * Toggles between light and dark mode with animation
     */
    function toggleTheme() {
        const current = document.documentElement.getAttribute(THEME_ATTR) || 'dark';
        const next = current === 'light' ? 'dark' : 'light';

        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}

        applyTheme(next);
    }

    // Apply preferred theme immediately to avoid flash of wrong theme (FOUC)
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    // Setup interactive toggle event handlers once DOM is ready
    function setupToggleButtons() {
        applyTheme(document.documentElement.getAttribute(THEME_ATTR) || initialTheme);

        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            // Remove previous listeners if any
            btn.removeEventListener('click', toggleTheme);
            btn.addEventListener('click', toggleTheme);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupToggleButtons);
    } else {
        setupToggleButtons();
    }

    // Listen for OS system theme changes if user has no saved preference
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            try {
                if (localStorage.getItem(STORAGE_KEY)) return; // user explicitly chose
            } catch (err) {}
            applyTheme(e.matches ? 'light' : 'dark');
        });
    }

    // Expose toggle globally for inline or programmatic use
    window.fcmTheme = {
        get: () => document.documentElement.getAttribute(THEME_ATTR) || 'dark',
        set: applyTheme,
        toggle: toggleTheme
    };
})();
