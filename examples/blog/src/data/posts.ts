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

const cover = (seed: string, alt: string, caption?: string) => ({
  src: `https://picsum.photos/seed/${seed}/1600/900`,
  alt,
  caption,
})

export const posts: Post[] = [
  {
    slug: "letters-from-the-quiet-city",
    title: "Letters from the Quiet City",
    description:
      "On the small hours, the lamp at the end of the corridor, and the habit of writing to no one in particular.",
    date: "2026-04-21",
    author: "Erik Satie",
    tags: ["essay", "evening"],
    cover: cover(
      "quiet-city",
      "An empty boulevard at dusk under amber street lamps",
      "Boulevard, 4:12 AM",
    ),
    excerpt:
      "The city, when it is finally quiet, becomes a kind of correspondent. You leave the window cracked open and it writes to you in the language of distant traffic and cooling pipes.",
    body: [
      "The city, when it is finally quiet, becomes a kind of correspondent. You leave the window cracked open and it writes to you in the language of distant traffic and cooling pipes. The first letter always arrives a little after three: a single car at the far end of the street, the driver invisible behind the headlights, going somewhere private at the only hour the streetlights will allow.",
      "I used to think the small hours were for solving problems. Now I think they are for setting problems down for the night, like cups returned to a high shelf. You will lift them again at noon, and they will still be heavy, but the handle will have cooled.",
      "There is a particular kind of paragraph that only writes itself when no one is awake to read it. It is unhurried, slightly serif, content to take a long turn through a sentence before arriving anywhere in particular. It is the kind of sentence a hallway makes when the lights go off one by one and only the last lamp at the end stays on, golden and absurdly dignified, as if it knew you would be passing through.",
      "I am sending this from that lamp. The city is still writing. I will keep the window open.",
    ],
  },
  {
    slug: "a-field-guide-to-slow-afternoons",
    title: "A Field Guide to Slow Afternoons",
    description:
      "How to recognise the species of an unhurried Sunday, with notes on rituals, weather, and the correct number of cups.",
    date: "2026-04-08",
    author: "Claude Debussy",
    tags: ["essay", "ritual"],
    cover: cover(
      "slow-afternoon",
      "Sunlight on a wooden table with a half-full coffee cup",
      "Linden table, 3:47 PM",
    ),
    excerpt:
      "There are afternoons that arrive already finished, and there are afternoons that arrive empty, waiting to be furnished. The slow ones are the second kind — they are rooms, not appointments.",
    body: [
      "There are afternoons that arrive already finished, and there are afternoons that arrive empty, waiting to be furnished. The slow ones are the second kind — they are rooms, not appointments. You walk into them carrying very little, and you do not leave for some time.",
      "The correct number of cups is two. One is for the drink you are currently having; the other is for the drink you intend to have, which you will not in fact have, because you will be reading. The second cup is honest about intentions and is, in this way, a kindness.",
      "Light is a moveable property. Move with it. A chair that was good at noon may be wrong by four, and there is no shame in standing up and going to the other side of the room. The shame is in arguing with the sun.",
      "By six the afternoon ends in the same colour as a cooled brass kettle. You will not have done what you set out to do. You will instead have done what the afternoon required, which is harder to name and easier to remember.",
    ],
  },
  {
    slug: "notebooks-of-an-idle-librarian",
    title: "Notebooks of an Idle Librarian",
    description:
      "Marginalia from a year of cataloguing a private library that nobody, including the librarian, intended to assemble.",
    date: "2026-03-19",
    author: "Maurice Ravel",
    tags: ["notebook", "archives"],
    cover: cover(
      "library",
      "Tall library shelves lit by a single hanging lamp",
      "West stack, third aisle",
    ),
    excerpt:
      "A private library is what happens when you stop arguing with the books you keep. Mine began by accident and was catalogued the same way.",
    body: [
      "A private library is what happens when you stop arguing with the books you keep. Mine began by accident and was catalogued the same way — by colour, then by mood, then briefly by author, then by the small disasters each book had survived (water, sun, the inside of a coat pocket, a long bus ride).",
      "The most honest classification is by reading. Books I have read live on the lower shelf, because I revisit them as one revisits a kitchen. Books I have not read live on the higher shelf, because anticipation is best when it requires a step-stool.",
      "Marginalia, I have decided, is not vandalism. It is a record of attention. A book that has been read carefully looks like a book that has been argued with, gently, in pencil, by someone who loved it enough to disagree.",
      "If a library is well kept, it should be possible to fall asleep in it. Mine passes this test, occasionally, by accident, around four in the afternoon, between the poetry and the maps.",
    ],
  },
  {
    slug: "late-night-reading-at-the-harbour",
    title: "Late-Night Reading at the Harbour",
    description:
      "On lighthouses, the patience of moored boats, and a paperback I have been pretending to finish since October.",
    date: "2026-02-27",
    author: "Frédéric Chopin",
    tags: ["essay", "harbour"],
    cover: cover(
      "harbour",
      "A small harbour at night with a distant lighthouse beam",
      "North quay, 11:48 PM",
    ),
    excerpt:
      "The harbour at night is mostly a kind of patience. The boats are tied up to the idea of morning. I sit on the bench at the end of the quay and read by the light of two streetlamps and one lighthouse.",
    body: [
      "The harbour at night is mostly a kind of patience. The boats are tied up to the idea of morning. I sit on the bench at the end of the quay and read by the light of two streetlamps and one lighthouse, which rotates with the same unhurried disinterest as a teacher walking the aisles of an exam hall.",
      "The paperback in question is the kind of novel that does not advertise its intentions. It opens with a man arriving at a station, and it closes, three hundred pages later, with the same man at the same station, slightly altered. Between these two stations, almost nothing happens, in the way that almost nothing happens to the harbour between two beams of the lighthouse.",
      "I have been on page two hundred and eleven since October. This is not a failure of reading. It is a long mooring.",
    ],
  },
  {
    slug: "music-for-empty-galleries",
    title: "Music for Empty Galleries",
    description:
      "Notes on the recordings I keep on the small speaker by the window, and what they make of the rooms they share.",
    date: "2026-02-04",
    author: "Federico Mompou",
    tags: ["music", "ritual"],
    cover: cover(
      "gallery",
      "An empty gallery room with white walls and a single bench",
      "East room, before opening",
    ),
    excerpt:
      "I keep a small speaker on the window sill. The room behind it is, for most of the day, an empty gallery — and I have learned that the recordings I play decide what the gallery is showing.",
    body: [
      "I keep a small speaker on the window sill. The room behind it is, for most of the day, an empty gallery — and I have learned that the recordings I play decide what the gallery is showing. A nocturne, and the bare floor becomes a stretch of polished stone in some institution that closes at six. A field recording of rain, and the room is suddenly a courtyard.",
      "Satie, of course, is the most generous tenant. He arrives quietly, rearranges nothing, leaves the windows the way he found them. The Gymnopédies are sometimes described as slow, which is unfair to slowness; they are not slow, they are simply unhurried, the way a long walk is unhurried.",
      "The empty gallery, like the slow afternoon, is a room and not an appointment. The music is its only guest until you arrive.",
    ],
  },
  {
    slug: "a-pocket-atlas-of-cooling-rooms",
    title: "A Pocket Atlas of Cooling Rooms",
    description:
      "Six rooms I have known after they had been left, and the small geographies of the heat they kept.",
    date: "2026-01-12",
    author: "Gabriel Fauré",
    tags: ["notebook", "evening"],
    cover: cover(
      "rooms",
      "A dim room lit only by the last light through a tall window",
      "Studio, last light",
    ),
    excerpt:
      "Rooms cool unevenly. The radiator side will hold its heat for an hour after the heat is gone; the window side will already be the temperature of the street.",
    body: [
      "Rooms cool unevenly. The radiator side will hold its heat for an hour after the heat is gone; the window side will already be the temperature of the street. To walk the diagonal of a cooling room is to cross a small climate in six steps.",
      "I have begun a pocket atlas of these rooms. The studio above the bookshop, which cools from the floor upwards. The reading room at the library, which cools from the windows inwards, towards the lamp. The hallway of the house I grew up in, which never seemed to cool at all, although that may have been a property of the hallway and not the house.",
      "An atlas is, in the end, a record of attention paid to places that did not ask to be noticed. I am still adding pages.",
    ],
  },
]

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
