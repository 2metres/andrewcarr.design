import cc from 'classcat'

const Header = ({
  title,
  subtitle,
}) => (
  <header className="px-12 py-24">
    <div className="container mx-auto">
      <h1
        className={cc([
          'text-5xl',
          'font-display',
          'leading-none',
          'tracking-tight',
          'mb-6',
        ])}
      >
        { title }
      </h1>
      <h2
        className={cc([
          'text-lg',
          'font-display',
          'text-gray-600',
        ])}
      >
        { subtitle }
      </h2>
    </div>
  </header>
)

export default Header