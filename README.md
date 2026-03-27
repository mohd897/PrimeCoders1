# OmniGen AI - Diagnostic Profiler & Drug Discovery Dashboard

OmniGen AI is a cutting-edge platform designed for medical professionals and researchers to run intelligent diagnostic assessments and discover viable drug candidates securely from a unified, native dashboard.

## Features

### 1. Diagnostic Profiler
- **Intelligent Risk Assessment**: Evaluates health conditions based on age, health status, and symptoms to project probability of recovery vs condition severity.
- **Counterfactual Engine**: A "What if" logic engine that simulates alternate realities natively based on different age or health parameters to contextualize risks.
- **AI Chatbot Integration**: Context-aware AI assistant utilizing Google Gemini to provide interactive medical advice and deep diagnosis explanation.
- **Smart Warning System**: Dynamic visual warnings automatically trigger depending on the calculated risk factor, flagging critical conditions natively on the UI.
- **One-Click Export**: Easily generate standardized, downloadable `.txt` reports encapsulating the patient query and diagnosis rationale directly from the dashboard.

### 2. Discovery Dashboard
- **Drug Candidate Screening Grid**: Upload massive CSV datasets and filter through thousands of drug candidates using exact sliders for "Min Efficacy" and "Max Toxicity".
- **Visual Matrix**: Showcases compound toxicity visually utilizing a unified dual-pane Radar & interactive Pie Chart layout highlighting distribution fractions (e.g. pulmonary vs cardiotoxicity).
- **Global CSV Extraction**: A clean instant-CSV exporter for the heavily-filtered drug data table, generating blobs without requiring a server backend.

## Tech Stack
- **Frontend**: React (Vite UI), TailwindCSS, Recharts (Data Visualizations), Lucide-React
- **Backend**: Node.js, Express, `@google/genai` (Google Gemini Engine)
- **Data Engineering**: PapaParse (Hyper-fast local CSV parsing framework)

## Deployment / Local Setup
1. Duplicate `.env.example` in backend into `.env` and assign your Google Key (`GEMINI_API_KEY`).
2. Run `npm install` inside both `frontend/` and `backend/` independently.
3. To start using the product, initialize `npm run dev` in both your client terminal and server terminal.
