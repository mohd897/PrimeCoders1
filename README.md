# OmniGen AI — Diagnostic Profiler & Drug Discovery Dashboard

OmniGen AI is a professional medical intelligence platform for diagnostics and drug candidate discovery, powered by Google Gemini AI.

---

## 🚀 Quick Start — Run Commands

### Step 1: Install Dependencies

Open **two separate terminals** and run:

**Terminal 1 — Backend:**
```bash
cd backend
npm install
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
```

---

### Step 2: Configure API Key

Inside the `backend/` folder, create a `.env` file (copy from `.env.example`):

```bash
# backend/.env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

> 💡 Get your free API key at: https://aistudio.google.com/app/apikey

---

### Step 3: Start the Servers

**Terminal 1 — Start Backend (Port 5001):**
```bash
cd backend
npm start
```

**Terminal 2 — Start Frontend (Port 5173):**
```bash
cd frontend
npm run dev
```

---

### Step 4: Open in Browser

```
http://localhost:5173
```

---

## ✨ Features

### 🩺 Diagnostic Profiler
- **Patient Input**: Enter name, age, health condition, symptoms, and duration
- **AI Risk Assessment**: Calculates recovery probability and condition severity
- **Smart Warning System**: Auto-flags High Risk / Low Confidence scenarios
- **Outcome Summary Card**: Quick interpretation — Safe / Caution / Critical / Emergency
- **Counterfactual Engine**: "What if" simulations (e.g. *"If health were Good → Recovery +12%, Risk -8%"*)
- **Future Projection**: Estimates severity increase if untreated over 3–5 days
- **Export Report**: Downloads a `.txt` diagnostic report with patient name + full outcome

### 🔬 Drug Discovery Dashboard
- **CSV Upload**: Upload drug candidate datasets for instant analysis
- **Toxicity Pie Chart**: Full-width interactive donut chart of toxicity distribution
- **Efficacy Benchmark**: Circular gauge showing top candidate efficacy %
- **AI Drug Discovery Assistant**: Click to let AI identify the top 2–3 best candidates from your data
- **AI Strategic Summary**: Click to get a full cohort trend analysis and strategic recommendation
- **Candidate Grid**: Search, filter by efficacy/toxicity sliders, and export filtered data as CSV

### 🤖 AI Chatbot
- Floating chatbot button (bottom-right)
- Medical symptom checker powered by Gemini
- Quick question buttons: "Why this result?", "Is it safe?", "What if health improves?"

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Node.js + Express |
| AI Engine | Google Gemini (`@google/genai`) |
| CSV Parsing | PapaParse |
| HTTP Client | Axios |

---

## 📁 Project Structure

```
Drug Risk/
├── backend/
│   ├── controllers/
│   │   ├── chatController.js      # AI chat + dashboard AI logic
│   │   └── decisionController.js  # Diagnostic calculation engine
│   ├── routes/
│   │   ├── chatRoutes.js          # /api/chat, /api/dashboard-ai
│   │   └── decisionRoutes.js      # /api/calculate
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBot.jsx        # Floating AI chatbot
│   │   │   ├── DrugDashboard.jsx  # Drug discovery tab
│   │   │   ├── InputForm.jsx      # Patient input form
│   │   │   └── ResultDisplay.jsx  # Diagnostic results + export
│   │   └── App.jsx                # Main app + Outcome Summary + Counterfactual
│   └── package.json
└── README.md
```

---

> ⚠️ **Disclaimer:** OmniGen AI is a simulation and research tool. It is NOT intended for real medical diagnosis or treatment. Always consult a licensed healthcare professional.
