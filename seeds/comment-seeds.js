const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Pardon me, but would ya mind if I fired me cannon through your porthole? That’s some treasure chest you’ve got there. If ye can’t trust a pirate, ye damn well can’t trust a merchant either!",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: "Come show me how ye bury yer treasure, lad!",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text: "Aye, I guarantee ye, I’ve had a twenty percent decrease in me “lice ratio!”",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: " Not all treasure is silver and gold Always be yourself, unless you can be a pirate. Then always be a pirate. ",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "Right from the Voyage og Noah, surviving was by sailing. Avast ye! and sail against the tides.",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "Why are pirates pirates? cuz they arrrrrr Life’s pretty good, and why wouldn’t it be? I’m a pirate, after all. Arrrrrrrr",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text: "Have ya ever met a man with a real yardarm? They don’t call me Long John because my head is so big. Is that a belayin’ pin in yer britches, or are ye … ",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "I’ve crushed seventeen men’s skulls between me thighs! ",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "There comes a time in most men’s lives where they feel the need to raise the Black Flag. ",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: "The Code is more like guidelines, really. Shiver me timbers. Ahoy! lets trouble the water! ",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Why is the rum gone? Now and then we had a hope that if we lived and were good, God would permit us to be pirates.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Where there is a sea there are pirates. Shiver me timbers. Without the messy paperwork.",
    user_id: 2,
    post_id: 6,
  },
  {
    comment_text: "Take what you can, give nothing back Give me freedom or give me the rope. For I shall not take the shackles that subjugate the poor to uphold the rich.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: 'God would permit us to be pirates. Merchant and pirate were for a long period one and the same person.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Even today mercantile morality is really nothing but a refinement of piratical morality. Damnation seize my soul if I give you quarters, or take any from you.',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'What are YOU doing here? I’ve crushed seventeen men’s skulls between me thighs! Yarrrr! there be ony two ranks of leader amongst us pirates! ',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Captain and if your really notorious then it’s Cap’n! ',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'The average man will bristle if you say his father was dishonest, but he will brag a little if he discovers that his great- grandfather was a pirate.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Damnation seize my soul if I give you quarters, or take any from you.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Wanna shiver me timbers? Is that a belayin’ pin in yer britches, or are ye … ',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'Always be yourself, unless you can be a pirate. Then always be a pirate.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'And that was done without a single drop of rum…',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'My mom would not let me see the pirate movie because it was rated rrrrr. Ahoy! lets trouble the water!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'I’d love to drop anchor in your lagoon. Yarrrr! there be ony two ranks of leader amongst us pirates!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Captain and if your really notorious then it’s Cap’n! ',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'The average man will bristle if you say his father was dishonest, but he will brag a little if he discovers that his great- grandfather was a pirate.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:
      'Fetch me another Cabin Boy…This one be split Ahoy! lets trouble the water!',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Wanna shiver me timbers? I’ve crushed seventeen men’s skulls between me thighs! ',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'You can always trust the untrustworthy because you can always trust that they will be untrustworthy. Its the trustworthy you can’t trust.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'The Code is more like guidelines, really. Pirate’s code: First freedom and the captain. Second the loot, third woman and the rum and at the end no mercy if they not immediately surrender!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text:
      'That’s quite a cutlass ye got thar, what ye need is a good scabbard!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'The existence of the sea means the existence of pirates.',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: '“I’ve got a jar of dirt! I’ve got a jar of dirt, and guess what’s inside it?”',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Why is the rum always gone?” Piracy – Hostile take over.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'There comes a time in most men’s lives where they feel the need to raise the Black Flag.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text:
      'you know, thats the 2nd time I’v watched that man sail away with my ship.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      'Work like a captain, play like a pirate.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Damnation seize my soul if I give you quarters, or take any from you. How much does the pirate pay for an ear piercing?',
    user_id: 5,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;