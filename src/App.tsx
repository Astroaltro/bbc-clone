import { Search, User, Globe } from 'lucide-react'
import './App.css'

export default function App() {
  const navItems = ['Home', 'News', 'Sport', 'Worklife', 'Travel', 'Future', 'More']

  const newsItems = [
    { id: 1, title: 'Global leaders gather for climate summit', category: 'World', time: '2 hours ago', image: 'https://placehold.co/300x200/bb2222/white?text=Climate' },
    { id: 2, title: 'Stock markets rally on positive economic data', category: 'Business', time: '3 hours ago', image: 'https://placehold.co/300x200/333333/white?text=Markets' },
    { id: 3, title: 'New research on aging published', category: 'Science & Environment', time: '5 hours ago', image: 'https://placehold.co/300x200/3366cc/white?text=Science' },
  ]

  return (
    <div className="bbc-app">
      {/* Header */}
      <header className="bbc-header">
        <div className="header-top">
          <div className="bbc-logo">
            <span className="logo-text">BBC</span>
          </div>
          <nav className="bbc-nav">
            {navItems.map(item => (
              <a key={item} href="#" className="nav-item">{item}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="search-btn"><Search size={20} /></button>
            <button className="lang-btn"><Globe size={16} /> <span>English</span></button>
            <button className="account-btn"><User size={18} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bbc-hero">
        <div className="hero-grid">
          <article className="hero-main">
            <img src={newsItems[0].image} alt={newsItems[0].title} />
            <span className="tag">World</span>
            <h1>{newsItems[0].title}</h1>
            <p>World leaders convene to discuss urgent climate action as extreme weather events intensify globally.</p>
          </article>
          <div className="hero-secondary">
            <article className="secondary-item">
              <img src={newsItems[1].image} alt={newsItems[1].title} />
              <div>
                <span className="tag">Business</span>
                <h3>{newsItems[1].title}</h3>
              </div>
            </article>
            <article className="secondary-item">
              <img src={newsItems[2].image} alt={newsItems[2].title} />
              <div>
                <span className="tag">Science</span>
                <h3>{newsItems[2].title}</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="bbc-main">
        <h2>Latest News</h2>
        <div className="news-grid">
          {[...newsItems, {id:4, title:'Tech giants announce new partnerships', category:'Technology', time:'6 hours ago', image:'https://placehold.co/300x200/551a8b/white?text=Tech'}].map(item => (
            <article key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />
              <span className="tag">{item.category}</span>
              <h3>{item.title}</h3>
              <span className="time">{item.time}</span>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}