<!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
<template>
  <div
    class="w-full flex flex-col items-center bg-transparent relative [&>*]:mb-1 md:[&>*]:mb-2 last:[&>*]:mb-0 p-1 pb-2 md:pb-1"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/profile.jpg"
      alt="Profile Picture"
      class="md:w-36 w-2/5 max-w-[8rem] min-w-[5rem] rounded-full border-[.05rem] border-slate-300 dark:border-none"
    />
    <h2
      class="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100"
    >
      Mahedi Azad
    </h2>
    <h2
      class="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-400"
    >
      Laravel Developer
    </h2>
    <div
      class="w-full h-8 flex items-center justify-center text-slate-900 dark:text-slate-200"
    >
      <NuxtLink
        v-for="(profile, key) in profiles"
        :key="profile"
        class="focused-link icon-link"
        :to="profile"
        :title="key"
        target="_blank"
      >
        <Icon :name="`simple-icons:${key.toLowerCase()}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const profiles = {
    LinkedIn: "https://bd.linkedin.com/in/mahediazad",
    GitHub: "https://github.com/mazadcse",
    // Hashnode: "https://hashnode.com/@mahediazad",
    // DevDotTo: "https://dev.to/mahediazad",
    LeetCode: "https://leetcode.com/mahediazad"
  };
</script>
