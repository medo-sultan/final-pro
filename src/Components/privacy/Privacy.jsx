import React, { useMemo, useState } from "react";
import "./Privacy.css";

export default function PrivacyPolicy({
  company = "SULTAN STORE",
  email = "ModtherSultan@gmail.com",
  effectiveDate = new Date().toISOString().slice(0, 10),
}) {
  const [lang, setLang] = useState("ar");
  const t = useMemo(() => {
    const ar = {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث",
      intro: `نحن في ${company} نحترم خصوصيتك. تشرح هذه الصفحة أنواع البيانات التي قد نجمعها عند استخدامك لخدماتنا وكيفية استخدامها وحمايتها وحقوقك بشأنها.`,
      collectTitle: "البيانات التي نجمعها",
      collectList: [
        "بيانات حساب أساسية (الاسم، البريد الإلكتروني، رقم الهاتف).",
        "بيانات فنية (الكوكيز، عنوان IP، نوع المتصفح والجهاز).",
        "بيانات الاستخدام لتحسين الأداء وتجربة المستخدم.",
      ],
      useTitle: "كيف نستخدم البيانات",
      useList: [
        "لتقديم وتشغيل الخدمات وإدارة الحسابات.",
        "للتواصل بشأن التحديثات والدعم والعروض ذات الصلة (مع إمكانية إلغاء الاشتراك).",
        "للتحليل وتحسين الأداء ومنع الاحتيال والامتثال القانوني.",
      ],
      cookiesTitle: "ملفات تعريف الارتباط (Cookies)",
      cookiesText:
        "نستخدم الكوكيز لتحسين الأداء وتخصيص التجربة وقياس الاستخدام. يمكنك إدارتها من إعدادات المتصفح؛ قد يؤثر التعطيل على بعض الميزات.",
      shareTitle: "مشاركة البيانات",
      shareText:
        "لا نبيع بياناتك. قد نشارك بياناتًا محدودة مع مزودي خدمات موثوقين لأغراض تشغيلية (الاستضافة، التحليلات، بوابات الدفع، المراسلة) بموجب اتفاقيات حماية البيانات.",
      rightsTitle: "حقوقك",
      rightsList: [
        "الوصول إلى بياناتك أو تصحيحها أو حذفها.",
        "طلب تقييد المعالجة أو الاعتراض عليها حيث يسمح القانون.",
        "سحب الموافقة عندما تعتمد المعالجة عليها.",
      ],
      securityTitle: "الأمان",
      securityText:
        "نتبع ممارسات تقنية وتنظيمية معقولة لحماية البيانات، مع الإقرار بأن أي نقل إلكتروني ليس آمنًا بنسبة 100٪.",
      changesTitle: "التغييرات على هذه السياسة",
      changesText:
        'قد نحدّث هذه السياسة دوريًا. يسري الإصدار الجديد من تاريخ "آخر تحديث" أعلاه.',
      contactTitle: "اتصل بنا",
      contactTextPrefix: "لأي استفسار متعلق بالخصوصية، راسلنا على",

      payTitle: "الدفع والمعاملات",
      payText:
        "إذا قمت بعملية شراء، فقد نعالج بيانات الدفع عبر مزودي خدمة دفع آمنين (مثل Stripe/PayPal/Paymob). يتم تخزين ومعالجة بيانات بطاقتك لدى مزود الدفع فقط ولا نخزن أرقام البطاقات كاملة لدينا. نحتفظ بسجلات الفواتير والمعاملات للأغراض المحاسبية والامتثال.",

      analyticsTitle: "التحليلات والتتبّع",
      analyticsText:
        "قد نستخدم أدوات تحليلات مثل Google Analytics 4 (GA4) ووسوم قياس مثل Meta Pixel لقياس أداء الموقع وتحسين الحملات. يمكنك استخدام إعدادات المتصفح أو إعدادات الموافقة لإدارة ملفات الارتباط التحليلية والتتبّعية.",

      mobileTitle: "تطبيقات الأجهزة المحمولة",
      mobileText:
        "عند استخدام تطبيقاتنا، قد نجمع معرّفات الجهاز وبيانات الأعطال والإشعارات الفورية (إن فعّلتها). يمكنك إيقاف الإشعارات من إعدادات نظام التشغيل. قد نطلب أذونات (مثل الكاميرا/الموقع) لتقديم ميزات، ويمكنك رفضها أو إيقافها لاحقًا.",

      retentionTitle: "مدة الاحتفاظ بالبيانات",
      retentionText:
        "نحتفظ بالبيانات للمدة اللازمة لتحقيق الأغراض المذكورة أو وفقًا لمتطلبات قانونية/محاسبية، ثم نقوم بحذفها أو إخفاء هويتها بشكل آمن.",

      processorsTitle: "مزودو الخدمات (أمثلة)",
      processorsList: [
        "الاستضافة والبنية التحتية (مثال: Vercel/AWS).",
        "التحليلات (مثال: Google Analytics 4).",
        "التسويق والقياس (مثال: Meta Pixel).",
        "بوابات الدفع (مثال: Stripe، PayPal، Paymob).",
        "إرسال البريد (مثال: SendGrid/Mailgun).",
      ],

      consentTitle: "إدارة الموافقة",
      consentText:
        "قد نعرض لافتة موافقة للكوكيز/التتبّع. متابعة التصفح تعني موافقتك على الفئات المحددة. يمكنك تعديل تفضيلاتك في أي وقت عبر إعدادات الخصوصية إن توفرت.",

      toggleLabel: "English",
      toc: "جدول المحتويات",
      company: "الشركة",
    };

    const en = {
      title: "Privacy Policy",
      updated: "Last Updated",
      intro: `At ${company}, we respect your privacy. This page explains what data we may collect when you use our services, how we use and protect it, and the rights you have.`,
      collectTitle: "Data We Collect",
      collectList: [
        "Account details (name, email, phone).",
        "Technical data (cookies, IP address, device/browser info).",
        "Usage data to improve performance and user experience.",
      ],
      useTitle: "How We Use Data",
      useList: [
        "To provide and operate the services and manage accounts.",
        "To communicate updates, support, and relevant offers (opt-out available).",
        "For analytics, performance improvements, fraud prevention, and legal compliance.",
      ],
      cookiesTitle: "Cookies",
      cookiesText:
        "We use cookies to enhance performance, personalize experience, and measure usage. You can manage cookies in your browser; disabling some may impact features.",
      shareTitle: "Data Sharing",
      shareText:
        "We do not sell your data. We may share limited data with trusted processors for operational purposes (hosting, analytics, payments, messaging) under data-protection agreements.",
      rightsTitle: "Your Rights",
      rightsList: [
        "Access, correct, or delete your data.",
        "Request restriction or object to processing where applicable.",
        "Withdraw consent where processing relies on it.",
      ],
      securityTitle: "Security",
      securityText:
        "We implement reasonable technical and organizational safeguards, acknowledging no electronic transmission is 100% secure.",
      changesTitle: "Changes to This Policy",
      changesText:
        'We may update this policy periodically. The new version takes effect from the "Last Updated" date above.',
      contactTitle: "Contact Us",
      contactTextPrefix: "For privacy inquiries, email",

      payTitle: "Payments & Transactions",
      payText:
        "If you make a purchase, payment data may be processed via secure payment gateways (e.g., Stripe/PayPal/Paymob). Card details are stored and processed by the gateway; we do not store full card numbers. We retain invoices/transaction records for accounting and compliance.",

      analyticsTitle: "Analytics & Tracking",
      analyticsText:
        "We may use analytics tools like Google Analytics 4 (GA4) and measurement tags like Meta Pixel to evaluate performance and optimize campaigns. You can manage analytics/tracking cookies via your browser or consent settings.",

      mobileTitle: "Mobile Apps",
      mobileText:
        "When using our apps, we may collect device identifiers, crash data, and push-notification tokens (if enabled). You can disable notifications in OS settings. We may request permissions (camera/location) to deliver features; you can decline or revoke later.",

      retentionTitle: "Data Retention",
      retentionText:
        "We keep data only as long as necessary for the purposes stated or as required by law/accounting, then delete or anonymize it securely.",

      processorsTitle: "Processors (Examples)",
      processorsList: [
        "Hosting/infra (e.g., Vercel/AWS).",
        "Analytics (e.g., Google Analytics 4).",
        "Marketing/measurement (e.g., Meta Pixel).",
        "Payment gateways (e.g., Stripe, PayPal, Paymob).",
        "Email delivery (e.g., SendGrid/Mailgun).",
      ],

      consentTitle: "Consent Management",
      consentText:
        "We may show a consent banner for cookies/tracking. Continuing to browse implies consent to selected categories. You may adjust preferences any time via privacy settings if available.",

      toggleLabel: "العربية",
      toc: "Table of Contents",
      company: "Company",
    };

    return lang === "ar" ? ar : en;
  }, [lang, company]);

  // جدول المحتويات (الترتيب/المعرّفات)
  const sections = useMemo(
    () => [
      { id: "intro", label: lang === "ar" ? "مقدمة" : "Introduction" },
      { id: "collect", label: t.collectTitle },
      { id: "use", label: t.useTitle },
      { id: "cookies", label: t.cookiesTitle },
      { id: "pay", label: t.payTitle },
      { id: "analytics", label: t.analyticsTitle },
      { id: "mobile", label: t.mobileTitle },
      { id: "retention", label: t.retentionTitle },
      { id: "processors", label: t.processorsTitle },
      { id: "consent", label: t.consentTitle },
      { id: "contact", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
    ],
    [t, lang]
  );

  return (
    <main
      className={`pp-shell ${lang === "ar" ? "pp-rtl" : "pp-ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="pp-header">
        <div className="pp-header__left">
          <h1 className="pp-title">{t.title}</h1>
          <div className="pp-chips">
            <span className="pp-chip">
              <strong>{t.updated}:</strong> {effectiveDate}
            </span>
            <span className="pp-chip">
              {t.company}: {company}
            </span>
          </div>
        </div>

        <div className="pp-lang">
          <button
            type="button"
            className={`pp-lang__btn ${lang === "ar" ? "is-active" : ""}`}
            onClick={() => setLang("ar")}
          >
            العربية
          </button>
          <button
            type="button"
            className={`pp-lang__btn ${lang === "en" ? "is-active" : ""}`}
            onClick={() => setLang("en")}
          >
            English
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="pp-layout">
        {/* ToC */}
        <aside className="pp-toc" aria-label={t.toc}>
          <div className="pp-toc__title">{t.toc}</div>
          <nav>
            <ul className="pp-toc__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a className="pp-toc__link" href={`#${s.id}`}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="pp-content">
          <section id="intro" className="pp-card" aria-labelledby="intro-h">
            <h2 id="intro-h" className="pp-h2">
              {lang === "ar" ? "مقدمة" : "Introduction"}
            </h2>
            <p>{t.intro}</p>
          </section>

          <section id="collect" className="pp-card" aria-labelledby="collect-h">
            <h2 id="collect-h" className="pp-h2">
              {t.collectTitle}
            </h2>
            <ul className="pp-list">
              {t.collectList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="use" className="pp-card" aria-labelledby="use-h">
            <h2 id="use-h" className="pp-h2">
              {t.useTitle}
            </h2>
            <ul className="pp-list">
              {t.useList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="cookies" className="pp-card" aria-labelledby="cookies-h">
            <h2 id="cookies-h" className="pp-h2">
              {t.cookiesTitle}
            </h2>
            <p>{t.cookiesText}</p>
          </section>

          <section id="pay" className="pp-card" aria-labelledby="pay-h">
            <h2 id="pay-h" className="pp-h2">
              {t.payTitle}
            </h2>
            <p>{t.payText}</p>
          </section>

          <section
            id="analytics"
            className="pp-card"
            aria-labelledby="analytics-h"
          >
            <h2 id="analytics-h" className="pp-h2">
              {t.analyticsTitle}
            </h2>
            <p>{t.analyticsText}</p>
          </section>

          <section id="mobile" className="pp-card" aria-labelledby="mobile-h">
            <h2 id="mobile-h" className="pp-h2">
              {t.mobileTitle}
            </h2>
            <p>{t.mobileText}</p>
          </section>

          <section
            id="retention"
            className="pp-card"
            aria-labelledby="retention-h"
          >
            <h2 id="retention-h" className="pp-h2">
              {t.retentionTitle}
            </h2>
            <p>{t.retentionText}</p>
          </section>

          <section
            id="processors"
            className="pp-card"
            aria-labelledby="processors-h"
          >
            <h2 id="processors-h" className="pp-h2">
              {t.processorsTitle}
            </h2>
            <ul className="pp-list">
              {t.processorsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="consent" className="pp-card" aria-labelledby="consent-h">
            <h2 id="consent-h" className="pp-h2">
              {t.consentTitle}
            </h2>
            <p>{t.consentText}</p>
          </section>

          <section id="contact" className="pp-card" aria-labelledby="contact-h">
            <h2 id="contact-h" className="pp-h2">
              {lang === "ar" ? "اتصل بنا" : "Contact Us"}
            </h2>
            <p>
              {t.contactTextPrefix} <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
