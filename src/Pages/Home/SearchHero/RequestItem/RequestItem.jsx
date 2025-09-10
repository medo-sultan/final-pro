import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./RequestItem.css";

export default function RequestItem() {
  const location = useLocation();
  const initialQuery = location.state?.query || "";

  const [form, setForm] = useState({
    name: initialQuery, // اسم/وصف مختصر للطلب
    brand: "",
    details: "",
    phone: "",
    whatsapp: "",
    email: "",
    image: null,
    imagePreview: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files?.[0]) {
      const file = files[0];
      setForm((s) => ({
        ...s,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.name.trim()) return "من فضلك اكتب اسم/وصف للطلب.";
    if (!form.details.trim()) return "اكتب المواصفات المطلوبة بالتفصيل.";
    if (!form.phone.trim() && !form.whatsapp.trim() && !form.email.trim())
      return "اترك لنا وسيلة تواصل واحدة على الأقل (هاتف/واتساب/إيميل).";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError("");

    // TODO: استبدل الجزء التالي بإرسال حقيقي لباك إندك (fetch/axios)
    // مثال تجميعة بيانات:
    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("brand", form.brand);
    payload.append("details", form.details);
    payload.append("phone", form.phone);
    payload.append("whatsapp", form.whatsapp);
    payload.append("email", form.email);
    if (form.image) payload.append("image", form.image);

    // await fetch("/api/requests", { method: "POST", body: payload });

    setSent(true);
  };

  const openWhatsApp = () => {
    const number = form.whatsapp.replace(/\D/g, ""); // إزالة مسافات/رموز
    if (!number) return;
    const msg =
      `طلب غير متاح أود توفيره:\n- الاسم/الوصف: ${form.name}\n- الماركة: ${form.brand}\n` +
      `- المواصفات: ${form.details}\n- الهاتف: ${form.phone}\n- الإيميل: ${form.email}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  if (sent) {
    return (
      <section className="req">
        <div className="req__card">
          <h2>تم استلام طلبك ✅</h2>
          <p>شكرًا لك! سنراجع المواصفات ونتواصل معك في أقرب وقت.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="req">
      <div className="req__card">
        <h2>الطلب غير متوفر حاليًا</h2>
        <p className="req__subtitle">
          لكن نقدر نوفره لك. من فضلك أدخل التفاصيل التالية:
        </p>

        {error && <div className="req__error">{error}</div>}

        <form className="req__form" onSubmit={handleSubmit}>
          <label>
            اسم/وصف الطلب
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="مثال: لابتوب MSI Katana بشاشة 144Hz"
              required
            />
          </label>

          <label>
            الماركة (اختياري)
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={onChange}
              placeholder="MSI / Apple / Samsung..."
            />
          </label>

          <label>
            المواصفات بالتفصيل
            <textarea
              name="details"
              value={form.details}
              onChange={onChange}
              placeholder="الموديل، السعة، اللون، المقاس، أي روابط مرجعية..."
              rows={5}
              required
            />
          </label>

          <div className="req__row">
            <label>
              رقم الهاتف
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="010xxxxxxxx"
              />
            </label>

            <label>
              واتساب (مع كود الدولة)
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={onChange}
                placeholder="2010xxxxxxx+"
              />
            </label>
          </div>

          <label>
            البريد الإلكتروني
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="name@example.com"
            />
          </label>

          <label className="req__file">
            صورة للطلب (اختياري)
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={onChange}
            />
          </label>

          {form.imagePreview && (
            <div className="req__preview">
              <img src={form.imagePreview} alt="preview" />
            </div>
          )}

          <div className="req__actions">
            <button type="submit" className="req__btn">
              إرسال الطلب
            </button>
            <button
              type="button"
              className="req__btn--ghost"
              onClick={openWhatsApp}
            >
              رسالة واتساب فورية
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
