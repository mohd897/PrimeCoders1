# OmniGen AI - One-Click Launcher
# This script starts both the backend and frontend in separate processes.

Write-Host "🚀 Starting OmniGen AI..." -ForegroundColor Cyan

# 1. Start Backend in a New Window
Write-Host "📦 Starting Backend Server (Port 5001)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm start" -WindowStyle Normal

# 2. Wait a second for the backend to initialize
Start-Sleep -Seconds 2

# 3. Start Frontend in a New Window
Write-Host "🌐 Starting Frontend Server (Port 5173)..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev" -WindowStyle Normal

Write-Host "`n✅ Both servers are launching in separate windows." -ForegroundColor Magenta
Write-Host "🔗 Access your dashboard at: http://localhost:5173" -ForegroundColor BrightCyan
Write-Host "`nDo not close the new PowerShell windows while using the site." -ForegroundColor Gray
