export type Post = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  cover: {
    src: string
    alt: string
    caption?: string
  }
  excerpt: string
  body: string[]
}

const coverFor = (slug: string, alt: string, caption?: string) => ({
  src: `${import.meta.env.BASE_URL}covers/${slug}.jpg`,
  alt,
  caption,
})

export const posts: Post[] = [
  {
    slug: "above-the-crossing",
    title: "Above the Crossing",
    description:
      "Notes from the height of a city footbridge, where everything is in motion and nothing seems to be.",
    date: "2026-04-21",
    author: "Gabriel Fauré",
    tags: ["essay", "city"],
    cover: coverFor(
      "above-the-crossing",
      "A city footbridge view of a Tokyo crossing in mid-morning light, with shop signs along both sides of the street",
      "Footbridge, mid-morning",
    ),
    excerpt:
      "Seen from the height of a footbridge a city pretends to be slow. The traffic light counts down, no one runs, the white van is already where it was always going.",
    body: [
      "Seen from the height of a footbridge a city pretends to be slow. The traffic light counts down, no one runs, the white van is already where it was always going. The shop signs are smaller than they ought to be — 焼肉, 寿司, クリニック — and the buildings on the far side reflect their own neighbours back at a slightly different angle, as if the street had quietly doubled itself for the morning.",
      "It is not, of course, slow. The bridge is the trick: from this height every step has time to belong to someone. The man with the orange courier bag, the four students walking abreast without looking at each other, the woman crossing diagonally even though there is a perfectly serviceable straight line. None of them is in a hurry, and yet they are all leaving, and in two minutes a different cast will be doing exactly the same thing in slightly different shoes.",
      "I think the best argument for the footbridge is that it lets you forget which direction you came from. From the staircase on either side you arrive into the same uneventful middle of the same uneventful crossing, and the city, generously, declines to ask you to choose.",
      "When I come down the stairs I will be one of the figures someone else is failing to keep track of from above. This is comforting, in a way that I would have called pastoral, if pastoral were ever made of asphalt and signs in three different languages.",
    ],
  },
  {
    slug: "on-small-commutes",
    title: "On Small Commutes",
    description:
      "A rope walk, a wire platform, and the patient choreography of a thirty-centimetre journey.",
    date: "2026-04-08",
    author: "Claude Debussy",
    tags: ["notebook", "observation"],
    cover: coverFor(
      "on-small-commutes",
      "A cluster of white mice gathered on a wire platform suspended between rope bridges, with foliage out of focus behind them",
      "Mice on a rope walk",
    ),
    excerpt:
      "Twelve white mice on a wire platform, taking turns over a rope bridge that is exactly the length of a slow thought. The arrangement is collective; the journey is individual.",
    body: [
      "Twelve white mice on a wire platform, taking turns over a rope bridge that is exactly the length of a slow thought. The arrangement is collective; the journey is individual. One mouse advances perhaps two centimetres, considers, retreats, advances again. The rest, in the meantime, sleep in a small pale heap on the far end of the platform, as if to keep the destination warm.",
      "I have stood here longer than I will admit. Watching small commutes is the kind of thing one does in a city when one is briefly out of patience for the larger commutes. Train, escalator, hallway, desk — versus rope, plank, rope. Both are journeys of millimetres; only one is admitted to be charming.",
      "What I like about the mice is that they do not pretend the bridge is anything other than what it is. They cross it, or they do not. They do not check the time. They do not pretend, for the sake of the platform, that they were always going to cross.",
      "By the time I leave, the bridge is briefly straight, and somewhere on the far end there is a sleepy white heap that has not, in any meaningful sense, moved an inch in twenty minutes. The journey, I think, is preserved.",
    ],
  },
  {
    slug: "the-grammar-of-bark",
    title: "The Grammar of Bark",
    description:
      "A field note from a wood yard, on the marginalia logs leave behind when you stack them long enough.",
    date: "2026-03-19",
    author: "Maurice Ravel",
    tags: ["notebook", "texture"],
    cover: coverFor(
      "the-grammar-of-bark",
      "Stacked logs photographed close to the bark, where the rough surface catches afternoon sun",
      "Bark, in the wood yard",
    ),
    excerpt:
      "Bark, after a winter's cutting, is a kind of script. The cuts leave the page; the years stay. Stack the logs and you assemble, by accident, a small library.",
    body: [
      "Bark, after a winter's cutting, is a kind of script. The cuts leave the page; the years stay. Stack the logs and you assemble, by accident, a small library — each spine a chapter of the tree's slow argument with the weather, abridged into rings and fissures.",
      "Up close, the surfaces refuse to repeat. One log is shedding bark in long strips like a careless reader pulling bookmarks; another keeps its bark tight, as if reluctant to be quoted. A third has lost almost everything and shows you only the pale wood underneath, the bare paragraph after the citation has been removed.",
      "If there is a grammar here it is the grammar of marginalia — comments that survived the binding because nothing inside cared enough to clean them off. The forest's editor was, you sense, distracted.",
      "I find this consoling. We talk about reading nature as though the text were the leaves, or the river, or the long view across the valley. The text, more often, is the cut surface in the wood yard, the inch of bark that came off in your hand, the chapter heading you only saw because someone else stopped reading.",
    ],
  },
  {
    slug: "the-shape-of-a-web",
    title: "The Shape of a Web",
    description:
      "On a small orb-weaver in the garden, the patience of geometry, and the inconvenience of being interested in anything for long.",
    date: "2026-02-27",
    author: "Frédéric Chopin",
    tags: ["essay", "garden"],
    cover: coverFor(
      "the-shape-of-a-web",
      "A small orb-weaver spider at the centre of its web, with green foliage out of focus behind it",
      "Web, leaning into the green",
    ),
    excerpt:
      "A spider in the garden has built a web at the height of a person's eye, which is either presumptuous or naïve — possibly both. I cannot say I have ever seen a web at this height that survived a whole afternoon.",
    body: [
      "A spider in the garden has built a web at the height of a person's eye, which is either presumptuous or naïve — possibly both. I cannot say I have ever seen a web at this height that survived a whole afternoon. And yet here it is, mid-morning, holding three or four damp particulars of the previous night and a small wrapped thing the spider is no longer interested in.",
      "It is the shape that always surprises me. From a distance the geometry looks decisive; up close the spiral wobbles like handwriting, and the radial threads do not, in fact, agree about where the centre is. The web is a compromise between the spider and the wind, like all good plans.",
      "I have stood here long enough to be embarrassed about how long I have stood here. The spider, who has stronger commitments, has not moved. Behind the web the garden has gone slightly more green than I remember it being a minute ago — bokeh, photographers call it; the rest of us just say the back of things.",
      "It would be tidy to end here with an observation about patience. I prefer to end with the spider — already, I think, drafting the next sentence of the web in the small wind.",
    ],
  },
  {
    slug: "tyre-dragons",
    title: "Tyre Dragons",
    description:
      "An afternoon at a strange municipal park, where the playground equipment turned out, mostly, to be eating itself.",
    date: "2026-02-04",
    author: "Federico Mompou",
    tags: ["essay", "park"],
    cover: coverFor(
      "tyre-dragons",
      "An urban park built from stacked tyres, including a tall tyre creature with arms and an open mouth, with apartment blocks behind",
      "Tyre dragons, in low afternoon light",
    ),
    excerpt:
      "The tyre dragons are larger than I had expected. The largest has its mouth open in something between a yawn and a laugh, and is wearing, today, a small red ribbon around its neck like a courteous warning.",
    body: [
      "The tyre dragons are larger than I had expected. The largest has its mouth open in something between a yawn and a laugh, and is wearing, today, a small red ribbon around its neck like a courteous warning. It is built from old truck tyres stacked seven, maybe eight, deep, and someone has given it eyes large enough to be seen from the apartment blocks on the far side of the lot.",
      "The park is empty on a weekday afternoon, in the way that small municipal parks are only ever empty at exactly the wrong hour — the children all elsewhere, the older neighbours not yet out for their evening loop. The dragons are therefore, briefly, the only audience for one another, and they appear to be enjoying it.",
      "I have read that this kind of park is a Japanese postwar invention: a way of putting the country's accumulated rubber to work as a playground that could not, in any conceivable accident, fail badly. Whether or not that is the full story, it explains the absurdity politely.",
      "Música callada, the empty-gallery sort of music, is what I keep wanting to call the soundtrack of the place. The tyre dragons are doing something similar with rubber. They are filling an empty lot with the rumour of children, on the assumption that the children will be back.",
    ],
  },
  {
    slug: "an-afternoon-with-a-sleeping-cat",
    title: "An Afternoon with a Sleeping Cat",
    description:
      "Notes from the only chair the cat will permit me to share, on the small architecture of a cat in mid-yawn.",
    date: "2026-05-10",
    author: "Erik Satie",
    tags: ["essay", "interior"],
    cover: coverFor(
      "an-afternoon-with-a-sleeping-cat",
      "A calico cat upside down on a grey couch, mid-yawn, with one paw lifted",
      "An afternoon yawn",
    ),
    excerpt:
      "The cat is upside down on the grey couch and is yawning, briefly, in a way that suggests yawning is a thing one is born already practised at. I am, as usual, the visitor.",
    body: [
      "The cat is upside down on the grey couch and is yawning, briefly, in a way that suggests yawning is a thing one is born already practised at. I am, as usual, the visitor. The couch is hers; the afternoon is hers; the rectangle of sun on the floor between the kitchen and the table is hers, and I am here on a kind of long, unwritten visa.",
      "Cats sleep in pieces. There is the deep part, in which the paws give small signals to whatever they are dreaming of, and the surface part, in which one ear stays on duty for the kettle. This cat is doing the second kind. She is asleep enough to look comfortable and awake enough to be photographed by anyone unwise enough to interrupt — which is to say, awake enough to be photographed by me.",
      "I had meant to write something else this afternoon. The cat, by being where she is, has settled the matter. The room is not a study now. It is a cat's room with a guest in it.",
      "She lifts a paw. She covers, then uncovers, an eye. The yawn finishes. Outside, the light goes the colour of the kettle.",
    ],
  },
]

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
