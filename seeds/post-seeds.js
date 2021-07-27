const { Post } = require('../models');

const postdata = [
  {
    title: 'Never Suffer From TECH Again',
    post_contents: 'Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.',
    post_url: 'http://example.com/#belief',
    user_id: 1
  },
  {
    title: 'How To Teach TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Like A Pro',
    post_contents: 'Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. ',
    post_url: 'http://www.example.net/?bee=achiever',
    user_id: 2
  },
  {
    title: 'Sick And Tired Of Doing TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER The Old Way? Read This',
    post_contents: 'Those medals you wear on your moth-eaten chest should be there for bungling at which you are best.',
    post_url: 'https://www.example.com/afternoon/afternoon.php',
    user_id: 3
  },
  {
    title: 'Get Better TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Results By Following 3 Simple Steps',
    post_contents: 'So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, ',
    post_url: 'http://www.example.org/',
    user_id: 4
  },
  {
    title: 'TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Iphone Apps',
    post_contents: ' Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.',
    post_url: 'https://bubble.example.com/arm/afternoon',
    user_id: 5
  },
  {
    title: 'The Ultimate Secret Of TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: 'Soaring through all the galaxies. In search of Earth, flying in to the night.',
    post_url: 'https://animal.example.com/belief.aspx?bear=addition&basketball=birthday',
    user_id: 6
  },
  {
    title: '5 Brilliant Ways To Use TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: 'Fighting evil and tyranny, with all his power, and with all of his might.',
    post_url: 'http://www.example.org/boy',
    user_id: 1
  },
  {
    title: "Don't Just Sit There! Start TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER",
    post_contents: "George Bush doesn't care about black puppets. Can you believe that the only reason the club is going under is because it's in a terrifying neighborhood?",
    post_url: 'https://www.example.edu/',
    user_id: 2
  },
  {
    title: 'Now You Can Have The TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Of Your Dreams – Cheaper/Faster Than You Ever Imagined',
    post_contents: 'Heart attack never stopped old big bear. A group of British builders operating outside the O.C.',
    post_url: 'https://www.example.com/alarm/belief?breath=birds&brake=apparatus',
    user_id: 3
  },
  {
    title: '10 Ways To Reinvent Your TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: "We'll have to find something to do so that people can look at you without wanting to kill themselves",
    post_url: 'http://www.example.com/bells.php',
    user_id: 3
  },
  {
    title: 'Quick and Easy Fix For Your TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: "Second-of-ly, I know you're the big marriage expert. Oh I'm sorry, I forgot, your wife is dead.",
    post_url: 'https://example.com/bird/approval',
    user_id: 5
  },
  {
    title: 'The Quickest & Easiest Way To TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: "That means brother in French. I don't know how I know that. I took four years of Spanish.",
    post_url: 'http://www.example.net/',
    user_id: 4
  },
  {
    title: 'How To Save Money with TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER?',
    post_contents: 'That was Tom Cruise, the actor. They said he was some kind of scientist.',
    post_url: 'http://www.example.net/bat/bike.aspx',
    user_id: 2
  },
  {
    title: '9 Ridiculous Rules About TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: 'The guy runs a prison, he can have any piece of ass he wants. I am going to my spin class. I thought you had vertigo.',
    post_url: 'https://www.example.com/ants',
    user_id: 2
  },
  {
    title: 'Learn How To Start TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER',
    post_contents: "Do you have any idea how often you say the word afraid? Well, I know I used it in the Jacuzzi." ,
    post_url: 'http://basketball.example.com/bait.html',
    user_id: 4
  },
  {
    title: '3 Ways You Can Reinvent TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Without Looking Like An Amateur',
    post_contents: "Buster's in what we like to call a light to no coma.",
    post_url: 'http://example.net/',
    user_id: 4
  },
  {
    title: 'TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER And Love Have 4 Things In Common',
    post_contents: "In laymans terms, it might be considered a very heavy nap. Excuse me, do these effectively hide my thunder? Chickens don't clap!",
    post_url: 'http://bomb.example.edu/',
    user_id: 3
  },
  {
    title: '5 Simple Steps To An Effective TECH JAVASCRIPT FULL-STACK DEVELOPER ENGINEER Strategy',
    post_contents: "I know, I just call her Annabelle cause she's shaped like a…she's the belle of the ball!",
    post_url: 'http://www.example.org/',
    user_id: 6
  },
 
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;