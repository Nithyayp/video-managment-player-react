import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
  buckets: [
    {
      id: nanoid(),
      name: "Devotional Songs",
      cards: [
        {
          id: nanoid(),
          title: "Lord Ganesha",
          link: "https://www.youtube.com/embed/ym4o5F8ncY0",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Learning",
      cards: [
        {
          id: nanoid(),
          title: "Science",
          link: "https://www.youtube.com/embed/pVDqiYIxvdA",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Tech Videos",
      cards: [
        {
          id: nanoid(),
          title: "AI",
          link: "https://www.youtube.com/embed/oV74Najm6Nc",
        },

        {
          id: nanoid(),
          title: "Machine Learning",
          link: "link3",
        },
      ],
    },
    {
      name: "Food Videos",
      id: nanoid(),
      cards: [
        {
          id: nanoid(),
          title: "Coffee Bean",
          link: "https://www.youtube.com/embed/fDdF6VXEU2c",
        },
        {
          id: nanoid(),
          title: "Pizza",
          link: "https://www.youtube.com/embed/NAI8mK53D00",
        },
      ],
    },
  ],
};

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: "new bucket",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "deelele");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer