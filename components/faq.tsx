'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Globe } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

const content = {
  en: {
    nav: ["FAQ"],
    // nav: ["Features", "FAQ"],
    hero: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about Fluffy Wall",
    },
    faqs: [
      {
        question: "How do I set a video as my wallpaper?",
        answer: "To set a video as your wallpaper, browse the video collection, select your favorite video, and tap the 'Set as Wallpaper' button. You can choose to set it for your home screen, lock screen, or both."
      },
      {
        question: "Can I use my own videos as wallpapers?",
        answer: "Currently, Fluffy Wall only supports using videos from our curated collection. We're considering adding support for custom videos in future updates."
      },
      {
        question: "How do I set up a video alarm?",
        answer: "To set a video alarm, go to the Alarm section, tap 'Add New Alarm', set the time, and choose a video to play when the alarm goes off. You can also customize other alarm settings like repeat days and sound."
      },
      {
        question: "How often are new videos added?",
        answer: "There is no set period. Fluffy Wall will upload as many videos as possible, as often as possible. Uploaded videos will be announced through official SNS accounts and app notifications."
      },
      {
        question: "Is Fluffy Wall available for both iOS and Android?",
        answer: "No, Fluffy Wall is available for Android devices. You can download it from the Google Play Store. A version for iOS is currently being prepared."
      },
      {
        question: "How much storage space does Fluffy Wall use?",
        answer: "The app itself is relatively small, but the storage used depends on how many videos you download for offline use. Currently, the maximum cache size is set to 90M, but this may change in the future."
      },
      {
        question: "How much network usage does it take when downloading a video?",
        answer: "Most videos do not exceed 10M in size, and this specification will be maintained in the future unless there are special reasons. And, if it is not deleted from the cache, it will not be downloaded again over the network."
      },
      {
        question: "What rewards are there for watching ads?",
        answer: "You can watch the video without ads for a certain period of time."
      },
    ]
  },
  ko: {
    nav: ["기능", "FAQ"],
    hero: {
      title: "자주 묻는 질문",
      subtitle: "Fluffy Wall에 대한 일반적인 질문들의 답변을 찾아보세요",
    },
    faqs: [
      {
        question: "비디오를 배경화면으로 어떻게 설정하나요?",
        answer: "비디오를 배경화면으로 설정하려면, 비디오 컬렉션을 탐색하고 마음에 드는 비디오를 선택한 다음 '배경화면으로 설정' 버튼을 탭하세요. 홈 화면, 잠금 화면 또는 둘 다에 설정할 수 있습니다."
      },
      {
        question: "제가 가진 비디오를 배경화면으로 사용할 수 있나요?",
        answer: "현재 Fluffy Wall은 우리가 선별한 컬렉션의 비디오만 지원합니다. 향후 업데이트에서 사용자 지정 비디오 지원을 추가하는 것을 고려 중입니다."
      },
      {
        question: "비디오 알람은 어떻게 설정하나요?",
        answer: "비디오 알람을 설정하려면 알람 섹션으로 가서 '새 알람 추가'를 탭하고, 시간을 설정한 다음 알람이 울릴 때 재생할 비디오를 선택하세요. 반복 요일과 소리 등 다른 알람 설정도 사용자가 지정할 수 있습니다."
      },
      {
        question: "새로운 비디오는 얼마나 자주 추가되나요?",
        answer: "정해진 기간은 없습니다. Fluffy Wall은 가능한 최대한 자주 최대한 많은 동영상을 업로드할 것입니다. 업로드 동영상은 SNS 공식계정 및 앱 알람을 통해 공지됩니다."
      },
      {
        question: "Fluffy Wall은 iOS와 Android 모두에서 사용 가능한가요?",
        answer: "아니요, Fluffy Wall은 현재 Android 기기에서만 사용 가능합니다. Google Play Store에서 다운로드할 수 있습니다."
      },
      {
        question: "Fluffy Wall은 얼마나 많은 저장 공간을 사용하나요?",
        answer: "앱 자체는 상대적으로 작지만 사용되는 저장 공간은 오프라인 사용을 위해 다운로드한 비디오 수에 따라 달라집니다. 현재 최대 캐시 크기는 90M로 설정되어 있지만 향후 변경될 수 있습니다."
      },
      {
        question: "동영상을 다운로드할 때 네트워크 사용량은 얼마나 되나요?",
        answer: "대부분의 영상은 크기가 10M를 넘지 않으며, 특별한 이유가 없는 한 앞으로도 이 사양이 유지될 예정입니다. 그리고, 캐시에서 삭제되지 않으면 네트워크를 통해 다시 다운로드되지 않습니다."
      },
      {
        question: "광고를 시청하면 어떤 보상이 있나요?",
        answer: "해당 영상을 일정 시간 동안 광고없이 볼 수 있습니다."
      }
    ]
  }
}

const languages = {
  en: "English",
  // ko: "한국어",
}

export function Faq() {
  const [lang, setLang] = useState("en")
  const t = content[lang as keyof typeof content]

  return (
    <div className="min-h-screen bg-[#E6DBCA]">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[800px]">
          <span className="font-bold text-xl text-pink-700">
              <Link href="/" className="text-pink-700 hover:text-pink-800 " >Fluffy Wall</Link>
          </span>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {t.nav.map((item) => (
                // <Button key={item} variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                //   {item}
                // </Button>
                <Link key={item} href="/faq" className="text-pink-700 hover:text-pink-800">FAQ</Link>
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
                  <DropdownMenuItem key={code} onClick={() => setLang(code)}>
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-4 max-w-[800px]">
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
              <p className="text-xl text-gray-700">
                {t.hero.subtitle}
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white/80 backdrop-blur-sm mb-20 px-10">
            <Accordion type="single" collapsible className="w-full">
              {t.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-pink-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 max-w-[800px]">
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