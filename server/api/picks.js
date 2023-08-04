// import axios from "axios";

const { raindropTestToken, raindropCollectionId } = useRuntimeConfig();

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${raindropTestToken}`
  }
};

const url = `https://api.raindrop.io/rest/v1/raindrops/${raindropCollectionId}`;

export default defineEventHandler(async () => {
  try {
    /*const response = await axios.get(url, axiosConfig);

    const picks = response.data.items.map((item) => {
      return {
        cover: item.cover ?? "https://fakeimg.pl/100",
        title: item.title,
        url: item.link
      };
      // date: item.created
    });*/
    const picks = [
      {
        "cover": "https://i.ytimg.com/vi/17zBODTpuoo/maxresdefault.jpg",
        "title": "A First Look at Nuxt SERVER COMPONENTS",
        "url": "https://www.youtube.com/watch?v=17zBODTpuoo"
      },
      {
        "cover": "https://roe.dev/og/nuxt-server-components.jpg",
        "title": "A guide to Nuxt server components",
        "url": "https://roe.dev/blog/nuxt-server-components?ck_subscriber_id=2260814617"
      },
      {
        "cover": "https://blog.cloudflare.com/content/images/2022/05/A-Community-Group-for-Web-interoperable-JavaScript-runtimes-OG-3.png",
        "title": "A Community Group for Web-interoperable JavaScript runtimes",
        "url": "https://blog.cloudflare.com/introducing-the-wintercg/"
      },
      {
        "cover": "https://images.prismic.io/wroom/8d6c75e6-19d0-44c6-bd10-d14b81bb7575_the+JavaScript+Meta-framework+ecosystem.png?auto=compress,format",
        "title": "Unraveling the JavaScript Meta-Framework Ecosystem: Which One Is Right for You?",
        "url": "https://prismic.io/blog/javascript-meta-frameworks-ecosystem"
      },
      {
        "cover": "https://i.ytimg.com/vi/r-GSGH2RxJs/maxresdefault.jpg",
        "title": "htmx in 100 seconds",
        "url": "https://youtube.com/watch?v=r-GSGH2RxJs"
      },
      {
        "cover": "https://windicss.org/assets/og-image.png",
        "title": "Windi CSS is Sunsetting",
        "url": "https://windicss.org/posts/sunsetting.html"
      },
      {
        "cover": "https://miro.medium.com/v2/resize:fit:1200/1*iwPLQjyFYRTVeQ2cb4S9rA.png",
        "title": "ABC: Always Be Coding",
        "url": "https://medium.com/always-be-coding/abc-always-be-coding-d5f8051afce2"
      },
      {
        "cover": "https://prettier.io/icon.png",
        "title": "Prettier 3.0: Hello, ECMAScript Modules! · Prettier",
        "url": "https://prettier.io/blog/2023/07/05/3.0.0.html"
      },
      {
        "cover": "https://i.ytimg.com/vi/OrxmtDw4pVI/maxresdefault.jpg",
        "title": "Vue.js: The Documentary",
        "url": "https://www.youtube.com/watch?v=OrxmtDw4pVI"
      },
      {
        "cover": "https://survey.stackoverflow.co/2023/up_/src/img/dev-survey-2023.png",
        "title": "Stack Overflow Developer Survey 2023",
        "url": "https://survey.stackoverflow.co/2023/"
      },
      {
        "cover": "https://blog.cloudflare.com/content/images/2023/05/image1-38.png",
        "title": "Making Cloudflare the best place for your web applications",
        "url": "https://blog.cloudflare.com/making-cloudflare-for-web/"
      },
      {
        "cover": "https://blog.cloudflare.com/content/images/2023/05/image1-51.png",
        "title": "D1: We turned it up to 11",
        "url": "https://blog.cloudflare.com/d1-turning-it-up-to-11/"
      },
      {
        "cover": "https://www.taniarascia.com/static/5e267e2ee412a23e797106ee564145a0/92ab1/js.png",
        "title": "Build a Simple MVC App From Scratch in JavaScript",
        "url": "https://www.taniarascia.com/javascript-mvc-todo-app/"
      },
      {
        "cover": "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/11X2PxTFJCkqOYECklACq7/5b7a06c0e143847c668ff1bc07aa318a/StorageDark.jpg",
        "title": "Introducing storage on Vercel",
        "url": "https://vercel.com/blog/vercel-storage"
      },
      {
        "cover": "https://i.ytimg.com/vi/48NWaLkDcME/maxresdefault.jpg",
        "title": "Here is what Cloudflare Workers do",
        "url": "https://www.youtube.com/watch?v=48NWaLkDcME"
      },
      {
        "cover": "https://i.ytimg.com/vi/sM7rnd_3WCw/maxresdefault.jpg",
        "title": "Ryan Dahl's \"The JavaScript Runtime for the Serverless Era\" (GOTO 2022)",
        "url": "https://www.youtube.com/watch?v=sM7rnd_3WCw"
      },
      {
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--OflFUeUF--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lojgrauh0rcxu5ihv6wi.png",
        "title": "Folder Structure for Modern Web Applications",
        "url": "https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11"
      },
      {
        "cover": "https://i.ytimg.com/vi/2OTq15A5s0Y/maxresdefault.jpg",
        "title": "7 better ways to create a React app",
        "url": "https://www.youtube.com/watch?v=2OTq15A5s0Y"
      },
      {
        "cover": "https://rdl.ink/render/https%3A%2F%2Fwww.wholegraindigital.com%2Fblog%2Fwebsite-energy-efficiency%2F",
        "title": "20 ways to make your website more energy efficient",
        "url": "https://www.wholegraindigital.com/blog/website-energy-efficiency/"
      },
      {
        "cover": "https://user-images.githubusercontent.com/4323180/29084097-f16c97c6-7c38-11e7-92dd-d20c1364d869.gif",
        "title": "CSS Utility Classes and \"Separation of Concerns\"",
        "url": "https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
      },
      {
        "cover": "https://mariusschulz.com/images/egghead/javascript-promises-480x480.lkewd26bau.imm.png",
        "title": "Use Cases for JavaScript's IIFEs",
        "url": "https://mariusschulz.com/blog/use-cases-for-javascripts-iifes"
      },
      {
        "cover": "https://blog.mozilla.org/wp-content/blogs.dir/278/files/2023/03/mozilla_ai_masthead_1920x1080__1__720-608x405.png",
        "title": "Introducing Mozilla.ai: Investing in trustworthy AI",
        "url": "https://blog.mozilla.org/en/mozilla/introducing-mozilla-ai-investing-in-trustworthy-ai/"
      },
      {
        "cover": "https://www.joshwcomeau.com/images/og-the-end-of-frontend-development.png",
        "title": "The End of Front-End Development",
        "url": "https://www.joshwcomeau.com/blog/the-end-of-frontend-development/?from=newsletter"
      },
      {
        "cover": "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/640658a746a8ce16d18f27ac_027_Header.png",
        "title": "How Discord Stores Trillions of Messages",
        "url": "https://discord.com/blog/how-discord-stores-trillions-of-messages"
      }
    ];

    return picks;
  } catch (error) {
    return error;
  }
});
