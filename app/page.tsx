import {
  profile,
  timeline,
  companies,
  products,
  quotes,
  debtInfo,
  books,
  keynotes,
  podcast,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">罗永浩信息聚合站</h1>
          <nav className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#timeline" className="hover:text-blue-600 transition">时间轴</a>
            <a href="#companies" className="hover:text-blue-600 transition">公司</a>
            <a href="#products" className="hover:text-blue-600 transition">产品</a>
            <a href="#keynotes" className="hover:text-blue-600 transition">发布会</a>
            <a href="#podcast" className="hover:text-blue-600 transition">播客</a>
            <a href="#quotes" className="hover:text-blue-600 transition">语录</a>
            <a href="#debt" className="hover:text-blue-600 transition">还债</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">{profile.name}</h2>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 mb-6">{profile.englishName}</p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            {profile.titles.join(" · ")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
            <div>
              <p className="text-sm text-zinc-500">出生日期</p>
              <p className="font-medium">{profile.birthDate}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">出生地</p>
              <p className="font-medium">{profile.birthPlace}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">民族</p>
              <p className="font-medium">{profile.ethnicity}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">外号</p>
              <p className="font-medium">{profile.nickname}</p>
            </div>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            {profile.bio}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
            人生时间轴
          </h3>
          <div className="relative">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-zinc-200 dark:bg-zinc-800 absolute top-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-2">
                    {event.year}
                  </span>
                  <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-green-600 rounded-full"></span>
            创业公司
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-green-500 dark:hover:border-green-500 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold">{company.name}</h4>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      company.status === "上市"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : company.status === "运营中"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {company.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mb-3">{company.period}</p>
                <p className="text-zinc-700 dark:text-zinc-300">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-purple-600 rounded-full"></span>
            产品历史
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{product.name}</h4>
                  <span className="text-xs text-zinc-500">{product.year}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{product.description}</p>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">{product.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynotes / 发布会 */}
      <section id="keynotes" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
            发布会记录
          </h3>
          <p className="text-zinc-500 mb-8 text-sm">罗永浩的发布会被称为"单口相声"，以下是历次重要发布会记录</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left py-3 px-4 font-medium">日期</th>
                  <th className="text-left py-3 px-4 font-medium">发布会</th>
                  <th className="text-left py-3 px-4 font-medium hidden md:table-cell">地点</th>
                  <th className="text-left py-3 px-4 font-medium">亮点</th>
                </tr>
              </thead>
              <tbody>
                {keynotes.map((keynote, index) => (
                  <tr key={index} className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition">
                    <td className="py-3 px-4 text-zinc-500 whitespace-nowrap">{keynote.date}</td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{keynote.title}</div>
                      <div className="text-xs text-zinc-500 md:hidden">{keynote.location}</div>
                      {keynote.products.length > 0 && (
                        <div className="flex gap-1 mt-1 flex-wrap">
                          {keynote.products.map((p, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-zinc-500 hidden md:table-cell">{keynote.location}</td>
                    <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400 text-sm max-w-md">{keynote.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section id="podcast" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="w-1 h-8 bg-pink-500 rounded-full"></span>
            {podcast.title}
          </h3>
          <p className="text-zinc-500 mb-6 text-sm">深度人物访谈播客，每期时长3-5小时</p>
          <p className="text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">{podcast.description}</p>

          {/* Platforms */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {podcast.platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-900/50 transition text-sm font-medium"
              >
                {platform.name} →
              </a>
            ))}
          </div>

          {/* Episodes */}
          <h4 className="font-semibold text-lg mb-4">节目列表</h4>
          <div className="space-y-4">
            {podcast.episodes.map((episode, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-pink-400 dark:hover:border-pink-400 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded mr-2">
                      {episode.episode}
                    </span>
                    <span className="text-xs text-zinc-500">{episode.releaseDate}</span>
                    {episode.duration && (
                      <span className="text-xs text-zinc-400 ml-2">· {episode.duration}</span>
                    )}
                  </div>
                  {episode.platform && (
                    <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">{episode.platform}</span>
                  )}
                </div>
                <h5 className="font-semibold text-lg mb-1">{episode.title}</h5>
                {episode.guestTitle && (
                  <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">嘉宾：{episode.guest} · {episode.guestTitle}</p>
                )}
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{episode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Debt Info */}
      <section id="debt" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-red-600 rounded-full"></span>
            真还传：债务偿还记录
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl mb-6">
                <h4 className="font-semibold mb-4 text-lg">债务概况</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">初期债务（2018）</span>
                    <span className="font-medium">{debtInfo.initialDebt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">实际债务总额</span>
                    <span className="font-medium">{debtInfo.totalDebt}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>已偿还</span>
                    <span className="font-semibold">{debtInfo.paidAmount}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>剩余债务</span>
                    <span>{debtInfo.remainingAmount}</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-semibold mb-4 text-lg">还债来源</h4>
                <div className="space-y-2">
                  {debtInfo.sources.map((source, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-zinc-600 dark:text-zinc-400">{source.source}</span>
                      <span className="font-medium">{source.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">还债时间线</h4>
              <div className="space-y-3">
                {debtInfo.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                    <span className="text-sm font-medium text-zinc-500 w-16 flex-shrink-0">{item.date}</span>
                    <span className="text-zinc-700 dark:text-zinc-300">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section id="quotes" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-yellow-500 rounded-full"></span>
            经典语录
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-yellow-500 dark:hover:border-yellow-500 transition"
              >
                <p className="text-lg font-medium mb-2">&ldquo;{quote.text}&rdquo;</p>
                <p className="text-sm text-zinc-500">— {quote.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
            著作
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition"
              >
                <h4 className="font-semibold text-lg mb-1">{book.title}</h4>
                <p className="text-sm text-zinc-500 mb-2">{book.year}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
        <p>本网站为信息聚合整理，内容来源于公开资料</p>
        <p className="mt-2">更新时间：{new Date().toLocaleDateString("zh-CN")}</p>
      </footer>
    </div>
  );
}
