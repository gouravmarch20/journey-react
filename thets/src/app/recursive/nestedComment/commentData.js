export const commentsData = [
  {
    id: 1,
    name: "Alice",
    text: "This is a great post!",
    votes: 3,
    reply: [
      {
        id: 2,
        name: "Bob",
        text: "I agree with Alice!",
        votes: 1,
        reply: [
          {
            id: 4,
            name: "Derek",
            text: "Same here. Nice insights.",
            votes: 2,
            reply: [],
          },
        ],
      },
      {
        id: 5,
        name: "Eva",
        text: "I think there's more to add here.",
        votes: 0,
        reply: [],
      },
    ],
  },
  {
    id: 6,
    name: "Charlie",
    text: "Interesting perspective!",
    votes: 2,
    reply: [
      {
        id: 7,
        name: "Fiona",
        text: "Not sure I completely agree.",
        votes: 1,
        reply: [
          {
            id: 8,
            name: "George",
            text: "Why not? I found it convincing.",
            votes: 0,
            reply: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Henry",
    text: "Can someone explain this part more clearly?",
    votes: 5,
    reply: [
      {
        id: 10,
        name: "Irene",
        text: "Sure! What part do you find confusing?",
        votes: 3,
        reply: [
          {
            id: 11,
            name: "Henry",
            text: "The second paragraph mostly.",
            votes: 2,
            reply: [],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Jack",
    text: "Loved this article. Learned a lot.",
    votes: 6,
    reply: [],
  },
  {
    id: 13,
    name: "Karen",
    text: "I think a few details are inaccurate.",
    votes: -1,
    reply: [
      {
        id: 14,
        name: "Leo",
        text: "Can you point them out?",
        votes: 1,
        reply: [],
      },
    ],
  },
];
