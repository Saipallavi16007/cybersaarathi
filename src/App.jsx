import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const [threatInput, setThreatInput] = useState('')
  const [threatResult, setThreatResult] = useState('')

  const [safePassword, setSafePassword] = useState('')
  const [passwordResult, setPasswordResult] = useState('')

  const [showScams, setShowScams] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const [showReport, setShowReport] = useState(false)
  const [reportName, setReportName] = useState('')
  const [reportEmail, setReportEmail] = useState('')
  const [reportType, setReportType] = useState('')
  const [reportDetails, setReportDetails] = useState('')
  const [reportMessage, setReportMessage] = useState('')

  const [language, setLanguage] = useState('English')

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setMessage('Please enter email and password.')
      return
    }

    setMessage(`Welcome to CyberSaarathi, ${email}!`)
  }

  // THREAT CHECKER
  const checkThreat = () => {
    if (!threatInput.trim()) {
      setThreatResult('⚠️ Please enter a message or URL to check.')
      return
    }

    const text = threatInput.toLowerCase()

    const suspiciousWords = [
      'urgent',
      'verify your account',
      'click here',
      'password',
      'otp',
      'win prize',
      'free money',
      'claim now',
      'limited time',
      'bank account',
      'upi',
      'send money'
    ]

    const foundWords = suspiciousWords.filter((word) =>
      text.includes(word)
    )

    if (foundWords.length >= 2) {
      setThreatResult(
        '🚨 Suspicious! This message may contain phishing or scam indicators. Do not click unknown links or share OTP, passwords or banking details.'
      )
    } else if (foundWords.length === 1) {
      setThreatResult(
        '⚠️ Be Careful! Some suspicious wording was detected. Verify the sender before taking any action.'
      )
    } else {
      setThreatResult(
        '✅ No common warning signs detected. Still verify unknown messages and links before trusting them.'
      )
    }
  }

  // PASSWORD CHECKER
  const checkPassword = () => {
    if (!safePassword) {
      setPasswordResult('⚠️ Please enter a password to check.')
      return
    }

    let score = 0

    if (safePassword.length >= 8) score++
    if (safePassword.length >= 12) score++
    if (/[A-Z]/.test(safePassword)) score++
    if (/[a-z]/.test(safePassword)) score++
    if (/[0-9]/.test(safePassword)) score++
    if (/[^A-Za-z0-9]/.test(safePassword)) score++

    if (score <= 2) {
      setPasswordResult(
        '🔴 Weak Password — Use at least 8 characters with uppercase, lowercase, numbers and special characters.'
      )
    } else if (score <= 4) {
      setPasswordResult(
        '🟡 Medium Password — Add more characters and a combination of numbers and special characters.'
      )
    } else {
      setPasswordResult(
        '🟢 Strong Password — Good combination of length, letters, numbers and special characters.'
      )
    }
  }

  // LEARN TOPICS
  const learnTopics = [
    {
      icon: '🔐',
      title: 'Cyber Security Basics',
      description:
        'Learn the basic concepts of cyber security and how to protect your digital information.',
      points: [
        'Use strong and unique passwords',
        'Keep software and devices updated',
        'Use trusted websites and applications',
        'Avoid sharing sensitive information'
      ]
    },
    {
      icon: '🎣',
      title: 'Phishing',
      description:
        'Phishing uses fake messages or websites to trick people into sharing personal information.',
      points: [
        'Check the sender carefully',
        'Avoid unknown links',
        'Do not share OTP or passwords',
        'Verify important requests directly'
      ]
    },
    {
      icon: '🔑',
      title: 'Password Safety',
      description:
        'Strong passwords help protect your accounts from unauthorized access.',
      points: [
        'Use long passwords',
        'Use different passwords for accounts',
        'Include numbers and special characters',
        'Consider using a password manager'
      ]
    },
    {
      icon: '📱',
      title: 'Safe Social Media',
      description:
        'Protect your personal information while using social media platforms.',
      points: [
        'Use privacy settings',
        'Avoid sharing sensitive details',
        'Accept requests from people you know',
        'Think before posting personal information'
      ]
    },
    {
      icon: '💳',
      title: 'Online Payment Safety',
      description:
        'Follow safe practices while using UPI, cards and other online payment methods.',
      points: [
        'Never share your UPI PIN',
        'Check the receiver before paying',
        'Do not approve unknown requests',
        'Use official banking applications'
      ]
    },
    {
      icon: '🛡️',
      title: 'Privacy Protection',
      description:
        'Learn how to control and protect your personal information online.',
      points: [
        'Share only necessary information',
        'Review app permissions',
        'Use secure connections',
        'Log out from shared devices'
      ]
    }
  ]

  // REPORT THREAT
  const submitReport = (e) => {
    e.preventDefault()

    if (
      !reportName.trim() ||
      !reportEmail.trim() ||
      !reportType ||
      !reportDetails.trim()
    ) {
      setReportMessage(
        '⚠️ Please fill in all the required fields.'
      )
      return
    }

    setReportMessage(
      `✅ Report submitted successfully, ${reportName}! Thank you for helping improve cyber safety.`
    )

    setReportName('')
    setReportEmail('')
    setReportType('')
    setReportDetails('')
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          🛡️ CyberSaarathi
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#learn">Learn</a>
          <a href="#tools">Tools</a>
          <a href="#emergency">Emergency</a>
          <a href="#about">About</a>
        </div>

        <a href="#login" className="login-btn">
          Login
        </a>

      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-text">

          <p className="welcome">
            WELCOME TO CYBERSAARATHI
          </p>

          <h1>
            Your Digital Safety
            <br />
            <span>Companion</span>
          </h1>

          <p className="description">
            Learn, protect and stay safe in the digital world.
            CyberSaarathi helps you understand cyber threats
            and build safe online habits.
          </p>

          <div className="buttons">

            <a href="#tools" className="primary-btn">
              Get Started
            </a>

            <a href="#learn" className="secondary-btn">
              Learn More
            </a>

          </div>

        </div>


        <div className="hero-card">

          <div className="shield">
            🛡️
          </div>

          <h2>
            Stay Cyber Safe
          </h2>

          <p>
            Protect your identity, data and online accounts
            from digital threats.
          </p>

        </div>

      </section>


      {/* LEARN */}
      <section className="features" id="learn">

        <p className="section-label">
          LEARN & PROTECT
        </p>

        <h2>
          Cyber Security Learning
        </h2>

        <p className="learn-intro">
          Select a topic to learn important cyber safety practices.
        </p>

        <div className="feature-container">

          {learnTopics.map((topic, index) => (

            <div
              className="feature-card"
              key={index}
              onClick={() =>
                setSelectedTopic(
                  selectedTopic === index ? null : index
                )
              }
            >

              <div className="icon">
                {topic.icon}
              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <button className="learn-btn">
                {selectedTopic === index
                  ? 'Hide Details'
                  : 'Learn More'}
              </button>

              {selectedTopic === index && (

                <div className="learn-details">

                  <h4>
                    Stay Safe:
                  </h4>

                  {topic.points.map((point, pointIndex) => (
                    <p key={pointIndex}>
                      ✓ {point}
                    </p>
                  ))}

                </div>

              )}

            </div>

          ))}


          {/* REPORT THREATS */}

          <div
            className="feature-card report-card"
            onClick={() => {
              setShowReport(!showReport)
              setReportMessage('')
            }}
          >

            <div className="icon">
              🚨
            </div>

            <h3>
              Report Threats
            </h3>

            <p>
              Report suspicious messages, scams,
              fake calls or other cyber incidents.
            </p>

            <button className="learn-btn">
              {showReport ? 'Close Report' : 'Report Now'}
            </button>

          </div>

        </div>


        {/* REPORT FORM */}

        {showReport && (

          <div className="report-form">

            <div className="report-icon">
              🚨
            </div>

            <h2>
              Report a Cyber Threat
            </h2>

            <p>
              Provide basic details about the suspicious incident.
            </p>

            <form onSubmit={submitReport}>

              <input
                type="text"
                placeholder="Enter your name"
                value={reportName}
                onChange={(e) =>
                  setReportName(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={reportEmail}
                onChange={(e) =>
                  setReportEmail(e.target.value)
                }
              />

              <select
                value={reportType}
                onChange={(e) =>
                  setReportType(e.target.value)
                }
              >

                <option value="">
                  Select Threat Type
                </option>

                <option value="Phishing">
                  Phishing
                </option>

                <option value="OTP Scam">
                  OTP Scam
                </option>

                <option value="UPI Scam">
                  UPI Scam
                </option>

                <option value="Fake Call">
                  Fake Call
                </option>

                <option value="Job Scam">
                  Job Scam
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

              <textarea
                placeholder="Describe what happened..."
                value={reportDetails}
                onChange={(e) =>
                  setReportDetails(e.target.value)
                }
              />

              <button
                type="submit"
                className="report-submit"
              >
                Submit Report
              </button>

            </form>

            {reportMessage && (
              <div className="report-message">
                {reportMessage}
              </div>
            )}

          </div>

        )}

      </section>


      {/* TOOLS */}
      <section className="tools-section" id="tools">

        <p className="section-label">
          STAY PROTECTED
        </p>

        <h2>
          Cyber Safety Tools
        </h2>


        {/* THREAT CHECKER */}

        <div className="threat-checker">

          <div className="tool-icon">
            🔎
          </div>

          <h3>
            Threat Checker
          </h3>

          <p>
            Enter a suspicious message or URL
            to check for common scam indicators.
          </p>

          <textarea
            className="threat-input"
            placeholder="Paste a suspicious message or URL here..."
            value={threatInput}
            onChange={(e) => setThreatInput(e.target.value)}
          />

          <button
            className="tool-btn"
            onClick={checkThreat}
          >
            Check Threat
          </button>

          {threatResult && (
            <div className="threat-result">
              {threatResult}
            </div>
          )}

        </div>


        {/* PASSWORD SAFETY */}

        <div className="password-checker">

          <div className="tool-icon">
            🔑
          </div>

          <h3>
            Password Safety
          </h3>

          <p>
            Check your password strength and learn
            how to create a safer password.
          </p>

          <input
            type="password"
            className="password-input"
            placeholder="Enter a password to check"
            value={safePassword}
            onChange={(e) => setSafePassword(e.target.value)}
          />

          <button
            className="tool-btn"
            onClick={checkPassword}
          >
            Check Password
          </button>

          {passwordResult && (
            <div className="password-result">
              {passwordResult}
            </div>
          )}

          <div className="password-tips">

            <h4>
              Strong Password Tips
            </h4>

            <p>✓ Use at least 8–12 characters</p>
            <p>✓ Include uppercase and lowercase letters</p>
            <p>✓ Add numbers</p>
            <p>✓ Add special characters</p>
            <p>✓ Avoid names and easy-to-guess words</p>

          </div>

        </div>


        {/* SCAM AWARENESS */}

        <div className="scam-card">

          <div className="tool-icon">
            🚨
          </div>

          <h3>
            Scam Awareness
          </h3>

          <p>
            Learn about common online scams,
            their warning signs and how to stay safe.
          </p>

          <button
            className="tool-btn"
            onClick={() => setShowScams(!showScams)}
          >
            {showScams ? 'Hide Scams' : 'Explore Scams'}
          </button>

        </div>


        {/* SCAM TOPICS */}

        {showScams && (

          <div className="scam-container">

            <div className="scam-topic">
              <div className="scam-icon">📱</div>
              <h3>OTP Scams</h3>
              <p>
                Scammers may pretend to be bank employees
                and ask for your OTP.
              </p>
              <strong>Stay Safe:</strong>
              <span>Never share your OTP with anyone.</span>
            </div>

            <div className="scam-topic">
              <div className="scam-icon">💳</div>
              <h3>UPI Scams</h3>
              <p>
                Fraudsters may send fake payment requests
                or trick users into approving transactions.
              </p>
              <strong>Stay Safe:</strong>
              <span>Check payment details before approving.</span>
            </div>

            <div className="scam-topic">
              <div className="scam-icon">🎁</div>
              <h3>Prize Scams</h3>
              <p>
                Fake messages may claim that you have won
                a prize and ask for money.
              </p>
              <strong>Stay Safe:</strong>
              <span>Do not pay money to claim an unexpected prize.</span>
            </div>

            <div className="scam-topic">
              <div className="scam-icon">🔗</div>
              <h3>Phishing Links</h3>
              <p>
                Fake websites can be used to steal
                login or financial information.
              </p>
              <strong>Stay Safe:</strong>
              <span>Avoid unknown links and verify the website.</span>
            </div>

            <div className="scam-topic">
              <div className="scam-icon">💼</div>
              <h3>Job Scams</h3>
              <p>
                Fake job offers may ask for registration
                fees or personal information.
              </p>
              <strong>Stay Safe:</strong>
              <span>Verify the company before sharing information.</span>
            </div>

            <div className="scam-topic">
              <div className="scam-icon">📞</div>
              <h3>Fake Calls</h3>
              <p>
                Fraudsters may impersonate banks,
                police or delivery services.
              </p>
              <strong>Stay Safe:</strong>
              <span>End suspicious calls and contact the organization directly.</span>
            </div>

          </div>

        )}

      </section>


      {/* EMERGENCY HELP */}
      <section className="emergency-section" id="emergency">

        <p className="section-label">
          EMERGENCY SUPPORT
        </p>

        <h2>
          Need Help? We Are Here.
        </h2>

        <p className="emergency-intro">
          If you face cyber fraud or suspicious online activity,
          use the official support options below.
        </p>


        <div className="emergency-container">

          <div className="emergency-card">

            <div className="emergency-icon">
              🚨
            </div>

            <h3>
              Cyber Crime Helpline
            </h3>

            <p>
              For reporting cyber financial fraud and
              other cyber crime incidents.
            </p>

            <a
              href="tel:1930"
              className="contact-btn"
            >
              📞 Call 1930
            </a>

          </div>


          <div className="emergency-card">

            <div className="emergency-icon">
              👮
            </div>

            <h3>
              Police Emergency
            </h3>

            <p>
              For emergencies requiring immediate
              police assistance.
            </p>

            <a
              href="tel:112"
              className="contact-btn"
            >
              📞 Call 112
            </a>

          </div>


          <div className="emergency-card">

            <div className="emergency-icon">
              🌐
            </div>

            <h3>
              Report Cyber Crime
            </h3>

            <p>
              Visit the official National Cyber Crime
              Reporting Portal.
            </p>

            <a
              href="https://www.cybercrime.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              🌐 Open Portal
            </a>

          </div>

        </div>


        {/* LANGUAGE SUPPORT */}

        <div className="language-box">

          <h3>
            🌐 Choose Your Language
          </h3>

          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >

            <option value="English">
              🇬🇧 English
            </option>

            <option value="Telugu">
              🇮🇳 తెలుగు - Telugu
            </option>

            <option value="Hindi">
              🇮🇳 हिन्दी - Hindi
            </option>

          </select>

          <p>
            Selected Language: <strong>{language}</strong>
          </p>

          <p>
            Language support helps users understand
            cyber safety information more easily.
          </p>

        </div>


        {/* IMPORTANT CONTACTS */}

        <div className="contacts-box">

          <h3>
            📞 Important Contacts
          </h3>

          <div className="contact-list">

            <div>
              <strong>
                Cyber Crime Helpline
              </strong>
              <span>
                1930 — For cyber crime reporting
              </span>
            </div>

            <div>
              <strong>
                Police Emergency
              </strong>
              <span>
                112 — Emergency assistance
              </span>
            </div>

            <div>
              <strong>
                Cyber Crime Portal
              </strong>
              <span>
                National Cyber Crime Reporting Portal
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* LOGIN */}

      <section className="login-section" id="login">

        <div className="login-box">

          <div className="login-icon">
            🛡️
          </div>

          <h2>
            Welcome Back
          </h2>

          <p>
            Login to continue your CyberSaarathi journey.
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login-submit"
            >
              Login
            </button>

          </form>

          {message && (
            <p className="login-message">
              {message}
            </p>
          )}

          <p className="login-note">
            New user? Start learning with CyberSaarathi.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about" id="about">

        <p className="section-label">
          ABOUT US
        </p>

        <h2>
          About CyberSaarathi
        </h2>

        <p className="about-text">
          CyberSaarathi is a digital safety awareness platform
          designed to help people learn about cyber security,
          identify online risks and stay protected in the
          digital world.
        </p>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          🛡️ CyberSaarathi
        </div>

        <p>
          Stay Safe. Stay Smart. Stay Secure.
        </p>

        <p className="copyright">
          © 2026 CyberSaarathi. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default App