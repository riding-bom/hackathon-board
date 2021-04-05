import { post } from "../constance/type";
import { firestore } from "./firebase";

const postsCollectionRef = firestore.collection("posts");
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const addPost = (newPost: post) => {
  postsDocRef(newPost.id + "").set(newPost);
  console.log("addPost", newPost);
};

const getAllPost = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .sort((a, b) => (a.id > b.id ? -1 : 1));
  return list;
};

const getPoem = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "poem")
    .sort((a, b) => (a.id > b.id ? -1 : 1));
  return list;
};

const getNovel = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "novel")
    .sort((a, b) => (a.id > b.id ? -1 : 1));
  return list;
};

const getEssay = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "essay")
    .sort((a, b) => (a.id > b.id ? -1 : 1));
  return list;
};

const getPost = async (id: string) => {
  const snapshot = await postsDocRef(id).get();
  return snapshot;
};

export { addPost, getAllPost, getPoem, getNovel, getEssay, getPost };
