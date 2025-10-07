import React from 'react';

export default function App() {
  const openWhatsApp = () => {
    // Placeholder: no whatsapp link configured yet
    alert('WhatsApp will be available soon. For now use the web chat (bottom-right).');
  };

  const openDiscord = () => {
    // Placeholder
    alert('Discord invite not configured yet.');
  };

  const scrollToChat = () => {
    // Tawk widget is floating; this will focus the widget container placeholder
    const el = document.getElementById('web-chat-widget');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Also open Tawk window if available
    try {
      if (window.Tawk_API && window.Tawk_API.toggle) {
        window.Tawk_API.toggle();
      }
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB] text-[#3A3A3A] font-sans">
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A8C5E1] to-[#D9D4F1] flex items-center justify-center shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8a7.937 7.937 0 01-4.938-1.599L4 20l1.599-3.062A7.937 7.937 0 014 12z" fill="#4A5B9E"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[#4A5B9E]">HearMeOut</h1>
            <p className="text-xs text-[#6B7280]">A safe space to be heard</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <button
            onClick={scrollToChat}
            className="bg-[#4A5B9E] text-white px-4 py-2 rounded-lg text-sm shadow-sm hover:opacity-95"
          >
            Start a Chat
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={scrollToChat}
            className="bg-[#4A5B9E] text-white px-3 py-2 rounded-lg text-sm shadow-sm"
          >Start
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#113366] leading-tight">Sometimes, you just need to be heard.</h2>
            <p className="mt-4 text-[#374151]">Share your thoughts in a safe, judgment-free space. I listen with compassion so you can feel a little lighter after every conversation.</p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <button onClick={scrollToChat} className="inline-block bg-[#4A5B9E] text-white px-5 py-3 rounded-lg shadow hover:opacity-95">Start a Chat</button>
              <button onClick={openWhatsApp} className="inline-block border border-[#4A5B9E] text-[#4A5B9E] px-5 py-3 rounded-lg hover:bg-[#EEF2FF]">Chat on WhatsApp</button>
              <button onClick={openDiscord} className="inline-block border border-[#7B6FCD] text-[#7B6FCD] px-5 py-3 rounded-lg hover:bg-[#F3F2FF]">Join Discord</button>
            </div>

            <div className="mt-6 text-sm text-[#6B7280]">
              <strong>Mission:</strong> To give voice to unspoken feelings and comfort to those who carry silent burdens.
            </div>

            <div className="mt-6 text-xs text-[#9CA3AF]">Note: HearMeOut is not a therapy service. If you are in crisis, please contact local emergency services or a licensed professional.</div>
          </div>

          <div className="order-first md:order-last flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
              <div className="h-44 rounded-lg bg-gradient-to-br from-[#A8C5E1] to-[#D9D4F1] flex items-center justify-center text-white font-medium">
                <div className="text-center">
                  <p className="text-sm opacity-90">Live Chat</p>
                  <p className="mt-2 text-xl font-semibold">Say anything — I’m listening.</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs text-[#6B7280]">Sample conversation (private & confidential)</div>
                <div className="mt-2 bg-[#F8FAFC] rounded-lg p-3 text-sm text-[#374151]">
                  <p><span className="font-semibold">You:</span> I feel like I can’t tell my family how I truly feel.</p>
                  <p className="mt-2"><span className="font-semibold">HearMeOut:</span> That sounds heavy — thank you for trusting me. Want to tell me what’s been on your mind lately?</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="how" className="mt-12 bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-[#113366]">How it works</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold">1</div>
              <div className="mt-2 text-sm text-[#374151]">Choose your chat method — embedded web chat, WhatsApp, or Discord.</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold">2</div>
              <div className="mt-2 text-sm text-[#374151]">Pick a session length that fits you and make a secure payment.</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold">3</div>
              <div className="mt-2 text-sm text-[#374151]">Start your conversation — no judgment, just listening.</div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-10">
          <h3 className="text-xl font-semibold text-[#113366]">Pricing</h3>
          <p className="text-sm text-[#6B7280] mt-1">Affordable, flexible pricing — try a short chat to see how it feels.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl shadow">
              <div className="text-sm text-[#6B7280]">Starter Session</div>
              <div className="mt-2 text-2xl font-bold">$1</div>
              <div className="text-sm mt-2 text-[#374151]">15 minutes — quick check-in, vent, or first try.</div>
              <button onClick={scrollToChat} className="mt-4 w-full bg-[#4A5B9E] text-white py-2 rounded-lg">Start $1 Chat</button>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow">
              <div className="text-sm text-[#6B7280]">Comfort Session</div>
              <div className="mt-2 text-2xl font-bold">$2</div>
              <div className="text-sm mt-2 text-[#374151]">30 minutes — more space to share and reflect.</div>
              <button onClick={scrollToChat} className="mt-4 w-full bg-[#4A5B9E] text-white py-2 rounded-lg">Start $2 Chat</button>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow">
              <div className="text-sm text-[#6B7280]">Deep Session</div>
              <div className="mt-2 text-2xl font-bold">$5</div>
              <div className="text-sm mt-2 text-[#374151]">60 minutes — deep, guided listening and reflection.</div>
              <button onClick={scrollToChat} className="mt-4 w-full bg-[#4A5B9E] text-white py-2 rounded-lg">Start $5 Chat</button>
            </div>
          </div>

          <div className="mt-4 text-xs text-[#9CA3AF]">Prices shown in USD. You can also pay via local methods — GCash / Maya (Philippines) — during checkout. Payment processor fees may apply.</div>
        </section>

        <section id="about" className="mt-12 bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-[#113366]">About HearMeOut</h3>
          <p className="mt-3 text-[#374151]">HearMeOut began as a simple idea: what if people who struggle to open up to family and friends had a gentle, private place to talk? Founded and personally run by Alice, every conversation here is human-led, private, and kind. Your stories matter — and they are welcome here.</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div>
              <h4 className="font-semibold">Our Promise</h4>
              <p className="mt-2 text-sm text-[#374151]">We listen without judgment, keep conversations confidential, and support you with warmth and empathy. This service is not a substitute for professional therapy.</p>
            </div>
            <div>
              <h4 className="font-semibold">Ready to talk?</h4>
              <p className="mt-2 text-sm text-[#374151]">Click Start a Chat to begin a live conversation, or reach out via WhatsApp or Discord if you prefer those platforms.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#EEF6FF] to-[#F6F7FB]">
          <div>
            <h4 className="text-lg font-semibold text-[#113366]">Want to say hi or share feedback?</h4>
            <p className="text-sm text-[#374151] mt-1">I’d love to hear from you.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button onClick={openWhatsApp} className="bg-white border border-[#4A5B9E] px-4 py-2 rounded-lg">WhatsApp</button>
            <button onClick={openDiscord} className="bg-white border border-[#7B6FCD] px-4 py-2 rounded-lg">Discord</button>
            <a href="mailto:hello@hearmeout.example" className="bg-[#4A5B9E] text-white px-4 py-2 rounded-lg">Email</a>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow">
            <h5 className="font-semibold text-[#113366]">Live Web Chat</h5>
            <p className="text-sm text-[#6B7280] mt-1">Your chat will appear here when a session starts.</p>

            <div id="web-chat-widget" className="mt-4 h-64 rounded-lg border-dashed border-2 border-[#E6EEF8] flex items-center justify-center text-[#9CA3AF]">Web chat widget placeholder</div>
          </div>
        </section>

      </main>

      <footer className="mt-12 border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-sm text-[#6B7280] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} HearMeOut — All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
