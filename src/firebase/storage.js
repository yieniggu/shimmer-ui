import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const downloadImage = async (productId) => {
  const productsRef = ref(storage, `products/${productId}`);

  try {
    const url = await getDownloadURL(productsRef);
    return url;
  } catch (e) {
    console.error(e);
    return null;
  }
};
