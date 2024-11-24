'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Download, Image as ImageIcon, Clock, Play } from "lucide-react"
// import { Download, Image as ImageIcon, Clock, Play } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'


interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const content = {
  en: {
    nav: ["FAQ"],
    // nav: ["Features", "How it works", "FAQ"],
    hero: {
      title: "Transform Your Phone with Adorable Animal Videos",
      subtitle: "Set cute animal videos as your wallpaper and wake up to heartwarming alarms",
    },
    features: {
      title: "Why Choose Fluffy Wall?",
      items: [
        {
          title: "Dynamic Wallpapers",
          description: "Set adorable animal videos as your home and lock screen wallpapers",
          icon: <ImageIcon className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "Cute Alarm Backgrounds",
          description: "Wake up to charming animal videos when your alarm goes off",
          icon: <Clock className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "Weekly Updated Content",
          description: "Enjoy fresh, curated animal videos every week",
          icon: <Play className="w-8 h-8 mx-auto text-pink-600" />,
        },
      ],
    },
    cta: "Download Now",
    available: "Available on Android",
  },
  ko: {
    nav: ["기능", "사용방법", "FAQ"],
    hero: {
      title: "귀여운 동물 동영상으로 스마트폰을 변신시키세요",
      subtitle: "바탕화면과 잠금화면을 귀여운 동물 동영상으로 설정하고, 사랑스러운 알람으로 하루를 시작하세요",
    },
    features: {
      title: "Fluffy Wall을 선택해야 하는 이유",
      items: [
        {
          title: "동적 배경화면",
          description: "귀여운 동물 동영상을 홈 화면과 잠금 화면 배경으로 설정하세요",
          icon: <ImageIcon className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "귀여운 알람 배경",
          description: "알람이 울릴 때 사랑스러운 동물 동영상으로 깨어나세요",
          icon: <Clock className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "매주 업데이트되는 콘텐츠",
          description: "매주 새롭게 선별된 동물 동영상을 즐기세요",
          icon: <Play className="w-8 h-8 mx-auto text-pink-600" />,
        },
      ],
    },
    cta: "지금 다운로드",
    available: "Android에서 이용 가능",
  },
  ja: {
    nav: ["機能", "使い方", "FAQ"],
    hero: {
      title: "かわいい動物動画であなたのスマートフォンを彩ろう",
      subtitle: "壁紙とロック画面をかわいい動物動画に設定し、心温まるアラームで目覚めましょう",
    },
    features: {
      title: "Fluffy Wallを選ぶ理由",
      items: [
        {
          title: "ダイナミックな壁紙",
          description: "愛らしい動物動画をホーム画面とロック画面の壁紙に設定できます",
          icon: <ImageIcon className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "かわいいアラーム背景",
          description: "アラームが鳴るとチャーミングな動物動画で目覚められます",
          icon: <Clock className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "毎週更新されるコンテンツ",
          description: "毎週新しく厳選された動物動画をお楽しみいただけます",
          icon: <Play className="w-8 h-8 mx-auto text-pink-600" />,
        },
      ],
    },
    cta: "今すぐダウンロード",
    available: "Android対応",
  },
  es: {
    nav: ["Características", "Cómo funciona", "FAQ"],
    hero: {
      title: "Transforma tu teléfono con adorables videos de animales",
      subtitle: "Configura videos de animales lindos como tu fondo de pantalla y despiértate con encantadoras alarmas",
    },
    features: {
      title: "¿Por qué elegir Fluffy Wall?",
      items: [
        {
          title: "Fondos de pantalla dinámicos",
          description: "Configura adorables videos de animales como fondo de pantalla principal y de bloqueo",
          icon: <ImageIcon className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "Fondos de alarma encantadores",
          description: "Despiértate con encantadores videos de animales cuando suene tu alarma",
          icon: <Clock className="w-8 h-8 mx-auto text-pink-600" />,
        },
        {
          title: "Contenido actualizado semanalmente",
          description: "Disfruta de videos de animales frescos y seleccionados cada semana",
          icon: <Play className="w-8 h-8 mx-auto text-pink-600" />,
        },
      ],
    },
    cta: "Descargar ahora",
    available: "Disponible en Android",
  },
}

const languages = {
  en: "English",
  // es: "Español",
  // ja: "日本語",
  // ko: "한국어",
}

export function LandingPage() {
  type LanguageKey = keyof typeof content;
  const [lang, setLang] = useState<LanguageKey>("en")
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[#E6DBCA]">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[800px]">
          <span className="font-bold text-xl text-pink-700">
            <Link href="/" className="text-pink-700 hover:text-pink-800" >Fluffy Wall</Link>
          </span>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {t.nav.map((item: string) => (
                // <Button key={item} variant="ghost" className="text-pink-700 hover:text-pink-800 hover:bg-pink-100">
                //   {item}
                // </Button>
                <Link key={item} href="/faq" className="text-pink-700 hover:text-pink-800" >FAQ</Link>
              ))}
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(languages).map(([code, name]) => (
                  <DropdownMenuItem key={code} onClick={() => setLang(code as LanguageKey)}>
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 max-w-[800px]">
            <Image
              src="/logo_img_003.png"
              alt="Fluffy Wall Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-700">{t.hero.subtitle}</p>
            {/* <p> */}
              {/* <Link href="https://play.google.com/store/apps/details?id=com.namudrone.fw" passHref>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full">
                  <Download className="mr-2" />
                  {t.cta}
                </Button>
              </Link> */}
              <div className="flex justify-center space-x-4 mb-2">
                <a href="https://play.google.com/store/apps/details?id=com.namudrone.fw" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Image
                      src="/google_play_001.png"
                      alt="Fluffy Wall Logo"
                      width={128}
                      height={64}
                      className="mx-auto"
                    />
                </a>
              </div>           
            {/* </p> */}
            {/* <p className="text-sm text-gray-700">{t.available}</p> */}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white/80 backdrop-blur-sm border-y py-20">
          <div className="container mx-auto px-4 max-w-[800px]">
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">
              {t.features.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {t.features.items.map((feature: Feature, index: number) => (
                <div
                  key={index}
                  className="bg-[#E6DBCA] p-6 rounded-2xl text-center space-y-4 shadow-md"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-pink-700">{feature.title}</h3>
                  <p className="text-gray-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-20 bg-[#E6DBCA]">
          <div className="container mx-auto px-4 max-w-[800px]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-pink-800">
                  Fluffy Wall in Action
                </h2>
                <div className="grid gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg shadow-md flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-pink-700">Set Wallpaper</h3>
                      <p className="text-sm text-gray-600">Choose your favorite animal video for your home screen</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg shadow-md flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-200 rounded-lg flex items-center justify-center">
                      <Clock className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-pink-700">Set Alarm</h3>
                      <p className="text-sm text-gray-600">Wake up to a different cute animal video every day</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg shadow-md flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-200 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-pink-700">Browse Videos</h3>
                      <p className="text-sm text-gray-600">Explore our vast collection of adorable animal videos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] bg-pink-200 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/fw_video_list_20241104.png"
                  alt="App Preview"
                  fill
                  className="object-cover"
                  // className="max-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-200 py-12">
        <div className="container mx-auto px-4 text-center text-gray-700 max-w-[800px]">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com/fluffywall001" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="sns_x.svg" className="w-6 h-6 text-gray-600 hover:text-pink-600" alt="X" />
            </a>
            <a href="https://instagram.com/fluffywall001" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="sns_instagram.svg" className="w-6 h-6 text-gray-600 hover:text-pink-600" alt="Instagram" />
            </a>
            <a href="https://facebook.com/fluffywall" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="sns_facebook.svg" className="w-6 h-6 text-gray-600 hover:text-pink-600" alt="Facebook" />
            </a>
          </div>
          <p>&copy; 2024 Fluffy Wall. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}