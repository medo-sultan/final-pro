import { useContext } from "react";
import WishlistContext from "./Wishlist/context";

export default function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within <WishlistProvider>");
  }
  return ctx;
}
