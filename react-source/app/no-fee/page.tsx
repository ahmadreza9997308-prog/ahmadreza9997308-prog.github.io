"use client";

import { useEffect, useMemo, useState } from "react";

const products = [
  { id: 1, name: "گوشواره آویز لیانا", code: "RG-2401", weight: 4.4, price: 46686882, category: "گوشواره", status: "فقط ۱ عدد", image: "/liana-main.png", alt: "/liana-angle.png", fresh: true },
  { id: 2, name: "گوشواره حلقه‌ای روژا", code: "RG-2402", weight: 3.2, price: 33954096, category: "گوشواره", status: "۲ عدد موجود", image: "/liana-angle.png", alt: "/liana-macro.png", fresh: true },
  { id: 3, name: "آویز طلای مهتاب", code: "RG-1831", weight: 2.1, price: 22282376, category: "گردنبند", status: "فقط ۱ عدد", image: "/collection-1.png", alt: "/collection-2.png", fresh: false },
  { id: 4, name: "گوشواره سبک باران", code: "RG-2374", weight: 1.8, price: 19099179, category: "سبک", status: "۳ عدد موجود", image: "/liana-stand.png", alt: "/liana-main.png", fresh: false },
  { id: 5, name: "انگشتر طلای آوا", code: "RG-1968", weight: 2.7, price: 28648769, category: "انگشتر", status: "فقط ۱ عدد", image: "/collection-2.png", alt: "/collection-1.png", fresh: true },
  { id: 6, name: "گوشواره ظریف نور", code: "RG-2406", weight: 2.4, price: 25465572, category: "سبک", status: "۲ عدد موجود", image: "/liana-macro.png", alt: "/liana-stand.png", fresh: false },
];

const fa = new Intl.NumberFormat("fa-IR");

export default function Home() {
  const [category, setCategory] = useState("همه");
  const [sort, setSort] = useState("new");
  const [compare, setCompare] = useState<number[]>([]);
  const [budget, setBudget] = useState(30);
  const [showFormula, setShowFormula] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(13638);

  useEffect(() => {
    const timer = window.setInterval(() => setSecondsLeft((value) => value > 0 ? value - 1 : 0), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const countdown = [Math.floor(secondsLeft / 3600), Math.floor((secondsLeft % 3600) / 60), secondsLeft % 60].map((value) => fa.format(value).padStart(2, "۰"));

  const shown = useMemo(() => {
    const list = category === "همه" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "light") list.sort((a, b) => a.weight - b.weight);
    if (sort === "price") list.sort((a, b) => a.price - b.price);
    return list;
  }, [category, sort]);

  function toggleCompare(id: number) {
    setCompare((current) => current.includes(id) ? current.filter((x) => x !== id) : current.length < 3 ? [...current, id] : current);
  }

  return (
    <main dir="rtl">
      <div className="notice"><span>ارسال امن و بیمه‌شده به سراسر ایران</span><span>پشتیبانی خرید: ۰۳۵۹۱۰۹۴۷۴۲</span></div>
      <header>
        <div className="shell nav">
          <a className="brand" href="#top" aria-label="طلای راضی">
            <img src="/logo.png" alt="نشان طلای راضی" />
            <span><b>طلای راضی</b><small>درخشش، با خیال راحت</small></span>
          </a>
          <nav className={menuOpen ? "links open" : "links"} aria-label="منوی اصلی">
            <a href="/">صفحه اصلی</a><a href="#products">جدیدترین‌ها</a><a className="active" href="/no-fee#top">طلای بدون اجرت</a><a href="#guide">راهنمای خرید</a><a href="#footer">تماس با ما</a>
          </nav>
          <div className="actions"><button aria-label="جستجو">⌕</button><button aria-label="حساب کاربری">♙</button><button aria-label="سبد خرید">⌑<i>۰</i></button><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="نمایش منو">☰</button></div>
        </div>
      </header>

      <section className="hero compact-hero" id="top">
        <div className="shell breadcrumb">خانه <span>←</span> طلای بدون اجرت</div>
        <div className="shell hero-grid compact-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i /> موجودی محدود امروز</span>
            <h1>طلای بدون اجرت؛ <em>فقط ارزش طلا + ۷٪</em></h1>
            <p>بدون اجرت ساخت و بدون مالیات؛ هر قطعه فقط تا زمان موجودی قابل خرید است.</p>
            <div className="countdown"><span>فرصت خرید با قیمت فعلی</span><div><b>{countdown[0]}</b><i>:</i><b>{countdown[1]}</b><i>:</i><b>{countdown[2]}</b></div><small>پس از پایان زمان، قیمت‌ها با نرخ جدید محاسبه می‌شوند.</small></div>
          </div>
          <div className="formula-card compact-formula">
            <div className="live-head"><span><i /> نرخ نمونه امروز</span><small>آخرین به‌روزرسانی: ۱۲:۳۰</small></div>
            <div className="rate"><span>هر گرم طلای ۱۸ عیار</span><strong>۹٬۹۱۶٬۵۰۰ <small>تومان</small></strong></div>
            <div className="equation"><b>وزن طلا</b><span>×</span><b>نرخ روز</b><span>+</span><b>فقط ۷٪</b></div>
            <div className="zero-row"><span><b>۰</b> اجرت</span><span><b>۰</b> مالیات</span></div>
            <button className="text-button" onClick={() => setShowFormula(true)}>مشاهده محاسبه کامل ←</button>
          </div>
        </div>
      </section>

      <section className="quick-buy budget-after-products">
        <div className="shell quick-grid">
          <div><span className="mini-title">خرید سریع براساس بودجه</span><h2>تا چه مبلغی می‌خواهید انتخاب کنید؟</h2></div>
          <div className="budget"><div><span>تا {fa.format(budget)} میلیون تومان</span><small>حدوداً تا وزن {fa.format((budget * 1_000_000 / 10_609_655).toFixed(1))} گرم</small></div><input aria-label="بودجه" type="range" min="15" max="80" value={budget} onChange={(e) => setBudget(Number(e.target.value))}/><div className="range-label"><span>۱۵ میلیون</span><span>۸۰ میلیون</span></div></div>
          <button className="outline" onClick={() => { setSort("price"); document.getElementById("products")?.scrollIntoView({behavior:"smooth"}); }}>نمایش انتخاب‌های من</button>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-head"><div><span className="eyebrow"><i /> همین حالا قابل خرید</span><h2>موجودی طلای بدون اجرت امروز</h2><p>قطعات این ویترین تکرار نمی‌شوند؛ انتخاب شما فقط پس از تکمیل خرید قطعی است.</p></div><div className="updated">● <span>موجودی زنده<br/><b>۶ قطعه باقی مانده</b></span></div></div>
        <div className="toolbar">
          <div className="chips">{["همه","گوشواره","گردنبند","انگشتر","سبک"].map((c) => <button key={c} onClick={() => setCategory(c)} className={category === c ? "selected" : ""}>{c === "سبک" ? "زیر ۳ گرم" : c}</button>)}</div>
          <label>مرتب‌سازی: <select value={sort} onChange={(e) => setSort(e.target.value)}><option value="new">جدیدترین موجودی</option><option value="light">کمترین وزن</option><option value="price">کمترین قیمت</option></select></label>
        </div>
        <div className="product-grid">
          {shown.map((p) => <article className="product-card" key={p.id}>
            <div className="product-media"><img className="front" src={p.image} alt={p.name}/><img className="back" src={p.alt} alt={`نمای دوم ${p.name}`}/>{p.fresh && <span className="new">تازه رسید</span>}<button className="heart" aria-label={`افزودن ${p.name} به علاقه‌مندی`}>♡</button><span className="stock urgent">{p.status}</span></div>
            <div className="product-info"><div className="product-title"><div><h3>{p.name}</h3><small>کد {p.code}</small></div><b>{fa.format(p.weight)} <small>گرم</small></b></div>
              <div className="price"><span>قیمت نهایی نمونه</span><strong>{fa.format(p.price)} <small>تومان</small></strong></div>
              <div className="tags"><span>بدون اجرت</span><span>بدون مالیات</span><span>+ ۷٪</span></div>
              <p className="buyer-signal">{p.id % 2 ? "اکنون ۴ نفر در حال مشاهده‌اند" : "امروز ۲ بار به سبد خرید اضافه شده"}</p>
              <div className="card-actions"><button className="view">خرید با قیمت فعلی</button><label className={compare.includes(p.id) ? "compare checked" : "compare"}><input type="checkbox" checked={compare.includes(p.id)} onChange={() => toggleCompare(p.id)}/> مقایسه</label></div>
            </div>
          </article>)}
        </div>
        <button className="load">نمایش محصولات بیشتر <span>↓</span></button>
      </section>

      <section className="why" id="guide"><div className="shell"><div className="why-copy"><span className="eyebrow light"><i /> خریدی که می‌شود حسابش کرد</span><h2>قبل از پرداخت،<br/>همه‌چیز را ببینید</h2><p>در هر صفحه محصول، وزن دقیق، نرخ ثبت‌شده در لحظه خرید و محاسبه کامل مبلغ نمایش داده می‌شود.</p><button onClick={() => setShowFormula(true)}>یک نمونه محاسبه را ببینید ←</button></div><div className="why-cards"><div><b>۰۱</b><span>وزن دقیق محصول</span><small>ثبت‌شده روی فاکتور</small></div><div><b>۰۲</b><span>نرخ همان لحظه</span><small>با زمان به‌روزرسانی</small></div><div><b>۰۳</b><span>فقط ۷٪ سود</span><small>بدون هزینه پنهان</small></div><div><b>۰۴</b><span>فاکتور رسمی</span><small>ضمانت اصالت و عیار</small></div></div></div></section>

      <section className="assurance shell"><h2>با خیال راحت انتخاب کنید</h2><div><span>◇<b>ضمانت طلای ۱۸ عیار</b><small>اصالت و عیار تمام قطعات تضمین می‌شود.</small></span><span>▣<b>فاکتور رسمی راضی</b><small>وزن، نرخ و مبلغ دقیق در فاکتور ثبت می‌شود.</small></span><span>⌁<b>ارسال امن و بیمه‌شده</b><small>بسته‌بندی مطمئن تا لحظه تحویل.</small></span><span>☏<b>مشاوره پیش از خرید</b><small>انتخاب وزن و مدل مناسب با بودجه شما.</small></span></div></section>

      <footer id="footer"><div className="shell footer-grid"><div className="footer-brand"><img src="/logo.png" alt="طلای راضی"/><h3>طلای راضی</h3><p>۴۵ سال تجربه، شفافیت و همراهی؛ از یزد برای سراسر ایران.</p></div><div><h4>فروشگاه</h4><a>جدیدترین‌ها</a><a>طلای بدون اجرت</a><a>خرید براساس بودجه</a><a>پیشنهاد هدیه</a></div><div><h4>راهنمای خرید</h4><a>محاسبه قیمت</a><a>ارسال و تحویل</a><a>تعویض و خدمات</a><a>پیگیری سفارش</a></div><div><h4>ارتباط با ما</h4><a>یزد، صفائیه، مرکز خرید آریا</a><a>۰۳۵۹۱۰۹۴۷۴۲</a><a>@javaheri_razi</a><a>کانال ایتا</a></div></div><div className="shell copy"><span>© ۱۴۰۵ طلای راضی</span><span>پیش‌طرح صفحه طلای بدون اجرت — محصولات و قیمت‌ها نمونه‌اند</span></div></footer>

      {compare.length > 0 && <div className="compare-bar"><span><b>{fa.format(compare.length)}</b> محصول برای مقایسه انتخاب شده</span><div>{compare.map((id) => { const p = products.find(x => x.id === id)!; return <img key={id} src={p.image} alt={p.name}/>; })}</div><button disabled={compare.length < 2}>{compare.length < 2 ? "یک محصول دیگر انتخاب کنید" : "مقایسه محصولات"}</button><button className="close" onClick={() => setCompare([])} aria-label="بستن">×</button></div>}
      {showFormula && <div className="modal" role="dialog" aria-modal="true" aria-label="نمونه محاسبه قیمت" onClick={() => setShowFormula(false)}><div onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setShowFormula(false)}>×</button><span className="eyebrow"><i /> نمونه محاسبه شفاف</span><h2>قیمت این محصول چطور ساخته می‌شود؟</h2><p>نمونه: گوشواره ۴.۴ گرمی با نرخ فرضی همین پیش‌نمایش</p><dl><div><dt>ارزش طلای خام</dt><dd>۴۳٬۶۳۲٬۶۰۰ تومان</dd></div><div><dt>اجرت ساخت</dt><dd className="free">صفر تومان</dd></div><div><dt>مالیات</dt><dd className="free">صفر تومان</dd></div><div><dt>سود دقیق ۷٪</dt><dd>۳٬۰۵۴٬۲۸۲ تومان</dd></div><div className="total"><dt>قیمت نهایی</dt><dd>۴۶٬۶۸۶٬۸۸۲ تومان</dd></div></dl><small>تمام اعداد این بخش برای نمایش طراحی و نمونه هستند.</small></div></div>}
    </main>
  );
}
