import cc from 'classcat'

const Header = ({
  title,
  subtitle,
}) => (
  <header className="p-12">
    <div className="container mx-auto">
      <h1
        className={cc([
          'text-6xl',
          'font-display',
          'leading-none',
          'mb-6',
        ])}
      >
        { title }
      </h1>
      <h2
        className={cc([
          'text-lg',
          'font-body',
          'text-gray-700',
        ])}
      >
        { subtitle }
      </h2>
    </div>
  </header>
)

export default Header