'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Mic, FileText, ListTodo, Edit3, Save, PlayCircle, Zap, Users, Lock, Brain, Lightbulb, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

const kurdishFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap');
  body {
    font-family: 'IBM Plex Sans Arabic', sans-serif;
  }
`

export function ReflectLandingPageComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [prices, setPrices] = useState({ basic: 0, pro: 0, team: 0 });

  useEffect(() => {
    setPrices({
      basic: 0,
      pro: Math.floor(Math.random() * (20 - 5 + 1) + 5),
      team: Math.floor(Math.random() * (50 - 20 + 1) + 20)
    });
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans">
      <style dangerouslySetInnerHTML={{ __html: kurdishFontStyle }} />
      {/* Header */}
      <header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Kurd.Soft</span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="hover:bg-white/10 text-white">چوونە ژوورەوە</Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">خۆتۆمارکردن</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-6 relative">
          <div className="bg-purple-900/30 py-1 px-4 rounded-full inline-block mb-4 text-sm">
            <span className="text-white">نوێ: یەکخستنی زیرەکی دەستکردمان گەیشت!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">باشتر بیر بکەوە<br />لەگەڵ ڕیفلێکت</h1>
          <p className="text-lg text-white">هەرگیز تێبینی، بیرۆکە یان پەیوەندییەک لەدەست مەدە.</p>
          <div className="relative mt-12">
            <div className="relative z-10">
              <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
                <Image
                  src="/blackhole.png"
                  alt="وێنەی کونە ڕەشە"
                  width={3400}
                  height={3400}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <Calendar 
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden mx-auto max-w-sm relative z-20 -mt-24"
              mode="single"
              selected={new Date("2023-02-07")}
              month={new Date("2023-02-01")}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 border border-gray-800 rounded-lg p-4 w-72 z-30">
              <h3 className="font-semibold mb-2 text-white">یەکشەممە، ٢ی نیسانی ٢٠٢٣</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  کۆبوونەوە لەگەڵ تیمی دیزاین
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  تەواوکردنی پێشنیاری پڕۆژە
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  پەیوەندی لەگەڵ کڕیار
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "دروستکراوە بۆ خێرایی", description: "تێبینییەکانت دەستبەجێ هاوکات بکە لە نێوان ئامێرەکاندا", icon: "🚀" },
            { title: "تێبینییە تۆڕییەکان", description: "تۆڕێک لە بیرۆکەکان دروست بکە بە بەستەرە پشتییەکان", icon: "🕸️" },
            { title: "ئەپی iOS", description: "بیرۆکەکان لەسەر ڕێگا تۆمار بکە، ئۆنلاین یان ئۆفلاین", icon: "📱" }
          ].map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br from-purple-600/20 to-blue-600/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* ... (other sections remain unchanged) ... */}

        {/* New Section: Pricing */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">پلانی خۆت هەڵبژێرە</h2>
          <p className="text-center max-w-2xl mx-auto bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            پلانی تەواوی ڕیفلێکت بۆ پێداویستییەکانت بدۆزەوە، لە بەکارهێنەرانی تاکەکەسەوە بۆ تیمە گەورەکان.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "بنەڕەتی", price: prices.basic, features: ["تێبینی بێسنوور", "یارمەتی بنەڕەتی AI", "دەستگەیشتن بە ئەپی مۆبایل"] },
              { name: "پیشەیی", price: prices.pro, features: ["هەموو شتێک لە بنەڕەتیدا", "تایبەتمەندییە پێشکەوتووەکانی AI", "پاشکۆی فایلی بێسنوور", "پشتگیری لەپێشینە"] },
              { name: "تیم", price: prices.team, features: ["هەموو شتێک لە پیشەییدا", "هاوکاری تیم", "کۆنترۆڵی بەڕێوەبەر", "یەکخستنی تایبەت"] },
            ].map((plan, index) => (
              <Card key={index} className={`bg-gray-900/50 border-gray-800 ${index === 1 ? 'ring-2 ring-purple-500' : ''} transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br from-purple-600/20 to-blue-600/20`}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">{plan.name}</h3>
                  <p className="text-3xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">${plan.price}{plan.price > 0 ? '/مانگ' : ''}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={index === 1 ? 'bg-purple-600 hover:bg-purple-700 w-full text-white' : 'bg-gray-700 hover:bg-gray-600 w-full text-white'}>
                    پلان هەڵبژێرە
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* New Section: Testimonials */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">بەکارهێنەرانمان چی دەڵێن</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "سارا ک.", role: "بەڕێوەبەری بەرهەم", quote: "ڕیفلێکت شێوازی ڕێکخستنی بیرۆکەکانم و بەڕێوەبردنی پڕۆژەکانی شۆڕش کردووە." },
              { name: "ئەلێکس م.", role: "نووسەر", quote: "تایبەتمەندییە بەهێزکراوەکانی AI بە شێوەیەکی بەرچاو پرۆسەی نووسین و بەرهەمهێنانی منیان باشتر کردووە." }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                <CardContent className="p-6">
                  <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">{testimonial.name}</p>
                      <p className="bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Call to Action Button */}
        <div className="mt-36 -mb-40 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 w-80 text-white text-xl py-4">
            Sahnd.Hamzani
          </Button>
        </div>

        {/* ... (other sections remain unchanged) ... */}

      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Add footer content here */}
        </div>
        <div className="mt-12 text-center">
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">&copy; ٢٠٢٣ ڕیفلێکت. هەموو مافەکان پارێزراون.</p>
        </div>
      </footer>
    </div>
  )
}