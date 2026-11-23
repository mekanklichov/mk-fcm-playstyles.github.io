/**
 * Shared theme controller for the guide and every PlayStyle detail page.
 * The saved choice wins; otherwise the page follows the operating system.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'fcm-theme';
    const THEME_ATTR = 'data-theme';
    const colorScheme = window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: light)')
        : null;

    function readSavedTheme() {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            return saved === 'light' || saved === 'dark' ? saved : null;
        } catch (error) {
            return null;
        }
    }

    function applyTheme(theme, persist) {
        const nextTheme = theme === 'light' ? 'light' : 'dark';
        const isLight = nextTheme === 'light';

        document.documentElement.setAttribute(THEME_ATTR, nextTheme);
        document.documentElement.style.colorScheme = nextTheme;

        document.querySelectorAll('.theme-toggle-btn').forEach(button => {
            const action = isLight ? 'Switch to dark theme' : 'Switch to light theme';
            button.setAttribute('aria-label', action);
            button.setAttribute('title', action);
            button.setAttribute('data-active-theme', nextTheme);
            const label = button.querySelector('.theme-label');
            if (label) label.textContent = isLight ? 'Dark mode' : 'Light mode';
        });

        if (persist) {
            try {
                window.localStorage.setItem(STORAGE_KEY, nextTheme);
            } catch (error) {
                // The theme still works when storage is unavailable.
            }
        }

        return nextTheme;
    }

    function getTheme() {
        return document.documentElement.getAttribute(THEME_ATTR) || 'dark';
    }

    function toggleTheme() {
        applyTheme(getTheme() === 'light' ? 'dark' : 'light', true);
    }

    // Set the theme in the head so the page paints in the right colors.
    const savedTheme = readSavedTheme();
    applyTheme(savedTheme || (colorScheme && colorScheme.matches ? 'light' : 'dark'), false);

    function bindThemeButtons() {
        applyTheme(getTheme(), false);
        document.querySelectorAll('.theme-toggle-btn').forEach(button => {
            button.addEventListener('click', toggleTheme);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindThemeButtons, { once: true });
    } else {
        bindThemeButtons();
    }

    if (colorScheme) {
        const followSystemTheme = event => {
            if (readSavedTheme()) return;
            applyTheme(event.matches ? 'light' : 'dark', false);
        };

        if (typeof colorScheme.addEventListener === 'function') {
            colorScheme.addEventListener('change', followSystemTheme);
        } else if (typeof colorScheme.addListener === 'function') {
            colorScheme.addListener(followSystemTheme);
        }
    }

    window.fcmTheme = {
        get: getTheme,
        set: theme => applyTheme(theme, true),
        toggle: toggleTheme
    };
})();
