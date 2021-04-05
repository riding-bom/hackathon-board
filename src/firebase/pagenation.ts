import { firestore } from "./firebase";

const pagenation = () => async () => {
  const postsCollectionRef = firestore.collection("posts");

  const first = postsCollectionRef.orderBy("id").limit(10);

  const res = await first.get();
  const page1 = res.docs;

  while (res.docs.length > 10) {}

  const lastVisible = page1[page1.length - 1];

  const next = firestore
    .collection("posts")
    .orderBy("id")
    .startAfter(lastVisible)
    .limit(10);

  console.log(first, next);

  const res2 = await next.get();
  const page2 = res2.docs;

  return [page1.map((v) => v.data()), page2.map((v) => v.data())];
};

export default pagenation;
