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
          history.replaceState(null, '', '?' + group + '=' + value);
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
        '<button class="video-modal-close">&times;</button>' +
        '<iframe src="" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>' +
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
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(this.getAttribute('data-video-src'));
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
      hs.addEventListener('mouseenter', function () {
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
   * Mobile menu toggle
   * Uses .menu-wrapper (Voog pattern) and .menu-btn with .open class
   */
  function initMobileNav() {
    document.querySelectorAll('.js-menu-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Toggle the mobile menu-wrapper visibility
        var header = this.closest('header');
        if (header) {
          var menuWrapper = header.querySelector('.menu-wrapper');
          if (menuWrapper) {
            menuWrapper.classList.toggle('hidden');
          }
        }
        // Toggle open state for hamburger animation (also set inline on the button)
        this.classList.toggle('open');
        // Mobile background overlay on landing page
        if (this.hasAttribute('data-mobile-bg')) {
          var navWrapper = this.closest('.menu-expande') || this.closest('[class*="bg-green"]');
          if (navWrapper) {
            navWrapper.classList.toggle('expande');
          }
        }
      });
    });

    // Close menu on outside click (side click handler)
    document.addEventListener('click', function (e) {
      if (e.target.closest('.js-prevent-sideclick')) return;
      document.querySelectorAll('.menu-wrapper:not(.hidden)').forEach(function (menu) {
        menu.classList.add('hidden');
        var btn = document.querySelector('.js-menu-btn.open');
        if (btn) btn.classList.remove('open');
      });
    });
  }

  /**
   * Simple hero slider (replaces Bootstrap carousel / LightSlider)
   */
  function initSlider() {
    var slider = document.getElementById('lightSlider');
    if (!slider) return;

    var slides = slider.querySelectorAll('li');
    if (slides.length === 0) return;

    var current = 0;
    var timer;

    // Create pager
    var pager = document.createElement('div');
    pager.className = 'slider-pager';
    slides.forEach(function (_, i) {
      var btn = document.createElement('button');
      btn.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === 0) btn.className = 'active';
      btn.addEventListener('click', function () {
        goTo(i);
        resetTimer();
      });
      pager.appendChild(btn);
    });
    slider.parentElement.appendChild(pager);

    // Show first slide
    slides[0].classList.add('active');

    function goTo(index) {
      slides[current].classList.remove('active');
      pager.children[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      pager.children[current].classList.add('active');
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    // Auto-advance
    resetTimer();

    // Pause on hover
    slider.parentElement.addEventListener('mouseenter', function () {
      clearInterval(timer);
    });
    slider.parentElement.addEventListener('mouseleave', function () {
      resetTimer();
    });

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goTo((current + 1) % slides.length);
        } else {
          goTo((current - 1 + slides.length) % slides.length);
        }
        resetTimer();
      }
    }, { passive: true });
  }

  /**
   * Horizontal card slider (replaces LightSlider for research/project carousels)
   * Works on any <ul> with the class .card-slider or id #researchSlider / #projectSlider
   */
  function initCardSliders() {
    var sliders = document.querySelectorAll('#researchSlider, #projectSlider');
    sliders.forEach(function (slider) {
      var items = slider.querySelectorAll('li');
      if (items.length === 0) return;

      // Wrap in a container for controls
      var wrapper = document.createElement('div');
      wrapper.className = 'card-slider-wrapper';
      slider.parentNode.insertBefore(wrapper, slider);
      wrapper.appendChild(slider);

      slider.className = (slider.className || '') + ' card-slider';

      // Create prev/next buttons
      var prevBtn = document.createElement('button');
      prevBtn.className = 'card-slider-prev';
      prevBtn.innerHTML = '&#8249;';
      prevBtn.setAttribute('aria-label', 'Previous');
      var nextBtn = document.createElement('button');
      nextBtn.className = 'card-slider-next';
      nextBtn.innerHTML = '&#8250;';
      nextBtn.setAttribute('aria-label', 'Next');
      wrapper.appendChild(prevBtn);
      wrapper.appendChild(nextBtn);

      // Scroll by one item width
      function getItemWidth() {
        var first = items[0];
        var style = getComputedStyle(first);
        return first.offsetWidth + parseInt(style.marginRight || 0);
      }

      prevBtn.addEventListener('click', function () {
        slider.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', function () {
        slider.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
      });

      // Show/hide arrows based on scroll position
      function updateArrows() {
        prevBtn.style.display = slider.scrollLeft <= 0 ? 'none' : '';
        nextBtn.style.display = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 2 ? 'none' : '';
      }
      slider.addEventListener('scroll', updateArrows);
      // Initial state after layout
      setTimeout(updateArrows, 100);
      window.addEventListener('resize', updateArrows);
    });
  }

  /**
   * Back-to-top button
   */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.style.opacity = '1';
        btn.style.bottom = '20px';
      } else {
        btn.style.opacity = '0';
        btn.style.bottom = '50%';
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initFilters();
    initVideoModal();
    initHotspots();
    initMobileNav();
    initSlider();
    initCardSliders();
    initBackToTop();
  });
})();
