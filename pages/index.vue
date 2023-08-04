<!-- Landing Page -->
<template>
  <main id="home" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Introduction -->
    <section>
<!--      <nuxt-img
          format="webp"
          loading="lazy"
          src="/index.png"
          alt="Profile Picture"
          class="md:h-100 min-w-[5rem]  border-[.05rem] border-slate-300 dark:border-none"
      />-->
      <h1 class="font-semibold text-2xl mb-6">Hi, my name is Mahedi Azad.</h1>
      <p>
        I am a results-oriented developer experienced in software development
        through professional freelance work, internships, and open-source
        contributions. I possess broad technical knowledge of software
        engineering, a quick learning ability, and creative programming skills.
        Furthermore, I'm fluent in several languages and frameworks including
        Python, SQL, JavaScript, Vue.js, and, Node.js. I'm currently focused on
        expanding my experience using  Angular, React.js, MongoDB &
        TypeScript.
      </p>
    </section>

    <!-- Projects -->
    <h2 class="font-semibold text-xl mb-2">
      <NuxtLink to="/projects" class="focused-link flex items-center py-2">
        Projects
        <Icon
          name="heroicons:chevron-right-solid"
          class="ml-2 text-green-500"
        />
      </NuxtLink>
    </h2>
    <section class="columns-1 lg:columns-2 gap-6">
      <AppProjectCard
        :hideImage="true"
        project-title="Deadlines"
        project-url="https://deadlines.oneminch.dev/"
        project-description="Deadlines is a simple, offline deadline tracker made with Vue.js and localForage."
        :tags="['Vue.js', 'localForage']"
      />
      <AppProjectCard
        :hideImage="true"
        project-title="EncryptedList"
        project-url="https://encryptedlist.xyz/"
        project-description="EncryptedList is a List of Products & Services that Offer Zero-Knowledge or End-to-End Encryption."
        :tags="['Vue.js', 'Tailwind CSS', 'Airtable']"
      />
    </section>

    <!-- Skills -->
    <h2 class="font-semibold text-xl mb-2 py-2">Skills</h2>
    <section>
      <span
        v-for="skill in skills"
        :key="skill"
        class="px-3 py-1 inline-block dark:border dark:border-green-500 bg-green-300 dark:bg-transparent text-slate-800 dark:text-green-500 font-medium rounded-full text-sm mr-1 mb-1"
        >{{ skill }}</span
      >
    </section>
    <!-- Status -->
    <h2 class="font-semibold text-xl mb-2 py-2">Currently</h2>
    <section class="columns-1 lg:columns-2 gap-6">
      <AppStatusCard
        v-for="(content, type) in currently"
        :key="type"
        :status-type="type"
        :status-content="content"
      />
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Mahedi Azad - Laravel Developer",
    description:
      "I'm a frontend engineer who's passionate about the open web (JavaScript, React.js, Vue.js)",
    image: "/og-image.png"
  };

  useServerSeoMeta({
    title: seoMeta.title,
    ogTitle: seoMeta.title,
    twitterTitle: seoMeta.title,
    description: seoMeta.description,
    ogDescription: seoMeta.description,
    twitterDescription: seoMeta.description,
    ogImage: seoMeta.image,
    twitterImage: seoMeta.image,
    ogUrl: `http://oneminch.dev${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  const skills = ref([
    "Python",
    "JavaScript",
    "Vue.js",
    "Git",
    "HTML",
    "CSS",
    "SQL",
    "Node.js",
    "Express.js"
  ]);

  const currently = {
    Learning: "Node.js",
    Reading: "Pragmatic Thinking",
    Listening: "The Witch Trials of J.K. Rowling",
    Playing: "Little Nightmares II"
  };
</script>