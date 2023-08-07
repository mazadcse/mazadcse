<!-- Projects Page -->
<template>
  <main id="projects">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">Projects</h1>

    <div  v-for="(project, expIndex) in projects"  :key="expIndex">
      <AppProjectCard
          :imgUrl="project.imgUrl"
          :projectTitle="project.title"
          :project-description="project.description"
          :project-url="project.url"
          :tags="project.tags"
      />
    </div>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Mahedi Azad's Projects",
    description:
      "This page contains projects that I am currently working on and have worked on.",
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

  const projects = [
    {
      imgUrl:"/projects/eventbookings.png",
      title:"Event Bookings",
      description:"Deadlines is a simple, offline deadline tracker made with Vue.js and localForage.",
      url:"https://www.eventbookings.com/",
      tags:['Cakephp', 'Bootstrap', 'PostgreSql']

    },
    {
      imgUrl:"/projects/resturant_pos.jpg",
      title: "Resturant POS",
      description:"Resturant pos.",
      url:"#",
      tags:['Wordpress']
    },
    {
      imgUrl:"/projects/sms.png",
      title: "Enterprise Messaging System (Bulk SMS, Push-Pull SMS, Re-seller )",
      description:"Reseller/Clicnt and Start our Bussiness. We always think Better Service to Client. You Master Re-seller here You can Resell Our SMS , Providing Complete SMS Billing For Your own Banding SMS Bussiness Very Cheap Price.",
      url:"#",
      tags:['Javascript', 'Bootstrap','PHP']
    },
    {
      imgUrl:"/projects/mrc.png",
      title: "Mobile Service Manager",
      description:"An Innovative Retail POS, Inventory management, eCommerce & Repair service management software called MRC Manager. Easily manage & grow business in the cloud.",
      url:"#",
      tags:['Javascript', 'Bootstrap','PHP']
    },
    {
      imgUrl:"/projects/sitebuilder.png",
      title: "Site builder",
      description:"Build static HTML websites by combining blocks together and export your site or publish it directly to a live server.",
      url:"#",
      tags:['Javascript', 'Bootstrap','PHP']
    },
    {
      imgUrl:"/projects/school_forum.jpg",
      title: "School Forum Website",
      description:"Global Student Forum Bangladesh website build with wardpress",
      url:"#",
      tags:['Wordpress']
    },

  ]
</script>
