// src/Pages/Search/SearchResults.jsx
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query") || "";

  // TODO: اعمل هنا الفلترة/الفetch حسب نظامك
  return (
    <div className="container">
      <h1>نتائج البحث عن: {query}</h1>
      {/* اعرض منتجاتك هنا */}
    </div>
  );
}
