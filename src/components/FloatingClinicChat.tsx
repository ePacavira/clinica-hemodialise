import { MessageCircle, Send, Trash2, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

const CLINIC_EMAIL = 'recepcao@chpa-ao.com'
const WHATSAPP_E164 = '244222385730'

type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  id: string
  role: ChatRole
  text: string
}

let msgId = 0
function nextId() {
  msgId += 1
  return `m-${msgId}`
}

export function FloatingClinicChat() {
  const { language } = useI18n()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  const copy =
    language === 'en'
      ? {
          button: 'Message the clinic',
          ariaOpen: 'Open temporary chat',
          ariaClose: 'Close',
          title: 'Chat with CHPA',
          tempNotice:
            'Temporary chat — messages are not saved and are cleared when you refresh the page.',
          welcome:
            'Hello. Write your question here. This window is only on your device: nothing is stored on our servers. To reach the team officially, use Email or WhatsApp below.',
          userLabel: 'You',
          clinicLabel: 'CHPA',
          placeholder: 'Write a message…',
          send: 'Send',
          clearChat: 'Clear chat',
          afterSendHint:
            'Reminder: this chat is temporary. To contact the clinic, send the conversation by email or WhatsApp.',
          sendEmail: 'Send chat by email',
          sendWhatsapp: 'Send chat via WhatsApp',
          bookingHint: 'Prefer to book an appointment?',
          bookingLink: 'Go to booking',
          emptySend: 'Please write a message.',
          emptyOutreach: 'Write at least one message in the chat before sending.',
        }
      : {
          button: 'Mensagem à clínica',
          ariaOpen: 'Abrir chat temporário',
          ariaClose: 'Fechar',
          title: 'Chat com a CHPA',
          tempNotice:
            'Chat temporário — as mensagens não são guardadas e desaparecem ao atualizar a página.',
          welcome:
            'Olá. Escreva aqui a sua questão. Esta janela existe só no seu dispositivo: nada é guardado nos nossos servidores. Para contactar a equipa de forma oficial, use Email ou WhatsApp abaixo.',
          userLabel: 'Utente',
          clinicLabel: 'CHPA',
          placeholder: 'Escreva uma mensagem…',
          send: 'Enviar',
          clearChat: 'Limpar conversa',
          afterSendHint:
            'Lembrete: este chat é temporário. Para falar com a clínica, envie a conversa por email ou WhatsApp.',
          sendEmail: 'Enviar conversa por email',
          sendWhatsapp: 'Enviar conversa por WhatsApp',
          bookingHint: 'Prefere marcar consulta?',
          bookingLink: 'Ir para marcação',
          emptySend: 'Por favor escreva uma mensagem.',
          emptyOutreach: 'Escreva pelo menos uma mensagem no chat antes de enviar.',
        }

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    setMessages((prev) => {
      if (prev.length > 0) return prev
      return [{ id: nextId(), role: 'assistant', text: copy.welcome }]
    })
  }, [open, copy.welcome])

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [open, messages])

  function appendUserThenHint(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setDraft('')
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'user', text: trimmed },
      { id: nextId(), role: 'assistant', text: copy.afterSendHint },
    ])
  }

  function onSubmitLine(e: React.FormEvent) {
    e.preventDefault()
    const t = draft.trim()
    if (!t) {
      window.alert(copy.emptySend)
      return
    }
    appendUserThenHint(t)
  }

  function buildTranscript() {
    return messages
      .map((m) => {
        const who = m.role === 'user' ? copy.userLabel : copy.clinicLabel
        return `${who}: ${m.text}`
      })
      .join('\n\n')
  }

  function userMessageCount() {
    return messages.filter((m) => m.role === 'user').length
  }

  function onSendEmail() {
    if (userMessageCount() === 0) {
      window.alert(copy.emptyOutreach)
      return
    }
    const subject =
      language === 'en'
        ? 'CHPA website — chat transcript'
        : 'Site CHPA — conversa do chat'
    const mailto = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildTranscript())}`
    window.location.href = mailto
  }

  function onWhatsApp() {
    if (userMessageCount() === 0) {
      window.alert(copy.emptyOutreach)
      return
    }
    const prefix =
      language === 'en'
        ? `Hello CHPA,\n\n${buildTranscript()}`
        : `Olá CHPA,\n\n${buildTranscript()}`
    window.open(
      `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(prefix)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  function onClearChat() {
    setMessages([{ id: nextId(), role: 'assistant', text: copy.welcome }])
    setDraft('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open ? (
        <>
          <button
            type="button"
            aria-label={language === 'en' ? 'Close overlay' : 'Fechar fundo'}
            className="fixed inset-0 z-40 bg-slate-900/25 md:bg-slate-900/20"
            onClick={close}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${panelId}-title`}
            className="relative z-50 flex max-h-[min(72vh,520px)] w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 bg-brand px-4 py-3 text-white">
              <div className="min-w-0">
                <h2 id={`${panelId}-title`} className="text-base font-bold">
                  {copy.title}
                </h2>
                <p className="mt-1 text-[11px] leading-snug text-white/90">
                  {copy.tempNotice}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={onClearChat}
                  className="rounded p-1.5 text-white/90 hover:bg-white/10"
                  aria-label={copy.clearChat}
                  title={copy.clearChat}
                >
                  <Trash2 size={18} />
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded p-1 text-white/90 hover:bg-white/10"
                  aria-label={copy.ariaClose}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div
              ref={listRef}
              className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-3"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] px-3 py-2 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-brand text-white'
                        : 'border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    {m.role === 'assistant' ? (
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {copy.clinicLabel}
                      </p>
                    ) : null}
                    <p className={m.role === 'assistant' ? 'mt-0.5' : ''}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={onSubmitLine}
              className="border-t border-slate-200 bg-white p-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={copy.placeholder}
                  autoComplete="off"
                  className="min-w-0 flex-1 border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-1 bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
                  aria-label={copy.send}
                >
                  <Send size={18} aria-hidden />
                  <span className="hidden sm:inline">{copy.send}</span>
                </button>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onSendEmail}
                  className="inline-flex w-full items-center justify-center gap-2 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-200"
                >
                  {copy.sendEmail}
                </button>
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {copy.sendWhatsapp}
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                {copy.bookingHint}{' '}
                <Link
                  to={paths.marcacao}
                  className="font-semibold text-brand underline-offset-2 hover:underline"
                  onClick={close}
                >
                  {copy.bookingLink}
                </Link>
              </p>
            </form>
          </div>
        </>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-dark md:text-base"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? copy.ariaClose : copy.ariaOpen}
      >
        {open ? (
          <X size={22} aria-hidden />
        ) : (
          <MessageCircle size={22} aria-hidden />
        )}
        {open ? copy.ariaClose : copy.button}
      </button>
    </div>
  )
}
