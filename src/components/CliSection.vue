<template>
  <div class="space-y-4">
    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">npm install -g grapdf</div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">grapdf &lt;url&gt; [output]</div>
      </div>
    </div>
    <div>
      <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Options</p>
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
        <p><span class="text-emerald-500 dark:text-emerald-400">--sort</span> Sort PDFs alphabetically by URL</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--reverse</span> Reverse the order before merging</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--limit</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Maximum number of PDFs to include</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--selector</span> <span class="text-gray-400 dark:text-zinc-500">css</span> CSS selector to scope link search</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--include</span> <span class="text-gray-400 dark:text-zinc-500">regex</span> Include only matching PDF URLs</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--exclude</span> <span class="text-gray-400 dark:text-zinc-500">regex</span> Exclude matching PDF URLs</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--trim</span> <span class="text-gray-400 dark:text-zinc-500">pts</span> Crop all four sides by N points</p>
        <p><span class="text-emerald-500 dark:text-emerald-400">--dry-run</span> Preview PDF URLs without downloading</p>
      </div>
    </div>
  </div>
</template>
