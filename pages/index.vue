<!-- Landing Page -->
<template>
  <main id="home" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, my name is Mahedi Azad.</h1>
      <p>
        I am a results-oriented developer over 10 years experienced in software development
        through professional job, freelance work, internships, and open-source
        contributions. I possess broad technical knowledge of software
        engineering, a quick learning ability, and creative programming skills.
        Furthermore, I'm fluent in several languages and frameworks including
        PHP, SQL, JavaScript, Laravel, Vue.js, Angular and, Node.js, MySql, MongoDB. I'm currently focused on
        expanding my experience using React.js and Python.
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
        project-title="Foordo.xyz"
        project-url="https://foordo.mahediazad.com/"
        project-description="A SaaS model based simple shop management system with POS. Paper less supply to sales chain management include HR, accounts, inventory and stock and courier. Real time notification, customer support and payment gateway integrated."
        :tags="['Laravel', 'Vue.js', 'localForage', 'MySql']"
      />
      <AppProjectCard
        :hideImage="true"
        project-title="Event Bookings Management"
        project-url="https://www.eventbookings.com/"
        project-description="The hassle-free solution for selling tickets online. Streamline check-ins with mobile ticket scanning. Capture essential information with smart forms and Simple email marketing. Used in business, sports, charity, academic, cultural and much more programs."
        :tags="['Cakephp', 'Bootstrap', 'Javascript', 'PostgreSQL']"
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
      "I'm a software engineer who's passionate about the open web (Laravel, JavaScript, Vue.js, Angular)",
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
    ogUrl: `http://mahediazad.com${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  const skills = ref([
    "PHP",
    "JavaScript",
    "TypeScript",
    "SQL/PLSQL",
    "Laravel",
    "Cakephp",
    "Codeigniter",
    "Zend",
    "Vue.js",
    "Angular",
    "Alpine JS",
    "Svelte",
    "Node.js",
    "Express.js",
    "Socket.io",
    "Alpine JS",
    "Svelte",
    "Tailwind",
    "Material UI",
    "MySql",
    "PostgreSQL",
    "Oracle",
    "MongoDB",
    "Redis", 
    "NeoDB",
    "Graphql",
    "Git",
    "SVN",
    "TFS",
    "AWS (EC2)",
    "REST", "SOAP", "JSON-RPC", "ISO-8583", "WebRTC",
    "SMS Gateway", "Payment Gateway"
  ]);

  const currently = {
    Learning: "React.js",
    Reading: "Pragmatic Thinking",
    Listening: "The Witch Trials of J.K. Rowling",
    Playing: "Little Nightmares II"
  };
</script>
