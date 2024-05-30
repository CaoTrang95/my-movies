export const optionsSortList = [
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "vote_count.asc", label: "Rating Ascending" },
  { value: "vote_count.desc", label: "Rating Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "primary_release_date.desc", label: "Release Date Descending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_title.desc", label: "Title (Z-A)" },
];
export const showMe = [
  { id: 0, label: "Everything" },
  { id: 1, label: "Movies I Haven't Seen" },
  { id: 2, label: "Movies I Have Seen" },
];
export const tooltipOverview = [
  { link: "/", content: "Main" },
  { link: "/", content: "Alternative Titles" },
  { link: "/", content: "Cast & Crew" },
  { link: "/", content: "Release Dates" },
  { link: "/", content: "Translations" },
  { link: "/", content: "Changes" },
  { link: "/", content: "Report" },
  { link: "/", content: "Edit" },
];
export const tooltipMedia = [
  { link: "/", content: "Backdrops", number: 61 },
  { link: "/", content: "Logos", number: 54 },
  { link: "/", content: "Posters", number: 263 },
  {
    link: "/",
    content: "Videos",
    arrays: [
      { link: "/", content: "Clips", number: 2 },
      { link: "/", content: "Teasers", number: 6 },
      { link: "/", content: "Behind the Scenes", number: 4 },
      { link: "/", content: "Trailers", number: 3 },
      { link: "/", content: "Featurettes", number: 5 },
    ],
  },
];
export const tooltipFandom = [
  { link: "/", content: "Discussions" },
  { link: "/", content: "Reviews" },
];
export const tooltipShare = [
  { link: "/", content: "Share Link" },
  { link: "/", content: "Facebook" },
  { link: "/", content: "Tweet" },
];
