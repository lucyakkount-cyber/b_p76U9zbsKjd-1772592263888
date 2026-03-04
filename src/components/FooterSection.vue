<template>
  <footer class="border-t border-border py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-card border border-neon/30 flex items-center justify-center">
            <svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span class="text-foreground font-bold">Quantum<span class="neon-text">VRM</span></span>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6">
          <a href="#why-better" class="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">{{ $t('nav.whyUs') }}</a>
          <a href="#features" class="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">{{ $t('nav.features') }}</a>
          <a href="#pricing" class="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">{{ $t('nav.pricing') }}</a>
          <a href="#demo" class="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">{{ $t('nav.demo') }}</a>
          <a
            href="https://aichat-tau-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
          >
            Live App
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-muted-foreground/60 text-xs">
          &copy; 2026 Quantum VRM. {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
