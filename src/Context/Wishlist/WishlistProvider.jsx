import React, { useEffect, useMemo, useState } from "react";
import WishlistContext from "./context";

const STORAGE_KEY = "app:wishlist:v1";

function readStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function writeStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // eslint-disable-next-line no-empty
  } catch {}
}

export default function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => readStorage());

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const api = useMemo(
    () => ({
      items,
      has: (id) => items.some((x) => String(x.id) === String(id)),
      add: (item) =>
        setItems((prev) => {
          const id = String(item?.id ?? item?.sku ?? item?.title);
          if (!id) return prev;
          if (prev.some((x) => String(x.id) === id)) return prev;
          const min = {
            id,
            title: item.title ?? "Untitled",
            price: item.price ?? 0,
            image: item.image ?? item.img ?? item.images?.[0] ?? "",
            brand: item.brand ?? "",
            sku: item.sku ?? id,
            addedAt: Date.now(),
          };
          return [min, ...prev];
        }),
      remove: (id) =>
        setItems((prev) => prev.filter((x) => String(x.id) !== String(id))),
      clear: () => setItems([]),
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={api}>{children}</WishlistContext.Provider>
  );
}
