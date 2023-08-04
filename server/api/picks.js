/*import axios from "axios";

const { raindropTestToken, raindropCollectionId } = useRuntimeConfig();

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${raindropTestToken}`
  }
};*/

// const url = `https://mahediazad.com/${raindropCollectionId}`;
// const url = `https://raw.githubusercontent.com/mazadcse/mazadcse/f0445b140c413fbff61bd351f5e1c8f76e6fd7a7/data/picks.js`;

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
      }
    ];

    return picks;
  } catch (error) {
    return error;
  }
});
