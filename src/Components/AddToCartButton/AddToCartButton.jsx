import { useCart } from "../../Context/useCart";

function parsePrice(p) {
  if (typeof p === "number") return p;
  const n = Number(String(p).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function AddToCartButton({
  item,
  qty = 1,
  className = "btn-add",
  label = "أضِف إلى السلة",
  onAdded,
}) {
  const { addToCart, open } = useCart();

  const safeItem = {
    id: item?.id ?? item?.sku ?? item?.title,
    title: item?.title ?? "",
    price: parsePrice(item?.price),
    image: item?.image || item?.img || item?.images?.[0],
    brand: item?.brand,
    variant: item?.variant || item?.color || item?.size,
  };

  return (
    <button
      type="button"
      className={className}
      aria-label={`أضِف ${safeItem.title} إلى السلة`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!safeItem.id) {
          if (import.meta?.env?.DEV) console.warn("Missing item.id");
          return;
        }
        addToCart(safeItem, qty);
        open();
        onAdded?.();
      }}
    >
      {label}
    </button>
  );
}
