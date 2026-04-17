import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { heroSlidesByLanguage } from '../data/heroSlides'
import { useI18n } from '../i18n/I18nContext'

const AUTO_MS = 7000
const SWIPE_PX = 56

export function HeroCarousel() {
  const { language } = useI18n()
  const heroSlides = heroSlidesByLanguage[language]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const titleId = useId()
  const n = heroSlides.length

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n)
    },
    [n],
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, AUTO_MS)
    return () => window.clearInterval(t)
  }, [paused, reduceMotion, n, index])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      }
    },
    [go],
  )

  const transitionClass = reduceMotion
    ? 'duration-0'
    : 'duration-700 ease-out'
  const copy =
    language === 'en'
      ? {
          carouselAria: 'CHPA highlights',
          carouselDesc: 'Carousel with',
          carouselDescEnd: 'highlights. Use arrows or dots to navigate.',
          prevSlide: 'Previous slide',
          nextSlide: 'Next slide',
          selectSlide: 'Slide selection',
          slideOf: 'Slide',
          of: 'of',
          line: 'CHPA line',
          brand: 'CHPA · Pluribus Africa',
          roleDescription: 'carousel',
        }
      : {
          carouselAria: 'Destaques CHPA',
          carouselDesc: 'Carrossel com',
          carouselDescEnd: 'destaques. Use as setas ou pontos para navegar.',
          prevSlide: 'Slide anterior',
          nextSlide: 'Slide seguinte',
          selectSlide: 'Seleção de slide',
          slideOf: 'Slide',
          of: 'de',
          line: 'Linha CHPA',
          brand: 'CHPA · Pluribus Africa',
          roleDescription: 'carrossel',
        }

  return (
    <section
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full overflow-hidden bg-slate-900 outline-none ring-brand focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      aria-roledescription={copy.roleDescription}
      aria-label={copy.carouselAria}
      aria-labelledby={titleId}
    >
      <p id={titleId} className="sr-only">
        {copy.carouselDesc} {n} {copy.carouselDescEnd}
      </p>

      <div className="flex w-full flex-col">
        <div
          className="relative h-[clamp(20rem,52vh,44rem)] w-full overflow-hidden sm:h-[clamp(22rem,50vh,42rem)] lg:h-[clamp(24rem,56vh,48rem)]"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return
            const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
            const dx = endX - touchStartX.current
            touchStartX.current = null
            if (dx > SWIPE_PX) go(-1)
            else if (dx < -SWIPE_PX) go(1)
          }}
        >
          {/* Controlos canto superior esquerdo (estilo Luz) */}
          <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 md:bottom-4 md:right-4">
            <div className="flex items-center gap-0.5 rounded bg-black/35 p-0.5 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => go(-1)}
                className="rounded p-0.5 text-white transition hover:bg-white/15"
                aria-label={copy.prevSlide}
              >
                <ChevronLeft size={16} strokeWidth={2} />
              </button>
            </div>
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label={copy.selectSlide}
            >
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${copy.slideOf} ${i + 1} ${copy.of} ${n}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition md:h-1.5 md:w-1.5 ${
                    i === index
                      ? 'scale-125 bg-white shadow'
                      : 'bg-white/45 ring-1 ring-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-0.5 rounded bg-black/35 p-0.5 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => go(1)}
                className="rounded p-0.5 text-white transition hover:bg-white/15"
                aria-label={copy.nextSlide}
              >
                <ChevronRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div
            className={`flex h-full w-full min-h-full will-change-transform ${transitionClass} transition-transform`}
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${(index * 100) / n}%)`,
            }}
          >
            {heroSlides.map((slide, i) => {
              const isActive = i === index
              return (
                <div
                  key={slide.id}
                  className="relative h-full min-h-full"
                  style={{ width: `${100 / n}%` }}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={slide.id === '1' ? 'eager' : 'lazy'}
                    fetchPriority={slide.id === '1' ? 'high' : undefined}
                    decoding="async"
                    sizes="100vw"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-r from-slate-950/92 via-slate-900/50 to-slate-800/25"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex -translate-y-5 flex-col justify-center px-4 py-16 sm:-translate-y-6 sm:px-6 sm:py-20 md:-translate-y-7 md:px-10 md:py-24 md:pl-[290px] lg:mx-auto lg:max-w-[1200px] lg:px-8 lg:pl-[300px] xl:px-10">
                    <div className="max-w-lg md:max-w-[min(540px,calc(100%-300px))]">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                        {copy.brand}
                      </p>
                      {isActive ? (
                        <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl">
                          {slide.title}
                        </h1>
                      ) : (
                        <p className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
                          {slide.title}
                        </p>
                      )}
                      {slide.subtitle ? (
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 md:text-base">
                          {slide.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute right-4 top-4 z-10 max-w-[200px] rounded-lg border border-white/20 bg-black/40 px-3 py-2 backdrop-blur-sm md:hidden">
            <p className="text-[10px] font-semibold uppercase text-white/85">
              {copy.line}
            </p>
            <a
              href="tel:+244222380296"
              className="mt-0.5 block text-sm font-bold tabular-nums text-white"
            >
              (+244) 222 380 296
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
