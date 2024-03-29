<!-- Resume Page -->
<template>
  <main id="resume">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Name  -->
    <h1 class="font-bold text-3xl">Mahedi Azad</h1>

    <!-- Professional Summary -->
    <p class="w-full my-6">
      I am results-oriented developer over 10 years experienced in software development through professional job,
      freelance work, internships, and open-source contributions. Possess broad technical knowledge of software
      engineering, a quick learning ability, and creative programming skills. Fluent in several languages and
      frameworks, I always focused on expanding my experience with new technology..
    </p>

    <!-- Skills timeline -->
    <h3 class="font-bold text-2xl my-6 flex items-center">
      Skills
      <Icon name="heroicons:folder-solid" class="ml-3" />
    </h3>
    <section
        class="ml-2 border-l-2 border-slate-300 dark:border-slate-600 my-4 w-full"
    >
      <div
          v-for="(skill, expIndex) in skills"
          :key="expIndex"
          class="timeline-item"
      >
        <h3 class="font-bold text-slate-700 dark:text-slate-200">
          {{ skill.role }}
        </h3>
        <ul
            v-if="skill.responsibilities.length > 0"
            class="list-disc pl-4 pt-2"
        >
          <li
              v-for="(responsibility, respIndex) in skill.responsibilities"
              :key="respIndex"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Experience timeline -->
    <h3 class="font-bold text-2xl my-6 flex items-center"   v-if="showExperience">
      Experiences
      <Icon name="heroicons:briefcase-solid" class="ml-3" />
    </h3>
    <section  v-if="showExperience"
      class="ml-2 border-l-2 border-slate-300 dark:border-slate-600 my-4 w-full"
    >
      <div
        v-for="(experience, expIndex) in experiences"
        :key="expIndex"
        class="timeline-item"
      >
        <h3 class="font-bold text-slate-700 dark:text-slate-200">
          {{ experience.role }}
          <br />
          <span class="text-green-600 dark:text-green-500">
            {{ experience.company }}
          </span>
          <br />
          <span class="text-slate-500 dark:text-slate-400">
            ({{ experience.from }} - {{ experience.to }})
          </span>
        </h3>
        <ul
          v-if="experience.responsibilities.length > 0"
          class="list-disc pl-4 pt-2"
        >
          <li
            v-for="(responsibility, respIndex) in experience.responsibilities"
            :key="respIndex"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Education Timeline -->
    <h3 class="font-bold text-2xl my-6 flex items-center">
      Education
      <Icon name="heroicons:academic-cap-solid" class="ml-3" />
    </h3>
    <section
      class="ml-2 border-l-2 border-slate-300 dark:border-slate-600 my-4 w-full"
    >
      <div class="timeline-item"  v-for="(education, expIndex) in educations"  :key="expIndex">
        <h3 class="font-bold text-slate-700 dark:text-slate-200">
          {{ education.institution }}
          <br />
          <span class="text-green-600 dark:text-green-500">
            {{ education.degree }} in {{ education.major }}
          </span>
          <br />
          <span class="text-slate-500 dark:text-slate-400">
            ({{ education.from }} - {{ education.to }})
          </span>
        </h3>
      </div>
    </section>

    <!-- Academic Papers -->
    <h3 class="font-bold text-2xl my-6 flex items-center">
      Papers
      <Icon name="mdi:paper-text" class="ml-3" />
    </h3>
    <section
        class="ml-2 border-l-2 border-slate-300 dark:border-slate-600 my-4 w-full"
    >
      <div class="timeline-item"  v-for="(paper, expIndex) in papers"  :key="expIndex">
        <h3 class="font-bold text-slate-700 dark:text-slate-200">
          {{ paper.title }}
          <br />
          <span class="text-green-600 dark:text-green-500">
            {{ paper.institution }}
          </span>
          <br />
          <span class="text-slate-500 dark:text-slate-400">
              {{ paper.degree }} ({{ paper.year }})
          </span>
        </h3>
      </div>
    </section>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Mahedi Azad's Resume",
    description: "This page contains my timeline of professional activity.",
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

  const skills = [
    {
      role: "Language ",
      responsibilities: [
          "PHP, PL/SQL, Javascript, TypeScript",
          "HTML5, CSS3, XML"
      ]
    },{
      role: "Database ",
      responsibilities: [
          "MySQL, Oracle, PostgreSQL, SQLite",
          "MongoDB, Redis, NeoDB",
      ]
    },{
      role: "Framework  ",
      responsibilities: [
          "Laravel, Cakephp, CodeIgniter,Zend, phpFox, Lumen, Slim, Slice, FlightPhp, FuelPhp, Fat-Free",
          "Node.js, Angular, VueJS, Nuxt, Express, Socket.io, Alpine JS, Svelte",
          "Bootstrap, Material UI"
      ]
    },{
      role: "Technical   ",
      responsibilities: [
          "Linux, Windows, Apache, Nginx",
          "Git, SVN, TFS, Amazon AWS(EC2), GraphQl, Google Cloud",
          "REST, SOAP, JSON-RPC, ISO-8583, JSON, AJAX, WebRTC",
          "Payment Gateway (Authorized.Net, Stripe, Paypal, Braintree, SecurePay, DBBL, bKash, City Bank, Brac Bank, Nagad)",
          "Push-Pull SMS, SMS Gateway (Grameenphone, Robi, Banglalink, Teletalk)",
          "Hybrid Mobile Application (Ionicframework)"
      ]
    },
  ];

  const showExperience = false;

  const experiences = [
    {
      role: "Assistant Vice President, Software ",
      company: "Computer Network System Ltd.",
      from: "March 2019",
      to: "Present",
      responsibilities: []
    },
    {
      role: "Senior Software Engineer ",
      company: "BitMascot Ltd.",
      from: "January, 2018",
      to: "December, 2017",
      responsibilities: []
    },
    {
      role: "Senior Software Engineer ",
      company: "RDF Payment Technology Ltd.",
      from: "April, 2014",
      to: "December, 2016",
      responsibilities: []
    },
    {
      role: "Offshore Web Developer",
      company: "Raptas Inc., RMG Networks Inc., Velomeric Inc. Metro Lab LLC, Konnarth LLC., Preview ICT LLC.",
      from: "March 2010",
      to: "Present",
      responsibilities: [
        "Helped fellow computer science students grow their online presence by developing portfolio websites.",
        "Created a landing page for a mobile application by a client. Designed an icon and mockups for the application.",
        "Aided the foundation's mission to advance computing research by contributing to its large publishing platform.",
        "Wrote in-depth technical articles on web and computer science concepts such as networking, working with APIs, and fingerprinting."

      ]
    }
  ];

  const educations = [
    {
      institution: "Jahangirnagar University, Bangladesh",
      degree: "M.Sc.",
      major: "Computer Science",
      from: "2016",
      to: "2017"
    },
      {
    institution: "National University, Bangladesh",
    degree: "B.Sc.",
    major: "Computer Science and Engineering",
    from: "2008",
    to: "2012"
  }
  ];

  const papers = [
    {
      title: "Sentence-level Sentiment Analysis and Classification",
      degree: "Master of Science (M.Sc.) in Computer Science",
      institution: "Jahangirnagar University, Savar, Dhaka-1342, Bangladesh",
      link:'#',
      year: "2017",
    },
    {
      title: "Optical Character Recognizer for Bangla (Bangla OCR)",
      degree: "B.Sc in Computer Science and Engineering,",
      institution: "National University, Gazipur, Dhaka, Bangladesh",
      link:'#',
      year: "2012",
    },
  ];

</script>

<style scoped>
  .timeline-item {
    @apply px-8 py-4 relative text-slate-700 dark:text-slate-300 first:first:before:bg-green-500 dark:first:first:before:bg-green-500;
  }
  .timeline-item::before {
    @apply [content:''] absolute left-0 top-1/2 -translate-y-1/2 translate-x-[calc(-50%-1px)] w-3 h-3 rounded-full inline-block bg-slate-300 dark:bg-slate-600 print:hidden;
  }
</style>
