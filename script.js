// Modern Portfolio JavaScript - Clean and Modular

class PortfolioApp {
  constructor() {
    this.currentTheme = localStorage.getItem("gradient-theme") || "ocean";
    this.init();
  }

  init() {
    this.setupThemeSelector();
    this.setupThemeToggle();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupFormValidation();
    this.setupAnimations();
    this.setupMobileMenu();
    this.applyTheme(this.currentTheme);
  }

  // Theme Selector Management
  setupThemeSelector() {
    const themeSelector = document.getElementById("theme-selector");
    const themeDropdown = document.getElementById("theme-dropdown");
    const themeOptions = document.querySelectorAll(".theme-option");

    // Toggle dropdown
    themeSelector.addEventListener("click", (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !themeSelector.contains(e.target) &&
        !themeDropdown.contains(e.target)
      ) {
        themeDropdown.classList.add("hidden");
      }
    });

    // Theme selection
    themeOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        const selectedTheme = option.getAttribute("data-theme");
        this.changeTheme(selectedTheme);
        themeDropdown.classList.add("hidden");
      });
    });
  }

  changeTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem("gradient-theme", theme);
    this.applyTheme(theme);

    // Add smooth transition effect
    document.body.style.transition = "all 0.5s ease";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 500);
  }

  applyTheme(theme) {
    const root = document.documentElement;
    const themeStyles = document.getElementById("theme-styles");

    // Remove existing theme classes
    document.body.classList.remove(
      "theme-ocean",
      "theme-sunset",
      "theme-forest"
    );

    // Apply new theme
    document.body.classList.add(`theme-${theme}`);

    let cssVars = "";
    let additionalStyles = "";

    switch (theme) {
      case "ocean":
        cssVars = `
                    --primary: #0ea5e9;
                    --secondary: #06b6d4;
                    --accent: #3b82f6;
                    --primary-rgb: 14, 165, 233;
                    --secondary-rgb: 6, 182, 212;
                    --accent-rgb: 59, 130, 246;
                `;
        additionalStyles = `
                    .hero-gradient { background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 75%, #0ea5e9 100%); }
                    .dark .hero-gradient { background: linear-gradient(135deg, #0f0f23 0%, #1e1b4b 25%, #1e3a8a 50%, #1d4ed8 75%, #2563eb 100%); }
                    .gradient-text { background: linear-gradient(45deg, #0ea5e9, #06b6d4, #3b82f6); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .gradient-text-animated { background: linear-gradient(45deg, #0ea5e9, #06b6d4, #3b82f6, #0ea5e9); background-size: 300% 300%; background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .hover-gradient-text:hover { background: linear-gradient(45deg, #0ea5e9, #06b6d4); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .nav-link.active { background: linear-gradient(45deg, #0ea5e9, #06b6d4); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .cta-button { background: linear-gradient(45deg, #0ea5e9, #06b6d4); box-shadow: 0 0 20px rgba(14, 165, 233, 0.5); }
                    .cta-button:hover { box-shadow: 0 0 30px rgba(14, 165, 233, 0.8), 0 0 40px rgba(6, 182, 212, 0.3); }
                    .secondary-button { border-color: #06b6d4; color: #06b6d4; }
                    .secondary-button:hover { background: #06b6d4; }
                    .scroll-indicator { color: #0ea5e9; }
                    .floating-orb-1 { background: #8b5cf6; }
                    .floating-orb-2 { background: #0ea5e9; }
                    .floating-orb-3 { background: #06b6d4; }
                    .floating-orb { position: absolute; width: 20rem; height: 20rem; border-radius: 50%; mix-blend-mode: multiply; filter: blur(40px); opacity: 0.2; }
                    .floating-orb-1 { top: -10rem; right: -10rem; }
                    .floating-orb-2 { bottom: -10rem; left: -10rem; }
                    .floating-orb-3 { top: 10rem; left: 10rem; }
                    .timeline-line { background: linear-gradient(to bottom, #0ea5e9, #06b6d4, #3b82f6); }
                    .timeline-dot-current { background: #3b82f6; }
                    .timeline-dot-past { background: #06b6d4; }
                    .timeline-dot-start { background: #0ea5e9; }
                    .timeline-date { color: #0ea5e9; }
                    .project-card-bg { background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.2)); }
                    .project-card-bg-alt { background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2)); }
                    .project-card-bg-tertiary { background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(14, 165, 233, 0.2)); }
                    .project-icon { color: #0ea5e9; }
                    .project-link { color: #0ea5e9; }
                    .project-link:hover { color: rgba(14, 165, 233, 0.8); }
                    .skill-tag-primary { background: rgba(14, 165, 233, 0.2); color: #0ea5e9; }
                    .skill-tag-secondary { background: rgba(6, 182, 212, 0.2); color: #06b6d4; }
                    .skill-tag-accent { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
                    .skill-icon { background: linear-gradient(45deg, #0ea5e9, #06b6d4); }
                    .skill-progress { background: linear-gradient(45deg, #0ea5e9, #06b6d4); }
                    .contact-icon { background: rgba(14, 165, 233, 0.2); }
                    .contact-icon-color { color: #0ea5e9; }
                    .social-link { background: rgba(14, 165, 233, 0.2); color: #0ea5e9; }
                    .social-link:hover { background: #0ea5e9; color: white; }
                    .form-input:focus { ring-color: #0ea5e9; }
                    .submit-button { background: linear-gradient(45deg, #0ea5e9, #06b6d4); box-shadow: 0 0 20px rgba(14, 165, 233, 0.5); }
                    .submit-button:hover { box-shadow: 0 0 30px rgba(14, 165, 233, 0.8), 0 0 40px rgba(6, 182, 212, 0.3); }
                `;
        break;

      case "sunset":
        cssVars = `
                    --primary: #f97316;
                    --secondary: #ec4899;
                    --accent: #8b5cf6;
                    --primary-rgb: 249, 115, 22;
                    --secondary-rgb: 236, 72, 153;
                    --accent-rgb: 139, 92, 246;
                `;
        additionalStyles = `
                    .hero-gradient { background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 25%, #fdba74 50%, #fb923c 75%, #f97316 100%); }
                    .dark .hero-gradient { background: linear-gradient(135deg, #0f0f23 0%, #451a03 25%, #7c2d12 50%, #dc2626 75%, #f97316 100%); }
                    .gradient-text { background: linear-gradient(45deg, #f97316, #ec4899, #8b5cf6); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .gradient-text-animated { background: linear-gradient(45deg, #f97316, #ec4899, #8b5cf6, #f97316); background-size: 300% 300%; background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .hover-gradient-text:hover { background: linear-gradient(45deg, #f97316, #ec4899); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .nav-link.active { background: linear-gradient(45deg, #f97316, #ec4899); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .cta-button { background: linear-gradient(45deg, #f97316, #ec4899); box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
                    .cta-button:hover { box-shadow: 0 0 30px rgba(249, 115, 22, 0.8), 0 0 40px rgba(236, 72, 153, 0.3); }
                    .secondary-button { border-color: #ec4899; color: #ec4899; }
                    .secondary-button:hover { background: #ec4899; }
                    .scroll-indicator { color: #f97316; }
                    .floating-orb-1 { background: #8b5cf6; }
                    .floating-orb-2 { background: #f97316; }
                    .floating-orb-3 { background: #ec4899; }
                    .floating-orb { position: absolute; width: 20rem; height: 20rem; border-radius: 50%; mix-blend-mode: multiply; filter: blur(40px); opacity: 0.2; }
                    .floating-orb-1 { top: -10rem; right: -10rem; }
                    .floating-orb-2 { bottom: -10rem; left: -10rem; }
                    .floating-orb-3 { top: 10rem; left: 10rem; }
                    .timeline-line { background: linear-gradient(to bottom, #f97316, #ec4899, #8b5cf6); }
                    .timeline-dot-current { background: #8b5cf6; }
                    .timeline-dot-past { background: #ec4899; }
                    .timeline-dot-start { background: #f97316; }
                    .timeline-date { color: #f97316; }
                    .project-card-bg { background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2)); }
                    .project-card-bg-alt { background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2)); }
                    .project-card-bg-tertiary { background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(249, 115, 22, 0.2)); }
                    .project-icon { color: #f97316; }
                    .project-link { color: #f97316; }
                    .project-link:hover { color: rgba(249, 115, 22, 0.8); }
                    .skill-tag-primary { background: rgba(249, 115, 22, 0.2); color: #f97316; }
                    .skill-tag-secondary { background: rgba(236, 72, 153, 0.2); color: #ec4899; }
                    .skill-tag-accent { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; }
                    .skill-icon { background: linear-gradient(45deg, #f97316, #ec4899); }
                    .skill-progress { background: linear-gradient(45deg, #f97316, #ec4899); }
                    .contact-icon { background: rgba(249, 115, 22, 0.2); }
                    .contact-icon-color { color: #f97316; }
                    .social-link { background: rgba(249, 115, 22, 0.2); color: #f97316; }
                    .social-link:hover { background: #f97316; color: white; }
                    .form-input:focus { ring-color: #f97316; }
                    .submit-button { background: linear-gradient(45deg, #f97316, #ec4899); box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
                    .submit-button:hover { box-shadow: 0 0 30px rgba(249, 115, 22, 0.8), 0 0 40px rgba(236, 72, 153, 0.3); }
                `;
        break;

      case "forest":
        cssVars = `
                    --primary: #10b981;
                    --secondary: #059669;
                    --accent: #84cc16;
                    --primary-rgb: 16, 185, 129;
                    --secondary-rgb: 5, 150, 105;
                    --accent-rgb: 132, 204, 22;
                `;
        additionalStyles = `
                    .hero-gradient { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 25%, #a7f3d0 50%, #6ee7b7 75%, #10b981 100%); }
                    .dark .hero-gradient { background: linear-gradient(135deg, #0f0f23 0%, #064e3b 25%, #065f46 50%, #047857 75%, #059669 100%); }
                    .gradient-text { background: linear-gradient(45deg, #10b981, #059669, #84cc16); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .gradient-text-animated { background: linear-gradient(45deg, #10b981, #059669, #84cc16, #10b981); background-size: 300% 300%; background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .hover-gradient-text:hover { background: linear-gradient(45deg, #10b981, #059669); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .nav-link.active { background: linear-gradient(45deg, #10b981, #059669); background-clip: text; -webkit-background-clip: text; color: transparent; }
                    .cta-button { background: linear-gradient(45deg, #10b981, #059669); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
                    .cta-button:hover { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(5, 150, 105, 0.3); }
                    .secondary-button { border-color: #059669; color: #059669; }
                    .secondary-button:hover { background: #059669; }
                    .scroll-indicator { color: #10b981; }
                    .floating-orb-1 { background: #84cc16; }
                    .floating-orb-2 { background: #10b981; }
                    .floating-orb-3 { background: #059669; }
                    .floating-orb { position: absolute; width: 20rem; height: 20rem; border-radius: 50%; mix-blend-mode: multiply; filter: blur(40px); opacity: 0.2; }
                    .floating-orb-1 { top: -10rem; right: -10rem; }
                    .floating-orb-2 { bottom: -10rem; left: -10rem; }
                    .floating-orb-3 { top: 10rem; left: 10rem; }
                    .timeline-line { background: linear-gradient(to bottom, #10b981, #059669, #84cc16); }
                    .timeline-dot-current { background: #84cc16; }
                    .timeline-dot-past { background: #059669; }
                    .timeline-dot-start { background: #10b981; }
                    .timeline-date { color: #10b981; }
                    .project-card-bg { background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2)); }
                    .project-card-bg-alt { background: linear-gradient(135deg, rgba(5, 150, 105, 0.2), rgba(132, 204, 22, 0.2)); }
                    .project-card-bg-tertiary { background: linear-gradient(135deg, rgba(132, 204, 22, 0.2), rgba(16, 185, 129, 0.2)); }
                    .project-icon { color: #10b981; }
                    .project-link { color: #10b981; }
                    .project-link:hover { color: rgba(16, 185, 129, 0.8); }
                    .skill-tag-primary { background: rgba(16, 185, 129, 0.2); color: #10b981; }
                    .skill-tag-secondary { background: rgba(5, 150, 105, 0.2); color: #059669; }
                    .skill-tag-accent { background: rgba(132, 204, 22, 0.2); color: #84cc16; }
                    .skill-icon { background: linear-gradient(45deg, #10b981, #059669); }
                    .skill-progress { background: linear-gradient(45deg, #10b981, #059669); }
                    .contact-icon { background: rgba(16, 185, 129, 0.2); }
                    .contact-icon-color { color: #10b981; }
                    .social-link { background: rgba(16, 185, 129, 0.2); color: #10b981; }
                    .social-link:hover { background: #10b981; color: white; }
                    .form-input:focus { ring-color: #10b981; }
                    .submit-button { background: linear-gradient(45deg, #10b981, #059669); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
                    .submit-button:hover { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(5, 150, 105, 0.3); }
                `;
        break;
    }

    themeStyles.innerHTML = `
            :root {
                ${cssVars}
            }
            ${additionalStyles}
        `;
  }

  // Theme Management
  setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light' mode
    const savedTheme = localStorage.getItem("theme") || "light";
    html.classList.toggle("dark", savedTheme === "dark");

    themeToggle.addEventListener("click", () => {
      const isDark = html.classList.contains("dark");
      html.classList.toggle("dark", !isDark);
      localStorage.setItem("theme", !isDark ? "dark" : "light");

      // Smooth transition effect
      document.body.style.transition =
        "background-color 0.3s ease, color 0.3s ease";
      setTimeout(() => {
        document.body.style.transition = "";
      }, 300);
    });
  }

  // Navigation Management
  setupNavigation() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    let activeSection = "";

    // Sticky navbar on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("backdrop-blur-lg", "shadow-lg");
        navbar.classList.remove("backdrop-blur-md");
      } else {
        navbar.classList.add("backdrop-blur-md");
        navbar.classList.remove("backdrop-blur-lg", "shadow-lg");
      }

      // Update active navigation link
      this.updateActiveNavLink();
    });

    // Smooth scroll for navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }

        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Update active navigation link based on scroll position
  updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentActiveSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentActiveSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      if (href === currentActiveSection) {
        link.classList.add("active");
        link.classList.remove("text-gray-700", "dark:text-gray-300");
      } else {
        link.classList.remove("active");
        link.classList.add("text-gray-700", "dark:text-gray-300");
      }
    });
  }

  // Mobile Menu Toggle
  setupMobileMenu() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenuButton.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // Scroll-triggered animations
  setupScrollEffects() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");

          // Special animations for specific elements
          if (entry.target.classList.contains("skill-category")) {
            this.animateSkillBars(entry.target);
          }

          if (entry.target.classList.contains("project-card")) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add("animate-slide-up");
          }
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document
      .querySelectorAll(".glass-card, .skill-category, .project-card")
      .forEach((el) => {
        observer.observe(el);
      });
  }

  // Animate skill bars
  animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll(".skill-bar > div");
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = "0%";
        bar.style.transition = "width 1s ease-out";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }, index * 200);
    });
  }

  // Form Validation and Submission
  setupFormValidation() {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const submitText = submitBtn.querySelector(".submit-text");
    const submitSpinner = submitBtn.querySelector(".submit-spinner");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Clear previous errors
      this.clearFormErrors();

      // Validate form
      if (!this.validateForm()) {
        return;
      }

      // Show loading state
      this.setFormLoading(true);

      try {
        // Simulate form submission (replace with actual endpoint)
        await this.submitForm(new FormData(form));

        // Show success message
        this.showFormSuccess();
        form.reset();
      } catch (error) {
        this.showFormError("Failed to send message. Please try again.");
      } finally {
        this.setFormLoading(false);
      }
    });

    // Real-time validation
    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => {
        this.validateField(field);
      });
    });
  }

  validateForm() {
    let isValid = true;
    const requiredFields = ["name", "email", "message"];

    requiredFields.forEach((fieldName) => {
      const field = document.getElementById(fieldName);
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = "";

    if (field.hasAttribute("required") && !value) {
      errorMessage = `${
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
      } is required.`;
      isValid = false;
    } else if (fieldName === "email" && value && !this.isValidEmail(value)) {
      errorMessage = "Please enter a valid email address.";
      isValid = false;
    } else if (fieldName === "name" && value && value.length < 2) {
      errorMessage = "Name must be at least 2 characters long.";
      isValid = false;
    }

    this.showFieldError(field, errorMessage);
    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showFieldError(field, message) {
    const errorElement = field.parentNode.querySelector(".error-message");
    if (message) {
      errorElement.textContent = message;
      errorElement.classList.remove("hidden");
      field.classList.add("border-red-500");
    } else {
      errorElement.classList.add("hidden");
      field.classList.remove("border-red-500");
    }
  }

  clearFormErrors() {
    document.querySelectorAll(".error-message").forEach((error) => {
      error.classList.add("hidden");
    });
    document.querySelectorAll("input, textarea").forEach((field) => {
      field.classList.remove("border-red-500");
    });
  }

  setFormLoading(loading) {
    const submitBtn = document.getElementById("submit-btn");
    const submitText = submitBtn.querySelector(".submit-text");
    const submitSpinner = submitBtn.querySelector(".submit-spinner");

    if (loading) {
      submitBtn.disabled = true;
      submitText.textContent = "Sending...";
      submitSpinner.classList.remove("hidden");
    } else {
      submitBtn.disabled = false;
      submitText.textContent = "Send Message";
      submitSpinner.classList.add("hidden");
    }
  }

  async submitForm(formData) {
    // Simulate API call - replace with your actual endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        Math.random() > 0.1 ? resolve() : reject(new Error("Network error"));
      }, 2000);
    });
  }

  showFormSuccess() {
    // Create success notification
    const notification = this.createNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success"
    );
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  showFormError(message) {
    const notification = this.createNotification(message, "error");
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  createNotification(message, type) {
    const notification = document.createElement("div");
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-x-full`;
    notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-${
                  type === "success" ? "check" : "exclamation-triangle"
                }"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

    // Trigger animation
    setTimeout(() => {
      notification.classList.remove("translate-x-full");
    }, 100);

    return notification;
  }

  // Certificate Modal Management
  setupCertificateModal() {
    const certificateCards = document.querySelectorAll(".certificate-card");
    const modal = document.getElementById("certificate-modal");
    const closeModal = document.getElementById("close-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImages = document.getElementById("modal-images");
    const modalDescription = document.getElementById("modal-description");

    const certificates = {
      0: {
        title: "Bachelor's Degree in Biotechnology",
        description:
          "Bachelor of Biotechnology from International Islamic University Malaysia (2016-2020). This degree provided me with a strong foundation in scientific research, analytical thinking, and problem-solving skills that I now apply to software development.",
        folder: "bachelors",
        images: [
          "degree.png",
          "1-AcademicTranscript.png",
          "2-AcademicTranscript.png",
        ], // Add your actual image filenames here
      },
      1: {
        title: "Foundation Studies in Biological Science",
        description:
          "Foundation in Biological Science from Centre of Foundation Studies, International Islamic University Malaysia (2014-2016). This program prepared me for higher education and developed my critical thinking abilities.",
        folder: "foundation",
        images: ["foundation.jpg"], // Add your actual image filenames here
      },
      2: {
        title: "Sijil Pelajaran Malaysia (SPM)",
        description:
          "Malaysian Certificate of Education from Kolej Islam Sultan Alam Shah (2012). This certificate represents the completion of my secondary education with strong academic performance.",
        folder: "spm",
        images: ["spm.jpg"], // Add your actual image filenames here
      },
      3: {
        title: "Professional Training Certificates",
        description:
          "Various professional development and self-improvement training certificates that have contributed to my continuous learning journey and skill enhancement.",
        folder: "training",
        images: ["ResponsiveWebDesign.jpg"], // Add your actual image filenames here
      },
      4: {
        title: "Achievements & Extracurricular Certificates",
        description:
          "Recognition and awards received for various achievements and participation in extracurricular activities throughout my academic and professional journey.",
        folder: "achievements",
        images: ["2-deanlist.jpg"], // Add your actual image filenames here
      },
    };

    certificateCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const cert = certificates[index];
        if (cert) {
          modalTitle.textContent = cert.title;
          modalDescription.textContent = cert.description;

          // Clear previous images
          modalImages.innerHTML = "";

          // Add certificate images
          cert.images.forEach((imageName) => {
            const imageContainer = document.createElement("div");
            imageContainer.className = "relative group";

            const img = document.createElement("img");
            img.src = `/certificates/${cert.folder}/${imageName}`;
            img.alt = `${cert.title} - ${imageName}`;
            img.className =
              "w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300";

            // Handle image load error
            img.onerror = () => {
              imageContainer.innerHTML = `
                                <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-500 dark:text-gray-400">
                                        <i class="fas fa-image text-4xl mb-2"></i>
                                        <p>Certificate image not found</p>
                                        <p class="text-sm">Place ${imageName} in /public/certificates/${cert.folder}/</p>
                                    </div>
                                </div>
                            `;
            };

            imageContainer.appendChild(img);
            modalImages.appendChild(imageContainer);
          });

          modal.classList.remove("hidden");
          document.body.style.overflow = "hidden";
        }
      });
    });

    // Close modal functionality
    const closeModalFunction = () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    };

    closeModal.addEventListener("click", closeModalFunction);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModalFunction();
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModalFunction();
      }
    });
  }

  // Setup additional animations
  setupAnimations() {
    // Hero section typing effect
    this.setupTypingEffect();

    // Resume download functionality
    this.setupResumeDownload();

    // Glowing button effects
    this.setupGlowEffects();

    // Certificate modal
    this.setupCertificateModal();
  }

  setupTypingEffect() {
    const nameElement = document.querySelector(
      ".bg-gradient-to-r.from-neon-cyan"
    );
    if (nameElement) {
      nameElement.style.opacity = "0";
      setTimeout(() => {
        nameElement.style.opacity = "1";
        nameElement.style.transition = "opacity 0.6s ease-out";
      }, 500);
    }
  }

  setupResumeDownload() {
    const resumeBtn = document.getElementById("resume-download");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Create a simple resume download simulation
        const notification = this.createNotification(
          "Resume download started!",
          "success"
        );
        document.body.appendChild(notification);

        // In a real application, you would trigger an actual file download here
        // For example: window.open('/path/to/resume.pdf', '_blank');

        setTimeout(() => {
          notification.remove();
        }, 3000);
      });
    }
  }

  setupGlowEffects() {
    // Add glow effect to buttons on hover
    document.querySelectorAll(".cta-button").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.05)";
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
      });
    });
  }
}

// Utility functions
class Utils {
  static debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  static isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp();
});

// Performance optimization: Lazy load images if any are added later
document.addEventListener("DOMContentLoaded", () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Add smooth reveal animation for elements entering viewport
const revealElements = () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

// Throttled scroll event for better performance
window.addEventListener("scroll", Utils.throttle(revealElements, 16));
