import { defineEventHandler } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/h3/dist/index.mjs';

const contact = defineEventHandler(async () => {
  try {
    return "hi";
  } catch (error) {
    return error;
  }
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
