import React, { useState } from "react";
import {
  X,
  Minus,
  Plus,
  MapPin,
  CreditCard,
  Truck,
  CalendarDays,
  ChevronLeft,
  Percent,
  NotebookPen,
} from "lucide-react";

/**
 * نافذة جانبية للدفع (TailwindCSS)
 */
export default function CheckoutDrawer({
  isOpen,
  onClose,
  item,
  qty: qtyProp = 1,
  onQtyChange,
  onConfirm,
}) {
  const [qty, setQty] = useState(qtyProp || 1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [note, setNote] = useState("");

  const price = Number(item?.price) || 0;
  const subtotal = price * qty;
  const shipping = 0;
  const taxRate = 0;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;
  const canConfirm = !!paymentMethod && qty > 0;

  const changeQty = (delta) => {
    const q = Math.max(1, qty + delta);
    setQty(q);
    onQtyChange?.(q);
  };

  return (
    <div
      dir="rtl"
      className={`fixed inset-0 z-[100] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-[520px] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-4 border-b">
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-1.5 hover:bg-gray-100 text-gray-600"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {item?.image ? (
                <img
                  src={item.image}
                  alt={item?.title}
                  className="w-12 h-12 rounded-md object-cover border"
                />
              ) : null}
              <div className="min-w-0">
                <div className="text-sm text-gray-500 capitalize">
                  {item?.brand || "sistema"}
                </div>
                <div className="font-semibold leading-snug line-clamp-2">
                  {item?.title}
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[11px] font-bold">
                    إكسبريس
                  </span>
                  <CalendarDays className="w-4 h-4" />
                  <span>{item?.etaLabel || "احصل عليها خلال 2–3 أيام"}</span>
                </div>
              </div>
              <div className="ms-auto flex items-center gap-2 bg-gray-50 rounded-full border px-2 py-1">
                <button
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={() => changeQty(-1)}
                  aria-label="إنقاص الكمية"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-6 text-center font-semibold">{qty}</span>
                <button
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={() => changeQty(1)}
                  aria-label="زيادة الكمية"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Delivery */}
          <section className="rounded-2xl border p-4">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold">التوصيل</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between rounded-xl border p-3 hover:bg-gray-50">
                <div className="flex items-center gap-2 min-w-0">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate"></div>
                    <div className="text-xs text-gray-500">
                      يمكنك تغيير العنوان
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs">
                  i
                </span>
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl border p-3 hover:bg-gray-50 text-start">
                  <div className="text-sm font-medium mb-1">
                    شخص آخر يستلم الطلب
                  </div>
                  <div className="text-xs text-gray-500">
                    أضف مستلمًا بديلاً
                  </div>
                </button>
                <button className="rounded-xl border p-3 hover:bg-gray-50 text-start">
                  <div className="text-sm font-medium mb-1">
                    اركبها عند الباب
                  </div>
                  <div className="text-xs text-gray-500">
                    اترك الطلب أمام الباب
                  </div>
                </button>
              </div>
              <div className="rounded-xl border p-3">
                <div className="flex items-center gap-2 mb-2">
                  <NotebookPen className="w-4 h-4 text-gray-600" />
                  <div className="text-sm font-medium">ملاحظات التوصيل</div>
                </div>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="مثال: اتصل قبل الوصول بـ 10 دقائق"
                  className="w-full resize-none rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  rows={2}
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-2xl border p-4">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold">الدفع</h3>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setPaymentMethod("cod")}
                className={`w-full rounded-xl border p-3 text-start hover:bg-gray-50 ${
                  paymentMethod === "cod" ? "ring-2 ring-gray-900/10" : ""
                }`}
              >
                الدفع عند الاستلام
              </button>
              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full rounded-xl border p-3 text-start hover:bg-gray-50 ${
                  paymentMethod === "card" ? "ring-2 ring-gray-900/10" : ""
                }`}
              >
                بطاقة ائتمانية/مدى
              </button>
            </div>
          </section>

          {/* Discount */}
          <section className="rounded-2xl border p-4">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold">الخصومات والقسائم</h3>
            </div>
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                placeholder="أدخل كود الخصم"
              />
              <button className="rounded-xl px-4 py-2 bg-gray-900 text-white text-sm font-semibold hover:bg-black">
                تطبيق
              </button>
            </div>
          </section>

          {/* Order summary */}
          <section className="rounded-2xl border p-4">
            <h3 className="font-semibold mb-3">
              ملخص الطلب{" "}
              <span className="text-sm text-gray-500">(منتج واحد)</span>
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">المجموع الفرعي</span>
                <span>{subtotal.toLocaleString("ar-EG")} ج.م</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">رسوم الشحن</span>
                <span className="text-emerald-600 font-semibold">مجانا</span>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between text-lg font-extrabold">
                <span className="text-gray-800">
                  المجموع{" "}
                  <span className="text-sm font-normal text-gray-500">
                    شامل الضريبة
                  </span>
                </span>
                <span>{total.toLocaleString("ar-EG")} ج.م</span>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <div className="p-4 border-t bg-white">
          <button
            disabled={!canConfirm}
            onClick={() =>
              canConfirm && onConfirm?.({ qty, paymentMethod, note })
            }
            className={`w-full rounded-2xl py-3 font-extrabold text-white transition ${
              canConfirm
                ? "bg-gray-900 hover:bg-black"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            تأكيد الطلب • {total.toLocaleString("ar-EG")} ج.م
          </button>
        </div>
      </aside>
    </div>
  );
}
