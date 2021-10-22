export default {
  name: "Youtube",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "YoutubeUrl",
      title: "Name",
      type: "string",
    },
    {
      name: "Url",
      title: "Link",
      type: "string",
    },
    {
      name: "BulkUrls",
      title: "Arr",
      type: "array",
      of: [{ type: "reference", to: { type: "Bulk" } }],
    },
  ],
};
