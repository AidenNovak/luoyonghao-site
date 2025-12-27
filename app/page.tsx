"use client";

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
  techConference2025,
  thinRedLine2025,
  images,
  companyDetails,
  type CompanyDetail,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">罗永浩信息聚合站</h1>
          <nav className="flex gap-3 md:gap-5 text-xs md:text-sm overflow-x-auto">
            <a href="#latest" className="hover:text-blue-600 transition whitespace-nowrap">最新动态</a>
            <a href="#timeline" className="hover:text-blue-600 transition">时间轴</a>
            <a href="#companies" className="hover:text-blue-600 transition">公司</a>
            <a href="#companyDetail" className="hover:text-blue-600 transition whitespace-nowrap">公司详情</a>
            <a href="#keynotes" className="hover:text-blue-600 transition">发布会</a>
            <a href="#thinredline" className="hover:text-blue-600 transition whitespace-nowrap">细红线</a>
            <a href="#podcast" className="hover:text-blue-600 transition">播客</a>
            <a href="#debt" className="hover:text-blue-600 transition">还债</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* 照片区域 */}
            <div className="flex-shrink-0">
              <img
                src={profile.avatar}
                alt={profile.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = profile.avatarFallback;
                }}
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg bg-zinc-200 dark:bg-zinc-800"
              />
            </div>
            {/* 信息区域 */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{profile.name}</h2>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4">{profile.englishName}</p>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                {profile.titles.join(" · ")}
              </p>
              <div className="grid grid-cols-2 gap-3 text-left bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl mb-6">
                <div>
                  <p className="text-xs text-zinc-500">出生日期</p>
                  <p className="text-sm font-medium">{profile.birthDate}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">出生地</p>
                  <p className="text-sm font-medium">{profile.birthPlace}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">民族</p>
                  <p className="text-sm font-medium">{profile.ethnicity}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">外号</p>
                  <p className="text-sm font-medium">{profile.nickname}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {profile.bio}
              </p>
            </div>
          </div>
          {/* 更多照片 */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <a
                key={index}
                href={img.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23e5e7eb' width='200' height='120'/%3E%3Ctext x='100' y='65' text-anchor='middle' font-size='24' fill='%239ca3af'%3E图片加载中...%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition bg-zinc-100 dark:bg-zinc-800"
                />
                {img.caption && (
                  <p className="text-xs text-zinc-500 mt-2 text-center">{img.caption}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News / 最新动态 */}
      <section id="latest" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="w-1 h-8 bg-red-500 rounded-full"></span>
            最新动态
          </h3>
          <p className="text-zinc-500 mb-8 text-sm">2025年重要事件与即将举行的活动</p>

          {/* 12月30日科技大会 */}
          <div className="mb-8 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900 bg-white dark:bg-zinc-900 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">即将举行</span>
              <span className="text-zinc-500 text-sm">{techConference2025.date}</span>
            </div>
            <h4 className="text-2xl font-bold mb-2">{techConference2025.title}</h4>
            <p className="text-red-600 dark:text-red-400 font-medium mb-4">{techConference2025.subtitle}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-zinc-400">📍</span>
                  <span>{techConference2025.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-zinc-400">🎫</span>
                  <span>{techConference2025.ticketInfo.status}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-zinc-400">💰</span>
                  <span>门票收入全部用于公益</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium">大会亮点：</p>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                  {techConference2025.highlights.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {techConference2025.description}
            </p>
            <p className="mt-4 text-sm text-zinc-500 italic">
              {techConference2025.significance}
            </p>
            {(techConference2025 as any).sources && (
              <div className="mt-4 flex gap-2 flex-wrap">
                {(techConference2025 as any).sources.map((source: any, i: number) => (
                  <a
                    key={i}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition"
                  >
                    📋 {source.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 细红线2025动态概览 */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>细红线科技 2025</span>
              <span className="text-sm font-normal text-zinc-500">Thin Red Line</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <p className="text-sm text-zinc-500 mb-1">2025.01</p>
                <p className="font-medium">J1 Assistant 发布</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">海外测试版上线，AI助理软件</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <p className="text-sm text-zinc-500 mb-1">2025.04</p>
                <p className="font-medium">硬件团队裁撤</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">保留约20名软件工程师</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <p className="text-sm text-zinc-500 mb-1">2025.04</p>
                <p className="font-medium">重启招聘</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">招募AI产品经理、大模型算法工程师</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <p className="text-sm text-zinc-500 mb-1">2025.12</p>
                <p className="font-medium">年度大会</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">将发布细红线AI软件</p>
              </div>
            </div>
          </div>
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
                  {event.source && (
                    <a
                      href={event.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>📋</span> {event.source.title}
                    </a>
                  )}
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
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">{company.description}</p>
                {company.sources && company.sources.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {company.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                      >
                        📋 {source.title}
                      </a>
                    ))}
                  </div>
                )}
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

      {/* Company Details - 公司详细报告 */}
      <section id="companyDetail" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            公司深度报告
          </h3>
          <p className="text-zinc-500 mb-8 text-sm">融资历史、核心团队、股权结构、财务数据</p>

          {companyDetails.map((company) => (
            <div key={company.name} className="mb-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden">
              {/* 公司头部 */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{company.name}</h4>
                    <p className="text-emerald-100 text-sm mb-3">{company.period} · {company.status}</p>
                    <p className="text-sm leading-relaxed max-w-3xl">{company.description}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-emerald-200">成立时间</p>
                    <p className="font-medium">{company.foundingDate}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* 基本信息 */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {company.registeredCapital && (
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <p className="text-xs text-zinc-500 mb-1">注册资本</p>
                      <p className="font-medium">{company.registeredCapital}</p>
                    </div>
                  )}
                  {company.businessScope && (
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <p className="text-xs text-zinc-500 mb-1">业务范围</p>
                      <p className="font-medium text-sm">{company.businessScope}</p>
                    </div>
                  )}
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <p className="text-xs text-zinc-500 mb-1">运营状态</p>
                    <p className="font-medium">{company.status}</p>
                  </div>
                </div>

                {/* 核心团队 */}
                <div className="mb-8">
                  <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-500 rounded"></span>
                    核心团队
                  </h5>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {company.keyPersonnel.map((person, i) => (
                      <div key={i} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 transition">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold">{person.name}</p>
                          <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">
                            {person.position}
                          </span>
                        </div>
                        {person.period && <p className="text-xs text-zinc-500 mb-2">{person.period}</p>}
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{person.background}</p>
                        {person.afterPath && (
                          <p className="text-xs text-zinc-500 mt-2">→ {person.afterPath}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 融资历史 */}
                <div className="mb-8">
                  <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-blue-500 rounded"></span>
                    融资历史
                  </h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-800">
                          <th className="text-left py-3 px-4 font-medium">轮次</th>
                          <th className="text-left py-3 px-4 font-medium">时间</th>
                          <th className="text-left py-3 px-4 font-medium">金额</th>
                          <th className="text-left py-3 px-4 font-medium">估值</th>
                          <th className="text-left py-3 px-4 font-medium">投资方</th>
                        </tr>
                      </thead>
                      <tbody>
                        {company.financingHistory.map((round, i) => (
                          <tr key={i} className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                round.round.includes('天使') ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                                round.round.includes('A') ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                round.round.includes('B') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                round.round.includes('C') ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                                round.round.includes('D') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                                'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                              }`}>
                                {round.round}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-zinc-500">{round.date}</td>
                            <td className="py-3 px-4 font-medium">{round.amount}</td>
                            <td className="py-3 px-4 text-zinc-500">{round.valuation || '-'}</td>
                            <td className="py-3 px-4">
                              <div className="flex flex-wrap gap-1">
                                {round.investors.map((inv, j) => (
                                  <span key={j} className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded">
                                    {inv}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 股权结构 */}
                {company.equityStructure && company.equityStructure.length > 0 && (
                  <div className="mb-8">
                    <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-purple-500 rounded"></span>
                      股权结构
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      {company.equityStructure.map((eq, i) => (
                        <div key={i} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-medium">{eq.shareholder}</p>
                            {eq.percentage && (
                              <span className="text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                                {eq.percentage}
                              </span>
                            )}
                          </div>
                          {eq.description && (
                            <p className="text-xs text-zinc-500">{eq.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 重大事件 */}
                <div className="mb-8">
                  <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-orange-500 rounded"></span>
                    重大事件
                  </h5>
                  <div className="relative">
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="space-y-4">
                      {company.majorEvents.map((evt, i) => (
                        <div key={i} className="relative pl-8">
                          <div className="absolute left-1.5 top-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                          <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-xs font-mono text-zinc-500">{evt.date}</span>
                              <span className="font-medium text-sm">{evt.event}</span>
                            </div>
                            {evt.impact && (
                              <p className="text-xs text-zinc-500 mt-1">影响: {evt.impact}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 财务数据 */}
                {company.financialData && company.financialData.length > 0 && (
                  <div className="mb-8">
                    <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-green-500 rounded"></span>
                      财务数据
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-zinc-200 dark:border-zinc-800">
                            <th className="text-left py-3 px-4 font-medium">年份</th>
                            <th className="text-left py-3 px-4 font-medium">营收/收入</th>
                            <th className="text-left py-3 px-4 font-medium">利润</th>
                            <th className="text-left py-3 px-4 font-medium">GMV</th>
                            <th className="text-left py-3 px-4 font-medium">备注</th>
                          </tr>
                        </thead>
                        <tbody>
                          {company.financialData.map((data, i) => (
                            <tr key={i} className="border-b border-zinc-100 dark:border-zinc-900">
                              <td className="py-3 px-4 font-medium">{data.year}</td>
                              <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">{data.revenue || '-'}</td>
                              <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">{data.profit || '-'}</td>
                              <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">{data.gmv || '-'}</td>
                              <td className="py-3 px-4 text-zinc-500 text-xs">{data.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 信源链接 */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-3">数据来源:</p>
                  <div className="flex gap-2 flex-wrap">
                    {company.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                      >
                        📋 {source.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                  <th className="text-left py-3 px-4 font-medium w-20">视频</th>
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
                    <td className="py-3 px-4">
                      {keynote.videoUrl ? (
                        <a
                          href={keynote.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-medium transition"
                        >
                          ▶
                        </a>
                      ) : (
                        <span className="text-zinc-400 text-xs">-</span>
                      )}
                    </td>
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
          <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">{podcast.description}</p>
          {(podcast as any).sources && (
            <div className="mb-6 flex gap-2 flex-wrap">
              {(podcast as any).sources.map((source: any, i: number) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded hover:bg-pink-200 dark:hover:bg-pink-900/50 transition"
                >
                  📋 {source.title}
                </a>
              ))}
            </div>
          )}

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
                  <div className="flex-1">
                    <span className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded mr-2">
                      {episode.episode}
                    </span>
                    <span className="text-xs text-zinc-500">{episode.releaseDate}</span>
                    {episode.duration && (
                      <span className="text-xs text-zinc-400 ml-2">· {episode.duration}</span>
                    )}
                  </div>
                  {episode.videoUrl && (
                    <a
                      href={episode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-xs font-medium transition flex items-center gap-1"
                    >
                      ▶ 观看
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {episode.platform && (
                    <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">{episode.platform}</span>
                  )}
                </div>
                <h5 className="font-semibold text-lg mb-1 mt-3">{episode.title}</h5>
                {episode.guestTitle && (
                  <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">嘉宾：{episode.guest} · {episode.guestTitle}</p>
                )}
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{episode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thin Red Line 2025 / 细红线科技动态 */}
      <section id="thinredline" className="py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
            细红线科技 2025 动态
          </h3>
          <p className="text-zinc-500 mb-8 text-sm">Thin Red Line - AR/AI创业公司"最后一次创业"</p>

          {/* J1 Assistant */}
          <div className="mb-8 p-6 rounded-xl border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/20">
            <div className="flex items-center gap-3 mb-4">
              <h4 className="text-xl font-bold">{thinRedLine2025.j1Assistant.name}</h4>
              <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded text-xs">
                {thinRedLine2025.j1Assistant.status}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {thinRedLine2025.j1Assistant.type} · {thinRedLine2025.j1Assistant.platform}
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              {thinRedLine2025.j1Assistant.highlights}
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {thinRedLine2025.j1Assistant.features.map((feature, i) => (
                <div key={i} className="text-sm text-zinc-600 dark:text-zinc-400">• {feature}</div>
              ))}
            </div>
          </div>

          {/* 信源链接 */}
          {(thinRedLine2025 as any).sources && (
            <div className="mb-6 flex gap-2 flex-wrap">
              {(thinRedLine2025 as any).sources.map((source: any, i: number) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition"
                >
                  📋 {source.title}
                </a>
              ))}
            </div>
          )}

          {/* 时间线 */}
          <h4 className="font-semibold text-lg mb-4">发展时间线</h4>
          <div className="space-y-3">
            {thinRedLine2025.timeline.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition">
                <div className="flex-shrink-0">
                  <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{item.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.event}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 即将发布 */}
          <div className="mt-6 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-sm text-zinc-500">即将发布</p>
            <p className="font-medium">{thinRedLine2025.upcoming.hardware}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{thinRedLine2025.upcoming.description}</p>
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
          {/* 信源链接 */}
          {(debtInfo as any).sourceLinks && (
            <div className="mt-6 flex gap-2 flex-wrap">
              {(debtInfo as any).sourceLinks.map((source: any, i: number) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition"
                >
                  📋 {source.title}
                </a>
              ))}
            </div>
          )}
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
