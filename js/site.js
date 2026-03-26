/**
 * ADL Site JavaScript
 * Client-side filtering and interactions
 */
(function () {
  'use strict';

  /**
   * Generic filter controller.
   * Reads data-filter-group on the container, manages .menu-link active state,
   * and shows/hides .filter-item elements by matching data-filter-value.
   *
   * Usage:
   *   <div class="menu-tags" data-filter-group="year" data-filter-target="#items">
   *     <a class="menu-link active" data-filter-value="all">All</a>
   *     <a class="menu-link" data-filter-value="2025">2025</a>
   *   </div>
   *   <div id="items">
   *     <div class="filter-item" data-filter-year="2025">...</div>
   *   </div>
   */
  function initFilters() {
    document.querySelectorAll('.menu-tags[data-filter-group]').forEach(function (tagBar) {
      var group = tagBar.getAttribute('data-filter-group');
      var targetSel = tagBar.getAttribute('data-filter-target');
      var container = targetSel ? document.querySelector(targetSel) : tagBar.parentElement;
      if (!container) return;

      tagBar.addEventListener('click', function (e) {
        var link = e.target.closest('.menu-link');
        if (!link) return;
        e.preventDefault();

        var value = link.getAttribute('data-filter-value');

        // Update active state
        tagBar.querySelectorAll('.menu-link').forEach(function (l) {
          l.classList.remove('active');
        });
        link.classList.add('active');

        // Filter items
        container.querySelectorAll('.filter-item').forEach(function (item) {
          if (value === 'all') {
            item.style.display = '';
          } else {
            var itemValue = item.getAttribute('data-filter-' + group);
            // Support comma-separated values
            var values = itemValue ? itemValue.split(',') : [];
            item.style.display = values.indexOf(value) !== -1 ? '' : 'none';
          }
        });

        // Update URL without reload
        if (value === 'all') {
          history.replaceState(null, '', window.location.pathname);
        } else {
          history.replaceState(null, '', '?' + encodeURIComponent(group) + '=' + encodeURIComponent(value));
        }
      });

      // Check URL params on load
      var params = new URLSearchParams(window.location.search);
      var initialValue = params.get(group);
      if (initialValue) {
        var targetLink = tagBar.querySelector('[data-filter-value="' + initialValue + '"]');
        if (targetLink) {
          targetLink.click();
        }
      }
    });
  }

  /**
   * Video modal controller.
   * Supports [data-video-src] on any element (.embedded-video-card).
   *
   * If no #video-modal exists on the page but video triggers are found,
   * a modal is created automatically.
   */
  function initVideoModal() {
    var triggers = document.querySelectorAll('[data-video-src]');
    if (triggers.length === 0) return;

    var overlay = document.getElementById('video-modal');

    // Auto-create modal if not present in page markup
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'video-modal';
      overlay.className = 'video-modal-overlay';
      overlay.innerHTML =
        '<div class="video-modal-inner">' +
        '<button class="video-modal-close" aria-label="Close video">&times;</button>' +
        '<iframe src="" allowfullscreen allow="autoplay; encrypted-media"></iframe>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    var iframe = overlay.querySelector('iframe');
    if (!iframe) return;

    function openModal(src) {
      // Ensure src has autoplay param
      var sep = src.indexOf('?') === -1 ? '?' : '&';
      iframe.src = src + sep + 'autoplay=1';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('active');
      iframe.src = '';
      document.body.style.overflow = '';
    }

    // Attach open handler to all triggers
    triggers.forEach(function (trigger) {
      // Ensure keyboard focusability
      if (!trigger.getAttribute('tabindex') && trigger.tagName !== 'A' && trigger.tagName !== 'BUTTON') {
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'button');
      }
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(this.getAttribute('data-video-src'));
      });
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(this.getAttribute('data-video-src'));
        }
      });
    });

    // Close handlers
    overlay.querySelector('.video-modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
  }

  /**
   * Vehicle hotspot interactivity
   */
  function initHotspots() {
    document.querySelectorAll('.image-hotspot').forEach(function (hs) {
      hs.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        var target = document.getElementById(targetId);
        if (!target) return;

        // Hide all component cards in the same parent
        var cardsContainer = document.getElementById('cards');
        if (cardsContainer) {
          cardsContainer.querySelectorAll('.component-card').forEach(function (card) {
            card.style.display = 'none';
          });
        }

        // Show target
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  /**
   * Mobile navbar background toggle
   */
  function initMobileNav() {
    document.querySelectorAll('.navbar-toggler[data-mobile-bg]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var header = this.closest('header');
        if (header) {
          header.classList.toggle('navbar-mobile-background');
        }
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initFilters();
    initVideoModal();
    initHotspots();
    initMobileNav();
  });
})();
